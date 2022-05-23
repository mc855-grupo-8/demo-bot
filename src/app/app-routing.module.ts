import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponentComponent } from './component/chat-component/chat-component.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path : 'home', component : HomeComponent},
  { path : 'chatbot', component : ChatComponentComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
