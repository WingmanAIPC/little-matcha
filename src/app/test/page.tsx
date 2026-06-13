/* Minimal diagnostic page — no shared components, no scrims, no optimizer.
   If media shows here but not on the homepage, the homepage issue is cache. */

export const dynamic = "force-dynamic";

export default function TestPage() {
  const stamp = new Date().toISOString();
  return (
    <main style={{ fontFamily: "system-ui, sans-serif", background: "#111", color: "#fff" }}>
      <p style={{ padding: "12px 16px", margin: 0, fontSize: 14 }}>
        Diagnostic build · rendered at {stamp}
      </p>

      <section style={{ padding: 16 }}>
        <h2 style={{ fontSize: 18, margin: "8px 0" }}>1. Plain &lt;img&gt; (raw /images path)</h2>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/story-whisk.png"
          alt="whisking matcha"
          style={{ width: "100%", maxWidth: 640, display: "block", borderRadius: 12 }}
        />
      </section>

      <section style={{ padding: 16 }}>
        <h2 style={{ fontSize: 18, margin: "8px 0" }}>2. Plain &lt;video&gt; (raw /videos path)</h2>
        <video
          src="/videos/hero.mp4"
          poster="/images/story-whisk.png"
          autoPlay
          muted
          loop
          playsInline
          controls
          style={{ width: "100%", maxWidth: 640, display: "block", borderRadius: 12 }}
        />
      </section>

      <section style={{ padding: 16 }}>
        <h2 style={{ fontSize: 18, margin: "8px 0" }}>3. Full-bleed background video</h2>
        <div style={{ position: "relative", height: "60vh", overflow: "hidden", borderRadius: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gallery-foam.png"
            alt=""
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
          <video
            src="/videos/ritual.mp4"
            poster="/images/gallery-foam.png"
            autoPlay
            muted
            loop
            playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </section>
    </main>
  );
}
