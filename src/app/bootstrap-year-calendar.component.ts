import {
  Component, AfterViewInit, ElementRef, OnDestroy,
  Input, ChangeDetectorRef, Output, EventEmitter, ViewChild
} from '@angular/core';
import {BootstrapYearCalendarModel} from './model/bootstrap-year-calendar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription, Subject} from 'rxjs/Rx';
import 'bootstrap-year-calendar';
import * as moment from 'moment';

declare var jQuery: any;

const TEMPLATE = '<div class="calendar"></div>';

@Component({
  selector: 'app-bootstrap-year-calendar',
  template: TEMPLATE
})
export class BootstrapYearCalendarComponent implements AfterViewInit {

  @Input() options: BootstrapYearCalendarModel = {};
  @Output() clickDay = new EventEmitter<any>();
  @Output() dayContextMenu = new EventEmitter<any>();
  @Output() mouseOnDay = new EventEmitter<any>();
  @Output() mouseOutDay = new EventEmitter<any>();
  @Output() renderEnd = new EventEmitter<any>();
  @Output() selectRange = new EventEmitter<any>();

  private defaultOptions: BootstrapYearCalendarModel = {
    allowOverlap: true,
    alwaysHalfDay: false,
    contextMenuItems: [],
    dataSource: [],
    disabledDays: [],
    displayWeekNumber: false,
    enableContextMenu: true,
    enableRangeSelection: true,
    language: 'en',
    maxDate: null,
    minDate: null,
    mouseOnDayPopUp: true,
    roundRangeLimits: false,
    startYear: moment(new Date).year(),
    style: 'border'
  };

  constructor() {
  }

  ngAfterViewInit() {
    if (this.options) {
      this.options = Object.assign(this.defaultOptions, this.options);
    }
    ;
    jQuery('.calendar').calendar(this.options);
    jQuery('.calendar').clickDay(e => this.clickDay.emit(e));
    jQuery('.calendar').mouseOnDay(e => {
      if (this.options.mouseOnDayPopUp && e.events.length > 0) {
        let content = '';

        // tslint:disable-next-line:forin
        for (const i in e.events) {
          content += '<div class="event-tooltip-content">'
            + '<div class="event-name" style="color:' + e.events[i].color + '">' + e.events[i].name + '</div>'
            + '</div>';
        }

        jQuery(e.element).popover({
          trigger: 'manual',
          container: 'body',
          html: true,
          content: content
        });

        jQuery(e.element).popover('show');
      }
      this.mouseOnDay.emit(e);
    });
    jQuery('.calendar').mouseOutDay(e => {
      if (this.options.mouseOnDayPopUp && e.events.length > 0) {
        jQuery(e.element).popover('hide');
      }
      this.mouseOutDay.emit(e);
    });
    jQuery('.calendar').renderEnd(e => {
      this.renderEnd.emit(e);
    });
    jQuery('.calendar').selectRange(e => {
      this.selectRange.emit(e);
    });
  }

}
