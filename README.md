![](https://raw.githubusercontent.com/mc855-grupo-8/demo-bot/19-desenvolver-documenta%C3%A7%C3%A3o-no-readme/docs/header.png)

# Seja bem-vindo ao projeto do Chatbot para Ambulatório da Pediatria do HC

Esse projeto foi realizado em conjunto como professor dr. Artur Catto para a disciplina de MC855 - Projetos em Sistemas de Computação no primeiro semestre de 2022.

## Como instalar o projeto

Certifique-se que tem os seguintes pacotes instalados em sua máquina.

1. [Node.js](https://nodejs.org/en/)
2. [Angular 13.3.3](https://angular.io/)
3. [Typescript](https://www.typescriptlang.org/)

## Como rodar o projeto

Uma vez todos os pacotes instalados e o projeto clonado use `ng serve` para rolar localmente em sua máquina, a página estará em `http://localhost:4200/`.

## Criar um novo componente

```
ng generate component component-name
```

# Estrutura do projeto

## Adicionar interação ao chatbot

O chatbot pode ser customizado a partir do objeto `chat-component.component.ts` em `messageList`, que é um json que contém uma lista de interações possíveis.

```
nome-da-mensagem: {
  ...this.model,
  text:
    'Escreva sua mensagem aqui',
  options: [
    'alternativa1',
  ],
},
```

Em `options` contém uma lista de mensagens seguintes, o nome da alternativa é essencial para fazer a busca na lista a partir do seu nome.

## Adicionar uma nova página

Em `app-routing.module.ts`, adicionar um novo path.

```
const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent},
  { path: 'chatbot', component : ChatComponentComponent},
  { path: 'project-credits', component: CreditsComponent},
  { path: '**', component: HomeComponent },
  { path: 'nome-do-path', component: NomeDaComponente }
];
```

Em `home.component.ts` adicionar uma função para navegar.

```
functionRouteName(): void {
  this.router.navigate(['/my-new-route]);
}
```

# Como subir no firebase

Para que o deploy dos arquivos estáticos sejam feitos no firebase, são necessários alguns pré-requisitos. Primeiramente, é necessário que seu usuário google tenha acesso ao projeto criado no firebase. Se não tiver, entre em contato com os mantenedores do projeto.

Após garantido acesso ao dashboard do projeto no firebase, com o `npm` instale o `firebase-tools`:

```
npm install -g firebase-tools
```

Após a instalação do `firebase-tools`, navegue até o diretório raiz do projeto e faça login com o firebase:

```
firebase login
```

Efetuado o login, basta agora iniciar o contexto do firebase para o projeto:

```
firebase init
```

O comando acima apresentará um CLI com várias perguntas para inicialização do contexto dentro do projeto. Será criado na raiz do projeto um diretório de implantação da aplicação (o padrão é `public`) em que deverão ser colocados todos os arquivos estáticos gerados pelo angular e que posteriormente serão implantados durante o processo de deploy.

Para gerar os arquivos estáticos, basta rodar o comando:

```
ng build demo-bot
```

O angular irá gerar os arquivos estáticos dentro da pasta `dist\demo-bot` localizada na raiz do projeto. Copie TODOS os arquivos gerados nesta pasta para o diretório `public` previamente configurado para o firebase.

Depois de copiados os arquivos estáticos, para finalmente efetuar o deploy basta rodar o comando:

```
firebase deploy
```
