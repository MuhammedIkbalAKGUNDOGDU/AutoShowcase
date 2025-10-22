import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap, Image, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PerformanceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    // Check if modal was already shown in this session
    const modalShown = sessionStorage.getItem("performanceModalShown");
    if (!modalShown) {
      // Show after 3 seconds delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("performanceModalShown", "true");
      }, 3000);
      return () => clearTimeout(timer);
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
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Performans Uyarısı</h2>
                  <p className="text-red-100 text-sm">Resim Yükleme Hızı</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Image className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Resim Yükleme Performansı
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Sitede bulunan görsel resimler demo sunucu kaynaklı olup
                  yükleme süreleri normalden daha uzun olabilir. Gerçek
                  sitemizde bu resimler optimize edilmiş sunucularda
                  barındırılacak ve çok daha hızlı açılacaktır.
                </p>
              </div>

              {/* Performance Info */}
              <div className="bg-red-50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Server className="w-5 h-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900 mb-1">
                      Demo Sunucu Sınırlamaları
                    </h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Resim boyutları optimize edilmemiş</li>
                      <li>• CDN kullanılmıyor</li>
                      <li>• Sıkıştırma uygulanmamış</li>
                      <li>• Gerçek sitede %80 daha hızlı</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Countdown */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  {countdown} saniye sonra kapanacak
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4">
              <Button
                onClick={handleClose}
                className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-medium"
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
