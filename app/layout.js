import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import CreateEventDrawer from "@/components/create-event";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PlanMyMeet - Meeting Scheduling App",
  description: "Meeting Scheduling App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {/* <Header /> */}
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            {children}
          </main>
          {/* Footer */}
          <footer className="bg-blue-100 border-t border-blue-200 py-8 mt-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600">
              <div className="text-center md:text-left w-full md:w-auto">
                <p className="font-semibold">
                  © {new Date().getFullYear()} PlanMyMeet. Made with{" "}
                  <span className="text-pink-500">💗</span> by Prateek
                </p>
              </div>
              <div className="flex items-center justify-center gap-6 w-full md:w-auto text-sm">
                <a
                  href="/privacy"
                  className="hover:underline hover:text-blue-700 transition"
                >
                  Privacy Policy
                </a>
                <a
                  href="mailto:hello@planmymeet.com"
                  className="hover:underline hover:text-blue-700 transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}