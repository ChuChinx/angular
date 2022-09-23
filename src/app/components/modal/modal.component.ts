import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    public service: AppService,
  ) { }

  form = this.fb.group({
    titulo: [],
    tiempo: []
  });


  ngOnInit() {
  }

  addTarea(): void {
    const cantidad = this.service.obtenerTareas().length;
    const formValue = this.form.value;
    const data = {
      titulo: formValue.titulo,
      minutos: parseInt(formValue.tiempo)
    }
    console.log(data);
    this.service.addTarea(cantidad+1, formValue.titulo, parseInt(formValue.tiempo));

    
  }

}
