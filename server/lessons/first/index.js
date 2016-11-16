module.exports = {
  lessonTitle: 'Beginning with React and ES6',
  files: [{
    fileName: 'app.js',
    isEntry: true,
    contents: "import React from 'react';",
  }, {
    fileName: 'index.html',
    isEntry: false,
    contents: `<html>
  <body>
    <div id="app" />
  </body>
</html>
    `,
  }],
  sections: {
    1: {
      title: 'Beginning',
      steps: [1, 2],
    },
  },
  steps: {
    1: {
      instruction: 'import the <code>React</code> library using <b>ES6</b> syntax.',
    },
    2: {
      instruction: 'import the <code>render</code> function from <code>react-dom</code>.',
    },
  },
};
