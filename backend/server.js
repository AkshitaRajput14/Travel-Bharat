const express = require("express");
const cors = require("cors");
const path = require("path");
const destinations = require("./data/destinations");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/api/states", (req, res) => {
  const states = [...new Set(destinations.map(d => d.state))].sort();
  res.json(states);
});

app.get("/api/destinations", (req, res) => {
  let result = [...destinations];
  const { search, state, category, city } = req.query;

  if (search) {
    const q = search.toLowerCase();
    result = result.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.state.toLowerCase().includes(q) ||
      d.city.toLowerCase().includes(q) ||
      d.category.toLowerCase().includes(q)
    );
  }

  if (state && state !== "all") {
    result = result.filter(d => d.state === state);
  }

  if (city && city !== "all") {
    result = result.filter(d => d.city === city);
  }

  if (category && category !== "all") {
    result = result.filter(d => d.category === category);
  }

  res.json(result);
});

app.get("/api/destinations/:id", (req, res) => {
  const destination = destinations.find(d => d.id === Number(req.params.id));

  if (!destination) {
    return res.status(404).json({ message: "Destination not found" });
  }

  res.json(destination);
});

app.post("/api/destinations", (req, res) => {
  const newDestination = {
    id: destinations.length ? Math.max(...destinations.map(d => d.id)) + 1 : 1,
    ...req.body
  };

  destinations.push(newDestination);
  res.status(201).json(newDestination);
});

app.put("/api/destinations/:id", (req, res) => {
  const index = destinations.findIndex(d => d.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Destination not found" });
  }

  destinations[index] = {
    ...destinations[index],
    ...req.body,
    id: Number(req.params.id)
  };

  res.json(destinations[index]);
});

app.delete("/api/destinations/:id", (req, res) => {
  const index = destinations.findIndex(d => d.id === Number(req.params.id));

  if (index === -1) {
    return res.status(404).json({ message: "Destination not found" });
  }

  const deleted = destinations.splice(index, 1);
  res.json({ message: "Destination deleted", destination: deleted[0] });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.listen(PORT, () => {
  console.log(`TravelBharat running at http://localhost:${PORT}`);
});