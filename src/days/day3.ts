import { Day } from "./day";
export default class Day3 extends Day{

    constructor(cookie: string){
        super(2020, 3, cookie);
    }

    part1(): string {
        let resp = 0;

        let y = 1;
        let x = 3;

        while(y < this.input.length){
            if(this.input[y][x % this.input[y].length] == "#"){
                resp++;
            }
            x += 3;
            y++;
        }

        return resp.toString();
    }

    part2(): string {
        let resp = 1;

        for(let slope of [[1,1], [1,3], [1,5], [1,7], [2,1]]){
            let y = slope[0];
            let x = slope[1];
            let local = 0;

            while(y < this.input.length){
                if(this.input[y][x % this.input[y].length] == "#"){
                    local++;
                }
                y += slope[0];
                x += slope[1];
            }

            resp *= local;
        }

        return resp.toString();
    }
}