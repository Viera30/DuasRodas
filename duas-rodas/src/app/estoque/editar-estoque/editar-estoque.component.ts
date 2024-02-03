import { Component, OnInit } from '@angular/core';
import { EstoqueService } from '../service/estoque.service';
import { Iestoque } from '../interface/estoque.interface';

@Component({
  selector: 'app-editar-estoque',
  templateUrl: './editar-estoque.component.html',
  styleUrls: ['./editar-estoque.component.scss']
})
export class EditarEstoqueComponent implements OnInit {
  estoque!: Iestoque;

  constructor(private estoqueService: EstoqueService) {
    this.estoque = {codigo: 0, descricao: '', preco: 0};
   }

  ngOnInit() {
    this.estoque = this.estoqueService.getItemParaEditar();  }

  save(): void {
    if (this.estoque.codigo) {
      this.estoqueService.updateProduto(this.estoque).subscribe();
    } else {
      this.estoqueService.createProduto(this.estoque).subscribe();
    }
  }

  delete(): void {
    this.estoqueService.deleteProduto(this.estoque.codigo).subscribe();
  }
}
