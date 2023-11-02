import { Lambda } from "@aws-sdk/client-lambda";

describe('hello service', () => {
  
  test('getMessage', async () => {
    const name = "Test";
    const client = new Lambda({});
    const { Payload } = await client.invoke({
      FunctionName: 'hello-getMessage',
      Payload: JSON.stringify({ name }),
    });

    if (Payload) {
      const { message } = JSON.parse(Payload.transformToString());
      expect(message).toBe(`Hello, ${name}!`);
    } else {
      fail('no response payload returned');
    }
  });

})
