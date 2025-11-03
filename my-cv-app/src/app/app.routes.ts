import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv';
import { ContactComponent } from './contact/contact';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    // definisakan path untuk hlm cv
    { path: 'cv', component: CvComponent},

    // definisikan path untuk halaman kontak
    { path: 'contact', component: ContactComponent},

    // redicet ke /cv jika tidak ada path yang cocok (ke hlm utama)
    { path: '', redirectTo: '/cv', pathMatch: 'full'},

    // opsional tambah path hlm 404
    //{path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
