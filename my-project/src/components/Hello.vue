<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getData"> 点击get请求</button>
    <button @click="postData"> 点击post请求</button>

    <ul>
      <li v-for="(item,index) in items" :key="index">
      {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      msg: "Welcome xxxxxxxxxxx",
      items: []
    };
  },
  methods: {
    getData() {
      this.$axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: { page: 1, limit: 5 }
        })
        .then(
          data => {
            this.items = data.data.data;
            console.log(data);
          },
          error => {
            console.log(error);
          }
        );
    },
    postData() {
      this.$axios
        .post(
          "https://cnodejs.org/api/v1/topics",
          this.$qs.stringify({ page: 1, limit: 5 })
        )
        .then(
          res => {},
          error => {
            //接口不支持，报错
          }
        );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
