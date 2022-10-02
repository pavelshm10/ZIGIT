import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionReducerMap, RuntimeChecks, StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { AddCommentComponent } from './components/projects/add-comment/add-comment.component';
import { LoginComponent } from './components/auth/login/login.component';
import { projectsReducer } from './reducers/projects.reducer';
import { authReducer } from './reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ToasterComponent } from './components/toaster/toaster.component';
import { AuthEffects } from './effects/auth.effects';
import { ProjectEffects } from './effects/projects.effects';
import { States } from './types/state.interface';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MATERIAL_MODULES } from './modules/material-modules';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const reducers: ActionReducerMap<States> = {
  projects: projectsReducer,
  auth: authReducer,
} as ActionReducerMap<States>;

// const devMode = !environment.production;
const runtimeChecks: RuntimeChecks = {
  strictActionImmutability: false,
  strictActionSerializability: false,
  strictStateImmutability: false,
  strictStateSerializability: false,
  strictActionWithinNgZone: false,
};

export const effects = [AuthEffects, ProjectEffects];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProjectsComponent,
    AddProjectComponent,
    AddCommentComponent,
    ToasterComponent,
  ],
  imports: [
    ...MATERIAL_MODULES,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [...MATERIAL_MODULES],
})
export class AppModule {}
