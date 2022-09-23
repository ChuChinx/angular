import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable()
export class AppService {
    tareas = [
        {id: 1, titulo: 'Alimentar al gato', minutos: 15},
        {id: 2, titulo: 'Regar las plantas', minutos: 5},
        {id: 3, titulo: 'Cocinar la cena', minutos: 30},
        {id: 4, titulo: 'Lavar la ropa', minutos: 50},
        {id: 5, titulo: 'Regar las plantas', minutos: 20},
    ]
    constructor(

    ) { }

    public obtenerTareas() {
        try {
            // var tareas: Tarea[] = [];
            // tareas.push(new Tarea(1, 'Alimentar al gato', 15));
            // tareas.push(new Tarea(2, 'Regar las plantas', 5));
            // tareas.push(new Tarea(3, 'Cocinar la cena', 30));
            // tareas.push(new Tarea(4, 'Lavar la ropa', 50));
            // tareas.push(new Tarea(5, 'Regar las plantas', 20));
            return this.tareas;
        } catch (error) {
            return null;
        }
    }

    public addTarea(id: number, tarea: string, tiempo: number) {
        this.tareas.push({
            id,
            titulo: tarea,
            minutos: tiempo
        });
    }

    
}
