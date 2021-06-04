# Instruction to generate an SSL certificate

## 1. Install mkcert
```
brew install mkcert
brew install nss # if you use Firefox
```

## 2. Global install (one time)
```
mkcert -install
```

## 3. Generate localhost cert
```
cd /path/to/your/project
mkdir ssl # if doesn't exist
mkcert -key-file ssl/key.pem -cert-file ssl/cert.pem localhost
```
