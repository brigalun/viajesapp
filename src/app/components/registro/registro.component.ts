import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserInterface } from 'src/app/models/user-interface';
import { switchAll } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { format } from 'url';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService) { }
  
  private user: UserInterface = {
    nombre: "",
    apellidos: "",
    email: "",
    password: ""
    
  };

  public isError = false;
   
  ngOnInit() {}

  onIsError():void{
    this.isError= true;
    setTimeout(()=>{
      this.isError= false;
    },4000);
  }

  onRegister(form: NgForm): void { 

    if (form.valid) {

    console.log(JSON.stringify(this.user))

    this.authService.registerUser(this.user.nombre, this.user.apellidos, this.user.email, this.user.password)
    .subscribe( data =>{
      //por el momento lo imprimimos en cosola
      console.log(JSON.stringify(data));
      

    });
   // });
    } else{
      console.log("CAMPOS VACIOS");
      this.onIsError();
    }

        
    
    
  }

}

