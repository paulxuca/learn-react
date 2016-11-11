export default {
  files: [{
    fileName: 'index.js',
    isEntry: true,
    contents: "import React from 'react';",
  }, {
    fileName: 'index.html',
    isEntry: false,
    contents: `<html>
  <body>
    <div id="app />
  </body>
</html>
    `,
  }],
};
