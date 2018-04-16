import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms'
import { formValidators } from '../../services/formValidators';
import { ListService } from '../../services/list.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  states: { id: number; title: string; }[];
  editForm: FormGroup
  constructor(
    private act: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private listServive: ListService
  ) {
    this.createForm();
  }
  createForm() {
    this.editForm = this.fb.group({
      id: [-1],
      name: ['', formValidators.hasletter],
      type: [0, Validators.required],
      remark: ''
    });
  }

  getdata() {
    this.listServive.getState().subscribe((data) => {
      this.states = data;
    });
  }

  cancel() {
    this.router.navigate(['demo', 'list']);
  }

  ngOnInit() {
    this.getdata();
    this.act.data.subscribe(x => {
      this.editForm.setValue(x.item)
    });
  }

  update() {
    const id = this.editForm.get('id').value;
    this.listServive.updateForm(id, this.editForm.value).subscribe(x => {
      alert('success');
      this.router.navigate(['demo', 'list'])
    });
  }

}
