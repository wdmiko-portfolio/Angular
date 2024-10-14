import { NgIf } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Debe ser un array
})
export class AppComponent implements OnInit {
  title = 'pokedex-angular';
  showScreenInit:boolean = true;

  ngOnInit(): void {
    this.loadState();
  }

  @HostListener ('document:keydown.enter', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    this.toogleStart();
  }


  toogleStart(): void{
    this.showScreenInit = false;
    localStorage.setItem('showScreenInit', this.showScreenInit.toString());
    console.log('enter')
  }

  reset(event: MouseEvent): void{
    console.log('on');
    (event.target as HTMLElement).blur(); //dont focus button
    this.showScreenInit=true
    localStorage.setItem('showScreenInit', this.showScreenInit.toString());
  }

  private loadState(): void {
    const savedState = localStorage.getItem('showScreenInit');
    if (savedState !== null) {
      this.showScreenInit = savedState === 'true';
    }
  }
}
