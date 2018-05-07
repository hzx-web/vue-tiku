<template>
  <div>
    <!--顶部工具栏-->
    <top-toolbar></top-toolbar>
    <!--顶部导航-->
    <top-nav></top-nav>
    <!--主题内容-->
    <div id="app" class="main">
      <div class="container clearfix">
        <!--左侧导航-->
        <side-nav></side-nav>
        <!--右侧内容-->
        <div class="tk-content pull-right">
          <div class="exam">
            <!--切换科目-->
            <div class="exam-subject">
              <div class="current-subject-content clearfix">
                <span class="currentSubject pull-left">
                   <i class="currentlySubject"></i>
                 </span>
                <input type="hidden" name="subjectName" courseid="301" value="基础知识">
                <a class="subject-change button pull-left">切换科目</a>
              </div>
            </div>
            <!--页面内容-->
            <keep-alive>
              <router-view/>
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
    <!--页脚-->
    <page-footer></page-footer>
    <!--版权所有-->
    <copyright></copyright>
  </div>
</template>

<script>
import Home from 'views/Home'
import TopToolbar from 'components/TopToolbar'
import TopNav from 'components/TopNav'
import SideNav from 'components/SideNav'
import PageFooter from 'components/PageFooter'
import Copyright from 'components/Copyright'

export default {
  name: 'App',
  components: {
    Home,
    TopToolbar,
    TopNav,
    SideNav,
    PageFooter,
    Copyright
  }
}
</script>

<style lang="scss" scoped>
  .main{
    background: url(assets/images/main_bg.png);
    padding-top: 18px;
    padding-bottom: 20px;
  }
</style>
