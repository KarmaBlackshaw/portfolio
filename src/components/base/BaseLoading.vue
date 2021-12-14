<template>
  <div
    class="loading"
    :style="style"
  ></div>
</template>

<script>
export default {
  name: 'BaseLoading',

  props: {
    backgroundColor: {
      type: String,
      default: '#fff'
    },

    foregroundColor: {
      type: String,
      default: '#000'
    },

    size: {
      type: [Number, String],
      default: '80'
    },

    border: {
      type: [Number, String],
      default: '5'
    }
  },

  computed: {
    style () {
      const border = this.border
      const bgColor = this.backgroundColor
      const fgColor = this.foregroundColor
      const size = this.size

      return {
        border: `${border}px solid ${bgColor}`,
        'border-top': `${border}px solid ${fgColor}`,
        width: `${size}px!important`,
        height: `${size}px!important`
      }
    }
  }
}
</script>

<style lang="scss" scoped>

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading {
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
</style>
