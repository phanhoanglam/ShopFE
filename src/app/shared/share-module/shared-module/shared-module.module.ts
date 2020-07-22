import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule, MatIconModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSliderModule, MatTabsModule, MatExpansionModule, MatDialogModule, MatCardModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from '../../Interceptor/interceptorIndex';

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
    MatCardModule,
    HttpClientModule
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
    MatCardModule,
    HttpClientModule
  ],
  providers: [httpInterceptorProviders]
})
export class SharedModuleModule { }
