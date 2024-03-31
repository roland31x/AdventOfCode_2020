import { Day } from "./day";

        export default class Day6 extends Day{
        
            constructor(cookie: string){
                super(2020, 6, cookie);
            }
        
            part1(): string {
                let resp = 0;

                let current = new Set<string>();
                this.input.forEach((line) => {
                    if(line == ""){
                        resp += current.size;
                        current = new Set<string>();
                    }
                    else{
                        for(let i = 0; i < line.length; i++){
                            current.add(line[i]);
                        }
                    }
                });
                resp += current.size;

                return resp.toString();
            }
            part2(): string {
                let resp = 0;

                let current : string[] | null = null;
                this.input.forEach((line) => {
                    if(line == ""){
                        resp += current!.length;
                        current = null;
                    }
                    else{
                        if(current == null){
                            current = [];
                            for(let i = 0; i < line.length; i++){
                                current.push(line[i]);
                            }
                        }
                        else{
                            let temp : string[] = [];
                            for(let i = 0; i < line.length; i++){
                                temp.push(line[i]);
                            }
                            current = current.filter((value) => {
                                return temp.includes(value);
                            });
                        }
                    }
                });

                resp += current!.length;

                return resp.toString();
            }
        }