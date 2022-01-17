import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgGistModule } from 'ng-gist';
import { BarRatingModule } from "ngx-bar-rating";
// ----------------- DATA FETCH
import { HttpClientModule } from '@angular/common/http';
// ----------------- MATERIAL
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
// ----------------- COMPONENTS
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './tools/navbar/navbar.component';
import { FooterComponent } from './tools/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HelloComponent } from './pages/week1/hello/hello.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MarioEasyComponent } from './pages/week1/mario-easy/mario-easy.component';
import { MarioDifficultComponent } from './pages/week1/mario-difficult/mario-difficult.component';
import { CashComponent } from './pages/week1/cash/cash.component';
import { CreditComponent } from './pages/week1/credit/credit.component';
import { ScrabbleComponent } from './pages/week2/scrabble/scrabble.component';
import { CaesarComponent } from './pages/week2/caesar/caesar.component';
import { ReadabilityComponent } from './pages/week2/readability/readability.component';
import { SubstitutionComponent } from './pages/week2/substitution/substitution.component';
import { SortComponent } from './pages/week3/sort/sort.component';
import { PluralityComponent } from './pages/week3/plurality/plurality.component';
import { RunoffComponent } from './pages/week3/runoff/runoff.component';
import { TidemanComponent } from './pages/week3/tideman/tideman.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    HelloComponent,
    MarioEasyComponent,
    MarioDifficultComponent,
    CashComponent,
    CreditComponent,
    ScrabbleComponent,
    CaesarComponent,
    ReadabilityComponent,
    SubstitutionComponent,
    SortComponent,
    PluralityComponent,
    RunoffComponent,
    TidemanComponent
  ],
  imports: [
    NgGistModule,
    NgScrollbarModule,
    BarRatingModule,
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MatMenuModule,
    MatExpansionModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
