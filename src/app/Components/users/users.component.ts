import { Component, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { customers } from './customers';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { State, process, GroupDescriptor } from '@progress/kendo-data-query';
import { Observable } from 'rxjs';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private builder: FormBuilder) {
    this.loadItems();
  }
  public gridView: GridDataResult;
  public pageSize = 10;
  public skip = 0;

  public buttonCount = 5;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = true;
  public previousNext = true;
  public items: any[] = customers;
  public multiple = true;
  public allowUnsort = true;
  // public sort: SortDescriptor[] = [
  //   {
  //     field: 'CompanyName',
  //     dir: 'asc'
  //   },
  //   {
  //     field: 'City',
  //     dir: 'asc'
  //   }
  // ];
  // public sortChange(sort: SortDescriptor[]): void {
  //   this.sort = sort;
  //   this.loadItems();
  // }
  // public pageChange(event: PageChangeEvent): void {
  //   this.skip = event.skip;
  //   this.pageSize = event.take;
  //   this.loadItems();
  // }
  public groups: GroupDescriptor[] = [{ field: 'City' }];

  private state: State = {
    skip: 0,
    take: 10,
    group: this.groups
  };

  protected dataStateChange(state): void {
    this.state = state;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = process(this.items, this.state);
  }
  resultsLength = 200;
  messageStatus = 0;
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  password = new FormControl('', [Validators.required]);
  roleID = new FormControl('', [Validators.required, Validators.min(1)]);
  description = new FormControl('', [Validators.required]);

  addUserForm: FormGroup = this.builder.group({
    username: this.username,
    password: this.password,
    roleID: this.roleID,
    description: this.description
  });
  matcher = new MyErrorStateMatcher();

  ngOnInit() {}

  Save() {
    console.log(this.addUserForm.value);
    this.messageStatus = 2;
  }
}

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users.dialog.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersDialogComponent {}
