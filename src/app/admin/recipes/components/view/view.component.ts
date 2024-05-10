import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Users } from 'src/app/core/interfaces/users';
import { IRecipe } from '../../interfaces/recipes';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: IRecipe , public _DialogRef:DialogRef){}
  imgUrl: string = 'https://upskilling-egypt.com:3006/';

}
