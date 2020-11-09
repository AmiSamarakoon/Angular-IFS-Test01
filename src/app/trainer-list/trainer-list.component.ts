import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  trainers: Trainer[];

  constructor(private trainerService:TrainerService, private router: Router) { }

  ngOnInit(): void {
    this.getTrainers();
  }

  private getTrainers(){
    this.trainerService.getTrainerList().subscribe(data=>{
      this.trainers = data;
    });
  }
  updateTrainer(id:number){
    this.router.navigate(['update-trainer',id]);
  }
  deleteTrainer(id:number){
    this.trainerService.deleteTrainer(id).subscribe(data=>{
      console.log(data);
      this.getTrainers();
    })
  }
}
