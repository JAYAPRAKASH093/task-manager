📌 Task Manager Application (DevOps Project)
🚀 Project Overview

This is a Task Manager Web Application built using HTML, CSS, and JavaScript, designed to manage daily tasks with features like:

Add and delete tasks

Mark tasks as completed

Filter tasks by priority

Persistent storage using browser localStorage

This project is extended with a complete DevOps lifecycle, including:

Git version control

Docker containerization

CI/CD using GitHub Actions

Deployment on AWS EC2

Monitoring using Prometheus and Grafana

🛠️ Prerequisites

Before running the project, ensure you have:

🔹 Local Development

Node.js (v16 or above)

npm (comes with Node)

Git installed

🔹 DevOps / Deployment

Docker installed

AWS account (for EC2 deployment)

GitHub account (for CI/CD)

⚙️ Setup Instructions
🔹 1. Clone the Repository
git clone https://github.com/<your-username>/task-manager-devops.git
cd task-manager-devops
🔹 2. Install Dependencies (for testing)
npm install
🔹 3. Run Tests
npm test
🐳 Docker Setup
🔹 Build Docker Image
docker build -t task-manager .
🔹 Run Docker Container
docker run -d -p 80:80 task-manager
🌍 Access Application
http://localhost
☁️ AWS Deployment (EC2)
🔹 Steps

Launch EC2 instance (Ubuntu)

Connect via SSH:

ssh -i <key.pem> ubuntu@<public-ip>

Install Docker:

sudo apt update
sudo apt install docker.io -y

Clone project and deploy:

git clone <repo-url>
cd task-manager-devops
docker build -t task-manager .
docker run -d -p 80:80 task-manager
🌍 Access Live App
http://<your-public-ip>
🔄 CI/CD Pipeline (GitHub Actions)
🔹 Features

Runs on push and pull requests

Installs dependencies

Runs tests (Jest)

Builds Docker image

🔹 Workflow Location
.github/workflows/ci.yml
📊 Monitoring Setup
🔹 Prometheus
docker run -d \
  --name prometheus \
  -p 9090:9090 \
  -v $(pwd)/prometheus.yml:/etc/prometheus/prometheus.yml \
  prom/prometheus

Access:

http://<public-ip>:9090
🔹 Grafana
docker run -d \
  --name grafana \
  -p 3000:3000 \
  grafana/grafana

Access:

http://<public-ip>:3000

Login:

Username: admin
Password: admin
🔹 Dashboard

Add Prometheus as data source

Query:

up
🧠 Meaning
1 → Application is running
0 → Application is down
▶️ Run Instructions (Summary)
🔹 Local
open index.html
🔹 Docker
docker build -t task-manager .
docker run -p 80:80 task-manager
🔹 AWS
ssh into EC2 → run Docker container → access via public IP
📁 Project Structure
task-manager-devops/
│
├── index.html          # Main UI
├── style.css           # Styling
├── script.js           # Frontend logic
│
├── taskLogic.js        # Business logic
├── taskLogic.test.js   # Unit tests (Jest)
│
├── package.json        # Node dependencies
├── package-lock.json
│
├── Dockerfile          # Container setup
├── prometheus.yml      # Monitoring config
│
├── .github/
│   └── workflows/
│       └── ci.yml      # CI/CD pipeline
│
└── README.md           # Project documentation
🧠 Key DevOps Concepts Learned

Git branching & PR workflow

Docker containerization

CI/CD pipeline automation

Cloud deployment (AWS EC2)

Health checks & logging

Monitoring (Prometheus + Grafana)

⚠️ Known Limitations

Data is stored using localStorage (browser only)

No backend/database (data not shared across devices)

🚀 Future Improvements

Add backend (Node.js / Spring Boot)

Add database (MongoDB / MySQL)

Implement real metrics (/metrics)

Add alerts (Prometheus Alertmanager)

Deploy using Kubernetes

🏆 Conclusion

This project demonstrates a complete DevOps lifecycle implementation, from development to deployment and monitoring, making it a strong real-world portfolio project.

👨‍💻 Author

Jayaprakash M.