import { questions } from "@/data/questions";
import { personalityTypes, typeIds } from "@/data/types";

export function calculateResult(answers: number[]): string {
  const scores: Record<string, number> = {};
  for (const id of typeIds) scores[id] = 0;

  answers.forEach((answerIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (!question) return;
    const answer = question.answers[answerIndex];
    if (!answer) return;

    for (const [typeId, points] of Object.entries(answer.scores)) {
      scores[typeId] = (scores[typeId] || 0) + points;
    }
  });

  // Find highest scoring type
  let maxScore = -1;
  let resultType = typeIds[0];

  for (const id of typeIds) {
    if (scores[id] > maxScore) {
      maxScore = scores[id];
      resultType = id;
    }
  }

  return resultType;
}

export function encodeAnswers(answers: number[]): string {
  return answers.map((a) => a.toString()).join("");
}

export function decodeAnswers(code: string): number[] {
  return code.split("").map(Number);
}
