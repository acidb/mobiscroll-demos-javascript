import * as mobiscroll from '@mobiscroll/javascript';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    (function () {
      var formatDate = mobiscroll.formatDate;
      var doctors = [
        {
          id: 1,
          name: 'Dr. Breanne Lorinda',
          color: '#b33d3d',
        },
        {
          id: 2,
          name: 'Dr. Ryan Melicent',
          color: '#309346',
        },
        {
          id: 3,
          name: 'Dr. Meredith Chantelle',
          color: '#c77c0a',
        },
      ];
      var currentEvent;
      var timer;
      var tooltipElm = document.getElementById('custom-event-tooltip-popup');
      var deleteButton = document.getElementById('tooltip-event-delete');
      var fileButton = document.getElementById('tooltip-event-view');
      var statusButton = document.getElementById('tooltip-event-status');
      var header = document.getElementById('tooltip-event-header');
      var data = document.getElementById('tooltip-event-name-age');
      var time = document.getElementById('tooltip-event-time');
      var status = document.getElementById('tooltip-event-title');
      var reason = document.getElementById('tooltip-event-reason');
      var loc = document.getElementById('tooltip-event-location');

      var calendar = mobiscroll.eventcalendar('#demo-custom-event-tooltip', {
        view: {
          timeline: {
            type: 'day',
            startDay: 1,
            endDay: 5,
            startTime: '08:00',
            endTime: '16:00',
            allDay: false,
          },
        },
        resources: doctors,
        data: [
          {
            title: 'Jude Chester',
            age: 69,
            start: 'dyndatetime(y,m,d,8)',
            end: 'dyndatetime(y,m,d,8,45)',
            confirmed: false,
            reason: 'Headaches morning & afternoon',
            location: 'Topmed, Building A, Room 203',
            resource: 1,
          },
          {
            title: 'Leon Porter',
            age: 44,
            start: 'dyndatetime(y,m,d,9)',
            end: 'dyndatetime(y,m,d,9,45)',
            confirmed: false,
            reason: 'Left abdominal pain',
            location: 'Topmed, Building D, Room 360',
            resource: 1,
          },
          {
            title: 'Merv Kenny',
            age: 56,
            start: 'dyndatetime(y,m,d,10)',
            end: 'dyndatetime(y,m,d,10,45)',
            confirmed: true,
            reason: 'Itchy, red rashes',
            location: 'Topmed, Building D, Room 360',
            resource: 1,
          },
          {
            title: 'Derek Austyn',
            age: 72,
            start: 'dyndatetime(y,m,d,13)',
            end: 'dyndatetime(y,m,d,13,45)',
            confirmed: false,
            reason: 'Nausea & weakness',
            location: 'Rose Medical Center, Room 18',
            resource: 1,
          },
          {
            title: 'Jenifer Kalyn',
            age: 65,
            start: 'dyndatetime(y,m,d,14)',
            end: 'dyndatetime(y,m,d,14,45)',
            confirmed: true,
            reason: 'Cough & fever',
            location: 'Rose Medical Center, Room 18',
            resource: 1,
          },
          {
            title: 'Lily Racquel',
            age: 54,
            start: 'dyndatetime(y,m,d,10)',
            end: 'dyndatetime(y,m,d,10,45)',
            confirmed: true,
            reason: 'Dry, persistent cough & headache',
            location: 'Procare, Building C, Room 12',
            resource: 2,
          },
          {
            title: 'Mia Sawyer',
            age: 59,
            start: 'dyndatetime(y,m,d,11)',
            end: 'dyndatetime(y,m,d,11,45)',
            confirmed: true,
            reason: 'Difficulty sleeping & loss of appetite',
            location: 'Procare, Building C, Room 12',
            resource: 2,
          },
          {
            title: 'Fred Valdez',
            age: 62,
            start: 'dyndatetime(y,m,d,15)',
            end: 'dyndatetime(y,m,d,15,45)',
            confirmed: false,
            reason: 'High blood pressure',
            location: 'Procare, Building C, Room 40',
            resource: 2,
          },
          {
            title: 'Sylvia Cale',
            age: 41,
            start: 'dyndatetime(y,m,d,8)',
            end: 'dyndatetime(y,m,d,8,45)',
            confirmed: false,
            reason: 'Fever & sore throat',
            location: 'MedStar, Building A, Room 1',
            resource: 3,
          },
          {
            title: 'Isadora Lyric',
            age: 30,
            start: 'dyndatetime(y,m,d,9)',
            end: 'dyndatetime(y,m,d,9,45)',
            confirmed: false,
            reason: 'Constant tiredness & weakness',
            location: 'MedStar, Building A, Room 1',
            resource: 3,
          },
          {
            title: 'Jon Candace',
            age: 63,
            start: 'dyndatetime(y,m,d,12)',
            end: 'dyndatetime(y,m,d,12,45)',
            confirmed: true,
            reason: 'Nausea & weakness',
            location: 'MedStar, Building A, Room 1',
            resource: 3,
          },
          {
            title: 'Layton Drake',
            age: 57,
            start: 'dyndatetime(y,m,d,13)',
            end: 'dyndatetime(y,m,d,13,45)',
            confirmed: true,
            reason: 'Headaches & loss of appetite',
            location: 'Vitalife, Room 160',
            resource: 3,
          },
          {
            title: 'Florence Amy',
            age: 73,
            start: 'dyndatetime(y,m,d,14)',
            end: 'dyndatetime(y,m,d,14,45)',
            confirmed: false,
            reason: 'Dry, persistent cough & headache',
            location: 'Vitalife, Room 160',
            resource: 3,
          },
          {
            title: 'Willis Kane',
            age: 44,
            start: 'dyndatetime(y,m,d+1,8)',
            end: 'dyndatetime(y,m,d+1,8,45)',
            confirmed: true,
            reason: 'Back pain',
            location: 'Care Cente, Room 320r',
            resource: 1,
          },
          {
            title: 'Theo Calanthia',
            age: 60,
            start: 'dyndatetime(y,m,d+1,9)',
            end: 'dyndatetime(y,m,d+1,9,45)',
            confirmed: true,
            reason: 'Anxiousness & sleeping disorder',
            location: 'Care Center, Room 320',
            resource: 1,
          },
          {
            title: 'Ford Kaiden',
            age: 53,
            start: 'dyndatetime(y,m,d+1,14)',
            end: 'dyndatetime(y,m,d+1,14,45)',
            confirmed: true,
            reason: 'Nausea & vomiting',
            location: 'Care Center, Room 206',
            resource: 1,
          },
          {
            title: 'Jewell Ryder',
            age: 75,
            start: 'dyndatetime(y,m,d+1,15)',
            end: 'dyndatetime(y,m,d+1,15,45)',
            confirmed: false,
            reason: 'High blood pressure',
            location: 'Care Center, Room 206',
            resource: 1,
          },
          {
            title: 'Antonia Cindra',
            age: 48,
            start: 'dyndatetime(y,m,d+1,12)',
            end: 'dyndatetime(y,m,d+1,12,45)',
            confirmed: true,
            reason: 'Dry, persistent cough',
            location: 'Medica Zone, Building C, Room 2',
            resource: 3,
          },
          {
            title: 'Gerry Irma',
            age: 50,
            start: 'dyndatetime(y,m,d+1,13)',
            end: 'dyndatetime(y,m,d+1,13,45)',
            confirmed: false,
            reason: 'Fever & sore throat',
            location: 'Medica Zone, Building C, Room 2',
            resource: 3,
          },
          {
            title: 'Carlyn Dorothy',
            age: 36,
            start: 'dyndatetime(y,m,d+1,14)',
            end: 'dyndatetime(y,m,d+1,14,45)',
            confirmed: true,
            reason: 'Tiredness & muscle pain',
            location: 'Medica Zone, Building C, Room 2',
            resource: 3,
          },
          {
            title: 'Alma Potter',
            age: 74,
            start: 'dyndatetime(y,m,d-1,10)',
            end: 'dyndatetime(y,m,d-1,10,45)',
            confirmed: true,
            reason: 'High blood pressure',
            location: 'Vitacure, Building D, Room 2',
            resource: 1,
          },
          {
            title: 'Debra Aguilar',
            age: 47,
            start: 'dyndatetime(y,m,d-1,11)',
            end: 'dyndatetime(y,m,d-1,11,45)',
            confirmed: false,
            reason: 'Fever & sore throat',
            location: 'Vitacure, Building D, Room 2',
            resource: 1,
          },
          {
            title: 'Tommie Love',
            age: 42,
            start: 'dyndatetime(y,m,d-1,12)',
            end: 'dyndatetime(y,m,d-1,12,45)',
            confirmed: false,
            reason: 'Dry, persistent cough & headache',
            location: 'Vitacure, Building D, Room 2',
            resource: 1,
          },
          {
            title: 'Marjorie White',
            age: 55,
            start: 'dyndatetime(y,m,d-1,13)',
            end: 'dyndatetime(y,m,d-1,13,45)',
            confirmed: true,
            reason: 'Back pain',
            location: 'Vitacure, Building D, Room 2',
            resource: 1,
          },
          {
            title: 'Brandon Perkins',
            age: 68,
            start: 'dyndatetime(y,m,d-1,14)',
            end: 'dyndatetime(y,m,d-1,14,45)',
            confirmed: true,
            reason: 'Swollen ankles',
            location: 'Vitacure, Building D, Room 2',
            resource: 1,
          },
          {
            title: 'Lora Wilson',
            age: 66,
            start: 'dyndatetime(y,m,d-1,15)',
            end: 'dyndatetime(y,m,d-1,15,45)',
            confirmed: false,
            reason: 'Fever & headache',
            location: 'Vitacure, Building D, Room 2',
            resource: 1,
          },
          {
            title: 'Ismael Bates',
            age: 58,
            start: 'dyndatetime(y,m,d-1,8)',
            end: 'dyndatetime(y,m,d-1,8,45)',
            confirmed: false,
            reason: 'Tiredness & muscle pain',
            location: 'Care Center, Room 300',
            resource: 2,
          },
          {
            title: 'Archie Wilkins',
            age: 69,
            start: 'dyndatetime(y,m,d-1,9)',
            end: 'dyndatetime(y,m,d-1,9,45)',
            confirmed: true,
            reason: 'Fever & headache',
            location: 'Care Center, Room 300',
            resource: 2,
          },
          {
            title: 'Christie Baker',
            age: 71,
            start: 'dyndatetime(y,m,d-1,10)',
            end: 'dyndatetime(y,m,d-1,10,45)',
            confirmed: true,
            reason: 'Headaches morning & afternoon',
            location: 'Care Center, Room 300',
            resource: 2,
          },
          {
            title: 'Laura Shelton',
            age: 45,
            start: 'dyndatetime(y,m,d-1,12)',
            end: 'dyndatetime(y,m,d-1,12,45)',
            confirmed: false,
            reason: 'Dry, persistent cough',
            location: 'Care Center, Room 300',
            resource: 2,
          },
          {
            title: 'Mary Hudson',
            age: 77,
            start: 'dyndatetime(y,m,d-1,9)',
            end: 'dyndatetime(y,m,d-1,9,45)',
            confirmed: true,
            reason: 'Fever & sore throat',
            location: 'Medica Zone, Room 45',
            resource: 3,
          },
          {
            title: 'Ralph Rice',
            age: 64,
            start: 'dyndatetime(y,m,d-1,10)',
            end: 'dyndatetime(y,m,d-1,10,45)',
            confirmed: true,
            reason: 'Left abdominal pain',
            location: 'Medica Zone, Room 45',
            resource: 3,
          },
          {
            title: 'Marc Hoffman',
            age: 53,
            start: 'dyndatetime(y,m,d-1,12)',
            end: 'dyndatetime(y,m,d-1,12,45)',
            confirmed: true,
            reason: 'Dry, persistent cough & headache',
            location: 'Medica Zone, Room 45',
            resource: 3,
          },
          {
            title: 'Arlene Lyons',
            age: 41,
            start: 'dyndatetime(y,m,d-1,14)',
            end: 'dyndatetime(y,m,d-1,14,45)',
            confirmed: true,
            reason: 'Nausea & weakness',
            location: 'Care Center, Room 202',
            resource: 3,
          },
          {
            title: 'Thelma Shaw',
            age: 26,
            start: 'dyndatetime(y,m,d-1,15)',
            end: 'dyndatetime(y,m,d-1,15,45)',
            confirmed: true,
            reason: 'Anxiousness & sleeping disorder',
            location: 'Care Center, Room 202',
            resource: 3,
          },
          {
            title: 'Dory Edie',
            age: 45,
            start: 'dyndatetime(y,m,d-2,9)',
            end: 'dyndatetime(y,m,d-2,9,45)',
            confirmed: true,
            reason: 'Right abdominal pain',
            location: 'Vitacure, Building A, Room 203',
            resource: 2,
          },
          {
            title: 'Kaylin Toni',
            age: 68,
            start: 'dyndatetime(y,m,d-2,10)',
            end: 'dyndatetime(y,m,d-2,10,45)',
            confirmed: true,
            reason: 'Itchy, red rashes',
            location: 'Vitacure, Building A, Room 203',
            resource: 2,
          },
          {
            title: 'Gray Kestrel',
            age: 60,
            start: 'dyndatetime(y,m,d-2,12)',
            end: 'dyndatetime(y,m,d-2,12,45)',
            confirmed: true,
            reason: 'Cough & fever',
            location: 'Vitacure, Building A, Room 203',
            resource: 2,
          },
          {
            title: 'Reg Izabelle',
            age: 41,
            start: 'dyndatetime(y,m,d-2,14)',
            end: 'dyndatetime(y,m,d-2,14,45)',
            confirmed: true,
            reason: 'Fever & headache',
            location: 'Medica Zone, Room 13',
            resource: 2,
          },
          {
            title: 'Lou Andie',
            age: 76,
            start: 'dyndatetime(y,m,d-2,15)',
            end: 'dyndatetime(y,m,d-2,15,45)',
            confirmed: true,
            reason: 'High blood pressure',
            location: 'Medica Zone, Room 13',
            resource: 2,
          },
          {
            title: 'Yancy Dustin',
            age: 52,
            start: 'dyndatetime(y,m,d-2,10)',
            end: 'dyndatetime(y,m,d-2,10,45)',
            confirmed: true,
            reason: 'Fever & headache',
            location: 'Vitacure, Building E, Room 50',
            resource: 3,
          },
          {
            title: 'Terry Clark',
            age: 78,
            start: 'dyndatetime(y,m,d-2,11)',
            end: 'dyndatetime(y,m,d-2,11,45)',
            confirmed: true,
            reason: 'Swollen ankles',
            location: 'Vitacure, Building E, Room 50',
            resource: 3,
          },
        ],
        clickToCreate: false,
        dragToCreate: false,
        dragToMove: true,
        dragToResize: false,
        showEventTooltip: false,
        onEventHoverIn: function (args) {
          var event = args.event;
          var resource = doctors.find(function (dr) {
            return dr.id === event.resource;
          });
          var eventTime = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));
          var button = {};

          currentEvent = event;

          if (event.confirmed) {
            button.text = 'Cancel appointment';
            button.type = 'warning';
          } else {
            button.text = 'Confirm appointment';
            button.type = 'success';
          }

          header.style.backgroundColor = resource.color;
          data.innerHTML = event.title + ', Age: ' + event.age;
          time.innerHTML = eventTime;
          status.innerHTML = event.confirmed ? 'Confirmed' : 'Canceled';
          reason.innerHTML = event.reason;
          loc.innerHTML = event.location;

          statusButton.innerHTML = button.text;
          mobiscroll.getInst(statusButton).setOptions({ color: button.type });

          clearTimeout(timer);
          timer = null;

          tooltip.setOptions({ anchor: args.domEvent.target });
          tooltip.open();
        },
        onEventHoverOut: function () {
          if (!timer) {
            timer = setTimeout(function () {
              tooltip.close();
            }, 200);
          }
        },
        onEventClick: function () {
          tooltip.open();
        },
      });

      var tooltip = mobiscroll.popup('#custom-event-tooltip-popup', {
        display: 'anchored',
        touchUi: false,
        showOverlay: false,
        contentPadding: false,
        closeOnOverlayClick: false,
        width: 350,
        onInit: function () {
          tooltipElm.addEventListener('mouseenter', function () {
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
          });

          tooltipElm.addEventListener('mouseleave', function () {
            timer = setTimeout(function () {
              tooltip.close();
            }, 200);
          });
        },
      });

      statusButton.addEventListener('click', function () {
        tooltip.close();
        currentEvent.confirmed = !currentEvent.confirmed;
        calendar.updateEvent(currentEvent);

        mobiscroll.toast({
          message: 'Appointment ' + (currentEvent.confirmed ? 'confirmed' : 'canceled'),
        });
      });

      fileButton.addEventListener('click', function () {
        tooltip.close();

        mobiscroll.toast({
          message: 'View file',
        });
      });

      deleteButton.addEventListener('click', function () {
        calendar.removeEvent(currentEvent);

        tooltip.close();

        mobiscroll.toast({
          message: 'Appointment deleted',
        });
      });
    })();
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="custom-event-tooltip-popup" class="md-tooltip">
    <div id="tooltip-event-header" class="md-tooltip-header">
        <span id="tooltip-event-name-age" class="md-tooltip-name-age"></span>
        <span id="tooltip-event-time" class="md-tooltip-time"></span>
    </div>
    <div class="md-tooltip-info">
        <div class="md-tooltip-title">
            Status: <span id="tooltip-event-title" class="md-tooltip-status md-tooltip-text"></span>
            <button id="tooltip-event-status" mbsc-button data-color="warning" data-variant="outline" class="md-tooltip-status-button"></button>
        </div>
        <div class="md-tooltip-title">Reason for visit: <span id="tooltip-event-reason" class="md-tooltip-reason md-tooltip-text"></span></div>
        <div class="md-tooltip-title">Location: <span id="tooltip-event-location" class="md-tooltip-location md-tooltip-text"></span></div>
        <button id="tooltip-event-view" mbsc-button data-color="secondary" class="md-tooltip-view-button">View patient file</button>
        <button id="tooltip-event-delete" mbsc-button data-color="danger" data-variant="outline" class="md-tooltip-delete-button">Delete appointment</button>
    </div>
</div>
<div id="demo-custom-event-tooltip"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-tooltip .mbsc-popup-content {
    padding: 0;
}

.md-tooltip {
    font-size: 15px;
    font-weight: 600;
}

.md-tooltip-header {
    padding: 12px 16px;
    color: #eee;
}

.md-tooltip-info {
    padding: 16px 16px 60px 16px;
    position: relative;
    line-height: 32px;
}

.md-tooltip-time,
.md-tooltip-status-button {
    float: right;
}

.md-tooltip-title {
    margin-bottom: 15px;
}

.md-tooltip-text {
    font-weight: 300;
}

.md-tooltip-info .mbsc-button {
    font-size: 14px;
    margin: 0;
}

.md-tooltip-info .mbsc-button.mbsc-material {
    font-size: 12px;
}

.md-tooltip-view-button {
    position: absolute;
    bottom: 16px;
    left: 16px;
}

.md-tooltip-delete-button {
    position: absolute;
    bottom: 16px;
    right: 16px;
}
  `,
};
