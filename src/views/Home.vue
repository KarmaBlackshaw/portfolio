<template>
  <article>
    <section-hero />

    <section-stack />
  </article>
</template>

<script>
// sections
import SectionHero from './home/Hero'
import SectionStack from './home/Stack'
export default {
  name: 'Home',

  components: {
    SectionHero,
    SectionStack
  }
}
</script>
