<template>
  <el-row :gutter="20">
    <el-col :xs="24" :sm="24" :md="24" >
      <div class="content  "  >
        <el-button @click="resetDateFilter">清除地区过滤器</el-button>
        <el-button @click="clearFilter">清除所有过滤器</el-button>
        <el-table
          class="table"
          ref="filterTable"
          :data="tableData"
          border
          align="center"
          :default-sort = "{prop: 'date', order: 'descending'}"

        >
          <el-table-column
            align="center"
            type="index"
            :index="indexMethod"
            label="编号"

          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="diqu"
            label="地区"
            column-key="diqu"
            :filters="datadiqu"
            :filter-method="filterHandler"
          >

          </el-table-column>
          <el-table-column
            align="center"
            prop="name"
            label="单位"
            column-key="name"

            :filters="dataname"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="grade"
            sortable
            label="等级"
            column-key="grade"

            :filters="datagrade"
            :filter-method="filterHandler"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="time"
            sortable
            label="时间"
          >
          </el-table-column>
          <el-table-column
            align="center"
            prop="price"
            sortable
            label="价格"
          >
          </el-table-column>
<!--          <el-table-column
            align="center"
            prop="remarks"
            label="备注"
          >
          </el-table-column>-->
        </el-table>

<!--        <el-pagination
          background
          align="center"
          layout=" prev, pager, next, jumper,->,total"
          :page-size="pageSize"
          :current-page.sync="currentPage"
          :total="total"
          @current-change="page"

        >
        </el-pagination>-->
      </div>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: "Tianjia",
  mounted() {
    this.getdata();
  },
  data() {
    return {
      pageSize:null,
      total:null,
      tableData:[],
      currentPage:null,
      /*tableHeight:null,*/
      markets:[],
      datadiqu:[],
      datagrade:[],
      dataname:[]
    }
  },
  //请求数据
 /* created() {
    const _this = this
    axios.get('http://47.99.80.218:8181/markets/findAll/1/10').then(function(resp){
      console.log(resp)
      _this.tableData = resp.data.content
      _this.pageSize = resp.data.size
      _this.total = resp.data.totalElements
    })
  },*/
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('diqu');
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterHandler(value, row, column) {
      const property = column['property'];
      return row[property] === value || row[property].value === value;
    },
    /*filterHandler(value, row, column){  //筛选选项的value，一行row对象,column一列的属性值
      const property = column['property'];    // column['property']值为属性名·
      // console.log(JSON.stringify(column));

      //筛选数据中[{campus: '',..... }]这种类型数据
      if(Array.isArray(row[property])){   //行中该属性是数组
        var  arr = false;
        for(var i in row[property]){
          //每次的arr为上一次和这一次结果的或，效果就是如果数据出现新老校区都有的情况，筛选到时候新老校区都会显示这条数据
          arr = (row[property][i].campus === value)||arr;
        }
        return arr;
      }
      //
      else if(row[property] instanceof Object){//属性值是对象

        if(row[property].isInstituteRc!=undefined)
          return row[property].isInstituteRc  === value;
      }
      else{ //普通属性值
        return row[property] === value;
      }
    },*/
      //编号的顺序
     indexMethod(index) {
       const _this = this
       if( _this.currentPage >= 2){
         var  t = _this.currentPage;
         return  index+(t-1 )*10+1;
       }else{
         return  index+1;
       }
     },
    //获取筛选的请求
    getdata(){
      const _this = this
      axios.get('http://47.99.80.218:8181/markets/findAll').then(function(resp){
        //  if (resp.data.code == '200'){
        console.log(resp)
        /* var t,i,j,k ;*/
        var f=0,q=0;
        if (resp.data && resp.data.length > 0){
          _this.tableData = resp.data;
          /*alert(_this.tableData.length)*/
          for (var i = 0;i < _this.tableData.length ;i++) {
            if (_this.tableData[i].diqu != _this.tableData[i + 1].diqu) {
              f = 1;
              _this.datadiqu.push({text: _this.tableData[i].diqu, value: _this.tableData[i].diqu});
            }else if (_this.tableData.lengt < "index"){
              _this.datadiqu.push({text: _this.tableData[i].diqu, value: _this.tableData[i].diqu});
            }


            if (_this.tableData[i].name != _this.tableData[i + 1].name) {
              f = 1;
              _this.dataname.push({text: _this.tableData[i].name, value: _this.tableData[i].name});
            }

            if (_this.tableData[i].grade != _this.tableData[i + 1].grade) {
              f = 1;
              _this.datagrade.push({text: _this.tableData[i].grade, value: _this.tableData[i].grade});
            }
          }
         /* if(f==1){
            _this.datadiqu.push({text: _this.tableData[0].diqu, value: _this.tableData[0].diqu});
          }*/

        }
      })
    },
    //分页请求
    /*page(currentPage){
      const _this = this
      axios.get('http://47.99.80.218:8181/markets/findAll/'+currentPage+'/10').then(function(resp){
        //console.log(resp)
        _this.tableData = resp.data.content
        _this.pageSize = resp.data.size
        _this.total = resp.data.totalElements
      })
    }*/
  }
}
</script>

<style scoped>
.content {
  padding: 0px 100px;
}

</style>
