import * as fs from 'fs';

export function Populate() {
    for(let day = 1; day <= 25; day++){
        fs.writeFileSync(`days/day${day}.ts`, 
        `import { Day } from "./day";

        export default class Day${day} extends Day{
        
            constructor(cookie: string){
                super(2020, ${day}, cookie);
            }
        
            part1(): string {
                let resp = 0;

                return resp.toString();
            }
            part2(): string {
                let resp = 0;

                return resp.toString();
            }
        }`);
    }
}