<h1 align="center">Bate-Papo UOL</h1> <br>
<p align="center">projeto baseado no chat da UOL, porém o layout é diferente, feito para fins didáticos sobre o uso de API's</p>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [Javascript](https://www.javascript.com/)
- [HTML](https://pt.wikipedia.org/wiki/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [API's](https://www.redhat.com/pt-br/topics/api/what-are-application-programming-interfaces)
- [API](https://mock-api.driven.com.br/api/v6/uol/ )

### Features

<h3>Features</h3>
<h4>- Geral</h4>
    - [x]  Não utilize nenhuma biblioteca para implementar este projeto (jquery, lodash, react, etc), nem outras linguagens que compilem para JavaScript  <br>(TypeScript, Clojure, ELM, etc), somente JavaScript puro.
    - [x]  Seu projeto deverá ser desenvolvido utilizando Git e GitHub, em um repositório público. <br>
    - [x]  A cada requisito implementado faça um *commit* com uma mensagem descritiva do que você evoluiu. <br>
- *Layout*
    - [x]  Aplicar *layout* para mobile, seguindo o Figma. Não é necessário implementar uma versão para *desktop*. <br>
- *Chat*
    - [x]  Ao entrar na sala, este deve carregar as mensagens do servidor quando o usuário estiver logado e exibi-las conforme *layout* fornecido. <br>
    - [x]  Existem três tipos de mensagem:
        - Mensagens de status (**Entrou** ou **Saiu** da sala): deve ter o fundo cinza;
        - Mensagens reservadas (**Reservadamente**): deve ter o fundo rosa;
        - Mensagens normais: devem ter o fundo branco.
    - [x]  A cada três segundos o site deve recarregar as mensagens do servidor para manter sempre atualizado. <br>
    - [x]  O *chat* deverá ter rolagem automática por padrão, ou seja, sempre que novas mensagens forem adicionadas ao final do *chat* ele deve *scrollar* para o  <br>final.
     
    - [x]  As mensagens com **Reservadamente** só devem ser exibidas se o nome do destinatário ou remetente for igual ao nome do usuário que está usando o chat (ou senão ele poderia ver as mensagens reservadas para outras pessoas). <br>

<h4>- Entrada na sala</h4>
    - [x]  Ao entrar no site, o usuário deverá ser perguntado com um `prompt` ****seu lindo nome.
    - [x]  Após inserção do nome, este deve ser enviado para o servidor pra cadastrar o usuário:
        - Caso o servidor responda com sucesso, o usuário poderá entrar na sala;
        - Caso o servidor responda com erro, deve-se pedir para o usuário digitar outro nome, pois este já está em uso;
    - [x]  Enquanto o usuário estiver na sala, a cada 5 segundos o site deve avisar ao servidor que o usuário ainda está presente, ou senão será considerado que "Saiu da sala".
<h3>- Envio de mensagem</h3>
    - [x]  Ao enviar uma mensagem, esta deve ser enviada para o servidor: <br>
        - Caso o servidor responda com sucesso, você deve obter novamente as mensagens do servidor e atualizar o *chat;*
        - Caso o servidor responda com erro, significa que esse usuário não está mais na sala e a página deve ser atualizada (e com isso voltando pra etapa de pedir o nome).
    - [x]  Nesse envio, deve ser informado o remetente, o destinatário e se a mensagem é reservada ou não. <br>
        - Escolher um destinatário e se a mensagem é reservada ou pública é um requisito bônus (ver abaixo). Logo, se você não implementar o bônus, sempre envie destinatário como Todos e a mensagem como pública.

### Como rodar o projeto:

<h3>Pré-requisitos e como rodar a aplicação/testes</h3>


Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como, [VSCode](https://code.visualstudio.com/).

O live-server atualiza a pagina em tempo real e facilita a execução do programa:
[liveserver](https://github.com/ritwickdey/vscode-live-server-plus-plus).

```bash
# Clone este repositório
$ git clone <https://github.com/CauaYves/projeto5-batepapouol.git1>

# Abra a pasta com o nome do projeto 

# Clique em "go live" no canto inferior direito para abrir o projeto no navegador.