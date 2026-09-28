import {Component,EventEmitter,Output
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Contato } from '../../models/contato.model';

@Component({
  selector: 'app-formulario-contato',
  imports: [FormsModule],
  templateUrl: './formulario-contato.component.html',
  styleUrl: './formulario-contato.component.css'
})
export class FormularioContatoComponent {
  @Output()
  contatoAdicionado: EventEmitter<Contato> =
    new EventEmitter<Contato>();

  nome: string = '';
  telefone: string = '';
  email: string = '';

  get formularioInvalido(): boolean {
    return (
      this.nome.trim() === '' ||
      this.telefone.trim() === '' ||
      this.email.trim() === ''
    );
  }

  adicionarContato(): void {
    if (this.formularioInvalido) {
      return;
    }

    const novoContato: Contato = {
      id: Date.now(),
      nome: this.nome,
      telefone: this.telefone,
      email: this.email,
      favorito: false
    };

    this.contatoAdicionado.emit(novoContato);

    this.limparCampos();
  }

  limparCampos(): void {
    this.nome = '';
    this.telefone = '';
    this.email = '';
  }
}