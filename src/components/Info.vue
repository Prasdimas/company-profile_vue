<script setup>
import mainPhoto from "../assets/images/hero.svg";
import { themeColor } from "../data/items";

const heroHeading = "Harga mulai dari Rp 299,000/bulan*";
const buttonSeeFeature = "See Features";
const buttonPricing = "Pricing";
</script>

<template>


  <div class="untree_co-hero bg-light" id="home-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12">
          <div class="dots"></div>
          <div class="row align-items-center">
            <div
              class="col-lg-7 ml-auto order-lg-2"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <img :src="mainPhoto" alt="Image" class="img-fluid" />
            </div>
            <div class="col-lg-5">
                <h1 class="display-3 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2">{{ heroHeading }}</h1>
              <div class="excerpt" data-aos="fade-up" data-aos-delay="100">
                <p>
                    * untuk biaya berlanggan premium
                </p>
              </div>
              <p data-aos="fade-up" data-aos-delay="200">
                <a
                  href="#features-section"
                  class="btn btn-primary smoothscroll"
                  style="margin-right: 5px"
                  :style="[
                    { background: themeColor },
                    { borderColor: themeColor },
                  ]"
                  >{{ buttonSeeFeature }}</a
                >
                <a
                  href="#pricing-section"
                  class="btn btn-outline-primary smoothscroll pricing"
                  :style="[{ color: themeColor }, { borderColor: themeColor }]"
                  >{{ buttonPricing }}</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing:hover {
  color: #fff !important;
}
</style>
