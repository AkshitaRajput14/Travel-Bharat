const form = document.getElementById("destinationForm");

async function loadAdminDestinations() {
  const box = document.getElementById("adminDestinations");
  box.innerHTML = "Loading...";

  try {
    const data = await fetchDestinations();
    box.innerHTML = data.map(d => `
      <div class="admin-item">
        <div>
          <h3>${d.name}</h3>
          <p>${d.city}, ${d.state} • ${d.category}</p>
        </div>
        <div class="admin-actions">
          <button class="edit-btn" onclick='editDestination(${JSON.stringify(d)})'>Edit</button>
          <button class="delete-btn" onclick="deleteDestination(${d.id})">Delete</button>
        </div>
      </div>
    `).join("");
  } catch (error) {
    box.innerHTML = "Unable to load destinations.";
  }
}

function editDestination(d) {
  document.getElementById("formTitle").textContent = "Edit Destination";
  document.getElementById("destinationId").value = d.id;
  document.getElementById("name").value = d.name;
  document.getElementById("state").value = d.state;
  document.getElementById("city").value = d.city;
  document.getElementById("category").value = d.category;
  document.getElementById("bestTime").value = d.bestTime;
  document.getElementById("fee").value = d.fee;
  document.getElementById("timings").value = d.timings;
  document.getElementById("image").value = d.image;
  document.getElementById("map").value = d.map;
  document.getElementById("description").value = d.description;
  document.getElementById("nearby").value = d.nearby.join(", ");
  window.scrollTo({top: 0, behavior: "smooth"});
}

function resetForm() {
  form.reset();
  document.getElementById("destinationId").value = "";
  document.getElementById("formTitle").textContent = "Add Destination";
}

form.addEventListener("submit", async e => {
  e.preventDefault();

  const id = document.getElementById("destinationId").value;
  const data = {
    name: document.getElementById("name").value,
    state: document.getElementById("state").value,
    city: document.getElementById("city").value,
    category: document.getElementById("category").value,
    bestTime: document.getElementById("bestTime").value,
    fee: document.getElementById("fee").value,
    timings: document.getElementById("timings").value,
    image: document.getElementById("image").value,
    map: document.getElementById("map").value,
    description: document.getElementById("description").value,
    nearby: document.getElementById("nearby").value.split(",").map(x => x.trim()).filter(Boolean)
  };

  const url = id ? `/api/destinations/${id}` : "/api/destinations";
  const method = id ? "PUT" : "POST";

  const response = await fetch(url, {
    method,
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  });

  const result = await response.json();
  document.getElementById("adminMessage").textContent =
    response.ok ? (id ? "Destination updated successfully." : "Destination added successfully.") : result.message;

  resetForm();
  loadAdminDestinations();
});

async function deleteDestination(id) {
  if (!confirm("Delete this destination?")) return;

  const response = await fetch(`/api/destinations/${id}`, {method: "DELETE"});
  const result = await response.json();
  document.getElementById("adminMessage").textContent = result.message;
  loadAdminDestinations();
}

document.addEventListener("DOMContentLoaded", loadAdminDestinations);