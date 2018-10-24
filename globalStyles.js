import { injectGlobal } from 'styled-components';
import variables from './common/variables';

function fontFace(name, src, fontWeight = 'normal', fontStyle = 'normal') {
  return `
    @font-face{
      font-family: "${name}";
      src: url('/static/fonts/${src}.woff') format("woff");
      src: url('/static/fonts/${src}.woff') format("woff"),
        url('/static/fonts/${src}.ttf') format("truetype"),
      font-style: ${fontStyle};
      font-weight: ${fontWeight};
    }
  `;
}

injectGlobal`
  ${fontFace('cerebri-sans', 'cerebri-sans/CerebriSans-Medium', 500)}
  ${fontFace('cerebri-sans', 'cerebri-sans/CerebriSans-Regular', 400)}

  html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
    background-color: ${variables.colors.primary};
    font-family: ${variables.font};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

   .headroom {
    z-index: 999 !important;
  }
`;
