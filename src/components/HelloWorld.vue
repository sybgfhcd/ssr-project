<template>
  <div class="hello">
    <ul>
      <li v-for="(item, index) in textList" :key="index">
        <span>组件名称：{{item.title}}</span>
        <span>组件路由：{{item.path}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      textList: ''
    };
  },
  mounted() {
    // https://getman.cn/mock mock 接口使用
    let that = this;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://getman.cn/mock/test');
    xhr.send();
    xhr.onreadystatechange = function(){
      if ( xhr.readyState === 4 && xhr.status === 200 ) {
        // console.log(xhr.statusText)
      } else {
        that.textList = JSON.parse(xhr.responseText);
      }

    };
  },
}
</script>
