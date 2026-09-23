import { createFileRoute, Link } from "@tanstack/react-router";
import { Zap, FileText, BadgeCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Video Speed Reader — 上傳影片，三分鐘內拿到逐字稿" },
      {
        name: "description",
        content:
          "Upload your video, get a clean transcript in three minutes. High-accuracy transcription for creators, educators, and engineers.",
      },
      { property: "og:title", content: "Video Speed Reader" },
      {
        property: "og:description",
        content: "Upload your video, get a clean transcript in three minutes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: FileText,
    title: "高準確度逐字稿",
    subtitle: "High-accuracy transcripts",
    description:
      "Powered by OpenAI Whisper, with first-class support for both Chinese and English — even in the same recording.",
  },
  {
    icon: Zap,
    title: "三分鐘交付",
    subtitle: "Three-minute turnaround",
    description:
      "Your video is processed in the background. We'll email you the moment your transcript is ready.",
  },
  {
    icon: BadgeCheck,
    title: "可商用授權",
    subtitle: "Commercial-use ready",
    description: "You own the output completely. Repurpose it however you like — blog posts, course notes, archives.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border/50 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <span className="text-base font-bold tracking-tight">Video Speed Reader</span>
          <Link
            to="/auth"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Sign in / 登入
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-glow">
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-20 text-center sm:px-6 sm:pt-28">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:text-sm">
              Video → Transcript
            </p>
            <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight text-gradient sm:text-7xl">
              Video Speed Reader
            </h1>
            <p className="mt-6 text-base font-medium sm:text-lg">
              上傳影片，三分鐘內拿到逐字稿。
            </p>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Upload your video, get a clean transcript in three minutes.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/auth"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40"
              >
                Get started
              </Link>
              <Link
                to="/auth"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                Sign in / 登入
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 120}>
                <div className="h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-5 text-lg font-bold">
                    {feature.title}
                    <span className="ml-2 text-sm font-medium text-muted-foreground">
                      ({feature.subtitle})
                    </span>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-muted-foreground sm:px-6">
          © 2026 Video Speed Reader
        </div>
      </footer>
    </div>
  );
}
