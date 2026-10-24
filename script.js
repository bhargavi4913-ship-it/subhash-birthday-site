/*
  PERSONALIZE YOUR MEMORY WEBSITE
  1) Put photos in the "photos" folder.
  2) Replace the photo spots below with your photo filenames and captions.
  3) The included "Darling Instrumental.mp3" plays from the soundtrack button and accompanies video playback.
*/

const memories = [
  // Example: { image: "photos/first-day.jpg", tag: "THE BEGINNING", title: "The day the lore began", caption: "Our story started here 💗" },
  // Example: { image: "photos/funny-selfie.jpg", tag: "CERTIFIED NONSENSE", title: "Zero brain cells, 10/10 fun", caption: "I still laugh when I remember this 😂" },
  // Add your memories by copying one example line and changing the details.
];

const introScreen = document.getElementById("introScreen");
const introVideo = document.getElementById("introVideo");
function openBirthdayPage() {
  introScreen.classList.add("is-leaving");
  document.body.classList.remove("intro-active");
  introVideo.pause();
  startSoundtrack();
  history.replaceState(null, "", window.location.pathname + window.location.search);
  window.scrollTo(0, 0);
  window.setTimeout(() => {
    introScreen.hidden = true;
    burstConfetti(48);
  }, 350);
}

document.getElementById("openBirthday").addEventListener("click", openBirthdayPage);
introVideo.addEventListener("loadeddata", () => introScreen.classList.add("video-ready"));
if (introVideo.readyState >= 2) introScreen.classList.add("video-ready");

const memoryGrid = document.getElementById("memoryGrid");
if (memories.length) {
  memoryGrid.innerHTML = memories.map((memory) => `
    <article class="memory-card card-pink">
      <img class="memory-photo" src="${memory.image}" alt="${memory.title.replace(/"/g, "&quot;")}" loading="lazy">
      <div class="memory-info">
        <span class="memory-tag">${memory.tag}</span>
        <h3>${memory.title}</h3>
        <p>${memory.caption}</p>
      </div>
    </article>
  `).join("");
}

const floatingLayer = document.getElementById("floatingLayer");
const confettiEmojis = ["💗", "✨", "🎉", "💌", "🌸", "⭐", "🎂"];
function burstConfetti(amount = 36) {
  for (let i = 0; i < amount; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.animationDuration = `${2.4 + Math.random() * 2.8}s`;
    piece.style.animationDelay = `${Math.random() * 0.6}s`;
    piece.style.fontSize = `${14 + Math.random() * 18}px`;
    floatingLayer.appendChild(piece);
    window.setTimeout(() => piece.remove(), 6000);
  }
}

document.getElementById("confettiButton").addEventListener("click", () => burstConfetti(48));
document.getElementById("openLetter").addEventListener("click", () => {
  document.querySelector(".letter-envelope").hidden = true;
  document.getElementById("letterContent").hidden = false;
  burstConfetti(22);
});
document.getElementById("closeLetter").addEventListener("click", () => {
  document.getElementById("letterContent").hidden = true;
  document.querySelector(".letter-envelope").hidden = false;
});
document.getElementById("wishButton").addEventListener("click", () => {
  document.getElementById("wishMessage").textContent = "Wish accepted by the universe. ✨ (No refunds, only good vibes.)";
  burstConfetti(55);
});

const audio = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
let resumeSoundtrackAfterVideo = false;

async function startSoundtrack() {
  try {
    await audio.play();
    return true;
  } catch (error) {
    return false;
  }
}

function syncMusicToggle() {
  const isPlaying = !audio.paused;
  musicToggle.setAttribute("aria-pressed", String(isPlaying));
  musicToggle.innerHTML = isPlaying ? '♫ <span>Pause soundtrack</span>' : '♫ <span>Play our soundtrack</span>';
}

audio.addEventListener("play", syncMusicToggle);
audio.addEventListener("pause", syncMusicToggle);

function startVideoSoundtrack(event) {
  const video = event.currentTarget;
  if (video.muted || video.volume === 0 || audio.paused) return;
  resumeSoundtrackAfterVideo = true;
  audio.pause();
}

document.querySelectorAll("video").forEach((video) => {
  if (video.classList.contains("memory-video")) {
    video.addEventListener("play", () => {
      video.muted = false;
      video.volume = 1;
    });
  }
  video.addEventListener("play", startVideoSoundtrack);
  ["pause", "ended"].forEach((eventName) => {
    video.addEventListener(eventName, () => {
      if (!resumeSoundtrackAfterVideo) return;
      const anotherVideoPlaying = [...document.querySelectorAll("video")].some((otherVideo) =>
        otherVideo !== video && !otherVideo.paused && !otherVideo.ended && !otherVideo.muted && otherVideo.volume > 0
      );
      if (!anotherVideoPlaying) {
        resumeSoundtrackAfterVideo = false;
        startSoundtrack();
      }
    });
  });
});

musicToggle.addEventListener("click", async () => {
  if (audio.paused) {
    if (resumeSoundtrackAfterVideo) return;
    if (!await startSoundtrack()) {
      alert("Your browser could not start the music. Try tapping the button again.");
    }
  } else {
    resumeSoundtrackAfterVideo = false;
    audio.pause();
  }
});
