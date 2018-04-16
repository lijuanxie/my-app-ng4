import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms'
import { ListService } from '../../services/list.service';
import { Route, Router } from '@angular/router';
import { formValidators } from '../../services/formValidators';

@Component({
  selector: 'app-addForm',
  templateUrl: './addForm.component.html',
  styleUrls: ['./addForm.component.css']
})
export class AddFormComponent implements OnInit {
  states: { id: number; title: string; }[];
  addForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private listservice: ListService,
    private router: Router
  ) {
    this.createForm();
  }
  createForm() {
    this.addForm = this.fb.group({
      name: ['', formValidators.hasletter],
      type: ['', Validators.required],
      remark: ''
    });
  }

  getdata() {
    this.listservice.getState().subscribe((data) => {
      this.states = data;

    })
  }

  cancel() {
    this.router.navigate(['/demo/list']);
  }

  submit() {
    this.addForm.markAsDirty();
    for (const key in this.addForm.controls) {
      if (this.addForm.controls.hasOwnProperty(key)) {
        this.addForm.controls[key].markAsDirty();
      }
    }
    if (!this.addForm.valid) {
      return alert('error');
    }
    this.listservice.addForm(this.addForm.value).subscribe(x => {
      alert('success!');
      this.router.navigate(['/demo/list'])
    });
  }
  ngOnInit() {
    this.getdata();
  }

}
