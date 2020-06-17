import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule} from '@angular/http';
import  { LoadComponent } from './load/load.component';
import { HttpClientModule } from '@angular/common/http';
const Route:Routes=[{path:'hi',component:LoadComponent}];
@NgModule({
  declarations: [
    AppComponent,
    LoadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpModule,FormsModule,HttpClientModule,
    AppRoutingModule,RouterModule.forRoot(Route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
