import { Store } from 'vuex'
import { IState } from '@/store';
declare module '@vue/runtime-core' {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<IState>
  }
}