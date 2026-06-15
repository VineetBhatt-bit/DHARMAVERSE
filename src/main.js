import { consciousnessFacets, locations } from "./data/locations.js";

const canvas = document.querySelector("#earthCanvas");
const ctx = canvas.getContext("2d");
const placeList = document.querySelector("#placeList");
const layerList = document.querySelector("#layerList");
const placeName = document.querySelector("#placeName");
const placeArchetype = document.querySelector("#placeArchetype");
const placeVoice = document.querySelector("#placeVoice");
const voiceType = document.querySelector("#voiceType");
const readoutRegion = document.querySelector("#readoutRegion");
const readoutPulse = document.querySelector("#readoutPulse");
const whyQuestion = document.querySelector("#whyQuestion");
const whyHere = document.querySelector("#whyHere");
const whyFactorList = document.querySelector("#whyFactorList");
const whyDetail = document.querySelector("#whyDetail");
const identityGrid = document.querySelector("#identityGrid");
const atmosphereList = document.querySelector("#atmosphereList");
const threadList = document.querySelector("#threadList");
const streamTitle = document.querySelector("#streamTitle");
const streamCounter = document.querySelector("#streamCounter");
const streamMoment = document.querySelector("#streamMoment");
const streamScene = document.querySelector("#streamScene");
const streamSensory = document.querySelector("#streamSensory");
const streamThread = document.querySelector("#streamThread");
const previousScene = document.querySelector("#previousScene");
const nextScene = document.querySelector("#nextScene");
const streamDots = document.querySelector("#streamDots");
const streamFilters = document.querySelector("#streamFilters");

let activePlace = locations[0];
let activeSceneIndex = 0;
let activeLayerFilter = "All";
let activeWhyFactorId = activePlace.whyHereEngine.factors[0].id;
let width = 0;
let height = 0;
let dpr = window.devicePixelRatio || 1;

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  dpr = window.devicePixelRatio || 1;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function renderPlaces() {
  placeList.innerHTML = "";

  locations.forEach((place) => {
    const button = document.createElement("button");
    button.className = `place-card${place.id === activePlace.id ? " is-active" : ""}`;
    button.type = "button";
    button.dataset.placeId = place.id;
    button.innerHTML = `
      <span class="place-card__signal" style="--tone: ${place.tone}"></span>
      <span class="place-card__body">
        <strong>${place.name}</strong>
        <small>${place.region}</small>
      </span>
      <span class="place-card__pulse">${place.pulse}%</span>
    `;
    button.addEventListener("click", () => selectPlace(place.id));
    placeList.appendChild(button);
  });
}

function renderLayers() {
  layerList.innerHTML = "";

  activePlace.layers.forEach((layer, index) => {
    const item = document.createElement("article");
    item.className = "layer-item";
    item.style.setProperty("--delay", `${index * 70}ms`);
    item.innerHTML = `
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>${layer.label}</h3>
        <small>${layer.signal}</small>
        <p>${layer.value}</p>
      </div>
    `;
    layerList.appendChild(item);
  });
}

function renderIdentityGrid() {
  identityGrid.innerHTML = "";

  consciousnessFacets.forEach((facet) => {
    const item = document.createElement("article");
    item.className = "identity-item";
    item.innerHTML = `
      <strong>${formatFacet(facet)}</strong>
      <p>${activePlace.identity[facet]}</p>
    `;
    identityGrid.appendChild(item);
  });
}

function renderAtmosphere() {
  atmosphereList.innerHTML = `
    <div class="section-label">
      <p class="eyebrow">Atmosphere</p>
      <h2>How I feel</h2>
    </div>
  `;

  activePlace.atmosphere.forEach((signal) => {
    const item = document.createElement("article");
    item.className = "atmosphere-item";
    item.innerHTML = `
      <span>${signal.label}</span>
      <strong>${signal.value}</strong>
    `;
    atmosphereList.appendChild(item);
  });
}

function renderThreads() {
  threadList.innerHTML = `
    <div class="section-label">
      <p class="eyebrow">Civilization Threads</p>
      <h2>What I connect to</h2>
    </div>
    <div class="thread-chips"></div>
  `;

  const chips = threadList.querySelector(".thread-chips");
  activePlace.threads.forEach((thread) => {
    const chip = document.createElement("span");
    chip.textContent = thread;
    chips.appendChild(chip);
  });
}

