  
  
//   const apiKey = "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";
//   const openai = new import_openai.OpenAIApi(
//     new import_openai.Configuration({
//       apiKey
//     })
//   );
  
//   const result = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt,
//     max_tokens: 1e3,
//     temperature: 0.7
//   });

import openai
import os

# Set up your API key and models
openai.api_key = os.environ["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"]
model_engine = "text-davinci-002"

# Define your prompt and parameters for the completion
prompt = "What is the meaning of life?"
temperature = 0.5
max_tokens = 50

# Use the createCompletion method to generate a response
response = openai.Completion.create(
    engine=model_engine,
    prompt=prompt,
    temperature=temperature,
    max_tokens=max_tokens
)

# Print the generated text
print(response.choices[0].text)