---
title: "How To Use The Faucet"
description: "How to use the faucet and get test tokens"
weight: 1020
---

P2P Cloud has servers running on the Avalanche Fuji network. The servers are for testing only; there is no guarantee they will be 100%. Use at your own risk, and don’t deploy any production applications. We recommend providers deploy on testnet before launching on mainnet. 

This is an overview of how to get test tokens to understand the process of renting a server, importing your SSH keys, and connecting to your new VPS. 

> Note: these are test tokens on the Avalance Fuji testnet and have no value. You can view the [broker smart contract](https://github.com/p2pcloud/protocol/blob/main/contracts/Broker.sol) and see how it works. 

You will need a [Metamask wallet](https://metamask.io/) and add both Avalance mainnet and Fuji as a new network. Fortunately, Pocket Network offers accessible [RPC endpoints](https://docs.pokt.network/use/public-rpc/) that you can use to access both networks.  

### Using the Faucet:

Operating the faucet is simple. After you have Metamask installed and both networks added, all you will need to do is:
> * Change your Metamask network to Avalance Fuji
> * Copy your wallet’s address 
> * Access our bot via [Telegram](https://t.me/p2pcloud_trial_bot) 
> * Type: ```/start```  
> * Paste your wallet’s address
> * Wait for the TX confirmation

**The faucet only sends five tokens at a time, so you may have to request it multiple times based on the servers listed in the [VM marketplace](https://app.p2pcloud.io/vms/new).**

Once you have the tokens, you can get a VM on testnet. Read our [quick start doc](/docs/developer-hub/developer-quick-start/) if you’re unfamiliar with getting a VM.    
