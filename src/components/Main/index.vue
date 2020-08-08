<template>
  <div id="main">

    <div id="header">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div id="nav">
        <ul>
          <li>
            <Button icon="telegram" :link="links.telegram" />
          </li>
          <li>
            <Button icon="csdn" :link="links.csdn" />
          </li>
          <li>
            <Button icon="netease" :link="links.netease" />
          </li>
          <li>
            <Button icon="github" :link="links.github" />
          </li>
          <li>
            <Button icon="email" :link="links.email" />
          </li>
        </ul>
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
  transform: translate3d(0, 0, 0);
  cursor: default;
  display: inline-block;
  opacity: 0;
  position: relative;
  text-align: center;
  top: -1em;
  vertical-align: middle;
  width: 90%;

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

    ul {
      list-style: none;
      padding-left: 0;
    }

    li {
        backface-visibility: hidden;
        transform: translate3d(0, 0, 0);
        display: inline-block;
        position: relative;
        top: 0;
        margin: 0 1em;
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

  a {
    text-decoration: none;
    color: #{$color-deep};

    &:active {
      color: $color;
    }
  }
}
</style>

