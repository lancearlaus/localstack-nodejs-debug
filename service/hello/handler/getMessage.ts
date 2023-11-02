import { GetMessageInput, GetMessageOutput } from "../api.js";


export async function getMessage(input: GetMessageInput): Promise<GetMessageOutput> {
  console.log(`${getMessage.name}: ${JSON.stringify(input)}`);
  return { message: `Hello, ${input.name}!` }
}
