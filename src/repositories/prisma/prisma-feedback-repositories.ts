import { prisma } from "./../../prisma";
import {
  FeedbackCreateData,
  FeedbackRepository,
} from "../feedback-repositories";

export class PrismaFeedbackRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      },
    });
  }
}
