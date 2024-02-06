import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var inst = mobiscroll.eventcalendar('#demo-event-hooks', {
      view: {
        agenda: { type: 'month' },
      },
      onDestroy: function () {
        // Logic running on component destroy
        console.log('onDestroy');
      },
      onEventClick: function (args) {
        // Logic for event click
        console.log('onEventClick', args);
      },
      onEventDoubleClick: function (args) {
        // Logic for event double click
        console.log('onEventDoubleClick', args);
      },
      onEventHoverIn: function (args) {
        // Logic for event hover in
        console.log('onEventHoverIn', args);
      },
      onEventHoverOut: function (args) {
        // Logic for event hover out
        console.log('onEventHoverOut', args);
      },
      onEventRightClick: function (args) {
        // Logic for event right click
        console.log('onEventRightClick', args);
      },
      onInit: function () {
        // Logic running on component init
        console.log('onInit');
      },
      onPageChange: function (args) {
        // Logic running on calendar page change
        console.log('onPageChange', args);
      },
      onPageLoaded: function (args) {
        // Use it to inject custom markup & attach custom listeners
        console.log('onPageLoaded', args);
      },
      onPageLoading: function (args) {
        // Use it to load data on demand
        console.log('onPageLoading', args);
      },
      onSelectedDateChange: function (args) {
        // Use it to keep track of the selected date externally
        console.log('onSelectedDateChange', args);
      },
    });

    mobiscroll.getJson(
      'https://trial.mobiscroll.com/events/?vers=5',
      function (events) {
        inst.setEvents(events);
      },
      'jsonp',
    );
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-event-hooks"></div>
  `,
};
