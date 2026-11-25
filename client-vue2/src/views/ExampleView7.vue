<!-- 条件渲染与列表渲染 -->
<template lang="html">
    <div>
        <!-- <input type="button" value="获取远程数据" @click="getRemoteData()"> -->

        <div class="title">学生列表</div>
        <div class="thead" id="h">
            <div class="row bold">
                <div class="col">编号</div>
                <div class="col">姓名</div>
                <div class="col">性别</div>
                <div class="col">年龄</div>
            </div>
        </div>

        <div class="tbody">
            <!-- 条件渲染 -->
            <!-- <div class="row" v-if="students.length > 0">显示学生数据</div> -->

            <div v-if="students.length > 0">
                <!-- 列表渲染 -->
                <div class="row" v-for="s in students" :key="s.id">
                    <div class="col">{{s.id}}</div>
                    <div class="col">{{s.name}}</div>
                    <div class="col">{{s.sex}}</div>
                    <div class="col">{{s.age}}</div>
                </div>
            </div>

            <div class="row" v-else>暂无学生数据</div>
        </div>
    </div>
</template>

<script>
    import myaxios from '../util/myaxios'

    export default {
        // mounted: function() {
        mounted() {
            this.getRemoteData()
        },

        data() {
            return {
                students: []
            }
        },

        methods: {
            async getRemoteData() {
                const resp = await myaxios.get("/api/students")
                console.log(resp.data.data)
                this.students = resp.data.data
            }
        }
    }
</script>

<style scoped>
    div {
        font-family: 华文行楷;
        font-size: 20px;
    }

    .title {
        margin-bottom: 10px;
        font-size: 30px;
        color: #333;
        text-align: center;
    }

    .row {
        background-color: #fff;
        display: flex;
        justify-content: center;
    }

    .col {
        border: 1px solid #f0f0f0;
        width: 15%;
        height: 35px;
        text-align: center;
        line-height: 35px;
    }

    .bold .col {
        background-color: #f1f1f1;
    }
</style>