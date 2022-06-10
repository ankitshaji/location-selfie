//Client-side

//Get Request
getData();
async function getData() {
  const response = await fetch("/api");
  const data = await response.json();
  for (item of data) {
    const rootdiv = document.createElement("p");
    const geodiv = document.createElement("div");
    const timestamp = document.createElement("div");
    const img = document.createElement("img");
    //textContent over innerHtml for security
    geodiv.textContent = ` ${item.lat}*, ${item.lon}*`;
    const dateString = new Date(item.timestamp).toLocaleDateString();
    timestamp.textContent = `${dateString}`;
    img.src = item.image64;
    img.alt = "Image is missing";
    //append takes multiple arguments
    rootdiv.append(geodiv, timestamp, img);
    document.body.append(rootdiv);
  }
  console.log(data);
}
