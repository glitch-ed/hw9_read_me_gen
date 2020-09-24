// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents (Optional)

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [License](#license)
* [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## Contributing

People who I colaborated with in the development of this project:
${data.colaborators}

## Testing
${data.test}

## License

${data.license}

## Questions

Below is a link to my GitHub profile:

www.github.com/${data.git}

If you have any questions, please feel free to email at :
${data.email}

`;
}

module.exports = generateMarkdown;
