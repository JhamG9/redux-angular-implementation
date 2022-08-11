import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';

// import { multiplicar } from '../contador.actions';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent implements OnInit {

  contador: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({numero: 2}));
    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    this.store.dispatch(actions.dividir({numero: 2}))
    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }


}
