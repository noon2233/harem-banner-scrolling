<template>
  <a :href="link" class="ripple">
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
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #{$color} 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .3s, opacity .5s;
}

.ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    transition: 0s;
}

</style>
