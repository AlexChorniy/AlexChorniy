import {Component, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: 'profile.component.html',
    styles: [`
      em {
        float: right;
        color: #e05c65;
        padding-right: 5px;
      }

      .error input {
        background-color: #E3C3C5;
      }

      .error ::-webkit-input-placeholder {
        color: #999;
      }

      error ::-moz-placeholder {
        color: #999;
      }

      .error :-moz-placeholder {
        color: #999;
      }

      .error :-ms-input-placeholder {
        color: #999;
      }

    `],
})
export class ProfileComponent implements OnInit {
    profileForm: FormGroup

    constructor(private authService: AuthService, private router: Router) {
        this.profileForm = new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl('')
        })
    }

    ngOnInit() {
        let firstName = new FormControl(this.authService.currentUser.firstName, Validators.required)
        let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
        this.profileForm = new FormGroup({
            firstName,
            lastName,
        })
    }

    cancel() {
        this.router.navigate(['events'])
    }

    saveProfile(formValues: { firstName: string, lastName: string }) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
            this.router.navigate(['events'])
        }
    }

    validateLastName() {
        return this.profileForm.controls['lastName'].invalid && this.profileForm.controls['lastName'].touched
    }

    validateFirstName() {
        return this.profileForm.controls['firstName'].invalid && this.profileForm.controls['firstName'].touched
    }
}