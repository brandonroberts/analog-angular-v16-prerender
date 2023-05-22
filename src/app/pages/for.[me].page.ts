import { injectContent } from "@analogjs/content";
import { AsyncPipe, JsonPipe } from "@angular/common";
import { ApplicationRef, Component, inject } from "@angular/core";
import { tap } from "rxjs";

@Component({
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  template: `
    {{ content$ | async | json }}
  `
})
export default class AboutMePageComponent {
  content$ = injectContent({ param: 'me', subdirectory: 'pages' }).pipe(tap(console.log));

  constructor() {
    // const appRef = inject(ApplicationRef).isStable.subscribe(console.log);
    // this.content$.subscribe(c => console.log('content', c));
  }

  ngOnDestroy() {
    console.log('destroy');
  }
}