import React from "react";
import Web3 from "web3";

// const onCLick = async () => {
//   const exampleMessage = "Example `personal_sign` message";
//   try {
//     const from = accounts[0];
//     const msg = `0x${Buffer.from(exampleMessage, "utf8").toString("hex")}`;
//     const sign = await ethereum.request({
//       method: "personal_sign",
//       params: [msg, from, "Example password"],
//     });
//     personalSignResult.innerHTML = sign;
//     personalSignVerify.disabled = false;
//   } catch (err) {
//     console.error(err);
//     personalSign.innerHTML = `Error: ${err.message}`;
//   }
// };

const clickMe = async () => {
  const web3 = await getWeb3();
  const walletAddress = "0x735f76781C9a9eDaCCCeca78DB5013297a199CAA";
  await web3.eth.personal.sign("Hello", walletAddress, "");
  //   console.info("Hello");
  //   const accounts = await web3.eth.getAccounts();

  //   console.info(accounts); // Wallet address
};
const getWeb3 = async () => {
  new Promise((resolve, reject) => {
    window.addEventListener("click", async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.web3.currentProvider);
        try {
          await window.ethereum.enable();
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      } else if (window.web3) {
        const web3 = window.web3;
        resolve(web3);
      } else {
        const provider = new Web3.providers.HttpProvider(
          "http://127.0.0.1:8545"
        );
        const web3 = new Web3(provider);
        resolve(web3);
      }
    });
  });
};

export default function Comp() {
  return (
    <>
      <div>
        <button onClick={clickMe}>Button1</button>
      </div>
    </>
  );
}
