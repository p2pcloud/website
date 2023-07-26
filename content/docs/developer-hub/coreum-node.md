---
title: "Running Coreum Full Node"
description: "Run a Coreum node under 5 min."
weight: 1040
---

### Overview 

Coreum is one of the leading enterprise-grade blockchains geared towards making decentralized applications compliant with ISO20022 compatibility, IBC interoperability, and [Smart Tokens](https://www.coreum.com/smart-tokens). P2P Cloud is a decentralized marketplace that bridges the gap of affordability and reliability by offering encrypted virtual machines(VMs) for less than a third of the cost compared to the top 3(AWS, GCP, Azure), keeping the web3 ecosystem secure and decentralized. 

This article will show you how to make a Coreum full node on P2P Cloud. 

### Requirement:

Mainnet:

| Node Type | Cores | RAM | Storage | Internet Connection |

| --------- | ----- | ---- | --------- | ------------------- |

| Validator | 8 | 64GB | 500GB-2TB | 100+ MBPS |

| Full | 4 | 32GB | 2TB | 100+ MBPS |

| Default | 4 | 32GB | 1TB | 100+ MBPS |

  

### Testnet

  

|Node Type|Cores|RAM|Storage|Internet Connection|

|---|---|---|---|---|

|Validator|2|16GB|500GB|100+ MBPS|

|Full|2|16GB|500GB|100+ MBPS|

|Default|2|16GB|500GB|100+ MBPS|

  

### Before you start:

Before you get started spinning up a Coreum full node, we encourage you to view our developer quick start [guide](https://p2pcloud.io/docs/developer-hub/developer-quick-start/) on how to book a VM on the P2P Cloud marketplace.  

  

We also offer $50 credits to help you get started with a VM. To learn how, join our [Telegram community](http://t.me/p2pcloud) and a team member will show you how


### Utility requirements:

Assuming you are starting from 0, you will need to install the following dependencies:

- crudini

- jq

- tar

  

You can install them by running the following command:

```bash

sudo apt-get update && sudo apt-get install -y crudini jq tar

```

Store Cored variables in **.profile**:

```bash 

cd ~ && vi .profile

```

Paste the following at the bottom of the file.

```bash

ulimit -Sn 65536

  

COREUM_CHAIN_ID="coreum-testnet-1"

COREUM_DENOM="utestcore"

COREUM_NODE="https://full-node.testnet-1.coreum.dev:26657"

COREUM_COSMOVISOR_VERSION="v1.3.0"

COREUM_VERSION="v1.0.0"

UPGRADE_VERSION=“v1”

  

COREUM_CHAIN_ID_ARGS="--chain-id=$COREUM_CHAIN_ID"

COREUM_NODE_ARGS="--node=$COREUM_NODE"

  

COREUM_HOME=$HOME/.core/"$COREUM_CHAIN_ID"

  

COREUM_BINARY_NAME=$(arch | sed s/aarch64/cored-linux-arm64/ | sed s/x86_64/cored-linux-amd64/)

COSMOVISOR_TAR_NAME=cosmovisor-$COREUM_COSMOVISOR_VERSION-linux-$(arch | sed s/aarch64/arm64/ | sed s/x86_64/amd64/).tar.gz

  

  

if [ "$UPGRADE_VERSION" == "genesis" ]

  then

  export DESTINATION=$COREUM_HOME/cosmovisor/genesis/bin

else

  mkdir -p $COREUM_HOME/cosmovisor/upgrades/$UPGRADE_VERSION/bin

  export DESTINATION=$COREUM_HOME/cosmovisor/upgrades/$UPGRADE_VERSION/bin

  ln -s $COREUM_HOME/cosmovisor/upgrades/$UPGRADE_VERSION $COREUM_HOME/cosmovisor/current

fi

mv $COREUM_BINARY_NAME $DESTINATION/cored

  

export PATH=$PATH:$COREUM_HOME/bin

export PATH=$PATH:$DESTINATION

export DAEMON_HOME="$COREUM_HOME/"

export DAEMON_NAME="cored"

  

MONIKER="test-node"

  

COREUM_NODE_CONFIG=$COREUM_HOME/config/config.toml

COREUM_EXTERNAL_IP=172.109.187.97:50600

  

COREUM_APP_CONFIG=$COREUM_HOME/config/app.toml

COREUM_NODE_CONFIG=$COREUM_HOME/config/config.toml

  

export COREUM_STATE_SYNC_SERVERS="https://full-node-eris.testnet-1.coreum.dev:26657,https://full-node-pluto.testnet-1.coreum.dev:26657"

```

Once you save the file, run the following:

```bash

source ~/.profile

```

### Create DIR:

```bash

mkdir -p $COREUM_HOME/bin $COREUM_HOME/cosmovisor/genesis/bin $COREUM_HOME/cosmovisor/upgrades $COREUM_HOME/data

```

### Download and Install Executable 

```bash

curl -LO https://github.com/CoreumFoundation/coreum/releases/download/$COREUM_VERSION/$COREUM_BINARY_NAME && chmod +x ./cored-linux-amd64 && curl -LOf https://github.com/cosmos/cosmos-sdk/releases/download/cosmovisor%2F$COREUM_COSMOVISOR_VERSION/$COSMOVISOR_TAR_NAME && mkdir cosmovisor-binaries && tar -xvf "$COSMOVISOR_TAR_NAME" -C cosmovisor-binaries && mv "cosmovisor-binaries/cosmovisor" $COREUM_HOME/bin/cosmovisor && rm "$COSMOVISOR_TAR_NAME" && rm -r cosmovisor-binaries

```

After it's downloaded, rerun the source command to apply the changes:  

```bash

source ~/.profile

```

### Verify installation:

Let's make sure we successfully installed Cored and Cosmovisor by verifying the current version:

```bash

cosmovisor version && cored version

```

### Create Node configuration file:

Initialize the node configuration file with the following command:

```bash

cored init $MONIKER $COREUM_CHAIN_ID_ARGS

```

### Download trusted block hash and height:

```bash

TRUSTED_BLOCK_DETAILS=$(curl ${COREUM_STATE_SYNC_SERVERS#*,}/block | jq -r '.result.block.header.height + "\n" + .result.block_id.hash') &&

TRUSTED_BLOCK_HEIGHT=$(echo $TRUSTED_BLOCK_DETAILS | cut -d$' ' -f1) &&

TRUSTED_BLOCK_HASH=$(echo $TRUSTED_BLOCK_DETAILS | cut -d$' ' -f2)

```

Check the block hash and height: 

```bash

echo "height:$TRUSTED_BLOCK_HEIGHT, hash:$TRUSTED_BLOCK_HASH"

```

State sync:

``` bash

crudini --set $COREUM_NODE_CONFIG statesync enable true &&

crudini --set $COREUM_NODE_CONFIG statesync rpc_servers "\"$COREUM_STATE_SYNC_SERVERS\"" &&

crudini --set $COREUM_NODE_CONFIG statesync trust_height $TRUSTED_BLOCK_HEIGHT &&

crudini --set $COREUM_NODE_CONFIG statesync trust_hash "\"$TRUSTED_BLOCK_HASH\""

```

### Let er'run

To start running your full node, all you need to do is run the following:

```bash

cosmovisor run start $COREUM_CHAIN_ID_ARGS

```
