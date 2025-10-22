import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    // Check if modal was already shown in this session
    const modalShown = sessionStorage.getItem("demoModalShown");
    if (!modalShown) {
      setIsOpen(true);
      sessionStorage.setItem("demoModalShown", "true");
    }
  }, []);

  useEffect(() => {
    if (isOpen && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsOpen(false);
    }
  }, [isOpen, countdown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSoftiumClick = () => {
    window.open(
      "https://softiumtechnologies.com",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚗</span>
                </div>
                <div>
                  <h2 className="text-xl font-bold">Demo Site</h2>
                  <p className="text-blue-100 text-sm">Premium Auto Showcase</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ℹ️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Bu Bir Demo Sitedir
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bu site bir demo amaçlı hazırlanmıştır. İçerisinde bulunan tüm
                  değerler, fiyatlar ve bilgiler gerçek değildir. Tasarımdan
                  işlevlere kadar her türlü detay, inceleyen tarafın talepleri
                  doğrultusunda değiştirilebilir.
                </p>
              </div>

              {/* Softium Technologies */}
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 mb-3">
                  Bu site{" "}
                  <button
                    onClick={handleSoftiumClick}
                    className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center gap-1 transition-colors"
                  >
                    Softium Technologies
                    <ExternalLink className="w-3 h-3" />
                  </button>{" "}
                  tarafından hazırlanmıştır.
                </p>
              </div>

              {/* Countdown */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  {countdown} saniye sonra kapanacak
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4">
              <Button
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium"
              >
                Anladım, Devam Et
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
