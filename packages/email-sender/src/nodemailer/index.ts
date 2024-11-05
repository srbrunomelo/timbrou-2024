import { left, right } from "@repo/utils/patterns/left-right";
import nodemailer, { type Transporter } from "nodemailer";
import type {
  TEmailSenderConfig,
  TEmailSenderReturn,
  TEmailSenderSendParams,
} from "../types";

function NodemailerServiceFactory() {
  let transporter: Transporter;

  function bootstrap(config: TEmailSenderConfig) {
    transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    });
  }

  async function sendEmail(
    params: TEmailSenderSendParams
  ): Promise<TEmailSenderReturn> {
    try {
      const info = await transporter.sendMail({
        from: params.from,
        to: params.to,
        subject: params.subject,
        text: params.text,
        html: params.html,
      });

      return right({
        from: params.from,
        to: params.to,
        subject: params.subject,
        response: info.response,
        messageId: info.messageId,
      });
    } catch (error) {
      // console.log(error);
      return left({
        code: 500,
        message: (error as Error).toString(),
        key: "EMAIL_SENDER_ERROR",
        custom: {
          originalError: error,
          provider: "nodemailer",
          params,
        },
      });
    }
  }

  return {
    bootstrap,
    sendEmail,
  };
}

export const NodemailerService = NodemailerServiceFactory();
