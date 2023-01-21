import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilComponent } from './profil/profil.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [SharedModule, ProfileRoutingModule],
})
export class ProfilModule {}
