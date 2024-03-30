import { Fetch } from './AOCApi.js';
import { Day, GetDay } from './days/day.js';

const COOKIE = "your-cookie-here";

main();

// year is 2020
async function main(){
    const day = 3; // select day here

    let current = await GetDay(day, COOKIE);
    
    console.log(current.part1());
    console.log(current.part2());

    //let ans1 = await current.Submit(1);
    //console.log(ans1);

    //let ans2 = await current.Submit(2);
    //console.log(ans2);
    
}