<template>
  <div class="mixture-container">
    <!-- First Div -->
    <div class="section section-1">
      <h1 class="main-title"><span class="uu">Pricing</span> & Plans</h1>
      <p class="description">
        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
      </p>
    </div>

    <!-- Second Div -->
    <div class="section section-2">
      <span class="pricing-option" :class="{ active: !isYearly }">Monthly</span>

      <div class="toggle-button">
        <label class="switch">
          <input type="checkbox" v-model="isYearly">
          <span class="slider"></span>
        </label>
      </div>

      <span class="pricing-option" :class="{ active: isYearly }">Yearly</span>
      <span class="save-tag"><span class="et">Save 25%</span></span>
    </div>

    <!-- Third Div with Grid Layout -->
    <div class="section section-3 grid-boxes" v-if="isMounted">
      <!-- Box 1 -->
      <div class="box box-1" style="grid-area: one;">
        <div class="box-header">
          <span class="icon"><img src="/box-1.svg"></span>
          <span class="box-title">Individual Plan</span>
        </div>
        <h2 class="price-title">
          {{ isYearly ? '$99.99' : '$9.99' }}
          <span class="month">/ {{ isYearly ? 'year' : 'month' }}</span>
        </h2>
        <ul class="features">
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Real-time collaboration</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> AI-powered organization</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Customizable templates</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> 5GB cloud storage</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Basic integrations</li>
        </ul>
        <button class="main-button">Contact support <img src="/box-1-btt.svg" /></button>
        <p class="footer-note">No credit card required</p>
      </div>

      <!-- Box 2 -->
      <div class="box box-two" style="grid-area: two;">
        <div class="box-header">
          <span class="icon"><img src="/box-2.svg"></span>
          <span class="box-title">Team Plan</span>
        </div>
        <h2 class="price-title">
          {{ isYearly ? '$199.99' : '$19.99' }}
          <span class="month">/ {{ isYearly ? 'year' : 'month' }}</span>
        </h2>
        <ul class="features">
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Everything in the Individual Plan</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Unlimited cloud storage</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Advanced integrations</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Team management and permissions</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Shared templates and note libraries</li>
        </ul>
        <button class="main-button">Start Free Trial <img src="/box-2-btt.svg" /></button>
        <p class="footer-note">No credit card required</p>
      </div>

      <!-- Box 3 -->
      <div class="box box-3" style="grid-area: three;">
        <div class="box-header">
          <span class="icon"><img src="/box-3.svg"></span>
          <span class="box-title">Enterprise Plan</span>
        </div>
        <h2 class="price-title">Custom</h2>
        <ul class="features">
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Everything in the Team Plan</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Dedicated account manager</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Enterprise-grade security</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Customized onboarding</li>
          <li><span class="feature-icon"><img src="/chek.svg" /></span> Advanced analytics</li>
        </ul>
        <button class="main-button">Contact support <img src="/box-1-btt.svg" /></button>
        <p class="footer-note"></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isYearly = ref(false)
const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>


<style scoped>






/*bottoooon */


/* From Uiverse.io by gharsh11032000 */ 
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 3.5em;
  height: 2em;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  inset: 0;
  background-color: #cccccc;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.slider:before {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  right: 0.3em;
  bottom: 0.3em;
  transform: translateX(150%);
  background-color: #55ac9d;
  border-radius: inherit;
  transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.slider:after {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  left: 0.3em;
  bottom: 0.3em;
  background: rgb(250, 250, 250);
  border-radius: inherit;
  transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1);
}

.switch input:focus + .slider {
  box-shadow: 0 0 1px #59d102;
}

.switch input:checked + .slider:before {
  transform: translateY(0);
}

.switch input:checked + .slider::after {
  transform: translateX(-150%);
}









.mixture-container {
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  max-width: 600px; /* Optional: Limits stretching too far */
  font-family: sans-serif;
  box-sizing: border-box;
  background-color: #080808;
  margin-top: -24px;
  padding-bottom: 50px;
}

.section {
  margin-bottom: 40px;
}

/* Section 1 */
.section-1 .main-title {
  margin-bottom: 10px;
  padding-top: 60px;
  text-align: center;
  font-family: 'DM Sans';
font-weight: 700;
font-size: 30px;
line-height: 130%;
letter-spacing: -1%;
text-align: center;
color:  #EFECE6;


}

.section-1 .description {
  color: #BABABA;
  font-family: 'DM Sans';
font-weight: 400;
font-size: 14px;
line-height: 150%;
letter-spacing: 0%;
text-align: center;
max-width: 325px;
margin:  0 auto;
margin-top: 20px;
}

