import * as fs from 'fs';


export async function Fetch(year: number, day: number, cookie: string) : Promise<string[]>{

    const path = `inputs/day${day}/input.txt`;

    if(fs.existsSync(path)){
        let toreturn = fs.readFileSync(path, 'utf-8').split("\n");
        toreturn.pop();
        return toreturn;
    }
    
    const url = `https://adventofcode.com/${year}/day/${day}/input`;
    console.log(url);
    const resp = await fetch(url,
    { 
        headers: {
            'User-Agent': "roland31x/node-api v1.0",
            'Content-Type': 'text/plain',
            Cookie: "session=" + cookie
        }        
    });

    const data = await resp.text();
    if(!fs.existsSync(`inputs/day${day}`)){
        fs.mkdirSync(`inputs/day${day}`);
    }


    fs.writeFileSync(path, data);

    let toreturn = fs.readFileSync(path, 'utf-8').split("\n");
    toreturn.pop();
    return toreturn;
}

export async function Submit(year: number, day: number, cookie: string, answer: string, part1 : boolean = true) : Promise<string>{
    
    const url = `https://adventofcode.com/${year}/day/${day}/answer`;

    console.log("Submitting: " + answer + " for part " + (part1 ? 1 : 2) + " of day " + day + " in year " + year + ".");
    
    const resp = await fetch(url,
    { 
        method: 'POST',
        headers: {
            'User-Agent': "roland31x/node-api v1.0",
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie: "session=" + cookie
        },
        body: `level=${part1 ? 1 : 2}&answer=${answer}`
    });
    
    let data = await resp.text();
    data = data.split("<main>")[1].split("</main>")[0].replace(/<[^>]*>?/gm, '');

    return data;
}