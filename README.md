# Handwritten Recipe Text Enhancement Project

![AWS](https://img.shields.io/badge/AWS-Textract-yellow?logo=amazon-aws&style=flat)
![OpenAI](https://img.shields.io/badge/OpenAI-API-blue?logo=openai&style=flat)

This project, developed in Node.js, processes images of handwritten recipes. It utilizes Amazon Textract's Optical Character Recognition (OCR) to extract text from images and then enhances this text using the OpenAI API to correct any errors or omissions.

## Prerequisites

- AWS account
- Proper permissions to execute Textract
- OpenAI API key

## Examples

- Look at image in /images path and the text result in results path

## Local Execution

To run the project locally, follow these steps:

1. Clone the repository.

2. Install dependencies using npm:

```bash
npm install
```

3. Configure your AWS credentials in the local environment.

4. Add your OpenAI API key as an environment variable.

5. Run the command:
```bash
node local.js
```

This will execute the process of extracting text from the recipe image using AWS Textract and enhancing the result with the OpenAI API. The improved text will be saved in a TXT file.

## Contribution

Feel free to contribute, open issues, or suggest improvements to this project. Any collaboration is welcome!


