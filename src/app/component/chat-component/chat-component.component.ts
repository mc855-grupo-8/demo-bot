import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent {
  model: any = {
    date: new Date(),
    reply: false,
    user: {
      name: 'Bot',
      avatar: 'https://i.gifer.com/no.gif',
    }
  }

  messageList: any = {
    "introduction": {
      ...this.model,
      text: "Seja bem-vindo ao Ambulatório da pediatria, poderia informar sobre você? "+
            "Digite um dos números abaixo.\n"+
            "1. Sou paciente e é minha primeira vez no HC\n"+
            "2. Sou paciente cadastrado\n"+
            "3. Estou levando um paciente",
      options: ['im-pacient-non-registered', 'im-pacient-registered'],
    },
    "im-pacient-non-registered": {
      ...this.model,
      text: "Pacientes não registrados precisam passar na faixa amarela para realizar o seu cadastro antes de fazer sua consulta na pediatria.\n" +
            "Certifique-se que trouxe um comprovante de identidade com foto, comprovante de endereço e tenha um email válido \n" +
            "Uma vez feito o cadastro, qual a razão da visita ao Ambulatório?\n" +
            "1. Consulta \n" +
            "2. Preciso remarcar consulta, pegar um relatório ou tirar uma receita\n" +
            "3. Preciso de um medicamento, teste, curativo ou outro procedimento\n",
      options: ['exam-type', 'talk-to-reception', 'wait'],
    },
    "im-pacient-registered": {
      ...this.model,
      text: "Qual o motivo da visita?" +
            "1. Consulta \n" +
            "2. Remarcação de consulta, relatório ou receita\n" +
            "3. Preciso de medicamento, teste ou curativo\n"
      ,
      options: ['exam-type', 'talk-to-reception', 'wait'],
    },
    "exam-type": {
      ...this.model,
      text: "Sua consulta foi agendada?\n" +
            "1. Sim, agendei minha consulta e recebi pelo email \n" +
            "2. Não, minha consulta é um encaixe por email\n" +
            "3. Não agendei minha consulta e não recebi email\n"
      ,
      options: ['scheduled-exam', 'not-scheduled-exam-by-email', 'not-scheduled-exam'],
    },
    "scheduled-exam": {
      ...this.model,
      text: "Retire sua senha física, aguarde para ser atendido e certifique-se que tem seu documento de identidade com foto e o email usado no agendamento.\n",
      options: ['finish'],
    },
    "not-scheduled-exam-by-email": {
      ...this.model,
      text: "Dirija-se à recepção da faixa amarela para registrar sua consulta no sistema. Uma vez finalizado, dirija-se à faixa cinza para ser atendido\n"
      ,
      options: ['finish'],
    },
    "not-scheduled-exam": {
      ...this.model,
      text: "Entre em contato com a recepção para que possa ser atendido o mais rápido possível\n"
      ,
      options: ['finish'],
    },
    "finish": {
      ...this.model,
      text: "Despedida\n"
    }
  };

  messages: any[] = [];

  lastMessage: any;

  sendReply(reply: string){
    const optionValue: any = this.lastMessage?.options[parseInt(reply)-1];
    if (!!this.messageList[optionValue]){
      this.messages.push({
        text: this.messageList[optionValue].text,
        date: new Date(),
        type: 'text',
        reply: false,
        options: this.messageList[optionValue]?.options,
        user: {
          name: 'Visitante',
          avatar: 'https://i.gifer.com/no.gif',
        },
      });
      this.lastMessage = this.messages.slice(-1)[0];
    } else {
      this.messages.push({
        text: "Opção inválida, digite um número válido",
        date: new Date(),
        type: 'text',
        reply: false,
        user: {
          name: 'Bot',
          avatar: 'https://i.gifer.com/no.gif',
        },
      });
    }
  }

  sendMessage(event: any) {
    this.messages.push({
      text: event.message,
      date: new Date(),
      type: 'text',
      reply: true,
      user: {
        name: 'Visitante',
        avatar: 'https://i.gifer.com/no.gif',
      },
    });
    this.sendReply(event.message);
  }

  constructor() {
    this.messages.push(this.messageList['introduction']);
    this.lastMessage = this.messages.slice(-1)[0];
  }
}
