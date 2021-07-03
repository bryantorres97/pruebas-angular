import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  texto: string;
  nombre: string;
  mensajes$: Subscription = new Subscription();
  mensajes: any[] = [];
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.mensajes$ = this.chatService.getMessages().subscribe((msg: any) => {
      this.mensajes.push(msg);
      console.log(this.mensajes);
      // setTimeout(() => {
      //   this.elemento.scrollTop = this.elemento.scrollHeight;
      // }, 50);
    });
  }

  ngOnDestroy() {
    this.mensajes$.unsubscribe();
  }

  enviarMensaje() {
    this.chatService.sendMessage('Admin', this.nombre, this.texto);
    this.texto = '';
    this.nombre = '';
  }
}
