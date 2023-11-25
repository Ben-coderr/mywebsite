<template>
  <div class="container">
    <div class="main-sec">
      <div class="sec-1">
        <img :src="section2" alt="" class="section2" />
        <img :src="instagrampf" alt="" class="instagrampf" />
      </div>
      <div class="sec-2">
        <img :src="minilogo" alt="" class="minilogo" />
        <div class="description">
          <h1>Benkorich AbdeNour</h1>
          <p>
            I am 18 years old web developer and content creator in the field of
            programming. I share my knowledge by publishing educational posts on
            instagram
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import section2 from "../assets/imgs/section-2.svg";
import instagrampf from "../assets/imgs/instagram-pf.svg";
import minilogo from "../assets/imgs/mini-logo.svg";

export default {
  data() {
    return {
      section2: section2,
      instagrampf: instagrampf,
      minilogo: minilogo,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 576px) {
  .main-sec {
    display: grid;
    grid-template-rows: 50% 50%;
    margin-top: 100px;
    height: 900px;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .main-sec {
    display: grid;
    grid-template-rows: 50% 50%;
    margin-top: 100px;
    height: 900px;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .main-sec {
    display: grid;
    grid-template-rows: 50% 50%;
    margin-top: 100px;
    height: 900px;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .main-sec {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 100px;
    height: 900px;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .main-sec {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 100px;
    height: 900px;
  }
}
.main-sec {
  display: grid;

  margin-top: 100px;
}

.sec-2 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}
.sec-2 .minilogo {
  width: 140px;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.description p {
  font-size: 25px;
  font-weight: 500;
  width: 350px;
  text-align: justify;
}
.sec-1 .instagrampf {
  position: absolute;
  left: 200px;
}
.sec-1 .section2 {
  position: absolute;
  left: 0;
}
</style>
