import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  
  public formLogin:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      correo:['', [Validators.required, Validators.email]],
      contrasena:['', [Validators.required, Validators.minLength(8)]]
    })
  }

}
