"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateResult, encodeAnswers } from "@/lib/scoring";

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [animating, setAnimating] = useState(false);

  const question = questions[current];
  const progress = ((current) / questions.length) * 100;

  const handleAnswer = useCallback(
    (answerIndex: number) => {
      if (animating) return;
      setAnimating(true);

      const newAnswers = [...answers, answerIndex];
      setAnswers(newAnswers);

      setTimeout(() => {
        if (current + 1 >= questions.length) {
          // Quiz complete — calculate result
          const resultType = calculateResult(newAnswers);
          const code = encodeAnswers(newAnswers);
          router.push(`/result/${resultType}?a=${code}`);
        } else {
          setCurrent(current + 1);
          setAnimating(false);
        }
      }, 300);
    },
    [current, answers, animating, router]
  );

  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
      {/* Progress */}
      <div className="w-full max-w-lg mb-2">
        <div className="flex justify-between text-xs text-neutral-600 mb-1">
          <span className="font-mono">{current + 1} / {questions.length}</span>
          <span className="font-mono">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div
        className={`w-full max-w-lg mt-8 ${animating ? "question-exit" : "question-active"}`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 leading-snug">
          {question.text}
        </h2>

        <div className="flex flex-col gap-3">
          {question.answers.map((answer, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              className="w-full text-left px-5 py-4 rounded-xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 hover:border-neutral-600 transition-all text-base sm:text-lg active:scale-[0.98]"
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>

      {/* Back hint */}
      {current > 0 && (
        <button
          onClick={() => {
            if (animating) return;
            setAnswers(answers.slice(0, -1));
            setCurrent(current - 1);
          }}
          className="mt-6 text-sm text-neutral-600 hover:text-neutral-400 transition-colors"
        >
          ← 上一题
        </button>
      )}
    </main>
  );
}
