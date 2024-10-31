<!-- src/components/HeroBlock.vue -->
<template>
  <section class="hero">
    <div class="container">
      <div class="hero__content">
        <h1>
          <slot name="title"></slot>
        </h1>
        <p class="hero__description p-2">{{ descriptions }}</p>
        <a href="#" class="btn btn_primary hero__btn">
          <span class="btn__text">Let’s Discuss Your Project</span>
          <span class="btn__icon btn__icon-arrow"></span>
        </a>
        <slot name="btn"></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>
