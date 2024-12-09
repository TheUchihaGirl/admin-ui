import { Routes } from '@angular/router';
import { OptionsViewerComponent } from './options-viewer/options-viewer.component';
import { LicenseComponent } from './license/license.component';


export const routes: Routes = [
    { path: '', redirectTo: '/license', pathMatch: 'full' },
    { path: 'option', component: OptionsViewerComponent },
    {path: 'license', component: LicenseComponent}

];