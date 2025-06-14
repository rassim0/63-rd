<template>
  <div class="info-grid-container">
    <!-- First Div: Title + Subtitle -->
    <div class="info-section">
      <h2 class="info-title">Discover the Power of <span class="tit">SmartNotes</span> </h2>
      <p class="info-text">
       SmartNotes is packed with innovative features designed to revolutionize the way you take notes, collaborate with others, and stay organized.
      </p>
    </div>

    <!-- Second Div: Grid Layout -->
    <div class="grid-section">


      <img src="/Grid-sh.png" alt="Grid Shadow" class="grid-background-decoration" />
  <div class="grid-box area-1">
    <div class="box-content">
      <img src="/G1.svg" alt="Icon 1" class="box-icon" />
      <h3 class="box-title">Cross-Platform Accessibility</h3>
      <p class="box-desc">Whether you're on your desktop, tablet, or smartphone, SmartNotes is accessible across all devices. Work seamlessly on the go and never miss a beat.</p>
    </div>
  </div>

  <div class="grid-box area-2">
    <div class="box-content">
      <img src="/G2.svg" alt="Icon 2" class="box-icon" />
      <h3 class="box-title">Customizable Templates</h3>
      <p class="box-desc">Create custom templates for your recurring tasks or projects to save time and ensure consistency. Tailor SmartNotes to fit your unique workflow and preferences.</p>
    </div>
  </div>

  <div class="grid-box area-3">
    <div class="box-content">
      <img src="/G3.svg" alt="Icon 3" class="box-icon" />
      <h3 class="box-title">Secure Cloud Storage</h3>
      <p class="box-desc">Rest easy knowing that your notes are securely stored in the cloud. Access your information from any device, anytime, without worrying about losing important data.</p>
    </div>
  </div>

  <div class="grid-box area-4">
    <div class="box-content">
      <img src="/G4.svg" alt="Icon 4" class="box-icon" />
      <h3 class="box-title">Real-Time Collaboration</h3>
      <p class="box-desc">Collaborate seamlessly with your team members or classmates in real-time on shared notes and projects.</p>
    </div>
  </div>

  <div class="grid-box area-5">
    <div class="box-content">
      <img src="/G5.svg" alt="Icon 5" class="box-icon" />
      <h3 class="box-title">AI-Powered Organization</h3>
      <p class="box-desc">Our AI-powered organization feature categorizes and prioritizes your notes, making it easy to find what you need when you need it.</p>
    </div>
  </div>

  <div class="grid-box area-6">
    <div class="box-content">
      <img src="/G6.svg" alt="Icon 6" class="box-icon" />
      <h3 class="box-title">Integrations</h3>
      <p class="box-desc">Connect SmartNotes with your favorite productivity tools like Google Drive, Trello, and Slack. Streamline your workflow by syncing data across platforms and enhancing collaboration.c</p>
    </div>
  </div>
</div>

  </div>
</template>

<style scoped>
/* Main Container */
.info-grid-container {
    background-color:#080808 ;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 32px 16px;
  margin-top: -2px;
  min-width: 333px;
}

/* Title + Text Block */
.info-section {
  text-align: center;
  margin-bottom: 40px;
  max-width: 330px;
}

.info-title {
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 30px;
  line-height: 130%;
  letter-spacing: -1%;
  margin: 0;
  vertical-align: middle;
  color: #EFECE6;
 margin-top: 15px;
}


