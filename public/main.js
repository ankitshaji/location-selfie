//client-side

//p5.js
function setup() {
  noCanvas();
  const video = createCapture(VIDEO);
  video.size(320, 240);

  //button
  document.getElementById("b1").addEventListener("click", (event) => {
    if ("geolocation" in navigator) {
      console.log("gelocation available");

      //async callback function
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        document.getElementById("lat").textContent = lat;
        document.getElementById("lon").textContent = lon;

        //convert video canvas to base64
        video.loadPixels();
        const image64 = video.canvas.toDataURL();

        //POST Request
        const data = { lat, lon, image64 };
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        };
        const response = await fetch("/api", options);
        const json = await response.json();
        console.log(data);
      });
    } else {
      console.log("geolocation not available");
    }
  });
}
