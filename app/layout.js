import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "CareSync",
  description: "Seamlessly connect patients with healthcare providers through real-time booking, smart notifications, and a user-first experience.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: "dark",
    }}>
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
        <Toaster richColors/>


        {/* Footer */}
        <footer className="bg-muted/50 py-4">
          <div className="container mx-auto px-4 text-center text-gray-200">
            <p>Seamlessly connect patients with healthcare providers through real-time booking, smart notifications, and a user-first experience.</p>

          </div>
        </footer>

      </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}