import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { MainNavigationComponent } from './main-navigation/main-navigation.component';

const EXPORTS = [MainNavigationComponent];

@NgModule({
  declarations: [...EXPORTS],
  imports: [CommonModule],
  exports: [...EXPORTS],
})
export class NavigationModule {}
