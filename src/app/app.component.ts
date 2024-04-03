import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastroProdutoComponent, TabelaProdutosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'produtosApp';
}
