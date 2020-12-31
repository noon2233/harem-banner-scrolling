<template>
  <a ref="el" :href="link" class="ripple" :style="cssVar" @click.prevent="push">
    <svg-icon :icon-class="icon" />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: 'javascript:void(0);'
    },
    icon: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      clickX: '20px',
      clickY: '20px'
    }
  },
  computed: {
    cssVar() {
      return {
        '--click-x': this.clickX,
        '--click-y': this.clickY
      }
    }
  },
  methods: {
    push(e) {
      // set click position
      const { left, top } = this.$refs.el.getBoundingClientRect()
      this.clickX = `${e.clientX - left}px`
      this.clickY = `${e.clientY - top}px`

      // go
      setTimeout(() => {
        this.link !== 'javascript:void(0);' ? window.open(this.link) : null
      }, 800)
    }
  }
}
</script>

<style lang="scss" scoped>

a {
    height: 40px;
    width: 40px;
    border: 0;
    align-items: center;
    justify-content: center;
    display: flex;
    border-radius: 50%;
    background: rgba(255, 250, 250, .92);
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2);
}

.ripple {
    position: relative;
    overflow: hidden;
}

.ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: var(--click-y, 0);
    left: var(--click-x, 0);
    pointer-events: none;
    background-image: radial-gradient(circle, #{$color-deep} 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: translate(-50%, -50%) scale(10);
    opacity: 0;
    transition: transform .3s, opacity .5s;
}

.ripple:active:after {
    transform: translate(-50%, -50%) scale(0);
    opacity: .3;
    transition: 0s;
}

</style>
