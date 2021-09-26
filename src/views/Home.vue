<template>
  <article>
    <section-hero />

    <section-about />
  </article>
</template>

<script>
// sections
import SectionHero from './home/Hero'
import SectionAbout from './home/About'

export default {
  name: 'Home',

  components: {
    SectionHero,
    SectionAbout
  }
}
</script>
