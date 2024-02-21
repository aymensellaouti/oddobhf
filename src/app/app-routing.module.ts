import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './component/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/component/todo/todo.component';
import { ColorComponent } from './component/color/color.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { SecondComponent } from './component/second/second.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { NF404Component } from './compnent/nf404/nf404.component';
// todo
const routes: Routes = [
  {path: '', component: FirstComponent},
  {path: 'cv', children: [
    {path: '', component: CvComponent},
    {path: ':id', component: DetailsCvComponent},
  ]},
  {path: 'todo', component: TodoComponent},
  {path: 'color/:defaultColor', component: ColorComponent},
  {path: 'word', component: MiniWordComponent},
  {path: ':qquechose', component: SecondComponent},
  {path: '**', component: NF404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
