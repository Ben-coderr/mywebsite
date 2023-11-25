<template>
  <div class="container">
    <div class="main-sec">
      <div class="skills">
        <img :src="python" alt="" />
        <img :src="css" alt="" />
        <img :src="html" alt="" />
        <img :src="js" alt="" />
        <img :src="sass" alt="" />
        <img :src="vue" alt="" />
        <img :src="tailwind" alt="" />
      </div>
      <div class="side-vector">
        <img :src="sideVector" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import html from "../assets/imgs/Programming_skills/html-5.svg";
import css from "../assets/imgs/Programming_skills/css-3.svg";
import js from "../assets/imgs/Programming_skills/Javascript.svg";
import vue from "../assets/imgs/Programming_skills/Vue-js.svg";
import sass from "../assets/imgs/Programming_skills/Sass.svg";
import tailwind from "../assets/imgs/Programming_skills/Tailwind.svg";
import python from "../assets/imgs/Programming_skills/python.svg";
import sideVector from "../assets/imgs/Programming_skills/side_vector_1svg.svg";
export default {
  data() {
    return {
      html: html,
      css: css,
      js: js,
      vue: vue,
      sass: sass,
      tailwind: tailwind,
      python: python,
      sideVector: sideVector,
    };
  },
};
</script>

<style scoped>
.main-sec {
  display: flex;
  flex-direction: column-reverse;
}
.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
  align-content: center;
  margin: 200px 0;
}
.side-vector img {
  position: absolute;
  right: 0;
}
.main-sec > img {
  width: 100px;
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .skills {
    width: 550px;
    margin: 100px 0;
    padding: 0 100px;
  }
  .side-vector img {
    width: 144px;
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .skills {
    margin: 100px 0;
    padding: 0 60px;
  }

  .side-vector img {
    width: 110px;
    display: none;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .skills {
    margin: 100px 0;
    padding: 0 75px;
  }

  .side-vector img {
    width: 110px;
    display: none;
  }
}
/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .skills {
    margin: 100px 0;
    padding: 0 75px;
  }

  .side-vector img {
    width: 110px;
    display: none;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .skills {
    width: 950px;
    margin: 100px 0;
    padding: 0 75px;
  }
  .side-vector img {
    width: 144px;
    display: block;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .skills {
    width: 1170px;
    padding: 0 100px;
  }
  .side-vector img {
    width: 189px;
    display: block;
  }
}
/* End Global Rules */
</style>
