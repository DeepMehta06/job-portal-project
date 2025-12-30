import { Briefcase } from "lucide-react"
import Link from "next/link"

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
        <div>
            <header className="w-full px-10 py-3 flex flex-row justify-between border">
                <div className="flex flex-row gap-3 items-center">
                    <Briefcase className="font-bold text-lg" />
                    <h3>Job Portal</h3>
                </div>
                
                {user_role ? (
                    <div className="flex flex-row gap-3">
                        {
                            navbarConfig[user_role].map((navbar) => {
                                return (
                                    <Link key={navbar.url} href={navbar.url}>
                                        <p>{navbar.title}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                ) : (
                    <Link href="/signIn">Sign-In/Sign-Up</Link>
                )}
            </header>
        </div>
    )
}