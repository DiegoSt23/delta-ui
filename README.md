# delta-ui

Delta-UI is a versatile React components library that offers a seamless user experience with support for both light and dark modes. This lightweight and minimalistic library is designed to enhance the visual appeal and functionality of your React applications. It provides a curated collection of reusable and customizable components, making it easy to integrate Delta-UI into any React project.

**Key Features**:

-**Light and Dark Mode Ready**: Delta-UI is optimized for both light and dark modes, ensuring an exceptional visual experience for users in any lighting condition.

-**Lightweight and Performant**: With a minimal footprint, Delta-UI prioritizes performance, ensuring quick loading times and smooth interactions for enhanced user satisfaction.

-**Customizable Components**: Each component in Delta-UI is designed to be easily customizable, allowing developers to adapt the library to match the specific look and feel of their application.

-**Responsive Design**: The components in Delta-UI are responsive, ensuring a consistent user experience across various screen sizes and devices.

Whether you're working on a personal project or a professional application, Delta-UI provides the perfect toolkit for developers seeking a lightweight, minimalistic, and mode-flexible React components library that effortlessly elevates the user experience.

### Installation
```
npm i diego-react-delta-ui
```

### Usage
At your index.ts:
```js
import 'diego-react-delta-ui/dist/style.css';
```

At some high point of your application:
```js
import { ThemeProvider } 'diego-react-delta-ui';

const App = () => (
  // theme: 'Dark' | 'Light'
  <ThemeProvider theme={theme}>
    <Main />
  </div>
);
```

And that's it, now just import and use the components:
```js
import { Button } 'diego-react-delta-ui';

const App = () => (
  <div>
    <Button {...props}>Click me</Button>
  </div>
);
```

[Storybook](https://diego-delta-ui.vercel.app/?path=/docs/deltaui-accordion--docs)
