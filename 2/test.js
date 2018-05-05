// class Turtle {
//     constructor(x,y,){
//         this.x = x,
//         this.y = y,
//     }
//         this.start = [y[x]]
// }

class Turtle {
    constructor(x,y){
        this.x = x,
        this.y = y
        this.location = {'x': x, 'y': y}
        this.direction = "e";
        this.walked=[]
    }
    //rewrite as case and switch
    right(){
        if (this.direction === "e"){
            return this.direction === "s"
        }else if (this.direction === "s"){
            return this.direction === "w"
        }else if (this.direction === "w"){
            return this.direction === "n"
        }else if (this.direction === "n"){
            return this.direction === "e"
        }else{
            console.log("Invalid direction, resetting to East")
            return this.direction === "e"
        }
    }
    left(){
        if (this.direction === "e"){
            return this.direction === "n"
        }else if (this.direction === "n"){
            return this.direction === "w"
        }else if (this.direction === "w"){
            return this.direction === "s"
        }else if (this.direction === "s"){
            return this.direction === "e"
        }else{
            console.log("Invalid direction, resetting to East")
            return this.direction === "e"
        }
    }
    
    // this.walked =[];
    allPoints(pt){
        return this.walked.push(pt);
    }
    
    forward(steps) {
        for (let i = 0; i < steps; i++) {
            this.allPoints(this.location)
            if (this.direction === "e") {
                this.location = Object.assign({},
                    this.location, {
                        x: this.location['x'] + 1
                    }
                )
            }
            else if (this.direction === "s") {
                this.location = Object.assign({},
                    this.location, {
                        x: this.location['y'] + 1
                    }
                )
            }
            else if (this.direction === "w") {
                this.location = Object.assign({},
                    this.location, {
                        x: this.location['x'] - 1
                    }
                )
            }
            else if (this.direction === "n") {
                this.location = Object.assign({},
                    this.location, {
                        x: this.location['y'] - 1
                    }
                )
            }
        }
        return this;
    }

let board = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

const first = new Turtle(3,2)

first.forward(3);
  

console.log(first);