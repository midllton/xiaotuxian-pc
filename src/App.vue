<template>
  <div>{{$store.state.username}}</div>
  <div>{{$store.getters.newName}}</div>
  <button @click="mutations">更改数据</button>
  <button @click="actions">异步更改数据</button>
  <div>{{$store.state.moduleA.name}}</div>
  <div>{{$store.state.moduleB.name}}</div> <!-- state区分模块 -->
  <div>{{$store.getters.updateName}}</div> <!-- 不带命名空间的调用方法 -->
  <div>{{$store.getters['moduleB/updateName']}}</div> <!-- 注意带命名空间的调用方法 -->
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup () {
    const store = useStore() // 注意引入usestore
    const mutations = () => {
      store.commit('updateName') // 配合vuex里的mutations（commit）
    }
    const actions = () => {
      store.dispatch('updateAsync') // 配合vuex里的actions（dispatch）
    }
    return { mutations, actions }
  }
}
</script>

<style lang="less" scoped>

</style>
