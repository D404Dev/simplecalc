document.querySelector('.addInput').addEventListener('click',add)
document.querySelector('.subInput').addEventListener('click',sub)
document.querySelector('.multInput').addEventListener('click',mult)
document.querySelector('.divideInput').addEventListener('click',divide)

function add(){
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    let sum = num1 + num2
    document.querySelector('#outputHere').innerText = sum
    document.querySelector('#num1').value = ""
    document.querySelector('#num2').value = ""
}

function sub(){
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    let remainder = num1 - num2
    document.querySelector('#outputHere').innerText = remainder
    document.querySelector('#num1').value = ""
    document.querySelector('#num2').value = ""
}

function mult(){
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    let product = num1 * num2
    document.querySelector('#outputHere').innerText = product
    document.querySelector('#num1').value = ""
    document.querySelector('#num2').value = ""
}

function divide(){
    let num1 = Number(document.querySelector('#num1').value)
    let num2 = Number(document.querySelector('#num2').value)
    let quotient = num1 / num2
    document.querySelector('#outputHere').innerText = quotient
    document.querySelector('#num1').value = ""
    document.querySelector('#num2').value = ""
}