import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficheComponent } from './affiche.component';

import { ColorsComponent } from './colors.component';
import { TypographyComponent } from './typography.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    children: [
      {
        path: '',
        redirectTo: 'colors'
      },
      {
        path: 'affiche',
        component: AfficheComponent,
        data: {
          title: 'Membre'
        }
      },
      {
        path: 'colors',
        component: ColorsComponent,
        data: {
          title: 'Membre'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemeRoutingModule {}
