const tabButtons = Array.from(document.querySelectorAll(".tab-button"));
const tabPanels = Array.from(document.querySelectorAll(".tab-panel"));
const navButtons = Array.from(document.querySelectorAll("[data-open-tab]"));
const tiltElements = Array.from(document.querySelectorAll("[data-tilt]"));
const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const tabsSection = document.getElementById("profile-tabs");
const playsList = document.getElementById("plays-list");
const unassignedSourceList = document.getElementById("unassigned-source-list");
const unassignedSourcesCard = document.getElementById("unassigned-sources");
const glitterLayer = document.createElement("div");
const quoteLayer = document.createElement("div");
const providedLinks = {
  dogReview: "https://umsu.unimelb.edu.au/news/article/7797/2017-06-27-review-a-dog-called-monkey/",
  mainCourse: "https://thedialogtheatre.com/2016/09/12/time-for-the-main-course/",
  alternativeFutures: "https://www.theatreworks.org.au/program/alternative-futures",
  alternativeFuturesVideo: "https://vimeo.com/709349338",
  caveOfSpleen: "https://www.instagram.com/thecaveofspleenplay",
  bleachedHighlighted:
    "https://thewestsider.com.au/bleached-a-local-production-exploring-our-mixed-responses-to-the-climate-crisis/#:~:text=Bleached%20is%20many%20things.,are%20often%20temperamental%20and%20destructive",
  plastisphereAuslan: "https://auslanstageleft.com.au/events/plastisphere-presented-by-coburg-carnivale-melbourne/",
  climateAnxiety: "https://www.artshub.com.au/news/features/how-artists-can-survive-climate-anxiety-258813-2364590/",
  plastisphereReview:
    "https://theupsidenews.com/2020/02/26/fringe-review-plastisphere-the-long-room-at-the-treasury-1860-2020/",
  bleached: "https://thewestsider.com.au/bleached-a-local-production-exploring-our-mixed-responses-to-the-climate-crisis/",
};
const playsData = [
  {
    title: "A Dog Called Monkey",
    dates: [
      { text: "Published: 27/06/2017 1:35 PM", source: providedLinks.dogReview },
      {
        text: "UMSU Creative Arts Office's Tastings ran from September 8th-10th in the Guild Theatre.",
        source: providedLinks.mainCourse,
      },
      { text: "12th Sep 2016", source: providedLinks.mainCourse },
    ],
    description: [
      {
        text: "The narrative follows Leah, a young woman dealing with the aftermath of her sexual assault, and her friends, as they naively attempt to navigate their changing relationships with her.",
        source: providedLinks.dogReview,
      },
      {
        text: "Set around a clothes strewn bed at a house party, the audience is dragged into the nightmare of a young woman struggling to come to terms with her rape.",
        source: providedLinks.mainCourse,
      },
    ],
    cast_and_crew: [
      { text: "director Freya McGrath and writer Laura Collins", source: providedLinks.dogReview },
      {
        text: "Venus Notarberardino, Georgie Pender, Ashyr Mason-Kaine, Declan Mulcahy, Amos Wilkson, Eden Gonford",
        source: providedLinks.dogReview,
      },
      { text: "by Freya McGrath and Laura Collins", source: providedLinks.mainCourse },
      { text: "Irina Hochwald-Jones", source: providedLinks.mainCourse },
    ],
    reviews: [
      {
        quote: "Laura's incredible writing has managed to translate something ugly into something beautiful - trauma into art.",
        source: providedLinks.dogReview,
      },
      {
        quote: "What was powerful here was how the piece used these dreamlike devices to convey a visceral sense of a chaotic, drugged up party.",
        source: providedLinks.mainCourse,
      },
    ],
    links: [providedLinks.dogReview, providedLinks.mainCourse],
    images: ["Image placeholder", "Image placeholder", "Image placeholder"],
  },
  {
    title: "Alternative Futures",
    dates: [{ text: "4 - 5 December", source: providedLinks.alternativeFutures }],
    description: [
      {
        text: "Theatre Works invites you on a guided tour through ALTERNATIVE FUTURES: site-specific performances that reimagine St Kilda in the not-too-distant future.",
        source: providedLinks.alternativeFutures,
      },
      {
        text: "Inspired by people, places and things on Acland Street, playwrights Bryan Andy, Laura Collins, Bumpy Favell, Emma Gibson, Vivian Nguyen and Kristen Smyth have penned six unique monologues that explore hope beyond a time of crisis and share their fantasy-filled predictions of what the future may hold; more cake shops, a plastic wonderland, an underwater city and the return of an ancient stream.",
        source: providedLinks.alternativeFutures,
      },
    ],
    cast_and_crew: [
      {
        text: "Writers BRYAN ANDY, LAURA COLLINS, BUMPY FAVELL, EMMA GIBSON, VIVIAN NGUYEN AND KRISTEN SMYTH",
        source: providedLinks.alternativeFuturesVideo,
      },
      { text: "Director & Curator KITAN PETKOVSKI", source: providedLinks.alternativeFuturesVideo },
      {
        text: "Cast JENNIFER VULETIC, CAROLINE LEE, TAHLEE FEREDAY, KRISTEN SMYTH, BUMPY FAVELL AND SOPHIE MUCKART",
        source: providedLinks.alternativeFuturesVideo,
      },
      { text: "Music and sound design ROBERT DOWNIE", source: providedLinks.alternativeFuturesVideo },
      { text: "Set and costumes BETHANY J FELLOWS", source: providedLinks.alternativeFuturesVideo },
    ],
    reviews: [],
    links: [providedLinks.alternativeFutures, providedLinks.alternativeFuturesVideo],
    images: ["Image placeholder", "Image placeholder", "Image placeholder"],
  },
  {
    title: "The Cave Of Spleen",
    dates: [],
    description: [],
    cast_and_crew: [],
    reviews: [],
    links: [providedLinks.caveOfSpleen],
    images: ["Image placeholder", "Image placeholder", "Image placeholder"],
  },
  {
    title: "Bleached",
    dates: [
      { text: "5 July 2023", source: providedLinks.bleached },
      {
        text: "You can catch one final performance at The Bowery Theatre on Fri 14th July @ 7.30pm",
        source: providedLinks.bleached,
      },
    ],
    description: [
      {
        text: "Written by Laura Collins and directed by Ruby Rees, this local production explores the universal and unavoidable experiences of human nature, which are often temperamental and destructive.",
        source: providedLinks.bleached,
      },
      {
        text: "We understand that in their world, the climate has deteriorated to the point where every country around the world is locking down.",
        source: providedLinks.bleached,
      },
    ],
    cast_and_crew: [{ text: "Written by Laura Collins and directed by Ruby Rees", source: providedLinks.bleached }],
    reviews: [
      { quote: "Bleached offers a chance to explore how many younger people view our future.", source: providedLinks.bleached },
      {
        quote:
          "Supported by a gorgeous script, with performances from highly talented emerging local actors, along with unnerving music and flawless stage direction, Bleached becomes immersive and completely subverts our ideas of the 'fourth wall'.",
        source: providedLinks.bleached,
      },
    ],
    links: [providedLinks.bleachedHighlighted, providedLinks.bleached],
    images: ["Image placeholder", "Image placeholder", "Image placeholder"],
  },
  {
    title: "Plastisphere",
    dates: [{ text: "Friday September 22, 2017 - Saturday September 23, 2017", source: providedLinks.plastisphereAuslan }],
    description: [
      {
        text: "As emission targets are ignored, and we hurdle towards the point of no return, it is clear we have lost the ability to empathise with future generations.",
        source: providedLinks.plastisphereAuslan,
      },
      {
        text: "Showing for two more days in the Long Room at Treasury 1860, AnthropScenes' Plastisphere is a crying exclamation to the inter-generational impacts of Climate Change.",
        source: providedLinks.plastisphereReview,
      },
    ],
    cast_and_crew: [
      {
        text: "Created by Laura Collins (theatre-maker) and Alex Borowiak (climate scientist) and joined by composer Louis Stevens and film-maker Conor Jamieson",
        source: providedLinks.plastisphereReview,
      },
    ],
    reviews: [
      {
        quote: "Plastisphere presents an important message with good intentions: an intriguing side-journey for your commute home or night-out.",
        source: providedLinks.plastisphereReview,
      },
    ],
    links: [providedLinks.plastisphereAuslan, providedLinks.plastisphereReview],
    images: ["Image placeholder", "Image placeholder", "Image placeholder"],
  },
];
const unassignedSources = [
  {
    link: providedLinks.climateAnxiety,
    note: "Accessible source text did not expose a clear play title without extra interpretation.",
  },
];
const floatingQuotes = [
  {
    text: "trauma into art.",
    source: "A Dog Called Monkey",
  },
  {
    text: "a real sense of intoxication and of the loss of mental and physical control.",
    source: "A Dog Called Monkey",
  },
  {
    text: "share their fantasy-filled predictions of what the future may hold",
    source: "Alternative Futures",
  },
  {
    text: "Bleached offers a chance to explore how many younger people view our future.",
    source: "Bleached",
  },
  {
    text: "an intriguing side-journey for your commute home or night-out.",
    source: "Plastisphere",
  },
];
const quotePositions = [
  "quote-box--north-left",
  "quote-box--north-right",
  "quote-box--mid-left",
  "quote-box--mid-right",
  "quote-box--south-left",
  "quote-box--south-right",
];
const activeQuotePositions = new Set();
let quoteCycleId = null;
let lastQuoteIndex = -1;

