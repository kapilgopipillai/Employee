
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RootShellComponent } from './root-shell/root-shell.component';
import { RootComponent } from './root/root.component';
import { RouterModule, Route } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';

const mainRouts: Route[] = [
  { path: '', component: RootComponent },
  // { path: 'forbidden', component: Error403Component},
  // { path: '**', component: Error404Component }
];

@NgModule({
  declarations: [
    RootShellComponent,
    RootComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    CoreModule,
    RouterModule.forRoot(mainRouts)
  ],
  bootstrap: [RootShellComponent]
})
export class MainModule {

}
