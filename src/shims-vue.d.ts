/* eslint-disable */
/// <reference types="vite/client" />

import { AnyMongoAbility } from '@casl/ability'
import type { DefineComponent } from 'vue'

// Mocks all files ending in `.vue` showing them as plain Vue instances
declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>
  export default component;
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $can: any,
    $ability: AnyMongoAbility,
    $api: any,
    $grid: any,
    $gantt: any,
    $kanban: any,
    $snowflake: any,
    $config: any,
  }
}
