<template>
  <div class="container">
    <div class="navMobile" v-if="showNav" @click="showNav = !showNav">
      <button>
        <font-awesome-icon
          icon="fa-solid fa-xmark"
          style="color: #eee; font-size: 35px"
        />
      </button>
      <ul>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
      </ul>
    </div>
    <div class="navbar">
      <div>
        <a href="#"><img :src="logo" alt="" /></a>
      </div>
      <ul v-if="!mobileView">
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Projects</a></li>
      </ul>
      <div class="third-div">
        <button class="contact">Contact</button>
        <button class="theme-change">
          <font-awesome-icon icon="fa-solid fa-moon" class="change-buttons" />
        </button>
        <button
          class="theme-change"
          v-if="mobileView"
          @click="showNav = !showNav"
        >
          <font-awesome-icon
            icon="fa-solid fa-bars-staggered"
            class="change-buttons"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import logoB from "../assets/imgs/logo-White.svg";
export default {
  data() {
    return {
      logo: logoB,
      mobileView: true,
      showNav: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 992;
    },
  },
  created() {
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },
};
</script>

<style scoped>
.navMobile {
  background-color: #ff9900;
  position: absolute;
  z-index: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navMobile ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
}
.navMobile button {
  position: absolute;
  top: 10px;
  right: 10px;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  height: 80px;
  display: block;
}
a {
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  color: var(--mine-color);
}
.navbar ul li {
  display: inline;
  padding: 0 20px 0 20px;
  position: relative;
}
.navbar ul li::after {
  content: "";
  position: absolute;
  height: 7px;
  width: 0%;
  background-color: var(--background-color);
  border-radius: 20px;
  bottom: -10px;
  left: 80%;
  transition: ease-out 0.3s all;
}
.navbar ul li:hover::after {
  width: 64%;
  left: 20%;
}
.third-div {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.contact {
  background-color: var(--main-back-color);
  padding: 10px 20px;
  font-weight: 600;
  color: var(--mine-color);
  font-size: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.249);
  border-radius: 15px;
  transition: all 0.5s;
}
.contact:hover {
  background-color: var(--sec-text-color);
  color: #fff;
}
.change-buttons {
  color: var(--mine-color);
  font-size: 35px;

  transition: all 0.5s;
}
.change-buttons:hover {
  color: var(--main-back-color);
}

.theme-change {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
