//variáveis globais
const main = document.querySelector('main')
const userName = prompt('Qual seu nome?');
const objName = {name:userName};
let date = new Date();
let hours = date.getHours()
let min = date.getMinutes();
let sec = date.getSeconds();
function show(res) {
    console.log(res)
}
function searchMsg(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(show)
}

function sucess(){
    onLine()
    displayOnChat()
    searchMsg()
    time()
}

function fail(){

    objName.name = prompt('Nome indisponível, insira outro')
    joinChat()

}

function time(){

    if(hours < 10){
        hours.toString()
        hours = '0' + hours
    }
    
}

function verify() {

    axios.post('https://mock-api.driven.com.br/api/v6/uol/status', objName)
    console.log('onLine')


}

function onLine(){

    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', objName)
    promise.then(setInterval(verify, 5000))

}

function displayOnChat() {

    main.innerHTML += 
    `
    <div class="msg action">
        <p class="hour">
            (${hours}:${min}:${sec})
        </p>
        <p class="text">
            <span class="username">
                ${userName}
            </span>
            <span class="actionServer">
                entra na sala...
            </span>
        </p>    
    </div>
    `
}

function joinChat(){

    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', objName)
    promise.then(sucess)
    promise.catch(fail)

}

//realocar joinChat() para iniciar
joinChat()