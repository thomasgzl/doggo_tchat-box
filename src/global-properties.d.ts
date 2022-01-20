import filters from './filters';

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: typeof filters
  }
}
