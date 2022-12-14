import { MailAdapter } from "../adapter/mail-adapter";
import { FeedbackRepository } from "../repositories/feedback-repositories";
export interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: FeedbackRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute({ type, comment, screenshot }: SubmitFeedbackUseCaseRequest) {
    await this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo FeedBack",
      body: [
        `<div styles='font-family: sans-serif; font-size: 16px; color: #111'>`,
        `<p> Tipo de feedback: ${type}</p>`,
        `<p> Comentário: ${comment}</p>`,
        `</div>`,
      ].join("\n"),
    });
  }
}
