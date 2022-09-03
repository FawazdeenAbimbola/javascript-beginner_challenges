
function oneToFiveTable(n) {
    for(let i = 0; i <=10; i++) {
        var row = n + " * " + i + " = " + n * i;
        console.log(row);
    }
}

for(let i = 0; i <= 5; i++){
    oneToFiveTable(i);
    console.log(" ");
}