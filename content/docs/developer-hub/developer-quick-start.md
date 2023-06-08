---
title: "Developer Quick Start"
description: "Getting Stated with P2P Cloud"
weight: 1010
---

### 1. Fund the account
To book a VM through the [marketplace](https://app.p2pcloud.io/), you will need to add funds to your account through our integrated 3rd party payment processor [Stripe](https://stripe.com/). To add funds, navigate to **Account Balance**, where you will see **Add funds with credit card**, or click on your profile in the top right and click on **Add Funds**.

![add_funds](/src/assets/add_funds_v2.png)

Next, you will be directed to the stripe payment portal where you will enter in your credit card information.
![stripe_portal](/src/assets/stripe_portal.png)

> Note: To change the payment amount, click "Change Amount".

After your payment has been processed, close out of the stripe page and head over to the [virtual machine](https://app.p2pcloud.io/vms/) page.

> Note: If you don't see the balance displaying on the top right, simply refresh the page and it should appear.  


### 2. Book a VM on P2P Cloud

On the Virtual machine page, click **"+ New VM"** and you will see a list of VMs currently available.

The page is broken down as follows:
 1. Desired Disk: The minimum disk size for your instance  
 2. Network Configuration: Choose between IPv4 and Network Address Translation(NAT)  
 3. Provider List: Providers filtered using the specs mentioned in the last two points

![select_vm](/src/assets/select_vm_v2.png)


![create_host_name](/src/assets/create_vm_host_v2.png)

> Note: Do not close the window or refresh the screen when initializing the attestation process.

## 3. Launch it

After your VM finished the attestation process, you will be directed to the webSSH console where you can start building in your new VM!

![web_ssh](/src/assets/webssh_screen_v2.png)

## 4. SSH into your VM via WebSSH
At this point, you are now ready to SSH into your VM through your browser.

To do so, navigate to the [Virtual Machine](https://app.p2pcloud.io/vms/) page to see your booked VM. Select your new VM and click on "WebSSH". 

![webssh_button](/src/assets/webssh_button_v2.png)