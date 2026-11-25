<template lang="html">
    <div>
        <input type="button" value="获取远程数据" @click="getRemoteData()">
    </div>
</template>

<script>
    import myaxios from '../util/myaxios'
    export default {
        methods: {
            async getRemoteData() {
                const resp = await myaxios.get('/api/students')
                console.log(resp)
            }
        }
    }
</script>