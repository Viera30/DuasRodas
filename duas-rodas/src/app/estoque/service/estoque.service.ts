import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iestoque } from './../interface/estoque.interface';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {
  private apiUrl = 'http://localhost:3000/estoque'; // substitua pela URL do seu servidor JSON
  private itemParaEditar!: Iestoque;

  constructor(private http: HttpClient) { }

  getEstoque(): Observable<Iestoque[]> {
    return this.http.get<Iestoque[]>(this.apiUrl);
  }

  getProduto(codigo: number): Observable<Iestoque> {
    return this.http.get<Iestoque>(`${this.apiUrl}/${codigo}`);
  }

  createProduto(produto: Iestoque): Observable<Iestoque> {
    return this.http.post<Iestoque>(this.apiUrl, produto);
  }

  updateProduto(produto: Iestoque): Observable<Iestoque> {
    return this.http.put<Iestoque>(`${this.apiUrl}/${produto.codigo}`, produto);
  }

  deleteProduto(codigo: number): Observable<Iestoque> {
    return this.http.delete<Iestoque>(`${this.apiUrl}/${codigo}`);
  }

  setItemParaEditar(item: Iestoque): void {
    this.itemParaEditar = item;
  }

  getItemParaEditar(): Iestoque {
    return this.itemParaEditar;
  }
}
