"use client"

import { useState, useEffect, useCallback, CSSProperties } from "react";
import { motion } from "framer-motion";

interface Poster {
  id: number;
  title: string;
  subtitle: string;
  src: string;
}

type Direction = "left" | "right";
type CornerPosition = "topleft" | "topright" | "bottomleft" | "bottomright";

const POSTERS: Poster[] = [
  { id: 1, title: "Lighting Techniques", subtitle: "The Art of Illumination", src: "/posters/lighting-techniques.png" },
  { id: 2, title: "Color Theory", subtitle: "Paint With Light", src: "/posters/color-theory.png" },
  { id: 3, title: "Types of Shots", subtitle: "Framing the Story", src: "/posters/types-of-shots.png" },
  { id: 4, title: "Composition & Framing", subtitle: "The Golden Ratio", src: "/posters/composition-and-framing.png" },
  { id: 5, title: "Camera Movement", subtitle: "Motion & Emotion", src: "/posters/camera-movement.png" },
  { id: 6, title: "Camera Angles", subtitle: "Perspective & Power", src: "/posters/camera-angles.png" },
  { id: 7, title: "Focus & Depth", subtitle: "All May Not Be As It Seems", src: "/posters/depth-of-field.png" },
  { id: 8, title: "Mise en Scène", subtitle: "It's All in the Frame", src: "/posters/mise-en-scene.png" },
  { id: 9, title: "Mystery Bag", subtitle: "A Curated Selection · Shuffle Mode", src: "/posters/mystery-screening.png" },
];

// Placeholder gradient posters for demo (replace src above with real paths)
const PLACEHOLDER_GRADIENTS: string[] = [
  "linear-gradient(135deg, #1a0a2e 0%, #16213e 40%, #0f3460 100%)",
  "linear-gradient(135deg, #1a0a00 0%, #3d1a00 40%, #7a2d00 100%)",
  "linear-gradient(135deg, #001a0a 0%, #003d1a 40%, #006b2d 100%)",
  "linear-gradient(135deg, #1a1a0a 0%, #3d3a00 40%, #6b6000 100%)",
  "linear-gradient(135deg, #1a000a 0%, #3d0016 40%, #6b002a 100%)",
  "linear-gradient(135deg, #0a0a1a 0%, #001040 40%, #001870 100%)",
  "linear-gradient(135deg, #0a1a1a 0%, #003d3a 40%, #006b6b 100%)",
  "linear-gradient(135deg, #1a0a1a 0%, #3a0040 40%, #5a006b 100%)",
  "linear-gradient(135deg, #1a1010 0%, #3d1515 40%, #6b2020 100%)",
];

