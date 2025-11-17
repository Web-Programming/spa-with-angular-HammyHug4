import { Routes } from '@angular/router';
import { Home as HomeComponent} from './home/home';
import { Profile } from './profile/profile';
import { Login } from './login/login';
import { Register } from './register/register';
import { Contact } from './contact/contact';
import { Detail } from './detail/detail';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: 'Home Page'
    },
    {
        path: "profile",
        component: Profile,
        //title: 'Home Page'
    },
    {
        path: "login",
        component: Login,
        //title: 'Home Page'
    },
    {
        path: "register",
        component: Register,
        //title: 'Home Page'
    },
    {
        path: "contact",
        component: Contact,
        //title: 'Home Page'
    },
    {
        path: "property/:id",       
        component: Detail,
        title: 'Detail Property - Griya MDP'
    },
    {
        path: "**",                      
        redirectTo: "",
        pathMatch: 'full'
    }
];
