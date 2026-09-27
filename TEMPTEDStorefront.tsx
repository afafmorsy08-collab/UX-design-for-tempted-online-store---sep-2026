import { useState } from "react";
import { Icon } from "@iconify/react";

interface Product {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  image: string;
  tag?: string;
}

export default function App() {
  // State for shopping bag count
  const [cartCount, setCartCount] = useState<number>(2);
  // State for wishlist items (by product id)
  const [wishlist, setWishlist] = useState<string[]>([]);
  // State for AI assistant input
  const [aiInput, setAiInput] = useState<string>("");
  // State for newsletter email
  const [email, setEmail] = useState<string>("");

  const toggleWishlist = (id: string) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((item) => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleAiSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (aiInput.trim()) {
      alert(`شكراً لاستفسارك! سيقوم مساعدنا الذكي بالرد على: "${aiInput}" قريباً.`);
      setAiInput("");
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      alert(`تم الاشتراك بنجاح باستخدام البريد: ${email}`);
      setEmail("");
    }
  };

  const newArrivals: Product[] = [
    {
      id: "new-1",
      title: "توب ترتر أبيض",
      subtitle: "Sequin Top",
      price: "249 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-sequin-1790496022941-6iccv2kbqo6.png",
      tag: "جديد",
    },
    {
      id: "new-2",
      title: "كورسيه دانتيل عنابي",
      subtitle: "Lace Corset Top",
      price: "150 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-corset-1790496075393-5ie0lh0ylnr.png",
    },
    {
      id: "new-3",
      title: "جينز أسود بسلسلة",
      subtitle: "Chain Jeans",
      price: "549 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-jeans-1790496085076-ja157naa39.png",
    },
    {
      id: "new-4",
      title: "فستان ساتان ماكسي",
      subtitle: "Maxi Satin Dress",
      price: "550 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-satin-1790496096755-nszfomkkm0h.png",
    },
    {
      id: "new-5",
      title: "فستان بليزر أبيض",
      subtitle: "White Blazer Dress",
      price: "449 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-blazer-1790496108922-6sjph2z7df9.png",
    },
  ];

  const bestSellers: Product[] = [
    {
      id: "best-1",
      title: "توب تيوب رمادي",
      price: "50 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-tube-1790496134291-y92x338xp6f.png",
    },
    {
      id: "best-2",
      title: "كاميزول بني بدانتيل",
      price: "75 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-corset-1790496075393-5ie0lh0ylnr.png",
    },
    {
      id: "best-3",
      title: "تنورة كشكش سوداء",
      price: "250 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-jeans-1790496085076-ja157naa39.png",
    },
    {
      id: "best-4",
      title: "بنطال أخضر واسع",
      price: "185 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-editorial-1790496119681-il5cc3g73cc.png",
    },
    {
      id: "best-5",
      title: "فستان قصير بترتر",
      price: "450 EGP",
      image: "https://uxmagic.blob.core.windows.net/public/agent-images/tempted-satin-1790496096755-nszfomkkm0h.png",
    },
  ];

  const categories = [
    { name: "الملابس الرياضية", en: "SPORTSWEAR", icon: "lucide:shirt" },
    { name: "الفساتين", en: "DRESSES", icon: "lucide:sparkles" },
    { name: "البلوزات", en: "TOPS", icon: "lucide:layers" },
    { name: "البناطيل", en: "PANTS", icon: "lucide:move" },
    { name: "المعاطف", en: "COATS", icon: "lucide:shield" },
    { name: "الإكسسوارات", en: "ACCESSORIES", icon: "lucide:shopping-bag" },
    { name: "الحجاب", en: "HIJABS", icon: "lucide:circle" },
  ];

  return (
    <div className="min-h-screen w-full bg-background flex flex-col relative pb-16 lg:pb-0" dir="rtl">
      {/* Top Bar */}
      <div className="border-b border-border bg-card px-5 py-2 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between text-xs text-muted-foreground">
          <span className="flex items-center gap-2">
            <Icon icon="lucide:truck" className="text-base text-tertiary" />
            شحن مجاني للطلبات فوق 1500 EGP
          </span>
          <span dir="ltr">EN · AR 🇪🇬</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-border bg-background px-5 py-4 lg:px-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center justify-between">
            <div className="flex gap-2" dir="ltr">
              <button
                aria-label="حقيبة التسوق"
                className="relative flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card cursor-pointer hover:bg-muted transition-colors"
              >
                <Icon icon="lucide:shopping-bag" className="text-xl text-foreground" />
                {cartCount > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-tertiary text-[10px] text-tertiary-foreground font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                aria-label="المفضلة"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card cursor-pointer hover:bg-muted transition-colors"
              >
                <Icon icon="lucide:heart" className="text-xl text-foreground" />
              </button>
            </div>

            <div className="text-center">
              <p className="font-heading text-3xl tracking-[0.18em] lg:text-5xl text-foreground">
                TEMPTED
              </p>
              <p className="mt-1 text-[8px] tracking-[0.28em] text-muted-foreground">
                MORE THAN JUST FASHION
              </p>
            </div>

            <button
              aria-label="بحث"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border bg-card cursor-pointer hover:bg-muted transition-colors"
            >
              <Icon icon="lucide:search" className="text-xl text-foreground" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="mt-5 hidden items-center justify-center gap-8 text-sm lg:flex">
            <a href="#" className="border-b-2 border-primary pb-3 font-semibold text-foreground">
              الرئيسية
            </a>
            <a href="#new-arrivals" className="pb-3 text-muted-foreground hover:text-foreground transition-colors">
              تسوقي
            </a>
            <a href="#new-arrivals" className="pb-3 text-muted-foreground hover:text-foreground transition-colors">
              وصل حديثاً
            </a>
            <a href="#best-sellers" className="pb-3 text-muted-foreground hover:text-foreground transition-colors">
              الأكثر مبيعاً
            </a>
            <a href="#editorial" className="pb-3 text-muted-foreground hover:text-foreground transition-colors">
              قصتنا
            </a>
            <a href="#concierge" className="pb-3 text-muted-foreground hover:text-foreground transition-colors">
              المساعدة
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative max-h-[680px] overflow-hidden border-b border-border">
          <img
            src="https://uxmagic.blob.core.windows.net/public/agent-images/tempted-hero-1790496010933-qsynlv576a.png"
            alt="امرأة بفستان عنابي في استوديو داكن"
            className="h-[520px] w-full object-cover object-center lg:h-[620px]"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-background via-background/80 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 lg:px-10">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.24em] text-tertiary">
                TEMPTED / 2025 COLLECTION
              </p>
              <h1 className="mt-5 text-balance font-heading text-5xl font-bold leading-tight lg:text-7xl text-foreground">
                راحة وأناقة في كل لحظة
              </h1>
              <p className="mt-6 max-w-lg text-pretty leading-8 text-muted-foreground lg:text-lg">
                قطع تمنحك حرية الحركة وأناقة الحضور، بتفاصيل تُصمَّم خصيصاً لترافق يومك كما تريدين.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#new-arrivals"
                  className="flex min-h-11 items-center gap-3 rounded-lg bg-primary px-6 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  تسوقي الآن <Icon icon="lucide:arrow-left" className="text-lg" />
                </a>
                <a
                  href="#editorial"
                  className="flex min-h-11 items-center justify-center rounded-lg border border-primary px-6 font-semibold text-foreground hover:bg-primary/10 transition-colors"
                >
                  اكتشفي القصة
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="border-b border-border bg-card px-5 py-5 lg:px-10">
          <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {categories.map((cat, idx) => (
              <a
                key={idx}
                href="#new-arrivals"
                className="flex min-h-28 flex-col items-center justify-center gap-2 rounded-xl border border-border bg-background p-3 text-center text-sm hover:border-primary transition-colors"
              >
                <Icon icon={cat.icon} className="text-2xl text-foreground" />
                <span className="text-foreground font-medium">{cat.name}</span>
                <small dir="ltr" className="text-muted-foreground text-[10px]">
                  {cat.en}
                </small>
              </a>
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section id="new-arrivals" className="px-5 py-16 lg:px-10">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="text-xs tracking-[0.22em] text-tertiary">THE LATEST EDIT</p>
                <h2 className="mt-2 text-4xl font-heading font-bold text-foreground">وصل حديثاً</h2>
                <p dir="ltr" className="mt-1 text-sm text-muted-foreground">
                  New arrivals curated for you
                </p>
              </div>
              <a href="#new-arrivals" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                عرض الكل <Icon icon="lucide:arrow-left" />
              </a>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {newArrivals.map((product) => (
                <article key={product.id} className="overflow-hidden rounded-xl border border-border bg-card flex flex-col justify-between">
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-[50%_0%] hover:scale-105 transition-transform duration-300"
                    />
                    {product.tag && (
                      <span className="absolute right-3 top-3 rounded-full bg-tertiary px-3 py-1 text-[10px] text-tertiary-foreground font-semibold">
                        {product.tag}
                      </span>
                    )}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="أضيفي للمفضلة"
                      className="absolute left-3 top-3 flex min-h-10 min-w-10 items-center justify-center rounded-full bg-background text-foreground shadow-theme cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Icon
                        icon={wishlist.includes(product.id) ? "lucide:heart-handshake" : "lucide:heart"}
                        className={`text-lg ${wishlist.includes(product.id) ? "text-destructive" : "text-foreground"}`}
                      />
                    </button>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{product.title}</p>
                      {product.subtitle && (
                        <p dir="ltr" className="text-xs text-muted-foreground">
                          {product.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <b dir="ltr" className="text-foreground">{product.price}</b>
                      <button
                        onClick={addToCart}
                        aria-label="أضيفي للحقيبة"
                        className="flex min-h-10 min-w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground cursor-pointer hover:opacity-90 transition-opacity"
                      >
                        <Icon icon="lucide:plus" className="text-lg" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Section */}
        <section id="editorial" className="mx-5 overflow-hidden rounded-xl border border-border bg-card lg:mx-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-72 overflow-hidden lg:order-2 lg:h-[420px]">
              <img
                src="https://uxmagic.blob.core.windows.net/public/agent-images/tempted-editorial-1790496119681-il5cc3g73cc.png"
                alt="تفاصيل إطلالة خضراء مصممة بعناية"
                className="h-full w-full object-cover object-[50%_0%]"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:order-1 lg:p-16">
              <p className="text-xs tracking-[0.22em] text-tertiary">THE TEMPTED STANDARD</p>
              <h2 className="mt-3 text-4xl font-heading font-bold text-foreground">تفاصيل تصنع الفرق</h2>
              <p className="mt-5 max-w-md text-pretty leading-7 text-muted-foreground">
                نختار الخامات بعناية، ونصقل كل خط وكل ملمس لتمنحك قطعاً تعيش معك وتُشبهك.
              </p>
              <button className="mt-8 min-h-11 w-fit rounded-lg border border-primary px-6 font-semibold text-foreground hover:bg-primary/10 transition-colors cursor-pointer">
                اكتشفي المزيد
              </button>
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section id="best-sellers" className="px-5 py-16 lg:px-10">
          <div className="mx-auto max-w-[1440px]">
            <div className="mb-8">
              <p className="text-xs tracking-[0.22em] text-tertiary">MOST LOVED</p>
              <h2 className="mt-2 text-4xl font-heading font-bold text-foreground">الأكثر مبيعاً</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
              {bestSellers.map((product, idx) => (
                <article
                  key={product.id}
                  className={`overflow-hidden rounded-xl border border-border bg-card flex flex-col justify-between ${
                    idx === 4 ? "hidden lg:flex" : "flex"
                  }`}
                >
                  <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover object-[50%_0%] hover:scale-105 transition-transform duration-300"
                    />
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="أضيفي للمفضلة"
                      className="absolute left-3 top-3 flex min-h-10 min-w-10 items-center justify-center rounded-full bg-background text-foreground shadow-theme cursor-pointer hover:scale-105 transition-transform"
                    >
                      <Icon
                        icon={wishlist.includes(product.id) ? "lucide:heart-handshake" : "lucide:heart"}
                        className={`text-lg ${wishlist.includes(product.id) ? "text-destructive" : "text-foreground"}`}
                      />
                    </button>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <p className="font-semibold text-foreground">{product.title}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <b dir="ltr" className="text-foreground">{product.price}</b>
                      <button
                        onClick={addToCart}
                        aria-label="أضيفي للحقيبة"
                        className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground cursor-pointer hover:opacity-90 transition-opacity"
                      >
                        <Icon icon="lucide:plus" className="text-sm" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Concierge Section */}
        <section id="concierge" className="mx-5 mb-16 overflow-hidden rounded-xl border border-border bg-accent lg:mx-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_360px]">
            <div className="p-8 lg:p-12">
              <p className="font-heading text-3xl tracking-wide text-foreground">TEMPTED</p>
              <h2 className="mt-4 text-3xl font-heading font-bold text-foreground">مساعدك الذكي للتسوق</h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">
                قولي لنا المناسبة أو الستايل الذي تحبينه، وسنساعدك في اختيار المقاس وتنسيق إطلالة متكاملة.
              </p>
              <form onSubmit={handleAiSubmit} className="mt-6 flex min-h-12 max-w-xl items-center gap-3 rounded-lg border border-border bg-background px-3">
                <input
                  aria-label="سؤالك للمساعد"
                  placeholder="اكتبي سؤالك هنا..."
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  className="min-w-0 flex-1 bg-background text-sm text-foreground outline-none"
                />
                <button
                  type="submit"
                  aria-label="إرسال السؤال"
                  className="flex min-h-10 min-w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <Icon icon="lucide:arrow-left" className="text-lg" />
                </button>
              </form>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => setAiInput("ما هي أفضل المنتجات مبيعاً هذا الأسبوع؟")}
                  className="rounded-full border border-border px-3 py-2 text-xs text-foreground bg-background/50 hover:bg-background transition-colors cursor-pointer"
                >
                  أفضل المنتجات مبيعاً
                </button>
                <button
                  onClick={() => setAiInput("أبحث عن فستان مناسب لسهرة مسائية")}
                  className="rounded-full border border-border px-3 py-2 text-xs text-foreground bg-background/50 hover:bg-background transition-colors cursor-pointer"
                >
                  إيه مناسب ليا؟
                </button>
              </div>
            </div>
            <div className="hidden h-[360px] overflow-hidden md:block">
              <img
                src="https://uxmagic.blob.core.windows.net/public/agent-images/tempted-hero-1790496010933-qsynlv576a.png"
                alt="إطلالة Tempted للمساعدة في التسوق"
                className="h-full w-full object-cover object-left"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-5 py-10 lg:px-10">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-3xl tracking-[0.16em] text-foreground">TEMPTED</p>
            <p className="mt-2 text-[10px] tracking-[0.24em] text-muted-foreground">
              MORE THAN JUST FASHION
            </p>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">اشتركي في نشرتنا البريدية</h3>
            <p className="mt-2 text-sm text-muted-foreground">كوني أول من يعرف عن وصولاتنا الحصرية.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-5 flex min-h-12 overflow-hidden rounded-lg border border-border">
              <input
                aria-label="بريدك الإلكتروني"
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="min-w-0 flex-1 bg-background px-4 text-sm text-foreground outline-none"
              />
              <button type="submit" className="bg-primary px-5 text-sm font-semibold text
