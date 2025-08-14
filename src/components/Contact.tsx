import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'alex.johnson@email.com',
    href: 'mailto:alex.johnson@email.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'San Francisco, CA',
    href: '#',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a 
                question, want to collaborate, or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-card p-4 hover:shadow-glow transition-all duration-300">
                  <a href={info.href} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>
          </div>

          <Card className="glass-card p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input placeholder="John" className="bg-background/50" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input placeholder="Doe" className="bg-background/50" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input placeholder="Project Inquiry" className="bg-background/50" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  rows={5} 
                  placeholder="Tell me about your project..." 
                  className="bg-background/50"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
              >
                <Send size={20} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}