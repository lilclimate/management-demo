<template>
  <el-upload
    class="upload-demo"
    action="https://jsonplaceholder.typicode.com/posts/"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    :before-upload="beforeUpload">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <div slot="tip" class="el-upload__tip">只能上传txt/pdf文件，且不超过5MB</div>
  </el-upload>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    beforeUpload(file) {
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        this.$message.error('上传文件大小不能超过 5MB!');
      }
      return isLt5M;
    },
  },
};
</script> 