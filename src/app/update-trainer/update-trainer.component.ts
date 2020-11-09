import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Trainer } from '../trainer';
import { TrainerService } from '../trainer.service';

@Component({
  selector: 'app-update-trainer',
  templateUrl: './update-trainer.component.html',
  styleUrls: ['./update-trainer.component.css']
})
export class UpdateTrainerComponent implements OnInit {

  id:number;
  trainer:Trainer = new Trainer();
  constructor(private trainerService:TrainerService, private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.trainerService.getTrainerById(this.id).subscribe(data=>{
      this.trainer = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.trainerService.updateTrainer(this.id,this.trainer).subscribe(data=>{
      this.goToTrainerList();
    },error=> console.log(error));
  }
  goToTrainerList(){
    this.router.navigate(['/trainers']);
  }
}
