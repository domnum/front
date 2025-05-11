// Import PrimeNG modules
import { NgModule } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

    

    @NgModule({
        imports: [
            AnimateOnScrollModule
        ],
          exports: [
            AnimateOnScrollModule,
          ],
      providers: [  ]
    })
    export class ImportsModule {}
    