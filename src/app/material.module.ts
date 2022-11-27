import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatSidenavModule,
        MatGridListModule,
        MatSlideToggleModule,
        MatSelectModule
    ],
    exports: [
        MatTableModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatSliderModule,
        MatSidenavModule,
        MatGridListModule,
        MatSlideToggleModule,
        MatSelectModule
    ]

})



export class MaterialModule{}