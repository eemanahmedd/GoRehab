import { Star, Quote, GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function Testimonials() {
  const studentTestimonials = [
    {
      name: "Sarah Ahmed",
      role: "3rd Year DPT Student",
      university: "Aga Khan University",
      text: "PhysioQuiz completely changed how I study! I used to stress about finding the right topics in thick textbooks. Now I can practice specific areas during my clinical rotations. My exam scores improved by 20%!",
      rating: 5,
      avatar: "SA"
    },
    {
      name: "Ali Hassan",
      role: "Final Year DPT Student",
      university: "Riphah International University",
      text: "The HEC curriculum alignment is incredible. Every question feels like it's straight from our syllabus. I've been using it for 6 months and haven't touched my heavy textbooks once during revision!",
      rating: 5,
      avatar: "AH"
    },
    {
      name: "Fatima Khan",
      role: "2nd Year DPT Student",
      university: "University of Lahore",
      text: "As someone who struggles with traditional studying, PhysioQuiz made learning fun again. The progress tracking helps me see exactly where I need more practice. My stress levels are at an all-time low!",
      rating: 5,
      avatar: "FK"
    },
    {
      name: "Muhammad Usman",
      role: "4th Year DPT Student",
      university: "Ziauddin University",
      text: "Perfect for busy students! I study during bus rides, between clinical sessions, and even during short breaks. The random quiz feature keeps me sharp on all topics, not just the ones I'm currently studying.",
      rating: 5,
      avatar: "MU"
    }
  ];

  const instructorTestimonials = [
    {
      name: "Dr. Ayesha Malik",
      role: "Associate Professor",
      university: "Aga Khan University",
      text: "I've recommended PhysioQuiz to all my students. The curriculum alignment is spot-on, and I've noticed significant improvement in student engagement and exam performance since they started using it.",
      rating: 5,
      avatar: "AM"
    },
    {
      name: "Dr. Imran Sheikh",
      role: "Head of Department",
      university: "Riphah International University",
      text: "Finally, a digital tool that understands our HEC curriculum! My students are more confident, better prepared, and the quality of classroom discussions has improved dramatically since implementing PhysioQuiz.",
      rating: 5,
      avatar: "IS"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Students", icon: GraduationCap },
    { number: "50+", label: "Partner Universities", icon: Award },
    { number: "95%", label: "Student Satisfaction", icon: Star },
    { number: "4.9/5", label: "App Store Rating", icon: Star }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[var(--coral-orange)] border-[var(--coral-orange)]">
            Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Loved by Students and Trusted by Instructors
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what physiotherapy students and educators across Pakistan are saying about their PhysioQuiz experience.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center p-6 border-0 shadow-md">
                <CardContent className="p-0">
                  <Icon className="w-8 h-8 text-[var(--electric-blue)] mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Student Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Student Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {studentTestimonials.map((testimonial, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-[var(--vibrant-purple)] mb-4" />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-[var(--electric-blue)] text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-xs text-gray-500">{testimonial.university}</div>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructor Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Endorsed by Educators</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {instructorTestimonials.map((testimonial, index) => (
              <Card key={index} className="relative border-2 border-[var(--coral-orange)] hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <Badge className="mb-4 bg-[var(--coral-orange)] text-white">Instructor</Badge>
                  <Quote className="w-8 h-8 text-[var(--coral-orange)] mb-4" />
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar>
                        <AvatarFallback className="bg-[var(--coral-orange)] text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-xs text-gray-500">{testimonial.university}</div>
                      </div>
                    </div>
                    
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join the Success Story
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Become part of Pakistan's largest community of successful physiotherapy students. 
              Start your stress-free learning journey today!
            </p>
            <button className="bg-gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Download PhysioQuiz Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}