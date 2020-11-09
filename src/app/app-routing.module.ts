import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { AddVirtualMachineComponent } from './add-virtual-machine/add-virtual-machine.component';
import { CreateTrainingSessionComponent } from './create-training-session/create-training-session.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';

import { TrainingSessionDetailsComponent } from './training-session-details/training-session-details.component';
import { TrainingSessionListComponent } from './training-session-list/training-session-list.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';
import { UpdateTrainingSessionComponent } from './update-training-session/update-training-session.component';
import { VirtualMachineListComponent } from './virtual-machine-list/virtual-machine-list.component';


const routes: Routes = [
  { path: 'trainingSessions',component: TrainingSessionListComponent},
  { path: '', redirectTo:'trainingSessions',pathMatch:'full'},
  { path :'create-training-session', component: CreateTrainingSessionComponent},
  { path :'update-training-session/:id', component: UpdateTrainingSessionComponent},
  { path: 'training-session-details/:id', component: TrainingSessionDetailsComponent},
  { path : 'trainers', component: TrainerListComponent},
  { path :'add-trainer', component: AddTrainerComponent},
  { path : 'update-trainer/:id',component:UpdateTrainerComponent},
  { path :'virtualMachines', component:VirtualMachineListComponent},
  { path :'add-virtual-machines', component:AddVirtualMachineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }