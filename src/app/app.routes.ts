import { Routes } from '@angular/router';
import { RxjsBasicComponent } from '../rxjs-basic/rxjs-basic.component';
import { UserComponent } from './user/user.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { StructralDirectivesComponent } from './structral-directives/structral-directives.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'rxjs', component: RxjsBasicComponent },
    { path: 'user', component: UserComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'structral-directive', component: StructralDirectivesComponent },
    { path: 'app-lifecycle-hooks', component: LifecycleHooksComponent },
    { path: 'app-pipes', component: PipesComponent },
    { path: 'tdf', component: TemplateDrivenFormsComponent },
    { path: 'reactive', component: ReactiveFormsComponent },
    { path: '**', component: PageNotFoundComponent }

];
