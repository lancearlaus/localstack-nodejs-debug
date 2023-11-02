

export const HelloServiceName = 'hello-service';

export interface GetMessageInput {
  readonly name: string,
}

export interface GetMessageOutput {
  readonly message: string,
}

export interface HelloServiceApi {
  getMessage(input: GetMessageInput): Promise<GetMessageOutput>,
}
