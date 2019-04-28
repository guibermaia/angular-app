import { Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { INPUT_ROUTES } from './input/input.routes';

export const MAIN_ROUTES: Routes = [{
    path: '',
    component: MainComponent,
    children: [
        ...INPUT_ROUTES
    ]
}];
