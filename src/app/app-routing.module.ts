import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'autoliv',
        loadChildren: () =>
          import('./autoliv/autoliv.module').then((m) => m.AutolivModule),
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
