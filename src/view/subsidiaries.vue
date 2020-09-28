<template>
    <div id="subsidiaries" class="container">
        <div class="row">
            <div id="right" class="col-md-8 col-xs-12">
                <router-view></router-view>  
            </div>
            <div id="left" class="col-md-4 col-xs-12  wow bounceInRight">
                <ul class="left-container wow bounceInDowm">
                    <p>旗下企业</p>
                    <div  class=" btn center-block btn-lg" v-for="(item,index) in subsidiariesList" :key="index">
                        <router-link :to=item.path>{{item.name}}</router-link>
                    </div>
                </ul><!-- 二维码 -->
                <div class="sticky-erweima"><img  src="@/assets/img/erweima.jpg" alt="微信二维码"></div>
               
            </div>
             
        </div>
    </div>
</template>
<script>
import { WOW } from "wowjs";
export default {
    name: 'subsidiaries',
    data(){
        return{
            subsidiariesList: [
                {
                    path: '/subsidiaries/bozhoulongli',
                    name: '亳州回收资源有限责任公司'
                },{
                    path: '/subsidiaries/hainandianshang',
                    name: '海南自贸区电子商务责任有限公司'
                },{
                    path: '/subsidiaries/hainandianshang',
                    name: '海南自贸区责任有限公司'
                },{
                    path: '/subsidiaries/hainandianshang',
                    name: '海南隆利源责任有限公司'
                }
            ]
        }
    },
    mounted() {
        var wow = new WOW();
        wow.init();
    },
}
</script>
<style scoped>
#left{
    margin: 50px 0;
}
.left-container{
    
    width: 100%;
    margin: 0 auto;
    border: 1px solid #474747;
    border-radius: 5px;
}
.left-container>p{
    text-align: center;
    line-height: 45px;
    padding: 0;
    margin: 0;
    background:linear-gradient(rgb(174,221,129),#fff);
    color: #000;
    font-size: 18px;
    font-weight: bold;
}
.left-container>div {
  height: 38px;
  margin: 0;
  border-top: .5px solid #474747;
}
.left-container>div>a{
    text-decoration: none;
}
.left-container>div:hover{
    background: #928989;
}
#right{
    padding: 50px 0;
}
@media screen and (max-width: 768px){
    #right{
        padding: 15px;
    }
}
.sticky-erweima{
    position: sticky;
    top: 0px;
    /* background: fuchsia; */
    padding-left: 20px;
}
.sticky-erweima >img {
    width: 320px;
    height: 350px;
}
</style>

