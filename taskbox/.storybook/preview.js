/** @type { import('@storybook/react').Preview } */
// import { ThemeProvider } from "styled-components";
// import GlobalStyle from "src/styles/GlobalStyle";

// 어떤 스토리가 선택되었든 간에 GlobalStyle이 적용되도록 해줌!
// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme="default">
//       <GlobalStyle />
//       <Story />
//     </ThemeProvider>
//   ),
// ];

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
