import { Fetch, Submit } from "../AOCApi";

export abstract class Day {

    protected input!: string[];
    protected year: number;
    protected day: number;
    protected cookie: string;

    constructor(year: number, day: number, cookie: string){
        this.year = year;
        this.day = day;
        this.cookie = cookie;
    }

    abstract part1(): string;
    abstract part2(): string;
    
    public async Submit(part: number) : Promise<string> {
        if(part == 1){
            let data = await Submit(this.year, this.day, this.cookie, this.part1());
            return data;
        }
        else if(part == 2){
            let data = await Submit(this.year, this.day, this.cookie, this.part2(), false);
            return data;
        }
        else {
            return "Invalid part";
        }
        
    }
}

export async function GetDay(day: number, cookie: string): Promise<Day> {
    const dayClass = require(`./day${day}`);
    let toreturn = new dayClass.default(cookie);
    toreturn.input = await Fetch(2020, day, cookie);
    return toreturn;
}