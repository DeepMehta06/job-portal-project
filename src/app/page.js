import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  const jobs = [
    { title: 'Product Manager', companyName: 'Google', location: 'NY, USA', jobUrl: '/apply/demo-url', type: 'Full-time', salary: '$120k - $180k' },
    { title: 'Project Manager', companyName: 'Microsoft', location: 'Benguluru, India', jobUrl: '/apply/demo-url', type: 'Full-time', salary: '$90k - $140k' },
    { title: 'Senior ML Engineer', companyName: 'Nvidia', location: 'Mel, USA', jobUrl: '/apply/demo-url', type: 'Remote', salary: '$150k - $220k' },
    { title: 'Frontend Developer', companyName: 'Meta', location: 'CA, USA', jobUrl: '/apply/demo-url', type: 'Hybrid', salary: '$110k - $160k' },
    { title: 'Backend Engineer', companyName: 'Amazon', location: 'Seattle, USA', jobUrl: '/apply/demo-url', type: 'Full-time', salary: '$130k - $190k' },
    { title: 'DevOps Engineer', companyName: 'Netflix', location: 'Remote', jobUrl: '/apply/demo-url', type: 'Remote', salary: '$140k - $200k' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      <section className="flex flex-col gap-6 items-center justify-center h-[70vh] px-4 animate-in fade-in duration-1000">
        <div className="text-center space-y-4 max-w-4xl animate-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-clip-text text-transparent">
            Find Your Dream Job with TrueFind
          </h1>
          <p className="text-lg text-zinc-600 animate-in slide-in-from-bottom-5 duration-1000 delay-150">
            Discover thousands of verified job opportunities on TrueFind, your trusted job companion
          </p>
        </div>
        
        <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-3 items-center animate-in slide-in-from-bottom-6 duration-1000 delay-300">
          <Input 
            placeholder="Search for jobs, companies, or skills..." 
            className="h-12 border-zinc-300 focus:ring-zinc-900 transition-all duration-300 hover:border-zinc-400"
          />
          <Button className="h-12 px-8 bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 hover:scale-105 active:scale-95">
            Search Now
          </Button>
        </div>

        <div className="flex gap-4 mt-4 animate-in slide-in-from-bottom-7 duration-1000 delay-500">
          <Badge variant="secondary" className="text-sm py-1.5 px-4 hover:bg-zinc-200 transition-colors cursor-pointer">
            Remote Jobs
          </Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-4 hover:bg-zinc-200 transition-colors cursor-pointer">
            Full-time
          </Badge>
          <Badge variant="secondary" className="text-sm py-1.5 px-4 hover:bg-zinc-200 transition-colors cursor-pointer">
            Tech
          </Badge>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-3 duration-700">
          <h2 className="text-4xl font-bold text-zinc-900 mb-3">Featured Opportunities</h2>
          <p className="text-zinc-600">Hand-picked job openings from leading companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zinc-200 animate-in fade-in slide-in-from-bottom-4 cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-xl group-hover:text-zinc-700 transition-colors">
                      {job.title}
                    </CardTitle>
                    <CardDescription className="text-base font-medium text-zinc-900">
                      {job.companyName}
                    </CardDescription>
                  </div>
                  <Badge className="bg-zinc-900 hover:bg-zinc-800">{job.type}</Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-zinc-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {job.location}
                </div>
                
                <div className="flex items-center gap-2 text-sm font-semibold text-zinc-900">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {job.salary}
                </div>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full bg-white text-zinc-900 border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300"
                  variant="outline"
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-3 duration-700">
            <h2 className="text-4xl font-bold text-zinc-900 mb-3">How It Works</h2>
            <p className="text-zinc-600 text-lg">Your journey to success in three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-zinc-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 delay-100">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-2">Search</CardTitle>
                <CardDescription className="text-base text-zinc-600">
                  Browse through thousands of verified job listings from top companies worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500">
                  Use our advanced filters to find positions that match your skills, experience, and career goals
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-zinc-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 delay-200">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-2">Apply with Ease</CardTitle>
                <CardDescription className="text-base text-zinc-600">
                  Submit applications quickly with your saved profile and track all your applications in one place
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500">
                  One-click applications, instant notifications, and seamless communication with employers
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-zinc-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4 delay-300">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-zinc-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <CardTitle className="text-2xl mb-2">Grow Your Career</CardTitle>
                <CardDescription className="text-base text-zinc-600">
                  Land your dream job and unlock new opportunities for professional growth and development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-zinc-500">
                  Get hired by leading companies and take your career to the next level with continuous support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-in fade-in duration-1000">
          <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
          <p className="text-zinc-300 text-lg">
            Join thousands of professionals who found their dream jobs through TrueFind
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button size="lg" className="bg-white text-zinc-900 border-2 border-white hover:bg-zinc-900 hover:text-white hover:border-white transition-all duration-300 hover:scale-105">
              Create Account
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white bg-zinc-900 text-white hover:bg-white hover:text-zinc-900 transition-all duration-300 hover:scale-105">
              Browse Jobs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
