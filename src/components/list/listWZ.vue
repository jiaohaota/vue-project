<template>

	<div style="padding-bottom:3rem" >
    <div class="list-head text-black-light">
      <div class="left">定期 · 稳赚计划</div>
    </div>
    <div class="list-body">
<<<<<<< HEAD
        <div class="list-cell" v-for="item in productList" :class="item.hotWordsType!=0? 'mark-hot-sell' :'' " @click="select(item.projectId)">
=======
        <div class="list-cell" v-for="item in productList" :class="item.hotWordsType!=0? 'mark-hot-sell' :'' " @click="selectItem(item)">
>>>>>>> 8fa1a95cf0db349345726b562f5ce0844e72b571
          <div class="list-cell-tit text-h2">
            {{item.projectName}}                      <!--returnMoney/tags-->
            <span class="pop pop-circle pop-circle-red pop-min" v-show="item.returnMoney">{{item.returnMoney}}</span>
          </div>
          <div class="col col-8 list-cell-body">
            <div class="col-cell col-cell-3 text-indent-1em">
              <div class="text-red text-h1">{{item.preyearrate}}<span class="text-normal">%</span></div>
              <div class="text-gray text-normal-min padding-top-0_5rem">年化收益</div>
            </div>
            <div class="col-cell col-cell-2">
              <div class="text-h2 padding-top-0_5rem">{{item.days}}<span class="text-normal">天</span></div>
              <div class="text-gray text-normal-min padding-top-0_2_5rem line-height-1_5">项目周期</div>
            </div>
            <div class="col-cell col-cell-3">
              <div class="padding-right-1rem text-right list-set-val padding-top-0_5rem">{{item.residueMoney}}元</div>
              <div class="text-gray text-normal-min padding-top-0_5rem padding-right-1rem text-right">剩余可投</div>
            </div>
          </div>
        </div>


    </div>
    <copy-right></copy-right>
    <div class="loading-container" v-show="!productList.length">
      <loading></loading>
    </div>
  </div>
</template>

<script>

  import {getListData} from '../../api/listApi'
  import copyRight from 'components/comm/copyright'
  import Loading from 'components/loading/loading'
  export default{
    data(){

      return{
        productList:[],
      }
    },
    created(){
      setTimeout(()=>{
        getListData().then((res)=>{
          this.productList=res.data.data.listProject;
          //console.log(res);
        })
      },300)
    },
    methods:{
      select(id){
          this.$router.push(`/list/${id}`)// 动态路由跳转
      }
    },
      components:{
        copyRight,
        Loading
      }
  }
</script>

<style lang="less">
  .loading-container{
    width:100%;
    height:100%;
    position: fixed;
    left:0;
    top:0;
    z-index:998;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
