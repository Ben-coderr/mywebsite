<template>
  <div class="container">
    <div class="main-sec">
      <div class="card">
        <img :src="one" alt="" />
        <div class="buttons">
          <button>
            <a href="">code</a>
            <font-awesome-icon icon="fa-brands fa-github" class="icon1" />
          </button>
          <button>
            <a href="">live</a>
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="icon2"
            />
          </button>
        </div>
      </div>
      <div class="card">
        <img :src="two" alt="" />
        <div class="buttons">
          <button>
            <a href="">code</a>
            <font-awesome-icon icon="fa-brands fa-github" class="icon1" />
          </button>
          <button>
            <a href="">live</a>
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="icon2"
            />
          </button>
        </div>
      </div>
      <div class="card">
        <img :src="three" alt="" />
        <div class="buttons">
          <button>
            <a href="">code</a>
            <font-awesome-icon icon="fa-brands fa-github" class="icon1" />
          </button>
          <button>
            <a href="">live</a>
            <font-awesome-icon
              icon="fa-solid fa-arrow-up-right-from-square"
              class="icon2"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import one from "../assets/imgs/Latest_projects/one.jpg";
import two from "../assets/imgs/Latest_projects/two.jpg";
import three from "../assets/imgs/Latest_projects/three.jpg";
export default {
  data() {
    return {
      one: one,
      two: two,
      three: three,
    };
  },
};
</script>

<style scoped>
@media (min-width: 576px) and (max-width: 767.98px) {
  .container {
    width: 550px;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) and (max-width: 991.98px) {
  .container {
    width: 750px;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) and (max-width: 1199.98px) {
  .main-sec {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* // Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .main-sec {
    grid-template-columns: repeat(3, 1fr);
  }
}
.main-sec {
  display: grid;
  gap: 50px;
  align-items: center;
  justify-content: space-around;
  margin: 100px 0;
}
.card {
  background: var(--card-back-color);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
}
.card img {
  border-radius: 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
}
.buttons {
  display: grid;
  grid-template-columns: 45% 45%;
  justify-content: space-between;
  gap: 10%;
  align-items: center;
}
.buttons button {
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 15px;
  background-color: var(--main-back-color);
}
.buttons button .icon1 {
  color: var(--mine-color);
  font-size: 35px;
}
.buttons button .icon2 {
  color: var(--mine-color);
  font-size: 33px;
}
a {
  text-decoration: none;
  font-size: 25px;
  font-weight: 500;
  color: var(--mine-color);
}
</style>
