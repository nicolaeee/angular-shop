import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-copm',
  templateUrl: './my-first-copm.component.html',
  styleUrl: './my-first-copm.component.scss'
})
export class MyFirstCopmComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  isSubmitted: boolean = false;
  messages: Array<any> = [];

  onSubmit(){
    console.log(this.name)
  }

}
