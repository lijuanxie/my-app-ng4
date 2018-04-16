import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingModule } from './demo-routing.module';
import { ListService } from './services/list.service';
import { OrderComponent } from './components/order/order.component';
import { ListComponent } from './components/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';
import { EditResolver } from './components/edit/edit.resolver';
import { AddFormComponent } from './components/addForm/addForm.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [
    ListService,
    EditResolver  //resolver是servive
  ],
  declarations: [
    OrderComponent,
    ListComponent,
    EditComponent,
    AddFormComponent,
  ]
})
export class DemoModule { }
