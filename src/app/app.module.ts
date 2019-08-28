import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { TopNavigationComponent } from './Components/top-navigation/top-navigation.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import {
  UsersComponent,
  UsersDialogComponent
} from './Components/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { RTL } from '@progress/kendo-angular-l10n';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavigationComponent,
    SideBarComponent,
    UsersComponent,
    UsersDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DialogModule,
    GridModule,
    ExcelModule,
    DialogsModule
  ],
  providers: [{ provide: RTL, useValue: true }],
  bootstrap: [AppComponent],
  entryComponents: [UsersDialogComponent]
})
export class AppModule {}
