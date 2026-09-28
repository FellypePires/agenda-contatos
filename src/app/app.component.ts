import { Component } from '@angular/core';
import { Contato } from './models/contato.model';
import { ListaContatosComponent } from './components/lista-contatos/lista-contatos.component';
import { FormularioContatoComponent } from './components/formulario-contato/formulario-contato.component';

@Component({
  selector: 'app-root',
  imports: [ListaContatosComponent,FormularioContatoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo: string = 'Agenda de Contatos';

  descricao: string =
    'Organize seus contatos pessoais e profissionais.';

  contatos: Contato[] = [
  {
    id: 1,
    nome: 'Pedro Kayser',
    telefone: '(44) 99999-1111',
    email: 'pedro@email.com',
    favorito: true
  },
  {
    id: 2,
    nome: 'Fellype Pires',
    telefone: '(44) 99999-2222',
    email: 'fellype@email.com',
    favorito: false
  },
  {
    id: 3,
    nome: 'Steffany Bassi',
    telefone: '(44) 99999-3333',
    email: 'Steffany@email.com',
    favorito: true
  },
  {
    id: 4,
    nome: 'Diego Alves',
    telefone: '(44) 99999-4444',
    email: 'diego@email.com',
    favorito: false
  },
  {
    id: 5,
    nome: 'Eduardo Rocha',
    telefone: '(44) 99999-5555',
    email: 'eduardo@email.com',
    favorito: false
  }
];

adicionarContato(novoContato: Contato): void {
  this.contatos.push(novoContato);
}

alterarFavorito(id: number): void {
  const contatoEncontrado = this.contatos.find(
    (contato) => contato.id === id
  );

  if (contatoEncontrado) {
    contatoEncontrado.favorito =
      !contatoEncontrado.favorito;
  }
}

removerContato(id: number): void {
  this.contatos = this.contatos.filter(
    (contato) => contato.id !== id
  );
}

}