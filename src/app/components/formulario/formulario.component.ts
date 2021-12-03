import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  
  public formLogin:FormGroup;
  public error:boolean = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      correo:['', [Validators.required, Validators.email]],
      contrasena:['', [Validators.required, Validators.minLength(8)]]
    })
  }

  redirect(){
    if(this.formLogin.valid){
        window.location.href = "https://www.youtube.com/watch?v=DLzxrzFCyOs";
    }else{
      this.error = true;
    }
  }
}
