<template>
  <div class="container">
    <div class="main-sec">
      <div class="card">
        <img :src="one" alt="" />
        <div class="buttons">
          <button>
            <a href="">code</a>
            <font-awesome-icon
              icon="fa-brands fa-github"
              style="font-size: 20px"
            />
          </button>
          <button>
            <a href="">live</a>
          </button>
        </div>
      </div>
      <div class="card">
        <img :src="two" alt="" />
        <div class="buttons">
          <button><a href=""></a></button>
          <button><a href=""></a></button>
        </div>
      </div>
      <div class="card">
        <img :src="three" alt="" />
        <div class="buttons">
          <button><a href=""></a></button>
          <button><a href=""></a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import one from "../assets/imgs/Latest_projects/one.jpg";
import two from "../assets/imgs/Latest_projects/two.png";
import three from "../assets/imgs/Latest_projects/three.png";
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
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttons button {
  border-radius: 25px;
  display: flex;

  padding: 20px;
  background-color: #fff;
}
</style>
