import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducers';
import * as actions from './contador/contador.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador: number= 0;

  constructor(private store: Store<{ contador: AppState }>) {
    // Escuchar especifico valor
    this.store.select('contador').subscribe(contador =>{
      console.log(contador);
      this.contador = +contador;
    })

  }

  incrementar() {
    this.store.dispatch(actions.incrementar())
  }

  decrementar() {
    this.store.dispatch(actions.decrementar())
  }
}
