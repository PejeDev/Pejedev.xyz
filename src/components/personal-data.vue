<template>
  <div>
    <span>Hi, I'm</span>
    <h1>Juan Castañeda</h1>
    <h2><VueWriter :array="arr" :eraseSpeed="50" :typeSpeed="50" /></h2>
    <p>a.k.a <a href="https://twitter.com/PejeDev">PejeDev</a></p>
    <p class="glass-frame">
      I'm a Senior Software Developer based in Bogota, Colombia. <br />
      I'm currently working at
      <a href="https://www.9ncr.com/">9North</a> as a Senior Frontend Developer.
      <br />
      Also at my free time slaying some bugs and adding new features to
      <a href="https://m-35.co/">M-35</a> as Main Video Game Developer.
    </p>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";
import VueWriter from "vue-writer";

export default defineComponent({
	name: "PersonalData",
	components: {
		VueWriter,
	},
	data() {
    return {
      arr: [
        "Senior Software Developer",
        "Video Game Developer Enthusiast",
        "King Of The Meerkats",

    ]}
  }
});
</script>

<style scoped>
.glass-frame {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
  line-height: 24px;
}
</style>
