import type { Route } from "./+types/home";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "~/Components/Navbar";
import ResumeCard from "~/Components/resumecard";
import { resumes } from "../../constants";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Resumind" },
        {
            name: "description",
            content: "CAREER LIFT FEEDBACK FOR YOUR DREAM JOB!",
        },
    ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    //  Auth guard ()
    useEffect(() => {
        if (!auth.isAuthenticated) {
            navigate("/auth?next=/");
        }
    }, [auth.isAuthenticated, navigate]);

    return (
        <main className="relative min-h-screen overflow-hidden">
            {/* Background video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src="/videos/bg-main2.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Page content */}
            <div className="relative z-10">
                <Navbar />

                <section className="main-section">
                    {/* Heading */}
                    <div className="page-heading py-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">
                            Track your applications & ratings
                        </h1>

                        <h2 className="mt-4 text-lg md:text-xl text-white/80">
                            Review your submissions and check AI-powered feedback.
                        </h2>
                    </div>

                    {/* Resume cards */}
                    {resumes.length > 0 && (
                        <div className="resumes-section">
                            {resumes.map((resume) => (
                                <ResumeCard key={resume.id} resume={resume} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </main>
    );
}
