import { Sparkles, MessageSquare, Gift } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import GradientBackground from "@/components/GradientBackground";
import Demo from "@/components/home-page/Demo";
import DataFooter from "@/components/home-page/DataFooter";
import Script from "next/script";
import HowItWorks from "@/components/HowItWorks";

const cssLoader = `
    let head = document.getElementsByTagName('HEAD')[0];
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.css';
    head.appendChild(link);
`;

export default function HomePage() {
  return (
    <div className="min-h-screen from-orange-50 to-white">
      <GradientBackground>
        <header className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-orange-600">Zesty</h1>
            <nav>
              <a href="#features" className="text-orange-600 hover:text-orange-800 mx-4">
                Features
              </a>
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition duration-300">
                Get Started
              </button>
            </nav>
          </div>
        </header>

        <main className="container mx-auto px-4 py-16">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Beta version
            </div>
          </div>

          <section className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Gamified{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                feedback
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">Make giving feedback fun and rewarding</p>
            <div>
              <Script id="waitlist-css" dangerouslySetInnerHTML={{ __html: cssLoader }} />
              <Script
                src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
                strategy="lazyOnload"
              />

              <div
                id="getWaitlistContainer"
                className="flex justify-center"
                data-waitlist_id="19243"
                data-widget_type="WIDGET_2"
              />
            </div>
          </section>

          <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-white shadow-lg hover:shadow-xl transition duration-300 border-t-2 border-orange-400">
              <CardHeader>
                <Sparkles className="text-orange-500 w-10 h-10 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800">Engaging Challenges</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Turn giving feedback into a exciting quest and create challenges that keep users coming back for more.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition duration-300 border-t-2 border-orange-400">
              <CardHeader>
                <MessageSquare className="text-orange-500 w-10 h-10 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800">Insightful Feedback</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Collect valuable, actionable feedback that helps improve your products and services.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition duration-300 border-t-2 border-orange-400">
              <CardHeader>
                <Gift className="text-orange-500 w-10 h-10 mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800">Rewarding Experience</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Incentivize participation with a points system, badges, and crypto-rewards.
                </p>
              </CardContent>
            </Card>
          </section>

          <Demo />

          <DataFooter />

          <HowItWorks />

          <section className="text-center mx-auto max-w-4xl px-4 py-32" id="cta">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Revolutionize Your Feedback Process?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Be one of the first projects to join our Waitlist and receive a 50% discount for 3 months.
            </p>

            <Script id="waitlist-css" dangerouslySetInnerHTML={{ __html: cssLoader }} />
            <Script
              src="https://prod-waitlist-widget.s3.us-east-2.amazonaws.com/getwaitlist.min.js"
              strategy="lazyOnload"
            />

            <div
              id="getWaitlistContainer"
              data-waitlist_id="19243"
              className="flex justify-center"
              data-widget_type="WIDGET_2"
            />
          </section>
        </main>

        <footer className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Zesty. All rights reserved.</p>
          </div>
        </footer>
      </GradientBackground>
    </div>
  );
}
