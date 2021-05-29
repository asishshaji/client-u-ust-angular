import { CreateemployeeComponent } from './createemployee/createemployee.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { EditComponent } from './edit/edit.component'
import { LeaveComponent } from '../employee/leave/leave.component'
import { LeavereportComponent } from './leavereport/leavereport.component'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TimesheetComponent } from './timesheet/timesheet.component'

const routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
  {
    path: 'create/employee',
    component: CreateemployeeComponent,
  },
  {
    path: 'timesheet/:username',
    component: TimesheetComponent,
  },
  {
    path: 'leave',
    component: LeavereportComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
