import React from "react";
const Services = () => {
  return (
    <div>
      <div class="row">
        {/* Titles - 1st Row */}
        <h2 class="col">Envelopes</h2>
        <h2 class="col">Post Cards</h2>
        <h2 class="col">Business Cards</h2>
      </div>

      <div class="row">
        {/* Images - 1st Row */}
        <div class="col">
          <img src="/Assets/WashU_Icons-pdf.jpeg" alt="" class="img-fluid" />
        </div>
        <div class="col">
          <img
            src="/Assets/WashU_Icons_Page_2-1024x731.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col">
          <img
            src="/Assets/WashU_Icons_Page_3-1024x731.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>

      <div class="row">
        {/* Titles - 2nd Row */}
        <h2 class="col">Note Pads</h2>
        <h2 class="col">Digital Copies</h2>
        <h2 class="col">Letterheads</h2>
      </div>
      <div class="row">
        {/* Images - 2nd Row */}
        <div class="col">
          <img
            src="Assets/WashU_Icons_Page_5-1024x731.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col">
          <img
            src="/Assets/Icon-Setups_JL7-3-1024x737.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col">
          <img
            src="/Assets/WashU_Icons_Page_4-1024x731.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
      <div class="row">
        {/* Titles - 3rd Row */}
        <h2 class="col">Large Format</h2>
        <h2 class="col">Yard Signs</h2>
        <h2 class="col">Booklets</h2>
      </div>
      <div class="row">
        {/* Images - 3rd Row */}
        <div class="col">
          <img
            src="/Assets/New_Icon-Setups_JL_Page_4.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col">
          <img
            src="/Assets/Icon-Setups_JL4-3-1024x737.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
        <div class="col">
          <img
            src="/Assets/Icon-Setups_JL6-3-1024x737.jpeg"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};
export default Services;
