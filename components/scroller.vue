<template>
  <!-- bscroll封装, bscroller 为外部定高容器， scoller-content为自有高度内容装载区域， -->
  <!-- 使用须知： 父容器需定高， -->
  <div class="bscroller" ref="wrapper"> 
    <div class="scroll-content">
      <div class="pulldown-tip">
        <div v-show="beforePullDown">
          <span>下拉刷新</span>
        </div>
        <div v-show="!beforePullDown">
          <div v-show="isPullingDown">
            <span>努力加载中...</span>
          </div>
          <div v-show="!isPullingDown">
            <span>刷新成功</span>
          </div>
        </div>
      </div>
      <slot></slot>
      <div class="pullup-tip">
        <div v-if="!isPullUpLoad" class="before-trigger">
          <span class="pullup-txt" v-html="beforePullUpTip"></span>
        </div>
        <div v-else class="after-trigger">
          <span class="pullup-txt">努力加载中...</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 1
    },
    beforePullUpTip: {
      type: String,
      default: '上拉加载更多'
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    },
    pullDownRefresh: {
      threshold: 70,
      stop: 56
    },
    pullDownText: {
      type: String,
      default: '下拉刷新'
    }
  },
  mounted() {
    // 保证在DOM渲染完毕后初始化better-scroll
    this.$nextTick(() => {
      this._initScroll()
    })
  },
  data(){
    return {
      isPullUpLoad: false,
      beforePullDown: true,
      isPullingDown: false,

    }
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return
      }
      // better-scroll的初始化
      this.bscroll = new BScroll(this.$refs.wrapper, {
        // probeType: this.probeType,
        pullUpLoad: true,
        pullDownRefresh: this.pullDownRefresh
      })

      // 是否派发滚动事件
      this.bscroll.on('scroll', (pos) => {
        if (this.listenScroll) {
          this.$emit('scroll', pos)
        }
        this.scrollHandler()
      })


      // 是否派发滚动到底部事件，用于上拉加载
      this.bscroll.on('scrollEnd', () => {
        // 滚动到底部
        if (this.bscroll.y <= (this.bscroll.maxScrollY + 50)) {
          if (this.pullup) {
            !this.isPullUpLoad && this.$emit('pullUp') //防抖
            this.isPullUpLoad = true;
            console.log('加载中');
          }
        }
      })


      this.bscroll.on('scrollEnd', e => {
        console.log('scrollEnd')
      })
      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        // this.bscroll.on('pullingDown', this.pullingDownHandler)
        this.bscroll.on('touchEnd', (pos) => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit('pulldown')
          }
        })
      }

      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.bscroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    async pullingDownHandler() {
      console.log('trigger pullDown')
      this.beforePullDown = false
      this.isPullingDown = true
      STEP += 1
    },
    async finishPullDown() {
      this.bscroll.finishPullDown()
      setTimeout(() => {
        this.beforePullDown = true
        this.bscroll.refresh()
      }, TIME_BOUNCE + 100)
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    scrollHandler(){

    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data() {
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    }
  }
}
</script>

<style lang="scss">
.scroll-content{
  position: relative;
}
.pulldown-tip{
  position: absolute;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  transform: translateY(-100%) translateZ(0);
  top: 0;
  left: 0;
  text-align: center;
  color: #999;
}
.pullup-tip{
  text-align: center;
  color: #999;
}
</style>