<template>
  <div>
    <h3 class="flex justify-space-between">
      <div>度量报表</div>
      <el-button @click="jumpToReportCreate" type="primary">新建报表</el-button>
    </h3>

    <el-table :data="tableData" style="margin-top: 20px">
      <el-table-column label="报表名称" prop="name">
        <template #default="scope">
          <el-button link type="primary" @click="jumpToReportDetail(scope.row.id)">{{ scope.row.name }}</el-button>
        </template>
      </el-table-column>
      <el-table-column label="更新时间" prop="updateTime"></el-table-column>
      <el-table-column label="创建人" prop="user"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button link type="primary" @click="jumpToReportEdit(scope.row.id)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'ReportMng',
    data() {
      return {
        tableData: [
          {
            id: 1,
            name: '报表1',
            updateTime: '2022-06-22 16:03',
            user: 'admin',
          },
        ],
      }
    },
    methods: {
      jumpToReportCreate() {
        this.$router.push('/report-mng/create')
      },
      jumpToReportEdit(id) {
        this.$router.push(`/report-mng/edit/${id}`)
      },
      jumpToReportDetail(id) {
        this.$router.push(`/report-mng/detail/${id}`)
      },
    },
  }
</script>

<style lang="scss" scoped></style>