glitterLayer.className = "glitter-layer";
quoteLayer.className = "quote-layer";
document.body.append(glitterLayer, quoteLayer);

function createExternalLink(href, text, className) {
  const link = document.createElement("a");

  link.className = className;
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer noopener";
  link.textContent = text;

  return link;
}

function createEmptyState() {
  const empty = document.createElement("p");

  empty.className = "play-empty";
  empty.textContent = "Not stated in supplied sources.";

  return empty;
}

function createField(title, classNames = []) {
  const field = document.createElement("section");
  const heading = document.createElement("h4");

  field.className = "play-field";
  classNames.forEach((className) => field.classList.add(className));

  heading.className = "play-field__title";
  heading.textContent = title;

  field.append(heading);

  return field;
}

function buildParagraphEntries(entries) {
  const wrapper = document.createElement("div");

  wrapper.className = "play-paragraphs";

  if (!entries.length) {
    wrapper.append(createEmptyState());
    return wrapper;
  }

  entries.forEach((entry) => {
    const paragraph = document.createElement("p");

    paragraph.className = "play-copy";
    paragraph.textContent = entry.text;
    wrapper.append(paragraph);
  });

  return wrapper;
}

function buildListEntries(entries) {
  if (!entries.length) {
    return createEmptyState();
  }

  const list = document.createElement("ul");

  list.className = "play-list";

  entries.forEach((entry) => {
    const item = document.createElement("li");

    item.textContent = entry.text;
    list.append(item);
  });

  return list;
}

function buildLinkEntries(links) {
  if (!links.length) {
    return createEmptyState();
  }

  const list = document.createElement("ul");

  list.className = "play-link-list";

  links.forEach((linkHref) => {
    const item = document.createElement("li");

    item.append(createExternalLink(linkHref, linkHref, "play-link"));
    list.append(item);
  });

  return list;
}

function buildImagePlaceholders(images) {
  const wrapper = document.createElement("div");
  const scroller = document.createElement("div");

  wrapper.className = "play-media";
  scroller.className = "play-image-scroll";
  scroller.setAttribute("aria-label", "Image placeholders");
  wrapper.append(scroller);

  if (!images.length) {
    scroller.append(createEmptyState());
    return wrapper;
  }

  images.forEach((label, index) => {
    const placeholder = document.createElement("div");
    const title = document.createElement("span");
    const meta = document.createElement("strong");

    placeholder.className = "play-image-placeholder";
    title.className = "play-image-placeholder__label";
    meta.className = "play-image-placeholder__meta";

    title.textContent = label;
    meta.textContent = `Placeholder ${String(index + 1).padStart(2, "0")}`;

    placeholder.append(title, meta);
    scroller.append(placeholder);
  });

  return wrapper;
}

function renderPlayEntry(play, index) {
  const article = document.createElement("article");
  const header = document.createElement("div");
  const titleGroup = document.createElement("div");
  const title = document.createElement("h3");
  const indexTag = document.createElement("span");
  const media = buildImagePlaceholders(play.images);
  const toggleButton = document.createElement("button");
  const details = document.createElement("div");
  const grid = document.createElement("div");
  const descriptionField = createField("Description", ["play-field--span"]);
  const datesField = createField("Dates");
  const castField = createField("Cast & Crew");
  const linksField = createField("Links", ["play-field--span"]);
  const detailsId = `play-details-${index + 1}`;

  article.className = "play-entry";

  header.className = "play-entry__header";
  titleGroup.className = "play-entry__title-group";
  title.textContent = play.title;
  indexTag.className = "play-entry__index";
  indexTag.textContent = String(index + 1).padStart(2, "0");
  toggleButton.className = "play-entry__toggle";
  toggleButton.type = "button";
  toggleButton.textContent = "Expand";
  toggleButton.setAttribute("aria-expanded", "false");
  toggleButton.setAttribute("aria-controls", detailsId);

  titleGroup.append(title, indexTag);
  header.append(titleGroup);

  details.className = "play-entry__details";
  details.id = detailsId;
  details.hidden = true;
  grid.className = "play-entry__grid";

  descriptionField.append(buildParagraphEntries(play.description));
  datesField.append(buildListEntries(play.dates));
  castField.append(buildListEntries(play.cast_and_crew));
  linksField.append(buildLinkEntries(play.links));

  grid.append(descriptionField, datesField, castField);

  if (play.reviews.length) {
    const reviewsField = createField("Reviews", ["play-field--span"]);

    reviewsField.append(buildParagraphEntries(play.reviews.map((review) => ({ text: review.quote, source: review.source }))));
    grid.append(reviewsField);
  }

  grid.append(linksField);
  details.append(grid);
  article.append(header, media, toggleButton, details);
  toggleButton.addEventListener("click", () => {
    const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";
    const nextExpanded = !isExpanded;

    toggleButton.setAttribute("aria-expanded", String(nextExpanded));
    toggleButton.textContent = nextExpanded ? "Close" : "Expand";
    article.classList.toggle("is-expanded", nextExpanded);
    details.hidden = !nextExpanded;
  });

  return article;
}

