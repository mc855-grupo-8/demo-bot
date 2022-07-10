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

// todo