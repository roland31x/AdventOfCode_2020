import { Day } from "./day.js";

export default class Day2 extends Day {

    constructor(cookie: string){
        super(2020, 2, cookie);
    }

    part1(): string {
        let resp = 0;

        this.input.forEach((line) => {
            let min = parseInt(line.split("-")[0]);
            let max = parseInt(line.split("-")[1].split(" ")[0]);
            let letter = line.split(":")[0].split(" ")[1];
            let password = line.split(":")[1].trim();

            let count = 0;
            for(let i = 0; i < password.length; i++){
                if(password[i] == letter){
                    count++;
                }
            }

            if(count >= min && count <= max){
                resp++;
            }

        });

        return resp.toString();
    }

    part2(): string {
        let resp = 0;

        this.input.forEach((line) => {
            let first = parseInt(line.split("-")[0]);
            let second = parseInt(line.split("-")[1].split(" ")[0]);
            let letter = line.split(":")[0].split(" ")[1];
            let password = line.split(":")[1].trim();

            if((password[first - 1] == letter) !== (password[second - 1] == letter)){
                resp++;
            }
        });

        return resp.toString();
    }
}