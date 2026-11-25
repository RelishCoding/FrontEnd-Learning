<!-- 重用组件 -->
<template lang="html">
    <div>
        <h1>父组件</h1>
        <my-button type="primary" size="small">1</my-button>
        <my-button type="danger" size="middle">2</my-button>
        <my-button type="success" size="large">3</my-button>
        <my-button type="primary" size="middle">4</my-button>
    </div>
</template>

<script>
    import MyButton from "../components/MyButton.vue"
    export default {
        components: {
            MyButton
        }
    }
</script>

<style scoped>
    div {
        background-color: gainsboro;
        width: 50%;
        height: 40px;
    }

    h1 {
        font-family: 华文行楷;
    }
</style>