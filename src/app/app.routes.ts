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
    { path: 'rxjs', component: RxjsBasicComponent, title: 'RxJS Basics' },
    { path: 'user', component: UserComponent, title: 'User Management' },
    { path: 'data-binding', component: DataBindingComponent, title: 'Data Binding' },
    { path: 'structral-directive', component: StructralDirectivesComponent, title: 'Structural Directives' },
    { path: 'app-lifecycle-hooks', component: LifecycleHooksComponent, title: 'Lifecycle Hooks' },
    { path: 'app-pipes', component: PipesComponent, title: 'Pipes' },
    { path: 'tdf', component: TemplateDrivenFormsComponent, title: 'Template-Driven Forms' },
    { path: 'reactive', component: ReactiveFormsComponent, title: 'Reactive Forms' },
    { path: 'profile', component: ProfileComponent, title: 'Profile' },
    { path: 'crud', component: CRUDComponent, title: 'CRUD Operations' },
    { path: 'add-user', component: AddUserComponent, title: 'Add User' },
    { path: 'view-user/:id', component: ViewUserComponent, title: 'View User' },
    { path: 'update-user/:id', component: UpdateUserComponent, title: 'Update User' },
    { path: 'delete-user/:id', component: DeleteUserComponent, title: 'Delete User' },
    { path: '**', component: PageNotFoundComponent, title: 'Page Not Found' }

];
