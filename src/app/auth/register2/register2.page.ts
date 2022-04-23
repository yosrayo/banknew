import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {

  signupForm: FormGroup;
  isTypePassword: boolean = true;


  constructor(private route: Router) {
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('',
        { validators: [Validators.required] }
      ),
      compte: new FormControl('',
        { validators: [Validators.required] }
      ),
      bank: new FormControl('',
        { validators: [Validators.required] }
      ),
      id: new FormControl('',
        { validators: [Validators.required] }
      ),
      travail: new FormControl('',
        { validators: [Validators.required] }
      ),
     
    
    });
  }

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit() {
    if (!this.signupForm.valid) return;
  else {
    this.route.navigate(['/register3']);
  }
    
     }



}
