
import { AlertTriangle, X } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-semibold">The Problem With Most Health Coach Programs</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why 90% of Health Coaches <span className="text-red-600">Struggle to Build Sustainable Careers</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-red-500">
              <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">"Pop-Up" Certifications</h3>
                <p className="text-gray-600">Weekend courses and online certificates that healthcare professionals don't recognize or respect.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-red-500">
              <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Medical Credibility</h3>
                <p className="text-gray-600">Unable to partner with doctors, hospitals, or insurance companies because your certification isn't nationally recognized.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-red-500">
              <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Left With More Questions</h3>
                <p className="text-gray-600">Programs that leave you doubting your abilities and wondering how to actually build a profitable practice.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border-l-4 border-red-500">
              <X className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inconsistent Income</h3>
                <p className="text-gray-600">Struggling to find clients and charge premium rates without the credibility that comes with board certification.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 transform rotate-2 shadow-xl">
              <div className="bg-white rounded-xl p-6 transform -rotate-2">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">The Hard Truth:</h4>
                <p className="text-gray-600 text-lg leading-relaxed">
                  "In today's oversaturated health coaching market, having just any certification isn't enough. Healthcare professionals, potential clients, and insurance companies are looking for coaches with <strong>legitimate, board-recognized credentials</strong> that demonstrate real competency and professionalism."
                </p>
                <div className="mt-6 pt-6 border-t">
                  <p className="text-sm text-gray-500 italic">
                    - The reality facing most health coaches today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
