---
title: "Developer Quick Start"
description: "Getting Stated with P2P Cloud"
weight: 1010
---

### 1. Fund the account
To get started, go to the [wallet page](https://app.p2pcloud.io/wallet) and click on **Add Funds**: 

![add_funds](/src/assets/add_funds.png)

Next, you will be directed to the stripe payment portal where you will enter in your credit card information.
![stripe_portal](/src/assets/stripe_portal.png)

> Note: To change the payment amount, click "Change Amount".

### 2. Book a VM on P2P Cloud

After your payment has been processed, close out of the [stripe](https://stripe.com) page and head over to the [virtual machine](https://app.p2pcloud.io/vms/) page. 
![vm_home](/src/assets/vm_home.png)

> Note: Here you can see a list of VMs that has already been booked by this account that are active(if applicable).  

Next, click **"+ New VM"** and you will see a list of VMs currently available:

![select_vm](/src/assets/select_vm.png)

Once you find the VM with your desired specs:
 * Select the VM
 * (optional) Enter the hostname 
 * Click on Create VM

![create_host_name](/src/assets/create_vm_host.png)

> Note: Do not close the window or refresh the screen when initializing the attestation process.

## 3. Launch it

After your VM finished the attestation process, you will be directed to the webSSH console where you can start building in your new VM!

![web_ssh](/src/assets/webssh_screen.png)

## 4. SSH into your VM via WebSSH
At this point, you are now ready to SSH into your VM through your browser.

To do so, navigate to the [Virtual Machine](https://app.p2pcloud.io/vms/) page to see your booked VMs. All you need to do is click refresh > select a booked VM > and click on "WebSSH". 

![webssh_button](/src/assets/webssh_button.png)