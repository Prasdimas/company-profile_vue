<script setup>
import { themeColor, siteName } from "../data/items";
</script>
<template>
  <nav class="site-nav  js-site-navbar mb-5 site-navbar-target">
    <div class="container">
      <div class="site-navigation">
        <!-- <a href="" class="logo m-0 float-left"
          >{{ siteName }}<span class="text-primary">.</span></a
        > -->
        <div class="logo m-0 float-left">
          <img src="../assets/img/logo.png" height="50" width="50"  />
        </div>
        <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-left">
          <li class="active">
            <a href="/" class="nav-link">Beranda</a>
          </li>
          <li class="has-children active">
            <a href="#" class="nav-link">Layanan</a>
            <ul class="dropdown">
              <li>
                <p class="nav-link text-caption text-center"
                  >Point Of Sales</p>
                  <v-divider class="border-opacity-75" color="info"></v-divider>
              </li>
              <li class="active"><a href="/retail">Retail</a></li>
            </ul>
          </li>
          <li class="active"><a href="/price" >Harga</a></li>
          <li class="active"><a href="/contact" >Hubungi Kami</a></li>
          <li class="active"><a href="/blog" >Blog</a></li>
          <li class="active"><a href="/about-us"  >Tentang</a></li>
        </ul>
        <ul
          class="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right"
        >
        <li class="cta-button-outline active" style="margin-right: 5px;"><a href="#">Sign in</a></li>
          <li class="cta-primary">
            <a href="#" :style="[{ backgroundColor: themeColor }]">Register</a>
          </li>
        </ul>
        <a
          href="#"
          class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
          data-toggle="collapse"
          data-target="#main-navbar"
        >
          <span></span>
        </a>
      </div>
    </div>
    <v-divider></v-divider>
  </nav>
</template>
