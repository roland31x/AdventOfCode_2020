import { Day } from "./day";

        export default class Day4 extends Day{
        
            constructor(cookie: string){
                super(2020, 4, cookie);
            }

            private validfields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
            private optional = ["cid"];
        
            part1(): string {
                let resp = 0;

                let total = [];
                let current : string[] = [];

                this.input.map((line) => {
                    if(line == ""){
                        total.push(current);
                        current = [];
                    }else{
                        current.push(...line.split(" "));
                    }
                });
                total.push(current);

                total.forEach((passport) => {
                    let ok = 0;
                    passport.forEach((field) => {
                        let key = field.split(":")[0];
                        if(this.validfields.includes(key)){
                            ok++;
                        }
                    })
                    if(ok == this.validfields.length){
                        resp++;
                    }
                })

                return resp.toString();
            }
            part2(): string {
                let resp = 0;

                let total = [];
                let current : string[] = [];

                this.input.map((line) => {
                    if(line == ""){
                        total.push(current);
                        current = [];
                    }else{
                        current.push(...line.split(" "));
                    }
                });
                total.push(current);

                total.forEach((passport) => {

                    let ok = 0;
                    passport.forEach((field) => {
                        let key = field.split(":")[0];
                        let value = field.split(":")[1];
                        if(this.validfields.includes(key)){
                            switch(key){
                                case "byr":
                                    if(value.length == 4 && parseInt(value) >= 1920 && parseInt(value) <= 2002){
                                        ok++;
                                    }
                                    break;
                                case "iyr":
                                    if(value.length == 4 && parseInt(value) >= 2010 && parseInt(value) <= 2020){
                                        ok++;
                                    }
                                    break;
                                case "eyr":
                                    if(value.length == 4 && parseInt(value) >= 2020 && parseInt(value) <= 2030){
                                        ok++;
                                    }
                                    break;
                                case "hgt":
                                    let unit = value.slice(-2);
                                    let height = parseInt(value.slice(0, -2));
                                    if(unit == "cm" && height >= 150 && height <= 193){
                                        ok++;
                                    }
                                    if(unit == "in" && height >= 59 && height <= 76){
                                        ok++;
                                    }
                                    break;
                                case "hcl":
                                    if(value.match(/^#[0-9a-f]{6}$/)){
                                        ok++;
                                    }
                                    break;
                                case "ecl":
                                    if(["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value)){
                                        ok++;
                                    }
                                    break;
                                case "pid":
                                    if(value.match(/^[0-9]{9}$/)){
                                        ok++;
                                    }
                                    break;
                                default:
                                    break;
                            }
                        }
                    });

                    if(ok == this.validfields.length){
                        resp++;
                    }
                })

                return resp.toString();
            }
        }