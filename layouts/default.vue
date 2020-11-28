<template>
  <div>
    <Header />
    <Main />
    <Nuxt />
  </div>
</template>


<script>
  import Header from '@/components/Header';
  import Main from '@/components/Main';
  export default {
    components: {
      Header,
      Main
    }
  }
</script>

<style>
@font-face {
  font-family: 'CodecPro';
  src: local('CodecPro Thin'), local('CodecPro-Thin'),
    url('~@/assets/fonts/codec-pro.regular-webfont.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'CodecPro';
  src: local('CodecPro Bold'), local('CodecPro-Bold'),
    url('~@/assets/fonts/CodecPro-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

html {
  font-family:
    'CodecPro';
    font-weight: 300;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #677B8F;
}

.container{
  max-width: 1312px;
  width: 100%;
  margin: 0 auto;
  padding: 0 64px;
}


</style>
