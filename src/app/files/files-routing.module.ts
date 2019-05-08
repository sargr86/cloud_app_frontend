import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImportFilesComponent} from './import-files/import-files.component';
import {ShowFilesComponent} from './show-files/show-files.component';

const routes: Routes = [
    {
        path: '',
        component: ShowFilesComponent
    },
    {
        path: 'import',
        component: ImportFilesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FilesRoutingModule {
}
