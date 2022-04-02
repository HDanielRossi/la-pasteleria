<template>
  <div class="home">
    <section class="hero">
      <div class="hero-text container">
        <hr />
        <h2>
          La <br />
          Pastelería
        </h2>
        <hr />
      </div>
    </section>
    <section><content/></section>
  </div>
</template>

<script>
import content from "../components/Content.vue"

export default {
  name: "Home",
  components: {
    content,
  },
};
</script>

<style lang="scss" scoped>
.hero {
  background-image: url("../assets/back2.jpg");
  background-attachment: fixed;
  position: relative;
  height: 65vh;
  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
  .hero-text {
    height: 145%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: rgb(58, 58, 58);
    h4 {
      text-transform: uppercase;
      font-size: 20px;
      padding-bottom: 4px;
    }
    h2 {
      font-size: 60px;
      @media only screen and (min-width: 750px) {
        font-size: 80px;
      }
    }
    hr:nth-child(2) {
      max-width: 500px;
      margin-bottom: 16px;
    }
    hr:nth-child(4) {
      height: 6px;
      background-color: rgb(54, 54, 54);
      border: none;
      max-width: 85px;
      margin-top: 16px;
    }
  }
}
</style>