<template>
  <div class="conatiner">
    <div class="main-sec">
      <div class="skills">
        <img :src="ps" alt="" />
        <img :src="ai" alt="" />
        <img class="ffigma" :src="figma" alt="" />
        <img :src="pr" alt="" />
      </div>
      <div class="side-vector">
        <img :src="sideVector" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import ps from "../assets/imgs/Graphic_design_skills/ps.svg";
import ai from "../assets/imgs/Graphic_design_skills/ai.svg";
import figma from "../assets/imgs/Graphic_design_skills/figma.svg";
import pr from "../assets/imgs/Graphic_design_skills/pr.svg";
import sideVector from "../assets/imgs/Graphic_design_skills/sideVector.svg";
export default {
  data() {
    return {
      ps: ps,
      ai: ai,
      figma: figma,
      pr: pr,
      sideVector: sideVector,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 576px) {
  .side-vector {
    display: none;
  }
  .side-vector img {
    width: 110px;
  }
  .skills .ffigma {
    width: 117px;
  }
  .skills {
    margin: 60px;
    gap: 45px;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .side-vector {
    display: none;
  }
  .side-vector img {
    width: 110px;
  }
  .skills {
    margin: 100px 80px;
    gap: 45px;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .side-vector img {
    width: 110px;
    display: none;
  }
  .skills {
    margin: 100px 80px;
    gap: 60px;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .side-vector img {
    width: 144px;
    display: block;
  }
  .skills {
    margin: 100px;
    gap: 80px;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .side-vector img {
    width: 189px;
    display: block;
  }
  .skills {
    margin: 200px;
    gap: 100px;
  }
}
.main-sec {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}
.skills {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  justify-content: center;
  align-content: center;
}
.side-vector {
  width: 20px;
}
.side-vector img {
  position: absolute;
  left: 0;
  filter: var(--background-color-svg);
}
.skills img {
  width: 100px;
}
.skills .ffigma {
  width: 117px;
}
</style>
