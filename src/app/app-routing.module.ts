import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';

export const routes: Routes = [
  {
    path: '', redirectTo: 'demo', pathMatch: 'full'
  },
  {
    path: 'demo', loadChildren: 'app/appModules/demo/demo.module#DemoModule',
    // data: { title: '用户管理' }, canActivate: [AuthService]
  },

  {
    path: '**', component: NotfoundComponent
    // data: { title: '404' }
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
