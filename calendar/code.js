let currentView = "month";
let today = new Date();
let currentEventIndex = null;
let selectedDate;

const viewHeading = document.getElementById("viewHeading");
const calendarElement = document.getElementById("calendar");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const monthViewBtn = document.getElementById("monthViewBtn");
const weekViewBtn = document.getElementById("weekViewBtn");
const dayViewBtn = document.getElementById("dayViewBtn");

const eventModal = new bootstrap.Modal(document.getElementById("eventModal"));
const eventForm = document.getElementById("eventForm");
const eventTitleInput = document.getElementById("eventTitle");
const eventDescInput = document.getElementById("eventDesc");
const eventDateInput = document.getElementById("eventDate");
const startTimeInput = document.getElementById("startTime");
const endTimeInput = document.getElementById("endTime");
const deleteEventBtn = document.getElementById("deleteEvent");
const eventColorInput = document.getElementById("eventColor");


function formatDate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function parseHour(timeStr) {
  return parseInt(timeStr.split(":")[0], 10);
}

function loadEvents() {
  return JSON.parse(localStorage.getItem("calendarEvents") || "{}");
}

function saveEvents(events) {
  localStorage.setItem("calendarEvents", JSON.stringify(events));
}

//calendar views

function renderCalendar() {
  calendarElement.innerHTML = "";
  if (currentView === "month") {
    renderMonthView();
  } else if (currentView === "week") {
    renderWeekView();
  } else if (currentView === "day") {
    renderDayView();
  }
}

function renderMonthView() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  viewHeading.textContent = `${monthNames[currentMonth]} ${currentYear}`;

  const grid = document.createElement("div");
  grid.className = "month-grid";

  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
  const totalCells = 42; // 6x7 grid, so 42
  let currentDay = 1;
  let nextMonthDay = 1;
  const events = loadEvents();

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
      cellDate = formatDate(prevYear, prevMonth, prevDay);
      cell.classList.add("other-month");
    }
    // this month
    else if (currentDay <= daysInCurrentMonth) {
      cellDayNumber = currentDay;
      cellDate = formatDate(currentYear, currentMonth, currentDay);
      const todayStr = formatDate(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
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
      cellDate = formatDate(nextYear, nextMonth, nextMonthDay);
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
          openEventModal(cellDate, evt, index);
        });
        cell.appendChild(evtElement);
      });
    }

    // extra code that navigates to other month (when clicking grey days)
    cell.addEventListener("click", () => {
      if (cell.classList.contains("other-month")) {
        today = new Date(cellDate);
        renderCalendar();
      } else {
        openEventModal(cellDate);
      }
    });

    grid.appendChild(cell);
  }

  calendarElement.appendChild(grid);
}

function renderWeekView() {
  const currentDay = today.getDay();
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - currentDay);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  const options = { month: "short", day: "numeric" };
  viewHeading.textContent = `${startOfWeek.toLocaleDateString(undefined, options)} - ${endOfWeek.toLocaleDateString(undefined, options)}`;

  const events = loadEvents();

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
      const cellDateStr = formatDate(cellDate.getFullYear(), cellDate.getMonth(), cellDate.getDate());
  
      if (events[cellDateStr]) {
        events[cellDateStr].forEach((evt, index) => {
          const evtStartHour = parseHour(evt.startTime);
          const evtEndHour = parseHour(evt.endTime);
          if (hour >= evtStartHour && hour <= evtEndHour) {
            const evtElement = document.createElement("div");
            evtElement.className = "event";
            evtElement.textContent = evt.title + " (" + evt.startTime + "-" + evt.endTime + ")";
            evtElement.style.backgroundColor = evt.color;
            evtElement.addEventListener("click", (e) => {
              e.stopPropagation();
              openEventModal(cellDateStr, evt, index);
            });
            cell.appendChild(evtElement);
          }
        });
      }
      cell.addEventListener("click", () => {
        openEventModal(cellDateStr);
      });
  
      grid.appendChild(cell);
    }
  }
  
  calendarElement.appendChild(grid);
}

