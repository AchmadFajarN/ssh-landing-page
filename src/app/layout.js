import "./globals.css";
import { Poppins, Raleway } from "next/font/google";
import Header from "@/Components/Header";
export const metadata = {
  title: {
    default: 'Surupan Software House | Partner Digital Startup & UMKM',
    template: '%s | Surupan Software House'
  },
  description: 'Jasa pembuatan website profesional, aplikasi kustom, dan solusi IT untuk akselerasi bisnis Startup dan UMKM di Indonesia.',
  keywords: ['software house Indonesia', 'jasa web UMKM', 'pembuatan aplikasi startup', 'solusi digital murah profesional'],
  authors: [{ name: 'Surupan Software House' }],
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://namadomainmu.com',
    title: 'Surupan Software House - Solusi Teknologi Tepat Guna',
    description: 'Kami membantu Startup dan UMKM bertransformasi digital dengan cepat dan efisien.',
    siteName: 'Surupan Software House',
    // images: [
    //   {
    //     url: '/og-image.jpg', // Simpan foto berukuran 1200x630 di folder public
    //     width: 1200,
    //     height: 630,
    //     alt: 'Preview Surupan Software House',
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${poppins.variable} ${raleway.variable} overflo antialiased w-[135vw] md:w-[120vw] xl:w-[100vw] overflow-x-hidden`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
