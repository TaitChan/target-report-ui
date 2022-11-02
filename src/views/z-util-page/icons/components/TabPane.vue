<template>
  <div class="grid">
    <div v-for="item of filterIconList" :key="item" @click="handleClipboard(generateIconCode(item), $event, '图标')">
      <el-tooltip placement="top">
        <template #content>
          {{ generateIconCode(item) }}
        </template>
        <div class="icon-item">
          <i v-if="isSvgIcon">
            <svg-icon :icon-class="item" />
          </i>
          <i v-else :class="'el-icon-' + item" />
          <span>{{ item }}</span>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
  import { handleClipboard } from '@/utils/clipboard.js'
  import { svgIcons, svgColorIcons } from '@/views/z-util-page/icons/svg-icons'

  export default {
    name: 'TabPane',
    components: {},
    props: {
      name: {
        type: String,
        default: 'alone',
        required: true,
      },
      search: {
        type: String,
      },
    },
    data() {
      return {
        handleClipboard,
        svgIcons,
        svgColorIcons,
      }
    },
    computed: {
      isSvgIcon() {
        return ['alone', 'color'].includes(this.name)
      },
      filterIconList() {
        if (this.name === 'alone') {
          return svgIcons.filter((item) => {
            return item.includes(this.search)
          })
        } else if (this.name === 'color') {
          return svgColorIcons.filter((item) => {
            return item.includes(this.search)
          })
        } else {
          return []
        }
      },
    },
    methods: {
      generateIconCode(symbol) {
        if (this.isSvgIcon) {
          return `<svg-icon icon-class="${symbol}" />`
        } else {
          return `<i class="el-icon-${symbol}" />`
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(85px, 1fr));
    grid-gap: 10px;
    overflow: hidden;
    .icon-item {
      text-align: center;
      font-size: 30px;
      color: #24292e;
      cursor: pointer;
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      position: relative;
      overflow: hidden;
      padding: 12px 0 10px 0;
      min-height: 85px;
      display: flex;
      justify-content: space-between;
      flex-flow: column;
      span {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 10px;
      }
      i {
        pointer-events: none;
        transform: translateY(0);
        transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
      }
      &:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        i {
          transform: translateY(-6px);
        }
      }
      &:hover::after {
        transform: translateY(0);
      }
      &::after {
        content: '点击复制';
        background: cornflowerblue;
        color: white;
        font-size: 12px;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        height: 30px;
        line-height: 30px;
        transform: translateY(100%);
        transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
      }
    }
  }
</style>
