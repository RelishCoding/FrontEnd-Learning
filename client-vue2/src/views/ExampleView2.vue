<template>
    <div>
        <div><input type="text" value="lisi"></div>
        <!-- 属性绑定 -->
        <div><input type="text" v-bind:value="name"></div>
        <div><input type="date" v-bind:value="birthday"></div>
        <!-- v-bind的简化写法 -->
        <div><input type="text" :value="age"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'wangwu',
                birthday: '1995-05-01',
                age: 20
            }
        }
    }
</script>