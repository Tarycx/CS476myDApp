

/*


const { ethers } = require("hardhat");

async function main() {
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; //deployed address
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.attach(contractAddress);
    const [deployer, acc1, acc2] = await ethers.getSigners();

    //Get deployer's balance
    const deployerBalance = await myToken.balanceOf(deployer.address);
    console.log("Deployer's balance:", ethers.utils.formatEther(deployerBalance), "MAT");


    //Send tokens to acc1
    const amountToSend = ethers.utils.parseEther("100");
    const transferTx = await myToken.transfer(acc1.address, amountToSend);
    await transferTx.wait(); // Wait for the transaction to be mined
    console.log(`Transferred ${ethers.utils.formatEther(amountToSend)} MAT to ${acc1.address}`);


    //Get acc1's balance
    const acc1Balance = await myToken.balanceOf(acc1.address);
    console.log("Account 1's balance:", ethers.utils.formatEther(acc1Balance), "MAT");

    //Get balance of another account using getBalance function
    const acc2Balance = await myToken.getBalance(acc2.address);
    console.log("Account 2's balance:", ethers.utils.formatEther(acc2Balance), "MAT");


    
    //Transfer tokens from deployer to acc2
    const amountToTransfer = ethers.utils.parseEther("50");
    const transferToAcc2Tx = await myToken.transfer(acc2.address, amountToTransfer);
    await transferToAcc2Tx.wait(); // Wait for the transaction to be mined
    console.log(`Transferred ${ethers.utils.formatEther(amountToTransfer)} MAT to ${acc2.address}`);

    //Check acc2's balance after transfer
    const acc2BalanceAfter = await myToken.balanceOf(acc2.address);
    console.log("Account 2's balance after transfer:", ethers.utils.formatEther(acc2BalanceAfter), "MAT");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});   


*/
