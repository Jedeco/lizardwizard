import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">Created with ♥♥♥ by <b><a href="mailto:jeremy.de.cock@gmail.com">JDC</a></b> 2017</span>
    <div class="socials">
      <a href="https://github.com/jedeco" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.facebook.com/jeremy.dc.71" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/lizaarwizaar" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/in/jeremy-de-cock-055a05181" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
