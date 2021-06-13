# Desafio-Tunts

Criar uma aplicação em NodeJs. A aplicação deve ser capaz de ler uma planilha do google sheets, buscar as informações necessárias, calcular e escrever o resultado na planilha.

## Instalaçao

**Pré Requisitos:**
Faz-se necessário a instalaçao do Node no computador (https://nodejs.org/en/)

1. Clonar esse repositório em seu computador
2. Executar o comando:

```bash
  npm install
```


### Configuraçao

1. É necessario a coleta das credenciais da api "Google Sheets" na plataforma para desenvolvedores da google.
    1. Acessar o link https://console.cloud.google.com/apis/library/sheets.googleapis.com/
    2. Selecionar a opçao "Ativar"
    3. Na aba "Credenciais", clicar em "Gerenciar contas de serviço"
    4. Selecionar o botao "Criar conta de serviço e preencher as informaçoes necessárias
    5. Em credenciais novamente, selecionar a credencial de serviço criada
    6. Ir em "Chaves" e criar uma chave
    7. Ao criar a chave, um arquivo .json sera baixado.
    8. Mover o arquivo json para esse projeto dentro da pasta de 'src' e renomear o arquivo para 'credentials'

2. Compartilhar a planilha alvo com o email da conta contina no arquivo "credentials.json"
    1. Abrir o arquivo credentials.json
    2. Copiar o email contido em "client_email"
    3. Compartilhar a planilha alvo com o email copiado com a opçao de "editor"

3. Configurar a planilha alvo e opcionais
    1. Abrir o arquivo "Settings.json"
    2. Informar o ID da planilha alvo em "document-id" (esse id fica no link da url ente /d/...id do documento.../edit/)

### Rodando a aplicação

Após configurar, basta entrar no terminal na pasta do projeto e rodar o comando

```bash
  npm start
```


## Tecnologias

**Principais:**
- NodeJs

**Bibliotecas / Modulos:**
- (Google-Spreadsheet)[https://www.npmjs.com/package/google-spreadsheet]

