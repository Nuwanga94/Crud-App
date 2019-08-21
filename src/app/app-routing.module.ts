import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { FormComponent } from './form/form.component';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [

  { path: 'view', component: ViewComponent },
  { path: '', component: FormComponent },
  { path: ':id/edit', component: EditComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
