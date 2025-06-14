<template>
<section class="testimonial-section">
 
  <!-- Quote block -->
  <div class="quote-block">
    <img src="/hh.svg" alt="Quote Icon" class="quote-icon" />
    <p class="quote-text">
      The real-time synchronization and AI-powered organization have made our workflow more efficient than ever.
    </p>
    <div class="quote-meta">
    <p class="quote-author">Sarah Johnson</p>
    <p class="quote-book">TechSavvy Solutions</p>
    
 </div>
  </div>
</section>

</template>


<style scoped>
.testimonial-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding-left: 7px;
  padding-right: 50px;
 background-color: #080808;
min-width: 308px;
margin-top: -2px;
}




/* Quote Block */
.quote-block {
  position: relative;
  width: 100%;
  max-width: 372px;
  padding-left: 32px;
}

.quote-icon {
  position: absolute;
  top: -5px;
  left: 13px;
  width: 20px;
  height: 20px;
  zoom: 2;
    margin-top: 11px;
}

.quote-text {
  margin-top: 45px; /* spacing below icon */
  color: #EFECE6;
  font-family: 'DM Sans';
font-weight: 700;
font-size: 20px;
line-height: 150%;
letter-spacing: 0%;
text-align: center;

}

.quote-meta {
  display: flex;
  gap: 0px; /* space between name and book */
  align-items: center;
  flex-wrap: wrap; /* optional: wrap on small screens */
  margin-top: 16px; /* move shared margin here */
  margin-bottom:60px;
  margin-left: 30px;
}

.quote-author {
  margin: 0 auto;
  color: #EFECE6;
  font-family: "DM Sans";
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
}

.quote-book {
  margin: 0 auto;
  color: #737373;
  font-family: 'DM Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
   margin-left: -10px;

}



@media (min-width: 501px) {
  .quote-block {
    min-width: 500.5px;
    height: 169px;
    margin-bottom: 90px;
  }

  .quote-meta {
  margin-left: 85px;
}

.quote-text{
font-weight: 700;
font-size: 24px;
line-height: 140%;
letter-spacing: -1%;
text-align: center;




}

.quote-icon{
  margin-left:5px ;
}


.quote-author, .quote-book {
font-weight: 400;
font-size: 16px;
line-height: 150%;
letter-spacing: 0%;
margin-left: 30px;

}

.quote-author {
  margin-right: 10px;
}

.quote-book {
margin-left: 10px;
}

}

@media (min-width: 1360px) {
  .testimonial-section {
 max-width: 1383px;
 margin: 0 auto;
}
 
.quote-text{
  max-width: 750px;
}

.quote-author {
  margin-right: 10px;
}

.quote-book {
margin-left: 10px;
}


}


</style>