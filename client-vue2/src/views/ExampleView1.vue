<template lang="">
    <div>
        <h1>我是新组件</h1>
        <!-- 文本插值 -->
        {{name}} {{age}}
        {{age + 10}}
        {{age > 60 ? '老年' : '青年'}}
    </div>
</template>

<script>
    const options = {
        data: function () {
            return { name: '张三', age: 18 }
        }
    }
    export default options
</script>