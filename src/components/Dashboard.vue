<template>
  <el-container class="dashboard-container">
    <el-header class="main-header">
      <div class="header-content">
        <span>Header</span>
        <div class="user-info">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </div>
      </div>
    </el-header>
    <el-container class="content-container">
      <el-aside width="200px" class="main-aside">
        <el-menu :default-openeds="['1', '3']" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="/users">
                <i class="el-icon-user"></i>
                <span slot="title">用户列表</span>
              </el-menu-item>
              <el-menu-item index="/upload-image">
                <i class="el-icon-picture"></i>
                <span slot="title">上传图片</span>
              </el-menu-item>
              <el-menu-item index="/upload-file">
                <i class="el-icon-document"></i>
                <span slot="title">上传文件</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container class="right-container">
        <el-main class="main-content">
          <router-view></router-view>
        </el-main>
        <el-header height="60px" class="main-footer">Footer</el-header>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/users',
    };
  },
};
</script>

<style scoped>
.dashboard-container {
  height: 100vh;
  width: 100%;
}

.main-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  padding: 0 20px;
}

.content-container {
  height: calc(100vh - 60px);
}

.main-aside {
  background-color: rgb(238, 241, 246);
  color: #333;
}

.right-container {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  background-color: #fff;
  padding: 20px;
}

.main-footer {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
  padding: 0 20px;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.user-info {
  font-size: 12px;
}
</style>