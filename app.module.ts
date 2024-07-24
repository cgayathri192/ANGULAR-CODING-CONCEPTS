import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PracticeInterceptor } from './practice.interceptor';
import { PracticeComponent } from './practice/practice.component';
import { MainInterceptor } from './main.interceptor';
import { MainComponent } from './main/main.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { PipeComponent } from './pipe/pipe.component';
import { PipePipe } from './pipe.pipe';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StorageComponent } from './storage/storage.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';












@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent,
    MainComponent,
    ClassComponent,
    StyleComponent,
    PipeComponent,
    PipePipe,
    OneComponent,
    TwoComponent,
    FormsComponent,
    ParentComponent,
    ChildComponent,
    StorageComponent,
    FirstComponent,
    SecondComponent,
    LoginComponent,


 
   
   
 
    
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:PracticeInterceptor,
      multi:true,
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass:MainInterceptor,
      multi:true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
