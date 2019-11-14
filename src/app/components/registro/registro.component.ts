import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { switchAll } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  private user: UserInterface = {
    name: "",
    email: "",
    password: ""
    
  };
   
  ngOnInit() {}

  onRegister(): void {
    console.log(JSON.stringify(this.user))

    if (this.user = null) {
      return;
    } else if (this.user.email == null ) {
      
      return;

    }

    this.authService.registerUser(this.user.name, this.user.email, this.user.password)
    .subscribe( data =>{
      //por el momento lo imprimimos en cosola
      console.log(JSON.stringify(data));
      

    }, error => {
      console.log(error);
    });
  }

}
