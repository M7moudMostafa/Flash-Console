# FlashConsole

> A modern, customizable, and visually stunning console logger for JavaScript developers.

---

## 🚀 Features

- 🎨 **Custom Styles:** Customize text color, background, bold, italic, underline, and more.
- ⚡ **Dynamic Logging Actions:** Predefined methods for `success`, `error`, `warning`, `info`, and custom logs.
- ✨ **Fancy Effects:** Add animations and visual enhancements to make logs pop.
- 🛠️ **Easy-to-Use API:** Integrates seamlessly into any JavaScript project.
- 🎯 **Perfect for Development:** Makes debugging more readable and fun.

---

## 📦 Installation

```bash
npm install FlashConsole
# or
yarn add FlashConsole
```

---

## 💻 Usage

### Basic Logging

```javascript
import FlashConsole, {
  log,
  error,
  clear,
  warn,
  info,
  debug,
  trace,
  assert,
  dir,
  table,
  time,
  timeEnd,
  group,
  groupEnd,
  count,
  countReset,
  profile,
  profileEnd,
  memory,
  exception,
  prompt,
  confirm,
  alert,
  fetchData,
  setTimeoutFunc,
  setIntervalFunc,
  clearTimeoutFunc,
  clearIntervalFunc,
  navigatorInfo,
  windowInfo,
  typeWriter,
} from "FlashConsole";
```

### Custom Styling

```javascript
// -----------------------------
// Basic Logs with Custom Styles
// -----------------------------
log("Default log", { color: "black" });
error("Error log", { color: "white", background: "red", bold: true });
warn("Warning log", { color: "orange", bold: true });
info("Info log", { color: "white", background: "blue" });
debug("Debug log", { color: "purple", italic: true });
trace("Trace log", { color: "gray" });
assert(false, "Assertion failed!", { color: "white", background: "red" });

// -----------------------------
// Console Utilities
// -----------------------------
clear(); // Clears console

dir({ name: "FlashConsole", version: "1.0.0" }); // Inspect object
table([{ name: "Alice" }, { name: "Bob" }]); // Display table

time("loadTime");
// simulate code
timeEnd("loadTime");

group("Grouped Logs");
log("First message", { color: "green" });
log("Second message", { color: "blue" });
groupEnd();

count("MyCounter");
count("MyCounter");
countReset("MyCounter");

profile("CPU Profile");
// simulate code
profileEnd();

console.log(memory()); // Memory info

// -----------------------------
// Browser Utilities
// -----------------------------
try {
  exception("Custom exception thrown!");
} catch (err) {
  error(err.message, { color: "white", background: "red" });
}

prompt("Enter your name:");
confirm("Are you sure?");
alert("This is an alert!");

fetchData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => info("Fetched data:", { color: "cyan" }))
  .catch((err) => error(err, { color: "white", background: "red" }));

const timeoutId = setTimeoutFunc(
  () => log("Timeout executed", { color: "green" }),
  1000
);
clearTimeoutFunc(timeoutId);

const intervalId = setIntervalFunc(
  () => log("Interval running", { color: "purple" }),
  2000
);
clearIntervalFunc(intervalId);

console.log(navigatorInfo());
console.log(windowInfo());

// -----------------------------
// Animated Logs
// -----------------------------
typeWriter("Typing effect log...", 100, { color: "magenta", bold: true });
```

---

## 🎨 Why FlashConsole?

FlashConsole transforms your console into a **colorful, stylish, and fun experience**. Debugging has never been so enjoyable! Perfect for developers who want their logs to stand out in style.

---

## ❤️ Contributing

Contributions are welcome! Open issues, submit pull requests, or suggest new features. Together we can make PrismLog even fancier.

---

## 📜 License

MIT License © [Mahmoud Mostafa]
