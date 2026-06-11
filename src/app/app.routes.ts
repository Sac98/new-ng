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
import { ProfileComponent } from './profile/profile.component';
import { CRUDComponent } from './crud/crud.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

export const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'rxjs', component: RxjsBasicComponent },
    { path: 'user', component: UserComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'structral-directive', component: StructralDirectivesComponent },
    { path: 'app-lifecycle-hooks', component: LifecycleHooksComponent },
    { path: 'app-pipes', component: PipesComponent },
    { path: 'tdf', component: TemplateDrivenFormsComponent },
    { path: 'reactive', component: ReactiveFormsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'crud', component: CRUDComponent },
    { path: 'add-user', component: AddUserComponent },
    { path: 'view-user/:id', component: ViewUserComponent },
    { path: 'update-user/:id', component: UpdateUserComponent },
    { path: 'delete-user/:id', component: DeleteUserComponent },
    { path: '**', component: PageNotFoundComponent }

];
