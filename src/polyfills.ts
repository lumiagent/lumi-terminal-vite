import { Buffer } from 'buffer'
import process from 'process'

declare global {
  interface Window { global: any; process: any; Buffer: typeof Buffer; }
  // eslint-disable-next-line no-var
  var global: any;
}

if (typeof window !== 'undefined') {
  // @ts-ignore
  window.global = window.global || window
  // @ts-ignore
  window.process = window.process || process
  // @ts-ignore
  window.Buffer = window.Buffer || Buffer
}

// @ts-ignore
globalThis.process = globalThis.process || process
// @ts-ignore
globalThis.Buffer = globalThis.Buffer || Buffer
