import { Lambda } from "@aws-sdk/client-lambda";

describe('greeting', () => {
  
  test('should greet', async () => {
    // aws lambda invoke --function-name greeting --payload '"Test"' --cli-binary-format raw-in-base64-out payload.json
    const name = "Test";
    const client = new Lambda({});
    const { Payload } = await client.invoke({
      FunctionName: 'greeting',
      Payload: JSON.stringify(name),
    });

    if (Payload) {
      const greeting = JSON.parse(Payload.transformToString());
      expect(greeting).toBe(`Hello ${name}`);
    } else {
      fail('no response payload returned');
    }
  });

})
