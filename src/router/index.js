import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    }, {
      path: '/',
      name: 'PageView',
      component: resolve => require(['@/view/PageView'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        }, {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/view/HomePage'], resolve),
          meta: {
            title: '首页'
          }
        }, {
          path: '/subsidiaries',
          name: 'subsidiaries',
          component: resolve => require(['@/view/subsidiaries'], resolve),
          meta: {
            title: '软件产品'
          },
          children: [
            {
              path: '/subsidiaries',
              redirect: '/subsidiaries/bozhoulongli'
            },
            {
              path: '/subsidiaries/bozhoulongli',
              name: 'subsidiaries',
              component: resolve => require(['@/view/subsidiaries_bozhoulongli'], resolve),
              meta: {
                title: '亳州龙利回收资源有限责任公司'
              }
            },
            {
              path: '/subsidiaries/hainandianshang',
              name: 'subsidiaries',
              component: resolve => require(['@/view/subsidiaries_hainandianshang'], resolve),
              meta: {
                title: '海南贸易网'
              }
            },
            // {
            //   path: '/subsidiaries/longxiang',
            //   name: 'subsidiaries',
            //   component: resolve => require(['@/view/subsidiaries_longxiang'], resolve),
            //   meta: {
            //     title: '亳州龙翔'
            //   }
            // },
            // {
            //   path: '/subsidiaries/hainanlongliyuan',
            //   name: 'subsidiaries',
            //   component: resolve => require(['@/view/subsidiaries_hainanlongliyuan'], resolve),
            //   meta: {
            //     title: '海南龙利源'
            //   },
            // }
          ]
        }, {
          path: '/service',
          name: 'service',
          component: resolve => require(['@/view/Service'], resolve),
          meta: {
            title: '相关服务'
          }
        }, {
          path: '/newsinformation',
          name: 'newsinformation',
          component: resolve => require(['@/view/NewsInformation'], resolve),
          meta: {
            title: '新闻动态'
          }
        }, {
          path: '/companyintroduction',
          name: 'companyintroduction',
          component: resolve => require(['@/view/CompanyIntroduction'], resolve),
          meta: {
            title: '公司介绍'
          }
        }, {
          path: '/jobchance',
          name: 'jobchance',
          component: resolve => require(['@/view/JobChance'], resolve),
          meta: {
            title: '工作机会'
          }
        }, {
          path: '/contactus',
          name: 'contactus',
          component: resolve => require(['@/view/ContactUs'], resolve),
          meta: {
            title: '联系我们'
          }
        },
        {
          path: '/servicedetail',
          name: 'servicedetail',
          component: resolve => require(['@/view/ServiceDetail'],resolve),
          meta: {
            title: '相关服务'
          }
        },
        /*添加六个的新闻路由 
        第一个
        */
        {
          path: '/news1',
          name: 'news1',
          component: resolve => require(['@/view/news1'], resolve),
          meta: {
            title: '新闻动态'
          }
         },
        /* 第二个 */
         {
          path: '/news2',
          name: 'news2',
          component: resolve => require(['@/view/news2'], resolve),
          meta: {
            title: '新闻动态'
          }
         },
         /* 第三个 */
         {
          path: '/news3',
          name: 'news3',
          component: resolve => require(['@/view/news3'], resolve),
          meta: {
            title: '新闻动态'
          }
         },
         /* 第四个 */
         {
          path: '/news4',
          name: 'news4',
          component: resolve => require(['@/view/news4'], resolve),
          meta: {
            title: '新闻动态'
          }
         },
         /* 第五个 */
         {
          path: '/news5',
          name: 'news5',
          component: resolve => require(['@/view/news5'], resolve),
          meta: {
            title: '新闻动态'
          }
         },
         /* 第六个 */
         {
          path: '/news6',
          name: 'news6',
          component: resolve => require(['@/view/news6'], resolve),
          meta: {
            title: '新闻动态'
          }
         }
      ]
    }
  ],
  scrollBehavior(to, from,savedPosition) {
    return { x: 0, y: 0 }
  }
})
