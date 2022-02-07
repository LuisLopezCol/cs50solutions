import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CashComponent } from './pages/week1/cash/cash.component';
import { CreditComponent } from './pages/week1/credit/credit.component';
import { HelloComponent } from './pages/week1/hello/hello.component';
import { MarioDifficultComponent } from './pages/week1/mario-difficult/mario-difficult.component';
import { MarioEasyComponent } from './pages/week1/mario-easy/mario-easy.component';
import { PopulationComponent } from './pages/week1/population/population.component';
import { CaesarComponent } from './pages/week2/caesar/caesar.component';
import { ReadabilityComponent } from './pages/week2/readability/readability.component';
import { ScrabbleComponent } from './pages/week2/scrabble/scrabble.component';
import { SubstitutionComponent } from './pages/week2/substitution/substitution.component';
import { PluralityComponent } from './pages/week3/plurality/plurality.component';
import { RunoffComponent } from './pages/week3/runoff/runoff.component';
import { SortComponent } from './pages/week3/sort/sort.component';
import { TidemanComponent } from './pages/week3/tideman/tideman.component';
import { FilterDifficultComponent } from './pages/week4/filter-difficult/filter-difficult.component';
import { FilterEasyComponent } from './pages/week4/filter-easy/filter-easy.component';
import { RecoverComponent } from './pages/week4/recover/recover.component';
import { VolumeComponent } from './pages/week4/volume/volume.component';
import { RinheritanceComponent } from './pages/week5/rinheritance/rinheritance.component';
import { SpellerComponent } from './pages/week5/speller/speller.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'', component: HomeComponent},
  // {path: '**', redirectTo: 'home', pathMatch: 'full'},
  {path:'Week-1/Hello', component: HelloComponent},
  {path:'Week-1/Population', component: PopulationComponent},
  {path:'Week-1/Mario_Easy', component: MarioEasyComponent},
  {path:'Week-1/Mario_Difficult', component: MarioDifficultComponent},
  {path:'Week-1/Cash', component: CashComponent},
  {path:'Week-1/Credit', component: CreditComponent},
  {path:'Week-2/Scrabble', component: ScrabbleComponent},
  {path:'Week-2/Readability', component: ReadabilityComponent},
  {path:'Week-2/Caesar', component: CaesarComponent},
  {path:'Week-2/Substitution', component: SubstitutionComponent},
  {path:'Week-3/Sort', component: SortComponent},
  {path:'Week-3/Plurality', component: PluralityComponent},
  {path:'Week-3/Runoff', component: RunoffComponent},
  {path:'Week-3/Tideman', component: TidemanComponent},
  {path:'Week-4/Filter_Easy', component: FilterEasyComponent},
  {path:'Week-4/Filter_Difficult', component: FilterDifficultComponent},
  {path:'Week-4/Recover', component: RecoverComponent},
  {path:'Week-4/Volume', component: VolumeComponent},
  {path:'Week-5/Inheritance', component: RinheritanceComponent},
  {path:'Week-5/Speller', component: SpellerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
