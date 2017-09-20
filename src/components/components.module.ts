import { NgModule } from '@angular/core';
import { ExampleComponent } from './example/example';
import { DataFormComponent } from './data-form/data-form';
@NgModule({
	declarations: [ExampleComponent,
    DataFormComponent],
	imports: [],
	exports: [ExampleComponent,
    DataFormComponent]
})
export class ComponentsModule {}
