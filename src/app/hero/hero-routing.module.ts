import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewComponent } from "./new/new.component";

const routes: Routes = [
    { path: "", component: NewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
export const routingComponents = [NewComponent]