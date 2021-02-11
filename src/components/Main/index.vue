<template>
  <div id="main">

    <div id="header">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div id="nav">
        <Button class="u-pink" icon="wordpress" :link="links.wordpress" />
        <Button icon="telegram" :link="links.telegram" />
        <Button icon="csdn" :link="links.csdn" />
        <Button icon="netease" :link="links.netease" />
        <Button icon="github" :link="links.github" />
        <Button icon="email" :link="links.email" />
      </div>
    </div>

    <footer id="footer">
      <p>{{ footer.copyright }}<a target="_blank" :href="footer.link">{{ footer.text }}</a></p>
    </footer>

  </div>
</template>

<script>
import Button from '@c/Button'
export default {
  components: { Button },
  props: {
    title: {
      type: String,
      required: true,
      default: '大标题'
    },
    description: {
      type: String,
      required: true,
      default: '说明'
    },
    footer: {
      type: Object,
      required: true
    },
    links: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./adaption.scss";

#main {
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  text-align: center;
  width: 100%;

  &::before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0px;
  }
}

// 头部

#header {

  @keyframes header {
    0% {
        transform: translate3d(0, 1em, 0);
        opacity: 0;
    }

    100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
  }

  animation: header 1s .5s forwards;
  backface-visibility: hidden;
  cursor: default;
  display: inline-block;
  opacity: 0;
  position: relative;
  text-align: center;
  top: -1.4em;
  vertical-align: middle;
  user-select: none;

  h1 {
    font-size: 3.8em;
    font-weight: 900;
    letter-spacing: 0em;
  }

  p {
    font-size: 1.25em;
    margin: 0.75em 0 1em 0;
    opacity: 0.75;
    letter-spacing: 0.2em;
  }

  #nav {

    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      margin: 0 20px;
    }

  }
}

// 底部

#footer {
  display: inline-block;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #{$color-3} 75%);
  bottom: 0;
  cursor: default;
  height: 5em;
  left: 0;
  line-height: 4em;
  position: absolute;
  text-align: center;
  width: 100%;
  letter-spacing: 0.2em;
  font-family: sans-serif;
  font-weight: initial;
  font-size: 0.8em;
  user-select: none;

  a {
    text-decoration: none;
    color: #{$color-deep};

    &:active {
      color: $color;
    }
  }

}
</style>

<style>

.u-pink {
  color: #ee9ca7;
}

</style>
