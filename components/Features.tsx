import { 
  BookOpen, 
  Target, 
  BarChart3, 
  Shuffle, 
  Check, 
  Clock,
  Award,
  Users,
  Zap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Curriculum-Based Learning",
      description: "All content perfectly aligned with HEC curriculum standards for guaranteed exam relevance.",
      color: "text-[var(--vibrant-purple)]",
      bgColor: "bg-purple-100"
    },
    {
      icon: Target,
      title: "Interactive Quizzes",
      description: "Topic-specific quizzes that make learning fun, engaging, and highly effective.",
      color: "text-[var(--electric-blue)]",
      bgColor: "bg-blue-100"
    },
    {
      icon: Check,
      title: "Credible References",
      description: "Direct book references for each question ensure academic credibility and deeper understanding.",
      color: "text-[var(--coral-orange)]",
      bgColor: "bg-orange-100"
    },
    {
      icon: Shuffle,
      title: "Random Quiz Mode",
      description: "Randomized questions from selected topics for comprehensive practice and better retention.",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Detailed analytics showing your performance, strengths, and areas for improvement.",
      color: "text-[var(--vibrant-purple)]",
      bgColor: "bg-purple-100"
    },
    {
      icon: Clock,
      title: "Anywhere Learning",
      description: "Perfect for studying during breaks, commutes, or any spare moment in your busy schedule.",
      color: "text-[var(--electric-blue)]",
      bgColor: "bg-blue-100"
    }
  ];

  const comingSoonFeatures = [
    {
      icon: Users,
      title: "Comprehension Quizzes",
      description: "Topic summaries followed by Q&A sessions for deeper understanding.",
      color: "text-gray-500",
      bgColor: "bg-gray-100"
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Unlock badges and achievements as you progress through your studies.",
      color: "text-gray-500",
      bgColor: "bg-gray-100"
    },
    {
      icon: Zap,
      title: "AI-Powered Insights",
      description: "Personalized study recommendations based on your learning patterns.",
      color: "text-gray-500",
      bgColor: "bg-gray-100"
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[var(--vibrant-purple)] border-[var(--vibrant-purple)]">
            Key Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Excel in Physiotherapy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the powerful features that make PhysioQuiz the perfect study companion for every physiotherapy student.
          </p>
        </div>

        {/* Current Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coming Soon Features */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
          <p className="text-gray-600">Exciting new features in development to enhance your learning experience even further.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {comingSoonFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-2 border-dashed border-gray-300">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                </div>
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-gray-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose PhysioQuiz?
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-[var(--vibrant-purple)] mb-2">100%</div>
              <p className="text-gray-600">HEC Aligned</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--electric-blue)] mb-2">5000+</div>
              <p className="text-gray-600">Practice Questions</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-[var(--coral-orange)] mb-2">24/7</div>
              <p className="text-gray-600">Access</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">0</div>
              <p className="text-gray-600">Study Stress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}