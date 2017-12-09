import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './components/test/test.component';
import { Component } from '@angular/core/src/metadata/directives';
import { IndexComponent } from './components/index/index.component';

const routes: Routes =
  [
    {
      path: '',
      component: HomeComponent,
      children: []
    },
    {
      path: 'test',
      component: TestComponent,
      children: [
        {
          path: 'index',
          component: IndexComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [HomeComponent, TestComponent, IndexComponent]
})
export class AppRoutingModule { }
