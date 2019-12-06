import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MonacoEditorModule } from 'ngx-monaco-editor';
// -------------- Components -------------

import { AppComponent } from './app.component';
import { EditorComponent } from 'src/components/editor/editor.component';
import { MatlabContainerComponent } from 'src/components/matlab-container/matlab-container.component';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    MatlabContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MonacoEditorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
