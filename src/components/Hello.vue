<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <input v-model="msg" @keyup.enter.stop.prevent="addTodo"/>
        <ul>
            <li v-for="todo in todos"><span class="">{{$index+1}}.{{todo}}</span>
                <button @click="removeTodo($index)">delete</button>
            </li>
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
        <input type="button" value="按钮" :class="{'btn':btn,'warning':warning}">
        <input type="button" value="按钮" :class="classObj">
        <template v-if="Math.random()>0.5">
            <h1>Title</h1>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
        </template>
        <template v-else>
            <h1>none</h1>
            <p>Paragraph 1</p>
        </template>
        <ul>
            <li v-for="(key,value) in nameGroup">{{key}}:{{value}}</li>
        </ul>
        <ul>
            <li v-for="name in nameGroup">{{$key}}:{{name}}</li>
        </ul>
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
                todos: ["打开冰箱门", "放进冰箱", "关闭冰箱门"],
                greeting: true,
                newMessage: null,
                url: "/",
                firstName: "Ray",
                lastName: "Zone",
                warning:true,
                btn:true,
                ok:false
            }
        },
        created(){
            console.log(this);
        },
        methods: {
            reverseMessage(){
                this.msg = this.msg.split("").reverse().join("");
            },
            addTodo(){
                const msg = this.msg.trim();
                if (msg) {
                    this.todos.push(msg);
                    this.msg = "";
                    this.newMessage = msg;
                }
            },
            removeTodo(index){
                this.todos.splice(index, 1);
            },
            create(){
                console.log(this);
            }
        },
        computed: {
            computedMessage() {
                return this.msg + " form computed"
            },
            getFullName() {
                return this.firstName + " " + this.lastName;
            },
            fullName: {
                get(){
                    return this.getFullName;
                },
                set(fullName){
                    var names = fullName.split(" ");
                    this.firstName = names[0] ? names[0] : "";
                    this.lastName = names[names.length - 1] ? names[names.length - 1] : "";
                }
            },
            classObj(){
                return {
                    'btn':this.btn,
                    'warning':!this.warning
                }
            },
            nameGroup(){
                return {
                    firstName:this.firstName,
                    lastName:this.lastName,
                    fullName:this.fullName
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
    h1 {
        color: #42b983;
    }
    .btn {
        width: 100px;
        height: 40px;
        border: 1px solid red;
        background: #fff;
    }
    .warning {
         background: red;
         border-color: blue;
     }
</style>
