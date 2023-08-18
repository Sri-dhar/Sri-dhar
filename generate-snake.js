const fs = require('fs');

const svgContent = `
<!-- SVG content here -->
`;

fs.writeFileSync('dist/github-contribution-grid-snake2.svg', svgContent);
