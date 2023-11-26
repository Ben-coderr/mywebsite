import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./styles/mainj.css";
import shadows from "vue3-box-shadows";
const app = createApp(App);
app.use(shadows);
app.mount("#app");

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faMoon,
  faUserSecret,
  faBarsStaggered,
  faXmark,
  faSun,
  faB,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
/* add icons to the library */
library.add(
  faUserSecret,
  faMoon,
  faBarsStaggered,
  faXmark,
  faSun,
  faB,
  faArrowUpRightFromSquare,
  faGithub
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
