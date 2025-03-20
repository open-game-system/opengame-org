
import React from 'react';
import { ArrowRight, Users, Bell, Tv, PlayCircle, User, Shield, Zap, Image as ImageIcon, ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import OGSLogo from '@/components/OGSLogo';
import OGSSmallLogo from '@/components/OGSSmallLogo';
import SectionHeader from '@/components/SectionHeader';
import FeatureCard from '@/components/FeatureCard';
import SDKCard from '@/components/SDKCard';
import FAQAccordion from '@/components/FAQAccordion';
import CodeSnippet from '@/components/CodeSnippet';
import ImageGallery from '@/components/ImageGallery';
import Footer from '@/components/Footer';

const Index = () => {
  // Sample code snippets
  const installCode = `npm install @ogs/auth-kit @ogs/notification-kit @ogs/cast-kit`;
  
  const usageCode = `import { OGSAuthKit } from '@ogs/auth-kit';

// Initialize the SDK
const authKit = new OGSAuthKit({
  appId: 'your-app-id',
  apiKey: 'your-api-key'
});

// Link user account
authKit.linkAccount()
  .then((user) => {
    console.log('User linked successfully', user);
  })
  .catch((error) => {
    console.error('Error linking account', error);
  });`;
  
  // Demo screenshots of Trivia Jam - the example implementation
  const triviaJamImages = [
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
    '/placeholder.svg',
  ];
  
  // FAQ items
  const faqItems = [
    {
      question: "What kind of native features can I access with OGS?",
      answer: "OGS provides access to native features like push notifications, TV casting, camera access, local storage, device sensors, and more while keeping your game as a web application."
    },
    {
      question: "Does my game need to be rewritten to use OGS?",
      answer: "No. OGS is designed to work with existing web games through simple SDK integration. You don't need to rewrite your game or learn new frameworks."
    },
    {
      question: "How does account linking work?",
      answer: "The auth-kit SDK provides a simple API to link user accounts between your game and the OGS platform. This allows for consistent identity across different games and platforms."
    },
    {
      question: "Is OGS available for all platforms?",
      answer: "OGS supports iOS, Android, desktop browsers, smart TVs, and game consoles that have web browsers. The SDK automatically detects the platform and provides appropriate APIs."
    },
    {
      question: "How much does OGS cost?",
      answer: "OGS offers a free tier for indie developers and small studios. For larger projects, we offer tiered pricing based on usage and features needed. Contact us for enterprise solutions."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <OGSSmallLogo className="w-12 h-12 mr-3" />
                <span className="font-orbitron text-lg font-bold">Open Game System</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold font-orbitron mb-4 bg-clip-text text-transparent bg-gradient-to-r from-ogs-purple to-primary">
                Bridge Web Games to Native Features
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Enable your web games to access native capabilities like push notifications and TV casting while maintaining their web-first nature.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#get-started">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="https://github.com/open-game-collective" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md">
                <OGSLogo className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Gradient background */}
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-ogs-purple/10 to-transparent -z-10" />
      </section>

      {/* What is OGS Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <SectionHeader 
            title="What is OGS?"
            subtitle="Open Game System enables web games to access native device features without sacrificing their web-first nature."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <FeatureCard 
              title="Web-First"
              description="Keep your game as a web application with all the benefits of web distribution and instant play."
              icon={<PlayCircle className="h-6 w-6 text-primary" />}
              delay={0}
            />
            <FeatureCard 
              title="Native Access"
              description="Seamlessly integrate with native device features like push notifications, camera, and more."
              icon={<Zap className="h-6 w-6 text-primary" />}
              delay={100}
            />
            <FeatureCard 
              title="Cross Platform"
              description="Works across mobile, desktop, smart TVs, and game consoles with browser support."
              icon={<Users className="h-6 w-6 text-primary" />}
              delay={200}
            />
            <FeatureCard 
              title="Secure"
              description="Enterprise-grade security with encrypted communication and strict permission controls."
              icon={<Shield className="h-6 w-6 text-primary" />}
              delay={300}
            />
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section id="components" className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Core Components"
            subtitle="OGS provides a suite of SDKs that enable different native capabilities for your web games."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <SDKCard 
              title="auth-kit"
              description="Link user accounts between games and OGS platform for seamless identity management."
              icon={<User className="h-6 w-6 text-primary" />}
              delay={0}
            />
            <SDKCard 
              title="notification-kit"
              description="Send and receive push notifications to keep players engaged, even when they're not actively playing."
              icon={<Bell className="h-6 w-6 text-primary" />}
              delay={200}
            />
            <SDKCard 
              title="cast-kit"
              description="Enable TV casting capabilities, allowing players to display their games on larger screens."
              icon={<Tv className="h-6 w-6 text-primary" />}
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* App Showcase Section - Updated for Trivia Jam */}
      <section id="showcase" className="section-padding">
        <div className="container mx-auto">
          <SectionHeader 
            title="OGS in Action: Trivia Jam"
            subtitle="Trivia Jam is the first example implementation of the OGS spec, showcasing how web games can leverage native features."
          />
          
          <div className="mt-8 text-center">
            <p className="mb-6 text-lg">
              Trivia Jam demonstrates how OGS enables web games to access native capabilities while maintaining their web-first nature.
            </p>
            
            <div className="flex justify-center mb-8">
              {/* Fixed Button as anchor issue by using asChild with proper nesting */}
              <Button asChild className="bg-primary hover:bg-primary/90 mr-4">
                <a href="https://triviajam.tv" target="_blank" rel="noopener noreferrer">
                  Play Trivia Jam <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <Button asChild variant="outline">
                <a href="https://github.com/open-game-collective/trivia-jam" target="_blank" rel="noopener noreferrer">
                  View on GitHub <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          
          <div className="mt-6">
            <ImageGallery images={triviaJamImages} />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeader 
            title="How It Works"
            subtitle="OGS bridges your web game to native features through a simple architecture."
          />
          
          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-3xl p-8 bg-card rounded-xl border border-border shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <h3 className="font-medium">Web Game</h3>
                  <p className="text-sm text-muted-foreground">Your existing web game integrates OGS SDKs</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <h3 className="font-medium">OGS Platform</h3>
                  <p className="text-sm text-muted-foreground">Securely manages access to native device features</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <h3 className="font-medium">Native Features</h3>
                  <p className="text-sm text-muted-foreground">Push notifications, TV casting, sensors, etc.</p>
                </div>
              </div>
              
              {/* Connecting lines */}
              <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-border transform -translate-y-1/2" />
              <div className="hidden md:block absolute top-1/2 left-2/3 w-1/3 h-0.5 bg-border transform -translate-y-1/2" />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Get Started"
            subtitle="Integrate OGS into your web game in minutes."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Install OGS SDKs</h3>
                    <p className="text-muted-foreground mb-4">Add OGS SDKs to your project using npm or yarn.</p>
                    <CodeSnippet code={installCode} title="Terminal" />
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Initialize the SDK</h3>
                    <p className="text-muted-foreground mb-4">Configure the SDK with your API keys and settings.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Use Native Features</h3>
                    <p className="text-muted-foreground mb-4">Access native capabilities through simple API calls.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <CodeSnippet code={usageCode} title="Example: Linking User Account" className="h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Frequently Asked Questions"
            subtitle="Get answers to common questions about implementing OGS."
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
