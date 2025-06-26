
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "August 2023 Cohort Student",
    credential: "",
    content: "I LOVED how Jill created this course, she was very creative in how she put it all together. She taught us to learn the information in a way that was geared to everyone's different learning skills, which helped us remember the information! This is what makes this program stand out from the rest.",
    rating: 5
  },
  {
    name: "Dr. Michael Chen",
    credential: "Family Medicine Physician",
    content: "I've worked with many health coaches, but IHIS graduates are different. They understand the medical model and can work seamlessly within our healthcare system.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    credential: "NBC-HWC, Health Coach",
    content: "The business training was game-changing. I not only passed the board exam but also built a six-figure coaching practice within 18 months of graduation.",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success Stories From Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Graduate Community</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how IHIS graduates are building thriving, profitable health coaching practices that make a real difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl p-8 relative">
              <Quote className="h-8 w-8 text-purple-400 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                {testimonial.credential && (
                  <p className="text-sm text-gray-600">{testimonial.credential}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Join a Community of Successful Health Coaches
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            When you choose IHIS, you're not just getting training - you're joining a network of successful, board-certified health coaches who support each other's growth and success.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-purple-600 mb-2">500+</p>
              <p className="text-gray-600">Graduates Nationwide</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-pink-600 mb-2">95%</p>
              <p className="text-gray-600">Board Exam Pass Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-indigo-600 mb-2">$85K</p>
              <p className="text-gray-600">Average Graduate Income</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
