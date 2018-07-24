let fs = require("fs")

console.log(process.argv)

let inicio = fs.readFileSync("inicio.txt").toString()

let fin = fs.readFileSync("fin.txt").toString()

let result = 0;

  for (var i = 0; i < process.argv.length; i++){
    result += Number(process.argv[i]);
}
  console.log(result);