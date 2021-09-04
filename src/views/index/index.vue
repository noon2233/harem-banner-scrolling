<template>
  <div>
    <div id="wrapper">
      <Background />
      <Main :title="title" :description="description" :footer="footer" :links="links" />
    </div>
  </div>
</template>

<script>
import Background from '@c/Background'
import Main from '@c/Main'

export default {
  name: 'App',
  components: {
    Background, Main
  },
  // 统一管理数据
  data() {
    return {
      title: 'NASN 导航',
      description: '& 发卡',
      footer: {
        copyright: 'NASN 导航 & 发卡 © by ',
        text: 'nasn.me',
        link: 'https://nasn.me'
      },
      links: {
        wordpress: 'https://nasn.me',
        telegram: 'https://t.me/nasnme_admin',
        // csdn: 'https://blog.csdn.net/qq_21567385',
        // netease: 'https://music.163.com/m/user/home?id=291516471',
        // github: 'https://github.com/fz6m',
        // email: 'mailto:fz6meng@gmail.com'
      }
    }
  },
  created() {
    // eslint-disable-next-line no-undef
    WebFont.load({
      google: {
        families: ['Kosugi Maru']
      }
    })
  }
}
</script>

<style lang="scss" scoped>

/* warpper */

@keyframes wrapper {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

#wrapper {
    animation: wrapper 3s forwards;
    height: 100%;
    left: 0;
    opacity: 0;
    position: fixed;
    top: 0;
    width: 100%;
}
</style>
