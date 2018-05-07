<template>
  <div class="slider pull-left">
    <div class="tk-menu-title">
      <div class="menu-title-content">
        <span class="currentTest">人力资源管理师-一级</span>
        <a class="test-change button">切换考试</a>
      </div>
    </div>
    <div class="menu-list-content">
      <ul class="tk-menu-list">
        <li class="mn-io">
          <router-link to="/simulation">
            <i></i>
            <span>模拟考场</span>
          </router-link>
        </li>
        <li class="zj-io">
          <router-link to="/chapter">
            <i></i>
            <span>章节练习</span>
          </router-link>
        </li>
        <li class="ln-io">
          <router-link to="/oldexams">
            <i></i>
            <span>历年真题</span>
          </router-link>
        </li>
        <li class="yc-io">
          <router-link to="/fallibility">
            <i></i>
            <span>易错题</span>
          </router-link>
        </li>
        <li class="mr-io">
          <router-link to="/daily">
            <i></i>
            <span>每日一练</span>
          </router-link>
        </li>
        <li class="nl-io">
          <router-link to="/assessment">
            <i></i>
            <span>能力评估</span>
          </router-link>
        </li>
        <li class="lx-io">
          <router-link to="/mypractice">
            <i></i>
            <span>我的练习</span>
          </router-link>
        </li>
        <li class="ct-io">
          <router-link to="/wrong">
            <i></i>
            <span>错题重做</span>
          </router-link>
        </li>
        <li class="bj-io">
          <router-link to="/note">
            <i></i>
            <span>我的笔记</span>
          </router-link>
        </li>
        <li class="sc-io">
          <router-link to="/collection">
            <i></i>
            <span>我的收藏</span>
          </router-link>
        </li>
        <li class="ph-io">
          <router-link to="/ranking">
            <i></i>
            <span>排行榜</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
