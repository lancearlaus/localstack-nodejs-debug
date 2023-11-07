import { greeting } from "../src/greeting.handler.js";


describe('greeting handler', () => {

  test('should greet', async () => {
    const name = "Test";
    const output = await greeting(name);

    expect(output).toBe(`Hello ${name}`);
  });

})