import { Users, BookOpen, Lightbulb, ArrowRight, MapPin, Clock, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Careers() {
  const programs = [
    {
      icon: Users,
      title: "Apprenticeship Program",
      subtitle: "Learn while you contribute to revolutionizing physiotherapy education",
      description: "Join our team as an apprentice and gain hands-on experience in EdTech innovation while helping us build the future of medical education.",
      benefits: [
        "Monthly stipend during program",
        "Direct mentorship from industry experts",
        "Real project experience",
        "Potential for full-time employment",
        "Certificate of completion"
      ],
      duration: "6-12 months",
      location: "Hybrid (Karachi/Remote)",
      spots: "5 positions",
      color: "text-[var(--vibrant-purple)]",
      bgColor: "bg-purple-50",
      borderColor: "border-[var(--vibrant-purple)]"
    },
    {
      icon: BookOpen,
      title: "Mentorship Program", 
      subtitle: "Guide the next generation of healthcare professionals",
      description: "Share your expertise and passion for physiotherapy education by mentoring students and contributing to our content development.",
      benefits: [
        "Flexible part-time commitment",
        "Competitive compensation",
        "Recognition in our platform",
        "Professional development opportunities",
        "Impact thousands of students"
      ],
      duration: "Ongoing",
      location: "Remote Friendly",
      spots: "Open positions",
      color: "text-[var(--electric-blue)]",
      bgColor: "bg-blue-50",
      borderColor: "border-[var(--electric-blue)]"
    },
    {
      icon: Lightbulb,
      title: "Internship Program",
      subtitle: "Gain hands-on experience in EdTech innovation",
      description: "Perfect for students and recent graduates looking to dive into the intersection of technology and healthcare education.",
      benefits: [
        "Industry exposure",
        "Skill development in tech & education",
        "Networking opportunities",
        "Letter of recommendation", 
        "Potential career pathway"
      ],
      duration: "3-6 months",
      location: "Karachi Office",
      spots: "10 positions",
      color: "text-[var(--coral-orange)]",
      bgColor: "bg-orange-50",
      borderColor: "border-[var(--coral-orange)]"
    }
  ];

  const departments = [
    "Product Development",
    "Content Creation", 
    "Mobile App Development",
    "UI/UX Design",
    "Quality Assurance",
    "Marketing & Growth",
    "Student Success",
    "Academic Relations"
  ];

  return (
    <section id="careers" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[var(--vibrant-purple)] border-[var(--vibrant-purple)]">
            Career Opportunities
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Join Our Mission to Transform Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Be part of a revolutionary startup that's changing how physiotherapy students learn. 
            We're looking for passionate individuals who want to make a real impact in healthcare education.
          </p>
        </div>

        {/* Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card key={index} className={`relative overflow-hidden border-2 ${program.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                <CardHeader className={program.bgColor}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${program.color}`} />
                    </div>
                    <div>
                      <Badge variant="secondary" className="text-xs mb-1">{program.spots}</Badge>
                      <CardTitle className="text-xl text-gray-900">{program.title}</CardTitle>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 font-medium">{program.subtitle}</p>
                </CardHeader>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-6">{program.description}</p>

                  {/* Key Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{program.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{program.location}</span>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      What You'll Get
                    </h4>
                    <ul className="space-y-2">
                      {program.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-start">
                          <div className={`w-1.5 h-1.5 rounded-full ${program.color.replace('text-', 'bg-')} mt-2 mr-2 flex-shrink-0`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className={`w-full ${program.color.replace('text-', 'bg-')} text-white hover:opacity-90`}>
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Departments */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Open Roles Across Multiple Departments</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept, index) => (
              <Badge key={index} variant="outline" className="px-4 py-2 text-sm">
                {dept}
              </Badge>
            ))}
          </div>
        </div>

        {/* Why Join Us */}
        <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why Join PhysioQuiz?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <div className="text-3xl mb-2">🚀</div>
              <h4 className="font-semibold mb-2">Startup Energy</h4>
              <p className="text-sm text-blue-100">Fast-paced, innovative environment</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💡</div>
              <h4 className="font-semibold mb-2">Real Impact</h4>
              <p className="text-sm text-blue-100">Transform education for thousands</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🌱</div>
              <h4 className="font-semibold mb-2">Growth Focus</h4>
              <p className="text-sm text-blue-100">Learn, develop, and advance</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🤝</div>
              <h4 className="font-semibold mb-2">Amazing Team</h4>
              <p className="text-sm text-blue-100">Passionate, supportive colleagues</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[var(--electric-blue)] hover:bg-gray-100">
              View All Openings
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--electric-blue)]">
              Join Our Talent Pool
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}