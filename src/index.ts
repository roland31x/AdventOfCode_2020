import { Fetch } from './AOCApi.js';
import { Day, GetDay } from './days/day.js';

const COOKIE = "53616c7465645f5f10dc99f465293a56a4f730337b6f4ffa94011951ee71ebd433ce8a99cb8510d1e21a4238fbbc11d584ef638a7e016666bdaebd741f4f76fe";

main();

// year is 2020
async function main(){
    const day = 7; // select day here

    let current = await GetDay(day, COOKIE);
    
    console.log(current.part1());
    console.log(current.part2());

    //let ans1 = await current.Submit(1);
    //console.log(ans1);

    //let ans2 = await current.Submit(2);
    //console.log(ans2);
    
}