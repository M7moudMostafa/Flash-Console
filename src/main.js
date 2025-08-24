// Default styles for different log types
const defaultStyles = {
   log: 'color: black; font-weight: normal;',
   error: 'color: white; background: red; padding: 2px 4px; border-radius: 3px;',
   warn: 'color: black; background: yellow; padding: 2px 4px; border-radius: 3px;',
   info: 'color: white; background: blue; padding: 2px 4px; border-radius: 3px;',
   debug: 'color: purple; font-style: italic;',
   trace: 'color: gray;',
   assert: 'color: white; background: red; padding: 2px 4px; border-radius: 3px;',
};

// Clears the entire console output
export function clear() {
   console.clear();
}

// Logs a standard message with optional custom styles
export function log(message, style) {
   console.log(`%c${message}`, style || defaultStyles.log);
}

// Logs an error message with optional custom styles
export function error(message, style) {
   console.error(`%c${message}`, style || defaultStyles.error);
}

// Logs a warning message with optional custom styles
export function warn(message, style) {
   console.warn(`%c${message}`, style || defaultStyles.warn);
}

// Logs an informational message with optional custom styles
export function info(message, style) {
   console.info(`%c${message}`, style || defaultStyles.info);
}

// Logs a debug message with optional custom styles
export function debug(message, style) {
   console.debug(`%c${message}`, style || defaultStyles.debug);
}

// Logs a stack trace with optional custom styles
export function trace(message, style) {
   console.trace(`%c${message}`, style || defaultStyles.trace);
}

// Logs an assertion if condition is false, with optional custom styles
export function assert(condition, message, style) {
   console.assert(condition, `%c${message}`, style || defaultStyles.assert);
}

// Displays a structured object (dir) – styles not applicable
export function dir(object) {
   console.dir(object);
}

// Displays data in a table – styles not applicable
export function table(data) {
   console.table(data);
}

// Starts a timer
export function time(label) {
   console.time(label);
}

// Ends a timer
export function timeEnd(label) {
   console.timeEnd(label);
}

// Groups messages
export function group(label) {
   console.group(label);
}

// Ends group
export function groupEnd() {
   console.groupEnd();
}

// Count logs
export function count(label) {
   console.count(label);
}

// Reset count
export function countReset(label) {
   console.countReset(label);
}

// CPU profiling
export function profile(label) {
   console.profile(label);
}

export function profileEnd() {
   console.profileEnd();
}

// Memory info
export function memory() {
   return console.memory;
}

// Throw custom exception
export function exception(message) {
   throw new Error(message);
}

// Browser dialogs
export function prompt(message) {
   return prompt(message);
}

export function confirm(message) {
   return confirm(message);
}

export function alert(message) {
   alert(message);
}

// Fetch helper
export async function fetchData(url, options) {
   return fetch(url, options).then((res) => res.json());
}

// Timer functions
export function setTimeoutFunc(callback, delay) {
   return setTimeout(callback, delay);
}

export function setIntervalFunc(callback, delay) {
   return setInterval(callback, delay);
}

export function clearTimeoutFunc(id) {
   clearTimeout(id);
}

export function clearIntervalFunc(id) {
   clearInterval(id);
}

// Browser info
export function navigatorInfo() {
   return {
      appName: navigator.appName,
      appVersion: navigator.appVersion,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
   };
}

export function windowInfo() {
   return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
      location: window.location.href,
      documentTitle: document.title,
   };
}

// typeWriter logs a message to the console one character at a time, creating an animation effect.
export function typeWriter(message, delay = 100, style = defaultStyles.log) {
   let index = 0;

   const interval = setInterval(() => {
      if (index <= message.length) {
         console.log(`%c${message.slice(0, index)}`, style);
         index++;
      } else {
         clearInterval(interval);
      }
   }, delay);
}
