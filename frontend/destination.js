async function loadDestinationDetails() {
  const id = new URLSearchParams(location.search).get("id");
  const page = document.getElementById("detailsPage");

  if (!id) {
    page.innerHTML = "<div class='loading'><h2>Destination ID is missing.</h2><a class='card-link' href='destinations.html'>← Back to destinations</a></div>";
    return;
  }

  try {
    const response = await fetch(`/api/destinations/${id}`);
    if (!response.ok) throw new Error("Not found");
    const d = await response.json();

    page.innerHTML = `
      <section class="detail-hero" style="background-image:url('${d.image}')">
        <div class="detail-overlay">
          <div class="container">
            <span class="badge">${d.category}</span>
            <h1>${d.name}</h1>
            <p>📍 ${d.city}, ${d.state}</p>
          </div>
        </div>
      </section>

      <section class="container detail-content">
        <div>
          <p class="eyebrow">ABOUT THE DESTINATION</p>
          <h2>Discover ${d.name}</h2>
          <p>${d.description}</p>

          <h2>Nearby Attractions</h2>
          <div class="nearby">
            ${d.nearby.map(place => `<span>${place}</span>`).join("")}
          </div>

          <a class="btn" style="display:inline-block;margin-top:28px" href="${d.map}" target="_blank">📍 View on Map</a>
          <a class="card-link" style="margin-left:20px" href="destinations.html">← Back to Destinations</a>
        </div>

        <aside class="info-box">
          <h2>Travel Information</h2>
          <div class="info-item"><strong>STATE</strong>${d.state}</div>
          <div class="info-item"><strong>CITY</strong>${d.city}</div>
          <div class="info-item"><strong>CATEGORY</strong>${d.category}</div>
          <div class="info-item"><strong>BEST TIME TO VISIT</strong>${d.bestTime}</div>
          <div class="info-item"><strong>ENTRY FEE</strong>${d.fee}</div>
          <div class="info-item"><strong>TIMINGS</strong>${d.timings}</div>
        </aside>
      </section>`;
  } catch (error) {
    page.innerHTML = "<div class='loading'><h2>Destination not found.</h2><a class='card-link' href='destinations.html'>← Back to destinations</a></div>";
  }
}

document.addEventListener("DOMContentLoaded", loadDestinationDetails);