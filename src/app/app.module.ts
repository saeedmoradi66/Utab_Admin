import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavigationComponent,
    SideBarComponent,
    UsersComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
