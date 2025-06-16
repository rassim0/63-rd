<template>
  <div class="layout-wrapper">
     <div class="layout-content">
    <!-- Navbar -->
    <nav class="navbar">
      <div class="navbar-inner">
    <!-- Logo -->
    <div class="logo">
      <img src="/Logo.svg" alt="Logo" />
    </div>

    <!-- Desktop nav links -->
    <div class="nav-links">
      <span>Features</span>
      <span>Pricing</span>
      <span>Support</span>
    </div>

    <!-- Desktop Button -->
    <button class="button-1">
      <img  src="/navbarBTT.svg" alt="Open Menu" />
    </button>
<ClientOnly>
    <!-- Mobile Burger -->
    <button class="burger-button" @click="isMenuOpen = !isMenuOpen">
  <img
    :src="isMenuOpen ? '/Xbb.svg' : '/Hamburger.svg'"
    :alt="isMenuOpen ? 'Close Menu' : 'Open Menu'"
  />
  </button>
  </ClientOnly>
</div>
<ClientOnly>
    <!-- Overlay Menu -->
    <div class="menu-overlay" :class="{ 'show': isMenuOpen }">


        <img src="/Burger-li.png" alt="Decorative BG" class="burger-decoration" />


      <!-- Main Links -->
      <div class="menu-links">
        <span>Features</span>
        <span class="colors">Pricing</span>
        <span>FAQs</span>
        <span>Support</span>
      </div>
       
      <!-- Bottom Icons -->
      <div class="bottom-icons">
        <img src="/FF.svg" alt="icon1" />
        <img src="/IN.svg" alt="icon2" />
        <img src="/TWW.svg" alt="icon3" />
        <img src="/YYT.svg" alt="icon4" />
      </div>
    
    </div>
</ClientOnly>
    </nav>
<div class="container">
    <!-- Hero Section -->
    <section class="hero">
      <h1 class="hero-title"> <span class="col">Intelligent </span>  cloud-based <span class="col">note-taking</span> and collaboration tool</h1>
      <p class="hero-description">
       Experience the power of smart note-taking and transform the way you work today.
      </p>

      <div class="email-form">
        <input type="email" placeholder="Enter your email "  class="email-input" />
        <img src="/Emailup.svg " class="submit-button" />
      </div>


       <div class="hero-right">
    <img src="/HeroIMG.png" alt="Hero" class="hero-image" />
  </div>
    </section>
  </div>
  </div>
</div>


</template>

<script setup>


import { ref } from 'vue'
const isMenuOpen = ref(false)



</script>

<style scoped>

.colors {
   background: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}


.burger-decoration {
  position: absolute;
  top: -290px;
  left: 40px;
  right: 0;
  width: 100%;
  max-height: 887px ;
  z-index: 0; /* behind the links */
  pointer-events: none; /* so clicks pass through */
}



.layout-wrapper{
  min-width: 325px;
}


.button-1 , .nav-links ,.hero-right{
    display: none;
}




/* Full-width navbar */
.navbar {
  min-width: 365px;
  width: 100%;
  background: #080808;
  border-bottom: 0.5px solid #048C80;
  box-sizing: border-box;
  padding: 24px 20px;

}


/* Inner container to control layout */
.navbar-inner {
  min-width: 325px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}



/* Container for rest of the content */
.container {
  min-width: 325px;
  font-family: 'DM Sans', sans-serif;
  margin: 0;
  background: #080808;
  padding-top: 64px;
  padding-right: 20px;
  padding-bottom: 64px;
  padding-left: 20px;
}

/* Logo */
.logo img {
  height: 28px;
}

/* Burger button */
.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 32px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
 z-index: 999;
}

.burger span {
  height: 3px;
  background-color: #000;
  border-radius: 2px;
}

/* Hero Section */
.hero {
  text-align: left;
}

.hero-title {
  font-family: 'DM Sans', sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  color: #EFECE6;
  letter-spacing: -1%;
  margin-top: -2px;
  max-width: 355px;
}

.col {
  background: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-description {
  font-family: 'DM Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 54px;
  margin-top: -10px;
  letter-spacing: 0%;
  color: #BABABA;
  max-width: 335px;
}

/* Email input with button inside */
.email-form {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
}

.email-input {
  width: 100%;
  padding: 18px 120px 19px 16px;
  font-size: 16px;
  font-family: 'DM Sans', sans-serif;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #048C80
}

.submit-button {
  position: absolute;
  right: -10px;
  top: 6px;
  bottom: 4px;
  padding: 0 16px;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}


.burger-button {
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}

.menu-overlay {
  position: fixed;
  top: 85px; 
  left: 0;
  width: 100%;
  height: calc(100% - 72px); /* full height minus navbar */
  background: white;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px 20px;
  box-sizing: border-box;
  background-color: #080808;

}
/* Show class when active */
.menu-overlay.show {
  opacity: 1;
  visibility: visible;
}

/* Close (X) button */
.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
}

/* Top nav links */
.menu-links {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  gap: 24px;
  font-size:20px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 10px;
  font-family: 'DM Sans';
line-height: 150%;
letter-spacing: 0%;
}

.menu-links span {
    border-bottom: 0.5px solid #ccc;
    width: 50%;
    margin-bottom: -5px;
    padding-bottom: 20px;
}

.menu-links span:nth-child(4) {
    border-bottom: none;
}

/* Bottom icons */
.bottom-icons {
  display: flex;
  width: 40px;
  height: 40px;
  gap: 16px;
  align-items: center;
  position: fixed;
  top: 450px;
  left: 30px;
}






@media (min-width: 501px) {
  .hero-title {
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 59px;
    line-height: 106%;
    letter-spacing: -1%;
    min-width: 460px;
    max-width: 800px;
    margin-bottom: 30px;
  }

  .hero-description {
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
    min-width: 400px;
    color: #BABABA;

  }

  .email-input {
    width: 434px;
    height: 60px;
    gap: 8px; /* Note: gap doesn't apply to inputs, it's for flex/grid containers */
    padding: 28px;
    margin-top: -10px;
  }


  .container {
  padding-top: 74px;
  padding-right: -10px;
  padding-left: 45px;
}

.submit-button {
    right: -8px;
    top: -13px;
}

.email-form{
    max-width: 435px; 
    display: inline;
}
  



}

@media (min-width: 1360px) {

  .layout-wrapper{
    max-width: 1440px;
    margin: 0 auto;
    margin-bottom: -450px;
  }
.hero-title {
    max-width: 700px;
    padding-top: 60px;
    padding-left: 80px;
  }

.hero-description {
    max-width: 690px;
    padding-left: 80px;

  }

 
.burger-button ,.menu-overlay {
    display: none;
  }

.email-form{
   padding-left: 80px;
   margin-top: 50px;
   z-index: 2;
}


.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 20px;

}

.logo {
  margin-right: 24px; /* spacing between logo and links */
  margin-left: 70px;
  display: flex;
  align-items: center;

}

.navbar-content {
  display: flex;
  align-items: center;
  gap: 12px; /* gap between nav-links and button-1 */
  flex-grow: 1;
  justify-content: space-between;
}

.nav-links {
  display: flex;
  gap: 65px;
  align-items: center;
  font-family: 'DM Sans';
font-weight: 400;
font-size: 16px;
line-height: 150%;
letter-spacing: 0%;
color: #EFECE6;


}

 .button-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    margin-right: 70px;
  }

.hero-right {
  display: flex;
  justify-content: flex-end;
  position: relative;
  right: 150px;
  top: -420px;
  z-index: 0;
}



}


</style>