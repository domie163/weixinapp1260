import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import forum from '@/views/modules/forum/list'
    import pingjiaxinxi from '@/views/modules/pingjiaxinxi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import paotuidingdan from '@/views/modules/paotuidingdan/list'
    import dingdanxinxi from '@/views/modules/dingdanxinxi/list'
    import paotuiyuancanyu from '@/views/modules/paotuiyuancanyu/list'
    import huodongxinxi from '@/views/modules/huodongxinxi/list'
    import config from '@/views/modules/config/list'
    import yonghushenqing from '@/views/modules/yonghushenqing/list'
    import paotuiyuan from '@/views/modules/paotuiyuan/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/forum',
        name: '意见角',
        component: forum
      }
      ,{
	path: '/pingjiaxinxi',
        name: '评价信息',
        component: pingjiaxinxi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/paotuidingdan',
        name: '跑腿订单',
        component: paotuidingdan
      }
      ,{
	path: '/dingdanxinxi',
        name: '订单信息',
        component: dingdanxinxi
      }
      ,{
	path: '/paotuiyuancanyu',
        name: '跑腿员参与',
        component: paotuiyuancanyu
      }
      ,{
	path: '/huodongxinxi',
        name: '活动信息',
        component: huodongxinxi
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/yonghushenqing',
        name: '用户申请',
        component: yonghushenqing
      }
      ,{
	path: '/paotuiyuan',
        name: '跑腿员',
        component: paotuiyuan
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
