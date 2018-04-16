import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { EditResolver } from './components/edit/edit.resolver';
import { AddFormComponent } from './components/addForm/addForm.component';


export const routes: Routes = [
  {
    path: '', redirectTo: 'list', pathMatch: 'full'
  },
  {
    path: 'list', component: ListComponent
  },
  {
    path: 'order', component: OrderComponent
  },
  {
    path: 'edit/:id', component: EditComponent,

    resolve: { item: EditResolver}
  },
  {
    path: 'addForm', component: AddFormComponent,

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
