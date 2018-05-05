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
        }else if (this.direction = "n"){
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
        }else if (this.direction = "s"){
            return this.direction === "e"
        }else{
            console.log("Invalid direction, resetting to East")
            return this.direction === "e"
        }
    }
    
    // this.walked =[];
    allPoints(pt){
        return walked.push(pt);
    }
    
    forward(steps){
        allPoints(this.location)
        if(this.direction === "e"){
            return this.location [][+1]
        }
    }
}

let board = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
];

