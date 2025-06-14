<template>
  <section class="big-section">
    <!-- Header -->
    <div class="header-section">
      <h2 class="title">Frequently Asked <span class="tit">Questions</span> </h2>
      <p class="description">We've compiled a list of the most frequently asked questions about SmartNotes to help you get the information you need. If you have any other questions, feel free to reach out to our support team.</p>
    </div>

    <!-- Grid Boxes -->
    <div class="boxes-grid">
      <div class="box box-a" tabindex="0">
        <div class="box-header">
          <h3 class="box-title">What is SmartNotes?</h3>
          <div class="icon-wrapper">
            <img class="icon-default" src="/box-1-btt.svg" alt="default icon" />
            <img class="icon-focus" src="/arr-ho.svg" alt="focused icon" />
          </div>
        </div>
        <div class="box-description">
          <p>SmartNotes is a digital platform designed to help you organize, store, and access your notes seamlessly from any device.</p>
        </div>
      </div>

      <div class="box box-b" tabindex="0">
        <div class="box-header">
          <h3 class="box-title">How do I get started with SmartNotes?</h3>
          <div class="icon-wrapper">
            <img class="icon-default" src="/box-1-btt.svg" alt="default icon" />
            <img class="icon-focus" src="/arr-ho.svg" alt="focused icon" />
          </div>
        </div>
        <div class="box-description">
          <p>Getting started with SmartNotes is easy! Simply visit our website, sign up for a free trial, and start exploring the features. Our intuitive interface and comprehensive onboarding materials will guide you through the process.</p>
        </div>
      </div>

      <div class="box box-c" tabindex="0">
        <div class="box-header">
          <h3 class="box-title">What are the key features of SmartNotes?</h3>
          <div class="icon-wrapper">
            <img class="icon-default" src="/box-1-btt.svg" alt="default icon" />
            <img class="icon-focus" src="/arr-ho.svg" alt="focused icon" />
          </div>
        </div>
        <div class="box-description">
          <p>It includes AI-powered organization, real-time sync, customizable tags, smart search, and collaborative note editing.</p>
        </div>
      </div>

      <div class="box box-d" tabindex="0">
        <div class="box-header">
          <h3 class="box-title">How much does SmartNotes cost?</h3>
          <div class="icon-wrapper">
            <img class="icon-default" src="/box-1-btt.svg" alt="default icon" />
            <img class="icon-focus" src="/arr-ho.svg" alt="focused icon" />
          </div>
        </div>
        <div class="box-description">
          <p>SmartNotes offers a free plan with core features and premium plans for advanced tools and additional storage.</p>
        </div>
      </div>

      <div class="box box-e" tabindex="0">
        <div class="box-header">
          <h3 class="box-title">Who is SmartNotes for?</h3>
          <div class="icon-wrapper">
            <img class="icon-default" src="/box-1-btt.svg" alt="default icon" />
            <img class="icon-focus" src="/arr-ho.svg" alt="focused icon" />
          </div>
        </div>
        <div class="box-description">
          <p>It’s ideal for students, professionals, and teams who need a reliable way to manage and retrieve notes efficiently.</p>
        </div>
      </div>

      <div class="box box-f" tabindex="0">
        <div class="box-header">
          <h3 class="box-title">What is SmartNotes?</h3>
          <div class="icon-wrapper">
            <img class="icon-default" src="/box-1-btt.svg" alt="default icon" />
            <img class="icon-focus" src="/arr-ho.svg" alt="focused icon" />
          </div>
        </div>
        <div class="box-description">
          <p>A modern note-taking tool that simplifies capturing ideas, tracking tasks, and staying organized in one place.</p>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
// No JavaScript needed
</script>

<style scoped>



.big-section{
    background-color: #080808;
    
}


.title{
color:#EFECE6;
font-family: 'DM Sans';
font-weight: 700;
font-size: 30px;
line-height: 130%;
letter-spacing: -1%;
text-align: center;
max-width: 400px ;
margin: 0 auto;


}

.tit{
    background: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.description{
    font-family: 'DM Sans';
font-weight: 400;
font-size: 14px;
line-height: 150%;
letter-spacing: 0%;
text-align: center;
color: #BABABA;
max-width: 480px;
margin: 0 auto;
margin-top: 20px;


}



.big-section {
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  padding-bottom: 80px;
}

.header-section {
  margin-bottom: 2rem;
  text-align: center;
}

.boxes-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
  grid-template-areas:
    "a"
    "b";
}

.box-a { grid-area: a; }
.box-b { grid-area: b; }

.box {
  background: #080808;
  border: 1px solid #048C80;
  border-radius: 8px;
  padding: 1rem;
  outline: none;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.box-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-title {
  margin: 0;
  font-family: 'DM Sans';
font-weight: 700;
font-size: 18px;
line-height: 150%;
letter-spacing: 0%;
margin-left:7px ;
color: #EFECE6;

}

/* Icon container */
.icon-wrapper {
  position: relative;
  width: 24px;
  height: 24px;
}

/* Both icons are absolutely positioned in same place */
.icon-wrapper img {
  position: absolute;
  top: -4px;
  right: 1px;
  width: 32px;
  height: 32px;
  transition: opacity 0.3s ease;
  object-fit: contain;

}

.icon-default {
  opacity: 1;
  z-index: 1;
}

.icon-focus {
  opacity: 0;
  z-index: 2;
}

/* Show description and focused icon on focus */
.box-description {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease;
  font-family: 'DM Sans';
font-weight: 400;
font-size: 14px;
line-height: 150%;
letter-spacing: 0%;
}

.box:focus-within .box-description {
  max-height: 200px;
  opacity: 1;
  margin-top: 0.5rem;

}

.box:focus-within .box-title {
  color: #080808;


}


/* Toggle icons */
.box:focus-within .icon-default {
  opacity: 0;
}

.box:focus-within .icon-focus {
  opacity: 1;
}

/* Optional styling for active box */
.box:focus-within {
  background: #EFECE6;
  border: 0px solid;
  border-image-source: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
  border-radius: 16px;
}

.box:focus,
.box:focus-visible {
  outline: none;
}







@media (min-width: 501px) {
  .box {
    gap: 26px;
    border-radius: 8px;
    border-width: 1px;
  }


  .boxes-grid{
    max-width: 835px;
    margin-left: auto;
    margin-right: auto;
  }

  .big-section {
    max-width: 1376px;
  }





.title{
font-weight: 700;
font-size: 48px;
line-height: 120%;
letter-spacing: 0%;
text-align: center;
max-width: 535px;
}

.description{
font-weight: 400;
font-size: 16px;
line-height: 150%;
letter-spacing: 0%;
text-align: center;
max-width: 536px;
}


}




@media (min-width: 1360px) {
  .big-section{
    max-width: 1375px;
  }

  .title,
  .description {
    max-width: 800px;
  }

  .description{
     max-width: 800px;
    margin-bottom:70px ;
    margin-top: 10px;
  }
}




</style>
