import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, name, image }) => {
  return (
    <div className="border border-gray-700 rounded-lg p-6 bg-black relative">
      <Quote className="w-8 h-8 text-gray-400 mb-4" />
      <p className="text-gray-400 text-sm leading-relaxed mb-6">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <img 
          src={image} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <span className="text-white font-medium">{name}</span>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "“Thareesha showed great dedication to learning and applying new technologies. His work ethic and technical growth were clearly visible throughout the project.” —CEO & Founder of C-Range International",
      name: "Duleeka Jayathissa",
      image: "src/assets/duleeka.jpeg"

      
    },
    {
      id: 2,
      quote: "“He demonstrated excellent problem-solving skills and a good understanding of both design and development. His ability to collaborate made working with him easy and productive.”— Team Lead at C-Range International",
      name: "Milinda Ranasinghe",
      image: "src/assets/milinda.jpeg"
    },
    {
      id: 3,
      quote: "“Thareesha consistently delivered clean, well-structured code and showed strong attention to detail. He quickly understood requirements and contributed effectively to team projects.”—Senior Web Developer at Revgenx",
      name: "Gayan Madushanka",
      image: "src/assets/gayan.jpeg"
      
    },
    {
      id: 4,
      quote: "“Thareesha showed great dedication to learning and applying new technologies. His work ethic and technical growth were clearly visible throughout the project.” —Senior team member at ESU Uni",
      name: "Nadeera Lakshan",
      image: "src/assets/nadeera.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
           Insights and feedback from senior developers, mentors, and team members I have worked with during academic and professional projects. Their perspectives highlight my technical skills, teamwork, problem-solving ability, and commitment to delivering high-quality work.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              name={testimonial.name}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}