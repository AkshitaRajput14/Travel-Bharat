function toggleMenu() {
  document.querySelector("nav").classList.toggle("show");
}

async function fetchDestinations(params = "") {
  const response = await fetch(`/api/destinations${params}`);
  if (!response.ok) throw new Error("Unable to load destinations");
  return response.json();
}

function destinationCard(d) {
  return `
    <article class="destination-card">
      <img class="destination-image" src="${d.image}" alt="${d.name}" onerror="this.src='https://via.placeholder.com/800x500?text=TravelBharat'">
      <div class="destination-body">
        <span class="badge">${d.category}</span>
        <h3>${d.name}</h3>
        <div class="location">📍 ${d.city}, ${d.state}</div>
        <p>${d.description.substring(0, 115)}...</p>
        <a class="card-link" href="destination.html?id=${d.id}">View Details →</a>
      </div>
    </article>`;
}

async function loadHome() {
  const grid = document.getElementById("featuredGrid");
  const stateList = document.getElementById("stateList");
  if (!grid) return;

  try {
    const data = await fetchDestinations();
    grid.innerHTML = data.slice(0, 6).map(destinationCard).join("");

    const states = [...new Set(data.map(d => d.state))].sort();
    stateList.innerHTML = states.map(s =>
      `<button class="state-pill" onclick="location.href='destinations.html?state=${encodeURIComponent(s)}'">${s}</button>`
    ).join("");
  } catch (error) {
    grid.innerHTML = "<p>Unable to load destinations. Please start the Node.js server.</p>";
  }
}

function searchFromHome() {
  const value = document.getElementById("homeSearch").value.trim();
  location.href = `destinations.html?search=${encodeURIComponent(value)}`;
}

document.addEventListener("DOMContentLoaded", loadHome);