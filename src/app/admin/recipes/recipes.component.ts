import { Component } from '@angular/core';
import { RecipesService } from './services/recipes.service';
import { IRecipe } from './interfaces/recipes';
import { Icategory } from '../categories/categories';
import { CategoryService } from '../categories/services/category.service';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from '../../shared/delete/delete.component';
import { error } from '@rxweb/reactive-form-validators';
import { AddEditRecipeComponent } from './components/add-edit-recipe/add-edit-recipe.component';
import { ViewComponent } from './components/view/view.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent {
  constructor(
    private _RecipesService: RecipesService,
    private _CategoryService: CategoryService,
    public dialog: MatDialog
  ) {}
  addValues: any = {};
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;
  pageSizeOptions = [5, 10, 25];
  recipeData: IRecipe[] = [];
  searchValue = '';
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  emptyImg: string = '../../../assets/images/delete-img.svg';
  imgUrl: string = 'https://upskilling-egypt.com:3006/';
  pageNumber: number = 1;
  pageSize: number = 10;
  tags: Icategory[] = [];
  categories: Icategory[] = [];
  categoryId: number = 0;
  tagId: number = 0;
  totalData!: number;
  ngOnInit(): void {
    this.getRecipes();
    this.getAllTags();
    this.getCategories();
  }
  getCategories() {
    this._CategoryService.getCategotiesData(1, 10000).subscribe({
      next: (res) => {
        console.log(res);
        this.categories = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getAllTags() {
    this._RecipesService.getTags().subscribe({
      next: (res) => {
        console.log(res);
        this.tags = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
  handlePageEvent(e: PageEvent) {
    this.totalData = e.length;
    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;
    this.getRecipes();
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id: any,
    key: string
  ): void {
    const dialo = this.dialog.open(DeleteComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        know: id,
        toknow: key,
      },
    });
    dialo.afterClosed().subscribe((res) => {
      console.log(res);
      this.deleteRecipe(res);
    });
  }
  openViewDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    item:object
  ): void {
    const dialo = this.dialog.open(ViewComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data:item
    });
    dialo.afterClosed().subscribe((res) => {
      console.log(res);
    });
  }
  openAddEditDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    edit: boolean
  ): void {
    const dialo = this.dialog.open(AddEditRecipeComponent, {
      width: '500px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: edit,
    });
    dialo.afterClosed().subscribe((res) => {
      console.log(res);
      this.getRecipes();
    });
  }
  getRecipes() {
    let data = {
      name: this.searchValue,
      tagId: this.tagId,
      categoryId: this.categoryId,
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    };
    console.log(data);
    this._RecipesService.getRecipes(data).subscribe({
      next: (res) => {
        console.log(res);
        this.recipeData = res.data;
        this.totalData = res.totalNumberOfRecords;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  deleteRecipe(id: number) {
    this._RecipesService.deleteRecipe(id).subscribe({
      next: (e) => {
        console.log(e);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.getRecipes();
      },
    });
  }
}
