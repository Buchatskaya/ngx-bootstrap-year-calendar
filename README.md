# ngx-bootstrap-year-calendar
Angular 2/4 wrapper for jquery bootstrap-year-calendar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.4.

## Installation
>npm install ngx-bootstrap-year-calendar


## Usage Example
app.module.ts

```javascript
import { NgModule } from "@angular/core";
import { BrowserModule} from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { BootstrapYearCalendarModule } from "ngx-bootstrap-year-calendar";

@NgModule({
    imports: [BrowserModule, HttpModule, BootstrapYearCalendarModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```
app.component.ts

```javascript
 import {Component} from '@angular/core';
 import { BootstrapYearCalendar } from "ngx-bootstrap-year-calendar";
 @Component({
     selector: 'app',
     templateUrl: 'app.component.html'
 })
 export class AppComponent {

    private bootstrapYearCalendarOptions: BootstrapYearCalendar = {
        dataSource: [
            {
            id: 1,
            name: 'Object-based radical open system',
            startDate: new Date('2017-05-21T00:34:15Z'),
            endDate: new Date('2017-07-12T21:26:29Z')
            }, {
            id: 2,
            name: 'Phased mobile firmware',
            startDate: new Date('2017-05-19T19:19:20Z'),
            endDate: new Date('2017-06-28T17:43:06Z')
            }, {
            id: 3,
            name: 'Networked actuating access',
            startDate: new Date('2017-06-04T16:37:28Z'),
            endDate: new Date('2017-05-31T19:28:32Z')
            }
        ],
  };

 }
```

app.component.html

```html
<app-bootstrap-year-calendar
[options]="bootstrapYearCalendarOptions"
(clickDay)="onClickDay($event)"
(dayContextMenu)="onDayContextMenu($event)"
(selectRange)="onSelectRange($event)"></app-bootstrap-year-calendar>
```

## Bootstrap Year Calendar Options

```
  {
    allowOverlap: boolean;
    alwaysHalfDay: boolean;
    contextMenuItems: Array<//see context menu>;
    dataSource: //see datasource;
    disabledDays: Date[];
    displayWeekNumber: boolean;
    enableContextMenu: boolean;
    enableRangeSelection: boolean;
    language: string;
    maxDate: Date;
    minDate: Date;
    mouseOnDayPopUp: boolean; //toggle popover on mouse hover
    roundRangeLimits: boolean;
    startYear: number;
    style: string;
  }
  ```

### Context Menu
```
 {
    text: string;
    click: (dataSourceElement: any) => void;
    subMenu: [
        {
            text: string;
            click: (dataSourceElement: any) => void;
            subMenu: []
        }
    ];
  }
```

### Datasource
```
 {
    id: number;
    name: string;
    color: string; //optional
    startDate: Date;
    endDate: Date;
  }
```

### Events
``` javascript
clickDay(e)
dayContextMenu(e)
mouseOnDay(e)
mouseOutDay(e)
renderEnd(e)
selectRange(e)
```

[Jquery Bootstrap Year Calendar Documentation](https://www.google.com "Jquery Bootstrap year calendar Page")