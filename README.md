# delta-ui

Delta-UI is a lightweight and minimalistic React components library designed to provide a seamless user experience. With a focus on simplicity and performance, Delta-UI offers a curated set of reusable and customizable components that can easily be integrated into any React project. The library embraces the principles of dark mode design, ensuring a visually appealing and comfortable interface in low-light conditions.

-**Dark Mode Ready**: Delta-UI is optimized for dark mode, providing a stunning visual experience for users in dimly lit environments.

-**Lightweight and Performant**: With a minimal footprint, Delta-UI prioritizes performance, ensuring quick loading times and smooth interactions for enhanced user satisfaction.

-**Customizable Components**: Each component in Delta-UI is designed to be easily customizable, allowing developers to adapt the library to match the specific look and feel of their application.

-**Responsive Design**: The components in Delta-UI are responsive, ensuring a consistent user experience across various screen sizes and devices.

Whether you're working on a personal project or a professional application, Delta-UI provides an ideal toolkit for developers seeking a lightweight, minimalistic, and dark mode-friendly React components library that effortlessly enhances the user experience.

### Installation
```
npm i diego-react-delta-ui
```

### Usage
At your index.ts:
```js
import 'diego-react-delta-ui/dist/style.css';
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

[Storybook](https://diego-delta-ui.vercel.app/?path=/docs/deltaui-accordion--docs&globals=backgrounds.value:!hex(000000))
