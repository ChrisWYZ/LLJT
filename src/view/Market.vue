<template>
    <div id="NewsInformation">
        <div class="container">
            <div class="container text-center">
                <h3>市场行情</h3>
                <p style="color:#b2b2b2">Market</p>
            </div>
        </div>
        <!-- 搜索框 -->
        <div class="search">
          <form>
            <input type="text" placeholder="请输入您想搜索的内容">
            <button type="submit"></button>
          </form>
        </div>
        <!-- 表格 -->
        <el-button style="margin: 0 720px 50px 400px" @click="clearFilter">清除所有筛选</el-button>
        <el-date-picker
      v-model="value1"
      @change="getPriceList"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
        <el-table
      ref="filterTable"
      stripe
      :data="priceList"
      :header-cell-class-name="getRowClass"
      style="width: 1080px; margin: 0 auto">
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="product"
        label="商品"
        width="180"
        column-key="area"
      :filters="[{text: '纸浆', value: '纸浆'}, {text: '欧废', value: '欧废'},{text: '美废',value: '美废'}]"
      :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="180"
        sortable>
      </el-table-column>
      <el-table-column
        prop="area"
        label="地区"
        width="180"
        column-key="area"
      :filters="[{text: '北京', value: '北京'}, {text: '上海', value: '上海'},{text: '广州',value: '广州'}]"
      :filter-method="filterHandler">
      </el-table-column>
      <el-table-column
        prop="change"
        label="涨跌"
        width="180"
        sortable>
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        width="180"
        sortable
        column-key="time">
      </el-table-column>

    </el-table>
                <!-- 联系我们 -->
    <div id="contactUs" class="container-fuild text-center">
      <div class="container contactUs-container wow slideInUp">
        <h1>诚实守信&nbsp;知行合一</h1>
        <h3>用双手开拓进取，用能力创造未来。</h3>
        <h3>言必信、行必果！</h3>
        <h3>人人讲诚信、事事做诚信！</h3>
        <router-link to="/ContactUS"><button
          class="btn btn-default btn-sm"
          onmouseleave="this.style.borderColor='#ffffff'; this.style.backgroundColor='#ffffff'; this.style.color='#3f3f3f';"
          onmouseenter="this.style.backgroundColor='transparent'; this.style.borderColor='#ffffff'; this.style.color='#ffffff';"
        >联系我们</button></router-link>
        <div class="contactUs-contactWay">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
import { WOW } from 'wowjs';
import axios from 'axios';

export default {
  name: "Header",
  data() {
    return {
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
        },
value1: '',
      priceList: [
        {
          id:'1',
          product:'纸浆',
          area:'北京',
          price:'1500',
          change:'+15',
          time:'2020-12-29',
        },{
          id:'2',
          product:'欧废',
          area:'上海',
          price:'1800',
          change:'+15',
          time:'2020-12-29',
        },{
          id:'3',
          product:'美废',
          area:'广州',
          price:'1600',
          change:'+30',
          time:'2021-01-05',
        },{
          id:'4',
          product:'#11废',
          area:'亳州',
          price:'1100',
          change:'+30',
          time:'2021-01-05',
        },

      ],

    };

  },
  mounted () {
    this.getPriceList()
  },
  methods: {
    getPriceList() {
      let time = ''
      if (!this.value1) {
        time = ''
      } else {
        time = this.value1.getFullYear()+"-"+(this.value1.getMonth()+1)+"-"+this.value1.getDate()
      }
      axios.get('http://localhost:8000/market', {
        params: {
          time: time
        }
      }).then(response => {
          this.priceList = response.data
        })
    },

    getRowClass ({rowIndex}){
      if (rowIndex == 0){
        return 'thead-row';
      }else {
        return
      }
    },
    resetDateFilter() {
        this.$refs.filterTable.clearFilter('time');
        this.$refs.filterTable.clearFilter('area');
        this.$refs.filterTable.clearFilter('product');
      },

      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },

    navClick(index, name) {
      this.navIndex = index;
      sessionStorage.setItem('navIndex',index)
      this.menuName = name;
    },
    menuClick() {
      if (this.menuClass == "glyphicon glyphicon-menu-down") {
        this.menuClass = "glyphicon glyphicon-menu-up";
      } else {
        this.menuClass = "glyphicon glyphicon-menu-down";
      }
    }
  }
};
</script>
<style coped>
* {box-sizing: border-box;
   margin: 0;
   padding: 0;
}
form{
  position: relative;
  width: 500px;
}
input,button{
  border: none;
  outline: none;
}
.search{
  margin-top: 20px;
  margin-bottom: 50px;
  margin-left: 38%;

}
.search input{
  width: 100%;
  height: 42px;
  padding-left: 13px;
  padding-right: 46px;
  border: 2px solid green;
  border-radius: 5px;
  background: transparent;
  top: 0;
  right: 0;
}
.search button:before{
  content: "搜索";
  font-size: 13px;
  color: #fff;
}
.search button:hover{
  content: "搜索";
  font-size: 5px;
  color: black;
}
.search button{
  height: 42px;
  width: 60px;
  cursor:pointer; /* 光标 */
  position: absolute;
  background: green;
  border-radius: 0 5px 5px 0;
  top: 0;
  right: 0;
}

/* 联系我们 */
#contactUs {
  color: #fff;
  height: 400px;
  background: url("../assets/img/kouhao1.jpg") 0 0 no-repeat;
  background-size: 100% 100%;
  transition: all ease 0.6s;
  padding: 80px;
  margin-top: 30px;
}
/* 口号+按钮 */
#contactUs .contactUs-container {
  padding: 0px;
}
/* 按钮 */
 #contactUs .contactUs-container button {
  width: 300px;
  height: 50px;
  margin-top:20px;
}
/* 表格 */
.el-table .thead-row {
  background: hsl(99, 50%, 81%);
  color:black;
  font-weight: bold;
}

</style>
