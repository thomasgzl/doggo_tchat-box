import { createStore } from 'vuex'

export interface IState { 
  message: string
  usersPanel: { display: boolean }
  authorId: string,
  channelId: string
}

export const store = createStore({
  state(): IState {
    return {
      message: '',
      usersPanel: { display: false },
      authorId: '',
      channelId: 'a081839f-72b3-401a-9f58-7fa51aeabe44'
    }
  },
  mutations: {
    message(state: IState, message) {
      state.message = message;
    },
    usersPanel(state: IState, usersPanel) {
      state.usersPanel = usersPanel;
    },
    authorId(state: IState, authorId) {
      state.authorId = authorId;
    },
    channelId(state: IState, channelId) {
      state.channelId = channelId;
    },
  }
})
