import type { Route } from "./+types/home";
import Navbar from "~/Components/Navbar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "CAREER LIFT FEEDBACK FOR YOUR DREAM JOB!" },
  ];
}

export default function Home() {
  return<main className="min-h-screen bg-[url('/images/bg-main.svg')] bg-cover bg-center">
    <Navbar />
    <section className="main-section">
          <div className="page-heading">
                <h1>Track your applications & ratings</h1>
            <h2>
              Review your submissions and check AI-powered feedback.
            </h2>
          </div>
        </section>


      </main>
}

