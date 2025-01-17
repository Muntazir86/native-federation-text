import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'mfe1',
        loadComponent: () => loadRemoteModule('mfe1', './Foo').then((m) => m.FooComponent)
    }
];
