import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContributeComponent } from './screens/contribute/contribute.component';
import { MyContributesComponent } from './screens/my-contributes/my-contributes.component';
import { AllContributesComponent } from './screens/all-contributes/all-contributes.component';
import { AccountComponent } from './screens/account/account.component';
import { AccountEditComponent } from './screens/account-edit/account-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ContributeComponent,
    MyContributesComponent,
    AllContributesComponent,
    AccountComponent,
    AccountEditComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'all-contributes', component: AllContributesComponent },
      { path: 'my-contributes', component: MyContributesComponent },
      { path: 'contribute', component: ContributeComponent },
      { path: 'account', component: AccountComponent },
      { path: 'account-edit', component: AccountEditComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
