# DigiVote

An extremely accessible voting portal with widespread screen reader and multilingual support.

## Preview

### Google Drive Link

[Google Drive Video](https://drive.google.com/drive/folders/1Kzk2Qfv4ZqljYBfu76YY3H3KTNYRDOxH?usp=sharing)

### Landing Page

![LandingPage](public\landing-page.png)

### Home Page

![HomePage](public\home-page.png)

### Home Page - Mobile

![HomePageMobile](public\home-page-phone.png)

### Polling Booth Maps

![Polling Booth maps](public\boothmap.png)

### Login Interface

![Login-1](public\login-1.png)

### 2FA Secure Auth - Firebase

![2FA](public\2fa-auth.png)

### AI Sahayak - QnA Assistant

![chatbot](public\chatbot.png)

### Multilingual Translation

![chatbot](public\translation.png)

### Sign Language Support

<video width="600" controls>
  <source src="public/sign-language.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video

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
