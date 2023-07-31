# ng10-odometer [![npm version](https://img.shields.io/npm/v/ng10-odometer.svg?style=flat)](https://www.npmjs.com/package/ng10-odometer) [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

Odometer for Angular 10

Made on the basis of ng2-odometer.
Fixed static forRoot(): ModuleWithProviders; to static forRoot(): ModuleWithProviders<Ng10OdometerModule>;

## Quick Start

```
npm install ng10-odometer --save
```

## Table of contents

- [ng10-odometer  ](#ng10-odometer--)
  - [Quick Start](#quick-start)
  - [Table of contents](#table-of-contents)
  - [Setup](#setup)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Demo](#demo)
  - [TODO:](#todo)
  - [License](#license)

## Setup

First you need to install the npm module:
```sh
npm install ng10-odometer --save
```

Then add the `Ng10OdometerModule` to the imports array of your application module.

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng10OdometerModule } from 'ng10-odometer'; // <-- import the module
import { AppComponent} from './app.component';

@NgModule({
    imports: [
      BrowserModule, 
      Ng10OdometerModule.forRoot() // <-- include it in your app module
    ], 
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
    //
}
```

## Usage 

Use the `<ng10-odometer></ng10-odometer>` component to create an odometer. The `number` is required attribute. 
The `number` represents the limit at which the odometer will travel. The `config` an object with the configuration properties, this is NOT required. 

```js
@Component({
   selector: 'main-element',
   template: `
        ...
        <ng10-odometer [number]="number" [config]="{ }"></ng10-odometer>
        <!-- Further content here -->
        ...
   `
})
export class MainElementComponent {
  public number: number = 1000;
}
```

When on manual mode (`[config]="{ auto: false }"`), you can update the `number` attribute and that will trigger an odometer update right away. The `observable` is an Observable which will be used as a trigger for the odometer when on manual mode. 

```js
@Component({
   selector: 'main-element',
   template: `
        ...
        <ng10-odometer [number]="number" [config]="{ auto: false }" [observable]="observable"></ng10-odometer>
        <!-- Further content here -->
        ...
   `
})
export class MainElementComponent {
  public number: number = 1000;
  public observable: Observable<boolean>;
  private observer: Observer<boolean>;
  
  constructor() {
    this.observable = new Observable<boolean>((observer: any) => this.observer = observer).share();

    // Trigger odometer after 2s
    setTimeout(() => this.observer.next(true), 2000);
  }
}
```

## Configuration

The component accepts either a `[config]="{ ... }"` attribute with an object with all the configurable attribues or independent attributes for each configuration.

| Option        | Type      | Default     | Description   |
| --------------| --------- | ----------- |-------------- |
| `animation`   | string    | 'slide'     | Animation effect type. <br> Options: 'slide', 'count'
| `format`      | string    | '(,ddd)'    | Format to apply on the numbers. <br> Format - Example: <br> (,ddd) - 12,345,678 <br> (,ddd).dd - 12,345,678.09 <br> (.ddd),dd - 12.345.678,09 <br> ( ddd),dd - 12 345 678,09 <br> d         -  12345678
| `theme`       | string    | 'default'   | The desired theme. <br> Options: 'default', 'minima', 'digital', 'car', 'plaza', 'slot-machine', 'train-station'
| `value`       | number    | 0           | Initial value of the odometer
| `auto`        | boolean   | true        | Setup auto or manual mode for the odometer

```js
@Component({
   selector: 'main-element',
   template: `
        ...
        <ng10-odometer 
            [number]="1000" 
            [observable]="observable" 
            [config]="config"></ng10-odometer>
        <!-- Further content here -->

        <ng10-odometer 
            [number]="1000" 
            [observable]="observable"
            [config]="{ animation: 'count', format: 'd', theme: 'car', value: 50, auto: false }">
        </ng10-odometer>
        <!-- Further content here -->

        <ng10-odometer 
            [number]="1000"  
            [observable]="observable"
            [animation]="'count'"
            [format]="'d'"
            [theme]="'car'"
            [value]="0",
            [auto]="false">
        </ng10-odometer>
        <!-- Further content here -->
        ...
   `
})
export class MainElementComponent {
    public config = {
        animation: 'count', 
        format: 'd', 
        theme: 'car', 
        value: 50,
        auto: true,
    }

    ...
}
```

If you add both, the `[config]` and any independent configuration, the independent config will overwrite the `[config]` object.

## Demo

The [demo](demo) subfolder contains a project created with angular-cli that has been adapted to showcase the functionality of ng10-odometer.
To execute the code follow this steps:

```
// Go the the demo folder
cd demo

// Install dependencies
npm install

// Run the server
ng serve
```

Then go to [http://localhost:4200](http://localhost:4200/) to check the demo running.

## TODO:

* Add tests to the library and demo
* Add new themes
* Create a Directive also

## License

[MIT](LICENSE)
