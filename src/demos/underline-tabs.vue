<template>
  <div class="p-5">
    <el-tabs v-model="editableTabsValue" type="border-card" addable closable @edit="handleTabsEdit">
      <el-tab-pane v-for="label in labels"  v-bind:key="label" :name="label">
        <tab-underline slot="label" :nextIndex.sync="nextIndex">
            {{label}}
          </tab-underline>
        {{label}}
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
  import TabUnderline from '@/components/tab-underline/tab-underline.vue'
  export default {
    name: 'UnderlineTabs',
    components: {
      TabUnderline
    },
    data () {
      return {
        editableTabsValue: '我的行程',
        labels: ['我的行程', '消息中心', '角色管理', '定时任务补偿'],
        nextIndex: null
      }
    },
    methods: {
      handleTabsEdit (targetName, action) {
        if (action === 'add') {
          let index = this.labels.length
          let newTabName = `new Tab ${index}`
          while (this.labels.includes(newTabName)) {
            index++
            newTabName = `new Tab ${index}`
          }
          this.labels.push(newTabName)
          this.editableTabsValue = newTabName
        } else if (action === 'remove') {
          let activeName = this.editableTabsValue
          if (targetName === this.editableTabsValue) {
            const activeIndex = this.labels.indexOf(activeName)
            activeName = this.labels[activeIndex - 1] || this.labels[activeIndex + 1] || ''
          }
          this.editableTabsValue = activeName
          this.labels = this.labels.filter(label => label !== targetName)
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
// ::v-deep .el-tabs__content
//   display: none
</style>
