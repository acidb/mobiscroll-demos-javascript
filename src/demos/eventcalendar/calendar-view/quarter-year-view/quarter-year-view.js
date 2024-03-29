import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var calendar = mobiscroll.eventcalendar('#quarter-year-view', {
      view: {
        calendar: { type: 'month', size: 3 },
      },
      height: 'auto',
      renderHeader: function () {
        return (
          '<div mbsc-calendar-nav></div>' +
          '<div class="quarter-year-header-picker">' +
          '<label>Quarter<input mbsc-segmented type="radio" name="view" value="quarter" class="md-quarter-year-change" checked></label>' +
          '<label>Year<input mbsc-segmented type="radio" name="view" value="year" class="md-quarter-year-change"></label>' +
          '</div>' +
          '<div mbsc-calendar-prev class="quarter-year-header-prev"></div>' +
          '<div mbsc-calendar-today class="quarter-year-header-today"></div>' +
          '<div mbsc-calendar-next class="quarter-year-header-next"></div>'
        );
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        calendar.setEvents(events);
      },
      'jsonp',
    );

    document.querySelectorAll('.md-quarter-year-change').forEach(function (elm) {
      elm.addEventListener('change', function (ev) {
        switch (ev.target.value) {
          case 'quarter':
            calendar.setOptions({
              view: {
                calendar: { type: 'month', size: 3 },
              },
              height: 'auto',
            });
            break;
          case 'year':
            calendar.setOptions({
              view: {
                calendar: { type: 'year' },
              },
              height: '100%',
            });
            break;
        }
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="quarter-year-view" class="md-quarter-year-view-cont"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mbsc-calendar .quarter-year-header-picker .mbsc-segmented {
    max-width: 200px;
    margin: 0 auto;
}

.quarter-year-header-picker {
    flex: 1 0 auto;
}
  `,
};
