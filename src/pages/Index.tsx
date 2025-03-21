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
            subtitle="OGS is designed to be protocol-based, web-first, and independent of your game's authentication system."
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Independent Integration</h3>
                  <p className="text-muted-foreground">Install the SDK packages and integrate them with your existing game. Your game maintains its own identity and authentication system.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Protocol-Based Communication</h3>
                  <p className="text-muted-foreground">Your game communicates with the OGS platform using well-defined protocols. The server-to-server API enables secure feature access while maintaining web-first architecture.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Native Platform Access</h3>
                  <p className="text-muted-foreground">The OGS platform handles the complexity of communicating with native platforms, ensuring proper permissions, and delivering features like push notifications and TV casting.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-primary">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Cross-Platform Compatibility</h3>
                  <p className="text-muted-foreground">Your game works seamlessly across iOS, Android, desktop browsers, and smart TVs. The OGS platform detects the device and provides the appropriate APIs.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <h3 className="text-lg font-medium mb-4">System Architecture</h3>
              <div className="w-full">
                <Mermaid 
                  chart={`
flowchart TD
    subgraph "Your Game"
        GameServer[Game Server]
        GameClient[Game Client]
        AuthKit[auth-kit]
        NotificationKit[notification-kit]
        CastKit[cast-kit]
    end
    
    subgraph "OGS System"
        OGSAPI[OGS API]
        OGSApp[OGS Mobile App]
        OGSPlatform[OGS Platform]
    end
    
    GameServer -->|Uses| AuthKit
    GameServer -->|Uses| NotificationKit
    GameClient -->|Uses| CastKit
    
    AuthKit -->|Communicates with| OGSAPI
    NotificationKit -->|Sends notifications via| OGSAPI
    CastKit -->|Communicates with| OGSApp
    
    OGSApp -->|Enables native features| OGSPlatform
                  `} 
                  className="bg-card p-4 rounded-lg" 
                />
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p>Each SDK operates independently, allowing you to implement only the features you need. The server-to-server communication ensures secure operations, while the client-side integration delivers a seamless user experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protocol Examples Section */}
      <section id="protocol-examples" className="section-padding">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Integration Guide"
            subtitle="Step-by-step guides showing how to integrate each OGS kit into your web game."
          />
          
          <div className="grid grid-cols-1 gap-16 mt-12">
            <div id="auth-kit-integration">
              <h3 className="text-xl font-bold mb-4 text-center">Auth Kit Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
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
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Account Linking Flow</h4>
                  <p className="text-muted-foreground mb-4">
                    The Auth Kit enables users to link their game account with the OGS platform, 
                    which is required for features like push notifications.
                  </p>
                  <div className="bg-card p-4 rounded-lg mt-4 border border-border">
                    <SimpleSequenceDiagram
                      entities={accountLinkingEntities}
                      messages={accountLinkingMessages}
                      title="Account Linking Sequence"
                    />
                  </div>
                  <SDKVisual type="auth" className="mt-6" />
                </div>
              </div>
            </div>
            
            <div id="notification-kit-integration">
              <h3 className="text-xl font-bold mb-4 text-center">Notification Kit Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
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
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">Push Notification Flow</h4>
                  <p className="text-muted-foreground mb-4">
                    The Notification Kit lets you send push notifications to users even when they're not 
                    actively playing your game, increasing engagement.
                  </p>
                  <div className="bg-card p-4 rounded-lg mt-4 border border-border">
                    <SimpleSequenceDiagram
                      entities={webAuthTokenEntities}
                      messages={webAuthTokenMessages}
                      title="Web Authentication Sequence"
                    />
                  </div>
                  <SDKVisual type="notification" className="mt-6" />
                </div>
              </div>
            </div>
            
            <div id="cast-kit-integration">
              <h3 className="text-xl font-bold mb-4 text-center">Cast Kit Integration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="space-y-4">
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
                </div>
                
                <div>
                  <h4 className="font-medium mb-4">TV Casting Flow</h4>
                  <p className="text-muted-foreground mb-4">
                    The Cast Kit lets players display your game on larger screens like TVs, 
                    while using their phones as controllers. This works independently of other kits.
                  </p>
                  <div className="bg-card p-4 rounded-lg mt-4 border border-border">
                    <SimpleSequenceDiagram
                      entities={castingEntities}
                      messages={castingMessages}
                      title="TV Casting Sequence"
                    />
                  </div>
                  <SDKVisual type="cast" className="mt-6" />
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
              
              <div className="text-center mb-8">
                <p className="text-lg mb-6">
                  OGS is an open-source project that enables web games to access native device capabilities. 
                  Get started by exploring our GitHub repositories and documentation.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our SDKs are designed to be modular and easy to integrate into existing web games. 
                  Check out the source code, example implementations, and contribute to the project.
                </p>
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