function renderPlays() {
  if (!playsList) {
    return;
  }

  playsData.forEach((play, index) => {
    playsList.append(renderPlayEntry(play, index));
  });
}

function renderUnassignedSources() {
  if (!unassignedSourcesCard || !unassignedSourceList) {
    return;
  }

  if (!unassignedSources.length) {
    unassignedSourcesCard.hidden = true;
    return;
  }

  unassignedSources.forEach((entry) => {
    const item = document.createElement("li");

    item.className = "play-link-list__item";
    item.append(createExternalLink(entry.link, entry.link, "play-link"));

    if (entry.note) {
      const note = document.createElement("p");

      note.className = "play-link-note";
      note.textContent = entry.note;
      item.append(note);
    }

    unassignedSourceList.append(item);
  });
}

renderPlays();
renderUnassignedSources();

function activateTab(targetId) {
  tabButtons.forEach((button) => {
    const isTarget = button.dataset.tabTarget === targetId;
    button.classList.toggle("is-active", isTarget);
    button.setAttribute("aria-selected", String(isTarget));
    button.tabIndex = isTarget ? 0 : -1;
  });

  navButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.openTab === targetId);
  });

  tabPanels.forEach((panel) => {
    const isTarget = panel.id === targetId;
    panel.classList.toggle("is-active", isTarget);
    panel.hidden = !isTarget;
  });
}

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tabTarget);
  });

  button.addEventListener("keydown", (event) => {
    const arrowKeys = ["ArrowRight", "ArrowLeft", "Home", "End"];

    if (!arrowKeys.includes(event.key)) {
      return;
    }

    event.preventDefault();

    let nextIndex = index;

    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % tabButtons.length;
    }

    if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
    }

    if (event.key === "Home") {
      nextIndex = 0;
    }

    if (event.key === "End") {
      nextIndex = tabButtons.length - 1;
    }

    const nextButton = tabButtons[nextIndex];
    activateTab(nextButton.dataset.tabTarget);
    nextButton.focus();
  });
});

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.openTab);
    tabsSection.scrollIntoView({ behavior: reducedMotionQuery.matches ? "auto" : "smooth", block: "start" });
  });
});

function updateSpotlight(event) {
  document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
  document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
}

function resetTilt(element) {
  element.style.setProperty("--tilt-rotate-x", "0deg");
  element.style.setProperty("--tilt-rotate-y", "0deg");
  element.style.setProperty("--tilt-lift", "0px");
  element.style.setProperty("--tilt-spot-x", "50%");
  element.style.setProperty("--tilt-spot-y", "50%");
}

function handleTilt(event) {
  const element = event.currentTarget;
  const rect = element.getBoundingClientRect();
  const percentX = ((event.clientX - rect.left) / rect.width) * 100;
  const percentY = ((event.clientY - rect.top) / rect.height) * 100;
  const intensity = element.classList.contains("project-card") ? 8 : 5;
  const lift = element.classList.contains("project-card") ? -10 : -6;
  const rotateY = ((percentX - 50) / 50) * intensity;
  const rotateX = ((50 - percentY) / 50) * intensity;

  element.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
  element.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
  element.style.setProperty("--tilt-lift", `${lift}px`);
  element.style.setProperty("--tilt-spot-x", `${percentX.toFixed(2)}%`);
  element.style.setProperty("--tilt-spot-y", `${percentY.toFixed(2)}%`);
}

