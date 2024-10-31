<script>
export default {
  name: "app",
  props: {
    description: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <div id="app">
    <HeroBlock
      description="Welcome to a place where creativity meets innovation. Our expert team is dedicated to crafting compelling websites, enhancing your brand, and creating impactful solutions to elevate your business."
    >
      <template #title>
        <h1 class="hero__title">
          Transforming <span class="text-color">Ideas</span> into Reality
        </h1>
      </template>
    </HeroBlock>
  </div>
</template>

<script>
export default {
  components: {
    HeroBlock,
  },
};
</script>

<style scoped></style>
