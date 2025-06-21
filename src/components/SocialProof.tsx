export const SocialProof = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            IHIS is the only health coach training program that healthcare professionals recognize and recommend.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
              <img src="/new-logo.png" alt="NBHWC Logo" className="w-16 h-16 object-contain" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Officially Approved</h3>
            <p className="text-gray-600">Approved Health and Wellness Coach Training & Education Program by the National Board for Health and Wellness Coaching</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">NBC</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Board Certification Path</h3>
            <p className="text-gray-600">Direct pathway to becoming a National Board Certified Health & Wellness Coach (NBC-HWC)</p>
          </div>

          <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-bold text-white">100%</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Exam Ready</h3>
            <p className="text-gray-600">Comprehensive training aligned with every competency on the national board exam</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What Healthcare Professionals Say About IHIS Graduates:
              </h3>
              <div className="space-y-4">
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-teal-500 pl-4">
                  "Finally, health coaches who actually understand the science and can work effectively within our healthcare system."
                </blockquote>
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-teal-500 pl-4">
                  "IHIS graduates bring a level of professionalism and competency that makes collaboration seamless."
                </blockquote>
                <blockquote className="text-lg text-gray-700 italic border-l-4 border-teal-500 pl-4">
                  "These are the only health coaches I feel confident referring my patients to."
                </blockquote>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-emerald-100 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Recognition That Matters</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Medical hospitals and clinics
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Insurance companies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Corporate wellness programs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Healthcare professionals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-teal-600 rounded-full"></span>
                    Government health initiatives
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
