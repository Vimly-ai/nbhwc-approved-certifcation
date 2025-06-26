import { CheckCircle, Award, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SolutionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-teal-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        {/* NBHWC Approved Image */}
        <div className="text-center mb-12">
          <img 
            src="https://d11n7da8rpqbjy.cloudfront.net/academyepic/725063486925nbhwc-approved-seal_web-1536x731.png" 
            alt="NBHWC Approved Training Program" 
            className="mx-auto h-32 md:h-40 w-auto"
          />
        </div>

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6">
            <Award className="h-5 w-5" />
            <span className="font-semibold">The IHIS Solution</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">ONLY</span> Health Coach Program You Need
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            IHIS bridges the gap between alternative and conventional medicine with the nation's most comprehensive, board-recognized health coach training program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What Makes IHIS Different?</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">NBHWC Approved Program</h4>
                  <p className="text-gray-600">Official approval from the National Board for Health and Wellness Coaching - the gold standard in our industry.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Board Certification Pathway</h4>
                  <p className="text-gray-600">Direct pathway to becoming a National Board Certified Health & Wellness Coach (NBC-HWC).</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Medical Partnership Ready</h4>
                  <p className="text-gray-600">Credentials that healthcare professionals recognize and respect for collaboration opportunities.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Business Building Focus</h4>
                  <p className="text-gray-600">Not just coaching skills - but how to build and scale a profitable coaching practice.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Post Graduate Support</h4>
                  <p className="text-gray-600">Ongoing mentorship and resources to help you succeed after certification completion.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Small Groups/High Touch</h4>
                  <p className="text-gray-600">Intimate cohort sizes ensure personalized attention and meaningful connections with peers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Exam Prep Built In</h4>
                  <p className="text-gray-600">Comprehensive preparation for the NBHWC board exam integrated throughout the curriculum.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-teal-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">12-Week Intensive Program</h4>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-700">50+ Hours Asynchronous Learning</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Mentored Skill Development</span>
                </div>

                <div className="flex items-center gap-3 p-3 bg-teal-50 rounded-lg">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Live Group Sessions</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-teal-100">
                <p className="text-center text-sm text-gray-600">
                  <strong>Result:</strong> Board exam ready + Business building skills
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-4 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://academyepic.kartra.com/pay/guDY2shAvpCp" target="_blank" rel="noopener noreferrer">
              Get Started Today - August Cohort
            </a>
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Limited spots available • Payment plans as low as $250/month
          </p>
        </div>
      </div>
    </section>
  );
};
