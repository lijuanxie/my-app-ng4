import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TopnavComponent } from './components/topnav/topnav.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EditComponent } from './appModules/demo/components/edit/edit.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    NotfoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgZorroAntdModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
