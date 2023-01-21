//variáveis globais
const main = document.querySelector('main');
const msg = document.getElementById('itext').value;
const userName = prompt('Qual seu nome?');
const objName = {name:userName};
let lastMsg = '';
let lastTime = 0;

let dataAtual = new Date();

let horas = dataAtual.getHours();
let min = dataAtual.getMinutes();
let sec = dataAtual.getSeconds();
let i = 0;

let time = `${horas}:${min}:${sec}`

function updateMsg(){

    lastMsg = main.childNodes[main.childNodes.length - 2]
    lastTime = lastMsg.getAttribute('data-time')  
    console.log(lastTime, 'erro')
    searchMsg()

}

function showMsg(res) {//consertar a lógica para que as mensagens continuem sendo exibidas.

    let time;
    let user;
    let text;
    let type;
    let dataTime = 0;
   while( i < res.data.length ){

        time = res.data[i].time;
        user = res.data[i].from;
        text = res.data[i].text;
        type = res.data[i].type;
        dataTime = Number(res.data[i].time[6])
        console.log(dataTime)

        //mostrar no chat somente
        // as msg que tiverem o data-time maior que a res atual
        displayOnChat(time, user, text, type, dataTime)
        i++

   }

   scroll(0,6000)
   setInterval(updateMsg, 3000);

    
}

function searchMsg(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(showMsg)
    promise.catch(searchMsg)
}

function sucess(){
    onLine()
    displayOnChat(time, userName, 'entra na sala...')
    searchMsg()
    time()
}

function fail(){

    objName.name = prompt('Nome indisponível, insira outro')
    joinChat()

}

function verify() {

    axios.post('https://mock-api.driven.com.br/api/v6/uol/status', objName)
    


}

function onLine(){

    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', objName)
    promise.then(setInterval(verify, 5000))
    promise.catch(onLine)

}

function displayOnChat(time ,userName, message, type, dataTime) {

    main.innerHTML += 
        `
        <div class="msg ${type} data-time="${dataTime}" ">
            <p class="hour">
                (${time})
            </p>
            <p class="text">
                <span>
                    ${userName}
                </span>
                ${message}
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