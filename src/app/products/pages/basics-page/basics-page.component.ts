import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'arnold';
  public nameUpper: string = 'ARNOLD';
  public nameTitle: string = 'ArNOld bACa';

  public customDate: Date = new Date();
}
