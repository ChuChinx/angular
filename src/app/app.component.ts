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

	async obtenerTareas() {
		this.tareas = await this.service.obtenerTareas();
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
}
