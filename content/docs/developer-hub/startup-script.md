---
title: "Startup script"
description: "How to inject a startup bash or shell script into your decentralized virtual machine"
weight: 1050
---

P2P Cloud allows clients to configure their server instance by injecting custom scripts that will be initialized once the server boots after encrypting.

## Things To Know
The script will be executed only once on the first boot of the VM. It will be run as the root user from the "/" directory. Remember, by default you will SSH into the VM as the cloud user.

We also recommend either creating a new user or use the built-in user cloud and navigating to its home directory.

Example
```bash
#!/bin/bash
  
USER_HOME=/home/cloud

# Change the current working directory to the user's home directory
cd $USER_HOME

# ...

```

When you get directed to the WebSSH page for your VM, the script might still be running. Be aware of this when interacting with the VM, especially if you expect the script to complete its tasks.

Upon boot, the user-startup script will be placed in the following path:

```bash
/opt/p2pcloud/user_startup.sh
```

## Script Log

The output of the script will be logged to the following file:

```bash
/opt/p2pcloud/user_startup.log
```

You can check this log file to monitor the progress and troubleshoot any issues with the script.

```bash
cat /opt/p2pcloud/user_startup.log
```
## How to Insert Script
Inserting a script is easy. All you need to do is click on the Inject startup bash script box and paste the bash script in the text box(see below).

**Note:** Be sure to delete the placeholder contents in the box before entering in custom script

![script-pic](/src/assets/script-pic.png)

Once you're done, click on **Create VM** and launch your server.

## Example Script
Here is an example script that installs [Auto-GPT](https://github.com/Torantulino/Auto-GPT) on the default cloud profile and it's dependencies on the VM:

```bash
#!/bin/bash
  
# Change the current working directory to the user's home directory
USER_HOME=/home/cloud
cd $USER_HOME
  
# Update and upgrade server
sudo apt update
sudo apt upgrade -y

# Install ufw and allow SSH connections
sudo apt install ufw -y
sudo ufw allow ssh
 
# Install python3 and pip
sudo apt install apt-utils -y
sudo apt install python3 -y
sudo apt install python3-pip -y

# Install Git
sudo apt install git -y

# Clone Auto-GPT repository
git clone https://github.com/Torantulino/Auto-GPT.git 

# Change account privilege 
sudo chown -R cloud:cloud ./Auto-GPT/

#Finish installation
cd Auto-GPT  

# Install Python dependencies
sudo pip3 install -r requirements.txt 
```

After boot, wait 1-3min, navigate to the **Auto-GPT** directory, and run:

```bash
python3 ./scripts/main.py --gpt3only
```

For additional setup instructions, visit the official Auto-GPT repo at [Github](https://github.com/Torantulino/Auto-GPT)

[Click here](https://p2pcloud.io/docs/blog/p2p-vs-golem/) to learn how P2P Cloud is secure compared to other providers such as Golem Network. To learn more about P2P Cloud, visit our [website](https://p2pcloud.io/), follow us on [Twitter](https://twitter.com/p2pcloud_io), or join our [Telegram community](https://t.me/P2Pcloud).

