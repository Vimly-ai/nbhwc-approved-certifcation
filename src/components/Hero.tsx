
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  useEffect(() => {
    if (isVideoPlaying) {
      // Create the Wistia embed script dynamically
      const script = document.createElement('script');
      script.src = 'https://fackrellandrew.wistia.com/embed/bo51j3rp46.js';
      script.async = true;
      script.onload = () => {
        console.log('Wistia script loaded');
        // Wait for Wistia to fully initialize, then force play
        const checkAndPlay = () => {
          const wistiaApi = (window as any).Wistia?.api('bo51j3rp46');
          if (wistiaApi) {
            console.log('Wistia API found, attempting to play');
            wistiaApi.play();
            // Hide any remaining play buttons
            setTimeout(() => {
              const playButtons = document.querySelectorAll('.wistia_click_to_play, .wistia_bigPlayButtonContainer, .wistia_playButton');
              playButtons.forEach(button => {
                (button as HTMLElement).style.display = 'none';
              });
            }, 100);
          } else {
            console.log('Wistia API not ready, retrying...');
            setTimeout(checkAndPlay, 200);
          }
        };
        checkAndPlay();
      };
      document.head.appendChild(script);
    }
  }, [isVideoPlaying]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-teal-50 via-white to-emerald-50">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-100/50 via-transparent to-transparent"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <img src="/lovable-uploads/d2aaf6c5-b5e0-48af-8a64-b8f90e6b1bd6.png" alt="Institute of Holistic Integrative Studies Logo" className="mx-auto h-20 md:h-24 w-auto" />
        </div>

        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold tracking-wide uppercase">AUGUST 2025 COHORT NOW ENROLLING</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Become a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-600">Board-Certified</span><br />
          Health & Wellness Coach
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">Whether you've explored other certifications or are just starting out, IHIS offers the complete path to a reputable, profitable coaching career, fully approved by the NBHWC and recognized by medical professionals.</p>

        {/* VSL Video Thumbnail with Background Image */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl shadow-2xl flex items-center justify-center relative overflow-hidden">
            {!isVideoPlaying ? (
              <>
                {/* Background Image */}
                <img 
                  src="/lovable-uploads/7ed7d008-e237-4141-a7e8-60f7e0233a2f.png" 
                  alt="Health Coach Program" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30"></div>
                {/* Play Button */}
                <Button 
                  size="lg" 
                  className="relative z-10 bg-white/20 hover:bg-white/30 text-white border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  onClick={handlePlayVideo}
                >
                  <Play className="mr-2 h-6 w-6" />
                  Watch This Important Message
                </Button>
                {/* Bottom Text */}
                <div className="absolute bottom-4 left-4 text-white/80 text-sm">
                  Learn why 90% of health coaches fail to build sustainable careers...
                </div>
              </>
            ) : (
              /* Wistia Embed Container */
              <div className="w-full h-full rounded-2xl overflow-hidden">
                <div 
                  className="wistia_embed wistia_async_bo51j3rp46 w-full h-full"
                  style={{ height: "100%", position: "relative" }}
                  data-wistia-options='{"autoPlay":true,"controlsVisibleOnLoad":true,"playbar":true,"volumeControl":true,"fullscreenButton":true,"settingsControl":false,"qualityControl":false,"playButton":false,"bigPlayButton":false}'
                >
                  &nbsp;
                </div>
              </div>
            )}
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => (window as any).gtag_report_stripe_conversion('https://academyepic.kartra.com/pay/guDY2shAvpCp')}
          >
            Secure Your Spot Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            onClick={() => (window as any).gtag_report_conversion('https://calendly.com/jillbucaro/15-minute-chat?month=2025-06')}
          >
            Schedule Free Call
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>✓ NBHWC Approved Program ✓ Board Certification Eligible ✓ Medical Partnership Ready</p>
        </div>
      </div>
    </section>
  );
};
