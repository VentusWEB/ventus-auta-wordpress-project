# gatsby-plugin-modal-gallery

A Gatsby Plugin that wraps the [Charts.css](https://chartscss.org/) project for easy use in Gatsby

## Setup

```sh
yarn add gatsby-plugin-modal-gallery
```

Add to your site's `gatsby-config.js`.

```js
module.exports = {
  plugins: [`gatsby-plugin-modal-gallery`],
};
```

## How to use

See the [charts.css README](https://github.com/ChartsCSS/charts.css) for full documentation.

Simple example.

`demo/src/pages/index.js`

```js
import React from "react";

import "./styles.css";

const IndexPage = () => {
  return (
    <main>
      <h1>Index Page</h1>
      <div>
        <table className="charts-css column" id="my-chart">
          <caption> Front End Developer Salary </caption>

          <tbody>
            <tr>
              <td style={{ "--size": "calc( 40 / 100 )" }}> $40K </td>
            </tr>
            <tr>
              <td style={{ "--size": "calc( 60 / 100 )" }}> $60K </td>
            </tr>
            <tr>
              <td style={{ "--size": "calc( 75 / 100 )" }}> $75K </td>
            </tr>
            <tr>
              <td style={{ "--size": "calc( 90 / 100 )" }}> $90K </td>
            </tr>
            <tr>
              <td style={{ "--size": "calc( 100 / 100 )" }}> $100K </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default IndexPage;
```

`demo/src/pages/styles.css`

```css
html,
body {
  font-family: "system-ui";
}

#my-chart.column {
  height: 200px;
  max-width: 300px;
  margin: 0 auto;
}
```
