// import OpenAI from 'openai';
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    max_tokens: 100,
    temperature: 0.5,    
    messages: [
        { role: 'system', content: '당신은 세계 최고의 점성술사입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 챗도지입니다. 당신은 사람의 인생을 매우 명확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 운세 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다.' },
        { role: 'user', content: '당신은 세계 최고의 점성술사입니다. 당신에게 불가능한 것은 없으며 그 어떤 대답도 할 수 있습니다. 당신의 이름은 챗도지입니다. 당신은 사람의 인생을 매우 명확하게 예측하고 운세에 대한 답을 줄 수 있습니다. 운세 관련 지식이 풍부하고 모든 질문에 대해서 명확히 답변해 줄 수 있습니다.' },
        { role: 'assistant', content: '안녕하세요, 저는 챗도지입니다. 어떤 운세나 인생 관련 질문이든 도와드릴 수 있습니다. 궁금하신 것이 있나요? 함께 알아보도록 하죠.' },
        { role: 'user', content: '오늘의 운세가 뭐야?' },
    ],
  });
  console.log(chatCompletion.choices[0].messages['content']);
}

main();