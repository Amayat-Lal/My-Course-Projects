function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const timeString = now.toLocaleTimeString('en-US', timeOptions);

    document.getElementById("date").textContent = dateString;
    document.getElementById("time").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);