const data = {
  productions: [
    "Westminster Nights",
    "Northern Line",
    "Crown Street Detectives",
    "The Coastal Affairs"
  ],
  brands: ["Bromley & Co.", "Northstar Apparel", "Elowen Fragrances", "Atlas Kitchenware"],
  placements: [
    { name: "Bromley & Co. in Westminster Nights", complete: true },
    { name: "Northstar Apparel in Northern Line", complete: false },
    { name: "Elowen Fragrances in Crown Street Detectives", complete: false },
    { name: "Atlas Kitchenware in The Coastal Affairs", complete: true }
  ]
};

const productionList = document.getElementById("productionList");
const brandList = document.getElementById("brandList");
const placementList = document.getElementById("placementList");
const searchInput = document.getElementById("searchInput");

function renderLists(filter = "") {
  const term = filter.trim().toLowerCase();

  const filteredProductions = data.productions.filter((item) => item.toLowerCase().includes(term));
  const filteredBrands = data.brands.filter((item) => item.toLowerCase().includes(term));

  productionList.innerHTML = filteredProductions.map((item) => `<li>${item}</li>`).join("");
  brandList.innerHTML = filteredBrands.map((item) => `<li>${item}</li>`).join("");

  const filteredPlacements = data.placements.filter(
    (item) => item.name.toLowerCase().includes(term) || term.length === 0
  );

  placementList.innerHTML = filteredPlacements
    .map(
      (item) =>
        `<li class="status-item ${item.complete ? "complete" : ""}">${item.name} · ${
          item.complete ? "Complete" : "In Progress"
        }</li>`
    )
    .join("");
}

function updateSummary() {
  const productionCount = data.productions.length;
  const brandCount = data.brands.length;
  const placementCount = data.placements.length;
  const completeCount = data.placements.filter((item) => item.complete).length;
  const percent = Math.round((completeCount / placementCount) * 100);

  document.getElementById("productionCount").textContent = productionCount;
  document.getElementById("brandCount").textContent = brandCount;
  document.getElementById("placementCount").textContent = placementCount;
  document.getElementById("reportProgress").textContent = `${percent}%`;
  document.getElementById("reportingDetail").textContent = `${percent}%`;
  document.getElementById("progressFill").style.width = `${percent}%`;
}

searchInput.addEventListener("input", (event) => {
  renderLists(event.target.value);
});

updateSummary();
renderLists();
