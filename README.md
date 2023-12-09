
# Weather App

## Description

This is a mobile application designed to help you find out what's the weather around the world! 
This projet is part of an assignment given to me. I used React Native , Expo Go and JS to tackle it.
Using the WeatherApi.com Free API I am getting real time information about the weather and displaying it to the user.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
1. Download the zip file of the code to your local computer.
2. Open the code with VS Code.
3. run 'npm i' in the terminal to install all the projects dependencies.
4. run "npx expo start". This will start the project. (I ran it with an emulator of Android using Android Studio)
5. check out the App!

## Installation

First, clone this repository:

<!-- start:code block -->
# Clone this repository
git clone https://github.com/zivgl66/WeatherApp.git
cd WeatherApp

# Install dependencies
npm install

# Make an .env file
API_KEY=f0561c9a3a904d9caa211030222304
PEXEL_API_KEY=0PoyvD1Cg92r55XokLJytozyIbFADiEWPS9Q82HvPT0mEdAugcBBWaM7

# Run the app
npx expo start

# Open with Android studio emulator or run on web.

<!-- end:code block -->

## Usage

In the Home screen you can see your current locations weather. 
Type the city you wish to get the weather for in the search tab.
You can sort the search results by alphabetical order or by distance to a city of your choice.

To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ```md
    ![alt text](assets/images/screenshot.png)
    ```

## Credits

Third party libraries:
"@react-native-async-storage/async-storage": "1.17.11",
"axios": "^1.4.0",
"expo": "^48.0.7",
"lottie-react-native": "5.1.4",
"react-native-bouncy-checkbox": "^3.0.7",
"react-native-heroicons": "^3.2.0",
"react-native-switch": "^1.5.1",
"react-native-svg": "13.4.0",







Search Functionality allows you to search the weather by city (Not Country - weather api doesnt have that functionality, can be solved by using a local list of cities and countries).

## License

🏆 MIT License

Copyright (c) [2013] [Ziv Gliser]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)


## Features

*Check Weather around the world.
*Sort places by distnace.
*WeatherAPI data used.

## How to Contribute

Contact me for any questions or if you want to contribute to this project!

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them here.
