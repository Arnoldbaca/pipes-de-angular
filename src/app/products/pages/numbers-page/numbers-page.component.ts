import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css'],
})
export class NumbersPageComponent {
  public ventasNetas: number = 2556435.2567;
  public ventasBrutas: number = 1556435.2567;
  public percent: number = 0.325;
}