function renderDayView() {
  const options = { weekday: "long", month: "short", day: "numeric", year: "numeric" };
  viewHeading.textContent = today.toLocaleDateString(undefined, options);
  const events = loadEvents();

  const grid = document.createElement("div");
  grid.className = "time-grid day-view";
  const emptyHeader = document.createElement("div");
  emptyHeader.style.gridColumn = "1 / 2";
  emptyHeader.style.gridRow = "1 / 2";
  grid.appendChild(emptyHeader);
  const dayHeader = document.createElement("div");
  dayHeader.className = "text-center fw-bold";
  dayHeader.textContent = today.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric" });
  dayHeader.style.gridColumn = "2 / 3";
  dayHeader.style.gridRow = "1 / 2";
  grid.appendChild(dayHeader);

  const cellDateStr = formatDate(today.getFullYear(), today.getMonth(), today.getDate());

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
      const evtStartHour = parseHour(evt.startTime);
      const evtEndHour = parseHour(evt.endTime);
      if (hour >= evtStartHour && hour <= evtEndHour) {
        const evtElement = document.createElement("div");
        evtElement.className = "event eventhour";
        evtElement.textContent = evt.title + " (" + evt.startTime + "-" + evt.endTime + ")";
        evtElement.style.backgroundColor = evt.color;
        evtElement.addEventListener("click", (e) => {
          e.stopPropagation();
          openEventModal(cellDateStr, evt, index);
        });
        cell.appendChild(evtElement);
      }
    });
  
    cell.addEventListener("click", () => {
      openEventModal(cellDateStr);
    });
  
    grid.appendChild(cell);
  }
  
  calendarElement.appendChild(grid);
}

//events

function openEventModal(date, eventData = null, eventIndex = null) {
    selectedDate = date;
    eventDateInput.value = date;
    currentEventIndex = eventIndex;
    if (eventData) {
      eventTitleInput.value = eventData.title;
      eventDescInput.value = eventData.description;
      startTimeInput.value = eventData.startTime;
      endTimeInput.value = eventData.endTime;
      eventColorInput.value = eventData.color || "#4caf50";
      deleteEventBtn.classList.remove("d-none");
      deleteEventBtn.onclick = () => {
        deleteEvent(date, eventIndex);
      };
    } else {
      eventTitleInput.value = "";
      eventDescInput.value = "";
      startTimeInput.value = "";
      endTimeInput.value = "";
      eventColorInput.value = "#4caf50";
      deleteEventBtn.classList.add("d-none");
    }
    eventModal.show();
  }
  

function deleteEvent(date, index) {
  const events = loadEvents();
  events[date].splice(index, 1);
  if (events[date].length === 0) {
    delete events[date];
  }
  saveEvents(events);
  eventModal.hide();
  renderCalendar();
}

eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = eventTitleInput.value;
    const description = eventDescInput.value;
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;
    const color = eventColorInput.value;
    const events = loadEvents();
    const eventObj = { title, description, startTime, endTime, color };
  
    if (!events[selectedDate]) {
      events[selectedDate] = [];
    }
    if (currentEventIndex !== null) {
      events[selectedDate][currentEventIndex] = eventObj;
    } else {
      events[selectedDate].push(eventObj);
    }
    saveEvents(events);
    currentEventIndex = null;
    eventModal.hide();
    renderCalendar();
  });
  

// navigating views

function updateViewButtons() {
  monthViewBtn.classList.toggle("active", currentView === "month");
  weekViewBtn.classList.toggle("active", currentView === "week");
  dayViewBtn.classList.toggle("active", currentView === "day");
}

monthViewBtn.addEventListener("click", () => {
  currentView = "month";
  updateViewButtons();
  renderCalendar();
});

weekViewBtn.addEventListener("click", () => {
  currentView = "week";
  updateViewButtons();
  renderCalendar();
});

dayViewBtn.addEventListener("click", () => {
  currentView = "day";
  updateViewButtons();
  renderCalendar();
});

prevBtn.addEventListener("click", () => {
  if (currentView === "month") {
    today.setMonth(today.getMonth() - 1);
  } else if (currentView === "week") {
    today.setDate(today.getDate() - 7);
  } else if (currentView === "day") {
    today.setDate(today.getDate() - 1);
  }
  renderCalendar();
});

nextBtn.addEventListener("click", () => {
  if (currentView === "month") {
    today.setMonth(today.getMonth() + 1);
  } else if (currentView === "week") {
    today.setDate(today.getDate() + 7);
  } else if (currentView === "day") {
    today.setDate(today.getDate() + 1);
  }
  renderCalendar();
});

updateViewButtons();
renderCalendar();
