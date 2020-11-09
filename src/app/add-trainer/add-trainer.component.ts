
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-add-trainer',
  templateUrl: './add-trainer.component.html',
  styleUrls: ['./add-trainer.component.css']
})
export class AddTrainerComponent implements OnInit {

  trainer: Trainer = new Trainer();
  constructor(private trainerService: TrainerService, private router:Router) { }

  ngOnInit(): void {
  }

  saveTrainer(){
    this.trainerService.addTrainer(this.trainer).subscribe(data=>{
      console.log(data);
      this.goToTrainerList();
    },error=>console.log(error));
  }

  goToTrainerList(){
    this.router.navigate(['/trainers']);
  }

  onSubmit(){
    console.log(this.trainer);
    this.saveTrainer();
  }
}
