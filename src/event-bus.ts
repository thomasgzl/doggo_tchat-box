import mitt from 'mitt';
const emitter = mitt();

const DEBUG = false;
export default {
  $on: (...args: any[]): void => {
    if (DEBUG) { console.debug('%c[event-bus]%c $on', 'color: #666; background: #EEE', undefined, args[0], args[1].name); }
    return emitter.on(args[0], args[1]);
  },
  $off: (...args: any[]): void => {
    return emitter.off(args[0], args[1]);
  },
  $emit: (...args: any[]): void => {
    if (DEBUG) { console.debug('%c[event-bus]%c $emit', 'color: #666; background: #EEE', undefined, args[0], args[1]); }
    return emitter.emit(args[0], args[1]);
  }
};
