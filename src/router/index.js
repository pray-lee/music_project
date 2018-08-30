import vue from 'vue'
import Router from 'vue-router'
import Recommend from 'components/recommend/Recommend'
import Rank from 'components/rank/Rank'
import Singer from 'components/singer/Singer'
import Search from 'components/search/Search'

vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    }
  ]
})
