<template>
    <div id="app-body">
      <header class="mb-3" id="app-header">
        <div class="container d-flex justify-content-between align-items-center">
          <div>
            <button id="prevBtn" class="btn btn-outline-primary me-2" @click="navigatePrev">&#9668;</button>
            <button id="nextBtn" class="btn btn-outline-primary ms-2" @click="navigateNext">&#9658;</button>
          </div>
          <div>
            <h2 id="viewHeading" class="mb-0">{{ viewHeading }}</h2>
          </div>
          <div>
            <button id="monthViewBtn" class="btn btn-secondary" :class="{ active: currentView === 'month' }" @click="setView('month')">Month</button>
            <button id="weekViewBtn" class="btn btn-secondary" :class="{ active: currentView === 'week' }" @click="setView('week')">Week</button>
            <button id="dayViewBtn" class="btn btn-secondary" :class="{ active: currentView === 'day' }" @click="setView('day')">Day</button>
          </div>
        </div>
      </header>
      <main class="container">
        <!-- calendar -->
        <div id="calendar" ref="calendar"></div>
      </main>

      <div class="modal fade" id="eventModal" ref="eventModal" tabindex="-1" aria-labelledby="eventModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <form id="eventForm" class="modal-content" @submit.prevent="saveEvent">
            <div class="modal-header">
              <h5 class="modal-title" id="eventModalLabel">Add / Edit Event</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <input type="hidden" id="eventDate" v-model="eventDate" />
              <div class="mb-3">
                <label for="eventTitle" class="form-label">Title</label>
                <input type="text" class="form-control" id="eventTitle" v-model="eventTitle" required />
              </div>
              <div class="mb-3">
                <label for="eventDesc" class="form-label">Description</label>
                <textarea class="form-control" id="eventDesc" rows="2" v-model="eventDesc"></textarea>
              </div>
              <div class="mb-3">
                <label for="startTime" class="form-label">Start Time</label>
                <input type="time" class="form-control" id="startTime" v-model="startTime" required />
              </div>
              <div class="mb-3">
                <label for="endTime" class="form-label">End Time</label>
                <input type="time" class="form-control" id="endTime" v-model="endTime" required />
              </div>
              <div class="mb-3">
                <label for="eventColor" class="form-label">Event Color</label>
                <input type="color" class="form-control form-control-color" id="eventColor" v-model="eventColor" title="Choose your color">
              </div>
            </div>
            <div class="modal-footer">
              <button id="deleteEvent" type="button" class="btn btn-danger" :class="{ 'd-none': currentEventIndex === null }" @click="deleteCurrentEvent">Delete</button>
              <button type="submit" class="btn btn-primary">Save Event</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>

