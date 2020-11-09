import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TrainingSessionListComponent } from './training-session-list/training-session-list.component';
import { CreateTrainingSessionComponent } from './create-training-session/create-training-session.component';
import { FormsModule } from '@angular/forms';
import { UpdateTrainingSessionComponent } from './update-training-session/update-training-session.component';
import { TrainingSessionDetailsComponent } from './training-session-details/training-session-details.component';
import { TrainerListComponent } from './trainer-list/trainer-list.component';
import { AddTrainerComponent } from './add-trainer/add-trainer.component';
import { UpdateTrainerComponent } from './update-trainer/update-trainer.component';
import { VirtualMachineListComponent } from './virtual-machine-list/virtual-machine-list.component';
import { AddVirtualMachineComponent } from './add-virtual-machine/add-virtual-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingSessionListComponent,
    CreateTrainingSessionComponent,
    UpdateTrainingSessionComponent,
    TrainingSessionDetailsComponent,
    TrainerListComponent,
    AddTrainerComponent,
    UpdateTrainerComponent,
    VirtualMachineListComponent,
    AddVirtualMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
