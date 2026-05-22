function updateDateTime() {
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("date");

  const now = new Date();

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  const date = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  clockElement.textContent = time;
  dateElement.textContent = date;
}

updateDateTime();
setInterval(updateDateTime, 1000);
