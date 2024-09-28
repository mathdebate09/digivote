# DigiVote

An extremely accessible voting portal with widespread screen reader and multilingual support.

## Preview

### Google Drive Link

[Google Drive Video](https://drive.google.com/drive/folders/1Kzk2Qfv4ZqljYBfu76YY3H3KTNYRDOxH?usp=sharing)

### Landing Page

![landing-page](https://github.com/user-attachments/assets/3b50e51b-95a6-45c3-8271-0aedc3276620)

### Home Page

![home-page](https://github.com/user-attachments/assets/c8160552-45b3-4f7c-acf3-80da9ee817c3)

### Home Page - Mobile

![home-page-phone](https://github.com/user-attachments/assets/ec82ff3e-1ab1-47b8-945b-e1ff7b60e6de)

### Polling Booth Maps

![boothmap](https://github.com/user-attachments/assets/8550d260-3513-4665-9b61-73cc9c28534c)

### Login Interface

![login-1](https://github.com/user-attachments/assets/7224c2f2-dd27-4281-b7c4-0c97c3dff96a)

### 2FA Secure Auth - Firebase

![2fa-auth](https://github.com/user-attachments/assets/771e455e-91ce-490d-a1a6-9ed75e1b0df9)

### AI Sahayak - QnA Assistant

![chatbot](https://github.com/user-attachments/assets/c5f3a3cc-1abb-4f2d-b55a-77420fa57859)

### Multilingual Translation

![translation](https://github.com/user-attachments/assets/dfe384ce-fce2-469b-9eaf-ee5a492816a6)

### Sign Language Support

[Sign Language Demo](https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVyaHJ2bG5ob2l4MWhlaHdkY2NzZnhpbWtnNWV2Ym56bnJwZGt6MyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yLpj6vcNTjxDdHA5QA/giphy.gif)

## Features

- Minimalistic and modern UI design with UX
- Secure logins with 2FA support on Aadhar
- User registration and Voter profile
- Screen Reader support for multiple actions
- Sahayak AI with TalkBack ability
- Multilingual Translation Support
- Polling Booths Locator
- Online voting options
- Possibilty of partnership with government institutions

## Languages

[![JS](https://img.shields.io/badge/-JavaScript-000?style=for-the-badge&logo=javascript&logoColor=F0DB4F)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PY](https://img.shields.io/badge/-Python-000?style=for-the-badge&logo=python&logoColor=F0DB4F)](https://docs.python.org/3/)
![postgresql](https://img.shields.io/badge/-postgresql-000?style=for-the-badge&logo=postgresql&logoColor=F0DB4F)

## Libraries / Frameworks

[![React](https://img.shields.io/badge/-React-000?style=for-the-badge&logo=react)](https://react.dev/learn)
[![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-000?style=for-the-badge&logo=tailwindcss&logoColor=1572B6)](https://tailwindcss.com/docs/installation)
![express](https://img.shields.io/badge/-express-000?style=for-the-badge&logo=express)
![supabase](https://img.shields.io/badge/-supabase-000?style=for-the-badge&logo=supabase)
![FireBase](https://img.shields.io/badge/-FireBase-000?style=for-the-badge&logo=FireBase)

![langchain](https://img.shields.io/badge/-langchain-000?style=for-the-badge&logo=langchain)
![scrapy](https://img.shields.io/badge/-scrapy-000?style=for-the-badge&logo=scrapy)
![gemini](https://img.shields.io/badge/-gemini-000?style=for-the-badge&logo=google)
![fastapi](https://img.shields.io/badge/-fastapi-000?style=for-the-badge&logo=fastapi)

## Getting started

- Make sure you have [Node 20.xx.x](https://nodejs.org/en/download/package-manager) or higher and [Git](https://git-scm.com/downloads) downloaded
- Make sure you have [Python 3.xx.x](https://www.python.org/downloads/)

### Cloning the repo

```bash
git clone git@github.com:mathdebate09/digivote.git
cd digivote
# Download deps for backend
npm install && cd api && npm install && cd ..
# Download deps for frontend
cd client && npm install && cd ..
```

### Setting up Python venv

```bash
# Change to rag directory
cd rag
# setting up python env
python -m venv myenv
# windows - activatiing venv
myenv/Scripts/activate
# linux - activatiing venv
source myenv/bin/activate
# installing deps
pip install requirements.txt
# running FAST API server
uvicorn main:app --reload
```
