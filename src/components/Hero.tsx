import { Button } from "./ui/button";
import { Download, ArrowRight, Star, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-600">Trusted by 10,000+ Students</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Turn Your Study Stress into{" "}
              <span className="text-gradient-primary">Success Stories!</span>{" "}
              <span className="text-2xl">🎯</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Master physiotherapy with fun quizzes that fit your lifestyle - anywhere, anytime! 
              HEC curriculum-aligned content that makes learning stress-free and engaging.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90 text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-[var(--electric-blue)] text-[var(--electric-blue)] hover:bg-[var(--electric-blue)] hover:text-white text-lg px-8 py-6">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-[var(--electric-blue)] mr-1" />
                  <span className="font-bold text-xl text-gray-900">10K+</span>
                </div>
                <p className="text-sm text-gray-600">Active Students</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-5 h-5 text-[var(--coral-orange)] mr-1" />
                  <span className="font-bold text-xl text-gray-900">95%</span>
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

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=600&fit=crop&crop=center"
                alt="Students using PhysioQuiz app"
                className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[var(--bright-yellow)] rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="text-2xl">📚</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[var(--coral-orange)] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">✨</span>
            </div>
            <div className="absolute top-1/2 -right-8 w-12 h-12 bg-[var(--electric-blue)] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg">🎯</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}