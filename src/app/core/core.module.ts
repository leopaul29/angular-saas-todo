import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicModule } from '../public/public.module';
import { ProtectedModule } from '../protected/protected.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, PublicModule, ProtectedModule],
})
export class CoreModule {
  //s’assurer que le CoreModule n’est importé qu’une seule fois
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
