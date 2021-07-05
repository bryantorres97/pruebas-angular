import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit, OnDestroy {
  pedidos$: Subscription = new Subscription();
  pedidos: any[] = [];
  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.pedidos$ = this.chatService.getPedidos().subscribe((pedido: any) => {
      this.pedidos.push(pedido);
      console.log(this.pedidos);
      // setTimeout(() => {
      //   this.elemento.scrollTop = this.elemento.scrollHeight;
      // }, 50);
    });
  }

  ngOnDestroy() {
    this.pedidos$.unsubscribe();
  }
}
