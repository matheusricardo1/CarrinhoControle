# Projeto Controle Remoto - Carro RobotMaker
- Desenvolvimento de um site com o objetivo de ser um controle remoto para um carrinho de robótica.
- Carrinho cedido pela equipe de robótica, RobotMakers de Manacapuru-AM. 

## Por que foi desenvolvido?
- Utilizava-se um aplicativo de celular cujo a experiencia de uso não era boa.
- Foi pensando nisso que eu desenvolvi este site, que funciona como um controle remoto, que envia dados para o carrinho.

## Como funciona?

### Lógica do carrinho _(Definida pela RobotMakers)_
- O carrinho possui o Esp8266 como módulo de controle, que permite a gestão de redes Wi-Fi.
- No carrinho configura-se uma rede Wi-Fi e um servidor web, fazendo com que dispositos possam se conectar a rede Wi-fi do carrinho.
- Os dispositivos conectados a rede Wi-Fi do carrinho também tem acesso ao servidor web, encontrado na via `http://gateway_padrão_do_wifi_carrinho/`.
- No carrinho configura-se o recebimento de parâmetros via query strings, para que com base no parâmetro, o carrinho pode tome decisões. 
- Após a definição de cada parametro e sua respectiva ação nos motores do carrinho, agora pode-se usar o site carrinho controle para controlar o carrinho via requisições com parâmetros.

### Lógica do site
- O site foi pré-definido para funcionar somente usando o teclado, com os principais comandos:

| Teclas | Comandos | 
|--------|----------|
| W      | Frente   | 
| S      | Atrás    | 
| A      | Esquerda | 
| D      | Direita  |

- Para o controle funcionar, deve-se conectar o dispositivo na mesma rede Wi-Fi do carrinho.
- Quando os comando são acionados, o servidor envia uma request para o carrinho, a request tem esse formato: `http://gateway_padrão_do_wifi_carrinho/?State=${comando}`.

## Resultados

- Site Controle V1 Vídeo Teste
* ![CarrinhoTeste](https://github.com/user-attachments/assets/331ffacd-ca54-4cbe-933b-46b066dc3088)

- Site Controle V2 Vídeo Teste 1
* ![CarrinhoTeste1](https://github.com/user-attachments/assets/d57c4a25-7b73-4873-862c-37e1379e55d7)

- Site Controle V2 Vídeo Teste 2
* ![CarrinhoTeste2](https://github.com/user-attachments/assets/4c7b76a1-6155-45b4-9828-4e1321db3ea4)
