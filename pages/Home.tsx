import { Button } from "../components/ui/button";
import { Download, ArrowRight, Star, Users, Award, Apple, Smartphone, Target, BookOpen, Clock, Play, BarChart3, CheckCircle, Zap, Heart } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function Home() {
  const coreReasons = [
    {
      icon: Target,
      title: "HEC Curriculum Aligned",
      description: "Physiotherapy study buddy that actually follows the HEC curriculum.",
      color: "text-[var(--vibrant-purple)]",
      bgColor: "bg-purple-50"
    },
    {
      icon: Clock,
      title: "Study Anywhere, Anytime",
      description: "Perfect for busy schedules - study during breaks, commutes, or clinical rotations",
      color: "text-[var(--electric-blue)]",
      bgColor: "bg-blue-50"
    },
    {
      icon: Heart,
      title: "Stress-Free Learning",
      description: "Gamified quizzes turn stressful studying into engaging, fun experiences",
      color: "text-[var(--coral-orange)]",
      bgColor: "bg-orange-50"
    },
    {
      icon: CheckCircle,
      title: "Credible References",
      description: "Totally legit. Linked to actual HEC-approved textbooks, so it's credible (and exam-worthy).",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: BarChart3,
      title: "Track Your Progress",
      description: "Track strength and weaknesses, having a report card you actually want to open.",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get immediate feedback and explanations to accelerate your learning",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    }
  ];

  const steps = [
    {
      icon: Download,
      title: "Download",
      description: "Get GoRehab from App Store or Google Play in seconds",
      color: "text-[var(--vibrant-purple)]",
      bgColor: "bg-purple-100"
    },
    {
      icon: Target,
      title: "Select Subject",
      description: "Choose from all major physiotherapy subjects",
      color: "text-[var(--electric-blue)]",
      bgColor: "bg-blue-100"
    },
    {
      icon: BookOpen,
      title: "Select Topic",
      description: "Pick specific topics you want to study or practice",
      color: "text-[var(--coral-orange)]",
      bgColor: "bg-orange-100"
    },
    {
      icon: Play,
      title: "Take Quiz",
      description: "Answer questions with instant feedback and explanations",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: BarChart3,
      title: "Track Progress",
      description: "Monitor your performance and identify improvement areas",
      color: "text-pink-600",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn Your Study Stress into{" "}
              <span className="text-gradient-primary">Success Stories!</span>{" "}
              
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Master Doctor of Physiotherapy with fun quizzes - anywhere, anytime! 
              HEC curriculum-aligned content that makes learning stress-free and engaging.
            </p>

            {/* Prominent App Download CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-2xl">
                <Apple className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-bold">App Store</div>
                </div>
              </Button>
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-6 rounded-2xl">
                <Smartphone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
                  <div className="font-bold">Google Play</div>
                </div>
              </Button>
            </div>

            <div className="flex justify-center mb-8">
              <Button size="lg" variant="outline" className="border-2 border-[var(--electric-blue)] text-[var(--electric-blue)] hover:bg-[var(--electric-blue)] hover:text-white text-lg px-8 py-6">
                Watch Demo Video
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-[var(--electric-blue)] mr-1" />
                  <span className="font-bold text-xl text-gray-900">5K+</span>
                </div>
                <p className="text-sm text-gray-600">Active Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-[var(--coral-orange)] mr-1" />
                  <span className="font-bold text-xl text-gray-900">98%</span>
                </div>
                <p className="text-sm text-gray-600">Pass Rate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-[var(--bright-yellow)] mr-1 fill-current" />
                  <span className="font-bold text-xl text-gray-900">4.9</span>
                </div>
                <p className="text-sm text-gray-600">App Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Reasons to Use GoRehab */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-[var(--vibrant-purple)] mb-4">
              Why GoRehab?
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed in Physiotherapy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why thousands of students choose GoRehab as their trusted study companion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${reason.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                      <Icon className={`w-8 h-8 ${reason.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-600">{reason.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Impact Statistics */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Real Results from Real Students</h3>
              <div className="grid sm:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">88%</div>
                  <p className="text-blue-100">Reduction in study stress</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">3.5x</div>
                  <p className="text-blue-100">Faster topic comprehension</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <p className="text-blue-100">Improved exam performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold text-[var(--electric-blue)] mb-4">
              How It Works
            </h3>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Started in 5 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From download to mastery - GoRehab makes it incredibly easy to start your stress-free learning journey.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center">
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300 mb-4">
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
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Enhanced App Download CTA */}
          <div className="bg-gradient-primary rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Study Experience?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join over 5,000 physiotherapy students who have already made studying stress-free and fun with GoRehab.
            </p>
            
            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-6 rounded-2xl">
                <Apple className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </Button>
              <Button size="lg" className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-6 rounded-2xl">
                <Smartphone className="w-8 h-8 mr-4" />
                <div className="text-left">
                  <div className="text-sm opacity-80">Get it on</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-blue-200">
              <span>✓ Free to download</span>
              <span>✓ No credit card required</span>
              <span>✓ Available offline</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}