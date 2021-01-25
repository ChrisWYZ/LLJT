<template>
  <div class="content">
    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        :formatter="formatter">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "Tianjia",
  mounted() {
    this.getData();
  },
  methods: {

    getData(){
      const _this = this
      axios.get('http://localhost:8181/markets/findAll').then(function(resp){


      //  if (resp.data.code == '200'){
          console.log(resp)
          if (resp.data && resp.data.length > 0){
            _this.tableData = resp.data;
            for (var i =  0;i <= _this.tableData.length;i++){

                if(_this.tableData[i].diqu == _this.tableData[i+1].diqu) {
                  i++;
              }else
              _this.datadiqu.push({text: _this.tableData[i].diqu, value: _this.tableData[i].diqu});
              //_this.datadiqu.push({ text: '家', value: '家' }, { text: '公司', value: '公司' });

            }
          }
        //}

      })
    },
  },
  data() {

    return {
      tableData:[],
      datadiqu:[]
    }
  },

  resetDateFilter() {
    this.$refs.filterTable.clearFilter('diqu');
  },
  clearFilter() {
    this.$refs.filterTable.clearFilter();
  },
  filterHandler(value, row, column) {
    const property = column['property'];
    return row[property] === value;
  }

}
</script>

<style scoped>
.content {
  padding: 0px 100px;
}
</style>
