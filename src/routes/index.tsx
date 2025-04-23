import { createFileRoute, Link } from "@tanstack/react-router";

import { Coffee, Users, Heart, Clock, MapPin, Smartphone, ChevronRight } from 'lucide-react';

// Import shadcn components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      {/* Header */}
      <header className="bg-amber-900 text-white py-4 sticky top-0 z-10 shadow-md">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <a href="#" className="text-3xl font-serif italic">Hometown Brew</a>
          <ul className="hidden md:flex space-x-6">
            <li><a href="#" className="hover:text-amber-300 font-medium transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-amber-300 font-medium transition-colors">About</a></li>
            <li><a href="#" className="hover:text-amber-300 font-medium transition-colors">Gallery</a></li>
            <li><a href="#" className="hover:text-amber-300 font-medium transition-colors">Events</a></li>
            <li><Link to="/posts" className="hover:text-amber-300 font-medium transition-colors">Blog</Link></li>
            <li><a href="#" className="hover:text-amber-300 font-medium transition-colors">Contact</a></li>
          </ul>
          <Button variant="ghost" className="md:hidden text-white p-1" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-amber-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 tracking-tight">Welcome to Hometown Brew</h1>
          <p className="text-xl mb-8 text-amber-100">Your cozy corner for warm conversations and community connections in the heart of Main Street since 2005.</p>
          <Button asChild size="lg" className="bg-amber-500 hover:bg-amber-600">
            <a href="#about">Our Story</a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-amber-900 mb-6">Our Story</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Hometown Brew began as a dream shared by Mike and Sarah Johnson, who wanted to create 
            a space where neighbors could gather, friends could reconnect, and strangers could 
            become friends. Our little coffee shop has grown into the heart of Main Street, 
            where we pride ourselves on creating a warm atmosphere for our community.
          </p>
          <p className="text-lg text-muted-foreground">
            Every day at Hometown Brew carries with it our commitment to quality and community. 
            We're not just a coffee shop; we're your hometown's living room.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/60">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <Coffee size={48} className="text-amber-500" />
                </div>
                <CardTitle className="text-xl text-amber-900">Artisan Coffee Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We pride ourselves on our carefully curated coffee selection, featuring beans 
                  sourced ethically from around the world and roasted locally for the freshest flavor experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <Users size={48} className="text-amber-500" />
                </div>
                <CardTitle className="text-xl text-amber-900">Community Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  More than just a coffee shop, we're a community hub where locals connect, 
                  ideas are shared, and relationships are built over the perfect cup of coffee.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <Heart size={48} className="text-amber-500" />
                </div>
                <CardTitle className="text-xl text-amber-900">Eco-Friendly Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're committed to sustainability through our eco-friendly practices, 
                  from compostable cups to supporting local producers who share our environmental values.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-amber-900 mb-6">Our Space</h2>
          <p className="text-lg mb-8 max-w-4xl mx-auto text-muted-foreground">
            Step inside our warm, inviting café where rustic charm meets modern comfort. 
            From cozy corners perfect for reading to communal tables made for conversation, 
            our space was designed with community in mind.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg shadow-md group">
                <img 
                  src={`/api/placeholder/400/300?text=Coffee+Shop+${i+1}`} 
                  alt={`Coffee Shop Interior ${i+1}`} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 bg-muted/60">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-amber-900 mb-6">Community Events</h2>
          <p className="text-lg mb-8 max-w-4xl mx-auto text-muted-foreground">
            Hometown Brew is more than just a place to grab coffee - we're a community 
            gathering space. Check out our upcoming events and join us!
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Local Artists Showcase",
                date: "Every First Friday, 6-9pm",
                description: "Celebrating our community's creativity with rotating exhibitions featuring local artists, photographers, and craftspeople."
              },
              {
                title: "Book Club Meetup",
                date: "Third Thursday of each month, 7pm",
                description: "Join our monthly book discussions where readers gather to share insights and perspectives on carefully selected titles."
              },
              {
                title: "Open Mic Night",
                date: "Every Second Saturday, 7-10pm",
                description: "From poetry to acoustic music, our open mic nights showcase the diverse talents of our community members."
              }
            ].map((event, i) => (
              <Card key={i} className="bg-card border-l-4 border-amber-500 text-left">
                <CardHeader>
                  <CardTitle className="text-xl text-amber-900">{event.title}</CardTitle>
                  <CardDescription className="text-amber-700 font-medium">{event.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8 bg-amber-500 hover:bg-amber-600">
            <a href="#">Full Events Calendar</a>
          </Button>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-amber-900 mb-6">From Our Blog</h2>
          <p className="text-lg mb-8 max-w-4xl mx-auto text-muted-foreground">
            Stay connected with Hometown Brew through our blog, where we share stories, 
            community highlights, and coffee culture insights.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Art of Brewing at Home",
                date: "April 18, 2025",
                excerpt: "Our head barista shares simple techniques that can elevate your home brewing experience for cafe-quality coffee every morning..."
              },
              {
                title: "Meet the Makers: Local Pottery",
                date: "April 12, 2025",
                excerpt: "This month's featured artists create the handmade mugs that give our shop its distinctive charm. Learn about their process and inspiration..."
              },
              {
                title: "Community Book Club Returns",
                date: "April 5, 2025",
                excerpt: "Our monthly book club is back with an exciting new selection. Join us every third Thursday for literary discussions..."
              }
            ].map((post, i) => (
              <Card key={i} className="bg-card overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`/api/placeholder/350/200?text=Blog+Post+${i+1}`} 
                    alt={`Blog post ${i+1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardDescription className="text-sm">{post.date}</CardDescription>
                  <CardTitle className="text-xl text-amber-900">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" className="text-amber-900 hover:text-amber-800" size="sm">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button asChild size="lg" className="mt-8 bg-amber-500 hover:bg-amber-600">
            <a href="#">Visit Our Blog</a>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-muted/60">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-amber-900 mb-6">Visit Us</h2>
          <p className="text-lg mb-8 max-w-4xl mx-auto text-muted-foreground">
            We'd love to welcome you to our cozy corner of Main Street. Drop by for a visit 
            or reach out to learn more about our space and community events.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <Clock size={40} className="text-amber-500" />
                </div>
                <CardTitle className="text-xl text-amber-900">Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Monday - Friday: 6:30am - 7:00pm</li>
                  <li>Saturday: 7:00am - 7:00pm</li>
                  <li>Sunday: 8:00am - 5:00pm</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <MapPin size={40} className="text-amber-500" />
                </div>
                <CardTitle className="text-xl text-amber-900">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>123 Main Street</li>
                  <li>Hometown, USA 12345</li>
                  <li>Phone: (555) 123-4567</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-2">
                  <Smartphone size={40} className="text-amber-500" />
                </div>
                <CardTitle className="text-xl text-amber-900">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Email: hello@hometownbrew.com</li>
                  <li>Follow us on social media for updates</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="bg-muted">
            <CardContent className="p-0">
              <div className="h-64 flex items-center justify-center">
                <p className="text-xl text-muted-foreground">Interactive Map Coming Soon</p>
              </div>
            </CardContent>
          </Card>
          <Button asChild size="lg" className="mt-8 bg-amber-500 hover:bg-amber-600">
            <a href="#">Contact Us</a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="text-3xl font-serif italic mb-4">Hometown Brew</div>
              <p className="text-gray-400">Your cozy corner in the heart of Main Street since 2005.</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <a href="#" className="hover:text-amber-300 transition-colors">Home</a>
                <a href="#" className="hover:text-amber-300 transition-colors">About</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Gallery</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Events</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Blog</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Contact</a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
                <a href="#" className="hover:text-amber-300 transition-colors">Facebook</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Instagram</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Twitter</a>
              </div>
              <p className="text-gray-400">&copy; 2025 Hometown Brew. All rights reserved.</p>
            </div>
          </div>
          
          <Separator className="my-6 bg-gray-700" />
          
          <div className="text-center text-gray-500 text-sm">
            <p>Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div> 
  );
}
