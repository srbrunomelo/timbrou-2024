import type { TLeftRightReturn } from "@repo/utils/patterns/left-right";

export type TEmailSenderConfig = {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
};

export type TEmailSenderSendParams = {
  from: string;
  to: string;
  subject: string;
  text: string;
  html: string;
};

export type TEmailSenderReturn = TLeftRightReturn<{
  from: string;
  to: string;
  subject: string;
  response: string;
  messageId: string;
}>;

export type TEmailSender = {
  sendEmail: (params: TEmailSenderSendParams) => Promise<TEmailSenderReturn>;
};
