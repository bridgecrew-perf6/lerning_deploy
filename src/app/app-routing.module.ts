import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleformComponent } from './googleform/googleform.component';
import { RxjsLearningComponent } from './rxjs-learning/rxjs-learning.component';

const routes: Routes = [
  { path: 'rxjs-learning', component: RxjsLearningComponent },
  { path: 'googleform', component: GoogleformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
