import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {LoginRequest} from "../auth/login-request.model";
import {AuthService} from "../auth/auth.service";
import {MessageService} from "../main/message/message.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginRequest: LoginRequest = new LoginRequest();

  constructor(
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,
  ) {
  }

  onSubmit(form: NgForm) {
    return this.authService.login(this.loginRequest)
      .subscribe(response => {
        this.messageService.clearMessage();
        this.router.navigate(['/main'])
      });
  }

}
