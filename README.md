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
import { log, success, error, warning, info } from 'FlashConsole';

log('Hello, world!');          // Default log
success('Operation done!');    // Success message
error('Something went wrong'); // Error message
warning('This is a warning');  // Warning message
info('FYI: Info message');     // Info message
```

### Custom Styling

```javascript
log('Custom style message', { 
  color: 'cyan', 
  background: 'black', 
  bold: true, 
  italic: true 
});
```

### Custom Actions

```javascript
import FlashConsole from 'FlashConsole';

FlashConsole.custom('Shiny log', {
  color: 'magenta',
  background: 'yellow',
  bold: true,
  effect: 'glow'
});
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
