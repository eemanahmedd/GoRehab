import { Target, Eye, Users, Award, Heart, Zap, Apple, Smartphone } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import stressedStudentImage from '../assets/1.jpg';

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



  const teamStats = [
    { number: "12", label: "Team Members" },
    { number: "5", label: "Universities Represented" },
    { number: "3", label: "Years Average Experience" },
    { number: "15+", label: "Healthcare Topics" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--electric-blue)] mb-6">
            About GoRehab
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Transforming{" "}
            <span className="text-gradient-primary">Physiotherapy Education</span>{" "}
            in Pakistan
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Born from the real struggles of physiotherapy students, GoRehab is on a mission to make quality education accessible, engaging, and stress-free for every student.
          </p>
          

        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  GoRehab was born in the library of a Pakistani medical university, where a group of physiotherapy students were struggling with thick textbooks, scattered information, and the constant stress of exam preparation.
                </p>
                <p>
                  As students ourselves, we understood the pain of flipping through hundreds of pages to find one specific topic, the anxiety of not knowing if we were studying the right content for HEC exams, and the impossibility of carrying heavy books everywhere.
                </p>
                <p>
                  We asked ourselves: <em>"What if learning could be fun, accessible, and stress-free?"</em> That question led to countless late nights coding, designing, and creating what would become Pakistan's most loved physiotherapy study companion.
                </p>
                <p>
                  Today, we're proud to serve over 5,000 students, but we're just getting started. Our mission is to ensure that no physiotherapy student ever has to struggle with the stress of traditional learning methods again.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src={stressedStudentImage}
                alt="Medical student stressed with studying, representing the problems GoRehab solves"
                className="rounded-2xl shadow-lg w-full"
              />
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
                <p className="text-gray-700 text-lg leading-relaxed">
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
                <p className="text-gray-700 text-lg leading-relaxed">
                  To become the leading educational technology platform for healthcare students across South Asia, setting new standards for how medical education can be delivered effectively and enjoyably.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Impact Numbers */}
          <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center mb-16">
            <h3 className="text-2xl font-bold mb-6">Our Impact So Far</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <p className="text-blue-100">Active Students</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-blue-100">Healthcare Topics</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8,000+</div>
                <p className="text-blue-100">Practice Questions</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <p className="text-blue-100">App Store Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do at GoRehab, from product development to student support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>



      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Growing Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a diverse team of educators, technologists, and healthcare professionals united by our passion for transforming education.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl p-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {teamStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-[var(--vibrant-purple)] mb-1">{stat.number}</div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-6 text-lg">
                From fresh graduates to seasoned professionals, our team combines academic expertise with technical innovation to serve Pakistan's future healthcare professionals.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of physiotherapy students who are already transforming their learning experience with GoRehab.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </div>
  );
}