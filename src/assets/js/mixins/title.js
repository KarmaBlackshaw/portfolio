function getTitle (vm) {
  const title = vm.$options.title

  if (title) {
    return typeof title === 'function'
      ? title.call(vm)
      : title
  }
}

export default {
  created () {
    const title = getTitle(this)

    if (title) {
      document.title = `${process.env.VUE_APP_TITLE} | ${title || 'Portfolio'}`
    }
  }
}
