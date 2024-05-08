function all() {
  alert("you clikcked me");
}

// const MoodContractAddress = 0x5b38da6a701c568545dcfcb03fcb875f56beddc4;
// const MoodContractABI = [
//   {
//     inputs: [],
//     name: "getMood",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "string",
//         name: "_mood",
//         type: "string",
//       },
//     ],
//     name: "setMood",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
// ];

// Currently these two are undefined, we will use Ethers to assign them values
let MoodContract = undefined;
let signer = undefined;

// define a Web3 Provider - this is our connection to the Ethereum Network (Sepolia Testnet) - and it happens through MetaMask.

const provider = new ethers.providers.Web3Provider(window.ethereum, "sepolia");

// Request access to the user's wallet and assign values to MoodContract and signer that were previously set to undefined.

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    MoodContract = new ethers.Contract(
      MoodContractAddress,
      MoodContractABI,
      signer
    );
  });
});

// Now that we have the signer and MoodContract - we can create two functions for calling the two smart contract functions

async function getMood() {
  const mood = await MoodContract.getMood();
  document.getElementById("showMood").innerText = `Your Mood: ${mood}`;
  console.log(mood);
}

async function setMood() {
  // async function setMood(_mood) {
  //   require(_mood.length > 0, "Mood cannot be empty");
  // Rest of the function logic
  const mood = document.getElementById("mood").value;
  await MoodContract.setMood(mood);
}
