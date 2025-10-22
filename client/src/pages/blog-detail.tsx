import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useParams, Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2, Heart } from "lucide-react";

// Blog images from public folder
const blogImage1 = "/Mercedes_luxury_sedan_showroom_a582117c.png";
const blogImage2 = "/Red_Porsche_sports_car_afac8338.png";
const blogImage3 = "/Blue_BMW_performance_sedan_0e589d84.png";
const blogImage4 = "/White_Audi_luxury_SUV_e1f6f55b.png";
const blogImage5 = "/Silver_Tesla_electric_sedan_62882bc5.png";
const blogImage6 = "/Green_Range_Rover_luxury_SUV_85b8eefb.png";

const getBlogPosts = (t: any) => {
  const getTags = (postId: string) => {
    const tagMap: { [key: string]: string[] } = {
      "premium-arac-bakimi-2024": ["Bakım", "Premium", "Performans"],
      "elektrikli-araclarin-gelecegi": ["Elektrikli", "Teknoloji", "Gelecek"],
      "luxury-suv-secimi": ["SUV", "Lüks", "Rehber"],
      "spor-araba-karsilastirma": ["Spor Araba", "Karşılaştırma", "Performans"],
      "arac-finansman-secenekleri": ["Finansman", "Lüks", "Rehber"],
      "arac-sigortasi-rehberi": ["Sigorta", "Güvenlik", "Rehber"],
    };
    return tagMap[postId] || [];
  };

  return {
    "premium-arac-bakimi-2024": {
      id: "premium-arac-bakimi-2024",
      title: t("blog.posts.premium-arac-bakimi-2024.title"),
      content: t("blog.posts.premium-arac-bakimi-2024.content"),
      image: blogImage1,
      author: "Ahmet Yılmaz",
      date: "2024-01-15",
      category: t("blog.posts.premium-arac-bakimi-2024.category"),
      readTime: "5 dk",
      tags: getTags("premium-arac-bakimi-2024"),
    },
    "elektrikli-araclarin-gelecegi": {
      id: "elektrikli-araclarin-gelecegi",
      title: t("blog.posts.elektrikli-araclarin-gelecegi.title"),
      content: `
      <p>Elektrikli araç teknolojisi, son yıllarda hızla gelişmekte ve premium otomotiv sektöründe önemli bir yer edinmektedir. 2024 yılı, bu alanda önemli dönüm noktalarına sahne olmaktadır.</p>
      
      <h2>Teknolojik Gelişmeler</h2>
      <p>Elektrikli araç teknolojisindeki en önemli gelişmeler:</p>
      
      <h3>Batarya Teknolojisi</h3>
      <p>Yeni nesil lityum-iyon bataryalar, daha uzun menzil ve daha hızlı şarj süreleri sunmaktadır. Solid-state batarya teknolojisi de yakın gelecekte ticari kullanıma hazır hale gelmektedir.</p>
      
      <h3>Şarj Altyapısı</h3>
      <p>Hızlı şarj istasyonları ağının genişlemesi, elektrikli araç kullanımını daha pratik hale getirmektedir. 350kW hızlı şarj teknolojisi artık yaygınlaşmaktadır.</p>
      
      <h2>Premium Markaların Elektrikli Modelleri</h2>
      <p>Lüks otomotiv markaları, elektrikli araç pazarında güçlü bir varlık göstermektedir:</p>
      
      <ul>
        <li><strong>Tesla Model S Plaid:</strong> 0-100 km/h 2.1 saniye</li>
        <li><strong>Porsche Taycan:</strong> Premium elektrikli spor araba deneyimi</li>
        <li><strong>Mercedes EQS:</strong> Lüks elektrikli sedan</li>
        <li><strong>BMW iX:</strong> Premium elektrikli SUV</li>
      </ul>
      
      <h2>Gelecek Öngörüleri</h2>
      <p>2024 ve sonrası için elektrikli araç sektöründe beklenen gelişmeler:</p>
      
      <h3>Otonom Sürüş Entegrasyonu</h3>
      <p>Elektrikli araçlar, otonom sürüş teknolojisi ile daha iyi entegre olmaktadır. Bu kombinasyon, geleceğin ulaşım çözümünü oluşturmaktadır.</p>
      
      <h3>Sürdürülebilirlik</h3>
      <p>Elektrikli araçlar, karbon ayak izini azaltarak çevre dostu ulaşım sağlamaktadır. Yenilenebilir enerji kaynakları ile şarj edildiğinde, tamamen sıfır emisyonlu ulaşım mümkündür.</p>
      
      <p>Elektrikli araç teknolojisi, premium otomotiv sektöründe devrim yaratmaya devam edecek ve geleceğin ulaşım çözümünün temelini oluşturacaktır.</p>
    `,
      image: blogImage5,
      author: "Elif Demir",
      date: "2024-01-12",
      category: t("blog.posts.elektrikli-araclarin-gelecegi.category"),
      readTime: "7 dk",
      tags: getTags("elektrikli-araclarin-gelecegi"),
    },
    "luxury-suv-secimi": {
      id: "luxury-suv-secimi",
      title: t("blog.posts.luxury-suv-secimi.title"),
      content: `
      <p>Lüks SUV pazarı, son yıllarda büyük bir büyüme yaşamış ve premium otomotiv markaları bu segmentte güçlü modeller sunmaktadır. Doğru SUV seçimi yapmak için dikkat edilmesi gereken önemli faktörler bulunmaktadır.</p>
      
      <h2>Lüks SUV Seçiminde Temel Kriterler</h2>
      <p>Premium SUV satın alırken göz önünde bulundurmanız gereken ana faktörler:</p>
      
      <h3>Performans ve Motor Seçenekleri</h3>
      <p>Lüks SUV'lar genellikle güçlü motor seçenekleri sunar. V6, V8 ve hatta elektrikli hibrit sistemler arasından ihtiyaçlarınıza uygun olanı seçmelisiniz.</p>
      
      <h3>İç Mekan Konforu</h3>
      <p>Premium SUV'ların en önemli özelliklerinden biri lüks iç mekan tasarımıdır. Deri döşeme, ahşap kaplamalar ve gelişmiş teknoloji paketleri dikkate alınmalıdır.</p>
      
      <h2>2024'ün En Popüler Lüks SUV Modelleri</h2>
      <ul>
        <li><strong>Range Rover Sport:</strong> Off-road yetenekleri ve lüks konforu</li>
        <li><strong>BMW X7:</strong> Geniş iç mekan ve güçlü performans</li>
        <li><strong>Mercedes GLS:</strong> 7 kişilik kapasite ve premium özellikler</li>
        <li><strong>Audi Q8:</strong> Spor tasarım ve teknoloji odaklı yaklaşım</li>
      </ul>
      
      <h2>Teknoloji ve Güvenlik Özellikleri</h2>
      <p>Modern lüks SUV'lar, gelişmiş güvenlik sistemleri ve teknoloji paketleri ile donatılmıştır:</p>
      
      <h3>Güvenlik Sistemleri</h3>
      <ul>
        <li>Adaptif hız sabitleyici</li>
        <li>Şerit takip asistanı</li>
        <li>Otomatik acil frenleme</li>
        <li>360 derece kamera sistemi</li>
      </ul>
      
      <h3>Konfor Özellikleri</h3>
      <ul>
        <li>Hava süspansiyon sistemi</li>
        <li>Masaj fonksiyonlu koltuklar</li>
        <li>Panoramik cam tavan</li>
        <li>Premium ses sistemi</li>
      </ul>
      
      <h2>Satın Alma Önerileri</h2>
      <p>Lüks SUV satın alırken dikkat edilmesi gereken noktalar:</p>
      <ul>
        <li>Bütçenizi belirleyin ve ona uygun modelleri araştırın</li>
        <li>Test sürüşü yaparak aracı deneyimleyin</li>
        <li>Yakıt tüketimi ve bakım maliyetlerini hesaplayın</li>
        <li>Garanti kapsamını ve servis ağını kontrol edin</li>
      </ul>
      
      <p>Doğru lüks SUV seçimi, hem günlük kullanımda konfor hem de uzun vadede değer korunması sağlayacaktır.</p>
    `,
      image: blogImage4,
      author: "Mehmet Kaya",
      date: "2024-01-10",
      category: t("blog.posts.luxury-suv-secimi.category"),
      readTime: "6 dk",
      tags: getTags("luxury-suv-secimi"),
    },
    "spor-araba-karsilastirma": {
      id: "spor-araba-karsilastirma",
      title: t("blog.posts.spor-araba-karsilastirma.title"),
      content: `
      <p>2024 yılı, spor araba dünyasında önemli gelişmelere sahne olmuştur. Hem geleneksel içten yanmalı motorlar hem de elektrikli teknolojiler bu segmentte güçlü bir şekilde temsil edilmektedir.</p>
      
      <h2>Premium Spor Araba Kategorileri</h2>
      <p>Spor arabalar genellikle üç ana kategoride değerlendirilir:</p>
      
      <h3>Grand Tourer (GT)</h3>
      <p>Uzun mesafe yolculuklar için tasarlanan, konfor ve performansı birleştiren modeller.</p>
      
      <h3>Supercar</h3>
      <p>Ekstrem performans ve çarpıcı tasarım odaklı, sınırlı üretim modelleri.</p>
      
      <h3>Hypercar</h3>
      <p>Teknoloji ve performansın sınırlarını zorlayan, çok nadir ve pahalı modeller.</p>
      
      <h2>2024'ün En İyi Spor Arabaları</h2>
      
      <h3>Porsche 911 Carrera S</h3>
      <p>Klasik tasarımı ve mükemmel performansı ile spor araba dünyasının ikonu. 0-100 km/h 3.7 saniye.</p>
      
      <h3>Ferrari 296 GTB</h3>
      <p>Hibrit teknoloji ile güçlendirilmiş, 830 beygir gücünde V6 motor. 0-100 km/h 2.9 saniye.</p>
      
      <h3>McLaren Artura</h3>
      <p>Hafif karbon fiber yapısı ve hibrit güç aktarımı ile dikkat çeken süper araba.</p>
      
      <h3>Lamborghini Huracán STO</h3>
      <p>Yarış teknolojisinden ilham alan, 640 beygir gücünde V10 motorlu performans canavarı.</p>
      
      <h2>Elektrikli Spor Arabalar</h2>
      <p>Elektrikli teknoloji spor araba segmentinde de güçlü bir şekilde yerini almaktadır:</p>
      
      <h3>Tesla Model S Plaid</h3>
      <p>1020 beygir gücü ve 0-100 km/h 2.1 saniye ile elektrikli performansın zirvesi.</p>
      
      <h3>Porsche Taycan Turbo S</h3>
      <p>Geleneksel Porsche deneyimini elektrikli teknoloji ile birleştiren başarılı model.</p>
      
      <h2>Performans Karşılaştırması</h2>
      <table>
        <tr>
          <th>Model</th>
          <th>0-100 km/h</th>
          <th>Maksimum Hız</th>
          <th>Güç</th>
        </tr>
        <tr>
          <td>Ferrari 296 GTB</td>
          <td>2.9s</td>
          <td>330 km/h</td>
          <td>830 HP</td>
        </tr>
        <tr>
          <td>Tesla Model S Plaid</td>
          <td>2.1s</td>
          <td>322 km/h</td>
          <td>1020 HP</td>
        </tr>
        <tr>
          <td>Porsche 911 Carrera S</td>
          <td>3.7s</td>
          <td>308 km/h</td>
          <td>450 HP</td>
        </tr>
      </table>
      
      <h2>Satın Alma Rehberi</h2>
      <p>Spor araba satın alırken dikkat edilmesi gereken faktörler:</p>
      <ul>
        <li><strong>Performans:</strong> Hızlanma, maksimum hız ve sürüş dinamikleri</li>
        <li><strong>Tasarım:</strong> Estetik çekicilik ve marka kimliği</li>
        <li><strong>Teknoloji:</strong> Gelişmiş sürüş asistanları ve infotainment</li>
        <li><strong>Değer Korunması:</strong> İkinci el piyasa değeri</li>
        <li><strong>Bakım Maliyetleri:</strong> Servis ve yedek parça maliyetleri</li>
      </ul>
      
      <p>2024 yılı, spor araba severler için çok zengin seçenekler sunmaktadır. Geleneksel içten yanmalı motorlardan elektrikli teknolojilere kadar geniş bir yelpazede modeller bulunmaktadır.</p>
    `,
      image: blogImage2,
      author: "Zeynep Özkan",
      date: "2024-01-08",
      category: t("blog.posts.spor-araba-karsilastirma.category"),
      readTime: "8 dk",
      tags: getTags("spor-araba-karsilastirma"),
    },
    "arac-finansman-secenekleri": {
      id: "arac-finansman-secenekleri",
      title: t("blog.posts.arac-finansman-secenekleri.title"),
      content: `
      <p>Premium araç satın almak, büyük bir yatırım gerektirir. Doğru finansman seçenekleri ile bu yatırımı daha erişilebilir hale getirmek mümkündür. 2024 yılında mevcut olan finansman seçeneklerini detaylı olarak inceleyelim.</p>
      
      <h2>Finansman Seçenekleri Türleri</h2>
      
      <h3>1. Klasik Kredi</h3>
      <p>En yaygın kullanılan finansman yöntemidir. Bankalar ve finansal kurumlar tarafından sunulan, sabit veya değişken faiz oranlı kredilerdir.</p>
      
      <h4>Avantajları:</h4>
      <ul>
        <li>Düşük faiz oranları</li>
        <li>Esnek ödeme planları</li>
        <li>Hızlı onay süreci</li>
        <li>Erken ödeme imkanı</li>
      </ul>
      
      <h3>2. Leasing (Kiralama)</h3>
      <p>Özellikle işletmeler için popüler olan leasing, aracı satın almak yerine belirli bir süre için kiralamayı içerir.</p>
      
      <h4>Avantajları:</h4>
      <ul>
        <li>Düşük başlangıç maliyeti</li>
        <li>Vergi avantajları</li>
        <li>Yeni model değiştirme imkanı</li>
        <li>Bakım ve sigorta dahil paketler</li>
      </ul>
      
      <h3>3. Balloon Payment (Balon Ödeme)</h3>
      <p>Düşük aylık ödemeler ve son dönemde büyük bir ödeme ile karakterize edilen finansman türüdür.</p>
      
      <h2>2024 Faiz Oranları ve Koşullar</h2>
      <p>Güncel finansman koşulları:</p>
      
      <table>
        <tr>
          <th>Finansman Türü</th>
          <th>Faiz Oranı</th>
          <th>Vade</th>
          <th>Minimum Ön Ödeme</th>
        </tr>
        <tr>
          <td>Klasik Kredi</td>
          <td>%1.2-2.5</td>
          <td>12-60 ay</td>
          <td>%20</td>
        </tr>
        <tr>
          <td>Leasing</td>
          <td>%0.8-1.8</td>
          <td>24-48 ay</td>
          <td>%10-15</td>
        </tr>
        <tr>
          <td>Balloon Payment</td>
          <td>%1.5-2.8</td>
          <td>36-48 ay</td>
          <td>%15</td>
        </tr>
      </table>
      
      <h2>Premium Markaların Finansman Programları</h2>
      
      <h3>Mercedes-Benz Financial Services</h3>
      <p>Mercedes-Benz'in kendi finansman şirketi, özel kampanyalar ve düşük faiz oranları sunmaktadır.</p>
      
      <h3>BMW Financial Services</h3>
      <p>BMW müşterileri için özel tasarlanmış finansman çözümleri ve premium hizmetler.</p>
      
      <h3>Porsche Financial Services</h3>
      <p>Porsche'nin lüks araçları için özel finansman programları ve yatırım danışmanlığı.</p>
      
      <h2>Finansman Başvurusu İçin Gerekli Belgeler</h2>
      <ul>
        <li>Kimlik belgesi (nüfus cüzdanı veya pasaport)</li>
        <li>Gelir belgesi (maaş bordrosu, SGK hizmet dökümü)</li>
        <li>İkametgah belgesi</li>
        <li>Banka hesap dökümü (son 3 ay)</li>
        <li>Vergi levhası (serbest meslek sahipleri için)</li>
        <li>Kredi notu raporu</li>
      </ul>
      
      <h2>Finansman Seçimi İçin Öneriler</h2>
      
      <h3>Bütçe Planlaması</h3>
      <p>Aylık gelirinizin maksimum %30'unu araç ödemelerine ayırmanız önerilir. Bu, diğer giderlerinizi etkilemeden rahat ödeme yapmanızı sağlar.</p>
      
      <h3>Faiz Oranı Karşılaştırması</h3>
      <p>Farklı finansman kurumlarının tekliflerini karşılaştırın. Küçük farklar bile uzun vadede büyük tasarruf sağlayabilir.</p>
      
      <h3>Erken Ödeme Seçenekleri</h3>
      <p>Erken ödeme yapma imkanınız varsa, bu seçeneği değerlendirin. Çoğu finansman kurumu erken ödemelerde ceza uygulamaz.</p>
      
      <h2>Sigorta ve Ek Hizmetler</h2>
      <p>Premium araç finansmanı ile birlikte düşünülmesi gereken ek maliyetler:</p>
      <ul>
        <li>Kasko sigortası</li>
        <li>Traffic sigortası</li>
        <li>GAP sigortası (finansman farkı sigortası)</li>
        <li>Uzatılmış garanti</li>
        <li>Bakım paketleri</li>
      </ul>
      
      <p>Doğru finansman seçimi ile premium araç sahibi olmak, hayalinizdeki aracı daha erişilebilir hale getirebilir. Detaylı araştırma ve karşılaştırma yaparak en uygun seçeneği bulabilirsiniz.</p>
    `,
      image: blogImage3,
      author: "Can Arslan",
      date: "2024-01-05",
      category: t("blog.posts.arac-finansman-secenekleri.category"),
      readTime: "4 dk",
      tags: getTags("arac-finansman-secenekleri"),
    },
    "arac-sigortasi-rehberi": {
      id: "arac-sigortasi-rehberi",
      title: t("blog.posts.arac-sigortasi-rehberi.title"),
      content: `
      <p>Premium araçlar, yüksek değerleri nedeniyle özel sigorta ihtiyaçları gerektirir. Doğru sigorta seçimi, hem mali koruma hem de gönül rahatlığı sağlar. Bu rehberde premium araç sigortası hakkında bilmeniz gereken her şeyi bulabilirsiniz.</p>
      
      <h2>Premium Araç Sigortası Türleri</h2>
      
      <h3>1. Kasko Sigortası</h3>
      <p>En kapsamlı sigorta türüdür ve aracınızın tüm hasarlarını kapsar.</p>
      
      <h4>Kapsamı:</h4>
      <ul>
        <li>Çarpışma hasarları</li>
        <li>Hırsızlık</li>
        <li>Yangın</li>
        <li>Doğal afetler</li>
        <li>Cam kırılması</li>
        <li>Çizik ve vandalizm</li>
      </ul>
      
      <h3>2. Trafik Sigortası (Zorunlu)</h3>
      <p>Yasal zorunluluk olan, üçüncü şahıslara verilen zararları karşılayan sigortadır.</p>
      
      <h3>3. GAP Sigortası</h3>
      <p>Finansman ile alınan araçlarda, sigorta bedeli ile kalan borç arasındaki farkı karşılar.</p>
      
      <h2>Premium Araçlar İçin Özel Sigorta Seçenekleri</h2>
      
      <h3>Agreed Value Coverage</h3>
      <p>Aracınızın değerini önceden belirleyerek, hasar durumunda bu değeri garanti eden sigorta türüdür.</p>
      
      <h3>Classic Car Insurance</h3>
      <p>Klasik ve vintage araçlar için özel olarak tasarlanmış sigorta paketleri.</p>
      
      <h3>Exotic Car Insurance</h3>
      <p>Lüks ve egzotik araçlar için yüksek limitli özel sigorta çözümleri.</p>
      
      <h2>2024 Sigorta Primleri ve Faktörler</h2>
      <p>Premium araç sigortası primlerini etkileyen faktörler:</p>
      
      <h3>Risk Faktörleri</h3>
      <ul>
        <li><strong>Araç Değeri:</strong> Daha değerli araçlar daha yüksek prim gerektirir</li>
        <li><strong>Marka ve Model:</strong> Hırsızlık riski yüksek modeller</li>
        <li><strong>Yaş ve Deneyim:</strong> Genç sürücüler daha yüksek risk</li>
        <li><strong>Kullanım Amacı:</strong> Ticari kullanım daha yüksek prim</li>
        <li><strong>Park Yeri:</strong> Güvenli park yeri prim indirimi sağlar</li>
      </ul>
      
      <h2>Sigorta Şirketleri Karşılaştırması</h2>
      <table>
        <tr>
          <th>Sigorta Şirketi</th>
          <th>Premium Araç Uzmanlığı</th>
          <th>Ortalama Prim</th>
          <th>Özel Hizmetler</th>
        </tr>
        <tr>
          <td>Allianz</td>
          <td>Evet</td>
          <td>₺15,000-25,000</td>
          <td>24/7 çekici, yedek araç</td>
        </tr>
        <tr>
          <td>Axa</td>
          <td>Evet</td>
          <td>₺12,000-22,000</td>
          <td>Premium servis ağı</td>
        </tr>
        <tr>
          <td>HDI</td>
          <td>Evet</td>
          <td>₺14,000-24,000</td>
          <td>Hızlı hasar tespiti</td>
        </tr>
      </table>
      
      <h2>Prim İndirimi Yöntemleri</h2>
      
      <h3>Güvenlik Önlemleri</h3>
      <ul>
        <li>Alarm sistemi kurulumu</li>
        <li>GPS takip sistemi</li>
        <li>Kapalı garaj kullanımı</li>
        <li>Güvenlik kamerası</li>
      </ul>
      
      <h3>Sürücü Profili</h3>
      <ul>
        <li>Kazasız sürücü indirimi</li>
        <li>Defansif sürüş kursu</li>
        <li>Düşük kilometre kullanımı</li>
        <li>Deneyimli sürücü statüsü</li>
      </ul>
      
      <h2>Hasar Süreci ve Haklarınız</h2>
      
      <h3>Hasar Bildirimi</h3>
      <p>Hasar durumunda yapılması gerekenler:</p>
      <ol>
        <li>Hasarı 24 saat içinde sigorta şirketine bildirin</li>
        <li>Hasar yerini değiştirmeyin</li>
        <li>Gerekli belgeleri hazırlayın</li>
        <li>Hasarlı aracı yetkili servise götürün</li>
      </ol>
      
      <h3>Haklarınız</h3>
      <ul>
        <li>Yetkili servis seçimi</li>
        <li>Orijinal yedek parça kullanımı</li>
        <li>Hasar tespitinde bulunma</li>
        <li>İtiraz etme hakkı</li>
      </ul>
      
      <h2>Özel Durumlar</h2>
      
      <h3>Koleksiyon Araçları</h3>
      <p>Klasik ve koleksiyon araçları için özel sigorta paketleri mevcuttur. Bu araçlar genellikle sınırlı kullanım için tasarlanmıştır.</p>
      
      <h3>Yarış ve Etkinlik Kullanımı</h3>
      <p>Yarış veya etkinlik kullanımı için ek sigorta kapsamı gerekebilir. Bu durumda özel poliçeler düzenlenir.</p>
      
      <h3>Uluslararası Kullanım</h3>
      <p>Yurtdışında araç kullanımı için yeşil kart ve ek kapsam gerekebilir.</p>
      
      <h2>Sigorta Seçimi İçin Öneriler</h2>
      <ul>
        <li>Farklı şirketlerden teklif alın</li>
        <li>Kapsam detaylarını dikkatli okuyun</li>
        <li>Müşteri hizmetleri kalitesini araştırın</li>
        <li>Hasar sürecini öğrenin</li>
        <li>Ek hizmetleri değerlendirin</li>
      </ul>
      
      <p>Doğru sigorta seçimi, premium araç yatırımınızı korur ve güvenli sürüş deneyimi sağlar. Detaylı araştırma yaparak ihtiyaçlarınıza en uygun sigorta paketini bulabilirsiniz.</p>
    `,
      image: blogImage6,
      author: "Ayşe Yıldız",
      date: "2024-01-03",
      category: t("blog.posts.arac-sigortasi-rehberi.category"),
      readTime: "5 dk",
      tags: getTags("arac-sigortasi-rehberi"),
    },
  };
};

export default function BlogDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const blogPosts = getBlogPosts(t);
  const post = blogPosts[id as keyof typeof blogPosts];

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-16 md:py-24 bg-background">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">{t("blog.notFound")}</h1>
            <p className="text-muted-foreground mb-8">
              {t("blog.notFoundMessage")}
            </p>
            <Link href="/blog">
              <Button>{t("blog.backToBlog")}</Button>
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="flex justify-center mb-6">
                <Link href="/blog">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    {t("blog.backToBlog")}
                  </Button>
                </Link>
              </div>

              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex items-center justify-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("tr-TR")}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  {t("blog.share")}
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Heart className="w-4 h-4" />
                  {t("blog.like")}
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <motion.div
              className="mt-12 pt-8 border-t"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold mb-4">{t("blog.tags")}</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
