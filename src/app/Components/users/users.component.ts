import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder
} from '@angular/forms';

import { customers } from './customers';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

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

  public buttonCount = 10;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = true;
  public previousNext = true;
  private items: any[] = customers;
  public multiple = true;
  public allowUnsort = true;

  public state: State = {
    skip: 0,
    take: 10,

    filter: {
      logic: 'and',
      filters: []
    }
  };

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
  public opened = true;

  protected dataStateChange(state): void {
    this.state = state;
    this.loadItems();
  }

  private loadItems(): void {
    this.gridView = process(this.items, this.state);
  }

  ngOnInit() {}

  Save() {
    console.log(this.addUserForm.value);
    this.messageStatus = 2;
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }
}

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users.dialog.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersDialogComponent {}
