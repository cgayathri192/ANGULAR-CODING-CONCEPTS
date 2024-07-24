import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class/class.component';
import { FormsComponent } from './forms/forms.component';
import { MainComponent } from './main/main.component';
import { OneComponent } from './one/one.component';
import { PipeComponent } from './pipe/pipe.component';
import { PracticeComponent } from './practice/practice.component';
import { StyleComponent } from './style/style.component';
import { TwoComponent } from './two/two.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StorageComponent } from './storage/storage.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
  {
    path:'practice',
    component:PracticeComponent
  },
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'class',
    component:ClassComponent
  },
  {
    path:'style',
    component:StyleComponent
  },
  {
    path:'pipe',
    component:PipeComponent
  },
  {
    path:'one',
    component:OneComponent
  },
  {
    path:'two',
    component:TwoComponent
  },
  {
    path:'forms',
    component:FormsComponent
  },
  {
    path:'parent',
    component:ParentComponent
  },
  {
    path:'child',
    component:ChildComponent
  },
  {
    path:'storage',
    component:StorageComponent
  },
  {
    path:'first',
    component:FirstComponent
  },
  {
    path:'second',
    component:SecondComponent
  },
  {
    path:'login',
    component:LoginComponent
  }


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
