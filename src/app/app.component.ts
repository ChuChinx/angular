import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AppService } from './app.service';
import { ModalComponent } from './components/modal/modal.component';
import { Tarea } from './tarea';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	tareas: Tarea[];

	constructor(
        public service: AppService,
		private dialog: MatDialog
	) { }
	
	ngOnInit() {
		this.obtenerTareas();
	}

	obtenerTareas() {
		this.tareas = this.service.obtenerTareas();
		console.log(this.tareas);
		
	}

	addTarea(): void {
		const data = {

		}
		this.dialog.open(ModalComponent, {
			data: {title: "Añadir tarea"},
			width: '600px',
			disableClose: false
		});	
	}

	eliminarFila(index: number): void {
		console.log(index);
		console.log(this.service.obtenerTareas());
		
		this.service.obtenerTareas().splice(index, 1);
		this.obtenerTareas();
	}

	ordenarTarea(): void {
		this.service.obtenerTareas().sort((a, b) => a.minutos - b.minutos);
		this.obtenerTareas();
	}

	marcarFila(index: number): void {
		console.log(index);
		const body = document.getElementById('tbody_id') as HTMLInputElement;
		const destacado = <Element>body.childNodes[index];
		destacado.classList.add("destacado");
	}
}
