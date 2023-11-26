<template>
  <navbar />
  <sectionOne />
  <Title>About</Title>
  <sectionTwo />
  <Title>programming skills</Title>
  <sectionThree />
  <Title>Graphic Design skills</Title>
  <sectionFour />
  <Title>Latest Projects</Title>
  <sectionFive />
  <Title>Contact Us</Title>
</template>

<script>
import navbar from "./components/NavBar";
import sectionOne from "./components/SectionOne";
import Title from "./components/Title";
import sectionTwo from "./components/SectionTwo";
import sectionThree from "./components/SectionThree";
import sectionFour from "./components/SectionFour";
import sectionFive from "./components/SectionFive";

export default {
  name: "App",
  components: {
    navbar,
    sectionOne,
    Title,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive,
  },
};
</script>

<style lang="scss"></style>
