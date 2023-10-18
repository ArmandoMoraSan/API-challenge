# TestAPIChallenge - Cypress Automation Project

This project provides automation utilities and functions, primarily focusing on interactions with the pet store API and subsequent data analysis.

## Setup

1. **Installation**:
    Install the required project dependencies using:
    ```
    npm install
    ```

## Modules and File Descriptions

1. **package.json**: This file defines the project's npm dependencies and other metadata.

2. **package-lock.json**: A generated file that describes the exact tree that was generated when the project was last installed, ensuring that subsequent installs are identical.

3. **petNamesCount.json**: This file contains a JSON object mapping pet names to their count.

4. **api.js**: This module contains utility functions for interacting with the pet store API. Key functions include:
    - `createNewUser`: Creates a new user in the pet store.
    - `getUserByUserName`: Fetches a user by their username from the pet store.
    - `getPetsByStatus`: Retrieves pets based on their status.
    - `getSoldPets`: Gets a list of pets that have been sold.

5. **petAnalyzer.js**: This module contains the `PetAnalyzer` class, which provides functions to analyze pet data. It includes:
    - `countPetNames`: Counts the occurrences of each pet name.

6. **main.js**: This is the main script of the project. It uses mentioned modules to fetch, analyze, and save data. It comprises:
    - Retrieving sold pets, analyzing their names, and saving the result to `petsNamesCount.json`.
    - Creating a new user, fetching their details, and saving it to `userData.json`.

## Running the Project

Execute the `main.js` script to run the project:

node main.js


## Contributing

Please ensure you adhere to the established coding conventions in the project. Make sure to test any new functionality or changes. Contributions are welcome!
