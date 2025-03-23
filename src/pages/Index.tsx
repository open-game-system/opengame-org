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
import { Mermaid } from '@/components/ui/mermaid';
import SimpleSequenceDiagram from '@/components/ui/SimpleSequenceDiagram';
import SDKVisual from '@/components/SDKVisual';

const Index = () => {
  // Sample code snippets
  const installCode = `# Install all kits
npm install \\
  @open-game-system/auth-kit \\
  @open-game-system/notification-kit \\
  @open-game-system/cast-kit

# Or install individually as needed
npm install @open-game-system/auth-kit`;
  
  const authKitCode = `import { createAuthClient } from '@open-game-system/auth-kit/client';

// Initialize the auth client
const authClient = createAuthClient({
  gameId: 'your-game-id',
  apiKey: 'your-api-key'
});

// Link user account
authClient.linkAccount()
  .then((response) => {
    console.log('User linked successfully', response.user);
  })
  .catch((error) => {
    console.error('Error linking account', error);
  });`;

  const notificationKitCode = `import { createNotificationClient } from '@open-game-system/notification-kit/client';

// Initialize the notification client
const notificationClient = createNotificationClient({
  gameId: 'your-game-id',
  apiKey: 'your-api-key'
});

// Send a notification
notificationClient.sendNotification({
  recipient: { gameUserId: 'user-123' },
  notification: {
    type: 'your_turn',
    title: 'Your Turn',
    body: "Player 2 has made their move. It's your turn now!",
    data: { gameId: 'game-456' },
    deepLink: 'https://triviajam.tv/games/3f7a6d8c-1e9b-4f82-a7d5-8e91c6b4d712'
  }
})
.then((result) => {
  console.log('Notification sent:', result.id);
})
.catch((error) => {
  console.error('Error sending notification:', error);
});`;

  const castKitCode = `import { createCastClient } from '@open-game-system/cast-kit/client';

// Initialize the cast client
const castClient = createCastClient();

// Signal that the game is ready to cast
castClient.signalReady({
  gameId: 'your-game-id',
  roomCode: 'room-123',
  broadcastUrl: 'https://yourgame.com/tv?gameId=your-game-id&roomCode=room-123'
});

// Listen for cast state changes
castClient.subscribe((state) => {
  if (state.isCasting) {
    console.log('Casting to:', state.deviceName);
    // Switch to controller UI
  }
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
      question: "What is the OGS App?",
      answer: "The OGS App is an open-source sandbox environment that lets your web game access native mobile capabilities instantly without requiring you to build a native app. Your game loads inside the OGS App WebView with access to push notifications, TV casting, and other native features."
    },
    {
      question: "What are Open Game Services?",
      answer: "Open Game Services are hosted API services that power the OGS ecosystem. They include Notification Service for push notifications, Identity Service for account linking, and Casting Service for TV casting. These services can be used with the OGS App or self-hosted for complete control."
    },
    {
      question: "What kind of native features can I access with OGS?",
      answer: "OGS provides access to native features like push notifications, TV casting, camera access, local storage, device sensors, and more while keeping your game as a web application."
    },
    {
      question: "Does my game need to be rewritten to use OGS?",
      answer: "No. OGS is designed to work with existing web games through simple SDK integration. You keep your web-first approach and add native capabilities progressively without any major code changes."
    },
    {
      question: "Can I use OGS App without using Open Game Services?",
      answer: "Yes. The OGS ecosystem is modular. You can use the OGS App as a sandbox environment with your own backend services. Similarly, you can use Open Game Services without requiring players to use the OGS App, though some features may require the app for full functionality."
    },
    {
      question: "Is OGS available for all platforms?",
      answer: "OGS supports iOS, Android, desktop browsers, smart TVs, and game consoles that have web browsers. The SDK automatically detects the platform and provides appropriate APIs."
    },
    {
      question: "How much does OGS cost?",
      answer: "OGS components are open-source and free to use. The OGS App is available for free download. For casted games, we provide a free tier, then meter bandwidth and charge based on usage with no hidden markups. We maintain clear, transparent pricing based purely on actual usage."
    }
  ];

  // Account linking sequence diagram entities and messages
  const accountLinkingEntities = [
    { id: 'user', label: 'User' },
    { id: 'gameClient', label: 'Game Client' },
    { id: 'gameServer', label: 'Game Server' },
    { id: 'ogsProvider', label: 'OGS Provider API' },
    { id: 'ogsWeb', label: 'OGS Web UI' }
  ];

  const accountLinkingMessages = [
    { from: 'user', to: 'gameClient', label: 'Initiates account linking' },
    { from: 'gameClient', to: 'gameServer', label: 'Request link token' },
    { from: 'gameServer', to: 'ogsProvider', label: 'POST /api/v1/auth/account-link-token' },
    { from: 'ogsProvider', to: 'ogsProvider', label: 'Validates request & generates token' },
    { from: 'ogsProvider', to: 'gameServer', label: 'Returns link token', direction: 'backward' as const },
    { from: 'gameServer', to: 'gameClient', label: 'Returns link token', direction: 'backward' as const },
    { from: 'gameClient', to: 'ogsWeb', label: 'Redirects to link account page' },
    { from: 'ogsWeb', to: 'ogsProvider', label: 'Validates token' },
    { from: 'ogsWeb', to: 'user', label: 'Displays authentication UI' },
    { from: 'user', to: 'ogsWeb', label: 'Authenticates with OGS' },
    { from: 'ogsWeb', to: 'user', label: 'Displays confirmation UI' },
    { from: 'user', to: 'ogsWeb', label: 'Confirms account linking' },
    { from: 'ogsWeb', to: 'ogsProvider', label: 'Processes account linking' },
    { from: 'ogsProvider', to: 'ogsProvider', label: 'Links accounts' },
    { from: 'ogsWeb', to: 'gameClient', label: 'Redirects back to game', direction: 'backward' as const },
    { from: 'gameClient', to: 'gameServer', label: 'Verifies link success' },
    { from: 'gameServer', to: 'ogsProvider', label: 'POST /api/v1/auth/verify-link-token' },
    { from: 'ogsProvider', to: 'gameServer', label: 'Confirms link status', direction: 'backward' as const },
    { from: 'gameServer', to: 'gameClient', label: 'Updates UI to show linked status', direction: 'backward' as const }
  ];

  // Web auth token diagram entities and messages
  const webAuthTokenEntities = [
    { id: 'user', label: 'User' },
    { id: 'ogsApp', label: 'OGS Mobile App' },
    { id: 'gameWeb', label: 'Game Web Client' },
    { id: 'gameServer', label: 'Game Server' },
    { id: 'ogsProvider', label: 'OGS Provider API' }
  ];

  const webAuthTokenMessages = [
    { from: 'user', to: 'ogsApp', label: 'Opens game in app' },
    { from: 'ogsApp', to: 'ogsProvider', label: 'POST /api/v1/auth/web-code' },
    { from: 'ogsProvider', to: 'ogsProvider', label: 'Creates JWT with userId' },
    { from: 'ogsProvider', to: 'ogsApp', label: 'Returns web auth code', direction: 'backward' as const },
    { from: 'ogsApp', to: 'gameWeb', label: 'Open WebView with URL?code=xyz123' },
    { from: 'gameWeb', to: 'gameServer', label: 'Request with code parameter' },
    { from: 'gameServer', to: 'ogsProvider', label: 'POST /api/v1/auth/verify-token' },
    { from: 'ogsProvider', to: 'ogsProvider', label: 'Verifies token & extracts user info' },
    { from: 'ogsProvider', to: 'gameServer', label: 'Returns user info', direction: 'backward' as const },
    { from: 'gameServer', to: 'gameServer', label: 'Creates session for user' },
    { from: 'gameServer', to: 'gameWeb', label: 'Set auth cookies & redirect', direction: 'backward' as const },
    { from: 'gameWeb', to: 'gameServer', label: 'Subsequent requests with cookies' },
    { from: 'gameServer', to: 'gameWeb', label: 'Return authenticated responses', direction: 'backward' as const },
    { from: 'gameWeb', to: 'user', label: 'Display authenticated game content' }
  ];

  // Casting diagram entities and messages
  const castingEntities = [
    { id: 'user', label: 'User' },
    { id: 'game', label: 'Game Client' },
    { id: 'gameServer', label: 'Game Server' },
    { id: 'ogsCast', label: 'OGS Cast API' },
    { id: 'tv', label: 'Chromecast Device' }
  ];

  const castingMessages = [
    { from: 'user', to: 'game', label: 'Initiates cast' },
    { from: 'game', to: 'gameServer', label: 'Request cast session' },
    { from: 'gameServer', to: 'ogsCast', label: 'POST /api/v1/cast/session' },
    { from: 'ogsCast', to: 'ogsCast', label: 'Creates cast session' },
    { from: 'ogsCast', to: 'tv', label: 'Initializes receiver app' },
    { from: 'ogsCast', to: 'gameServer', label: 'Returns session details', direction: 'backward' as const },
    { from: 'gameServer', to: 'game', label: 'Returns cast session ID', direction: 'backward' as const },
    { from: 'game', to: 'game', label: 'Switches to controller mode' },
    // Gameplay loop
    { from: 'user', to: 'game', label: 'Controller input' },
    { from: 'game', to: 'ogsCast', label: 'POST /api/v1/cast/input' },
    { from: 'ogsCast', to: 'tv', label: 'Forwards input' },
    { from: 'tv', to: 'tv', label: 'Updates game state' },
    { from: 'tv', to: 'user', label: 'Renders updated state' }
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
                  <a href="https://github.com/open-game-system" target="_blank" rel="noopener noreferrer">
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
              href="#auth-kit-integration"
            />
            <SDKCard 
              title="notification-kit"
              description="Send and receive push notifications to keep players engaged, even when they're not actively playing."
              icon={<Bell className="h-6 w-6 text-primary" />}
              delay={200}
              href="#notification-kit-integration"
            />
            <SDKCard 
              title="cast-kit"
              description="Enable TV casting capabilities, allowing players to display their games on larger screens."
              icon={<Tv className="h-6 w-6 text-primary" />}
              delay={400}
              href="#cast-kit-integration"
            />
          </div>
        </div>
      </section>

      {/* OGS App Section - Similar to Expo Go */}
      <section id="ogs-app" className="section-padding">
        <div className="container mx-auto">
          <SectionHeader 
            title="OGS Apps"
            subtitle="Development and distribution environments for web games with native capabilities"
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* OGS Developer App (similar to Expo Go) */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4">OGS Developer App</h3>
              <p className="text-lg mb-4">
                The OGS Developer App is a development environment that works like Expo Go but for web games. It lets you quickly test your web game with native capabilities during development.
              </p>
              
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Key Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <span>Local development server connection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <span>Test push notifications locally</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Tv className="h-4 w-4 text-primary" />
                      </div>
                      <span>Preview TV casting during development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <span>Debug device-specific features</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/open-game-system/opengame-app" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Download for Android
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Download for iOS
                    </a>
                  </Button>
                </div>

                <div className="mt-4">
                  <p className="text-sm text-muted-foreground mb-2">Typical development workflow:</p>
                  <CodeSnippet code={`# Start your development server
npm start

# Connect using the OGS Developer App
# by entering your local server URL or scanning a QR code`} title="Terminal" />
                </div>
              </div>
            </div>
            
            {/* OGS Player App (for end users) */}
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-xl font-bold mb-4">OGS Player App</h3>
              <p className="text-lg mb-4">
                The OGS Player App is for end users - an app store distribution that lets players access web games with enhanced native capabilities like push notifications and TV casting.
              </p>
              
              <div className="space-y-4">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="text-lg font-medium mb-2">Key Features</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Zap className="h-4 w-4 text-primary" />
                      </div>
                      <span>Game discovery and quick launch</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <span>Push notifications for all games</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <Tv className="h-4 w-4 text-primary" />
                      </div>
                      <span>One-tap TV casting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <span>Cross-game account linking</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-primary hover:bg-primary/90">
                    <a href="https://github.com/open-game-system/opengame-app" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Download for Android
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Download for iOS
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Developer App Visual */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                {/* Developer App Screenshot based on Expo Go */}
                <div className="bg-card border border-border rounded-[32px] shadow-lg aspect-[9/19] overflow-hidden">
                  <div className="w-full h-full bg-background flex flex-col">
                    {/* Header with App name similar to Expo Go */}
                    <div className="px-4 py-3 border-b border-border flex items-center">
                      <div className="flex items-center">
                        <OGSSmallLogo className="w-5 h-5 mr-2" />
                        <span className="font-medium">OGS Dev</span>
                      </div>
                      <div className="ml-auto text-xs text-muted-foreground">HELP</div>
                    </div>
                    
                    {/* Content area */}
                    <div className="flex-1 p-4 flex flex-col">
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2">Development servers</h4>
                        <div className="bg-secondary/50 p-3 rounded-md mb-2">
                          <p className="text-xs mb-2">Start a local development server with:</p>
                          <div className="bg-muted p-2 rounded text-xs font-mono">npm start</div>
                          <p className="text-xs mt-2">Select the local server when it appears here.</p>
                        </div>
                        <div className="flex items-center py-2">
                          <div className="flex-1 text-sm">Enter URL manually</div>
                          <div>›</div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="text-sm font-medium">Recently opened</h4>
                          <span className="text-xs text-muted-foreground">CLEAR</span>
                        </div>
                        <div className="flex items-center py-3 border-t border-border">
                          <div className="w-8 h-8 bg-primary/20 rounded-md flex items-center justify-center mr-3">
                            <ImageIcon className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm">Trivia Jam</div>
                          </div>
                          <div>›</div>
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="grid grid-cols-2 border-t border-border">
                          <div className="flex items-center justify-center py-3">
                            <div className="h-5 w-5 bg-primary/10 rounded-full flex items-center justify-center">
                              <div className="w-2 h-2 bg-primary rounded-sm"></div>
                            </div>
                            <span className="text-xs ml-2">Home</span>
                          </div>
                          <div className="flex items-center justify-center py-3">
                            <div className="h-5 w-5 flex items-center justify-center">
                              <div className="w-4 h-4 border-2 border-muted-foreground rounded-full"></div>
                            </div>
                            <span className="text-xs ml-2 text-muted-foreground">Settings</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Player App Visual */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="bg-card border border-border rounded-[32px] shadow-lg aspect-[9/19] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-ogs-purple/30 to-primary/20 flex flex-col">
                    {/* Header with App name */}
                    <div className="px-4 py-3 flex items-center">
                      <div className="flex-1"></div>
                      <div className="flex items-center justify-center">
                        <OGSSmallLogo className="w-6 h-6 mr-2" />
                        <span className="font-medium font-orbitron">OGS</span>
                      </div>
                      <div className="flex-1 flex justify-end">
                        <div className="w-8 h-8 bg-background/40 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <User className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content area */}
                    <div className="flex-1 p-4 flex flex-col">
                      <div className="mb-6">
                        <h2 className="text-xl font-bold mb-2">Featured Games</h2>
                        <div className="rounded-lg overflow-hidden bg-background/40 backdrop-blur-sm border border-border aspect-video mb-2">
                          <div className="h-full w-full bg-gradient-to-br from-ogs-purple/20 to-primary/10 flex items-center justify-center">
                            <span className="font-medium">Trivia Jam</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h2 className="text-xl font-bold mb-3">Your Games</h2>
                        <div className="space-y-3">
                          <div className="flex items-center p-3 bg-background/40 backdrop-blur-sm rounded-lg border border-border">
                            <div className="w-10 h-10 bg-primary/20 rounded-md flex items-center justify-center mr-3">
                              <ImageIcon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">Trivia Jam</div>
                              <div className="text-xs text-muted-foreground">Recently played</div>
                            </div>
                            <Button variant="outline" size="sm" className="h-8">Play</Button>
                          </div>
                          
                          <div className="flex items-center p-3 bg-background/40 backdrop-blur-sm rounded-lg border border-border">
                            <div className="w-10 h-10 bg-primary/20 rounded-md flex items-center justify-center mr-3">
                              <ImageIcon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">Another Game</div>
                              <div className="text-xs text-muted-foreground">2 days ago</div>
                            </div>
                            <Button variant="outline" size="sm" className="h-8">Play</Button>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom navigation */}
                      <div className="mt-auto">
                        <div className="grid grid-cols-3 pt-3">
                          <div className="flex flex-col items-center">
                            <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <div className="w-5 h-5 text-primary">🏠</div>
                            </div>
                            <span className="text-xs mt-1">Home</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-10 w-10 rounded-full flex items-center justify-center">
                              <div className="w-5 h-5 text-muted-foreground">🔍</div>
                            </div>
                            <span className="text-xs mt-1 text-muted-foreground">Discover</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="h-10 w-10 rounded-full flex items-center justify-center">
                              <div className="w-5 h-5 text-muted-foreground">⚙️</div>
                            </div>
                            <span className="text-xs mt-1 text-muted-foreground">Settings</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Open Game Services Section */}
      <section id="open-game-services" className="section-padding bg-secondary/50">
        <div className="container mx-auto">
          <SectionHeader 
            title="Open Game Services"
            subtitle="Hosted API services that power the OGS ecosystem"
          />
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Notification Service</h3>
              <p className="text-muted-foreground mb-4">
                Hosted push notification infrastructure that manages device tokens, delivery, and tracking across platforms.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">API Endpoint:</span> api.opengame.org/notifications
                </p>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <User className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Identity Service</h3>
              <p className="text-muted-foreground mb-4">
                Secure identity management that supports account linking while keeping player identity under your control.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">API Endpoint:</span> api.opengame.org/identity
                </p>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Tv className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-medium mb-2">Casting Service</h3>
              <p className="text-muted-foreground mb-4">
                TV casting infrastructure that enables web games to stream to TVs while using phones as controllers.
              </p>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium">API Endpoint:</span> api.opengame.org/casting
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <span className="font-medium">Pricing:</span> Free tier available, with metered bandwidth pricing and no hidden markups
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-6">
              All services are available as hosted APIs or can be self-hosted for complete control.
            </p>
            <Button asChild variant="outline">
              <a href="https://github.com/open-game-system/opengame-api" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View API Source
              </a>
            </Button>
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
                <a href="https://github.com/open-game-system/trivia-jam" target="_blank" rel="noopener noreferrer">
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
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="How It Works"
            subtitle="OGS is designed as a comprehensive ecosystem with a web-first approach and native capabilities."
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Web-First Development</h3>
                  <p className="text-muted-foreground">Start with your web game. OGS integrates with existing web games through simple SDK packages that maintain your game's identity.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">OGS App Integration</h3>
                  <p className="text-muted-foreground">Your web game runs inside the OGS App WebView to access native capabilities like push notifications and TV casting.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Open Game Services</h3>
                  <p className="text-muted-foreground">Connect to hosted services for notifications, authentication, and casting—powerful backend infrastructure specifically designed for web games.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Progressive Enhancement</h3>
                  <p className="text-muted-foreground">Your game still works in regular browsers with appropriate fallbacks, providing a seamless experience across all platforms.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-medium mb-4">OGS Ecosystem Architecture</h3>
              <div className="w-full">
                <Mermaid 
                  chart={`
flowchart TD
  subgraph "Your Web Game"
    WebGame[Web Game]
    AuthKit[auth-kit]
    NotificationKit[notification-kit]
    CastKit[cast-kit]
  end
  
  subgraph "OGS Ecosystem"
    OGSApp[OGS App]
    subgraph "Open Game Services"
      IdentityService[Identity Service]
      NotificationService[Notification Service]
      CastingService[Casting Service]
    end
  end
  
  WebGame -->|Integrates with| AuthKit & NotificationKit & CastKit
  
  WebGame -.->|Runs in regular browser| RegularBrowser[Regular Browser]
  WebGame -->|Runs in WebView| OGSApp
  
  AuthKit -->|Account linking| IdentityService
  NotificationKit -->|Push notifications| NotificationService
  CastKit -->|TV casting| OGSApp -->|Uses| CastingService
  
  classDef primary fill:#8B5CF6,stroke:#000000,color:#FFFFFF,stroke-width:2px
  classDef secondary fill:#E9D5FF,stroke:#000000,color:#000000,stroke-width:2px
  classDef browser fill:#64748B,stroke:#000000,color:#FFFFFF,stroke-width:2px
  classDef game fill:#BFDBFE,stroke:#000000,color:#000000,stroke-width:2px
  
  class OGSApp,IdentityService,NotificationService,CastingService primary
  class AuthKit,NotificationKit,CastKit secondary
  class RegularBrowser browser
  class WebGame game
                `} 
                  className="bg-card p-4 rounded-lg border-2 border-border shadow-md max-w-4xl mx-auto overflow-hidden"
                />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>The OGS ecosystem provides a complete solution for web games: The OGS App serves as a sandbox environment for your web game, while Open Game Services power the backend functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Examples Section */}
      <section id="protocol-examples" className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="SDK Integration Guide"
            subtitle="Simple code examples showing how to add native capabilities to your web game."
          />
          
          <div className="grid grid-cols-1 gap-16 mt-12">
            <div id="auth-kit-integration">
              <h3 className="text-xl font-bold mb-4 text-center">Auth Kit Integration</h3>
              <p className="text-center text-muted-foreground mb-6">
                The Auth Kit enables users to link their game account with the OGS platform, which is required for features like push notifications.
              </p>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Step 1: Install the Package</h4>
                  <CodeSnippet code={`npm install @open-game-system/auth-kit`} title="Terminal" />
                </div>
                
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Step 2: Initialize the Client</h4>
                  <CodeSnippet code={`import { createAuthClient } from '@open-game-system/auth-kit/client';

// Create auth client in your game's backend
const authClient = createAuthClient({
  gameId: 'your-game-id',
  apiKey: 'your-api-key'
});`} title="Server-side code" />
                </div>
                
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Step 3: Implement Account Linking</h4>
                  <CodeSnippet code={`// Backend route to generate link token
app.post('/api/link-account', async (req, res) => {
  const { gameUserId } = req.body;
  
  try {
    const linkData = await authClient.createLinkToken({
      gameUserId,
      redirectUrl: 'https://yourgame.com/auth/callback'
    });
    
    res.json({ linkUrl: linkData.linkUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Frontend code to redirect user
function linkAccount() {
  fetch('/api/link-account', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ gameUserId: 'user-123' })
  })
  .then(res => res.json())
  .then(data => {
    window.location.href = data.linkUrl;
  });
}`} title="Account linking implementation" />
                </div>
                
                <div className="mt-2">
                  <SDKVisual type="auth" />
                </div>
              </div>
            </div>
            
            <div id="notification-kit-integration">
              <h3 className="text-xl font-bold mb-4 text-center">Notification Kit Integration</h3>
              <p className="text-center text-muted-foreground mb-6">
                The Notification Kit lets you send push notifications to users even when they're not 
                actively playing your game, increasing engagement.
              </p>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Step 1: Install the Package</h4>
                  <CodeSnippet code={`npm install @open-game-system/notification-kit`} title="Terminal" />
                </div>
                
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Step 2: Initialize the Client</h4>
                  <CodeSnippet code={`import { createNotificationClient } from '@open-game-system/notification-kit/client';

// Create notification client in your game's backend
const notificationClient = createNotificationClient({
  gameId: 'your-game-id',
  apiKey: 'your-api-key'  // Keep this secure on your server
});`} title="Server-side code" />
                </div>
                
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Step 3: Send Notifications</h4>
                  <CodeSnippet code={`// Backend route to send a notification
app.post('/api/send-notification', async (req, res) => {
  const { userId, title, message, data } = req.body;
  
  try {
    const result = await notificationClient.sendNotification({
      recipient: { gameUserId: userId },
      notification: {
        type: 'your_turn',
        title: 'Your Turn',
        body: "Player 2 has made their move. It's your turn now!",
        data: data,
        deepLink: \`https://yourgame.com/games/\${data.gameId}\`
      }
    });
    
    res.json({ id: result.id, status: result.status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`} title="Notification sending implementation" />
                </div>
                
                <div className="mt-2">
                  <SDKVisual type="notification" />
                </div>
              </div>
            </div>
            
            <div id="cast-kit-integration">
              <h3 className="text-xl font-bold mb-4 text-center">Cast Kit Integration</h3>
              <p className="text-center text-muted-foreground mb-6">
                The Cast Kit lets players display your game on larger screens like TVs, 
                while using their phones as controllers. This works independently of other kits.
              </p>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Step 1: Install the Package</h4>
                  <CodeSnippet code={`npm install @open-game-system/cast-kit`} title="Terminal" />
                </div>
                
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Step 2: Initialize the Client</h4>
                  <CodeSnippet code={`import { createCastClient } from '@open-game-system/cast-kit/client';

// Create cast client in your game's frontend
const castClient = createCastClient({
  gameId: 'your-game-id'
});

// Listen for cast state changes
castClient.subscribe((state) => {
  if (state.isCasting) {
    // Switch to controller UI
    showControllerUI();
  } else {
    // Show normal game UI
    showGameUI();
  }
});`} title="Client-side code" />
                </div>
                
                <div className="bg-card p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Step 3: Implement Casting</h4>
                  <CodeSnippet code={`// Button to start casting
document.getElementById('cast-button').addEventListener('click', () => {
  // Signal that the game is ready to cast
  castClient.startCasting({
    roomCode: 'game-123',
    gameUrl: 'https://yourgame.com/tv?mode=cast&roomCode=game-123'
  });
});

// Send controller input when casting
function sendControllerInput(action, data) {
  if (castClient.getState().isCasting) {
    castClient.sendInput({
      action: action,
      data: data
    });
  }
}`} title="Casting implementation" />
                </div>
                
                <div className="mt-2">
                  <SDKVisual type="cast" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">Each kit can be used independently, so you can implement only the features your game needs.</p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="https://github.com/open-game-system/specification" target="_blank" rel="noopener noreferrer">
                View Full API Reference <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="section-padding bg-secondary/50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Get Started"
            subtitle="Begin your OGS integration journey"
          />
          
          <div className="mt-12">
            <div className="bg-card p-6 rounded-xl border border-border max-w-4xl mx-auto">
              <h3 className="text-xl font-bold mb-6 text-center">Start Building With OGS</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">1. Try the OGS App</h4>
                    <p className="text-muted-foreground mb-4">
                      Download the OGS App to your device and start experimenting with how your web game can access native features.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button asChild variant="outline" size="sm">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Download for Android
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Download for iOS
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">2. Integrate SDKs</h4>
                    <p className="text-muted-foreground mb-4">
                      Add the OGS SDK packages to your web game and start implementing native features.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Button asChild variant="outline" size="sm">
                        <a href="https://github.com/open-game-system/auth-kit" target="_blank" rel="noopener noreferrer">
                          auth-kit
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href="https://github.com/open-game-system/notification-kit" target="_blank" rel="noopener noreferrer">
                          notification-kit
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <a href="https://github.com/open-game-system/cast-kit" target="_blank" rel="noopener noreferrer">
                          cast-kit
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">3. Connect to Services</h4>
                    <p className="text-muted-foreground mb-4">
                      Use Open Game Services for hosted API endpoints with transparent pricing (free tier available with metered bandwidth) or self-host the services for complete control.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <a href="https://github.com/open-game-system/opengame-api" target="_blank" rel="noopener noreferrer">
                        Explore Services
                      </a>
                    </Button>
                  </div>
                  
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="text-lg font-bold mb-2">4. Study the Example</h4>
                    <p className="text-muted-foreground mb-4">
                      Explore Trivia Jam, our reference implementation, to see how everything works together.
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <a href="https://github.com/open-game-system/trivia-jam" target="_blank" rel="noopener noreferrer">
                        Trivia Jam Source
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <a href="https://github.com/open-game-system" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Organization
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://github.com/open-game-system/specification" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    View Specification
                  </a>
                </Button>
              </div>
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
