"use client";

import React from "react";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import SVGComponent from "./icons";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { signIn } from "next-auth/react"

export default function AuthForm({ origin }) {
    const handleLogin = async () => {
        try {
            await signIn("google");
        } catch (error) {
            console.error(error.message);
        }
        return <div>Login In</div>
    }
    return (
        <div className="flex flex-col gap-3 items-center justify-center min-h-screen p-4">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-4 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                        <Briefcase size={32} className="text-primary" />
                    </div>
                    <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold">
                            {origin === 'signIn' ? 'Welcome to TrueFind' : 'Start your journey with TrueFind'}
                        </CardTitle>
                        <CardDescription>
                            {origin === 'signIn' 
                                ? 'Sign in to access your account' 
                                : 'Create an account to get started'}
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-center">
                        <SVGComponent />
                    </div>
                    <Button onClick={handleLogin} className="w-full" size="lg">
                        {origin === 'signIn' ? "Sign In With Google" : "Sign Up with Google"}
                    </Button>
                </CardContent>
            </Card>
            <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                    {origin === 'signIn' ? "Don't have an account? " : "Already have an account? "}
                    <Link 
                        href={origin === 'signIn' ? '/sign-up' : '/sign-in'}
                        className="font-semibold text-primary hover:underline"
                    >
                        {origin === 'signIn' ? 'Sign up' : 'Sign in'}
                    </Link>
                </p>
            </div>
        </div>
    )
}