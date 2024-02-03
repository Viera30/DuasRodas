import { Component, OnInit } from '@angular/core';
import { EstoqueService } from './service/estoque.service';
import { Iestoque } from './interface/estoque.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class ListaEstoqueComponent implements OnInit {
  estoque: Iestoque[] = [];

  constructor(private estoqueService: EstoqueService, private router: Router) { }

  ngOnInit() {
    this.getEstoque();
  }

  getEstoque(): void {
    this.estoqueService.getEstoque().subscribe(estoque => this.estoque = estoque);
  }

  incluir(): void {
    this.router.navigate(['/editar-estoque', 0]);  // 0 ou outro valor que represente um novo item
  }

  editar(item: Iestoque): void {
    this.estoqueService.setItemParaEditar(item);
    this.router.navigate(['/editar-estoque', item.codigo]);
  }


  excluir(codigo: number): void {
    this.estoqueService.deleteProduto(codigo).subscribe(() => this.getEstoque());
  }
}
