import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
  path: '',
  component: LoginComponent
},
{
  path: 'dashboard',
  component: PanelComponent
},
{
  path: 'settings',
  component: SettingsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
