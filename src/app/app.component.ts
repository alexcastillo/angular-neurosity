import { Component, OnInit } from '@angular/core';
import { mind } from './services/notion';
import { map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  focusScore$ = mind.focus().pipe(
    map((focus) => focus.probability * 100),
    tap((focusScore) => {
      console.log(focusScore);
    })
  );

  ngOnInit() {
    mind
      .login({
        email: environment.email,
        password: environment.password,
      })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  }
}
