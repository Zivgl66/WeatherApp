
# Weather App

## Description

This is a mobile application designed to help you find out what's the weather around the world! 
This projet is part of an assignment given to me. I used React Native , Expo Go and JS to tackle it.
Using the WeatherApi.com Free API I am getting real time information about the weather and displaying it to the user aswell as PEXELS API for images from the cities.

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Tests](#tests)
- [Contribute](#contribute)
  

## Installation

First, clone this repository:

```
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

```

## Usage

### In the Home screen you can see your current locations weather. 
<img src="https://github.com/Zivgl66/WeatherApp/blob/main/assets/screenshots/5.png" height="60%" width="60%" >


### Type the city you wish to get the weather for in the search tab.
<img src="https://github.com/Zivgl66/WeatherApp/blob/main/assets/screenshots/2.png" height="60%" width="60%" >

### You can sort the search results by alphabetical order or by distance to a city of your choice.
<img src="https://github.com/Zivgl66/WeatherApp/blob/main/assets/screenshots/4.png" height="50%" width="60%" >

### Click on the city you want, and get the latest weather updates
<img src="https://github.com/Zivgl66/WeatherApp/blob/main/assets/screenshots/3.png" height="60%" width="60%" >




## 🤝 Credits

Third party libraries:
- **"@react-native-async-storage/async-storage": "1.17.11",**
- "axios": "^1.4.0",
- "expo": "^48.0.7",
- "lottie-react-native": "5.1.4",
- "react-native-bouncy-checkbox": "^3.0.7",
- "react-native-heroicons": "^3.2.0",
- "react-native-switch": "^1.5.1",
- "react-native-svg": "13.4.0",


 **WEATHERAPI & PEXELSAPI**
 

## License

🏆 MIT License

Copyright (c) [2023] [Ziv Gliser]

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

![badmath](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![badmath](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![badmath](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![badmath](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)



## Tests

This project includes tests to ensure the correctness and functionality of its components. These tests are written using Jest and React Native Testing Library.

### Running Tests
After you run the project localy you can access the tests:
```
npm test
```

I made an example test for the 'WeatherBox' Component:
```
// WeatherBox.test.js
import React from "react";
import { render } from "@testing-library/react-native";
import WeatherBox from "./weatherBox.jsx";

// This test checks if the component renders the props correctly
describe("WeatherBox component", () => {
  test("renders weather information correctly", () => {
    const condition = require("../../assets/Animations/Animation - 1701969736685.json");
    const day = "Monday";
    const degree = 25;

    const { getByText } = render(
      <WeatherBox condition={condition} day={day} degree={degree} />
    );

    expect(getByText(day)).toBeTruthy();
    expect(getByText(`${degree}°`)).toBeTruthy();
  });
});
```

### This test would check if the WeatherBox component, when provided with specific props (condition, day, degree), correctly renders the day and degree values within its content.


## Contribute

Contributions, issues, and feature requests are welcome!

Give a ⭐️ if you like this project!

