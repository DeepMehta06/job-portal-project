import { Briefcase } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"

export default function Navbar() {
    const user_role = "JOB_SEEKER"; 

    const navbarConfig = {
        JOB_SEEKER: [
            { title: 'All jobs', url: '/jobs' },
            { title: 'My applications', url: '/myApplications' },
        ],
        EMPLOYER: [
            { title: 'Add to job', url: '/add-job' }
        ]
    }

    return (
        <header className="w-full px-6 md:px-10 py-4 flex flex-row justify-between items-center border-b border-zinc-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <Link href="/" className="flex flex-row gap-2 items-center group">
                <Briefcase className="w-6 h-6 text-zinc-900 group-hover:text-zinc-700 transition-colors" />
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors">TrueFind</h3>
            </Link>
            
            {user_role ? (
                <nav className="flex flex-row items-center gap-1 md:gap-2">
                    {
                        navbarConfig[user_role].map((navbar) => {
                            return (
                                <Link key={navbar.url} href={navbar.url}>
                                    <Button 
                                        variant="ghost" 
                                        className="text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-200"
                                    >
                                        {navbar.title}
                                    </Button>
                                </Link>
                            )
                        })
                    }
                    <Button 
                        size="sm"
                        className="ml-2 bg-zinc-900 text-white hover:bg-zinc-800 transition-all duration-200 hover:scale-105"
                    >
                        Profile
                    </Button>
                </nav>
            ) : (
                <Link href="/signIn">
                    <Button 
                        className="bg-zinc-900 text-white hover:bg-zinc-800 transition-all duration-200 hover:scale-105"
                    >
                        Sign In / Sign Up
                    </Button>
                </Link>
            )}
        </header>
    )
}