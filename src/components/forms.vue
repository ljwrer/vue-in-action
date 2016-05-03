<template>
    <div>
        <div>message:{{message}}</div>
        <input type="text" v-model="message">
        <div><input type="checkbox" v-model="checked">{{checked}}</div>
        <div>
            <label for="good">good:</label> <input type="checkbox" id="good" value="good" v-model="checkedName">
            <label for="better">better:</label><input type="checkbox" id="better" value="better" v-model="checkedName">
            <label for="best">best:</label><input type="checkbox" id="best" value="best" v-model="checkedName">
            <p>{{checkedName | json}}</p>
        </div>
        <div>
            <input type="radio" id="one" value="One" v-model="picked">
            <label for="one">One</label>
            <br>
            <input type="radio" id="two" value="Two" v-model="picked">
            <label for="two">Two</label>
            <br>
            <span>Picked: {{ picked }}</span>
        </div>
        <div>
            <select v-model="selectButton">
                <option selected>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <p>{{selectButton}}</p>
        </div>
        <div>
            <select v-model="selectButton2" multiple>
                <option selected>A</option>
                <option>B</option>
                <option>C</option>
            </select>
            <p>{{selectButton2 | json}}</p>
        </div>
        <div>
            <select v-model="selected">
                <option v-for="option in options" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
            <span>Selected: {{ selected }}</span>
        </div>
        <div><input type="checkbox" :true-value="trueVal" :false-value="falseVal" v-model="toggle"><span>{{toggle}}</span></div>
        <div>
            <input type="radio" :value="trueVal" v-model="radioButton" name="status">
            <input type="radio" :value="falseVal" v-model="radioButton" name="status">
            <span>{{radioButton}}</span>
        </div>
        <select v-model="selectedVal">
            <option :value="{ number: 123 }">123</option>
        </select>
        <br>
        <input v-model="msg" lazy>
        <p>{{msg}}</p>
        <input v-model="age" number>
        <input v-model="msg" debounce="2000">
    </div>
</template>
<style scoped>
    *{
        background-color:deepskyblue;
    }
</style>
<script>
    export default{
        data(){
            return{
                message:"",
                checked:true,
                checkedName:[],
                picked:"",
                selectButton:"",
                selectButton2:[],
                selected: 'A',
                options: [
                    { text: 'One', value: 'A' },
                    { text: 'Two', value: 'B' },
                    { text: 'Three', value: 'C' }
                ],
                toggle:"haha",
                trueVal:"haha",
                falseVal:"hehe",
                radioButton:"haha",
                selectedVal:"",
                msg:""
            }
        },
        computed:{

        },
        ready(){
            console.log(this.constructor)
        }
    }
</script>
