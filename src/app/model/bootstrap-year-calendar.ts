export class BootstrapYearCalendarModel {
  allowOverlap?: boolean;
  alwaysHalfDay?: boolean;
  contextMenuItems?: Array<BootstrapYearCalendarContextMenu>;
  dataSource?: BootstrapYearCalendarDataSource[];
  disabledDays?: Date[];
  displayWeekNumber?: boolean;
  enableContextMenu?: boolean;
  enableRangeSelection?: boolean;
  language?: string;
  maxDate?: Date;
  minDate?: Date;
  mouseOnDayPopUp?: boolean;
  roundRangeLimits?: boolean;
  startYear?: number;
  style?: string;
}

export class BootstrapYearCalendarDataSource {
  id: number;
  name: string;
  color?: string;
  startDate: Date;
  endDate: Date;
}

export class BootstrapYearCalendarContextMenu {
  text: string;
  click: (dataSourceElement: any) => void;
  subMenu: BootstrapYearCalendarContextMenu[];
}
