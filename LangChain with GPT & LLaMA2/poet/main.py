# from dotenv import load_dotenv
# load_dotenv()

from langchain_openai import ChatOpenAI

llm = ChatOpenAI()

content = "코딩"

# result = llm.invoke(content + "에 대한 시를 써줘")
# print(result.content)

import streamlit as st

st.title("This is a title")
st.title("_Streamlit_ is :blue[cool] :sunglasses:")
