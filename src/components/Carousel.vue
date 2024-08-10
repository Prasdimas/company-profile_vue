<script setup>
import mainPhoto from "../assets/images/hero.svg";
import { themeColor } from "../data/items";

const heroHeading = "Promote Your Products by Colorlib";
const buttonSeeFeature = "Jadwalkan Demo";
const buttonPricing = "Whatsapp Kami Sekarang!";
</script>

<template>
<v-carousel :show-arrows="false" cycle height="600">
  <v-carousel-item
    v-for="(item, i) in items"
    :key="i"
    :src="item.src"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
       justify="center"
       cover
  >
  <div class="untree_co-hero" id="home-section">
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
            </div>
            <div class="col-lg-5">
              <h1 class="display-3 sm:text-h5 md:text-h4 lg:text-h3 xl:text-h2 text-white">{{ heroHeading }}</h1>
              <div class="excerpt" data-aos="fade-up" data-aos-delay="100">
                <p class="subtitle-1 sm:text-subtitle-2 md:text-subtitle-1 lg:text-h6 xl:text-caption text-white">
                  Another cool free html css template by
                  <span
                    style="
                      background-color: rgba(64, 123, 255, 0.07);
                      color: #407bff;
                    "
                    >Colorlib</span
                  >
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast
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
                  class="btn btn-outline-primary smoothscroll pricing mt-2"
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
  </v-carousel-item>
</v-carousel>

  <div class="slider">
    <div class="slide-track">
      <div class="slide" v-for="(image, index) in images" :key="index">
        <img :src="image.src" height="100" width="250" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing:hover {
  color: #fff !important;
}

.slider {
  background: white;
  /* box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125); */
  height: 80px;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 1200px;
}

.slider::before,
.slider::after {
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}

.slide {
  height: 100px;
  width: 250px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
</style>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        images: [
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png' },
        { src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png' },
      ],
      }
    },
  }
</script>