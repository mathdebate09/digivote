from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from app import generate_response
from retriever import get_retriever, update_document_set
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend origin
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatInput(BaseModel):
    message: str

class ChatOutput(BaseModel):
    response: str

@app.post("/chat", response_model=ChatOutput)
async def chat(chat_input: ChatInput):
    try:
        response = generate_response(chat_input.message, [])
        return ChatOutput(response=response)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/update_documents")
async def update_documents(directory: str):
    try:
        update_document_set(directory)
        return {"message": f"Documents in {directory} have been added to the database."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.on_event("startup")
async def startup_event():
    # Initialize the retriever
    get_retriever()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)