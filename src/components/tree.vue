<template>
  <li>
    <div>
      {{model.name}}
    </div>
    <ul>
      <tree
        v-for="model in model.children"
        :model="model">
      </tree>
    </ul>
  </li>
</template>
<script type="text/babel">
  export default{
    name:"tree",
    data(){
      return {}
    },
    props: {
      model: Object
    }
  }
</script>
<style type="text/css">
  body {
    background-color: #f0ad4e;
  }
</style>
