import { Handler} from "aws-lambda";

export async function greeting(name: string): Promise<string> {
  return `Hello ${name}`;
}

export const handler = greeting satisfies Handler<string, string>;
