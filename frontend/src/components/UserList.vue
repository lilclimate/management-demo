<template>
  <div>
    <el-table
      :data="paginatedTableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        this.pageSize = val;
        this.currentPage = 1; // Reset to first page when page size changes
      },
      handleCurrentChange(val) {
        this.currentPage = val;
      },
      async fetchUsers() {
        try {
          const response = await axios.get('http://localhost:3000/api/users');
          this.tableData = response.data;
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      }
    },

    data() {
      return {
        tableData: [],
        currentPage: 1,
        pageSize: 10
      }
    },

    computed: {
      paginatedTableData() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.tableData.slice(start, end);
      }
    },

    created() {
      this.fetchUsers();
    }
  }
</script>