import { Users, BookOpen, Lightbulb, ArrowRight, MapPin, Clock, Award, Apple, Smartphone, Upload, Mail, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

export function Careers() {
  const scrollToApplicationForm = () => {
    const element = document.getElementById('talent-pool-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const programs = [
    {
      icon: Lightbulb,
      title: "Internship Program",
      subtitle: "Perfect for students and recent graduates in EdTech innovation",
      description: "Perfect for students and recent graduates looking to dive into the intersection of technology and healthcare education.",
      benefits: [
        "Industry exposure",
        "Skill development in tech & education",
        "Networking opportunities",
        "Letter of recommendation", 
        "Potential career pathway"
      ],
      duration: "3-6 months",
      location: "Remote Friendly",
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
    "Marketing & Growth",
    "High-achieving Students",
    "Academic Professionals"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--vibrant-purple)] mb-6">
            Career Opportunities
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Join Our Mission to{" "}
            <span className="text-gradient-primary">Transform Education</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of a revolutionary startup that's changing how physiotherapy students learn. 
            We're looking for passionate individuals who want to make a real impact in healthcare education.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white hover:opacity-90 text-lg px-8 py-4 rounded-xl"
              onClick={scrollToApplicationForm}
            >
              Join Our Talent Pool
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>


        </div>
      </section>

      {/* Programs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Internship Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team and contribute to revolutionizing physiotherapy education through innovative technology solutions.
            </p>
          </div>

          <div className="flex justify-center mb-16">
            <div className="max-w-lg w-full">
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

                    <Button 
                      className={`w-full ${program.color.replace('text-', 'bg-')} text-white hover:opacity-90`}
                      onClick={scrollToApplicationForm}
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">We're Hiring Across Multiple Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              We're growing fast and looking for talented individuals across all areas of our business.
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Click on any department below to apply directly 👇
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {departments.map((dept, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-[var(--electric-blue)] hover:text-white hover:border-[var(--electric-blue)] transition-all duration-200 transform hover:scale-105"
                  onClick={scrollToApplicationForm}
                >
                  {dept}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Talent Pool Application Form */}
      <section id="talent-pool-form" className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Talent Pool</h2>
              
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <Input placeholder="Your first name" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <Input placeholder="Your last name" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </div>



                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Position/Status</label>
                    <Input placeholder="e.g., Final Year DPT Student, Software Developer, etc." />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="">Select your area of interest</option>
                      <option value="product">Product Development</option>
                      <option value="content">Content Creation</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="design">UI/UX Design</option>
          
                      <option value="marketing">Marketing & Growth</option>
                      <option value="success">High-achieving Students</option>
                      <option value="academic">Academic Professionals</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
                      <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                    </div>
                  </div>

                  {/* Cover Letter/Description */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about yourself *</label>
                    <Textarea 
                      placeholder="Share your background, experience, and why you're interested in joining GoRehab. What unique value can you bring to our mission of transforming physiotherapy education?"
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  {/* Portfolio/LinkedIn */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio/LinkedIn Profile</label>
                    <Input placeholder="https://linkedin.com/in/yourprofile or your portfolio link" />
                  </div>



                  <Button className="w-full bg-gradient-primary text-white hover:opacity-90 py-3 text-lg">
                    Submit Application
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted by GoRehab regarding career opportunities.
                    We respect your privacy and will never share your information with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-primary rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">Why Join GoRehab?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-semibold mb-2 text-lg">Med Tech</h3>
                <p className="text-sm text-blue-100">Fast-paced, innovative environment with real impact</p>
              </div>
              <div>
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-semibold mb-2 text-lg">Transform Lives</h3>
                <p className="text-sm text-blue-100">Help 5,000+ students study better every day</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="font-semibold mb-2 text-lg">Growth Focus</h3>
                <p className="text-sm text-blue-100">Learn, develop, and advance your career</p>
              </div>
              <div>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-semibold mb-2 text-lg">Amazing Team</h3>
                <p className="text-sm text-blue-100">Passionate, supportive colleagues</p>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* App Download CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experience What We're Building
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Before you apply, try GoRehab yourself and see why thousands of students love our platform.
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