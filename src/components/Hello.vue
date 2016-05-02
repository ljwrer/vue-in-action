<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="msg" @keyup.enter="addTodo"/>
    <ul>
      <li v-for="todo in todos"><span class="">{{$index+1}}.{{todo}}</span><button @click="removeTodo($index)">delete</button></li>
    </ul>
    <button @click="reverseMessage">revese message</button>
    <p v-if="greeting">greeting !</p>
    <p>{{todos.length}}</p>
    <p>origin:{{*todos.length}}</p>
    <p>{{newMessage?"new:"+newMessage:"" | capitalize}}</p>
    <a :href="url">index</a>
    <p>{{computedMessage}}</p>
    <input v-model="firstName">
    <input v-model="lastName">
    <p>{{getFullName}}</p>
    <p>{{fullName}}</p>
    <input v-model="fullName">
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      todos:["打开冰箱门","放进冰箱","关闭冰箱门"],
      greeting:true,
      newMessage:null,
      url:"/",
      firstName:"Ray",
      lastName:"Zone"
    }
  },
  created(){
    console.log(this);
  },
  methods:{
    reverseMessage(){
      this.msg=this.msg.split("").reverse().join("");
    },
    addTodo(){
      const msg=this.msg.trim();
      if(msg){
        this.todos.push(msg);
        this.msg="";
        this.newMessage=msg;
      }
    },
    removeTodo(index){
      this.todos.splice(index,1);
    },
    create(){
      console.log(this);
    }
  },
  computed:{
    computedMessage() {
      return this.msg+" form computed"
    },
    getFullName() {
      return this.firstName+" "+this.lastName;
    },
    fullName:{
      get(){
        return this.getFullName;
      },
      set(fullName){
        var names=fullName.split(" ");
        this.firstName=names[0]?names[0]:"";
        this.lastName=names[names.length-1]?names[names.length-1]:"";
      }
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
