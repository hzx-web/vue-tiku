import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'
import SimulationTest from 'views/SimulationTest'
import ChapterExercises from 'views/ChapterExercises'
import OldExams from 'views/OldExams'
import Fallibility from 'views/Fallibility'
import DailyPractice from 'views/DailyPractice'
import CapacityAssessment from 'views/CapacityAssessment'
import MyPractice from 'views/MyPractice'
import WrongRedo from 'views/WrongRedo'
import MyNote from 'views/MyNote'
import MyCollection from 'views/MyCollection'
import RankingList from 'views/RankingList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/simulation',
      name: 'SimulationTest',
      component: SimulationTest
    },
    {
      path: '/chapter',
      name: 'ChapterExercises',
      component: ChapterExercises
    },
    {
      path: '/oldexams',
      name: 'OldExams',
      component: OldExams
    },
    {
      path: '/fallibility',
      name: 'Fallibility',
      component: Fallibility
    },
    {
      path: '/daily',
      name: 'DailyPractice',
      component: DailyPractice
    },
    {
      path: '/assessment',
      name: 'CapacityAssessment',
      component: CapacityAssessment
    },
    {
      path: '/mypractice',
      name: 'MyPractice',
      component: MyPractice
    },
    {
      path: '/wrong',
      name: 'WrongRedo',
      component: WrongRedo
    },
    {
      path: '/note',
      name: 'MyNote',
      component: MyNote
    },
    {
      path: '/collection',
      name: 'MyCollection',
      component: MyCollection
    },
    {
      path: '/ranking',
      name: 'RankingList',
      component: RankingList
    }
  ]
})
