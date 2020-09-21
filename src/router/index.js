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
            }
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
        }
      ]
    }
  ],
  scrollBehavior(to, from,savedPosition) {
    return { x: 0, y: 0 }
  }
})
