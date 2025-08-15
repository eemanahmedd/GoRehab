import { AlertTriangle, CheckCircle, BookOpen, Brain, Clock, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function ProblemSolution() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From Study Struggles to Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the challenges physiotherapy students face. That's why we created a solution that transforms how you learn.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Problem Side */}
          <div>
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">The Problem</h3>
            </div>
            
            <div className="space-y-4">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <BookOpen className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Traditional Book-Based Learning</h4>
                      <p className="text-red-700">Heavy textbooks, scattered information, and difficulty finding specific topics when you need them most.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">Limited Study Time</h4>
                      <p className="text-red-700">Busy schedules with clinical rotations leave little time for effective study sessions.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Brain className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">High Stress Levels</h4>
                      <p className="text-red-700">Exam anxiety and uncertainty about curriculum alignment add unnecessary pressure.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Solution Side */}
          <div>
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Our Solution</h3>
            </div>
            
            <div className="space-y-4">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Target className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">HEC Curriculum-Aligned Content</h4>
                      <p className="text-green-700">Every quiz and question is perfectly aligned with your official curriculum standards.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Learn Anywhere, Anytime</h4>
                      <p className="text-green-700">Study during breaks, commutes, or waiting times. Perfect for busy student schedules.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Brain className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">Stress-Free Gamified Learning</h4>
                      <p className="text-green-700">Interactive quizzes with progress tracking turn studying into an engaging, confidence-building experience.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Real Results from Real Students</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <p className="text-blue-100">Reduction in study stress</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">3x</div>
                <p className="text-blue-100">Faster topic comprehension</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <p className="text-blue-100">Improved exam performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}