function renderWhyHereEngine() {
  const engine = activePlace.whyHereEngine;
  const activeFactor = engine.factors.find((factor) => factor.id === activeWhyFactorId) || engine.factors[0];

  whyQuestion.textContent = engine.question;
  whyHere.textContent = engine.answer;
  whyFactorList.innerHTML = "";

  engine.factors.forEach((factor, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = factor.id === activeFactor.id ? "is-active" : "";
    button.innerHTML = `
      <span>${String(index + 1).padStart(2, "0")}</span>
      <strong>${factor.force}</strong>
      <small>${factor.layer}</small>
    `;
    button.addEventListener("click", () => {
      activeWhyFactorId = factor.id;
      renderWhyHereEngine();
    });
    whyFactorList.appendChild(button);
  });

  whyDetail.innerHTML = `
    <div class="why-detail__header">
      <span>${activeFactor.layer}</span>
      <strong>${activeFactor.force}</strong>
    </div>
    <dl>
      <div>
        <dt>Cause</dt>
        <dd>${activeFactor.cause}</dd>
      </div>
      <div>
        <dt>Effect</dt>
        <dd>${activeFactor.effect}</dd>
      </div>
      <div>
        <dt>Evidence</dt>
        <dd>${activeFactor.evidence}</dd>
      </div>
    </dl>
    <div class="why-links">
      ${activeFactor.connectsTo.map((connection) => `<span>${connection}</span>`).join("")}
    </div>
  `;
}

function getFilteredScenes() {
  if (activeLayerFilter === "All") return activePlace.memoryStream;
  return activePlace.memoryStream.filter((scene) => scene.layer === activeLayerFilter);
}

function renderStream() {
  const scenes = getFilteredScenes();
  const scene = scenes[activeSceneIndex] || scenes[0] || activePlace.memoryStream[0];

  if (!scene) return;

  activeSceneIndex = scenes.indexOf(scene);
  streamTitle.textContent = scene.title;
  streamCounter.textContent = `${String(activeSceneIndex + 1).padStart(2, "0")} / ${String(scenes.length).padStart(2, "0")}`;
  streamMoment.textContent = scene.moment;
  streamScene.textContent = scene.scene;
  streamSensory.textContent = scene.sensory;
  streamThread.textContent = scene.thread;

  renderStreamDots(scenes);
  renderStreamFilters();
}

function renderStreamDots(scenes) {
  streamDots.innerHTML = "";

  scenes.forEach((scene, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = index === activeSceneIndex ? "is-active" : "";
    button.setAttribute("aria-label", `Open memory scene ${index + 1}: ${scene.title}`);
    button.addEventListener("click", () => {
      activeSceneIndex = index;
      renderStream();
    });
    streamDots.appendChild(button);
  });
}

function renderStreamFilters() {
  const layers = ["All", ...new Set(activePlace.memoryStream.map((scene) => scene.layer))];
  streamFilters.innerHTML = "";

  layers.forEach((layer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = layer === activeLayerFilter ? "is-active" : "";
    button.textContent = layer;
    button.addEventListener("click", () => {
      activeLayerFilter = layer;
      activeSceneIndex = 0;
      renderStream();
    });
    streamFilters.appendChild(button);
  });
}

function renderActivePlace() {
  document.documentElement.style.setProperty("--active-tone", activePlace.tone);
  document.documentElement.style.setProperty("--active-accent", activePlace.accent);
  placeName.textContent = activePlace.name;
  placeArchetype.textContent = activePlace.archetype;
  placeVoice.textContent = activePlace.voice;
  voiceType.textContent = activePlace.type;
  readoutRegion.textContent = activePlace.region;
  readoutPulse.textContent = `${activePlace.pulse}%`;
  renderPlaces();
  renderIdentityGrid();
  renderLayers();
  renderAtmosphere();
  renderThreads();
  renderWhyHereEngine();
  renderStream();
}

function selectPlace(id) {
  activePlace = locations.find((place) => place.id === id) || locations[0];
  activeSceneIndex = 0;
  activeLayerFilter = "All";
  activeWhyFactorId = activePlace.whyHereEngine.factors[0].id;
  renderActivePlace();
}

function stepScene(direction) {
  const scenes = getFilteredScenes();
  activeSceneIndex = (activeSceneIndex + direction + scenes.length) % scenes.length;
  renderStream();
}

function drawGlobe(time) {
  ctx.clearRect(0, 0, width, height);

  const centerX = width * 0.5;
  const centerY = height * 0.5 + Math.sin(time * 0.0004) * 8;
  const radius = Math.min(width, height) * (width < 760 ? 0.34 : 0.3);
  const rotation = time * 0.00005;

  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#091315");
  bg.addColorStop(0.42, "#132221");
  bg.addColorStop(1, "#271f17");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  drawStars(time);
  drawAtmosphere(centerX, centerY, radius, time);
  drawSphere(centerX, centerY, radius, rotation, time);
  drawMemoryPoint(centerX, centerY, radius, activePlace, time);
  drawConnectionThreads(centerX, centerY, radius, time);

  requestAnimationFrame(drawGlobe);
}

function drawStars(time) {
  ctx.save();
  ctx.globalAlpha = 0.3;
  for (let i = 0; i < 90; i += 1) {
    const x = (i * 97 + Math.sin(time * 0.0001 + i) * 22) % width;
    const y = (i * 53) % height;
    const size = (i % 3) + 0.4;
    ctx.fillStyle = i % 5 === 0 ? activePlace.accent : "#d8efe7";
    ctx.fillRect(x, y, size, size);
  }
  ctx.restore();
}

function drawAtmosphere(centerX, centerY, radius, time) {
  const glow = ctx.createRadialGradient(centerX, centerY, radius * 0.4, centerX, centerY, radius * 1.5);
  glow.addColorStop(0, `${hexToRgba(activePlace.tone, 0.16)}`);
  glow.addColorStop(0.55, `${hexToRgba(activePlace.tone, 0.08)}`);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 1.5 + Math.sin(time * 0.001) * 8, 0, Math.PI * 2);
  ctx.fill();
}

function drawSphere(centerX, centerY, radius, rotation, time) {
  const sphere = ctx.createRadialGradient(centerX - radius * 0.36, centerY - radius * 0.35, radius * 0.15, centerX, centerY, radius);
  sphere.addColorStop(0, "#6ddab4");
  sphere.addColorStop(0.32, "#315b4c");
  sphere.addColorStop(0.72, "#172d33");
  sphere.addColorStop(1, "#071113");

  ctx.fillStyle = sphere;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fill();

  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.clip();

  ctx.strokeStyle = "rgba(225, 248, 238, 0.15)";
  ctx.lineWidth = 1;
  for (let i = -5; i <= 5; i += 1) {
    const y = centerY + (i / 6) * radius;
    const bandWidth = Math.sqrt(Math.max(0, radius * radius - (y - centerY) ** 2));
    ctx.beginPath();
    ctx.ellipse(centerX, y, bandWidth, Math.max(2, bandWidth * 0.12), 0, 0, Math.PI * 2);
    ctx.stroke();
  }

  for (let i = 0; i < 12; i += 1) {
    const angle = rotation + i * 0.52;
    const x = centerX + Math.cos(angle) * radius * 0.24;
    ctx.beginPath();
    ctx.ellipse(x, centerY, radius * 0.3, radius, angle * 0.12, 0, Math.PI * 2);
    ctx.stroke();
  }

  drawLandMass(centerX, centerY, radius, rotation, time);
  ctx.restore();

  ctx.strokeStyle = hexToRgba(activePlace.tone, 0.65);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius + 1, 0, Math.PI * 2);
  ctx.stroke();
}

function drawLandMass(centerX, centerY, radius, rotation, time) {
  ctx.fillStyle = "rgba(83, 171, 123, 0.42)";
  const masses = [
    { x: -0.28, y: -0.18, w: 0.24, h: 0.16 },
    { x: 0.12, y: -0.28, w: 0.22, h: 0.12 },
    { x: 0.26, y: 0.12, w: 0.18, h: 0.22 },
    { x: -0.1, y: 0.22, w: 0.28, h: 0.13 },
    { x: 0.02, y: -0.02, w: 0.14, h: 0.19 }
  ];

  masses.forEach((mass, index) => {
    const drift = Math.sin(time * 0.0002 + index) * 0.018;
    const x = centerX + (mass.x + Math.sin(rotation + index) * 0.08 + drift) * radius;
    const y = centerY + mass.y * radius;
    ctx.beginPath();
    ctx.ellipse(x, y, mass.w * radius, mass.h * radius, rotation * 5 + index, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawMemoryPoint(centerX, centerY, radius, place, time) {
  const x = centerX + (place.coordinates.x - 0.5) * radius * 1.3;
  const y = centerY + (place.coordinates.y - 0.5) * radius * 1.25;
  const pulse = 1 + Math.sin(time * 0.004) * 0.25;

  ctx.strokeStyle = hexToRgba(place.accent, 0.34);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(x, y, 28 * pulse, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = place.accent;
  ctx.beginPath();
  ctx.arc(x, y, 6, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#fff8df";
  ctx.font = "600 13px Inter, sans-serif";
  ctx.fillText(place.name, x + 14, y + 5);
}

function drawConnectionThreads(centerX, centerY, radius, time) {
  ctx.save();
  ctx.globalAlpha = 0.5;
  locations.forEach((place, index) => {
    if (place.id === activePlace.id) return;
    const x = centerX + (place.coordinates.x - 0.5) * radius * 1.3;
    const y = centerY + (place.coordinates.y - 0.5) * radius * 1.25;
    const activeX = centerX + (activePlace.coordinates.x - 0.5) * radius * 1.3;
    const activeY = centerY + (activePlace.coordinates.y - 0.5) * radius * 1.25;
    const lift = Math.sin(time * 0.001 + index) * 16;

    ctx.strokeStyle = hexToRgba(activePlace.tone, 0.28);
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(activeX, activeY);
    ctx.quadraticCurveTo(centerX, centerY - radius * 0.72 + lift, x, y);
    ctx.stroke();
  });
  ctx.restore();
}

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const value = Number.parseInt(clean, 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function formatFacet(facet) {
  return facet.replace(/([A-Z])/g, " $1").replace(/^./, (char) => char.toUpperCase());
}

window.addEventListener("resize", resizeCanvas);
previousScene.addEventListener("click", () => stepScene(-1));
nextScene.addEventListener("click", () => stepScene(1));
resizeCanvas();
renderActivePlace();
requestAnimationFrame(drawGlobe);
