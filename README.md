# 🛒 E-Shop - Production E-Commerce API

## Project Overview
Complete e-commerce platform with Node.js, PostgreSQL, Redis, and RabbitMQ.

## Tech Stack
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **Cache**: Redis  
- **Queue**: RabbitMQ
- **Container**: Docker
- **Monitoring**: Prometheus + Grafana

## Quick Start
```bash
# Development
docker compose -f docker-compose.dev.yml up -d
curl http://localhost:3000/health

# Production
docker compose up -d
curl https://localhost/health
API Endpoints
MethodEndpointDescription
GET/healthHealth check
GET/api/productsGet all products
GET/api/products/:idGet single product
POST/api/ordersCreate order
GET/api/orders/:idGet order
Branch Strategy
main → Production

feature/developer-setup → Application Code

feature/devops-production → Production Setup

Team
Developer: [Your Name]

DevOps: [DevOps Engineer]

Deployment
bash
# Server Setup
ssh ubuntu@192.168.1.100
cd /opt/eshop
docker compose up -d

# Verify
curl https://localhost/health
Monitoring
Grafana: http://localhost:3001

Prometheus: http://localhost:9090

RabbitMQ UI: http://localhost:15672

🚀 Production Ready
