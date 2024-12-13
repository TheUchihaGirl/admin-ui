import { Routes } from '@angular/router';
import { LicenseComponent } from './license/license.component';
import { OptionCreateComponent } from './option-create/option-create.component';
import { OptionModifyComponent } from './option-modify/option-modify.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';


export const routes: Routes = [
    { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: 'dashboard', component: DashboardComponent, children: [
        { path: 'create', component: OptionCreateComponent },
        { path: 'modify', component: OptionModifyComponent },
        { path: 'license', component: LicenseComponent },
        { path: '', redirectTo: 'create', pathMatch: 'full' },
    ]},
];