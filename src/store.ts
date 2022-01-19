import { createStore } from 'vuex'

export interface IState { 
  message: string
  usersPanel: { display: boolean }
}

export const store = createStore({
  state(): IState {
    return {
      message: '',
      usersPanel: { display: false }
    }
  },
  mutations: {
    message(state: IState, message) {
      state.message = message;
    },
    usersPanel(state: IState, usersPanel) {
      state.usersPanel = usersPanel;
    },
  }
})
