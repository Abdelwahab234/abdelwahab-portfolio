import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MouseTracker from "./MouseTracker";
import Electrons from "./Electrons";
import Preloader from "./components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelwahab - Software Engineer Portfolio | عبدالوهاب - بورتفوليو مهندس برمجيات",
  description: "Portfolio of Abdelwahab, a passionate Software Engineer and Web Developer. بورتفوليو مهندس البرمجيات ومطور الويب عبدالوهاب. تصفح أعمالي، مشاريعي، وخبراتي.",
  keywords: [
    "Abdelwahab", "عبدالوهاب", "Abdelwahab Mohamed", "عبدالوهاب محمد",
    "Software Engineer", "مهندس برمجيات", "Web Developer", "مطور ويب",
    "Portfolio", "بورتفوليو", "Abdelwahab Portfolio", "بورتفوليو عبدالوهاب",
    "Front End Developer", "مطور واجهات أمامية", "Back End Developer", "مطور واجهات خلفية",
    "Full Stack Developer", "مطور مواقع متكامل", "React Developer", "Next.js Developer",
    "مطور تطبيقات ويب", "مطور ريأكت", "برمجة مواقع", "تصميم مواقع", "عمل مواقع",
    "إنشاء مواقع", "برمجة وتطوير", "مهندس برمجيات مصري", "مطور ويب عربي",
    "Software Development", "Web Development", "UI/UX", "JavaScript", "TypeScript",
    "Node.js", "Tailwind CSS", "Frontend Engineer", "Backend Engineer", "Tech Portfolio",
    "Abdelwahab Software", "Abdelwahab Web", "موقع عبدالوهاب", "السيرة الذاتية عبدالوهاب",
    "عبدالوهاب مطور ويب", "عبدالوهاب مهندس برمجيات", "تصميم وتطوير المواقع", "مبرمج",
    "مبرمج مواقع", "أفضل مبرمج مواقع", "Software developer", "Programmer",
    "Code", "Coding", "Tech", "Technology", "HTML", "CSS", "JS",
    "Abdelwahab's work", "أعمال عبدالوهاب", "مشاريع عبدالوهاب", "Abdelwahab projects",
    "Freelance web developer", "مطور ويب حر", "مستقل", "مطور مواقع مستقل",
    "Hire a web developer", "توظيف مطور ويب", "مطور مواقع احترافي", "Professional Web Developer",
    "Creative Developer", "مطور مبدع", "Interactive Web Design", "تصميم تفاعلي",
    "Web App Development", "تطوير تطبيقات الويب", "Custom Websites", "مواقع مخصصة",
    "SEO Expert", "خبير سيو", "تصدر نتائج البحث", "أفضل بورتفوليو", "Best Portfolio",
    "مطور انظمة", "مطور واجهات مستخدم", "تصميم وبرمجة", "شركات برمجة", "مصمم مواقع",
    "برمجة تطبيقات", "Software Architecture", "هندسة برمجيات", "Abdelwahab dev", "Dev Abdelwahab",
    "Portfolio website", "موقع شخصي", "موقع تعريفي", "CV website", "موقع سيرة ذاتية",
    "Abdelwahab Resume", "سي في عبدالوهاب", "Web programming", "برمجة الويب",
    "مستقل للبرمجة", "فري لانسر برمجة", "Freelance Software Engineer", "Tech Lead",
    "NextJS expert", "React expert", "خبير ريأكت", "خبير نكست جي اس"
  ],
  authors: [{ name: "Abdelwahab Mohamed", url: "https://github.com/Abdelwahab234" }],
  creator: "Abdelwahab Mohamed",
  publisher: "Abdelwahab Mohamed",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    title: "Abdelwahab - Software Engineer | عبدالوهاب - بورتفوليو مهندس برمجيات",
    description: "Portfolio of Abdelwahab, Software Engineer & Web Developer. بورتفوليو مهندس البرمجيات ومطور الويب عبدالوهاب.",
    siteName: "Abdelwahab Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Abdelwahab Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelwahab - Software Engineer | عبدالوهاب - بورتفوليو مهندس برمجيات",
    description: "Portfolio of Abdelwahab, Software Engineer & Web Developer. بورتفوليو مهندس البرمجيات عبدالوهاب.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "OjWUm3rs9F9Uy3YLOq70dZZWaS2Xn5dpLaUw3A9UdMo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader />
        <MouseTracker />
        <Electrons />
        {children}
      </body>
    </html>
  );
}
