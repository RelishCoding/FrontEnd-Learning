<template lang="html">
    <div>
        <!-- 事件绑定 -->
        <div><input type="button" value="点我执行m1" v-on:click="m1"></div>
        <!-- v-on的简化写法 -->
        <div><input type="button" value="点我执行m2" @click="m2"></div>
        <div>{{count}}</div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },

        methods: {
            m1() {
                console.log("m1")
                // alert("m1")
                this.count++
            },
            m2() {
                console.log("m2")
                // alert("m2")
                this.count--
            }
        }
    }
</script>