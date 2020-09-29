<template>
  <div id="News">    
    <div class="title text-center">
      <h3> 一站式服务
        <small>/News headlines</small>
      </h3>
    </div> 
    <div class="container">
      <h3><p>
        常规财税服务
      </p> </h3>
      <p>
        代理记账和申报 <br/>
        代理记账服务、
        代理纳税申报服务、
        代理进出口财税服务。     
      </p>           
      </div>
      <!-- 宣传图片添加 -->
      <div class="container">
          <div class="picture"> 
            <div class="row">
              <div class=" col-sm-6" id="demo1">
                  <img src="../assets/img/hainanll3.jpg" alt="">             
              </div>
              <div class=" col-sm-6"  id="demo2">
                  <img src="../assets/img/banner3.jpg" alt=""> 
              </div>            
            </div>
          </div> 
        </div>                         
</div>
  
</template>
<style >
 #News>.title>h3 {
  font-size: 30px;
  padding-top :15px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ccc;
}
#News>.container{
    width: 70%;  
    padding: 2px;
}
#News>.container>p:first-letter {
   font-style:italic;
    font-size: 30px;
    float: left;
    text-shadow: 3px 3px 3px greenyellow;    
}
#News>.container>p {
   font-family:"华文陆帅","Arial","Angsana New";
    font-size: 20px;
    vertical-align:middle;   
}
.picture img {      
    width:100% ;
    height: 100%;
    padding: 2px;
    border: .5px solid #ffffff;
    border-radius: 10%;
    }
</style>