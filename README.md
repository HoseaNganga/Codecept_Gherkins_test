# Automated Testing with CodeceptJS and Puppeteer

This project is an automated testing framework using CodeceptJS with Puppeteer and Gherkin for behavior-driven testing.

## 🚀 Getting Started

Follow the steps below to install and run the project.

📌 Prerequisites
   Ensure you have the following installed:

    - Node.js (v16 or later)
    - npm or yarn
    - Git

## 📥 Installation

1. Clone the Repository:

```bash
git clone https://github.com/HoseaNganga/Codecept_Gherkins_test.git
```

2. Install Dependencies

```bash
npm install
```

   or

```bash
yarn install
```

3. ⚙️ Configuration

Modify the codecept.conf.js file to update any necessary configurations (such as browser settings or test URL).

4. ▶️ Running Tests
To execute the tests, use the following commands:

```bash
npx codeceptjs run --steps
```

5. 🛠 Debugging

To debug tests, use:

```bash
npx codeceptjs run --debug
```

or for interactive debugging run:

```bash
npx codeceptjs run --steps --verbose
```

# ❌ Troubleshooting

If you encounter issues:

Ensure Node.js is installed correctly.

Run npx codeceptjs def to generate step definitions.

Check logs with --debug or --verbose mode.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
