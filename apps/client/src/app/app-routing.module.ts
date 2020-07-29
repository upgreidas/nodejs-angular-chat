import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ChatPageComponent } from './components/pages/chat-page/chat-page.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginPageComponent,
  },
  {
    path: 'channels/:slug',
    component: ChatPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }