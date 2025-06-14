<template>
  <div class="video-wrapper">

      <!-- Decorative Images -->
      <img src="/effect.png" alt="Decorative Top Left" class="decorative-image top-left">
      <img src="/effect.png" alt="Decorative Bottom Right" class="decorative-image bottom-right">
    <div class="video-container">
    

      <!-- Overlay background -->
      <div class="video-overlay"></div>

      <!-- Video player -->
      <video id="myVideo" class="custom-video" poster="/BG.png" preload="metadata">
        <source src="/supercar.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- Play button (stacked images) -->
      <button class="play-button" id="playButton">
        <img src="/Oval.svg" alt="Background Button" class="jj" />
        <img src="/Path.png" alt="Foreground Icon" class="hh" />
      </button>
    </div>
  </div>
</template>


<script setup>
onMounted(() => {
  const video = document.getElementById('myVideo');
  const playButton = document.getElementById('playButton');

  playButton.addEventListener('click', () => {
    video.play();
    playButton.style.display = 'none';
  });
});
</script>

<style scoped>
.video-wrapper {
  background-color: #080808;
  min-width: 365px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  padding-bottom: 110px;
  padding-top: 60px;
  margin-top: -20px ;
  position: relative; /* Added for positioning context */
}

.video-container {
  position: relative;
  width: 100%;
  max-width: 360px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Decorative images styling */
.decorative-image {
  position: absolute;
  z-index: 6; /* Above video but below play button */
  width: 120px; /* Adjust size as needed */
  height: auto;
  pointer-events: none; /* So they don't interfere with video clicks */
}

.top-left {
  top: -160px; /* Adjust positioning */
  left: -10px;
  width: 425px;
  height: 425px;
}

.bottom-right {
  bottom: -90px;
  right: -100px;
  rotate: -155.54deg;
width: 345.21441640094963px;
height: 345.21441640094963px;

}

/* Rest of your existing styles... */
.video-overlay {
  background: #048C80;
  opacity: 0.5;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  pointer-events: none;
  border-radius: 12px;
}

.custom-video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  object-fit: cover;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 4; /* Above decorative images */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
}

.play-button .jj {
  position: absolute;
  width: 64px;
  height: 64px;
  z-index: 1;
  zoom: 4;
  left: -25px;
  top: -17px;
}

.play-button .hh {
  position: absolute;
  width: 24px;
  height: 24px;
  z-index: 2;
}

.play-button:hover .jj,
.play-button:hover .hh {
  transform: scale(1.05);
  transition: transform 0.2s;
}


@media (min-width: 630px) {
  .video-container {
    max-width: 600px; /* Increase width for large screens */
  }
  .video-overlay {  border-radius: 18px; /* ✅ Add this line */ }
}

@media (min-width: 1360px) {
  .video-container {
    max-width: 1110px; /* or any value you want */
    height: 600px;

  }

  .video-wrapper{
    max-width: 1440px ;
    margin: 0 auto;
  }

  .bottom-right {
  bottom: 120px;
  right: -15px;
  rotate: 20deg;


}
.video-overlay {  border-radius: 31px; /* ✅ Add this line */ }

.top-left {
  top: -160px; 
  left: 40px;
  rotate: -120deg;
}

}


</style>