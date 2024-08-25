
    document.addEventListener("DOMContentLoaded", function () {
      // Geting the elements fom dom
      const offerItem1 = document.querySelector(".offer-item1");
      const offerItem2 = document.querySelector(".offer-item2");
      const offerItem3 = document.querySelector(".offer-item3");

      const offerItem1Open = document.querySelector(".offer-item1-open");
      const offerItem2Open = document.querySelector(".offer-item2-open");
      const offerItem3Open = document.querySelector(".offer-item3-open");

      const radioButtonOpen1 = document.querySelector(
        ".offer-item1-open .radio-container1-open input[type='radio']"
      );
      const radioButtonOpen2 = document.querySelector(
        ".offer-item2-open .radio-container2-open input[type='radio']"
      );
      const radioButtonOpen3 = document.querySelector(
        ".offer-item3-open .radio-container3-open input[type='radio']"
      );

      // Added mouseover event listener to offer-item3
      offerItem3.addEventListener("mouseover", function () {
        // Checking radio button in offer-item3-open
        radioButtonOpen3.checked = true;

        // Showing offer-item3-open and hide offer-item3
        offerItem3.style.display = "none";
        offerItem3Open.style.display = "block";
      });

      // Adding mouseout event listener to offer-item3-open
      offerItem3Open.addEventListener("mouseout", function () {
        // Hide offer-item3-open and show offer-item3
        offerItem3.style.display = "block";
        offerItem3Open.style.display = "none";
      });

      // Adding mouseover event listener to offer-item2
      offerItem2.addEventListener("mouseover", function () {
        // Checking the radio button in offer-item2-open
        radioButtonOpen2.checked = true;

        // Showing offer-item2-open and hide offer-item2
        offerItem2.style.display = "none";
        offerItem2Open.style.display = "block";

     
        const currentTop = window.getComputedStyle(offerItem3).top; 
        const newTop = parseInt(currentTop) + 94 + "px"; 
        offerItem3.style.top = newTop;
      });

      // Adding mouseout event listener to offer-item2-open
      offerItem2Open.addEventListener("mouseout", function () {
        // Hide offer-item2-open and show offer-item2
        offerItem2.style.display = "block";
        offerItem2Open.style.display = "none";

        // Reset the "top" property of offer-item3 
        offerItem3.style.top = ""; 
      });

      // Adding mouseover event listener to offer-item1
      offerItem1.addEventListener("mouseover", function () {
        // Check the radio button in offer-item1-open
        radioButtonOpen1.checked = true;

        // Showing offer-item1-open and hide offer-item1
        offerItem1.style.display = "none";
        offerItem1Open.style.display = "block";

       
        const currentTop3 = window.getComputedStyle(offerItem3).top; 
        const newTop3 = parseInt(currentTop3) + 94 + "px"; 
        offerItem3.style.top = newTop3;

        const currentTop2 = window.getComputedStyle(offerItem2).top; 
        const newTop2 = parseInt(currentTop2) + 94 + "px";
        offerItem2.style.top = newTop2;
      });

      // Adding mouseout event listener to offer-item1-open
      offerItem1Open.addEventListener("mouseout", function () {
        offerItem1.style.display = "block";
        offerItem1Open.style.display = "none";

        offerItem3.style.top = ""; 
        offerItem2.style.top = "";
      });
    });