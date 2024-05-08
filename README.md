# LearnWeb3 First dApp

This is a simple decentralized application (dApp) built using Ethereum smart contracts and HTML/JavaScript for the frontend. The dApp allows users to set and get their mood using a smart contract deployed on the Ethereum blockchain.

## Prerequisites

Before running the application, make sure you have the following installed:

1. [MetaMask](https://metamask.io/) browser extension.
2. [Visual Studio Code](https://code.visualstudio.com/) or any code editor of your choice.
3. Node.js and npm (Node Package Manager).

## Setup Instructions

Follow these steps to set up and run the application:

### 1. Compile the Smart Contract on Remix

1. Open your web browser and go to [Remix](https://remix.ethereum.org/).
2. Paste the provided Solidity smart contract code into the Remix editor.
3. Compile the smart contract using the Solidity compiler available in Remix.
4. Ensure that the contract compiles successfully without any errors.

### 2. Deploy the Smart Contract on a Testnet

1. Connect MetaMask to Remix using the MetaMask extension in your browser.
2. Select the appropriate network (e.g., Rinkeby) in MetaMask.
3. Deploy the smart contract to the selected testnet from Remix.
4. After deployment, copy the deployed contract address.

### 3. Set Up the Frontend

1. Clone this repository to your local machine.
2. Open the project directory in Visual Studio Code.
3. Open the `index.html` file in your code editor.
4. Replace the `MoodContractAddress` variable with the deployed contract address from Remix.
5. Save the changes.

### 4. Install Dependencies

1. Open a terminal in the project directory.
2. Run the following command to install the necessary dependencies:

   ```
   npm install ethers
   ```

### 5. Run the Application

1. In the terminal, run a local server to serve the HTML file. You can use Python's built-in HTTP server or any other server of your choice. For example:

- first install lite server globally to run the web application by using the following command
  `npm install -g lite-server`

  Then run the following command to start the web application

  ```
  lite-server
  ```

2. Open your web browser and navigate to `http://localhost:8000` (or the appropriate address if you used a different port).

### 6. Interact with the dApp

1. Make sure MetaMask is unlocked and connected to the same network used for deployment.
2. You can now set or get your mood using the provided interface in the browser.
3. Click on the "Get Mood" button to retrieve the current mood stored in the smart contract.
4. Enter a new mood in the input field and click on the "Set Mood" button to update the mood in the smart contract.

## Contributing

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests.

---
