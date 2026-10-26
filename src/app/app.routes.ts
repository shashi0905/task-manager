import { Routes } from '@angular/router';
import {About} from "./pages/about/about";
import {Home} from "./pages/home/home";
import {Tasks} from "./pages/tasks/tasks";

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'tasks', component: Tasks },
    { path: 'about', component: About}
];
