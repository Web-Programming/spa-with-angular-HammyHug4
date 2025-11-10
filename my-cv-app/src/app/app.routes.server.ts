// import { RenderMode, ServerRoute } from '@angular/ssr';

// export const serverRoutes: ServerRoute[] = [
//   {
//     path: '**',
//     renderMode: RenderMode.Prerender
//   }
// ];
import { Routes } from '@angular/router';
import { CvComponent as CvComponent } from './cv/cv';
import { ContactComponent as ContactComponent } from './contact/contact';

export const routes: Routes = [
 // 1. Path untuk Halaman CV
 {
   path: 'cv',
   component: CvComponent,
   title: 'Curriculum Vitae Saya'
 },
 // 2. Path untuk Halaman Kontak
 {
   path: 'contact',
   component: ContactComponent,
   title: 'Kontak Saya'
 },
 // 3. Redirect halaman utama ke /cv
 {
   path: '',
   redirectTo: '/cv',
   pathMatch: 'full'
 },
 // 4. (Opsional) Halaman 404
 // { path: '**', component: NotFoundComponent }
];

