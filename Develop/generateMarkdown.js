// Function to return a license badge based on the license
function renderLicenseBadge(license) {
    if (!license) {
        return '';
    }
    const licenseBadges = {
        'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
        'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
        'GPL 3.0': 'https://img.shields.io/badge/License-GPL%20v3-blue.svg'
    };
    return licenseBadges[license] || '';
}

// Function to return the license link
function renderLicenseLink(license) {
    if (!license) {
        return '';
    }
    const licenseLinks = {
        'MIT': 'https://opensource.org/licenses/MIT',
        'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
        'GPL 3.0': 'https://opensource.org/licenses/GPL-3.0'
    };
    return licenseLinks[license] || '';
}

// Function to return the license section of README
function renderLicenseSection(license) {
    if (!license) {
        return '';
    }
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);
    return `
## License
![License Badge](${badge})
This project is licensed under the ${license} License. See the [LICENSE](${link}) for more details.
    `;
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

${renderLicenseSection(data.license)}

## Description
${data.description}

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
\`\`\`
${data.usage}
\`\`\`

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}) or visit my GitHub profile [${data.username}](https://github.com/${data.username}).
    `;
}

module.exports = generateMarkdown;
