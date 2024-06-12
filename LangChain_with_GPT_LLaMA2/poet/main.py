# from dotenv import load_dotenv
# load_dotenv()

from langchain_openai import ChatOpenAI

llm = ChatOpenAI()

content = "코딩"

# result = llm.invoke(content + "에 대한 시를 써줘")
# print(result.content)

import streamlit as st

st.title("인공지능 시인")

content = st.text_input("시의 주제를 제시해주세요.")

if st.button("시 작성 요청하기"):
    st.write("시")
