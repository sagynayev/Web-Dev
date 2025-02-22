import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewComponent } from './page/new.component';

const routeConfig:Routes=[
  {
    path:'',
    component:AppComponent,
    title:'Home page'
  },
  {
    path:'details/',
    component:NewComponent,
    title:'Details'
  }
];
export default routeConfig