import { NgxBootstrapYearCalendarPage } from './app.po';

describe('ngx-bootstrap-year-calendar App', () => {
  let page: NgxBootstrapYearCalendarPage;

  beforeEach(() => {
    page = new NgxBootstrapYearCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
