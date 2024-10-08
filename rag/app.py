from langchain.prompts import PromptTemplate
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser
from langchain_google_genai import ChatGoogleGenerativeAI
from retriever import get_retriever
from dotenv import load_dotenv
import os


def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)


model = ChatGoogleGenerativeAI(model="gemini-1.5-flash", api_key=os.environ["API_KEY"], temperature=0.2)


template = """
You are a helpful chatbot assistant that answers questions using text from the reference passage included below. 
Respond in a complete sentence and make sure that your response is easy to understand for everyone, Providing information about Accessibility people and their Voting Rights/duties. anything and everything related to this chatbot should be answered in a way that is centered around voter accessibility.
maintain a friendly and helpful tone throughout the conversation. Dont give too long of a response this might make reading text boring, so make sure of this thing.
PASSAGE: {context}

CONVERSATION HISTORY:
{history}

CURRENT QUESTION: {query}

ANSWER:

"""
QA_CHAIN_PROMPT = PromptTemplate.from_template(template)


def generate_response(query, history):
    retriever = get_retriever()

    def _combine_documents(docs):
        return format_docs(docs)
    rag_chain = (
        {
            "context": lambda x: _combine_documents(retriever.invoke(x["query"])),
            "query": RunnablePassthrough(),
            "history": RunnablePassthrough(),
        }
        | QA_CHAIN_PROMPT
        | model
        | StrOutputParser()
    )
    result = rag_chain.invoke(input={"query": query, "history": history})
    return result

def format_history(history):
    return "\n".join([f"Human: {h['human']}\nAI: {h['ai']}" for h in history])



def chat_loop():
    print("Welcome to the RAG Chatbot! Type 'exit' to end the conversation.")
    history = []
    while True:
        user_input = input("\nYou: ")
        if user_input.lower() == 'exit':
            print("Thank you for using the RAG Chatbot. Goodbye!")
            break
        formatted_history = format_history(history)
        response = generate_response(user_input, formatted_history)
        print(f"\nChatbot: {response}")
        history.append({"human": user_input, "ai": response})
        if len(history) > 10: 
            history = history[-10:]

if __name__ == "__main__":
    chat_loop()
