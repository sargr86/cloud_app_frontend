import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatBarComponent} from './cat-bar/cat-bar.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RightSidebarComponent} from './right-sidebar/right-sidebar.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [CatBarComponent, NavBarComponent, RightSidebarComponent],
    imports: [
        CommonModule,
        SharedModule
    ],
    exports: [
        NavBarComponent,
        CatBarComponent,
        RightSidebarComponent
    ]
})
export class LayoutModule {
}
