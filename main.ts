import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContainerComponent} from './container/component';
import { AppComponent } from './app/component';
import {SectionComponent} from './section/component';
@NgModule({
	  imports: [
		      BrowserModule,
		      BrowserAnimationsModule,
		      CommonModule,
		    ],

	  declarations: [AppComponent,ContainerComponent,SectionComponent],
	  bootstrap: [AppComponent],
	  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

