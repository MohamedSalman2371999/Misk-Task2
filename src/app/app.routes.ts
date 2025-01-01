import { Routes } from '@angular/router';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { DetailsComponent } from './components/details/details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'challenge', pathMatch: 'full' },
    { path: 'challenge', component: ChallengeComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: '**', component:NotFoundComponent },
];
