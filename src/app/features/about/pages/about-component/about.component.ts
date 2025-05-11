import { Component, Inject } from '@angular/core';
import { BaseComponent } from '../../../../shared/base/base.component';
import { ThemeService } from '../../../../core/services/theme.service';

@Component({
    selector: 'about.component',
    templateUrl: './about.component.html',
    standalone: true,
    
})
export class AboutUsComponent extends BaseComponent {
  constructor(
    @Inject(ThemeService) protected override themeService: ThemeService
  ) {
    super();
  }
}