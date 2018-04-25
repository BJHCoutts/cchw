let input = process.argv.slice(2);

let boxit = (names) => {

    let lgth = 0;

    for (let name of names) {
        if (name.length > lgth) {
            lgth = name.length;
        }
    }
    let step1 = `┏${"-".repeat(lgth)}┓\n`;

    let step2 = "";

    for (let name of names) {
        if (name === names[names.length - 1]) {

            step2 += `|${name}${" ".repeat(lgth-name.length)}|\n┗${"-".repeat(lgth)}┛`
        } else {
            step2 += `|${name}${" ".repeat(lgth-name.length)}|\n┣${"-".repeat(lgth)}┫\n`
        }
    };

    return step1 + step2
}

console.log(boxit(input));