import { Mail, MapPin, FileText, Users, Apple, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";

interface ContactProps {
  onNavigate?: (page: string) => void;
}

export function Contact({ onNavigate }: ContactProps) {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help within 24 hours",
      contact: "help.gorehab@gmail.com",
      color: "text-[var(--electric-blue)]",
      bgColor: "bg-blue-50"
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
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-[var(--vibrant-purple)] mb-6">
            Contact & Support
          </h3>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            We're Here to Help You{" "}
            <span className="text-gradient-primary">Succeed</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Have questions, need support, or want to partner with us? Our dedicated team is ready to assist you on your learning journey.
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

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-gray-900">Send us a Message</CardTitle>
                <p className="text-gray-600 text-lg">We'll get back to you within 24 hours</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">I am a...</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select your role</option>
                    <option>Current Student</option>
                    <option>Instructor/Professor</option>
                    <option>Institution Representative</option>
                    <option>Parent/Guardian</option>
                    <option>Other</option>
                  </select>
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
                
                <Button className="w-full bg-gradient-primary text-white hover:opacity-90 py-3 text-lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get in Touch - Contact Methods (Horizontal Layout) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach our support team for immediate assistance
            </p>
          </div>

          {/* Contact Methods - Horizontal Layout */}
          <div className="flex justify-center max-w-md mx-auto">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${method.bgColor} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                      <Icon className={`w-8 h-8 ${method.color}`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{method.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                    <p className="font-medium text-gray-900">{method.contact}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Resources</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers and connect with our community of physiotherapy students.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto">
            {supportResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[var(--electric-blue)]" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">{resource.title}</h3>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div 
            className="bg-gray-50 rounded-2xl p-8 shadow-lg cursor-pointer hover:shadow-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => onNavigate?.('faq')}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Is GoRehab free to use?</h4>
                <p className="text-gray-600 text-sm mb-4">Yes! GoRehab is completely free to download and use. We believe quality education should be accessible to all students.</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">How do I report a bug or issue?</h4>
                <p className="text-gray-600 text-sm mb-4">You can report issues through the app's feedback feature or email us directly at help.gorehab@gmail.com.</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Can I suggest new features?</h4>
                <p className="text-gray-600 text-sm mb-4">Absolutely! We love hearing from our users. Contact us directly with your suggestions and ideas.</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Do you offer institutional licenses?</h4>
                <p className="text-gray-600 text-sm mb-4">Yes, we have special programs for universities and colleges. Please contact us to discuss institutional partnerships.</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-[var(--electric-blue)] font-medium hover:underline">
                Click here to view all FAQs →
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-primary text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with GoRehab</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get the latest updates about new features, study tips, and educational content delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-white text-gray-900"
                />
                <Button className="bg-white text-[var(--electric-blue)] hover:bg-gray-100 px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-4">
                No spam, just valuable updates. Unsubscribe anytime.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}