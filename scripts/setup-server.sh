#!/bin/bash
sudo apt update && sudo apt upgrade -y
curl -fsSL https://get.docker.com | sudo sh
sudo usermod -aG docker $USER
sudo apt install -y docker-compose-plugin git
sudo mkdir -p /opt/eshop
sudo chown $USER:$USER /opt/eshop
cd /opt/eshop
git clone https://github.com/YOUR_USERNAME/eshop.git .
cp .env.example .env
chmod +x ssl/generate.sh
./ssl/generate.sh
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable
echo "✅ Server Setup Complete!"
