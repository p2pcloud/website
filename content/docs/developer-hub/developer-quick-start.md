---
title: "Developer Quick Start"
description: "Getting Stated with P2P Cloud"
weight: 1010
---



The P2P Cloud broker [smart contract](https://github.com/p2pcloud/protocol/blob/main/contracts/Broker.sol) is the middle man for facilitating the distributions of funds from client to provider.  As of now, the broker contract requires **USDC** on the Avalanche network. 

**Note:** We are still in testnet, so you will need to use the [faucet](/docs/developer-hub/using-the-faucet/) in order to get test tokens needed to interact and boot a server. 

### Before you Start:
Note: when bridging **USDC** over to avalanche you will receive **[USDC.e](https://www.circle.com/blog/understanding-avalanche-usdc-vs.-usdc.e)** which is not accepted in the current implementation of the P2P broker smart contract. You will need to swap **USDC.e** for **USDC**.

To learn how to bridge assets over, [click here](https://support.avax.network/en/articles/6657391-how-to-use-the-avalanche-bridge-core-app-bridge) for more information. 

### 1. Add USDC to P2PCloud Smart contract
To get started, go to the [wallet page](https://app.p2pcloud.io/wallet) to deposit USDC into the [broker.sol](https://github.com/p2pcloud/protocol/blob/main/contracts/Broker.sol) contract.

![deposit_token](/src/assets/deposit_token.png)

Under **Payment,** enter the amount of **USDC** you would like to deposit into the [broker.sol](https://github.com/p2pcloud/protocol/blob/main/contracts/Broker.sol) contract and click "**Deposit**". 

**Note: you will need to sign 2 transactions(wallet approval and deposit funds):**

### 2. Book a VM on P2P Cloud

Head over to the [virtual machine](https://app.p2pcloud.io/vms/) page you will see a list of VMs attached to your wallet. 
![vm_home](/src/assets/vm_home.png)

Click **"+ New VM"** to the left of the refresh button, and you will see a list of VMs currently available:

![select_vm](/src/assets/select_vm.png)

Once you find the VM with your desired specs:
 * Select the VM
 * (optional) Enter the hostname 
 * Click on Create VM

![create_host_name](/src/assets/create_vm_host.png)


Once selected, it will ask you to sign a message using your Metamask wallet.

**Note: Do not close the window or refresh the screen when initializing the attestization process.**


If you want to see a more detailed breakdown of the VM, click on the "Details" drop down arrow.

## 3. Launch it

Once you've booked your server, should see the a webSSH console appear and you are good to start building in your new VM!

![web_ssh](/src/assets/webssh_screen.png)


> Alternatively, you can navigate to the [VMs](https://app.p2pcloud.io/vms/) tab to see your booked VM and access it. All you need to do is click refresh > select your new VM > and click on WebSSH  

## 4. SSH into your VM via WebSSH
At this point, you are now ready to SSH into your VM through your browser

To do so, navigate to the [booked VMs page](https://p2pcloud.io/panel#!/vms) and click on the green **WebSSH** button and begin configuring your server. 

![webssh_button](/src/assets/webssh_button.png)