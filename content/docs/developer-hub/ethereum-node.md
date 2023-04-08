---
title: "Running Ethereum Node"
description: "How to run an Ethereum node on a distributed cloud."
weight: 1040
---

## 1. Book a VM and SSH into it

As described in [Buy and launch a VM](/docs/developer-hub/developer-quick-start/) guide

## 2. Install docker
```bash
apt update && apt install -y docker-compose docker.io
```

## 3. Set variables
If you have a VM behind NAT: Fill the `FORWARDED_PORT_1`, `FORWARDED_PORT_2` and `FORWARDED_PORT_3` with the ports you find on VMs page.

If you have a static IP: Fill the `FORWARDED_PORT_1`, `FORWARDED_PORT_2` and `FORWARDED_PORT_3` with the ports 30303, 12000 and 13000 respectively.

```bash
# ! CHANGE THIS TO YOUR OWN PORTS !
export FORWARDED_PORT_1="50433" 
export FORWARDED_PORT_2="50434"
export FORWARDED_PORT_3="50435"
```

# 4. Launch a node

```bash
cat &lt;&lt;EOT &gt;&gt; docker-compose.yml
version: "3.8"

services:
  geth:
    image: ethereum/client-go
    pull_policy: always
    container_name: geth
    restart: unless-stopped
    ports:
      - 127.0.0.1:8545:8545
      - $FORWARDED_PORT_1:$FORWARDED_PORT_1
      - $FORWARDED_PORT_1:$FORWARDED_PORT_1/udp
    volumes:
      - $DATA_FOLDER/geth/:/root/.ethereum
    stop_signal: SIGINT
    stop_grace_period: 2m
    healthcheck:
      test: [ "CMD-SHELL", "geth attach --exec eth.blockNumber" ]
      interval: 10s
      timeout: 5s
      retries: 5
    command:
      - --http
      - --http.api=eth,net,web3,engine,admin
      - --http.addr=0.0.0.0
      - --http.vhosts=*
      - --http.corsdomain=*
      - --ws
      - --ws.origins=*
      - --ws.addr=0.0.0.0
      - --ws.api=eth,net,web3
      - --graphql
      - --graphql.corsdomain=*
      - --graphql.vhosts=*
      - --authrpc.addr=0.0.0.0
      - --authrpc.vhosts=*
      - --authrpc.jwtsecret=/root/.ethereum/jwt.hex
      - --authrpc.port=8551
      - --txlookuplimit=0
      - --port=$FORWARDED_PORT_1
  prysm:
    image: gcr.io/prysmaticlabs/prysm/beacon-chain
    pull_policy: always
    container_name: beacon
    restart: unless-stopped
    stop_grace_period: 2m
    volumes:
      - $DATA_FOLDER/prysm/:/data
      - $DATA_FOLDER/geth/:/geth
    depends_on:
      geth:
        condition: service_healthy
    ports:
        - $FORWARDED_PORT_2:$FORWARDED_PORT_2
        - $FORWARDED_PORT_3:$FORWARDED_PORT_3/udp
    command:
      - --accept-terms-of-use
      - --datadir=/data
      - --disable-monitoring
      - --rpc-host=0.0.0.0
      - --execution-endpoint=http://geth:8551
      - --jwt-secret=/geth/jwt.hex
      - --rpc-host=0.0.0.0
      - --rpc-port=4000
      - --grpc-gateway-corsdomain=*
      - --grpc-gateway-host=0.0.0.0
      - --grpc-gateway-port=3500
      - --checkpoint-sync-url=https://beaconstate-mainnet.chainsafe.io
      - --genesis-beacon-api-url=https://beaconstate-mainnet.chainsafe.io
      - --p2p-tcp-port=$FORWARDED_PORT_2
      - --p2p-udp-port=$FORWARDED_PORT_3
EOT
```

And start it
```bash
docker-compose up -d
```

# 5. Wait for the node to sync

It can take up to 10 hours. You can check the progress with:

Check peer count. It be greater than 0 a few miutes and at least 10 after ~1 hour.
```bash
echo "net.peerCount: $(docker exec geth geth attach --exec net.peerCount)"
```

Check sync progress in percents
```bash
echo "Sync progress: $(docker exec geth geth attach --exec 'Math.round(eth.syncing.currentBlock/eth.syncing.highestBlock*100*100)/100')%"
```

Or watch it live in percents:
```bash
watch -n0.5 docker exec geth geth attach --exec 'Math.round\(eth.syncing.currentBlock/eth.syncing.highestBlock*100*100\)/100'
```

## 6. Expose the node with reverse-proxy
I like to use Cloudflare tunnel instead of reverse-proxy. 
- It does not require you to expose your dedicated IPV4 or even to have one
- Enables zero-config load balancing
- Speeds up your application using optimized routes
- 100% free
- but 100% centralized (as well as the whole public IP system)

Here is a great guide on that: [Overcoming NAT](/docs/get_started/overcoming-nat). Just make sure to expose port `127.0.0.1:8545` instead of `127.0.0.1:12345` as described.
