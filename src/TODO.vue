<template>
  <div id="app">
    <h1>
      ToDo list by 蔡鎮陽
    </h1>
    <form>
      <input name="todo">
      <button>新增</button>
    </form>
    <h1>
      代辦事項
    </h1>

    <table cellspacing="4">
      <thead>
        <tr>
          <th>事項</th>
          <th>修改</th>
          <th>完成</th>
          <th>刪除</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>


  </div>
  <!-- <div id="app">
  <input type="text" v-model="message" />
  <div>${ message }</div>
</div> -->
</template>

<script>
// var vm = new Vue({
//   el: '#app',
//   delimiters: ['${', '}'],
//   data: {
//     toggle: 0,
//   },
// });
</script>




<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  color: #42b983;
}
div {
  margin: 0 auto;
}
table{
  margin-left:auto;
  margin-right:auto;
}
</style>
