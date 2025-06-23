import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareSync",
  description: "Connect with doctors anytime, anywhere",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} `}
      >

        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {/* Header */}

        <Header />

        <main className="min-h-screen">{children}</main>


        {/* Footer */}
        <footer className="bg-muted/50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-200">
            <p>Seamlessly connect patients with healthcare providers through real-time booking, smart notifications, and a user-first experience.</p>


          </div>
        </footer>

      </ThemeProvider>
      </body>
    </html>
    );
  }