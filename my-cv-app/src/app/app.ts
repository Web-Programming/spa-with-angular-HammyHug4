// import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';


// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.html',
//   styleUrl: './app.css'
// })
// export class App {
//   protected readonly title = signal('my-cv-app');
// }
import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
 selector: 'app-root',
 imports: [RouterOutlet, RouterLink, RouterLinkActive],
 templateUrl: './app.html',
 styleUrl: './app.css'
})
export class App {
 protected readonly title = signal('my-cv-app');
}

