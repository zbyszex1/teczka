import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Tom1Component } from './pages/tom1/tom1.component';
import { Tom2Component } from './pages/tom2/tom2.component';
import { PageComponent } from './pages/page/page.component';
import { PismaComponent } from './pages/pisma/pisma.component';
import { TwComponent } from './pages/tw/tw.component';
import { GdanskComponent } from './pages/gdansk/gdansk.component';
import { InternaComponent } from './pages/interna/interna.component';
import { UkfComponent } from './pages/ukf/ukf.component';
import { KorComponent } from './pages/kor/kor.component';
import { BiComponent } from './pages/bi/bi.component';
import { JailComponent } from './pages/jail/jail.component';
import { IndeksComponent } from './pages/indeks/indeks.component';
import { MazowszeComponent } from './pages/mazowsze/mazowsze.component';
import { OtherComponent } from './pages/other/other.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';
import { HelpComponent } from './pages/help/help.component';
import { BlankComponent } from './pages/blank/blank.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tom1', component: Tom1Component },
  { path: 'tom2', component: Tom2Component },
  { path: 'tom1/:page_number', component: PageComponent },
  { path: 'tom2/:page_number', component: PageComponent },
  { path: 'other',
    children: [
      { path: 'pisma', component: PismaComponent },
      { path: 'pisma/:page_number', component: PageComponent },
      { path: 'tw', component: TwComponent },
      { path: 'jail', component: JailComponent },
      { path: 'jail/:page_number', component: PageComponent },
      { path: 'tw0/:page_number', component: PageComponent },
      { path: 'tw1/:page_number', component: PageComponent },
      { path: 'tw2/:page_number', component: PageComponent },
      { path: 'tw3/:page_number', component: PageComponent },
      { path: 'tw4/:page_number', component: PageComponent },
      { path: 'tw5/:page_number', component: PageComponent },
      { path: 'gdansk', component: GdanskComponent },
      { path: 'gdansk1/:page_number', component: PageComponent },
      { path: 'gdansk2/:page_number', component: PageComponent },
      { path: 'gdansk3/:page_number', component: PageComponent },
      { path: 'jail', component: JailComponent },
      { path: 'jail/:page_number', component: PageComponent },
      { path: 'ukf', component: UkfComponent },
      { path: 'ukf1/:page_number', component: PageComponent },
      { path: 'ukf2/:page_number', component: PageComponent },
      { path: 'ukf3/:page_number', component: PageComponent },
      { path: 'kor', component: KorComponent },
      { path: 'kor1/:page_number', component: PageComponent },
      { path: 'kor2/:page_number', component: PageComponent },
      { path: 'kor3/:page_number', component: PageComponent },
      { path: 'kor4/:page_number', component: PageComponent },
      { path: 'kor5/:page_number', component: PageComponent },
      { path: 'kor6/:page_number', component: PageComponent },
      { path: 'bi', component: BiComponent },
      { path: 'bi1/:page_number', component: PageComponent },
      { path: 'bi2/:page_number', component: PageComponent },
      { path: 'mazowsze', component: MazowszeComponent },
      { path: 'mazowsze1/:page_number', component: PageComponent },
      { path: 'mazowsze2/:page_number', component: PageComponent },
      { path: 'mazowsze3/:page_number', component: PageComponent },
      { path: 'mazowsze4/:page_number', component: PageComponent },
      { path: 'mazowsze5/:page_number', component: PageComponent },
      { path: 'mazowsze6/:page_number', component: PageComponent },
      { path: 'mazowsze7/:page_number', component: PageComponent },
      { path: 'other', component: OtherComponent },
      { path: 'other1/:page_number', component: PageComponent },
      { path: 'other2/:page_number', component: PageComponent },
      { path: 'other3/:page_number', component: PageComponent },
      { path: 'other4/:page_number', component: PageComponent }
    ]
  },
  { path: 'indeks', component: IndeksComponent },
  { path: 'info', component: AboutComponent },
  { path: 'kontakt', component: ContactComponent },
  { path: 'warunki', component: ConditionsComponent },
  { path: 'pomoc', component: HelpComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: 'blank', component: BlankComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: 'enabled',
    // useHash: true,
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
