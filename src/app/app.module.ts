import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderDirective } from './header.directive';

import { FooterDirective } from './footer.directive';
import { RouterModule} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TformComponent } from './tform/tform.component';
import { ReactformComponent } from './reactform/reactform.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { ConsumerComponent } from './consumer/consumer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderDirective,
    FooterDirective,
    IndexComponent,
    TformComponent,
    ConsumerComponent
  ],
  imports: [
  	FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
    [
		{
			path: 'home',
			component: HomeComponent
		},
		{
			path: 'index/:id',
			component: IndexComponent
		}
	 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
