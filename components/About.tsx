import { Target, Eye, Users, Award, Heart, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Every decision we make puts student success and well-being first"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Maintaining the highest standards of educational content and credibility"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously pushing boundaries to make learning more effective and engaging"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a supportive ecosystem for physiotherapy students across Pakistan"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Founded by physiotherapy students who experienced the struggle of traditional learning methods firsthand"
    },
    {
      year: "2024",
      title: "First Launch",
      description: "Released beta version with 100+ students from 3 universities providing feedback"
    },
    {
      year: "2024",
      title: "Rapid Growth", 
      description: "Reached 10,000+ active users across 50+ universities in Pakistan"
    },
    {
      year: "2025",
      title: "Future Vision",
      description: "Expanding to include more healthcare disciplines and international curricula"
    }
  ];

  const teamRoles = [
    { role: "Product Development", count: 4 },
    { role: "Content Experts", count: 8 },
    { role: "Technology", count: 6 },
    { role: "Education", count: 5 },
    { role: "Operations", count: 3 }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[var(--electric-blue)] border-[var(--electric-blue)]">
            About PhysioQuiz
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Transforming Physiotherapy Education in Pakistan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Born from the real struggles of physiotherapy students, PhysioQuiz is on a mission to make quality education accessible, engaging, and stress-free for every student.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                PhysioQuiz was born in the library of a Pakistani medical university, where a group of physiotherapy students were struggling with thick textbooks, scattered information, and the constant stress of exam preparation.
              </p>
              <p>
                As students ourselves, we understood the pain of flipping through hundreds of pages to find one specific topic, the anxiety of not knowing if we were studying the right content for HEC exams, and the impossibility of carrying heavy books everywhere.
              </p>
              <p>
                We asked ourselves: "What if learning could be fun, accessible, and stress-free?" That question led to countless late nights coding, designing, and creating what would become Pakistan's most loved physiotherapy study companion.
              </p>
              <p>
                Today, we're proud to serve over 10,000 students across 50+ universities, but we're just getting started. Our mission is to ensure that no physiotherapy student ever has to struggle with the stress of traditional learning methods again.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
              alt="Students collaborating on PhysioQuiz development"
              className="rounded-2xl shadow-lg w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-[var(--bright-yellow)] p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-gray-900">2023</div>
              <div className="text-sm text-gray-700">Founded</div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-blue-50">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-[var(--vibrant-purple)] mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700">
                To eliminate study stress and make quality physiotherapy education accessible to every student in Pakistan through innovative, curriculum-aligned digital learning solutions that fit their busy lifestyles.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-yellow-50">
            <CardContent className="p-0">
              <div className="flex items-center mb-4">
                <Eye className="w-8 h-8 text-[var(--coral-orange)] mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700">
                To become the leading educational technology platform for healthcare students across South Asia, setting new standards for how medical education can be delivered effectively and enjoyably.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-primary rounded-full hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="p-6">
                      <CardContent className="p-0">
                        <Badge className="mb-2 bg-[var(--electric-blue)] text-white">{milestone.year}</Badge>
                        <h4 className="font-bold text-gray-900 mb-2">{milestone.title}</h4>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="w-4 h-4 bg-[var(--electric-blue)] rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Growing Team</h3>
          <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl p-8">
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
              {teamRoles.map((team, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-[var(--vibrant-purple)] mb-1">{team.count}</div>
                  <p className="text-sm text-gray-600">{team.role}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mb-6">
              We're a diverse team of educators, technologists, and healthcare professionals united by our passion for transforming education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
                Join Our Team
              </button>
              <button className="border border-[var(--vibrant-purple)] text-[var(--vibrant-purple)] px-6 py-3 rounded-xl font-semibold hover:bg-[var(--vibrant-purple)] hover:text-white transition-colors">
                Meet the Founders
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}