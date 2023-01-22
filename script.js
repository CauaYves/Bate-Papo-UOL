//variáveis globais
const main = document.querySelector('main');
const userName = prompt('Qual seu nome?');
const objName = {name:userName};
let lastMsg = '';
let lastTime = 0;


function sendMsg(){  //INCOMPLETA

    let msg = document.getElementById('itext');
    if(msg.value === ''){
        alert('campo de mensagem vazio')
    }else{
        let obj = {
            from: userName,
            to: Todos,
            text: msg.value,
            type: "message" // 
        }
        const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', obj);
        msg.value = ''
    }

}

function updateMsg(){

    lastMsg = main.childNodes[main.childNodes.length - 2]
    lastTime = lastMsg.getAttribute('data-time')  
    searchMsg()

}

function showMsg(res) {//consertar a lógica para que as mensagens continuem sendo exibidas.

    let time;
    let user;
    let text;
    let type;
    let dataTime = 0;

    for(let i = 0; i < res.data.length; i++ ){

        time = res.data[i].time;
        user = res.data[i].from;
        text = res.data[i].text;
        type = res.data[i].type;
        dataTime = res.data[i].time[6];

        displayOnChat(time, user, text, type, dataTime)

   }
    
}

function searchMsg(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(showMsg)
}

let dataAtual = new Date();
let horas = dataAtual.getHours();
let min = dataAtual.getMinutes();
let sec = dataAtual.getSeconds();
let time = `${horas}:${min}:${sec}`

function sucess(){
    searchMsg()
}

function fail(){ //OK

    objName.name = prompt('Nome indisponível, insira outro')
    joinChat()

}
function onLine(){//OK

    axios.post('https://mock-api.driven.com.br/api/v6/uol/status', objName)
    console.log("online")
}

function displayOnChat(time ,userName, message, type, dataTime) { //NOT OK

    main.innerHTML += 
        `
        <div class="msg ${type} data-time="${dataTime}" data-test="message"">
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

function joinChat(){//OK

    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', objName)
    promise.then(sucess)
    promise.catch(fail)

}
setInterval(onLine, 5000)

//realocar joinChat() para iniciar
joinChat()