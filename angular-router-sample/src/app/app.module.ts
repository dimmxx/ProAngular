import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainPageComponent} from './main-page/main-page.component';
import {CrisisListComponent} from './crisis-list/crisis-list.component';
import {HeroesListComponent} from './heroes-list/heroes-list.component';
import {NotFoundPageComponent} from './not-found-page/not-found-page.component';
import {RouterModule} from '@angular/router';
import {TrainingCenterComponent} from './training-center/training-center.component';
import {ChildAComponent} from './child-a/child-a.component';
import {ChildBComponent} from './child-b/child-b.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CrisisListComponent,
    HeroesListComponent,
    NotFoundPageComponent,
    TrainingCenterComponent,
    ChildAComponent,
    ChildBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'main', component: MainPageComponent},
      {path: 'crisis', component: CrisisListComponent},
      {path: 'heroes', component: HeroesListComponent},
      {
        path: 'training', component: TrainingCenterComponent, children: [

          {
            path: 'child-a', component: ChildAComponent
          },
          {
            path: 'child-b', component: ChildBComponent
          }

        ]},
      {path: '', redirectTo: '/main', pathMatch: 'full'},
      {path: '**', component: NotFoundPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
