# Google-Forms-to-discord-webhook

Enviar automaticamente respostas do Google Formulários para um canal do Discord

## 💻 Criando a webhook no discord:
1. No Discord, vá até o canal desejado e clique em `Editar canal` (o ícone de engrenagem ⚙️).
2. Vá para `Integrações` -> `Criar Webhook` e configure seu webhook como desejar.
3. Clique no botão `Copiar URL do webhook` e salve em algum lugar.

## 🔧 Instalando o script:

1. No seu Formulário do Google, clique no ícone dos 3 pontos no canto superior direito e escolha `Editor de Script`.
2. Substitua o conteúdo padrão pelo conteúdo de [script.js](https://raw.githubusercontent.com/Chefao-Dev/Google-Forms-to-discord-webhook/main/script.js).
3. Preencha as variáveis ​​com as informações solicitadas.
4. Clique em `Salvar` (ou no ícone de 💾).

## ⚙️ Configurando o trigger event:

1. Passe o mouse sobre os ícones na barra lateral esquerda e clique em `Acionadores` ou `Triggers`.
2. Na próxima janela, clique em `Adicionar acionador` (o botão azul no canto inferior direito).
3. Configure o gatilho conforme mostrado abaixo e salve:
![image](https://cdn.discordapp.com/attachments/1207059178682581044/1261836315364687982/image.png?ex=66946825&is=669316a5&hm=fccd138636fa789884cbe551baefe98e79b678a5ae1ff77c442f03a67cd9f557&)

### 📜 Observações:

Cada valor de campo incorporado do Discord pode conter apenas até 1.024 caracteres, e cada incorporação como um todo pode conter apenas até 6.000 caracteres. Se esses números forem excedidos, a mensagem não será postada.

O script não incorpora nenhum recurso de limite de caracteres porque esse limite pode ser definido diretamente no Formulários Google, que é a forma ideal (ícone dos 3 pontos abaixo de cada resposta -> `Validação de resposta` -> `Contagem máxima de caracteres`).
