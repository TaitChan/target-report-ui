import { defineStore } from 'pinia'

export const useReportStore = defineStore({
  id: 'cart',
  state: () => ({
    activeTargetList: [],
  }),
  getters: {},
  actions: {
    setActiveTargetList(list) {
      this.activeTargetList = list
    },
    delActiveTarget(id) {
      this.activeTargetList.splice(
        this.activeTargetList.findIndex((v) => {
          return v.cardId === id
        }),
        1
      )
    },
    clearActiveTarget() {
      this.activeTargetList = []
    },
  },
})
