let button1 = document.getElementById('op1')
let button2 = document.getElementById('op2')
let button3 = document.getElementById('op3')
let button4 = document.getElementById('op4')

let questionsSite = [button1.textContent, button2.textContent, button3.textContent, button4.textContent]
let currentQuestion = 0
let victory = false
let question = document.getElementById('ques')

const questions = ['Qual é o maior oceano da Terra? ', 'Qual é o maior país do mundo em área territorial?'
    , 'Qual é o animal conhecido como o rei da selva?', 'Qual é a cor principal da bandeira do Brasil?'
, 'Qual é o planeta mais próximo do Sol?', 'Quer casar comigo?'
]

const oA = [
    'a) Oceano Atlântico', 'a) China', 'a) Tigre', 'a) Azul', 'a) Terra', 'a) Sim'
]

const oB = [
    'b) Oceano Índico', 'b) Estados Unidos', 'b) Elefante', 'b) Verde', 'b) Vênus', 'b) Não'
]

const oC = [
    'c) Oceano Pacífico', 'c) Rússia', 'c) Leão', 'c) Amarelo', 'c) Mercúrio', 'c) Estou em Duvida'
]

const oD = [
    'd) Oceano Ártico', 'd) Canadá', 'd) Gorila', 'd) Branco', 'd) Marte', 'd Acho que nao'
]


function p1() {


    if (currentQuestion == 0) {
        alert('Resposta Errada')
    } else if (currentQuestion == 1) {
        alert('Resposta Errada')
    } else if (currentQuestion == 2) {
        alert('Resposta Errada')
    } else if (currentQuestion == 3) {
        alert('Resposta Errada')
    } else if (currentQuestion == 4) {
        alert('Resposta Errada')
    } else if (victory == true) {
        window.location.href = 'https://www.youtube.com/watch?v=GxldQ9eX2wo';
    }
}

function p2() {
    if (currentQuestion == 0) {
        alert('Resposta Errada')
    } else if (currentQuestion == 1) {
        alert('Resposta Errada')
    } else if (currentQuestion == 2) {
        alert('Resposta Errada')
    } else if (currentQuestion == 3) {
        alert('Resposta Certa')
        currentQuestion++
        loadQ()
    } else if (currentQuestion == 4) {
        alert('Resposta Errada')
    } else if (victory == true) {
        window.location.href = 'https://www.youtube.com/watch?v=GxldQ9eX2wo';
    }
}

function p3() {
    if (currentQuestion == 0) {
        alert('Resposta Certa')
        currentQuestion++
        loadQ()
    } else if (currentQuestion == 1) {
        alert('Resposta Certa')
        currentQuestion++
        loadQ()
    } else if (currentQuestion == 2) {
        alert('Resposta Certa')
        currentQuestion++
        loadQ()
    } else if (currentQuestion == 3) {
        alert('Resposta Errada')
    } else if (currentQuestion == 4) {
        alert('Resposta Certa')
        currentQuestion++
        loadQ()
        victory = true

    } else if (victory == true) {
        window.location.href = 'https://www.youtube.com/watch?v=GxldQ9eX2wo';
    }
}

function p4() {
    if (currentQuestion == 0) {
        alert('Resposta Errada')
    } else if (currentQuestion == 1) {
        alert('Resposta Errada')
    } else if (currentQuestion == 2) {
        alert('Resposta Errada')
    } else if (currentQuestion == 3) {
        alert('Resposta Errada')
    } else if (currentQuestion == 4) {
        alert('Resposta Errada')
    } else if (victory == true) {
        window.location.href = 'https://www.youtube.com/watch?v=GxldQ9eX2wo';
    }
}

function loadQ() {
    question.innerHTML = questions[currentQuestion]

    button1.textContent = oA[currentQuestion]
    button2.textContent = oB[currentQuestion]
    button3.textContent = oC[currentQuestion]
    button4.textContent = oD[currentQuestion]
}

function sim() {
    if (victory == true) {
        button1.classList.add('sim') 
        button1.textContent = 'a) Sim'
    }
}

function sim2() {
    if (victory == true) {
        button2.classList.add('sim') 
        button2.textContent = 'b) Sim'
    }
}

function sim3() {
    if (victory == true) {
        button3.classList.add('sim') 
        button3.textContent = 'c) Sim'
    }
}

function sim4() {
    if (victory == true) {
        button4.classList.add('sim') 
        button4.textContent = 'd) Sim'
    }
}

function nao() {
    if (victory == true) {
        button1.classList.remove('sim') 
        button1.textContent = 'a) Sim'
    }
}

function nao2() {
    if (victory == true) {
        button2.classList.remove('sim') 
        button2.textContent = 'b) Não'
    }
}

function nao3() {
    if (victory == true) {
        button3.classList.remove('sim') 
        button3.textContent = 'c) Estou em duvida'
    }
}

function nao4() {
    if (victory == true) {
        button4.classList.remove('sim') 
        button4.textContent = 'd) Acho que não'
    }
}