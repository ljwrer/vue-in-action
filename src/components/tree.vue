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
  import tree from './tree'
  export default{
    data(){
      return {}
    },
    props: {
      model: Object
    },
    components: {
      tree
    }
    //TODO tree变为fragment
  }
</script>
<style type="text/css">
  body {
    background-color: #f0ad4e;
  }
</style>