function spawnGlitterBurst(event) {
  if (event.button !== 0) {
    return;
  }

  const burst = document.createElement("div");
  const particleCount = 90; /* previously 16 */

  burst.className = "glitter-burst";
  burst.style.left = `${event.clientX}px`;
  burst.style.top = `${event.clientY}px`;

  for (let index = 0; index < particleCount; index += 1) {
    const particle = document.createElement("span");
    const angle = (Math.PI * 2 * index) / particleCount + ((Math.random() - 0.5) * 0.35);
    const distance = 30 + Math.random() * 72;
    const driftX = Math.cos(angle) * distance;
    const driftY = Math.sin(angle) * distance;
    const size = 4 + Math.random() * 10;
    const rotation = -120 + Math.random() * 240;
    const delay = Math.random() * 120;
    const duration = 620 + Math.random() * 420;
    const sparkleType = Math.random() > 0.45 ? "glitter-particle--spark" : "glitter-particle--dust";

    particle.className = `glitter-particle ${sparkleType}`;
    particle.style.setProperty("--glitter-dx", `${driftX.toFixed(2)}px`);
    particle.style.setProperty("--glitter-dy", `${driftY.toFixed(2)}px`);
    particle.style.setProperty("--glitter-size", `${size.toFixed(2)}px`);
    particle.style.setProperty("--glitter-rotate", `${rotation.toFixed(2)}deg`);
    particle.style.setProperty("--glitter-delay", `${delay.toFixed(0)}ms`);
    particle.style.setProperty("--glitter-duration", `${duration.toFixed(0)}ms`);

    burst.append(particle);
  }

  const glow = document.createElement("span");
  glow.className = "glitter-flash";
  burst.append(glow);
  glitterLayer.append(burst);

  window.setTimeout(() => {
    burst.remove();
  }, 1200);
}

function pickFloatingQuote() {
  let nextIndex = Math.floor(Math.random() * floatingQuotes.length);

  if (floatingQuotes.length > 1 && nextIndex === lastQuoteIndex) {
    nextIndex = (nextIndex + 1 + Math.floor(Math.random() * (floatingQuotes.length - 1))) % floatingQuotes.length;
  }

  lastQuoteIndex = nextIndex;
  return floatingQuotes[nextIndex];
}

function pickQuotePosition() {
  const availablePositions = quotePositions.filter((position) => !activeQuotePositions.has(position));

  if (availablePositions.length === 0) {
    return null;
  }

  return availablePositions[Math.floor(Math.random() * availablePositions.length)];
}

function typeQuoteText(element, text, onComplete) {
  let index = 0;
  const typingTimer = window.setInterval(() => {
    index += 1;
    element.textContent = text.slice(0, index);

    if (index >= text.length) {
      window.clearInterval(typingTimer);
      onComplete();
    }
  }, 34);

  return typingTimer;
}

function spawnFloatingQuote() {
  if (document.hidden || window.innerWidth < 1080 || quoteLayer.childElementCount >= 2) {
    return;
  }

  const quote = pickFloatingQuote();
  const positionClass = pickQuotePosition();

  if (!positionClass) {
    return;
  }

  const quoteBox = document.createElement("aside");
  const quoteText = document.createElement("p");
  const quoteSource = document.createElement("span");
  let typingTimer = null;

  activeQuotePositions.add(positionClass);

  quoteBox.className = `quote-box quote-box--typing ${positionClass}`;
  quoteBox.setAttribute("aria-hidden", "true");

  quoteText.className = "quote-box__text";
  quoteSource.className = "quote-box__source";
  quoteSource.textContent = quote.source;

  quoteBox.append(quoteText, quoteSource);
  quoteLayer.append(quoteBox);

  requestAnimationFrame(() => {
    quoteBox.classList.add("is-visible");
  });

  typingTimer = typeQuoteText(quoteText, quote.text, () => {
    quoteBox.classList.remove("quote-box--typing");
    quoteBox.classList.add("quote-box--typed");
  });

  window.setTimeout(() => {
    window.clearInterval(typingTimer);
    quoteBox.classList.add("is-leaving");
  }, 5000);

  window.setTimeout(() => {
    activeQuotePositions.delete(positionClass);
    quoteBox.remove();
  }, 5080);
}

function startFloatingQuotes() {
  if (quoteCycleId || reducedMotionQuery.matches) {
    return;
  }

  window.setTimeout(spawnFloatingQuote, 500);
  quoteCycleId = window.setInterval(spawnFloatingQuote, 5000);
}

if (!reducedMotionQuery.matches) {
  document.addEventListener("pointermove", updateSpotlight, { passive: true });
  document.addEventListener("pointerdown", spawnGlitterBurst);
  startFloatingQuotes();

  tiltElements.forEach((element) => {
    element.addEventListener("pointermove", handleTilt);
    element.addEventListener("pointerleave", () => resetTilt(element));
    element.addEventListener("blur", () => resetTilt(element));
  });
}
