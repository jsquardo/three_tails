<template name="hero">
  <div>
    <section class="hero" />
    <div class="container has-text-centered">
      <h1 class="title mt-2">About Three Tails</h1>
      <p class="about_text">Hey y'all! I'm Hannah, I am 23 years old. I am a full time veterinary technician and run a
        pet sitting business on the side. Ever since I was little,
        I've had a passion for animals. I started pet-sitting a sweet Golden Retriever back in 2013 as my first "job",
        and that was just the start of something much bigger! Three tails was coined in 2018 when I had gotten so much
        word-of-mouth business that I devided to make it official and
        give my business a name. Fast forward to 2020 and I am a licensed pet sitter who offers a wide
        variety of services to ensure your precious
        four legged friend is happy and healthy!
      </p>
    </div>
    <div class="lower_text container has-text-centered">
      <div class="left_about_text">
        <h1 class="title mt-2">Drop in visits</h1>
        <p class="about_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam dolores quae
          laudantium voluptas harum fuga illo tenetur et illum earum corrupti eaque molestiae id pariatur,
          possimus excepturi unde? tenetur et illum earum corrupti eaque molestiae id Nesciunt?
        </p>
      </div>
      <div class="right_about_text">
        <h1 class="title mt-2">In Home Boarding</h1>
        <p class="about_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quisquam dolores quae
          laudantium voluptas harum fuga illo tenetur et illum earum corrupti eaque molestiae id pariatur,
          possimus excepturi unde? tenetur et illum earum corrupti eaque molestiae id Nesciunt?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss">
.hero {
  /* background-image: url("../assets/header.jpg");
  background-size: cover;
  background-position: center; */
  background: url("../assets/header.jpg");
  background-position: center;
    background-repeat: no-repeat;
    /* background-attachment: fixed; */
    -o-background-size: cover;
    -moz-background-size: cover;
    -webkit-background-size: cover;
  height: 85vh;
}

.mt-2 {
  margin-top: 4rem;
  margin-bottom: 1.25rem !important;
  font-weight: 600;
}

.about_text {
  padding-left: 2rem;
  padding-right: 2rem;
}

.lower_text {
  display: flex;
}

.left_about_text {
  width: 50%;
}

.right_about_text {
  width: 50%;
}
</style>