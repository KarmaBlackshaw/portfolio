<template>
  <article>
    <section-hero />

    <section-about />

    <section-stack />
  </article>
</template>

<script>
// sections
import SectionHero from './home/Hero'
import SectionAbout from './home/About'
import SectionStack from './home/Stack'

export default {
  name: 'Home',

  components: {
    SectionHero,
    SectionAbout,
    SectionStack
  }
}
</script>
