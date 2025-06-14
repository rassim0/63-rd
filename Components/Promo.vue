<template>
  <div class="logo-row">
    <!-- Left Fade -->
    <div class="side-fade left-fade"></div>

    <img src="/Logos.svg" alt="Partner Logos" />

    <!-- Right Fade -->
    <div class="side-fade right-fade"></div>
  </div>
</template>

<style scoped>
.logo-row {
    min-width: 365px;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;
  margin-bottom: -5px;
  margin-top: -30px;
  background-color: #080808;
  position: relative; /* needed for absolute overlay */
}

.logo-row img {
   zoom: 1.0;
  height: auto;
  object-fit: cover;
  position: relative;
}

/* Both side fades */
.side-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50%;
  pointer-events: none;
  z-index: 2;
}

.left-fade {
  left: 0;
  background: linear-gradient(to right, #080808 0%, rgba(8, 8, 8, 0) 100%);
}

.right-fade {
  right: 0;
  background: linear-gradient(to left, #080808 0%, rgba(8, 8, 8, 0) 100%);
}

@media (min-width: 501px) {
  .logo-row {
 
  height:170px;
}

}



@media (min-width: 1360px) {
  .logo-row {
 max-width: 1440px;
 margin: 0 auto;
}

.left-fade {
  display: none;
}

.right-fade {
  display: none;
}

}
</style>
