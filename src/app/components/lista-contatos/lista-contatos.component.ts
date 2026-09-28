import { CommonModule } from '@angular/common';
import {Component,EventEmitter,Input,Output} from '@angular/core';

import { Contato } from '../../models/contato.model';

@Component({
  selector: 'app-lista-contatos',
  imports: [CommonModule],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {
  @Input()
  contatos: Contato[] = [];

  @Output()
  favoritoAlterado: EventEmitter<number> =
    new EventEmitter<number>();

  @Output()
  contatoRemovido: EventEmitter<number> =
    new EventEmitter<number>();

  alterarFavorito(id: number): void {
    this.favoritoAlterado.emit(id);
  }

  removerContato(id: number): void {
    this.contatoRemovido.emit(id);
  }
}