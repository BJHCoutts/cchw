class Turtle {
    constructor(x,y){
        this.x = x,
        this.y = y
        this.location = {'x': x, 'y': y}
        this.direction = "e";
        this.walked=[]
        this.currentTurnstate = 0;
    }
    //rewrite as case and switch
    turn(n) {
      const turnState = {
        0: 'n',
        1: 'e',
        2: 's',
        3: 'w',
      }

      this.currentTurnstate = Math.abs(this.currentTurnstate + n)
      
      if (turnState[this.currentTurnstate]) {
        this.direction = turnState[this.currentTurnstate];
      } else {
        this.direction = turnState[0];
      }
    }
    right(n){
        this.turn(n);
        // if (this.direction === "e"){
        //     return this.direction === "s"
        // }else if (this.direction === "s"){
        //     return this.direction === "w"
        // }else if (this.direction === "w"){
        //     return this.direction === "n"
        // }else if (this.direction === "n"){
        //     return this.direction === "e"
        // }else{
        //     console.log("Invalid direction, resetting to East")
        //     return this.direction === "e"
        // }
        console.log(this.direction)
        return this
    }
    left(n){
        this.turn((n * -1))
        // if (this.direction === "e"){
        //     return this.direction === "n"
        // }else if (this.direction === "n"){
        //     return this.direction === "w"
        // }else if (this.direction === "w"){
        //     return this.direction === "s"
        // }else if (this.direction === "s"){
        //     return this.direction === "e"
        // }else{
        //     console.log("Invalid direction, resetting to East")
        //     return this.direction === "e"
        // }
        console.log(this.direction)
        return this
    }
    
    // this.walked =[];
    allPoints(pt){
        return this.walked.push(pt);
    }
    
    forward(steps){
        this.allPoints(this.location)
        if(this.direction === "e"){
            this.location = Object.assign(
              {},
              this.location,
              {
                y: this.location['y'] + 1
              }
            )
        }
        
      return this;
    }
    
}

let board = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

const first = new Turtle(3,2)

first
  .forward(1)
  .left(2)
  

console.log(first);