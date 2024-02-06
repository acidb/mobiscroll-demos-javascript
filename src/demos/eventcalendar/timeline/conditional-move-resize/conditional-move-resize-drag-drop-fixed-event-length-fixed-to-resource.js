import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.eventcalendar('#demo-conditional-drag-drop-timeline', {
      view: {
        timeline: { type: 'day' },
      },
      dragToMove: true,
      dragToResize: true,
      data: [
        {
          color: 'cyan',
          end: 'dyndatetime(y,m,d,14)',
          resize: false,
          resource: 1,
          start: 'dyndatetime(y,m,d,9)',
          title: 'Event 1 (cannot be resized)',
        },
        {
          color: 'green',
          dragBetweenResources: false,
          end: 'dyndatetime(y,m,d,16)',
          resource: 2,
          start: 'dyndatetime(y,m,d,10)',
          title: 'Event 3 (cannot be moved between resources)',
        },
        {
          color: 'blue',
          dragInTime: false,
          end: 'dyndatetime(y,m,d,15)',
          resource: 3,
          start: 'dyndatetime(y,m,d,11)',
          title: 'Event 5 (cannot be moved in time)',
        },
        {
          color: 'pink',
          resource: 1,
          end: 'dyndatetime(y,m,d,19)',
          start: 'dyndatetime(y,m,d,16)',
          title: 'Event 2',
        },
        {
          color: 'yellow',
          end: 'dyndatetime(y,m,d,20)',
          resource: 2,
          start: 'dyndatetime(y,m,d,17)',
          title: 'Event 4',
        },
        {
          color: 'gray',
          end: 'dyndatetime(y,m,d,18)',
          resource: 3,
          start: 'dyndatetime(y,m,d,16)',
          title: 'Event 6',
        },
        {
          color: 'red',
          resource: 4,
          end: 'dyndatetime(y,m,d,13)',
          start: 'dyndatetime(y,m,d,9)',
          title: 'Event 7',
        },
        {
          color: 'brown',
          end: 'dyndatetime(y,m,d,15)',
          resource: 5,
          start: 'dyndatetime(y,m,d,11)',
          title: 'Event 8',
        },
        {
          color: 'teal',
          end: 'dyndatetime(y,m,d,18)',
          resource: 6,
          start: 'dyndatetime(y,m,d,13)',
          title: 'Event 9',
        },
      ],
      resources: [
        {
          id: 1,
          name: 'Resource A',
        },
        {
          id: 2,
          name: 'Resource B',
        },
        {
          id: 3,
          name: 'Resource C',
        },
        {
          id: 4,
          name: 'Resource D (Events cannot be moved in time)',
          eventDragInTime: false,
        },
        {
          id: 5,
          name: 'Resource E (Events cannot be moved between resources)',
          eventDragBetweenResources: false,
        },
        {
          id: 6,
          name: 'Resource F (Events cannot be resized)',
          eventResize: false,
        },
      ],
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-conditional-drag-drop-timeline"></div>
  `,
};
