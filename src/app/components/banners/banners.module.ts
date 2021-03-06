import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { MainPageBannerComponent } from './main-page-banner/main-page-banner.component';

// UI
import { LayoutModule } from '../layout/layout.module';
import { ButtonsModule } from '../buttons/buttons.module';
import { RouterModule } from '@angular/router';

// Exports
const EXPORTS = [MainPageBannerComponent];

const UI = [LayoutModule, ButtonsModule];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule, ...UI, RouterModule],
  exports: [...EXPORTS],
})
export class BannersModule {}
