import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
// {
//   path:'',
//   component: ,
//   loadChildren:() => import ()
// }
{
  path: '',
  //component: EmpresaComponent,
  loadChildren: () => import('../../projects/administrator/src/app/admin.module').then(c => c.AppModule)
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
