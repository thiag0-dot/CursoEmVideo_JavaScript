let num = [5, 8, 9, 3]
num.push(1)
num.sort()
console.log(`Tamanho do vetor: ${num.length}`)
console.log(`${num}`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log('Ovalor não foi encontrado!')
}else {
    console.log(`O valor 8 está na posição ${pos}`)
}