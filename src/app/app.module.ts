import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThumbsListComponent } from './components/thumbs-list/thumbs-list.component';
import { Tom1Component } from './pages/tom1/tom1.component';
import { Tom2Component } from './pages/tom2/tom2.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SlideInDirective } from './directives/slide-in.directive';
import { AboutComponent } from './pages/about/about.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { WhenVisibleDirective } from './directives/when-visible.directive';
import { OdometerComponent } from './components/odometer/odometer.component';
import { HerobarComponent } from './components/herobar/herobar.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';
import { PagesListComponent } from './components/pages-list/pages-list.component';
import { PageComponent } from './pages/page/page.component';
import { PismaComponent } from './pages/pisma/pisma.component';
import { TwComponent } from './pages/tw/tw.component';
import { GdanskComponent } from './pages/gdansk/gdansk.component';
import { InternaComponent } from './pages/interna/interna.component';
import { UkfComponent } from './pages/ukf/ukf.component';
import { KorComponent } from './pages/kor/kor.component';
import { MazowszeComponent } from './pages/mazowsze/mazowsze.component';
import { OtherComponent } from './pages/other/other.component';
import { JsonPathDirective } from './directives/json-path.directive';
import { BiComponent } from './pages/bi/bi.component';
import { HelpComponent } from './pages/help/help.component';
import { SendersComponent } from './pages/senders/senders.component';
import { JailComponent } from './pages/jail/jail.component';
import { BlankComponent } from './pages/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    ThumbsListComponent,
    Tom1Component,
    Tom2Component,
    NavbarComponent,
    HomeComponent,
    SlideInDirective,
    PageNotFoundComponent,
    WhenVisibleDirective,
    OdometerComponent,
    HerobarComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ConditionsComponent,
    PagesListComponent,
    PageComponent,
    PismaComponent,
    TwComponent,
    GdanskComponent,
    InternaComponent,
    UkfComponent,
    KorComponent,
    MazowszeComponent,
    OtherComponent,
    JsonPathDirective,
    BiComponent,
    HelpComponent,
    SendersComponent,
    JailComponent,
    BlankComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