export default function PosterWall() {
  // 0–6 desktop (3 posters per view), 0–8 mobile (1 poster per view)
  const [offset, setOffset] = useState<number>(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile vs desktop
  useEffect(() => {
    const check = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const maxOffset = isMobile ? 8 : 6;

  // Which posters are visible: on mobile show single poster at offset; on desktop show three
  const visible: Poster[] = isMobile
    ? [POSTERS[offset]]
    : [POSTERS[offset], POSTERS[offset + 1], POSTERS[offset + 2]];

  const navigate = useCallback((dir: Direction): void => {
    if (dir === "right" && offset >= maxOffset) return;
    if (dir === "left" && offset <= 0) return;
    setOffset((o) => (dir === "right" ? o + 1 : o - 1));
  }, [offset, maxOffset]);

  useEffect(() => {
    const handler = (e: KeyboardEvent): void => {
      if (e.key === "ArrowRight") navigate("right");
      if (e.key === "ArrowLeft") navigate("left");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);

  // When switching to desktop, clamp offset so we don't show past last page (0..6)
  useEffect(() => {
    if (!isMobile && offset > 6) setOffset(6);
  }, [isMobile, offset]);

  // Sconce positions: 3 on desktop, 1 centered on mobile
  const sconcePositions = isMobile ? [50] : [15, 50, 85];

  return (
    <div style={styles.root}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Crimson+Text:ital,wght@0,400;1,400&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes flicker {
          0%,100% { opacity: 1; } 92% { opacity: 1; } 93% { opacity: 0.85; } 94% { opacity: 1; } 96% { opacity: 0.9; } 97% { opacity: 1; }
        }
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 30px 8px rgba(255,200,80,0.35), 0 0 80px 20px rgba(255,160,40,0.18); }
          50%      { box-shadow: 0 0 45px 14px rgba(255,210,90,0.55), 0 0 100px 30px rgba(255,170,50,0.28); }
        }
        .poster-frame:hover .spotlight-cone { opacity: 1 !important; }
        .poster-frame:hover .frame-inner { animation: glowPulse 2s ease-in-out infinite; }
        .poster-frame:hover .caption { opacity: 1 !important; transform: translateY(0) !important; }
        .nav-btn:hover { opacity: 1 !important; transform: translateY(-50%) scale(1.1) !important; }
        .dot { transition: all 0.3s ease; cursor: pointer; }
        .dot:hover { transform: scale(1.3); }
      `}</style>

      {/* === CEILING === */}
      <div style={styles.ceiling}>
        {/* Crown molding */}
        <div style={styles.crownMolding} />
        {/* Sconce row: same layout as poster row so each sconce aligns above its poster */}
        <div
          style={{
            ...styles.sconceRow,
            paddingTop: "0",
            paddingLeft: isMobile ? "40px" : "clamp(60px, 8vw, 120px)",
            paddingRight: isMobile ? "40px" : "clamp(60px, 8vw, 120px)",
            paddingBottom: "4px",
            gap: isMobile ? "24px" : styles.sconceRow.gap,
          }}
        >
          {sconcePositions.map((_, i) => (
            <div
              key={i}
              style={{
                ...styles.sconceCell,
                maxWidth: isMobile ? "280px" : styles.sconceCell.maxWidth,
              }}
            >
              <div style={styles.sconce}>
                <div style={styles.sconceArm} />
                <div style={styles.sconceBulb}>
                  <div style={styles.sconceBulbGlow} />
                </div>
                <div style={styles.sconceHalo} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === WALL === */}
      <div style={styles.wall}>
        {/* Wainscoting panel line */}
        <div style={styles.wainscotLine} />

        {/* Dark upper wall fade */}
        <div style={styles.wallTopFade} />

        {/* === POSTER ROW === */}
        <div
          style={{
            ...styles.posterRow,
            paddingTop: "0",
            paddingLeft: isMobile ? "40px" : "clamp(60px, 8vw, 120px)",
            paddingRight: isMobile ? "40px" : "clamp(60px, 8vw, 120px)",
            paddingBottom: isMobile ? "14%" : "6%",
            gap: isMobile ? "24px" : styles.posterRow.gap,
          }}
        >
          {visible.map((poster) => {
            const isHovered = hovered === poster.id;

            return (
              <div
                key={poster.id}
                className="poster-frame"
                style={{
                  ...styles.posterWrap,
                  maxWidth: isMobile ? "280px" : styles.posterWrap.maxWidth,
                }}
                onMouseEnter={() => setHovered(poster.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Spotlight cone from ceiling */}
                <div
                  className="spotlight-cone"
                  style={{
                    ...styles.spotlightCone,
                    opacity: isHovered ? 1 : 0.55,
                    transition: "opacity 0.4s ease",
                  }}
                />

                {/* Outer frame shadow */}
                <div style={{
                  ...styles.frameShadow,
                  boxShadow: isHovered
                    ? "0 30px 80px rgba(0,0,0,0.9), 0 0 0 1px rgba(180,140,60,0.5)"
                    : "0 20px 50px rgba(0,0,0,0.8), 0 0 0 1px rgba(100,80,30,0.3)",
                  transition: "box-shadow 0.4s ease",
                }}>
                  {/* Ornate frame border */}
                  <div style={{
                    ...styles.frameOuter,
                    background: isHovered
                      ? "linear-gradient(135deg, #C9A84C 0%, #8B6914 25%, #E8C96A 50%, #8B6914 75%, #C9A84C 100%)"
                      : "linear-gradient(135deg, #7A6020 0%, #4A3A10 25%, #9A8040 50%, #4A3A10 75%, #7A6020 100%)",
                    transition: "background 0.4s ease",
                  }}>
                    {/* Frame corner ornaments */}
                    {(["topleft", "topright", "bottomleft", "bottomright"] as CornerPosition[]).map(corner => (
                      <div key={corner} style={getCornerStyle(corner)} />
                    ))}

                    {/* Inner frame */}
                    <div
                      className="frame-inner"
                      style={{
                        ...styles.frameInner,
                        boxShadow: isHovered
                          ? "0 0 30px 8px rgba(255,200,80,0.35), 0 0 80px 20px rgba(255,160,40,0.18), inset 0 0 20px rgba(0,0,0,0.6)"
                          : "inset 0 0 20px rgba(0,0,0,0.6)",
                        transition: "box-shadow 0.4s ease",
                      }}
                    >
                      {/* Poster image - only this area animates when changing posters */}
                      <motion.div
                        key={poster.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                          width: "100%",
                          height: "100%",
                          background: PLACEHOLDER_GRADIENTS[poster.id - 1],
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {/* Try real image, fallback to gradient */}
                        <img
                          src={poster.src}
                          alt={poster.title}
                          style={{
                            position: "absolute", inset: 0,
                            width: "100%", height: "100%",
                            objectFit: "cover",
                          }}
                          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                            (e.target as HTMLImageElement).style.display = "none";
                          }}
                        />

                        {/* Hover vignette lift */}
                        <div style={{
                          position: "absolute", inset: 0,
                          background: isHovered
                            ? "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)"
                            : "radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.55) 100%)",
                          transition: "background 0.4s ease",
                        }} />

                        {/* Poster grain texture */}
                        <div style={styles.posterGrain} />

                        
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Caption below frame */}
                <div
                  className="caption"
                  style={{
                    ...styles.caption,
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(6px)",
                    transition: "all 0.35s ease",
                  }}
                >
                  <div style={styles.captionTitle}>{poster.title}</div>
                  <div style={styles.captionSub}>{poster.subtitle}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* === WAINSCOTING BASE === */}
        <div style={styles.wainscoting}>
          <div style={styles.wainscotInner} />
          {/* Carpet */}
          <div style={styles.carpet}>
            <div style={styles.carpetPattern} />
            <div style={styles.carpetSheen} />
          </div>
        </div>
      </div>

      {/* === NAV ARROWS === */}
      <button
        className="nav-btn"
        onClick={() => navigate("left")}
        disabled={offset === 0}
        style={{
          ...styles.navBtn,
          left: "20px",
          opacity: offset === 0 ? 0.2 : 0.7,
          cursor: offset === 0 ? "default" : "pointer",
          transition: "all 0.2s ease",
        }}
        aria-label="Previous posters"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M18 4L8 14L18 24" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        className="nav-btn"
        onClick={() => navigate("right")}
        disabled={offset >= maxOffset}
        style={{
          ...styles.navBtn,
          right: "20px",
          opacity: offset >= maxOffset ? 0.2 : 0.7,
          cursor: offset >= maxOffset ? "default" : "pointer",
          transition: "all 0.2s ease",
        }}
        aria-label="Next posters"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M10 4L20 14L10 24" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* === DOT INDICATORS === */}
      <div style={styles.dots}>
        {Array.from({ length: isMobile ? 9 : 7 }, (_, i) => (
          <div
            key={i}
            className="dot"
            onClick={() => setOffset(i)}
            style={{
              ...styles.dot,
              background: i === offset
                ? "#C9A84C"
                : "rgba(201,168,76,0.25)",
              transform: i === offset ? "scale(1.4)" : "scale(1)",
            }}
          />
        ))}
      </div>

      {/* === KEYBOARD HINT === */}
      <div style={styles.keyHint}>
        <span style={styles.keyChip}>←</span>
        <span style={styles.keyLabel}>navigate</span>
        <span style={styles.keyChip}>→</span>
      </div>
    </div>
  );
}

// Corner ornament positions
function getCornerStyle(corner: CornerPosition): CSSProperties {
  const base: CSSProperties = {
    position: "absolute",
    width: "16px",
    height: "16px",
    background: "radial-gradient(circle at center, #E8C96A 0%, #8B6914 60%, transparent 100%)",
    borderRadius: "50%",
    zIndex: 2,
  };
  const pos: Record<CornerPosition, CSSProperties> = {
    topleft:     { top: "-4px", left: "-4px" },
    topright:    { top: "-4px", right: "-4px" },
    bottomleft:  { bottom: "-4px", left: "-4px" },
    bottomright: { bottom: "-4px", right: "-4px" },
  };
  return { ...base, ...pos[corner] };
}

const styles: Record<string, CSSProperties> = {
  root: {
    width: "100vw",
    height: "100vh",
    minHeight: "500px",
    background: "#0a0806",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Cinzel', serif",
  },

  // CEILING
  ceiling: {
    height: "12%",
    minHeight: "50px",
    background: "linear-gradient(180deg, #1a1208 0%, #221a0c 60%, #2a2010 100%)",
    position: "relative",
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  crownMolding: {
    position: "absolute",
    bottom: 0, left: 0, right: 0,
    height: "8px",
    background: "linear-gradient(180deg, #3a2e14 0%, #5a4820 50%, #3a2e14 100%)",
    boxShadow: "0 4px 12px rgba(0,0,0,0.6)",
  },
  /** Sconce row: same padding/gap/flex as poster row so sconces align with posters */
  sconceRow: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    gap: "clamp(16px, 3vw, 48px)",
    paddingTop: "0",
    paddingRight: "clamp(60px, 8vw, 120px)",
    paddingBottom: "4px",
    paddingLeft: "clamp(60px, 8vw, 120px)",
    position: "relative",
    zIndex: 1,
  },
  sconceCell: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 0",
    maxWidth: "260px",
  },
  sconce: {
    position: "relative",
    bottom: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sconceArm: {
    width: "3px",
    height: "20px",
    background: "linear-gradient(180deg, #8B6914, #C9A84C)",
    borderRadius: "2px",
  },
  sconceBulb: {
    width: "14px",
    height: "14px",
    background: "radial-gradient(circle at 40% 40%, #FFF9E0, #F5C842)",
    borderRadius: "50%",
    position: "relative",
    animation: "flicker 8s ease-in-out infinite",
  },
  sconceBulbGlow: {
    position: "absolute",
    inset: "-6px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(245,200,66,0.6) 0%, transparent 70%)",
  },
  sconceHalo: {
    position: "absolute",
    bottom: "-30px",
    width: "60px",
    height: "60px",
    background: "radial-gradient(ellipse at top, rgba(245,200,66,0.12) 0%, transparent 70%)",
    pointerEvents: "none",
  },

  // WALL
  wall: {
    flex: 1,
    background: [
      "radial-gradient(ellipse at 20% 50%, rgba(60,40,15,0.4) 0%, transparent 50%)",
      "radial-gradient(ellipse at 80% 50%, rgba(60,40,15,0.4) 0%, transparent 50%)",
      "linear-gradient(180deg, #1e1608 0%, #181208 40%, #201808 100%)",
    ].join(", "),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  wallTopFade: {
    position: "absolute",
    top: 0, left: 0, right: 0,
    height: "30px",
    background: "linear-gradient(180deg, rgba(0,0,0,0.5), transparent)",
    pointerEvents: "none",
    zIndex: 1,
  },
  wainscotLine: {
    position: "absolute",
    bottom: "28%",
    left: 0, right: 0,
    height: "6px",
    background: "linear-gradient(90deg, transparent 0%, #5a4820 10%, #8B6914 50%, #5a4820 90%, transparent 100%)",
    boxShadow: "0 2px 6px rgba(0,0,0,0.5), 0 -1px 3px rgba(201,168,76,0.15)",
    zIndex: 2,
  },

  // POSTER ROW
  posterRow: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "clamp(16px, 3vw, 48px)",
    paddingTop: "0",
    paddingRight: "clamp(60px, 8vw, 120px)",
    paddingBottom: "6%",
    paddingLeft: "clamp(60px, 8vw, 120px)",
    zIndex: 3,
    position: "relative",
  },
  posterWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1 1 0",
    maxWidth: "260px",
    position: "relative",
    cursor: "pointer",
  },
  spotlightCone: {
    position: "absolute",
    top: "-120px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "200%",          // how wide the cone is; you can tweak this
    height: "160px",
    background: "linear-gradient(180deg, rgba(255,200,80,0.12) 0%, rgba(255,180,60,0.06) 60%, transparent 100%)",
    clipPath: "polygon(35% 0%, 65% 0%, 100% 100%, 0% 100%)",
    pointerEvents: "none",
    zIndex: 0,
  },
  frameShadow: {
    width: "100%",
    aspectRatio: "2/3",
    borderRadius: "2px",
    position: "relative",
    zIndex: 1,
  },
  frameOuter: {
    width: "100%",
    height: "100%",
    padding: "10px",
    borderRadius: "2px",
    position: "relative",
  },
  frameInner: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    position: "relative",
  },
  posterGrain: {
    position: "absolute",
    inset: 0,
    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
    opacity: 0.4,
    mixBlendMode: "overlay",
    pointerEvents: "none",
  },
  caption: {
    marginTop: "14px",
    textAlign: "center",
    pointerEvents: "none",
  },
  captionTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: "clamp(9px, 1.2vw, 13px)",
    fontWeight: 600,
    color: "#C9A84C",
    letterSpacing: "2px",
    textTransform: "uppercase",
    marginBottom: "4px",
  },
  captionSub: {
    fontFamily: "'Crimson Text', serif",
    fontStyle: "italic",
    fontSize: "clamp(8px, 1vw, 11px)",
    color: "rgba(245,237,214,0.5)",
    letterSpacing: "0.5px",
  },

  // WAINSCOTING
  wainscoting: {
    height: "28%",
    background: "linear-gradient(180deg, #1a1208 0%, #100e06 100%)",
    position: "relative",
    flexShrink: 0,
    borderTop: "3px solid #3a2e14",
  },
  wainscotInner: {
    position: "absolute",
    top: "8px", left: "20px", right: "20px",
    height: "20px",
    background: "linear-gradient(180deg, rgba(201,168,76,0.08) 0%, transparent 100%)",
    borderTop: "1px solid rgba(201,168,76,0.15)",
  },

  // CARPET
  carpet: {
    position: "absolute",
    bottom: 0, left: 0, right: 0,
    height: "68%",
    overflow: "hidden",
  },
  carpetPattern: {
    width: "100%",
    height: "100%",
    background: [
      "repeating-linear-gradient(90deg, rgba(120,20,20,0.15) 0px, transparent 2px, transparent 20px, rgba(120,20,20,0.15) 22px)",
      "repeating-linear-gradient(0deg, rgba(120,20,20,0.15) 0px, transparent 2px, transparent 20px, rgba(120,20,20,0.15) 22px)",
      "linear-gradient(180deg, #5a1010 0%, #3d0a0a 40%, #6a1818 70%, #4a0e0e 100%)",
    ].join(", "),
  },
  carpetSheen: {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(180deg, rgba(255,180,100,0.08) 0%, transparent 40%, rgba(0,0,0,0.3) 100%)",
    pointerEvents: "none",
  },

  // NAV
  navBtn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(10,8,4,0.7)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "50%",
    width: "52px",
    height: "52px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    backdropFilter: "blur(4px)",
    transition: "all 0.2s ease",
  },

  // DOTS
  dots: {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
    zIndex: 10,
    alignItems: "center",
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
  },

  // KEYBOARD HINT
  keyHint: {
    position: "absolute",
    bottom: "10px",
    right: "20px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    zIndex: 10,
    opacity: 0.4,
  },
  keyChip: {
    fontFamily: "'Cinzel', serif",
    fontSize: "10px",
    color: "#C9A84C",
    background: "rgba(201,168,76,0.1)",
    border: "1px solid rgba(201,168,76,0.3)",
    borderRadius: "3px",
    padding: "2px 6px",
  },
  keyLabel: {
    fontFamily: "'Cinzel', serif",
    fontSize: "9px",
    color: "rgba(201,168,76,0.7)",
    letterSpacing: "2px",
    textTransform: "uppercase",
  },
};