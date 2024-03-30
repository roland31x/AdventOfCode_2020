import { Day } from "./day.js";

export default class Day1 extends Day {

    constructor(cookie: string){
        super(2020, 1, cookie);
    }

    part1(): string {
        let response = "";
        this.input.forEach((line, index) => {
            this.input.forEach((line2, index2) => {
                if(index != index2){
                    if(parseInt(line) + parseInt(line2) == 2020){
                        response = (parseInt(line) * parseInt(line2)).toString();
                    }
                }
            });
        });

        return response
    }

    part2(): string {
        let response = "";

        this.input.forEach((line, index) => {
            this.input.forEach((line2, index2) => {
                if(index != index2){
                    this.input.forEach((line3, index3) => {
                        if(index != index3 && index2 != index3){
                            if(parseInt(line) + parseInt(line2) + parseInt(line3) == 2020){
                                response = (parseInt(line) * parseInt(line2) * parseInt(line3)).toString();
                            }
                        }
                    });
                }
            });
        });

        return response
    }
}