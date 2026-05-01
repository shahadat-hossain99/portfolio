/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export const metadata = {
  title: "Projects | Shahadat Hossain",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-primary, #000) 1px, transparent 1px),
                            linear-gradient(90deg, var(--color-primary, #000) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing blob */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl mx-auto">
        {/* Icon */}
        <div className="relative inline-flex mb-8">
          <div className="w-24 h-24 rounded-[24px] bg-primary/10 border border-primary/20 flex items-center justify-center">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontSize: "42px" }}
            >
              construction
            </span>
          </div>
          {/* Ping dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-warning flex items-center justify-center">
            <span className="absolute inline-flex h-full w-full rounded-full bg-warning opacity-75 animate-ping" />
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-4">
          Under Construction
        </h1>

        {/* Sub */}
        <p className="text-base-content/60 text-lg leading-relaxed mb-4">
          I'm building a dedicated projects page with filters, search, and
          detailed case studies.
        </p>
        <p className="text-base-content/40 text-sm mb-12">
          Check back soon — it's going to be worth the wait.
        </p>

        {/* Progress bar */}
        <div className="mb-12">
          <div className="flex justify-between text-xs text-base-content/40 mb-2">
            <span>Progress</span>
            <span>68%</span>
          </div>
          <div className="w-full h-2 bg-base-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full"
              style={{ width: "68%", transition: "width 1s ease" }}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/#projects"
            className="btn btn-primary px-8 rounded-xl gap-2"
          >
            <span className="material-symbols-outlined text-lg">
              arrow_back
            </span>
            View Featured Projects
          </Link>
          <Link
            href="/#contact"
            className="btn btn-outline px-8 rounded-xl gap-2"
          >
            <span className="material-symbols-outlined text-lg">mail</span>
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
