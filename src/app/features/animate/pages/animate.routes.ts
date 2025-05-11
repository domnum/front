import { Routes } from '@angular/router';
import { AnimateOnScrollBasicDemo } from './animate-component/animate-on-scroll-basic-demo';

// Precisamos verificar se existe um componente de layout para Animate
// Se não existir, você pode criar um layout específico ou usar o componente diretamente

export const ANIMATE_ROUTES: Routes = [
  {
    path: '',
    // Como nas outras rotas do projeto, usamos um componente de layout como container
    // Se você não tiver um AnimateLayoutComponent, pode usar o componente diretamente
    // ou criar o layout posteriormente
    // component: AnimateLayoutComponent,
    // children: [
    //   {
    //     path: '',
    //     component: AnimateOnScrollBasicDemo
    //   }
    // ]

    // Solução temporária até criar um layout específico:
    component: AnimateOnScrollBasicDemo
    
    // Alternativamente, se você quiser usar lazy loading:
    // loadComponent: () => import('./animate-component/animate-on-scroll-basic-demo').then(m => m.AnimateOnScrollBasicDemo)
  }
];