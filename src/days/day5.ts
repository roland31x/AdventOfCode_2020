import { Day } from "./day";

        export default class Day5 extends Day{
        
            constructor(cookie: string){
                super(2020, 5, cookie);
            }
        
            part1(): string {
                let resp = 0;

                this.input.forEach((line) => {
                    let row = line.slice(0, 7);
                    let startrow = Math.pow(2, 6);

                    for(let i = 0; i < 7; i++){
                        if(row[i] == "B"){
                            startrow += Math.pow(2, 5 - i);               
                        }
                        else{
                            startrow -= Math.pow(2, 5 - i);
                        }
                        
                    }
                    
                    let col = line.slice(7,10);
                    let startcol = Math.pow(2, 2);
                    for(let i = 0; i < 7; i++){
                        if(col[i] == "R"){
                            startcol += Math.pow(2, 1 - i);
                        }
                        else{
                            startcol -= Math.pow(2, 1 - i);
                        }
                    }

                    startrow = Math.floor(startrow);
                    startcol = Math.floor(startcol);

                    let id = startrow * 8 + startcol;

                    if(id > resp){
                        resp = id;
                    }
                });

                return resp.toString();
            }
            part2(): string {
                let resp = 0;

                let seats : boolean[][] = Array.from({length: 128}, () => Array.from({length: 8}, () => false));
                let ids : number[] = [];

                this.input.forEach((line) => {
                    let row = line.slice(0, 7);
                    let startrow = Math.pow(2, 6);

                    for(let i = 0; i < 7; i++){
                        if(row[i] == "B"){
                            startrow += Math.pow(2, 5 - i);               
                        }
                        else{
                            startrow -= Math.pow(2, 5 - i);
                        }
                        
                    }
                    
                    let col = line.slice(7,10);
                    let startcol = Math.pow(2, 2);
                    for(let i = 0; i < 7; i++){
                        if(col[i] == "R"){
                            startcol += Math.pow(2, 1 - i);
                        }
                        else{
                            startcol -= Math.pow(2, 1 - i);
                        }
                    }

                    startrow = Math.floor(startrow);
                    startcol = Math.floor(startcol);

                    let id = startrow * 8 + startcol;
                    ids.push(id);

                    seats[startrow][startcol] = true;

                });

                seats.forEach((rowbool, row) => {
                    if(row == 0 || row == 127){
                        return;
                    }
                    rowbool.forEach((seatbool, col) => {
                        if(!seatbool){
                            let id = row * 8 + col;
                            if(ids.includes(id - 1) && ids.includes(id + 1)){
                                resp = id;
                            }
                        }
                    });
                });

                return resp.toString();
            }
        }