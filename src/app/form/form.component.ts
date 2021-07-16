import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, ReactiveFormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  myForm2: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      nom: new FormControl('',Validators.required),
      prenom: new FormControl('',Validators.required),
      cgv: new FormControl('true')
    })
  }

get formControleValid(){
  return this.myForm.controls
}

  onSbmit(f: NgForm){
    console.log(f);
    if(f.valid){
      console.log('myForm value '+ JSON.stringify(f.value));
    }else{
      console.log('Erreur: myForm invalid ');
    }
    const nom = f.value.nom
    const prenom = f.value.prenom
    console.log(nom,prenom)
  }

}
