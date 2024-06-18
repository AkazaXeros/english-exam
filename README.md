# Exam Application

This project is a React-based application designed to provide a series of questions to users, allowing them to assess their English knowledge. The application includes functionality for tracking user mistakes, sending reports via email using EmailJS, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Copyright](#copyright)
- [Contributing](#contributing)

## Features

- Present users with a series of questions.
- Track and log user mistakes.
- Send reports of user mistakes via email.
- Conditional rendering of text-based questions.
- Responsive design.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:AkazaXeros/english-exam.git
   cd english-exam
   ```
2. **Install dependencies:** 

    ```bash
    npm install
    ```
3.  **Start the development server:** 

    ```bash
    npm run dev
    ```  
The application will be available at http://localhost:3000.

## Usage

Running the Application

1. **To run the application, use:**

    ```bash
    npm run dev
    ```

Building the Application

1. **To build the application for production, use:**

    ```bash
    npm run build
    ```

## Environment Variables

To configure the application, set the following environment variables in a `.env` file in the root directory of your project:

```plaintext
# .env
VITE_SERVICE_ID=The service ID provided by EmailJS.
VITE_TEMPLATE_ID=The template ID for the email template you are using.
VITE_PUBLIC_KEY=Your public key from EmailJS.
```

## Copyright

© 2024 William Gomez

This project was completed on June 17th, 2024. All rights reserved.

## Contributing

This project is open-source and welcomes contributions from other developers.
If you have suggestions or improvements, please feel free to submit a pull request or open an issue.
Your contributions can help make this project even better!