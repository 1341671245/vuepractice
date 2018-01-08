<template>
  <div id="secondcomponent">
    <h1>I am another page</h1>
    <ul>
      <li v-for="article in articles">{{article.title}}</li>
    </ul>
    <a> written by {{ author }} </a>
    <p> 感谢 <a href="https://github.com/showonne">showonne</a>大神的技术指导</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        author: "微信公众号 jinkey-love",
        articles: [],
      }
    },
   /* methods:{},*/
    mounted: function() {

    }
  }
</script>

<style>
</style>
