import { titleHeader } from './../../shared/components/header-cards-initial-page/model/header-cards.data';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedComponent } from './logged.component';


const routes: Routes = [
  {
    path: '',
    component: LoggedComponent,
    children: [
      {
        path: 'settings',
        loadChildren: () => import('src/app/pages/user-configurations/user-configurations.module').then(m => m.UserConfigurationsModule),
      },
      {
        path: 'filters',
        loadChildren: () => import('src/app/pages/filter-preferences/filter-preferences.module').then(m => m.FilterPreferencesModule),
      },
      {
        path: 'chat',
        loadChildren: () => import('src/app/pages/chat/chat.module').then(m => m.ChatModule),
      },
      {
        path: 'matchs',
        loadChildren: () => import('src/app/pages/user-matchs/user-matchs.module').then(m => m.UserMatchsModule),
      },
      {
        path: 'likes',
        loadChildren: () => import('src/app/pages/liked-me/liked-me.module').then(m => m.LikedMeModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedRoutingModule { }
