import { archiveRecords, consciousnessFacets, contributionGuidelines, earthDreaming, locations } from "./data/locations.js";

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
const soundscapePanel = document.querySelector("#soundscapePanel");
const threadList = document.querySelector("#threadList");
const archiveList = document.querySelector("#archiveList");
const contributionIntake = document.querySelector("#contributionIntake");
const draftExport = document.querySelector("#draftExport");
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
const dreamToggle = document.querySelector("#dreamToggle");
const dreamTitle = document.querySelector("#dreamTitle");
const dreamSummary = document.querySelector("#dreamSummary");
const dreamPulse = document.querySelector("#dreamPulse");
const dreamFlowCount = document.querySelector("#dreamFlowCount");
const dreamLayerList = document.querySelector("#dreamLayerList");

let activePlace = locations[0];
let activeSceneIndex = 0;
let activeLayerFilter = "All";
let activeWhyFactorId = activePlace.whyHereEngine.factors[0].id;
let activeSoundChannelId = activePlace.soundscape.channels[0].id;
let activeThreadNodeId = activePlace.threadGraph.nodes[0].id;
let activeDreamLayerId = earthDreaming.layers[0].id;
let dreamModeActive = false;
let contributionDraft = createContributionDraft(activePlace);
let atmospherePlaying = false;
let atmosphereIntensity = 0.45;
let audioContext;
let audioNodes = [];
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

function renderSoundscape() {
  const soundscape = activePlace.soundscape;
  const activeChannel = getActiveSoundChannel();

  soundscapePanel.innerHTML = `
    <div class="section-label">
      <p class="eyebrow">Sound Memory</p>
      <h2>Atmosphere console</h2>
    </div>
    <div class="weather-grid">
      <article><span>Time</span><strong>${soundscape.time}</strong></article>
      <article><span>Weather</span><strong>${soundscape.weather}</strong></article>
      <article><span>Temperature</span><strong>${soundscape.temperature}</strong></article>
      <article><span>Wind</span><strong>${soundscape.wind}</strong></article>
    </div>
    <div class="sound-channel-list"></div>
    <div class="sound-detail">
      <span>${activeChannel.texture}</span>
      <p>${activeChannel.memory}</p>
    </div>
    <div class="sound-controls">
      <button type="button" id="toggleAtmosphere">${atmospherePlaying ? "Stop atmosphere" : "Start atmosphere"}</button>
      <label>
        <span>Intensity</span>
        <input id="atmosphereIntensity" type="range" min="0" max="100" value="${Math.round(atmosphereIntensity * 100)}" />
      </label>
    </div>
  `;

  const channelList = soundscapePanel.querySelector(".sound-channel-list");
  soundscape.channels.forEach((channel) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = channel.id === activeSoundChannelId ? "is-active" : "";
    button.innerHTML = `
      <strong>${channel.label}</strong>
      <span>${channel.texture}</span>
    `;
    button.addEventListener("click", () => {
      activeSoundChannelId = channel.id;
      if (atmospherePlaying) restartAtmosphere();
      renderSoundscape();
    });
    channelList.appendChild(button);
  });

  soundscapePanel.querySelector("#toggleAtmosphere").addEventListener("click", toggleAtmosphere);
  soundscapePanel.querySelector("#atmosphereIntensity").addEventListener("input", (event) => {
    atmosphereIntensity = Number(event.target.value) / 100;
    updateAtmosphereGain();
  });
}

function renderThreads() {
  const graph = activePlace.threadGraph;
  const activeNode = graph.nodes.find((node) => node.id === activeThreadNodeId) || graph.nodes[0];
  const activeLinks = graph.links.filter((link) => link.from === activeNode.id || link.to === activeNode.id);

  threadList.innerHTML = `
    <div class="section-label">
      <p class="eyebrow">Civilization Threads</p>
      <h2>Connection graph</h2>
    </div>
    <div class="thread-graph">
      <div class="thread-hub">${graph.center}</div>
      <div class="thread-node-list"></div>
    </div>
    <article class="thread-detail">
      <span>${activeNode.type}</span>
      <strong>${activeNode.label}</strong>
      <p>${activeNode.summary}</p>
      <div class="thread-relations"></div>
    </article>
  `;

  const nodeList = threadList.querySelector(".thread-node-list");
  graph.nodes.forEach((node) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = node.id === activeNode.id ? "is-active" : "";
    button.innerHTML = `
      <strong>${node.label}</strong>
      <span>${node.type}</span>
    `;
    button.addEventListener("click", () => {
      activeThreadNodeId = node.id;
      renderThreads();
    });
    nodeList.appendChild(button);
  });

  const relations = threadList.querySelector(".thread-relations");
  activeLinks.forEach((link) => {
    const otherNodeId = link.from === activeNode.id ? link.to : link.from;
    const otherNode = graph.nodes.find((node) => node.id === otherNodeId);
    const item = document.createElement("span");
    item.textContent = `${otherNode?.label || graph.center}: ${link.relation}`;
    relations.appendChild(item);
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

function renderArchiveLayer() {
  const records = archiveRecords.filter((record) => record.placeId === activePlace.id);

  archiveList.innerHTML = `
    <div class="section-label">
      <p class="eyebrow">Archive Layer</p>
      <h2>Cultural memory records</h2>
    </div>
  `;

  records.forEach((record) => {
    const item = document.createElement("article");
    item.className = "archive-item";
    item.innerHTML = `
      <div class="archive-item__header">
        <span>${record.type}</span>
        <strong>${record.title}</strong>
      </div>
      <p>${record.context}</p>
      <dl>
        <div>
          <dt>Keeper</dt>
          <dd>${record.keeper}</dd>
        </div>
        <div>
          <dt>Provenance</dt>
          <dd>${record.provenance}</dd>
        </div>
        <div>
          <dt>Source</dt>
          <dd>${record.source}</dd>
        </div>
        <div>
          <dt>Rights</dt>
          <dd>${record.rights}</dd>
        </div>
      </dl>
      <div class="archive-meta">
        <span>${record.confidence}</span>
        ${record.facets.map((facet) => `<span>${formatFacet(facet)}</span>`).join("")}
      </div>
      <div class="archive-tags">
        ${record.tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>
    `;
    archiveList.appendChild(item);
  });
}

function renderContributionIntake() {
  contributionIntake.innerHTML = `
    <div class="section-label">
      <p class="eyebrow">Contribution Intake</p>
      <h2>Prepare an archive submission</h2>
    </div>
    <div class="intake-form">
      <label>
        <span>Record type</span>
        <select id="contributionType">
          ${contributionGuidelines.recordTypes
            .map((type) => `<option value="${type.id}">${type.label}</option>`)
            .join("")}
        </select>
      </label>
      <label>
        <span>Sensitivity</span>
        <select id="contributionSensitivity">
          ${contributionGuidelines.sensitivityLevels
            .map((level) => `<option value="${level.id}">${level.label}</option>`)
            .join("")}
        </select>
      </label>
      <label>
        <span>Working title</span>
        <input id="contributionTitle" type="text" value="${contributionDraft.title}" />
      </label>
      <label>
        <span>Keeper or source community</span>
        <input id="contributionKeeper" type="text" value="${contributionDraft.keeper}" />
      </label>
      <label>
        <span>Source note</span>
        <input id="contributionSource" type="text" value="${contributionDraft.source}" />
      </label>
      <label class="intake-consent">
        <input id="contributionConsent" type="checkbox" />
        <span>Consent and credit path identified</span>
      </label>
    </div>
    <article class="intake-preview">
      <div class="intake-preview__header">
        <span id="contributionStatus"></span>
        <strong id="contributionPreviewTitle"></strong>
      </div>
      <dl>
        <div>
          <dt>Place</dt>
          <dd id="contributionPlace"></dd>
        </div>
        <div>
          <dt>Keeper</dt>
          <dd id="contributionPreviewKeeper"></dd>
        </div>
        <div>
          <dt>Source</dt>
          <dd id="contributionPreviewSource"></dd>
        </div>
        <div>
          <dt>Required context</dt>
          <dd id="contributionRequiredContext"></dd>
        </div>
        <div>
          <dt>Review rule</dt>
          <dd id="contributionReviewRule"></dd>
        </div>
      </dl>
    </article>
  `;

  const typeControl = contributionIntake.querySelector("#contributionType");
  const sensitivityControl = contributionIntake.querySelector("#contributionSensitivity");
  const titleControl = contributionIntake.querySelector("#contributionTitle");
  const keeperControl = contributionIntake.querySelector("#contributionKeeper");
  const sourceControl = contributionIntake.querySelector("#contributionSource");
  const consentControl = contributionIntake.querySelector("#contributionConsent");

  typeControl.value = contributionDraft.typeId;
  sensitivityControl.value = contributionDraft.sensitivityId;
  consentControl.checked = contributionDraft.hasConsentPath;

  typeControl.addEventListener("change", (event) => {
    contributionDraft.typeId = event.target.value;
    updateContributionPreview();
  });
  sensitivityControl.addEventListener("change", (event) => {
    contributionDraft.sensitivityId = event.target.value;
    updateContributionPreview();
  });
  titleControl.addEventListener("input", (event) => {
    contributionDraft.title = event.target.value;
    updateContributionPreview();
  });
  keeperControl.addEventListener("input", (event) => {
    contributionDraft.keeper = event.target.value;
    updateContributionPreview();
  });
  sourceControl.addEventListener("input", (event) => {
    contributionDraft.source = event.target.value;
    updateContributionPreview();
  });
  consentControl.addEventListener("change", (event) => {
    contributionDraft.hasConsentPath = event.target.checked;
    updateContributionPreview();
  });

  updateContributionPreview();
}

function renderDraftExport() {
  draftExport.innerHTML = `
    <div class="section-label">
      <p class="eyebrow">Draft Export</p>
      <h2>Review packet</h2>
    </div>
    <article class="draft-packet">
      <div class="draft-packet__header">
        <span id="draftPacketStatus"></span>
        <button type="button" id="refreshDraftPacket">Refresh</button>
      </div>
      <pre id="draftPacketOutput"></pre>
    </article>
  `;

  draftExport.querySelector("#refreshDraftPacket").addEventListener("click", updateDraftExport);
  updateDraftExport();
}

function updateContributionPreview() {
  const type = getContributionType();
  const sensitivity = getContributionSensitivity();
  const title = contributionDraft.title.trim() || "Untitled memory";
  const keeper = contributionDraft.keeper.trim() || "Keeper not identified";
  const source = contributionDraft.source.trim() || "Source needed";
  const consentStatus = contributionDraft.hasConsentPath ? "Ready for curator review" : "Consent path needed";

  contributionIntake.querySelector("#contributionStatus").textContent = `${type.label} / ${consentStatus}`;
  contributionIntake.querySelector("#contributionPreviewTitle").textContent = title;
  contributionIntake.querySelector("#contributionPlace").textContent = activePlace.name;
  contributionIntake.querySelector("#contributionPreviewKeeper").textContent = keeper;
  contributionIntake.querySelector("#contributionPreviewSource").textContent = source;
  contributionIntake.querySelector("#contributionRequiredContext").textContent = type.requiredContext;
  contributionIntake.querySelector("#contributionReviewRule").textContent = sensitivity.review;
  updateDraftExport();
}

function updateDraftExport() {
  if (!draftExport.innerHTML) return;

  const packet = buildContributionPacket();
  const packetStatus = packet.review.hasConsentPath ? "Ready for curator review" : "Needs consent path";

  draftExport.querySelector("#draftPacketStatus").textContent = packetStatus;
  draftExport.querySelector("#draftPacketOutput").textContent = JSON.stringify(packet, null, 2);
}

function buildContributionPacket() {
  const type = getContributionType();
  const sensitivity = getContributionSensitivity();
  const title = contributionDraft.title.trim() || "Untitled memory";
  const keeper = contributionDraft.keeper.trim() || "Keeper not identified";
  const source = contributionDraft.source.trim() || "Source needed";

  return {
    id: `${activePlace.id}-${slugify(title)}-draft`,
    status: "draft",
    place: {
      id: activePlace.id,
      name: activePlace.name,
      region: activePlace.region
    },
    record: {
      type: type.label,
      title,
      keeper,
      source,
      requiredContext: type.requiredContext
    },
    review: {
      sensitivity: sensitivity.label,
      reviewRule: sensitivity.review,
      hasConsentPath: contributionDraft.hasConsentPath,
      nextAction: contributionDraft.hasConsentPath ? "Curator review" : "Identify consent and credit path"
    }
  };
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

function renderDreamingMode() {
  const activeLayer = getActiveDreamLayer();

  dreamToggle.textContent = dreamModeActive ? "Sleep" : "Wake";
  dreamToggle.setAttribute("aria-pressed", String(dreamModeActive));
  dreamTitle.textContent = activeLayer.title;
  dreamSummary.textContent = activeLayer.summary;
  dreamPulse.textContent = activeLayer.pulse;
  dreamFlowCount.textContent = `${String(activeLayer.flows.length).padStart(2, "0")} flows`;
  dreamLayerList.innerHTML = "";

  earthDreaming.layers.forEach((layer) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = layer.id === activeLayer.id ? "is-active" : "";
    button.style.setProperty("--dream-color", layer.color);
    button.innerHTML = `
      <span></span>
      <strong>${layer.title}</strong>
    `;
    button.addEventListener("click", () => {
      activeDreamLayerId = layer.id;
      dreamModeActive = true;
      renderDreamingMode();
    });
    dreamLayerList.appendChild(button);
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
  renderSoundscape();
  renderThreads();
  renderWhyHereEngine();
  renderArchiveLayer();
  renderContributionIntake();
  renderDraftExport();
  renderStream();
  renderDreamingMode();
}

function selectPlace(id) {
  activePlace = locations.find((place) => place.id === id) || locations[0];
  activeSceneIndex = 0;
  activeLayerFilter = "All";
  activeWhyFactorId = activePlace.whyHereEngine.factors[0].id;
  activeSoundChannelId = activePlace.soundscape.channels[0].id;
  activeThreadNodeId = activePlace.threadGraph.nodes[0].id;
  contributionDraft = createContributionDraft(activePlace);
  if (atmospherePlaying) restartAtmosphere();
  renderActivePlace();
}

function stepScene(direction) {
  const scenes = getFilteredScenes();
  activeSceneIndex = (activeSceneIndex + direction + scenes.length) % scenes.length;
  renderStream();
}

function getActiveSoundChannel() {
  return activePlace.soundscape.channels.find((channel) => channel.id === activeSoundChannelId) || activePlace.soundscape.channels[0];
}

function getActiveDreamLayer() {
  return earthDreaming.layers.find((layer) => layer.id === activeDreamLayerId) || earthDreaming.layers[0];
}

function getContributionType() {
  return contributionGuidelines.recordTypes.find((type) => type.id === contributionDraft.typeId) || contributionGuidelines.recordTypes[0];
}

function getContributionSensitivity() {
  return (
    contributionGuidelines.sensitivityLevels.find((level) => level.id === contributionDraft.sensitivityId) ||
    contributionGuidelines.sensitivityLevels[0]
  );
}

function createContributionDraft(place) {
  return {
    typeId: contributionGuidelines.recordTypes[0].id,
    sensitivityId: contributionGuidelines.sensitivityLevels[1].id,
    title: `${place.name} memory contribution`,
    keeper: "Keeper not identified",
    source: "Source needed",
    hasConsentPath: false
  };
}

function toggleDreamingMode() {
  dreamModeActive = !dreamModeActive;
  renderDreamingMode();
}

function toggleAtmosphere() {
  if (atmospherePlaying) {
    stopAtmosphere();
  } else {
    startAtmosphere();
  }
  renderSoundscape();
}

function startAtmosphere() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  audioContext = audioContext || new AudioContextClass();
  if (audioContext.state === "suspended") audioContext.resume();
  atmospherePlaying = true;
  createAtmosphereNodes();
}

function restartAtmosphere() {
  stopAtmosphereNodes();
  createAtmosphereNodes();
}

function stopAtmosphere() {
  atmospherePlaying = false;
  stopAtmosphereNodes();
}

function stopAtmosphereNodes() {
  audioNodes.forEach((node) => {
    try {
      node.stop();
    } catch {
      node.disconnect();
    }
  });
  audioNodes = [];
}

function createAtmosphereNodes() {
  if (!audioContext || !atmospherePlaying) return;

  const channel = getActiveSoundChannel();
  const masterGain = audioContext.createGain();
  const mainOscillator = audioContext.createOscillator();
  const modulator = audioContext.createOscillator();
  const modulatorGain = audioContext.createGain();

  mainOscillator.type = "sine";
  mainOscillator.frequency.value = channel.frequency;
  modulator.type = "sine";
  modulator.frequency.value = channel.modulation;
  modulatorGain.gain.value = channel.frequency * 0.015;
  masterGain.gain.value = atmosphereIntensity * 0.08;

  modulator.connect(modulatorGain);
  modulatorGain.connect(mainOscillator.frequency);
  mainOscillator.connect(masterGain);
  masterGain.connect(audioContext.destination);

  mainOscillator.start();
  modulator.start();
  audioNodes = [mainOscillator, modulator, masterGain, modulatorGain];
}

function updateAtmosphereGain() {
  const gainNode = audioNodes.find((node) => node.gain);
  if (gainNode) gainNode.gain.value = atmosphereIntensity * 0.08;
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
  if (dreamModeActive) drawDreamingFlows(centerX, centerY, radius, time);

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

function drawDreamingFlows(centerX, centerY, radius, time) {
  const layer = getActiveDreamLayer();

  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  layer.flows.forEach((flow, index) => {
    const from = earthDreaming.nodes[flow.from];
    const to = earthDreaming.nodes[flow.to];
    if (!from || !to) return;

    const start = projectDreamNode(from, centerX, centerY, radius);
    const end = projectDreamNode(to, centerX, centerY, radius);
    const lift = -radius * (0.18 + (index % 3) * 0.08) + Math.sin(time * 0.001 + index) * 10;
    const control = {
      x: (start.x + end.x) / 2 + Math.cos(index * 1.7) * radius * 0.12,
      y: Math.min(start.y, end.y) + lift
    };
    const particleT = (time * 0.00022 + index * 0.17) % 1;
    const particle = quadraticPoint(start, control, end, particleT);

    ctx.strokeStyle = hexToRgba(layer.color, 0.42);
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
    ctx.stroke();

    ctx.fillStyle = hexToRgba(layer.color, 0.92);
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, 3.8 + Math.sin(time * 0.006 + index) * 1.2, 0, Math.PI * 2);
    ctx.fill();
  });

  Object.values(earthDreaming.nodes).forEach((node) => {
    const point = projectDreamNode(node, centerX, centerY, radius);
    ctx.fillStyle = hexToRgba(layer.color, 0.24);
    ctx.beginPath();
    ctx.arc(point.x, point.y, 10 + Math.sin(time * 0.003 + point.x) * 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#fff8df";
    ctx.font = "700 11px Inter, sans-serif";
    ctx.fillText(node.label, point.x + 11, point.y + 4);
  });
  ctx.restore();
}

function projectDreamNode(node, centerX, centerY, radius) {
  return {
    x: centerX + (node.x - 0.5) * radius * 1.55,
    y: centerY + (node.y - 0.5) * radius * 1.35
  };
}

function quadraticPoint(start, control, end, t) {
  const inverse = 1 - t;
  return {
    x: inverse * inverse * start.x + 2 * inverse * t * control.x + t * t * end.x,
    y: inverse * inverse * start.y + 2 * inverse * t * control.y + t * t * end.y
  };
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

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

window.addEventListener("resize", resizeCanvas);
previousScene.addEventListener("click", () => stepScene(-1));
nextScene.addEventListener("click", () => stepScene(1));
dreamToggle.addEventListener("click", toggleDreamingMode);
resizeCanvas();
renderActivePlace();
requestAnimationFrame(drawGlobe);
