'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { onBoardingSubmission } from '../actions/onBoarding'
import { toast } from "sonner"

export default function OnboardingPage({ userId }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter() // Initialize hook

  const handleOnboardingSubmission = async ({ requestedRole }) => {
    // requesting the server action with the object it expects
    // Use the 'userId' prop that is already available in the component scope
    const updatedResponse = await onBoardingSubmission({ requestedRole });

    if (updatedResponse) {
      // If success, redirect the user client-side
      router.push('/jobs');
      router.refresh(); // Ensure the layout knows the data changed
    } else {
      toast.error("Update failed, please try again.")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Welcome to Our Platform</CardTitle>
          <CardDescription>Please select your account type to get started.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => handleOnboardingSubmission({ requestedRole: 'EMPLOYER' })}
            disabled={isLoading}
            className="w-full"
          >
            I'm an Organization
          </Button>
          <Button
            onClick={() => handleOnboardingSubmission({ requestedRole: 'JOB_SEEKER' })}
            disabled={isLoading}
            className="w-full"
          >
            I'm a Job Seeker
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}