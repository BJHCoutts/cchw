let input = process.argv.slice(2);

let boxit = (names) => {

        let lgth = 0;

        for (let name of names) {
            if (name.length > lgth) {
                lgth = name.length;
            }
        }
        // for(let name = 0, name<names.length,name++)
        let step1 = `┏${"-".repeat(lgth)}┓\n`;

        let step2 = "";
        // console.log(names[names.length-1])
            
            // for(let i=0; i<names.length; i+=1){
            //     if (i === names.length){
            //         step2 = `|${name}${" ".repeat(lgth-name.length)}|\n┗${"-".repeat(lgth)}┛`
            //     }else{
            //         step2 += `|${name}${" ".repeat(lgth-name.length)}|\n┣${"-".repeat(lgth)}┫\n`
            //     }
            
            for (let name of names) {
            if(name === names[names.length-1]){

                step2 += `|${name}${" ".repeat(lgth-name.length)}|\n┗${"-".repeat(lgth)}┛`
            }else{
                step2 += `|${name}${" ".repeat(lgth-name.length)}|\n┣${"-".repeat(lgth)}┫\n`
            }
        };

    return step1+step2
}

console.log(boxit(input));

// arr[1.2,3]

// for (const name of input) {
//     console.log(`|${name}|\n`)
// }

// `┏${"-".repeat(name.length)}┓\n`
// }else{
//     let step1= `┣${"-".repeat(name.length)}┫\n`
// }let boxIt = (name) => {

// if (name[0]){
//     let step1= 

// let step2 = `|${name}|\n`

// if (name[name.length]){
//     let step3= `┗${"-".repeat(length)}┛`
// }


// return step1+step2+step3
// }

// console.log(boxIt(input));

//     drawBottomBorder = (length) => {
    //         return `┗${"-".repeat(length)}┛`;
    //     }
    
    //     drawBarsAround = (name) => {
        //         return `|${name}|\n`;
        //     }
        
        //     console.log(length[]);
        //     return drawTopBorder(name.length) + drawBarsAround(name) + drawBottomBorder(name.length);
        
        
        // let step1 = (length1) =>{
        //     if(length1[0]){
        //         let drawTopBorder = (length1) => {
        //         return `┏${"-".repeat(length1)}┓\n`
        //     }
        // }else{
        //     drawMiddleBorder = (length1) => {
        //     return `┣${"-".repeat(length1)}┫\n`
        
        
    
// //     return `
// //   ┏${"-".repeat(num.length)}┓\n
//   |${num}|\n
//   ┣${"-".repeat(num.length)}┫\n
//   |${num}|\n
//   ┗${"-".repeat(num.length)}┛`;
// }
