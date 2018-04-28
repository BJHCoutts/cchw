class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.location = {
            'x': x,
            'y': y
        };
        this.direction = "e";
        this.walked = []

    }



    right(n) {

        if (this.direction === "e") {
            this.direction = "s"
        } else if (this.direction === "s") {
            this.direction = "w"
        } else if (this.direction === "w") {
            this.direction = "n"
        } else if (this.direction === "n") {
            this.direction = "e"
        } else {
            console.log("Invalid direction, resetting to East")
            this.direction = "e"
        }
        return this
    }
    left(n) {

        if (this.direction === "e") {
            this.direction = "n"
        } else if (this.direction === "n") {
            this.direction = "w"
        } else if (this.direction === "w") {
            this.direction = "s"
        } else if (this.direction === "s") {
            this.direction = "e"
        } else {
            console.log("Invalid direction, resetting to East")
            this.direction = "e"
        }
        console.log(this.direction)
        return this
    }

    //this.walked =[];
    allPoints(pt) {
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
            } else if (this.direction === "s") {
                this.location = Object.assign({},
                    this.location, {
                        y: this.location['y'] + 1
                    }
                )
            } else if (this.direction === "w") {
                this.location = Object.assign({},
                    this.location, {
                        x: this.location['x'] - 1
                    }
                )
            } else if (this.direction === "n") {
                this.location = Object.assign({},
                    this.location, {
                        y: this.location['y'] - 1

                    }
                )
            }
        }
        return this;
    }

    maxX(){
        this.xMax=0;
        for (let i of this.walked){
            if (this.walked[i.x]>this.xMax){
                xMax=i
            }            
        }
        return this.xMax;
    }

    maxY(){
        this.yMax=0;
        for (let i of this.walked){
            if (this.walked[i.y]>this.yMax){
                this.yMax=i
            }            
        }
        return this.yMax;
    }
    
    // arrayGen() {
    //     let this.array = [], this.row = [];
    //     while (this.xMax--) this.row.push(0);
    //     while (this.yMax--) this.array.push(this.row.slice());
    //     return this.array;
    // }

    // print(){
    //         for (let pt of arr){
    //           board[pt.y][pt.x] = 1;
    //         }
    //       }
    // }



}

function arrayGen(width, height) {
  let array = [], row = [];
  while (width--) row.push(0);
  while (height--) array.push(row.slice());
  return array;
}

let myArray = arrayGen(3,5)

const draw = function(arr){
  for(let i of arr){
    myArray[i.y][i.x] = 1;
  }
}

const first = new Turtle(0, 0)

first.forward(3)

let a = arrayGen(5,8);

console.log(first);

a;

const xCoord = walked.map(elem => elem.x)
// returns [x1, x2, x3....]
// Math.max(...xCoord) // Math.max(x1, x2, x3) //Math.max(3, 6, 2, 9)

redo join array into a string with space

