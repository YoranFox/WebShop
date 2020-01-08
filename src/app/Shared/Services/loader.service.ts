import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {MusicDemoComponent} from '../music-demo/music-demo.component';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  rootViewContainer: ViewContainerRef;
  constructor(private factoryResolver: ComponentFactoryResolver) {
    this.factoryResolver = factoryResolver
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef
  }

  addDynamicComponent(item : any) {

    const factory = this.factoryResolver
      .resolveComponentFactory(MusicDemoComponent);
    const component = factory
      .create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }

}
