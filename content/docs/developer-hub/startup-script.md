---
title: "Startup script"
description: "How to inject a startup bash or shell script into your decentralized virtual machine"
weight: 1050
---

This document describes how to use the user startup script feature in the P2P Cloud project. This feature allows you to inject a script that will be executed on the first boot of a virtual machine (VM) to perform custom tasks such as installing software or configuring the system.

## Script Location and Execution

The user startup script will be placed in the following path: `/opt/p2pcloud/user_startup.sh`

The script will be executed only once on the first boot of the VM. It will be run as the `root` user from the `/` directory. Keep in mind that by default, you will SSH into the VM as the `cloud` user, so please be mindful of that.

## Log File

The output of the script will be logged to the following file: `/opt/p2pcloud/user_startup.log`

You can check this log file to monitor the progress and troubleshoot any issues with the script. `cat /opt/p2pcloud/user_startup.log` would work for this.

## Running Scripts in the Background

When you SSH into the VM, the script might still be running. Be aware of this when interacting with the VM, especially if you are expecting the script to have completed its tasks.

## Example Script

Here is an example script that installs Docker and runs a container on the VM:

``````bash
#!/bin/bash
set -ex
export DEBIAN_FRONTEND=noninteractive

# install docker
apt update
apt install -y docker.io

# setup docker for non-root
sudo usermod -aG docker cloud
newgrp docker

# run an example container
docker run -d --name redis redis
```