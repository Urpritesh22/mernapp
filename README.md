This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
////////////////////////////////////////////////////////////////////////////////////////
########################################################################################

Complete Command Set to Run Dockerized Next.js App on ec2(Public Image)
bash
Copy code
# Step 1: SSH into your EC2 instance
# Replace <your-key-pair.pem> with your key file and <your-ec2-public-ip> with the actual public IP
ssh -i <your-key-pair.pem> ubuntu@<your-ec2-public-ip>

# Step 2: Update package lists and install Docker

# On Ubuntu (for Ubuntu AMI)
sudo apt-get update
sudo apt-get install -y docker.io
sudo systemctl enable docker
sudo systemctl start docker

# On Amazon Linux 2 (if using Amazon Linux 2)
# sudo yum update -y
# sudo yum install -y docker
# sudo service docker start
# sudo usermod -a -G docker ec2-user

# Step 3: Verify Docker is installed and running
sudo systemctl status docker

# Step 4: Pull the Docker image from Docker Hub (public image, no login required)
docker pull priteshchopade22/newjs-app:latest

# Step 5: Run the Docker container (map port 3000 in the container to port 80 on EC2)
sudo docker run -d -p 80:3000 priteshchopade22/newjs-app:latest

# Step 6: Verify the app is running by visiting http://<your-ec2-public-ip> in your browser
