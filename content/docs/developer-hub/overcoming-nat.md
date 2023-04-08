---
title: "Overcoming NAT"
description: "How to run an Ethereum node on a distributed cloud."
weight: 1030
---

## Do I need this?
Only if you booked a VM without a dedicated IPV4 (NAT) on p2pcloud.

## Using Cloudflare tunnels

### Create a tunnel

Cloudflare is a fast and free way to expose your web service without having a dedicated IPV4.

Open [https://one.dash.cloudflare.com/](https://one.dash.cloudflare.com/). Login or register. Then Navigate Acess->Tunnels. 

![Cloudflare tunnels menu](/imgs/docs/guides/overcoming-nat/tunnels_menu.png)

Click "Create tunnel"

![Cloudflare create tunnel](/imgs/docs/guides/overcoming-nat/create_tunnel.png)

Name it

![name the tunnel](/imgs/docs/guides/overcoming-nat/name.png)

### Launch the tunnel on your VM

Select docker and copy your launch command

![docker launch cloudflare tunnel](/imgs/docs/guides/overcoming-nat/docker_command.png)

If you don't have docker installed, just type `apt update && apt install -y docker.io`.

Copy your launch command, and add `--net=host -d --name cloudflared` right after `docker run`. You will have something like that:

```
docker run --net=host -d --name cloudflared cloudflare/cloudflared:latest tunnel --no-autoupdate run --token [your token here]
```

Check logs

```bash
docker logs cloudflared
```

It should report successful connections

![cloudflared logs](/imgs/docs/guides/overcoming-nat/logs.png)


### Launch example service
```bash
docker run -d --name app -p 127.0.0.1:12345:80 strm/helloworld-http:latest
```

### Connect the service to your domain on Cloudflare

Click "next" and use any subdomain you want. Use `127.0.0.1:12345` as an endpoint, that's where your container `example` listening.

![cloudflared tunnel hostname setup](/imgs/docs/guides/overcoming-nat/hostname.png)

That's it! Here is your app served on cloudflare without any port forwarding or dedicated IPs:

![browser with app running](/imgs/docs/guides/overcoming-nat/browser.png)

### Optional: Load balancing and high availability

You can run the same 2 containers `app` and `cloudflared` on another VM and get round-robin load balancing and high availability. 

![browser with app running](/imgs/docs/guides/overcoming-nat/lb.png)

Try restarting `cloudflared` on both servers if load balancing is not working right away.