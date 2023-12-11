import {Component, Input} from '@angular/core';
import {ICar} from "../../interface";
import {CarService} from "../../service";

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {
  @Input() car: ICar;

  constructor(private carService:CarService) {
  }

  update():void {
    this.carService.setCarForUpdate(this.car)
  }

  delete():void {
    this.carService.deleteById(this.car.id).subscribe(()=>{
      this.carService.setTrigger()
    })
  }
}
