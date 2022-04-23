import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonInfiniteScroll, ModalController, ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupForm: FormGroup;
  isTypePassword: boolean = true;
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {
    this.initForm();
  }

  ngOnInit() {
  
  }

  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('',
        { validators: [Validators.required] }
      ),
      nom: new FormControl('',
        { validators: [Validators.required] }
      ),
      prenom: new FormControl('',
        { validators: [Validators.required] }
      ),
      dateN: new FormControl('',
        { validators: [Validators.required] }
      ),
      ville: new FormControl('',
        { validators: [Validators.required] }
      ),
      region: new FormControl('',
        { validators: [Validators.required] }
      ),
      tel: new FormControl('',
        { validators: [Validators.required] }
      ),
      email: new FormControl('',
        { validators: [Validators.required, Validators.email] }
      ),
      password: new FormControl('',
        { validators: [Validators.required, Validators.minLength(8)] }
      ),
    });
  }

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  next() {
    if (!this.signupForm.valid) {
      return;
    } else {
    this.router.navigateByUrl['/register2']
    }
  }

}
