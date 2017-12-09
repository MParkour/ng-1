import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { IndexComponent } from './components/index/index.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes =
  [
    {
      path: 'admin',
      component : AdminComponent,
      children : 
      [
        {path:'' , component : IndexComponent},
        {path : 'user' , component : UserComponent}
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [AdminComponent, IndexComponent,UserComponent]
})
export class AdminRoutingModule { }
