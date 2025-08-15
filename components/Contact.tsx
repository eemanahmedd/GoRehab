import { Mail, Phone, MapPin, MessageCircle, FileText, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help within 24 hours",
      contact: "support@physioquiz.com",
      color: "text-[var(--electric-blue)]",
      bgColor: "bg-blue-50"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Mon-Fri, 9 AM - 6 PM",
      contact: "+92 300 1234567",
      color: "text-[var(--coral-orange)]",
      bgColor: "bg-orange-50"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help during business hours",
      contact: "Available in app",
      color: "text-[var(--vibrant-purple)]",
      bgColor: "bg-purple-50"
    }
  ];

  const supportResources = [
    {
      icon: FileText,
      title: "Help Center",
      description: "Find answers to common questions and detailed guides"
    },
    {
      icon: Users,
      title: "Student Community",
      description: "Connect with other students and share study tips"
    },
    {
      icon: MessageCircle,
      title: "Feature Requests",
      description: "Suggest new features or improvements to the app"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[var(--vibrant-purple)] border-[var(--vibrant-purple)]">
            Contact & Support
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            We're Here to Help You Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, need support, or want to partner with us? Our dedicated team is ready to assist you on your learning journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 ${method.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${method.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                          <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                          <p className="font-medium text-gray-900">{method.contact}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Office Location */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Office Location</h4>
                    <p className="text-gray-600">
                      PhysioQuiz Technologies<br />
                      Block 9, Clifton<br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input placeholder="What is this regarding?" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary text-white hover:opacity-90">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Resources */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Support Resources</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {supportResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-[var(--electric-blue)]" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{resource.title}</h4>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <Card className="bg-gradient-primary text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get the latest updates about new features, study tips, and educational content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-white text-gray-900"
                />
                <Button className="bg-white text-[var(--electric-blue)] hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}