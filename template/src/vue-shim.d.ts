declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module '*.json' {
  const value: any
  export default value
}

declare let require: (files: Array<string> | string, resolve?: any) => any
declare let global: any
