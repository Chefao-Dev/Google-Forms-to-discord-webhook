# Google-Forms-to-discord-webhook

Enviar automaticamente respostas do Google Formulários para um canal do Discord

# Instructions:

## Criando a webhook no discord

1. No Discord, vá até o canal desejado e clique em `Editar canal` (o ícone de engrenagem).
2. Vá para `Webhooks` -> `Criar Webhook` e configure seu webhook como desejar.
2. Copie o `WEBHOOK URL` e salve-o em algum lugar.

## Instalando o script

1. No seu Formulário do Google, clique no ícone dos 3 pontos no canto superior direito e escolha `Editor de Script`.
2. Substitua o conteúdo padrão pelo conteúdo de [script.js](https://raw.githubusercontent.com/Chefao-Dev/Google-Forms-to-discord-webhook/main/script.js).
3. Preencha as variáveis ​​com as informações solicitadas.
4. Clique em `Salvar`.

## Configurando o trigger event

1. Passe o mouse sobre os ícones na barra lateral esquerda e clique em `Triggers`.
2. Na próxima janela, clique em `Add Trigger` (o botão azul no canto inferior direito).
3. Configure o gatilho conforme mostrado abaixo e salve:
![image](https://github.com/ManuelFte/Google-Forms-to-Discord/assets/68722732/6455de65-9b29-4ba7-8ba7-3a0b767c0673)

### Notas

Cada valor de campo incorporado do Discord pode conter apenas até 1.024 caracteres, e cada incorporação como um todo pode conter apenas até 6.000 caracteres. Se esses números forem excedidos, a mensagem não será postada.

O script não incorpora nenhum recurso de limite de caracteres porque esse limite pode ser definido diretamente no Formulários Google, que é a forma ideal (ícone dos 3 pontos abaixo de cada resposta -> `Validação de resposta` -> `Contagem máxima de caracteres`).
