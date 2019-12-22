<template>
 <el-carousel height="860px" :interval="5000" arrow="always">
    <el-carousel-item v-for="item in list" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      list: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577590977&di=208a1be507cc791886daf8fc9b6fe82f&imgtype=jpg&er=1&src=http%3A%2F%2Fattachments.gfan.com%2Fforum%2Fattachments2%2F201405%2F22%2F174020udp8dn1cnaccc6nl.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576996397495&di=eda36c1013806a1a929cd86297b5a3c0&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1208%2F31%2Fc0%2F13464501_1346396790389.jpg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1577591303&di=67d8951e0cb90af07d5c05db9f1e0ba2&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1212%2F13%2Fc1%2F16576710_1355390980035.jpg ']
    }
  }
}
</script>

<style>

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
