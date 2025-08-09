import { Routes } from '@angular/router';
import { HomePageComponent } from './home_page/home_page.component';
import { LinktreePageComponent } from './linktree_page/linktree_page.component';
import { PresentationCardComponent } from './presentation_card/presentation_card.component';
import { PreviewCvPageComponent } from './preview_cvPage/preview_cvPage.component';

export const routes: Routes = [

  {
    path: "home",
    component: HomePageComponent
  },
  {
    path: "linktree",
    component: LinktreePageComponent
  },
  {
    path: "card",
    component: PresentationCardComponent
  },
  {
    path: "cv",
    component: PreviewCvPageComponent
  },
  {
    path: "**",
    redirectTo: "home"
  },

];
