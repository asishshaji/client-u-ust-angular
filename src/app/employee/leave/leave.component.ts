import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { EmployeeService } from 'src/app/shared/services/employee.service'

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
})
export class LeaveComponent implements OnInit {
  constructor(private _empService: EmployeeService) {}

  leaveForm = new FormGroup({
    leaveType: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    date: new FormControl('', [Validators.required, Validators.minLength(6)]),
    remarks: new FormControl('', [Validators.required]),
  })

  createLeave() {
    console.log(this.leaveForm.value)

    this._empService.createLeave(this.leaveForm.value).subscribe(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.warn(err)
      },
    )
  }

  leaveTypes: any

  ngOnInit(): void {
    this._empService.getLeaveTypes().subscribe(
      (res) => {
        this.leaveTypes = res
      },
      (err) => {
        console.warn(err)
      },
    )
  }
}
