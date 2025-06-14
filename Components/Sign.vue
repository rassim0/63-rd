<template>
<section class="hero-section">
  <!-- Background Image (under content) -->
  <img src="/sign-back.png" alt="Decorative background" class="bg-image" />
<div class="hero-wrapper">
  <!-- Main Content -->
  <div class="content">
    <div class="text-content">
      <h1 class="title">Unlock the Full Potential of <span class="tit">SmartNotes</span> </h1>
      <p class="description">
        Ready to streamline your workflow and boost your productivity? Start your free trial of SmartNotes today and experience the power of smart note-taking.
      </p>
    </div>

    <div class="action">
      <button class="cta-button">
        Sign Up for Free <img src="/box-2-btt.svg" />
      </button>
    </div>
</div>
    <img src="/sign-pic.png" alt="Hero Illustration" class="side-image" />

  </div>
</section>
</template>

<style scoped >

.hero-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.side-image {
  display: none;
  max-width: 100%;
  height: auto;
}

.hero-section {
  position: relative;
  background-color: #080808;
  padding: 80px 20px;
  overflow: visible;
  margin-top: -3px;
}

/* Background image behind the content */
.bg-image {
  position: absolute;
  top: -220px;
  left: 0;
  z-index: 0; /* Behind content */
  overflow: visible;
  pointer-events: none;
}

.content {
  position: relative;
  z-index: 1; /* Above background image */
  max-width: 380px;
  margin: 0;               /* Remove centering */
  text-align: left;        /* Align text to the left */
  padding-left: 10px;      /* Optional: space from left edge */
  margin-top: -30px;
}




.title {
  font-weight: 700;
  color: #EFECE6;
  margin-bottom: 16px;
  font-family: 'DM Sans', sans-serif;
  font-size: 30px;
  line-height: 130%;
  letter-spacing: -1%;
  
}
.tit{
     background: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description {
  color: #BABABA;
  margin-bottom: 32px;
  font-family: 'DM Sans', sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 150%;
letter-spacing: 0%;
max-width: 350px;

}

.action {
  display: flex;
  justify-content: start;
}

.cta-button {
  background: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
  color:#080808;
  padding: 12px 24px;
  font-family: 'DM Sans', sans-serif;
  border: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  max-width: 271px;
  max-height: 64px;
padding-top: 16px;
padding-right: 40px;
padding-bottom: 16px;
padding-left: 40px;
gap: 16px;
border-radius: 8px;
font-family: 'DM Sans';
font-weight: 700;
font-size: 16px;
line-height: 150%;
letter-spacing: 0%;
text-align: center;
}

.cta-button:hover {
  background-color: #015f5f;
}

.arrow-icon {
  width: 20px;
  height: 20px;
}


@media (min-width: 501px) {
  .title {
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: 0%;
    /* leading-trim is not a widely supported CSS property yet */
    max-width: 380px;
  }

  .description {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    /* leading-trim is not widely supported either */
    max-width: 500px;
  }
.content {
  max-width: 880px;
}

  .bg-image {
    zoom: 1.5;
    opacity: 1;
  }




}

@media (min-width: 1100px) {

    .hero-section{
        max-width: 1400px;
        margin: 0 auto;
    }
  .hero-wrapper {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 40px;
  }

  .content {
    max-width: 550px;
    padding-right: 40px;
  }

  .side-image {
    display: block;
    max-width: 375px; /* adjust as needed */
    height: auto;
  }
}



</style>