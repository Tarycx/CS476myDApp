


let web3;
let tokenContract;
let userAccount; 

// Contract ABI and address
const contractABI = [
  {
    "constant": true,
    "inputs": [{"name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
},
{
    "constant": false,
    "inputs": [
        {"name": "recipient", "type": "address"},
        {"name": "amount", "type": "uint256"}
    ],
    "name": "transfer",
    "outputs": [{"name": "", "type": "bool"}],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
}
];

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';  // Deployed contract address

// Initialize Web3
async function initializeWeb3() {
  if (window.ethereum) {
      try {
          web3 = new Web3(window.ethereum);
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          tokenContract = new web3.eth.Contract(contractABI, contractAddress);
          userAccount = (await web3.eth.getAccounts())[0];
          document.getElementById('WalletAddress').textContent = `Connected: ${userAccount}`;
      } catch (error) {
          console.error("User denied account access", error);
          document.getElementById('feedback').textContent = `Error: ${error.message}`;
      }
  } else {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
  }
}


// Connect wallet (MetaMask)
async function connectWallet() {
  await initializeWeb3();
}

// Get token balance
async function getBalance() {
  if (!userAccount) {
      console.log("MetaMask not connected yet.");
      document.getElementById('balance').textContent = "Please connect MetaMask.";
      return;
  }

  try {
      console.log("Fetching balance for:", userAccount);
      const balance = await tokenContract.methods.balanceOf(userAccount).call();
      const adjustedBalance = web3.utils.fromWei(balance, 'ether');  // Convert to Ether format
      console.log("Fetched balance:", adjustedBalance);  // Log the balance in Ether
      document.getElementById('balance').textContent = `Balance: ${adjustedBalance} MTK`;
  } catch (error) {
      console.error("Error fetching balance:", error);
      document.getElementById('balance').textContent = `Error fetching balance: ${error.message}`;
  }
}


// Transfer tokens
async function transferTokens() {
  const recipient = document.getElementById('recipientAddress').value;  // Ensure this ID matches your HTML
  const amount = document.getElementById('transferAmount').value;  // Ensure this ID matches your HTML
  try {
      await tokenContract.methods.transfer(recipient, web3.utils.toWei(amount, 'ether')).send({ from: userAccount });
      document.getElementById('transactionStatus').textContent = "Transfer Successful!";
  } catch (error) {
      document.getElementById('transactionStatus').textContent = `Error: ${error.message}`;
  }
}