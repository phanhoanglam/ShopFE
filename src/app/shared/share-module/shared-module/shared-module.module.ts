import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatIconModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule, MatTabsModule, MatExpansionModule, MatDialogModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TreeMenuMobileComponent } from '../../Directives/tree-menu-mobile/tree-menu-mobile.component';
import { TreeMenuComponent } from '../../Directives/tree-menu/tree-menu.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    FormsModule,
    MatDialogModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatTabsModule,
    MatExpansionModule,
    FormsModule,
    MatDialogModule,
    MatCardModule
  ]
})
export class SharedModuleModule { }
