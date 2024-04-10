import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Arnold';
  public gender: 'male' | 'female' = 'male';

  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Maru';
    this.gender = 'female';
  }

  //i18n plural

  public clients: string[] = [
    'Maria',
    'Arnold',
    'Mateo',
    'Victoria',
    'Oswaldo',
    'Alejandro',
    'Elizabeth',
  ];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };
  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Arnold',
    age: 43,
    address: 'Juarez 307',
  };

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('tenemos data');
      this.person.name = 'Otro nombre';
    }, 3500);
  });
}
