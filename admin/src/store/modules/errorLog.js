import { defineStore } from 'pinia';

export default defineStore({
  id: 'errorLog',
  state: () => ({
    logs: []
  }),
  getters: {},
  actions: {
    addErrorLog(log) {
      this.logs.push(log);
    },
    clearErrorLog() {
      this.logs.splice(0);
    }
  }
});
