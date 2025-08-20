import { Download, UserPlus, BookOpen, Target, Play, BarChart3, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export function HowItWorks() {
  const steps = [
    {
      icon: Download,
      title: "Download",
      description: "Get PhysioQuiz from your app store in seconds",
      color: "text-[var(--vibrant-purple)]",
      bgColor: "bg-purple-100"
    },
    {
      icon: UserPlus,
      title: "Sign Up/Sign In",
      description: "Create your account or log in to get started",
      color: "text-[var(--electric-blue)]",
      bgColor: "bg-blue-100"
    },
    {
      icon: BookOpen,
      title: "Select Subject",
      description: "Choose from all major physiotherapy subjects",
      color: "text-[var(--coral-orange)]",
      bgColor: "bg-orange-100"
    },
    {
      icon: Target,
      title: "Select Topic",
      description: "Pick specific topics you want to study or practice",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Play,
      title: "Take Quiz",
      description: "Answer questions with instant feedback and explanations",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Monitor your performance and identify improvement areas",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[var(--electric-blue)] border-[var(--electric-blue)]">
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started in 6 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From download to mastery - PhysioQuiz makes it incredibly easy to start your stress-free learning journey.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop Flow */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-6 gap-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                          <Icon className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <div className="text-lg font-semibold text-gray-900 mb-2">
                          {index + 1}. {step.title}
                        </div>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </CardContent>
                    </Card>
                    
                    {/* Arrow between steps */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                        <div className="w-4 h-4 bg-white rounded-full border-2 border-[var(--electric-blue)] flex items-center justify-center">
                          <ArrowRight className="w-2 h-2 text-[var(--electric-blue)]" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile/Tablet Flow */}
          <div className="lg:hidden space-y-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="p-6">
                    <CardContent className="p-0">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${step.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${step.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Step {index + 1}: {step.title}
                          </h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Arrow between steps */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="w-8 h-8 bg-[var(--electric-blue)] rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Study Experience?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of physiotherapy students who have already made studying stress-free and fun with PhysioQuiz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[var(--electric-blue)] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                <Download className="w-5 h-5 mr-2 inline" />
                Download Now - It's Free!
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[var(--electric-blue)] transition-colors">
                Watch Demo Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}