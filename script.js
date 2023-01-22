//variáveis globais
const userName = prompt('Qual seu nome?');
const objName = {name:userName};
const main = document.querySelector('main');

function reload() {
    alert('Usuário deslogado, recarregando...')
    window.location.reload()
}

function sendMsg(){

    let msg = document.getElementById('itext');
    if(msg.value === ''){
        alert('campo de mensagem vazio')
    }else{
        let obj = {
            from: userName,
            to: 'todos',
            text: msg.value,
            type: "message" // 
        }
        const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', obj);
        promise.then(searchMsg)
        promise.catch(reload)
        msg.value = ''
    }

}

function displayChat(from, text, time, to, type) {

    main.innerHTML += 
        `
            <div class="msg ${type}" data-test="message">
                <p class="hour">
                    (${time})
                </p>
                <p class="text">
                    <span>
                        ${from}
                    </span>
                    ${text}
                </p>    
            </div>
        `
        window.scroll({
            top: 3900,
        })
}
function sendToArr(res) {

    main.innerHTML = ''
    let arr = res.data;
    for(let i = 0; i < 100; i++){

        let from = arr[i].from;
        let text = arr[i].text;
        let time = arr[i].time;
        let to = arr[i].to;
        let type = arr[i].type;

        if( type === 'status' || type === 'message' ){
            displayChat(from, text, time, to, type)
        }else if(type === 'private_message' && (userName === to || userName === from)){
            displayChat(from, text, time, to, type)
        }
    }
}

function searchMsg(){
    const promise = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    promise.then(sendToArr)
    promise.then(setInterval(searchMsg ,3000))
}

let dataAtual = new Date();
let horas = dataAtual.getHours();
let min = dataAtual.getMinutes();
let sec = dataAtual.getSeconds();
let time = `${horas}:${min}:${sec}`;

function fail(){ 

    objName.name = prompt('Nome indisponível, insira outro')
    joinChat()

}
function onLine(){
    axios.post('https://mock-api.driven.com.br/api/v6/uol/status', objName)
}

function joinChat(){

    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', objName)
    promise.then(searchMsg)

}
setInterval(onLine, 5000)
joinChat()
