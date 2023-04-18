import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LifecycleComponent } from './Lifecycle/Lifecycle.component';
import { Encapsualtion1Component } from './encapsualtion1/encapsualtion1.component';
import { Encapsualtion2Component } from './encapsualtion2/encapsualtion2.component';
import { CounterComponentComponent } from './counter-component/counter-component.component';
import { CountIncrementComponent } from './count-increment/count-increment.component';
import { CountDecrementComponent } from './count-decrement/count-decrement.component';
import { ComponentInteractionComponent } from './component_interaction/component-interaction/component-interaction.component';
import { FormsModule } from '@angular/forms';
import { ChildGetSetComponentComponent } from './component_interaction/component-interaction/child-get-set-component/child-get-set-component.component';
import { ProjectionComponent } from './projection/projection.component';
import { DynamicDirective } from './DynamiComponent/dynamic.directive';
import { ContainerOne, ContainerThree, ContainerTwo } from './DynamiComponent/Dynamic-component';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleComponent,
    Encapsualtion1Component,
    Encapsualtion2Component,
    CounterComponentComponent,
    CountIncrementComponent,
    CountDecrementComponent,
    ComponentInteractionComponent,
    ChildGetSetComponentComponent,
    ProjectionComponent,
    DynamicDirective,
    ContainerOne,
    ContainerTwo,
    ContainerThree

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
