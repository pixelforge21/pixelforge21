app = "pixelforge21"
primary_region = "sin"  # Singapore (you can change this to your region)

[build]
dockerfile = "./Dockerfile"

[env]
PORT = "5000"

[[services]]
  protocol = "tcp"
  internal_port = 5000
  ports = [
    { handlers = ["http"], port = 80 }
  ]



































