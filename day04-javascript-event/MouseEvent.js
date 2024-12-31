const trackingArea = document.getElementById("trackingArea");
const coordinates = document.getElementById("coordinates");

trackingArea.addEventListener("mousemove", function(event) {
    coordinates.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});
