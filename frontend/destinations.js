async function loadStates() {
  const select = document.getElementById("stateFilter");
  const response = await fetch("/api/states");
  const states = await response.json();
  states.forEach(state => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    select.appendChild(option);
  });
}

async function loadDestinations() {
  const search = document.getElementById("searchInput").value.trim();
  const state = document.getElementById("stateFilter").value;
  const category = document.getElementById("categoryFilter").value;

  const params = new URLSearchParams();
  if (search) params.set("search", search);
  if (state !== "all") params.set("state", state);
  if (category !== "all") params.set("category", category);

  const grid = document.getElementById("destinationGrid");
  grid.innerHTML = "<p>Loading...</p>";

  try {
    const data = await fetchDestinations(`?${params.toString()}`);
    document.getElementById("resultCount").textContent =
      `${data.length} destination${data.length !== 1 ? "s" : ""} found`;

    grid.innerHTML = data.length
      ? data.map(destinationCard).join("")
      : "<div class='card'><h3>No destinations found</h3><p>Try another search or filter.</p></div>";
  } catch (error) {
    grid.innerHTML = "<p>Unable to load destinations.</p>";
  }
}

function setFiltersFromURL() {
  const params = new URLSearchParams(location.search);
  if (params.has("search")) document.getElementById("searchInput").value = params.get("search");
  if (params.has("category")) document.getElementById("categoryFilter").value = params.get("category");
  return params;
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadStates();
  const params = setFiltersFromURL();

  if (params.has("state")) {
    document.getElementById("stateFilter").value = params.get("state");
  }

  await loadDestinations();
});

document.getElementById("searchInput")?.addEventListener("keydown", e => {
  if (e.key === "Enter") loadDestinations();
});