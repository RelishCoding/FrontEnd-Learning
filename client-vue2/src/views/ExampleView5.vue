<!-- 计算属性 -->
<template lang="html">
    <div>
        <h2>{{lastName}} {{firstName}}</h2>
        <h2>{{lastName + firstName}}</h2>
        <h2>{{fullName()}}</h2>
        <h2>{{fullName()}}</h2>
        <h2>{{fullName()}}</h2>

        <h2>{{fullName2}}</h2>
        <h2>{{fullName2}}</h2>
        <h2>{{fullName2}}</h2>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                firstName: 'san',
                lastName: 'zhang'
            }
        },

        methods: {
            fullName() {
                console.log('method')
                return this.lastName + this.firstName
            }
        },

        computed: {
            fullName2() {
                console.log('computed')
                return this.lastName + this.firstName
            }
        }
    }
</script>