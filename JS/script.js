console.log("Welcome to the Community Portal");
window.onload = () => {
  alert("Page is fully loaded");
};
const event1 = { name: "Music Night", date: "2025-07-10", category: "Music", location: "Auditorium", seats: 50 };
const event2 = { name: "Food Festival", date: "2025-07-15", category: "Food", location: "Main Street", seats: 100 };
let events = [event1, event2];

class Event {
  constructor(name, date, category, location, seats) {
    this.name = name;
    this.date = date;
    this.category = category;
    this.location = location;
    this.seats = seats;
  }
}
Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};
function addEvent(name, date, category = "General", location = "Community Hall", seats = 20) {
  events.push(new Event(name, date, category, location, seats));
}
function registerUser(eventName) {
  const event = events.find(e => e.name === eventName);
  try {
    if (event && event.checkAvailability()) {
      event.seats--;
      alert(`Registered for ${event.name}! Remaining seats: ${event.seats}`);
    } else {
      alert("No available seats or event not found.");
    }
  } catch (err) {
    console.error("Error registering user:", err);
  }
}
function filterEventsByCategory(category, callback) {
  const filtered = events.filter(e => e.category === category);
  callback(filtered);
}
function displayEvents() {
  const container = document.getElementById("eventContainer");
  container.innerHTML = "";
  events.forEach(event => {
    if (new Date(event.date) > new Date() && event.checkAvailability()) {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p><p>${event.location}</p><button onclick="registerUser('${event.name}')">Register</button>`;
      container.appendChild(card);
    }
  });
}
function createCategoryCounter(category) {
  let count = 0;
  return () => { count++; console.log(`Registrations for ${category}: ${count}`); };
}
const musicCounter = createCategoryCounter("Music");

function savePref() {
   var eventType = document.getElementById("eventType").value;
   document.getElementById("preferenceMessage").innerText = "Preference Saved " + eventType;
}
    function showConfirmation() {
      document.getElementById('charCount').innerHTML = "Registration submitted!";
    }
    function validatePhone(input) {
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(input.value)) {
        alert('Please enter a valid 10-digit phone number.');
      }
    }
    function showFee() {
      const eventType = document.getElementById('eventType').value;
      if (eventType) {
        alert("Selected Event Fee: $20");
      }
    }
    function countChars(textarea) {
      document.getElementById('charCount').innerHTML = textarea.value.length + " characters";
    }
    function videoReady() {
      alert("Video ready to play!");
    }
    function savePreference() {
      const eventType = document.getElementById('eventType').value;
      localStorage.setItem('preferredEvent', eventType);
    }
    function clearPreferences() {
      localStorage.clear();
      sessionStorage.clear();
      alert("Preferences cleared!");
    }
    window.onload = function() {
      const savedEvent = localStorage.getItem('preferredEvent');
      if (savedEvent) {
        document.getElementById('eventType').value = savedEvent;
      }
    }
    window.onbeforeunload = function() {
      return "Are you sure you want to leave? Your form data might be lost!";
    };
    function validateFeedbackPhone() {
      const phoneInput = document.getElementById('phone').value;
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(phoneInput)) {
        alert('Invalid phone number. Please enter 10 digits.');
      }
    }
    function displayFee() {
      const selectedEvent = document.getElementById('eventDropdown').value;
      if (selectedEvent) {
        document.getElementById('feeDisplay').innerHTML = "Fee for " + selectedEvent + ": $20";
      } else {
        document.getElementById('feeDisplay').innerHTML = "";
      }
    }
    function confirmFeedback() {
      alert('Thank you for your feedback!');
    }
    function enlargeImage(img) {
      img.style.width = (img.clientWidth * 1.5) + 'px';
      img.style.transition = "width 0.3s";
    }
    function countFeedbackChars() {
      const feedbackText = document.getElementById('feedbackText').value.length;
      document.getElementById('feedbackCharCount').innerHTML = feedbackText + " characters";
    }

    function findNearbyEvents() {
      const output = document.getElementById('geoOutput');
      if (!navigator.geolocation) {
        output.innerHTML = "Geolocation is not supported by your browser.";
        return;
      }
      output.innerHTML = "Locating...";
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          output.innerHTML = `Your Coordinates: Latitude ${latitude}, Longitude ${longitude}`;
        },
        (error) => {
          switch(error.code) {
            case error.PERMISSION_DENIED:
              output.innerHTML = "Permission denied. Please allow location access.";
              break;
            case error.POSITION_UNAVAILABLE:
              output.innerHTML = "Location information unavailable.";
              break;
            case error.TIMEOUT:
              output.innerHTML = "Request timed out. Please try again.";
              break;
            default:
              output.innerHTML = "An unknown error occurred.";
              break;
          }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
      );
    }
    document.getElementById("loadEvents").addEventListener("click", async () => {
  try {
    document.getElementById("loadEvents").textContent = "Loading...";
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("Fetched events:", data.slice(0, 5));
    document.getElementById("loadEvents").textContent = "Load Events";
  } catch (err) {
    console.error("Fetch error:", err);
  }
});
document.getElementById("searchInput").addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const searchTerm = e.target.value.toLowerCase();
    const results = events.filter(ev => ev.name.toLowerCase().includes(searchTerm));
    filterEventsByCategory(searchTerm, displayEvents);
  }
});
document.getElementById("dynamicAddForm").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("newEventName").value;
  const date = document.getElementById("newEventDate").value;
  const seats = parseInt(document.getElementById("newEventSeats").value);
  addEvent(name, date, "General", "Community Hall", seats);
  displayEvents();
  e.target.reset();
});
$("#loadEvents").click(() => {
  $("#eventContainer").fadeIn();
});
$("#eventContainer").fadeOut(0);
// Benefit of frameworks: React/Vue provide reusable components and state management.
