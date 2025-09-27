import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { PoliciesComponent } from './policies/policies.component';
// import { ClaimsComponent } from './claims/claims.component';
// import { TipsComponent } from './tips/tips.component';

const routes: Routes = [
  // Auth routes
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Home route with child routes
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: 'dashboard', component: DashboardComponent },
      // { path: 'policies', component: PoliciesComponent },
      // { path: 'claims', component: ClaimsComponent },
      // { path: 'tips', component: TipsComponent }
    ]
  },

  // Fallback
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  // ✅ must export RouterModule
})
export class AppRoutingModule {}
