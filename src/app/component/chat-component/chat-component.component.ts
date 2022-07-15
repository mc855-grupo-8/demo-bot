import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css'],
})
export class ChatComponentComponent {
  botUser: any = {
    name: 'Bot',
    avatar: 'https://cdn-icons-png.flaticon.com/512/204/204245.png',
  };

  visitanteUser: any = {
    name: 'Visitante',
    avatar: 'https://i.gifer.com/no.gif',
  };

  model: any = {
    date: new Date(),
    reply: false,
    user: this.botUser,
  };

  messageList: any = {
    introduction: {
      ...this.model,
      text:
        'Seja bem-vindo ao Ambulatório da Pediatria. Digite uma das opções abaixo para continuar:\n\n' +
        '1. Sou paciente e esta é a minha primeira vez no Hospital das Clínicas.\n' +
        '2. Sou paciente e já possuo cadastrado.\n' +
        '3. Estou levando um paciente.',
      options: [
        'im-pacient-non-registered',
        'im-pacient-registered',
        'im-taking-pacient',
      ],
    },
    'im-pacient-non-registered': {
      ...this.model,
      text:
        'Pacientes não registrados precisam passar na faixa amarela para realizar o seu cadastro antes de fazer sua consulta na pediatria.\n\n' +
        'Certifique-se que trouxe um comprovante de identidade com foto, comprovante de endereço e tenha um email válido.\n\n' +
        'Uma vez feito o cadastro, qual a razão da visita ao ambulatório?\n\n' +
        '1. Consulta.\n' +
        '2. Preciso remarcar uma consulta, pegar um relatório ou tirar uma receita.\n' +
        '3. Preciso de um medicamento, teste, curativo ou outro procedimento.\n',
      options: ['exam-type', 'talk-to-reception', 'wait'],
    },
    'im-pacient-registered': {
      ...this.model,
      text:
        'Qual o motivo da visita?\n\n' +
        '1. Consulta.\n' +
        '2. Remarcação de consulta, relatório ou receita.\n' +
        '3. Preciso de medicamento, teste ou curativo.\n',
      options: ['exam-type', 'talk-to-reception', 'wait'],
    },
    'talk-to-reception': {
      ...this.model,
      text: 'Por favor dirija-se a sala 23 para ser atendido/a o mais rápido possível.',
      options: ['finish'],
    },
    wait: {
      ...this.model,
      text: 'Por favor, reserve seu HC, que é o número dado pela recepção e em breve você será atendido.',
      options: ['finish'],
    },
    'im-taking-pacient': {
      ...this.model,
      text:
        'É a primeira visita do paciente?\n\n' +
        '1. Sim, é a primeira visita do paciente para consulta.\n' +
        '2. Não, o paciente já realizou uma ou mais consultas antes.\n',
      options: ['im-pacient-non-registered', 'im-pacient-registered'],
    },
    'exam-type': {
      ...this.model,
      text:
        'Sua consulta foi agendada?\n\n' +
        '1. Sim, agendei minha consulta e recebi pelo email.\n' +
        '2. Não, minha consulta é um encaixe por email.\n' +
        '3. Não agendei minha consulta e não recebi email.\n',
      options: [
        'scheduled-exam',
        'not-scheduled-exam-by-email',
        'not-scheduled-exam',
      ],
    },
    'scheduled-exam': {
      ...this.model,
      text: 'Retire sua senha física e aguarde para ser atendido. Por favor, certifique-se que seu documento de identidade com foto e o email usado no agendamento estão com você.\n',
      options: ['finish'],
    },
    'not-scheduled-exam-by-email': {
      ...this.model,
      text: 'Dirija-se à recepção da faixa amarela para registrar sua consulta no sistema. Uma vez finalizado, dirija-se à faixa cinza para ser atendido.\n',
      options: ['finish'],
    },
    'not-scheduled-exam': {
      ...this.model,
      text: 'Entre em contato com a recepção para que possa ser atendido o mais rápido possível.\n',
      options: ['finish'],
    },
    'finish': {
      ...this.model,
      text: 'Agradecemos por usar o nosso chatbot!\n\nCaso não tenha encontrado sua dúvida, consulte nosso FAQ na página inicial.',
      options: ['feedback'],
    },
    'feedback': {
      ...this.model,
      text: 'Nós amamos ouvir os nossos pacientes, nos envie uma sugestão ou crítica através do link abaixo.',
      options: ['restart']
    },
    'restart': {
      ...this.model,
      text: 'Caso deseje reiniciar o bot, digite 1',
      options: ['introduction'],
    }
  };

  messages: any[] = [];

  lastMessage: any;

  sendReply(reply: string) {
    const optionValue: any = this.lastMessage?.options[parseInt(reply) - 1];
    if (!!this.messageList[optionValue]) {
      this.pushMessage(
        this.messageList[optionValue].text,
        false,
        this.botUser,
        this.messageList[optionValue]?.options
      );

      this.lastMessage = this.messages.slice(-1)[0];
      this.sendNextOption(reply);
    } else {
      this.sendInvalidOption();
    }
  }

  sendNextOption(reply: string) {
    const optionValue: any = this.lastMessage?.options[parseInt(reply) - 1];

    if (this.lastMessage?.options[0] == 'finish') {
      setTimeout(() => {
        this.pushMessage(
          this.messageList['finish'].text,
          false,
          this.botUser,
          this.messageList['finish']?.options,
        );

      setTimeout(() => {
        this.pushMessage(
          this.messageList['restart'].text,
          false,
          this.botUser,
          this.messageList['restart']?.options
        );
        this.lastMessage = this.messages.slice(-1)[0];
      }, 2000);

        this.lastMessage = this.messages.slice(-1)[0];
      }, 2000);

      setTimeout(() => {
        this.pushMessage(
          this.messageList['feedback'].text,
          false,
          this.botUser,
          this.messageList['feedback']?.options,
          "link"
        );
        this.lastMessage = this.messages.slice(-1)[0];
      }, 2000);
    }
  }

  sendInvalidOption() {
    this.pushMessage(
      'Opção inválida, digite um número válido',
      false,
      this.botUser
    );
  }

  pushMessage(
    message: string,
    isReply: boolean,
    iconModel: any,
    options?: any,
    type?: string,
  ) {
    this.messages.push({
      text: message,
      date: new Date(),
      type: type ?? 'text',
      reply: isReply,
      options: options,
      user: iconModel,
    });
  }

  sendMessage(event: any) {
    this.pushMessage(event.message, true, this.visitanteUser);
    this.sendReply(event.message);
  }

  constructor(private router: Router) {
    this.messages.push(this.messageList['introduction']);
    this.lastMessage = this.messages.slice(-1)[0];
  }

  returnMainPage(): void {
    this.router.navigate(['/home']);
  }
}
