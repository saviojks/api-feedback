import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedback-repositories";
import express from "express";
import nodemailer from "nodemailer";
import { NodemailerMailAdapter } from "./adapter/nodemailer/nodemailer-mail-adapter";

export const routes = express.Router();

routes.post("/", async ({ body }, res) => {
  const { type, comment, screenshot } = body;

  const prismaFeedbackRepository = new PrismaFeedbackRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbackRepository,
    nodemailerMailAdapter
  );

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot,
  });

  return res.status(201).send();
});

routes.get("/test", (req, res) => {
  return res.send({ OK: "Tudo okay aqui" });
});
