<template>
  <div id="app">
    <img src="http://localhost:8080/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>
    <v-client-table :data="tableData" :columns="columns" :options="options"></v-client-table>
  </div>
</template>

<script>
import { ClientTable, Event } from 'vue-tables-2'
import Vue from 'vue'

Vue.use(ClientTable, {}, false)

let messageJS = MessageJS.getInstance();
messageJS.register(onMessage, 'vue-widget');
messageJS.message("hello from widget, master!");

function onMessage(obj) {
  console.log(obj);
}

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      columns: ['id', 'name', 'age'],
      tableData: [
        { id: 1, name: "John", age: "20" },
        { id: 2, name: "Jane", age: "24" },
        { id: 3, name: "Susan", age: "16" },
        { id: 4, name: "Chris", age: "55" },
        { id: 5, name: "Dan", age: "40" }
      ],
      options: {
        // see the options API
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app h1,
#app h2 {
  font-weight: normal;
}

#app ul {
  list-style-type: none;
  padding: 0;
}

#app li {
  display: inline-block;
  margin: 0 10px;
}

#app a {
  color: #42b983;
}
</style>
