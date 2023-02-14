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
import { SendersComponent } from './pages/senders/senders.component';
import { MazowszeComponent } from './pages/mazowsze/mazowsze.component';
import { OtherComponent } from './pages/other/other.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConditionsComponent } from './pages/conditions/conditions.component';
import { HelpComponent } from './pages/help/help.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'tom1',
    component: Tom1Component,
  },
  {
    path: 'tom2',
    component: Tom2Component,
  },
  {
    path: 'tom1/:page_number',
    component: PageComponent,
  },
  {
    path: 'tom2/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/pisma',
    component: PismaComponent,
  },
  {
    path: 'other/pisma/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/tw',
    component: TwComponent,
  },
  {
    path: 'other/jail',
    component: JailComponent,
  },
  {
    path: 'jail/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/tw0/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/tw1/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/tw2/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/tw3/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/tw4/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/tw5/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/gdansk',
    component: GdanskComponent,
  },
  {
    path: 'other/gdansk1/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/gdansk2/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/gdansk3/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/jail',
    component: JailComponent,
  },
  {
    path: 'other/jail/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/ukf',
    component: UkfComponent,
  },
  {
    path: 'other/kor',
    component: KorComponent,
  },
  {
    path: 'other/kor1/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/kor2/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/kor3/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/kor4/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/kor5/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/kor6/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/bi',
    component: BiComponent,
  },
  {
    path: 'other/bi1/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/bi2/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/mazowsze',
    component: MazowszeComponent,
  },
  {
    path: 'other/mazowsze1/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/mazowsze2/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/mazowsze3/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/mazowsze4/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/mazowsze5/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/mazowsze6/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/mazowsze7/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/other',
    component: OtherComponent,
  },
  {
    path: 'other/other1/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/other2/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/other3/:page_number',
    component: PageComponent,
  },
  {
    path: 'other/other4/:page_number',
    component: PageComponent,
  },
  {
    path: 'info',
    component: AboutComponent,
  },
  {
    path: 'kontakt',
    component: ContactComponent,
  },
  {
    path: 'warunki',
    component: ConditionsComponent,
  },
  {
    path: 'pomoc',
    component: HelpComponent,
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    // redirectTo: 'page-not-found',
    // pathMatch: 'full'
    component: PageNotFoundComponent
  },
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