.uu {
  background: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Section 2: Monthly/Yearly toggle */
.section-2 {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 38px;
}

.pricing-option {
  color : #BABABA;
  font-family: 'DM Sans';
font-weight: 400;
font-size: 14px;
line-height: 150%;
letter-spacing: 0%;
margin-left: -8px;
margin-right: -7px;
}

.pricing-option.active {
  color: #EFECE6;
}




.toggle-button {
  padding: 5px 15px;
  background-color: #080808;
  color: white;
  border: none;
  border-radius: 5px;
}

.save-tag {
  background: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
  padding: 3px 10px;
  font-size: 0.9em;
  font-weight: bold;
  margin-left: 15px;
padding-top:8px;
padding-right: 16px;
padding-bottom: 8px;
padding-left: 16px;
gap: 8px;
border-radius: 40px;

font-family: 'DM Sans';
font-weight: 400;
font-size: 14px;
  
line-height: 150%;
letter-spacing: 0%;
text-align: center;

max-height: 12px;

}

.et{
position: relative;
top: -5px;
}


/* Section 3: Pricing Boxes */
.section-3.grid-boxes {
  display: grid;
  gap: 40px;
  grid-template-areas:
    "one"
    "two"
    "three";
}

.box {
  border: 2px solid #048C80 ;
  background: #F7F7F7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

padding-top: 40px;
padding-right: 32px;
padding-bottom: 40px;
padding-left: 32px;
border-radius: 10px;
border-width: 2px;

}

/* Box Header: icon + title */
.box-header {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2em;
  font-weight: bold;
}

.box-title{
    font-family: 'DM Sans';
font-weight: 400;
font-size: 14px;

line-height: 150%;
letter-spacing: 0%;
color: #048C80;


}

.price-title {
  margin: 15px 0;
  font-family: 'DM Sans';
font-weight: 700;
font-size: 40px;
line-height: 120%;
letter-spacing: 0%;
}

.month {
    font-family: 'DM Sans';
font-weight: 400;
font-size: 16px;
line-height: 150%;
letter-spacing: 0%;
margin-left: -6px;

}

/* Features List */
.features {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  margin-top: 4px;
  margin-bottom: 10px;
}

.features li {
  display: flex;
  align-items: center;
  margin-bottom: 9px;
font-family: 'DM Sans';
font-weight: 400;
font-size: 15px;
line-height: 150%;
letter-spacing: 0%;
color: #333333;

}

.feature-icon {
  margin-right: 8px;
  width: 17px;
}




/* CTA Button */
.main-button {
  padding-top: 16px;
  padding-bottom: 16px;
  gap: 8px;
  border-radius: 8px;
  border-width: 1px;
  color: #080808;
  font-size: 1em;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
  margin-top: 10px;
  background: #EFECE6;
  border: 1px solid #048C80;
  font-family: 'DM Sans';
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;


  display: inline-flex;       /* Ensure horizontal layout */
  align-items: center;        /* Vertically center text and icon */
  justify-content: center;    /* Horizontally center all content */
}


/* Footer Note */
.footer-note {
  text-align: center;
  margin-top: 5px;
  margin-bottom: -4px;
  color: #737373;
  font-family: 'DM Sans';
font-weight: 400;
font-size: 13px;
line-height: 150%;
letter-spacing: 0%;

}

.box-two {
  background-color: #080808;
}


.box-two .price-title {
    color: #F7F7F7;
}


.box-two .month {
    color: #048C80;

}

.box-two .features li {
    color: #BABABA;
}

.box-two .main-button {
    background: linear-gradient(234.07deg, #AAD9D1 0%, #017373 125.68%);
    border: 1px solid #048C80
}










@media (min-width: 501px) {
  .mixture-container {
    max-width: 1360px;
    margin:  0 auto;
  }

  /* Section 1 Title */
  .section-1 .main-title {
    font-family: 'DM Sans';
    font-weight: 700;
    font-size: 48px;
    line-height: 120%;
    text-align: center;
    letter-spacing: 0%;
    margin: 0 auto;
  }

  /* Section 1 Description */
  .section-1 .description {
    font-family: 'DM Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0%;
    max-width: 400px;
    margin: 0 auto;
    margin-top: 10px;
  }

  /* Section 2 */
 .section-2 {
  max-width: 648px;
  height: 33px;
  padding-right: 10px;
  padding-left: 10px;
  gap: 14px;
  margin-left: auto;
  margin-right: auto;
}




  /* Optional: Fix grid layout if needed */
  .section-3.grid-boxes {
    grid-template-areas: 
    "one ""
    "two ""
    "three";
    gap: 40px;
  }

  .box {
   max-width: 400px;
   width: 100%;
   margin-left: auto;
   margin-right: auto;
}
}



@media (min-width: 1360px) {

     .mixture-container {
    max-width: 1440px;
    margin:  0 auto;
  }
  .section-3.grid-boxes {
     grid-template-areas: "one two three";
     gap: 0px;

  }

  .box {
    max-width: 300px;
    width: 100%;
  }


.box-two {
  margin-left: 50px;
  margin-right: -150px;
}

.box-3 {
  margin-left: 10px;
}

.box-1 {
  margin-right: -12px;
}


}









</style>