<script>
import { Modal } from 'bootstrap';
export default {
  name: 'CalendarApp',
  data() {
    return {
      currentView: 'month',
      today: new Date(),
      currentEventIndex: null,
      selectedDate: '',
      viewHeading: '',
      eventTitle: '',
      eventDesc: '',
      eventDate: '',
      startTime: '',
      endTime: '',
      eventColor: '#4caf50',
      eventModal: null
    };
  },
  methods: {
    formatDate(year, month, day) {
      return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    },
    parseHour(timeStr) {
      return parseInt(timeStr.split(":")[0], 10);
    },
    loadEvents() {
      return JSON.parse(localStorage.getItem("calendarEvents") || "{}");
    },
    saveEvents(events) {
      localStorage.setItem("calendarEvents", JSON.stringify(events));
    },
    renderCalendar() {
      const calendarElement = this.$refs.calendar;
      if (!calendarElement) return;

      calendarElement.innerHTML = "";
      if (this.currentView === "month") {
        this.renderMonthView(calendarElement);
      } else if (this.currentView === "week") {
        this.renderWeekView(calendarElement);
      } else if (this.currentView === "day") {
        this.renderDayView(calendarElement);
      }
    },
    renderMonthView(calendarElement) {
      const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const currentYear = this.today.getFullYear();
      const currentMonth = this.today.getMonth();
      this.viewHeading = `${monthNames[currentMonth]} ${currentYear}`;

      const grid = document.createElement("div");
      grid.className = "month-grid";

      const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
      const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
      const totalCells = 42; // 6x7 grid, so 42
      let currentDay = 1;
      let nextMonthDay = 1;
      const events = this.loadEvents();

      for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        let cellDate;
        let cellDayNumber;
        // last month
        if (i < firstDayIndex) {
          const prevDay = daysInPrevMonth - firstDayIndex + i + 1;
          cellDayNumber = prevDay;
          let prevMonth = currentMonth - 1;
          let prevYear = currentYear;
          if (prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
          }
          cellDate = this.formatDate(prevYear, prevMonth, prevDay);
          cell.classList.add("other-month");
        }
        // this month
        else if (currentDay <= daysInCurrentMonth) {
          cellDayNumber = currentDay;
          cellDate = this.formatDate(currentYear, currentMonth, currentDay);
          const todayStr = this.formatDate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
          if (cellDate === todayStr) {
            cell.classList.add("today");
          }
          currentDay++;
        }
        // next month
        else {
          cellDayNumber = nextMonthDay;
          let nextMonth = currentMonth + 1;
          let nextYear = currentYear;
          if (nextMonth > 11) {
            nextMonth = 0;
            nextYear++;
          }
          cellDate = this.formatDate(nextYear, nextMonth, nextMonthDay);
          cell.classList.add("other-month");
          nextMonthDay++;
        }

        const dayNumber = document.createElement("div");
        dayNumber.textContent = cellDayNumber;
        dayNumber.classList.add("fw-bold");
        cell.appendChild(dayNumber);

        if (events[cellDate]) {
          events[cellDate].forEach((evt, index) => {
            const evtElement = document.createElement("div");
            evtElement.className = "event";
            evtElement.textContent = evt.title + " (" + evt.startTime + "-" + evt.endTime + ")";
            evtElement.style.backgroundColor = evt.color;
            evtElement.addEventListener("click", (e) => {
              e.stopPropagation();
              this.openEventModal(cellDate, evt, index);
            });
            cell.appendChild(evtElement);
          });
        }

        // extra code that navigates to other month (when clicking grey days)
        cell.addEventListener("click", () => {
          if (cell.classList.contains("other-month")) {
            this.today = new Date(cellDate);
            this.renderCalendar();
          } else {
            this.openEventModal(cellDate);
          }
        });

        grid.appendChild(cell);
      }

      calendarElement.appendChild(grid);
    },
    renderWeekView(calendarElement) {
      const currentDay = this.today.getDay();
      const startOfWeek = new Date(this.today);
      startOfWeek.setDate(this.today.getDate() - currentDay);
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);

      const options = { month: "short", day: "numeric" };
      this.viewHeading = `${startOfWeek.toLocaleDateString(undefined, options)} - ${endOfWeek.toLocaleDateString(undefined, options)}`;

      const events = this.loadEvents();

      const grid = document.createElement("div");
      grid.className = "time-grid";
      const emptyHeader = document.createElement("div");
      emptyHeader.style.gridColumn = "1 / 2";
      emptyHeader.style.gridRow = "1 / 2";
      grid.appendChild(emptyHeader);
      for (let d = 0; d < 7; d++) {
        const headerCell = document.createElement("div");
        headerCell.className = "text-center fw-bold";
        const dateForHeader = new Date(startOfWeek);
        dateForHeader.setDate(startOfWeek.getDate() + d);
        headerCell.textContent = dateForHeader.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
        headerCell.style.gridColumn = `${d + 2} / ${d + 3}`;
        headerCell.style.gridRow = "1 / 2";
        grid.appendChild(headerCell);
      }

      for (let hour = 0; hour < 24; hour++) {
        const hourLabel = document.createElement("div");
        hourLabel.className = "hour-label";
        hourLabel.textContent = hour + ":00";
        hourLabel.style.gridColumn = "1 / 2";
        hourLabel.style.gridRow = `${hour + 2} / ${hour + 3}`;
        grid.appendChild(hourLabel);
      
        for (let d = 0; d < 7; d++) {
          const cell = document.createElement("div");
          cell.className = "slot-cell";
          cell.style.gridColumn = `${d + 2} / ${d + 3}`;
          cell.style.gridRow = `${hour + 2} / ${hour + 3}`;
      
          const cellDate = new Date(startOfWeek);
          cellDate.setDate(startOfWeek.getDate() + d);
          const cellDateStr = this.formatDate(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate());
      
          if (events[cellDateStr]) {
            events[cellDateStr].forEach((evt, index) => {
              const evtStartHour = this.parseHour(evt.startTime);
              const evtEndHour = this.parseHour(evt.endTime);
              if (hour >= evtStartHour && hour <= evtEndHour) {
                const evtElement = document.createElement("div");
                evtElement.className = "event";
                evtElement.textContent = evt.title + " (" + evt.startTime + "-" + evt.endTime + ")";
                evtElement.style.backgroundColor = evt.color;
                evtElement.addEventListener("click", (e) => {
                  e.stopPropagation();
                  this.openEventModal(cellDateStr, evt, index);
                });
                cell.appendChild(evtElement);
              }
            });
          }
          
          const _this = this;
          cell.addEventListener("click", function() {
            _this.openEventModal(cellDateStr);
          });
      
          grid.appendChild(cell);
        }
      }
      
      calendarElement.appendChild(grid);
    },
    renderDayView(calendarElement) {
      const options = { weekday: "long", month: "short", day: "numeric", year: "numeric" };
      this.viewHeading = this.today.toLocaleDateString(undefined, options);
      const events = this.loadEvents();

      const grid = document.createElement("div");
      grid.className = "time-grid day-view";
      const emptyHeader = document.createElement("div");
      emptyHeader.style.gridColumn = "1 / 2";
      emptyHeader.style.gridRow = "1 / 2";
      grid.appendChild(emptyHeader);
      const dayHeader = document.createElement("div");
      dayHeader.className = "text-center fw-bold";
      dayHeader.textContent = this.today.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
      dayHeader.style.gridColumn = "2 / 3";
      dayHeader.style.gridRow = "1 / 2";
      grid.appendChild(dayHeader);

      const cellDateStr = this.formatDate(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());

      for (let hour = 0; hour < 24; hour++) {
        const hourLabel = document.createElement("div");
        hourLabel.className = "hour-label";
        hourLabel.textContent = hour + ":00";
        hourLabel.style.gridColumn = "1 / 2";
        hourLabel.style.gridRow = `${hour + 2} / ${hour + 3}`;
        grid.appendChild(hourLabel);
      
        const cell = document.createElement("div");
        cell.className = "slot-cell";
        cell.style.gridColumn = "2 / 3";
        cell.style.gridRow = `${hour + 2} / ${hour + 3}`;
      
        const eventsForDay = events[cellDateStr] || [];
        eventsForDay.forEach((evt, index) => {
          const evtStartHour = this.parseHour(evt.startTime);
          const evtEndHour = this.parseHour(evt.endTime);
          if (hour >= evtStartHour && hour <= evtEndHour) {
            const evtElement = document.createElement("div");
            evtElement.className = "event eventhour";
            evtElement.textContent = evt.title + " (" + evt.startTime + "-" + evt.endTime + ")";
            evtElement.style.backgroundColor = evt.color;
            evtElement.addEventListener("click", (e) => {
              e.stopPropagation();
              this.openEventModal(cellDateStr, evt, index);
            });
            cell.appendChild(evtElement);
          }
        });
      
        const _this = this;
        cell.addEventListener("click", function() {
          _this.openEventModal(cellDateStr);
        });
      
        grid.appendChild(cell);
      }
      
      calendarElement.appendChild(grid);
    },
    openEventModal(date, eventData = null, eventIdx = null) {
      this.selectedDate = date;
      this.eventDate = date;
      this.currentEventIndex = eventIdx;
      
      if (eventData) {
        this.eventTitle = eventData.title;
        this.eventDesc = eventData.description;
        this.startTime = eventData.startTime;
        this.endTime = eventData.endTime;
        this.eventColor = eventData.color || "#4caf50";
      } else {
        this.eventTitle = "";
        this.eventDesc = "";
        this.startTime = "";
        this.endTime = "";
        this.eventColor = "#4caf50";
      }
      
      if (this.eventModal) {
        this.eventModal.show();
      }
    },
    deleteCurrentEvent() {
      if (this.currentEventIndex !== null) {
        this.deleteEvent(this.selectedDate, this.currentEventIndex);
      }
    },
    deleteEvent(date, index) {
      const events = this.loadEvents();
      events[date].splice(index, 1);
      if (events[date].length === 0) {
        delete events[date];
      }
      this.saveEvents(events);
      if (this.eventModal) {
        this.eventModal.hide();
      }
      this.renderCalendar();
    },
    saveEvent() {
      const events = this.loadEvents();
      const eventObj = { 
        title: this.eventTitle, 
        description: this.eventDesc, 
        startTime: this.startTime, 
        endTime: this.endTime, 
        color: this.eventColor 
      };
    
      if (!events[this.selectedDate]) {
        events[this.selectedDate] = [];
      }
      
      if (this.currentEventIndex !== null) {
        events[this.selectedDate][this.currentEventIndex] = eventObj;
      } else {
        events[this.selectedDate].push(eventObj);
      }
      
      this.saveEvents(events);
      this.currentEventIndex = null;
      
      if (this.eventModal) {
        this.eventModal.hide();
      }
      
      this.renderCalendar();
    },
    setView(view) {
      this.currentView = view;
      this.renderCalendar();
    },
    navigatePrev() {
      if (this.currentView === "month") {
        const newDate = new Date(this.today);
        newDate.setMonth(this.today.getMonth() - 1);
        this.today = newDate;
      } else if (this.currentView === "week") {
        const newDate = new Date(this.today);
        newDate.setDate(this.today.getDate() - 7);
        this.today = newDate;
      } else if (this.currentView === "day") {
        const newDate = new Date(this.today);
        newDate.setDate(this.today.getDate() - 1);
        this.today = newDate;
      }
      this.renderCalendar();
    },
    navigateNext() {
      if (this.currentView === "month") {
        const newDate = new Date(this.today);
        newDate.setMonth(this.today.getMonth() + 1);
        this.today = newDate;
      } else if (this.currentView === "week") {
        const newDate = new Date(this.today);
        newDate.setDate(this.today.getDate() + 7);
        this.today = newDate;
      } else if (this.currentView === "day") {
        const newDate = new Date(this.today);
        newDate.setDate(this.today.getDate() + 1);
        this.today = newDate;
      }
      this.renderCalendar();
    }
  },
  mounted() {
    // Initialize Bootstrap modal
    this.eventModal = new Modal(this.$refs.eventModal);
    this.renderCalendar();
  }
};
</script>

