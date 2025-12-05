import { TrendingUp, Users, DollarSign, Heart, Building, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const benefits = [{
  icon: TrendingUp,
  title: "Build a Profitable Career",
  description: "Position yourself to charge premium rates with nationally recognized credentials that clients and healthcare professionals respect."
}, {
  icon: Building,
  title: "Medical Partnership Opportunities",
  description: "Open doors to collaborate with doctors, hospitals, and healthcare systems as a credentialed professional."
}, {
  icon: DollarSign,
  title: "Multiple Revenue Streams",
  description: "Individual coaching, group programs, corporate wellness, insurance reimbursement opportunities, and more."
}, {
  icon: Users,
  title: "Attract Quality Clients",
  description: "Board certification attracts serious clients who value professional expertise and are willing to invest in their health."
}, {
  icon: Heart,
  title: "Make Real Impact",
  description: "Bridge the gap between conventional and alternative medicine to truly transform lives and communities."
}, {
  icon: Star,
  title: "Stand Out in the Market",
  description: "Differentiate yourself from the thousands of coaches with weekend certifications and online courses."
}];
export const BenefitsSection = () => {
  return <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Passion Into Profit</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With IHIS board certification, you're not just getting trained - you're positioning yourself for long-term success in the growing health and wellness industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => <div key={index} className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>)}
        </div>

        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Your Health Coaching Empire?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join the select group of health coaches who have the credentials, skills, and business knowledge to create sustainable, profitable practices that make a real difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-teal-600">January 2026 Cohort</p>
              <p className="text-sm text-gray-600">Live calls start week of Aug 11</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-orange-600">Payment Plans Available</p>
              <p className="text-sm text-gray-600">As low as $250/month</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300" asChild>
            <a href="https://calendly.com/jillbucaro/15-minute-chat?month=2025-06" target="_blank" rel="noopener noreferrer">
              Schedule Free Call
            </a>
          </Button>
        </div>
      </div>
    </section>;
};