.tit {
  background: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.info-text {
  margin-top: 12px;
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: #BABABA;
}

/* Grid Section */
.grid-section {
  margin-bottom: 80px;
  display: grid;
  grid-template-areas:
    "area-1"
    "area-2"
    "area-3"
    "area-4"
    "area-5"
    "area-6";
  gap: 24px;
   position: relative;
}


.grid-background-decoration {
  position: absolute;
  top: 260px;
  left: 250px;
  height: auto;
  z-index: 0;
  opacity: 0.2;
  pointer-events: none;

  filter: blur(40px) drop-shadow(0 0 60px #0ee8d4); /* Blur + glow */
  transform: scale(1.2); /* Optional: makes the blurred shape larger */
}


/* Individual Boxes */
.grid-box {
  min-width: 270px;
  min-height: fit-content;
  padding: 24px;
  margin-left:10px ;
  margin-right: 10px;
  border-radius: 12px;
  border: 0.5px solid #048C80;
  box-shadow: 0px 1px 2px 0px #23272E14;
  font-family: "DM Sans", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align children to the left */
  text-align: left;
  margin-top: 40px; /* Add spacing from the top of the box */
}

.box-icon {
  width: 32px;
  height: 32px;
  margin-bottom: 18px;
  margin-top: -40px; 
}

.box-title {
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #EFECE6;
  margin: 0 0 8px 0;
}

.box-desc {
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #BABABA;
  margin: 0;
  max-width: 310px;
letter-spacing: 0%;
vertical-align: middle;

}

/* Grid Area Names */
.area-1 { grid-area: area-1; }
.area-2 { grid-area: area-2; }
.area-3 { grid-area: area-3; }
.area-4 { grid-area: area-4; }
.area-5 { grid-area: area-5; }
.area-6 { grid-area: area-6; }





@media (min-width: 501px) {


.info-section {
  display: flex;
  flex-direction: column;
  justify-content: center;  /* vertically centers content */
  align-items: center;      /* horizontally centers content */
  text-align: center;
   margin-bottom: 40px;
  max-width:  648px;
  padding: 32px 16px;
}

  /* Info Section Typography */
  .info-title {
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
  }

  .info-text {
    font-family: "DM Sans", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    max-width: 410px;

  }
}

@media (min-width: 630px) {
  .grid-section { 
    margin-right: 20px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "area-1 area-2"
      "area-3 area-3"
      "area-4 area-5"
      "area-6 area-6";
    gap: 24px;
  }

  .grid-box {
    width: 100%;
    min-height: 270px;
    padding: 32px 24px;
    border-radius: 12px;
    border: 0.5px solid #048C80;
    box-sizing: border-box;
  }

  /* Left-align content in box 3 and 6 */
  .area-3,
  .area-6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  /* Make description take full box width */
  .area-3 .box-desc,
  .area-6 .box-desc {
    max-width: 530px;

  }
  .area-5 .box-content{
    margin-top: 34px;
  }

  .area-2 .box-icon{
      margin-top: -20px;

  }

   .area-1 .box-icon{
      margin-top: -30px;

  }
  .box-content {
    margin-top: 15px;
  }

.box-icon {
  margin-bottom: 30px;
}

.box-title {
   margin-bottom: 15px;
font-weight: 700;
font-size: 18px;
line-height: 150%;
letter-spacing: 0%;
vertical-align: middle;

}

.box-desc {
 font-family: 'DM Sans';
font-weight: 400;
font-size: 16px;
line-height: 150%;
letter-spacing: 0%;
vertical-align: middle;

}
  
}

@media (min-width: 1360px) {

  .info-grid-container{
    max-width: 1408px;
    margin: 0 auto;
  }
  .info-section {
    max-width: 888px;
    height: 34px;
    margin: 0 auto;
    margin-top: 90px;
  }


  .grid-section {
    margin-top: 120px;
    margin-right: 20px;
    margin-bottom: 70px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "area-1 area-1 area-2 area-2"
      "area-3 area-4 area-5 area-6"
      "area-3 area-4 area-5 area-6";
    gap: 24px;
  }

  .area-1 { grid-area: area-1; }
  .area-2 { grid-area: area-2; }
  .area-3 { grid-area: area-3; }
  .area-4 { grid-area: area-4; }
  .area-5 { grid-area: area-5; }
  .area-6 { grid-area: area-6; }

  .grid-box {
    width: 100%;
    min-height: 270px;
    padding: 32px 24px;
    border-radius: 12px;
    border: 0.5px solid #048C80;
    box-sizing: border-box;
  }


.box-title {
font-weight: 700;
font-size: 20px;
line-height: 150%;
letter-spacing: 0%;
vertical-align: middle;
}

.box-desc {
max-width: 200px;
font-weight: 400;
font-size: 17px;
line-height: 150%;
letter-spacing: 0%;
vertical-align: middle;
}




  .area-1,
  .area-2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  /* Make description take full box width */
  .area-1 .box-desc,
  .area-2 .box-desc {
    max-width: 530px;

  }


.area-3 ,.area-4 ,.area-5,.area-6{
  min-height: 400px;

}
 
.area-3 .box-content,
.area-4 .box-content,
.area-5 .box-content,
.area-6 .box-content {
  margin-top: 50px;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
}

.area-4 .box-content,
.area-5 .box-content{
  margin-top: 104px;
}


.grid-background-decoration {
  top: 260px;
  left: 550px;
 
}


}



</style>