<style scoped>
#app-body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: grey;
  min-height: 100vh; /* Make sure it covers the full viewport height */
  margin: 0;
  padding: 0;
}

#app-header {
  background-color: #4a90e2;
  color: #fff;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

#viewHeading {
  margin: 0;
}

#calendar {
  margin-top: 1rem;
}

:deep(.month-grid) {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
}

:deep(.cell) {
  background-color: #fff;
  height: 120px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow-y: auto;
  cursor: pointer;
  transition: transform 0.1s;
}

:deep(.cell:hover) {
  transform: scale(1.02);
}

:deep(.cell .fw-bold) {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

:deep(.other-month) {
  color: #aaa;
  background-color: #f7f7f7;
}

:deep(.today) {
  background-color: #fffae6;
  border: 1px solid #f0c36d;
}

:deep(.event) {
  color: #fff;
  padding: 2px 4px;
  margin-top: 2px;
  border-radius: 3px;
  font-size: 0.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  clip-path: polygon(0 0, 100% 0%, 90% 100%, 0% 100%);
  transition: transform 0.1s;
}

:deep(.event:hover){
  transform: scale(1.04);
}

:deep(.eventhour) {
  clip-path: polygon(0 0, 100% 0%, 99% 100%, 0% 100%);
  margin-left: 20px;
  margin-right: 20px;
}

:deep(.eventhour:hover){
  transform: scale(1.03);
}

:deep(.time-grid) {
  display: grid;
  grid-template-columns: 50px repeat(7, 1fr);
  border: 1px solid #ddd;
  background: white;
}

:deep(.day-view) {
  grid-template-columns: 50px 1fr;
}

:deep(.time-slot) {
  border-top: 1px solid #ddd;
  height: 50px;
  position: relative;
}

:deep(.hour-label) {
  border-top: 1px solid #ddd;
  text-align: right;
  padding-right: 5px;
  height: 50px;
  line-height: 50px;
  background: #f7f7f7;
}

:deep(.slot-cell) {
  max-height: 100px;
  overflow-y: auto;
  border-top: 1px solid #ddd;
  border-left: 1px solid #ddd;
  position: relative;
  padding: 2px;
}

:deep(.modal-header) {
  background-color: #4a90e2;
  color: #fff;
}

:deep(.modal-content) {
  border-radius: 10px;
}

:deep(.btn-outline-primary) {
  border-color: #fff;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.2);
  transition: background-color 0.2s, color 0.2s;
}

:deep(.btn-outline-primary:hover) {
  background-color: #fff;
  color: #4a90e2;
}

:deep(.btn-secondary){
  margin-right: 5px;
}
</style>