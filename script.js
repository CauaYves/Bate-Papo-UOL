//variáveis globais
const main = document.querySelector('main');
let userName;
let objName;
function reload() {
    alert('Usuário deslogado, recarregando...')
    window.location.reload()
}

function sendMsg(){
    console.log('enviando mensagem')
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
                    para
                  <strong>${to}</strong>
                    ${text}
                </p>    
            </div>
        `
        window.scroll({
            top: 3900,
        })
}
function sendToArr(res) {
    console.log('enviando para o HTML')
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
    promise.then(setTimeout(searchMsg ,3000))
    console.log('procurando mensagens')
}

function fail(){ 
    joinChat()
    console.log('falhou ao entrar no chat')

}
function onLine(){
    axios.post('https://mock-api.driven.com.br/api/v6/uol/status', objName)
    console.log('online')
}

function joinChat(){
    console.log('entrou no chat')
    userName = prompt('Qual seu nome?');
    objName = {name:userName};
    const promise = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', objName)
    promise.then(searchMsg)
    promise.then(setInterval(onLine, 5000))
    promise.catch(fail)

}

joinChat()
