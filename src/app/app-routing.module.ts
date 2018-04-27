import { AttendancesComponent } from './components/attendances/attendances.component';
import { GroupsComponent } from './components/groups/groups.component';
import { TestComponent } from './components/test/test.component';
import { HomeComponent } from './components/home/home.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  { path: "test", component: TestComponent },
  { path: "groups", component:  GroupsComponent},
  { path: "attendances", component:  AttendancesComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
