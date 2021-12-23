import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RabbitIconComponent } from './components/rabbit-icon/rabbit-icon.component';
import { HoleComponent } from './components/hole/hole.component';
import { ArrowIconComponent } from './components/arrow-icon/arrow-icon.component';
import { AnyPipe } from './pipes/any.pipe';
import { CrossOutIconComponent } from './components/cross-out-icon/cross-out-icon.component';
import { HolesComponent } from './components/holes/holes.component';

@NgModule({
  declarations: [
    AppComponent,
    RabbitIconComponent,
    HoleComponent,
    ArrowIconComponent,
    AnyPipe,
    CrossOutIconComponent,
    HolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
