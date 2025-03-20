let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const monthYearLabel = document.getElementById("monthYear");
const calendarElement = document.getElementById("calendar");

const eventModal = new bootstrap.Modal(document.getElementById("eventModal"));
const eventForm = document.getElementById("eventForm");
const eventTitleInput = document.getElementById("eventTitle");
const eventDescInput = document.getElementById("eventDesc");
const eventDateInput = document.getElementById("eventDate");
const deleteEventBtn = document.getElementById("deleteEvent");

let selectedDate;

let formatDate = function(year, month, day){
    return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function loadEvents() {
    return JSON.parse(localStorage.getItem("calendarEvents") || "{}");
}

function saveEvents(events) {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
}

let renderCalendar = function(){
    calendarElement.innerHTML="";

    const months = [
        "January","February","March","April","May","June","July","August","September","October","November","December",
    ];

    monthYearLabel.textContent = `${months[currentMonth]} ${currentYear}`;

    const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
    const daysInCurrentMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
    //calendar is always 6 by 7, so 42 cells
    const totalCells = 42;
    let currentDay = 1;
    let nextMonthDay = 1;

    const events = loadEvents();

    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.className = "cell border p-1";
        let cellDate; 
        let cellDayNumber;
        //month before
        if (i < firstDayIndex){
            const prevMonthDay = daysInPrevMonth - firstDayIndex + i + 1;
            cellDayNumber = prevMonthDay;
            let prevMonth = currentMonth - 1;
            let prevYear = currentYear;
            if (prevMonth < 0) {
                prevMonth = 11;
                prevYear--;
              }
              cellDate = formatDate(prevYear, prevMonth, prevMonthDay);
              cell.classList.add("other-month");
        }
        //current month
        else if (currentDay <= daysInCurrentMonth){
            cellDayNumber = currentDay;
            cellDate = formatDate(currentYear, currentMonth, currentDay);
            const currentDateHighlight = formatDate(today.getFullYear(), today.getMonth(), today.getDate());
            if (cellDate === currentDateHighlight) {
              cell.classList.add("today");
            }
            currentDay++;
        }
        //month after
        else{
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

        if(events[cellDate]){
            events[cellDate].forEach((event, index) => {
                const eventElement = document.createElement("div");
                eventElement.className = "event";
                eventElement.textContent = event.title;
                eventElement.addEventListener("click", (e) => {
                    e.stopPropagation();
                    openEventModal(cellDate, event, index);
                });
                cell.appendChild(eventElement);
            });
        }

        cell.addEventListener("click", () => {
            if (cell.classList.contains("other-month")) {
                const clickedDate = new Date(cellDate);
                currentMonth = clickedDate.getMonth();
                currentYear = clickedDate.getFullYear();
                renderCalendar();
            }
            else{
                openEventModal(cellDate);
            }
        });
        calendarElement.appendChild(cell);
    }
}

function openEventModal(date, eventData = null, eventIndex = null) {
    selectedDate = date;
    eventDateInput.value = date;
    if (eventData) {
        eventTitleInput.value = eventData.title;
        eventDescInput.value = eventData.description;
        deleteEventBtn.classList.remove("d-none");
        deleteEventBtn.onclick = () => {
          deleteEvent(date, eventIndex);
        };
    }
    else{
        eventTitleInput.value = "";
        eventDescInput.value = "";
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

let currentEventIndex = null;

function openEventModal(date, eventData = null, eventIndex = null) {
    selectedDate = date;
    eventDateInput.value = date;
    currentEventIndex = eventIndex;
    if (eventData) {
        eventTitleInput.value = eventData.title;
        eventDescInput.value = eventData.description;
        deleteEventBtn.classList.remove("d-none");
        deleteEventBtn.onclick = () => {
          deleteEvent(date, eventIndex);
        };
    }
    else{
        eventTitleInput.value = "";
        eventDescInput.value = "";
        deleteEventBtn.classList.add("d-none");
    }
    eventModal.show();
}

eventForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = eventTitleInput.value;
    const description = eventDescInput.value;
    const events = loadEvents();
    const eventObject = { title, description };

    if (!events[selectedDate]) {
        events[selectedDate] = [];
      }

    if (currentEventIndex !== null) {
        events[selectedDate][currentEventIndex] = eventObject;
    } 
    else {
        events[selectedDate].push(eventObject);
    }

    saveEvents(events);
    currentEventIndex = null;
    eventModal.hide();
    renderCalendar();
});

document.getElementById("prevMonth").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar();
  });
  
  document.getElementById("nextMonth").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    renderCalendar();
  });
  renderCalendar();
