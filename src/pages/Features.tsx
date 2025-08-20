import { 
  BookOpen, 
  Target, 
  BarChart3, 
  Shuffle, 
  Check, 
  Clock,
  Users,
  Zap,
  Apple,
  Smartphone,
  Download,
  RefreshCw,
  Moon,
  Bell,
  Heart,
  CheckCircle,
  Video,
  GraduationCap,
  Search
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export function Features() {
  const features = [
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

  const comingSoonFeatures = [
    {
      icon: Video,
      title: "Clinical Videos",
      description: "Watch high-quality clinical demonstration videos to understand practical applications.",
      color: "text-gray-500",
      bgColor: "bg-gray-100"
    },
    {
      icon: GraduationCap,
      title: "NPTE & License Exam Prep",
      description: "Specialized preparation for NPTE and other physiotherapy licensing examinations.",
      color: "text-gray-500",
      bgColor: "bg-gray-100"
    },
    {
      icon: Search,
      title: "AI Search Engine",
      description: "Intelligent search powered by AI to find exactly what you need, instantly.",
      color: "text-gray-500",
      bgColor: "bg-gray-100"
    },
    {
      icon: Users,
      title: "Prepare with Friends",
      description: "Study together, challenge friends, and collaborate on difficult topics with your classmates.",
      color: "text-gray-500",
      bgColor: "bg-gray-100"
    },
    {
      icon: BookOpen,
      title: "Comprehension Quizzes",
      description: "Topic summaries followed by Q&A sessions for deeper understanding.",
      color: "text-gray-500",
      bgColor: "bg-gray-100"
    },
    {
      icon: Heart,
      title: "Other Med Sector Ahead",
      description: "Expanding beyond physiotherapy to include nursing, pharmacy, and other medical fields.",
      color: "text-gray-500",
      bgColor: "bg-gray-100"
    }
  ];

  const platformFeatures = [
    {
      icon: RefreshCw,
      title: "Cross-Platform Sync",
      description: "Study on any device - your progress syncs everywhere."
    },
    {
      icon: Download,
      title: "Offline Mode",
      description: "Download content for study without internet connection."
    },
    {
      icon: Moon,
      title: "Dark Mode",
      description: "Easy on the eyes during late-night study sessions."
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Gentle reminders to maintain your study streak."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-primary">Excel in Physiotherapy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the comprehensive features that make GoRehab the perfect study companion for every physiotherapy student in Pakistan.
          </p>
          
          {/* App Download CTAs */}

        </div>
      </section>

      {/* Current Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Core Features Available Now
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These powerful features are ready to transform your study experience today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Feature Highlight */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Why Choose GoRehab?
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

      {/* Platform Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Built for Modern Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GoRehab is designed with the modern physiotherapy student in mind, offering flexibility and convenience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-[var(--electric-blue)]" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Exciting Features Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're constantly innovating to bring you even more powerful learning tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {comingSoonFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="relative overflow-hidden border-2 border-dashed border-gray-300 text-center p-6">
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-xs">Coming Soon</Badge>
                  </div>
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-700 mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Download GoRehab today and join thousands of students who are already studying smarter, not harder.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
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

          <div className="text-sm text-blue-200">
            Free to download • No subscription required • Works offline
          </div>
        </div>
      </section>
    </div>
  );
}