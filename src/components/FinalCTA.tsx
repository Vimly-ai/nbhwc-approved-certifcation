import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, CheckCircle } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full mb-6">
            <Clock className="h-5 w-5" />
            <span className="font-semibold">Limited Time - August 2025 Cohort</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Health Coaching Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Starts Here</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Don't let another year pass struggling with unrecognized certifications. Join the IHIS August cohort and position yourself for real success in the health coaching industry.
          </p>
        </div>

        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-8">What You Get When You Enroll Today:</h3>
            
            <div className="space-y-4">
              {[
                "Complete NBHWC-approved curriculum (100+ hours)",
                "Live mentored skill development sessions",
                "13 weeks of interactive group coaching",
                "Business building and marketing training",
                "Direct pathway to board certification",
                "Access to graduate community",
                "Payment plans as low as $250/month"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-teal-400 flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-white mb-2">August 2025 Cohort Details</h4>
              <p className="text-gray-300">Limited spots available</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-300">Program Duration:</span>
                <span className="text-white font-semibold">12-14 weeks</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-300">Live Calls Start:</span>
                <span className="text-white font-semibold">Week of Aug 11</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span className="text-gray-300">Schedule Options:</span>
                <span className="text-white font-semibold">2 time slots</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-300">Payment Plans:</span>
                <span className="text-white font-semibold">From $250/month</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://academyepic.kartra.com/pay/guDY2shAvpCp" target="_blank" rel="noopener noreferrer">
                  Secure Your Spot Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full border-2 border-teal-400 text-teal-400 hover:bg-teal-400/10 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
                asChild
              >
                <a href="https://calendly.com/jillbucaro/15-minute-chat?month=2025-06" target="_blank" rel="noopener noreferrer">
                  Schedule Free Consultation Call
                </a>
              </Button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-400">
                ✓ Payment plans available<br />
                ✓ NBHWC board certification pathway
              </p>
            </div>
          </div>
        </div>

        
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 px-4 py-2 rounded-full mb-4">
            <Users className="h-5 w-5" />
            <span className="font-semibold">Only 25 spots available per cohort</span>
          </div>
          
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't wait until the last minute. Cohorts fill up quickly, and the next opportunity won't be until 2026. Your future clients are waiting for a coach with real credentials - will that be you?
          </p>
        </div>
      </div>
    </section>
  );
};
