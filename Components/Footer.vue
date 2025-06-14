<template>


<footer class="footer">
  <div class="footer-container">
 <div class="footer-start">
    <!-- 1. Logo -->
    <div class="footer-logo">
      <img src="/Logo.svg" alt="Logo" />
    </div>

    <!-- 2. Email Subscription -->
    <div class="email-input-wrapper">
  <input type="email" placeholder="email@smartnote.io" class="subscribe-input" />
  <img src="/box-1-btt.svg" alt="Submit Icon" class="input-icon" />
</div>
</div>
    <!-- 3. Footer Sections -->
    <div class="footer-links">
      <div class="footer-column">
        <h4>Product</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Integrations</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Company</h4>
        <ul>
         <li><a href="#">Our Story</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Resources</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Webinars</a></li>
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Templates</a></li>
          <li><a href="#">Help Center</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h4>Legal</h4>
        <ul>
         <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Cookie Policy</a></li>
          <li><a href="#">Acceptable Use</a></li>
          <li><a href="#">Refund Policy</a></li>
        </ul>
      </div>
    </div>


  </div>
</footer>

  <!-- 4. Social and Copyright -->
    <div class="footer-bottom">
      
      <div class="social-icons">
        <a href="#"><img src="/FF.svg" alt="Facebook" /></a>
        <a href="#"><img src="/IN.svg" alt="Twitter" /></a>
        <a href="#"><img src="/TWW.svg" alt="LinkedIn" /></a>
        <a href="#"><img src="/YYT.svg" alt="YouTube" /></a>
      </div>
    

        <p class="footer-copy">@2024 SmartNotesI. All Rights Reserved. <span class="under">@iamhervewabo</span> </p>
    
    </div>



</template>


<style scoped>



.footer {
  border-top: 0.5px solid #048C80   ;
  background-color: #080808;
  color: #EFECE6;
  padding: 40px 20px;
  font-family: 'DM Sans', sans-serif;
}

.footer-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  margin-top:25px ;
}

.footer-logo img {
  zoom: 1.4;
    margin-bottom: -3px;
}


.email-input-wrapper {
  position: relative;
  width: 100%;
  max-width: 290px;
   margin-bottom: -20px;

}

.subscribe-input {
  width: 100%;
  padding: 16px 0px 14px 16px; /* extra right padding for icon */
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #101010;
  color: #333333;

  font-family: 'DM Sans', sans-serif;
  border: 1px solid #048C80;
  background: #EFECE6;
font-weight: 400;
font-size: 14px;
line-height: 150%;
letter-spacing: 0%;
}

.input-icon {
  position: absolute;
  right: -2px;
  top: 18%;
  width: 20px;
  height: 20px;
  pointer-events: none;
  max-width: 32px;
  max-height: 32px;
  zoom: 1.6;
}

/* New style for the logo + input combo */
.footer-start {
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-bottom: -20px;
}




.footer-links {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  margin-right: -20px;
}

.footer-column h4 {
  margin-bottom: 5px;
  font-size: 16px;
  font-family: 'DM Sans';
font-weight: 700;
line-height: 150%;
letter-spacing: 0%;

}

.footer-column ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-column li {
  margin-bottom: 8px;
  font-family: 'DM Sans';
font-weight: 400;
font-size: 16px;
line-height: 150%;
letter-spacing: 0%;
color:#BABABA;


}

.footer-column a {
  color: #BABABA;
  text-decoration: none;
  font-size: 14px;
}

.footer-column a:hover {
  color: #fff;
}



.footer-bottom {
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 16px;
  background: #048C80;
  width: 100%;
  margin: 0;
  padding: 18px 0; /* vertical padding only */
  
}

.social-icons {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  width: 100%;
  margin-left: 25px;
}

.social-icons a {
  display: inline-block;
}

.social-icons a img {
  max-width: 37px;
  max-height: 37px;
  margin: 0; /* Ensure no spacing around image */
  zoom: 1.2;
}

.footer-copy {
  font-size: 14px;
  color: #080808;
  text-align: left;
  font-family: 'DM Sans';
font-weight: 400;
font-size: 14px;
line-height: 150%;
letter-spacing: 0%;
max-width: 335px;
margin-top:0px ;
margin-bottom: 0px;
margin-left: 25px;
}

.under {
    text-decoration: underline;
}

/* ------------------------ */
/* Desktop View ≥ 768px and 1100px */
/* ------------------------ */
@media (min-width: 768px) {
  .footer-subscribe {
    flex-direction: row;
    align-items: center;
  }

  .subscribe-input {
    flex: 1;
  }

  .subscribe-button {
    margin-left: 12px;
  }

  .footer-links {
    grid-template-columns: repeat(4, 1fr);
  }

  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

  }

  .footer-copy {
    order: 1; /* Put copy on the left */
    text-align: left;
    max-width: 400px;
    width: 100%;
    margin-left: 6%;
    
  }

  .social-icons {
    order: 2; /* Put icons/links on the right */
    justify-content: flex-end;
    margin-right: 6%;
  }

  .footer-container {
    margin-left: 25px;
  }
}




@media (min-width: 1360px) {
    .footer {
        max-width: 1400px;
        margin: 0 auto;
    }

    .footer-bottom{
        max-width: 1440px;
        margin: 0 auto;
    }
  .footer-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 60px;
    flex-wrap: nowrap;
    margin: 0 auto;
  }


  .footer-links {
    display: flex;
    flex-direction: row;
    margin-right: 0;
    flex-grow: 1;
    justify-content: space-between;
    margin-left: 100px;
    margin-right: 40px;
  }

  .footer-column {
    min-width: 90px;
  }


  .footer-start {
    margin-left: 30px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 65px;
    align-items: flex-start;
    width: 290px; /* constrain this container */
  }

  .email-input-wrapper {
    width: 100%;
    max-width: 290px;
  }


}








</style>