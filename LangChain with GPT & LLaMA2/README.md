## 랭체인으로 AI 웹서비스 만들기 with ChatGPT, LLaMA2

https://python.langchain.com/v0.2/docs/introduction/


## 목차




# Section 1 - 시작


# Section 2 - LangChain


# Section 3 - 인공지능 시인

## LangChain BE 구현하기

```py
from langchain_openai import ChatOpenAI

llm = ChatOpenAI()

content = "코딩"

result = llm.invoke(content + "에 대한 시를 써줘")
print(result.content)
```


## Streamlit FE 구현하기

```py
import streamlit as st

st.title("This is a title")
st.title("_Streamlit_ is :blue[cool] :sunglasses:")
```