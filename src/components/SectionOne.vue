<template>
  <div class="container">
    <div class="section">
      <div class="text">
        <h1>
          Hi ,I am Abdenour,<br />
          Front-end developer .
        </h1>
        <p>
          i can create and design <br />
          web pages as you order
        </p>
      </div>
      <div class="section-img">
        <img :src="person" alt="" class="person" />
        <img :src="circle" alt="" class="circle" />
        <img :src="sec1" alt="" class="sec1" />
        <img src="" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import section from "../assets/imgs/section-1.svg";
import sec1 from "../assets/imgs/sec1.svg";
import person from "../assets/imgs/person.svg";
import circle from "../assets/imgs/circle.svg";
export default {
  data() {
    return {
      section: section,
      person: person,
      sec1: sec1,
      circle: circle,
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 576px) {
  .section {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    height: 550px;
    margin: 50px 0;
  }
  .section-img .sec1 {
    display: none;
  }
  .section-img .person {
    position: static;
    width: 350px;
    margin-left: 75px;
  }
  .text {
    text-align: center;
  }
}
@media (min-width: 576px) and (max-width: 767.98px) {
  .section {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    height: 550px;
    margin: 50px 0;
  }
  .section-img .sec1 {
    display: none;
  }
  .section-img .person {
    position: static;
    width: 350px;
    margin-left: 75px;
  }
  .text {
    text-align: center;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .section {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    height: 550px;
    margin: 50px 0;
  }
  .section-img .sec1 {
    display: none;
  }
  .section-img .person {
    position: relative;
    width: 350px;
    margin-left: 75px;
  }

  .text {
    text-align: center;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .section-img .sec1 {
    height: 665px;
  }
  .section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 600px;
  }
  .section-img .person {
    /* display: block; */
    position: absolute;
    right: 30px;
    width: 400px;
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 600px;
  }
  .section-img .person {
    /* display: block; */
    position: absolute;
    right: 30px;
    width: 400px;
  }
  .section-img .sec1 {
    height: 750px;
  }
}

.text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--mine-color);
}
.text h1 {
  font-size: 38px;
  font-weight: bold;
}
.text p {
  font-size: 20px;
  margin: 0;
}

.section-img {
  display: flex;
  align-items: center;
  gap: 50px;
}
.circle {
  position: absolute;
  z-index: -1;
  width: 333px;
  margin-left: 47px;
  color: var(--background-color);
}
.section-img .sec1 {
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
}
</style>
