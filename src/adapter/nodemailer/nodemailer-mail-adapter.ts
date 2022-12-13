import nodemailer from "nodemailer";
import { MailAdapter, SendmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2fbb56a50807b5",
    pass: "7bc4ee45ee400e",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendmailData) {
    await transport.sendMail({
      from: "Equipe Sávio jks<Feedback@feedio.com>",
      to: "Sávio jks <saviooribe@gmail.com>",
      subject,
      html: body,
    });
  }
}
