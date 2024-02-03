import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEstoqueComponent } from './estoque/estoque.component';
import { EditarEstoqueComponent } from './estoque/editar-estoque/editar-estoque.component';

const routes: Routes = [
  { path: '', component: ListaEstoqueComponent },
  { path: 'editar-estoque/:codigo', component: EditarEstoqueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
