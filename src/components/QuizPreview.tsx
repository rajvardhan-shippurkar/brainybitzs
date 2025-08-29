import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, CheckCircle, XCircle, Timer, Trophy, Star } from "lucide-react";

interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const QuizPreview = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const sampleQuiz: QuizQuestion[] = [
    {
      id: 1,
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Neptune"],
      correct: 1,
      explanation: "Jupiter is the largest planet in our solar system, with a mass greater than all other planets combined!",
      difficulty: 'beginner'
    },
    {
      id: 2,
      question: "Which scientist developed the theory of evolution by natural selection?",
      options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Galileo Galilei"],
      correct: 2,
      explanation: "Charles Darwin developed the theory of evolution by natural selection, published in 'On the Origin of Species' in 1859.",
      difficulty: 'intermediate'
    },
    {
      id: 3,
      question: "What is the speed of light in a vacuum?",
      options: ["299,792,458 m/s", "300,000,000 m/s", "299,000,000 m/s", "301,000,000 m/s"],
      correct: 0,
      explanation: "The speed of light in a vacuum is exactly 299,792,458 meters per second, a fundamental constant of nature.",
      difficulty: 'advanced'
    }
  ];

  const currentQ = sampleQuiz[currentQuestion];
  const isLastQuestion = currentQuestion === sampleQuiz.length - 1;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    setShowResult(true);
    
    if (answerIndex === currentQ.correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Quiz completed - could navigate to results page
      return;
    }
    
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return <span className="badge-level badge-beginner">Beginner</span>;
      case 'intermediate':
        return <span className="badge-level badge-intermediate">Intermediate</span>;
      case 'advanced':
        return <span className="badge-level badge-advanced">Advanced</span>;
      default:
        return null;
    }
  };

  return (
    <section id="quizzes" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 badge-educational mb-4">
            <Brain className="w-4 h-4" />
            <span>Interactive Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Test Your
            <span className="block text-accent">Knowledge</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Challenge yourself with our interactive quizzes. Get instant feedback 
            and track your progress as you learn.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Quiz Stats */}
            <Card className="content-card p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-accent" />
                <div>
                  <h3 className="font-bold text-lg">Quiz Stats</h3>
                  <p className="text-sm text-muted-foreground">Your Progress</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Questions</span>
                  <span className="font-mono text-accent">{currentQuestion + 1}/{sampleQuiz.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Score</span>
                  <span className="font-mono text-success">{score}/{sampleQuiz.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Accuracy</span>
                  <span className="font-mono text-primary-glow">
                    {currentQuestion > 0 ? Math.round((score / currentQuestion) * 100) : 0}%
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Timer className="w-4 h-4" />
                  <span>No time limit</span>
                </div>
              </div>
            </Card>

            {/* Main Quiz Card */}
            <Card className="content-card md:col-span-2 p-8">
              {/* Question Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <span className="font-bold text-accent-foreground">
                      {currentQuestion + 1}
                    </span>
                  </div>
                  {getDifficultyBadge(currentQ.difficulty)}
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent" />
                  <span className="text-sm text-muted-foreground">+10 points</span>
                </div>
              </div>

              {/* Question */}
              <h3 className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed">
                {currentQ.question}
              </h3>

              {/* Answer Options */}
              <div className="space-y-4 mb-8">
                {currentQ.options.map((option, index) => {
                  let optionClass = "quiz-option";
                  
                  if (showResult) {
                    if (index === currentQ.correct) {
                      optionClass += " correct";
                    } else if (index === selectedAnswer && index !== currentQ.correct) {
                      optionClass += " incorrect";
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => !showResult && handleAnswerSelect(index)}
                      disabled={showResult}
                      className={optionClass}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-mono font-bold">
                          {String.fromCharCode(65 + index)}
                        </div>
                        <span className="text-left flex-1">{option}</span>
                        {showResult && index === currentQ.correct && (
                          <CheckCircle className="w-5 h-5 text-success" />
                        )}
                        {showResult && index === selectedAnswer && index !== currentQ.correct && (
                          <XCircle className="w-5 h-5 text-destructive" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Explanation */}
              {showResult && (
                <div className="bg-muted/50 rounded-lg p-6 mb-8 animate-fade-in">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-accent" />
                    Explanation
                  </h4>
                  <p className="text-muted-foreground">{currentQ.explanation}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                {showResult ? (
                  <Button 
                    variant="hero" 
                    size="lg" 
                    onClick={isLastQuestion ? resetQuiz : handleNextQuestion}
                    className="flex-1"
                  >
                    {isLastQuestion ? "Restart Quiz" : "Next Question"}
                  </Button>
                ) : (
                  <Button variant="outline" size="lg" disabled className="flex-1">
                    Select an answer
                  </Button>
                )}
              </div>
            </Card>
          </div>

          {/* Quiz Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto">
                <Brain className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="font-semibold">Multiple Categories</h4>
              <p className="text-sm text-muted-foreground">Science, Nature, Space, Technology, and more</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-semibold">Leaderboards</h4>
              <p className="text-sm text-muted-foreground">Compete with other learners worldwide</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-success to-accent rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold">Progress Tracking</h4>
              <p className="text-sm text-muted-foreground">Monitor your learning journey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizPreview;