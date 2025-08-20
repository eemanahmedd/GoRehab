import { Plus, Minus, HelpCircle, BookOpen, Smartphone, Users, GraduationCap, Apple } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'features' | 'technical' | 'academic' | 'pricing';
}

interface FAQProps {
  onNavigate: (page: string) => void;
}

export function FAQ({ onNavigate }: FAQProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqData: FAQItem[] = [
    {
      id: 'what-is-gorehab',
      question: 'What is GoRehab and how does it work?',
      answer: 'GoRehab is a revolutionary mobile app designed specifically for physiotherapy students. It transforms traditional studying through interactive, curriculum-based quizzes that align with HEC guidelines. Students can study anywhere, anytime, making learning stress-free and engaging through gamified experiences.',
      category: 'general'
    },
    {
      id: 'curriculum-alignment',
      question: 'How does GoRehab align with HEC curriculum requirements?',
      answer: 'Our content is meticulously crafted by academic experts to match HEC-approved physiotherapy curricula. Every quiz, question, and learning module is designed to complement your university coursework and prepare you for official examinations.',
      category: 'academic'
    },
    {
      id: 'mobile-compatibility',
      question: 'Is GoRehab available on both Android and iOS?',
      answer: 'Yes! GoRehab is available on both Android and iOS platforms. You can download it from the Google Play Store or Apple App Store. The app is optimized for mobile learning, allowing you to study during commutes, breaks, or anywhere convenient.',
      category: 'technical'
    },
    {
      id: 'offline-studying',
      question: 'Can I use GoRehab without an internet connection?',
      answer: 'Many core features work offline once you\'ve downloaded the content. You can take quizzes, review materials, and track your progress without needing a constant internet connection. Sync occurs automatically when you reconnect.',
      category: 'technical'
    },
    {
      id: 'progress-tracking',
      question: 'How does GoRehab track my learning progress?',
      answer: 'GoRehab uses advanced analytics to monitor your performance across different topics, identify weak areas, and suggest personalized study plans. You can view detailed statistics, streak counters, and achievement badges to stay motivated.',
      category: 'features'
    },
    {
      id: 'quiz-types',
      question: 'What types of quizzes and questions are available?',
      answer: 'We offer multiple quiz formats including MCQs, case studies, image-based questions, and scenario-based problems. Questions range from basic concepts to advanced clinical applications, all designed to enhance critical thinking skills.',
      category: 'features'
    },
    {
      id: 'student-collaboration',
      question: 'Can I study with classmates or form study groups?',
      answer: 'Yes! GoRehab includes social features that allow you to create study groups, challenge friends, share achievements, and collaborate on difficult topics. Learning together makes the experience more engaging and effective.',
      category: 'features'
    },
    {
      id: 'pricing-model',
      question: 'Is GoRehab free to use? What are the pricing options?',
      answer: 'GoRehab offers both free and premium tiers. The free version includes basic quizzes and features, while premium unlocks advanced analytics, unlimited practice tests, exclusive content, and priority support. Student-friendly pricing is always our priority.',
      category: 'pricing'
    },
    {
      id: 'university-partnerships',
      question: 'Does GoRehab work with universities and educational institutions?',
      answer: 'Absolutely! We partner with physiotherapy schools and universities to provide institutional licenses, custom content, and integration with existing learning management systems. Contact us for educational institution partnerships.',
      category: 'academic'
    },
    {
      id: 'data-privacy',
      question: 'How is my personal data and study information protected?',
      answer: 'We take data privacy seriously. All personal information is encrypted and stored securely. We never share your study data with third parties without explicit consent. Your privacy and academic confidentiality are our top priorities.',
      category: 'general'
    },
    {
      id: 'technical-support',
      question: 'What if I encounter technical issues or need help?',
      answer: 'Our support team is available through multiple channels - in-app chat, email support, and comprehensive help documentation. We also have video tutorials and a community forum where students help each other.',
      category: 'technical'
    },
    {
      id: 'content-updates',
      question: 'How often is the content updated and expanded?',
      answer: 'We continuously update our content based on curriculum changes, student feedback, and the latest developments in physiotherapy education. New quizzes, topics, and features are added regularly through app updates.',
      category: 'academic'
    }
  ];

  const categories = {
    general: { name: 'General', icon: HelpCircle, color: 'text-[var(--electric-blue)]' },
    features: { name: 'Features', icon: BookOpen, color: 'text-[var(--primary-green)]' },
    technical: { name: 'Technical', icon: Smartphone, color: 'text-[var(--coral-orange)]' },
    academic: { name: 'Academic', icon: GraduationCap, color: 'text-[var(--vibrant-purple)]' },
    pricing: { name: 'Pricing', icon: Users, color: 'text-[var(--bright-yellow)]' }
  };

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFAQs = selectedCategory 
    ? faqData.filter(faq => faq.category === selectedCategory)
    : faqData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <HelpCircle className="w-16 h-16 text-[var(--electric-blue)]" />
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Get answers to common questions about GoRehab, our features, and how we're revolutionizing physiotherapy education.
          </p>

          {/* Download App CTA */}
          
        </div>
      </section>

     
      

      {/* FAQ Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isOpen = openItems.includes(faq.id);
              
              return (
                <Card key={faq.id} className="duolingo-card overflow-hidden">
                  <Collapsible>
                    <CollapsibleTrigger
                      onClick={() => toggleItem(faq.id)}
                      className="w-full"
                    >
                      <CardHeader className="hover:bg-gray-50 transition-colors duration-200">
                        <div className="flex items-start justify-between text-left">
                          <div className="flex-1">
                            <CardTitle className="text-lg font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </CardTitle>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            {isOpen ? (
                              <Minus className="w-5 h-5 text-gray-500" />
                            ) : (
                              <Plus className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <CardContent className="pt-0 pb-6">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-[var(--electric-blue)] to-[var(--primary-green)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is here to help you succeed in your physiotherapy studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onNavigate('contact')}
              className="bg-white text-[var(--electric-blue)] hover:bg-gray-100 text-lg px-8 py-4 rounded-xl"
            >
              Contact Support
            </Button>
            
          </div>
        </div>
      </section>
    </div>
  );
}