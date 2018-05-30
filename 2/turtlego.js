class Turtle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.location = {
            'x': x,
            'y': y
        };
        this.direction = "e";
        this.walked = [];
        this.xMax = 0;
        this.xArray = [];
        this.yMax = 0;
        this.yArray = [];
    }



    right() {

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
    left() {

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
        return this
    }

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
        for(let i of this.walked){
          this.xArray.push(i.x)
        }
        this.xMax = Math.max(...this.xArray);
        return this;
      }
      
      maxY(){
        for(let i of this.walked){
          this.yArray.push(i.y)
        }
        this.yMax = Math.max(...this.yArray);
        return this;
      }

      print(){
        this.allPoints(this.location);
        this.maxX();
        this.maxY();
        let myArray = arrayGen(this.xMax,this.yMax);
      
        for (let position of this.walked) {
          myArray[position.y][position.x] = 1
        }
        for (let arr of myArray){
          arr.join(" ");
        }
        console.log(myArray.join("\n"));
        return this;
      }
}

function arrayGen(width, height) {
  let array = [], row = [];
  while (width-- > -1) row.push(0);
  while (height-- > -1) array.push(row.slice());
  return array;
}

const first = new Turtle(0, 0)

first.forward(3).right().forward(2).left().forward(1).print();