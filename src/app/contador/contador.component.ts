import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  @Input() contador2 = 0
  @Output() enviarMensajePadre = new EventEmitter<string>()
  random = 0;
  generarRandom(){
    this.random = Math.random() * 100
    this.enviarMensajePadre.emit(String(this.random))
  }
}
