import { Day } from "./day";

        export default class Day7 extends Day{
        
            constructor(cookie: string){
                super(2020, 7, cookie);
            }

            private hasInit = false;
            private bags : Map<string, Bag> = new Map<string, Bag>();
            private getBag(color: string) : Bag{
                if(!this.bags.has(color)){
                    this.bags.set(color, new Bag(color));
                }
                return this.bags.get(color)!;
            }

            private init(){

                if(this.hasInit){
                    return;
                }

                this.input.forEach((line) => {
                    let color = line.split("bags contain")[0].trim();
                    
                    let bag = this.getBag(color);
                    if(line.includes("no other bags")){
                        return;
                    }
                    let children = line.split("contain")[1].trim().split(",");
                    children.forEach((child) => {
                        
                        let number = parseInt(child.trim().split(" ")[0]);
                        let split = child.includes("bags") ? "bags" : "bag";
                        let childColor = child.trim().split(number.toString())[1].split(split)[0].trim();
                        let childBag = this.getBag(childColor);

                        childBag.parents.set(color, bag);
                        bag.children.set(childColor, [childBag, number]);
                    });
                });

                this.hasInit = true;
            }
        
            part1(): string {
                let resp = 0;

                this.init();

                let current = this.getBag("shiny gold");
                let visited = new Set<string>();
                let queue = [current];
                while(queue.length > 0){
                    let current = queue.shift()!;
                    current.parents.forEach((value, key) => {
                        if(!visited.has(key)){
                            visited.add(key);
                            queue.push(value);
                            resp++;
                        }
                    });
                }

                return resp.toString();
            }
            part2(): string {
                let resp = 0;

                this.init();

                let current = this.getBag("shiny gold");

                resp = current.Contains;

                return resp.toString();
            }
        }

        class Bag{
            color: string;
            private contains : number | null = null;

            get Contains() : number {
                if(this.contains != null){
                    return this.contains;
                }

                let actual = 0;

                this.children.forEach((value) => {
                    actual += value[1] * (value[0].Contains + 1);
                });
                
                this.contains = actual;

                return this.contains;
            }
            constructor(color: string){
                this.color = color;
            }
            children : Map<string, [Bag, number]> = new Map<string, [Bag, number]>();
            parents : Map<string, Bag> = new Map<string, Bag>();
        }