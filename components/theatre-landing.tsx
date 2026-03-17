'use client';

import { useEffect, useRef, useMemo } from 'react';
import { navigateTo } from "@/app/page"

// ── Types ────────────────────────────────────────────────────────────────────

interface Star {
  width: number;
  height: number;
  top: number;
  left: number;
  d: number;
  delay: number;
  lo: number;
  hi: number;
}

// ── Component ────────────────────────────────────────────────────────────────

export default function TheatreLanding({ onEnter }: { onEnter?: () => void }) {
  const scaleRef   = useRef<HTMLDivElement>(null);

  // Generate stars once on mount (stable across re-renders)
  const stars = useMemo<Star[]>(() =>
    Array.from({ length: 130 }, () => ({
      width:  Math.random() * 2.2 + 0.4,
      height: Math.random() * 2.2 + 0.4,
      top:    Math.random() * 68,
      left:   Math.random() * 100,
      d:      2 + Math.random() * 4,
      delay:  -(Math.random() * 5),
      lo:     parseFloat((0.08 + Math.random() * 0.22).toFixed(2)),
      hi:     parseFloat((0.5  + Math.random() * 0.5).toFixed(2)),
    })),
  []);

  const corniceCount = 26;

  // ── Responsive scale ───────────────────────────────────────────────────────
  useEffect(() => {
    const DESIGN_W = 720;
    const DESIGN_H = 620;
    const PAD_W    = 0.97;
    const PAD_H    = 0.90;

    function resize() {
      if (!scaleRef.current) return;
      const scaleByW = (window.innerWidth  * PAD_W) / DESIGN_W;
      const scaleByH = (window.innerHeight * PAD_H) / DESIGN_H;
      const scale    = Math.min(scaleByW, scaleByH);
      scaleRef.current.style.setProperty('--scale', String(scale));
    }

    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // ── Navigation ─────────────────────────────────────────────────────────────
  function enterTheatre() {
    navigateTo("poster-wall")
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      enterTheatre();
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* ── Global styles injected once ── */}
      <style>{CSS}</style>

      <div className="fw-scene">
        {/* Stars */}
        <div className="fw-stars">
          {stars.map((s, i) => (
            <div
              key={i}
              className="fw-star"
              style={{
                width:   `${s.width}px`,
                height:  `${s.height}px`,
                top:     `${s.top}%`,
                left:    `${s.left}%`,
                ['--d' as string]:     `${s.d}s`,
                ['--delay' as string]: `${s.delay}s`,
                ['--lo' as string]:    s.lo,
                ['--hi' as string]:    s.hi,
              }}
            />
          ))}
        </div>

        <div className="fw-ground-glow" />

        {/* Scale wrapper */}
        <div className="fw-scale-wrap" ref={scaleRef}>
          <div className="fw-theatre">

            {/* Cornice */}
            <div className="fw-cornice">
              {Array.from({ length: corniceCount }, (_, i) => (
                <div key={i} className="fw-cornice-bulb" />
              ))}
            </div>

            {/* Marquee */}
            <div className="fw-marquee-wrap">
              <div className="fw-marquee-lights">
                <div className="fw-marquee-corner-light fw-tl" />
                <div className="fw-marquee-corner-light fw-tr" />
                <div className="fw-marquee-corner-light fw-bl" />
                <div className="fw-marquee-corner-light fw-br" />
              </div>
              <h1 className="fw-theatre-title">Fifth Wall Theatres</h1>
              <div className="fw-marquee-divider" />
              <p className="fw-marquee-subtitle">
                Cinematography Quiz&nbsp;&nbsp;·&nbsp;&nbsp;Est. 2026
              </p>
            </div>

            {/* Facade */}
            <div className="fw-facade">
              <div className="fw-pilaster fw-left"  />
              <div className="fw-pilaster fw-right" />
              <div className="fw-facade-band">Official Grand Opening</div>

              {/* Lobby windows */}
              <div className="fw-windows-row">
                {[0,1,2,3,4].map(i => (
                  <div key={i} className="fw-lobby-window">
                    <div className="fw-window-cross" />
                  </div>
                ))}
              </div>

              {/* Entrance */}
              <div
                className="fw-entrance"
                role="button"
                tabIndex={0}
                aria-label="Enter Fifth Wall Theatres"
                onClick={enterTheatre}
                onKeyDown={handleKeyDown}
              >
                <div className="fw-door-surround">
                  {/* Light leak sits here so it spans the full arch+door height */}
                  <div className="fw-door-light-leak" />

                  <div className="fw-door-arch-top">
                    <div className="fw-door-arch-fanlight">
                      {[0,1,2,3,4].map(i => (
                        <div key={i} className={`fw-fanlight-spoke fw-spoke-${i}`} />
                      ))}
                    </div>
                  </div>

                  <div className="fw-door-frame">
                    {/* Left door */}
                    <div className="fw-door fw-left-door">
                      <div className="fw-door-panel fw-door-upper-panel" />
                      <div className="fw-door-panel fw-door-lower-panel" />
                      <div className="fw-door-handle" />
                      <div className="fw-door-inner-glow" />
                    </div>
                    {/* Right door */}
                    <div className="fw-door fw-right-door">
                      <div className="fw-door-panel fw-door-upper-panel" />
                      <div className="fw-door-panel fw-door-lower-panel" />
                      <div className="fw-door-handle" />
                      <div className="fw-door-inner-glow" />
                    </div>
                  </div>
                </div>

                <div className="fw-enter-label">Click to Enter</div>

                <div className="fw-steps">
                  <div className="fw-step" />
                  <div className="fw-step" />
                  <div className="fw-step" />
                </div>
              </div>
            </div>{/* /.fw-facade */}

            <div className="fw-ground"       />
            <div className="fw-ground-strip" />
            <div className="fw-sidewalk"     />

          </div>{/* /.fw-theatre */}
        </div>{/* /.fw-scale-wrap */}
      </div>{/* /.fw-scene */}
    </>
  );
}

// ── Styles ───────────────────────────────────────────────────────────────────
// Scoped with fw- prefix to avoid collisions with other page styles.

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

  /* ── Tokens ── */
  .fw-scene {
    --gold:        #c8911a;
    --gold-light:  #ffd84a;
    --gold-pale:   #ffeaa0;
    --gold-mid:    #c8a860;
    --gold-dark:   #8a6014;
    --gold-deep:   #7a5420;
    --brown-1:     #1a0f07;
    --brown-2:     #251508;
    --brown-3:     #301a0a;
    --brown-4:     #3d220d;
    --brown-5:     #4a2c12;
    --brown-6:     #2e1a08;
    --brown-door:  #3a2008;
    --brown-door2: #281504;
  }

  /* ── Scene ── */
  .fw-scene {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    background: linear-gradient(to bottom, #07030a 0%, #0e0618 25%, #160a22 55%, #100814 80%, #0a0510 100%);
    overflow: hidden;
    font-family: 'Cormorant Garamond', serif;
  }

  /* ── Stars ── */
  .fw-stars {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .fw-star {
    position: absolute;
    background: #fff;
    border-radius: 50%;
    animation: fw-twinkle var(--d) ease-in-out infinite var(--delay);
  }
  @keyframes fw-twinkle {
    0%, 100% { opacity: var(--lo); transform: scale(1); }
    50%      { opacity: var(--hi); transform: scale(1.5); }
  }

  /* ── Ground glow ── */
  .fw-ground-glow {
    position: absolute;
    bottom: 0; left: 50%;
    transform: translateX(-50%);
    width: 140%; height: 30%;
    background: radial-gradient(ellipse at center bottom, rgba(220,170,30,.14) 0%, transparent 65%);
    pointer-events: none;
  }

  /* ── Scale wrapper ── */
  .fw-scale-wrap {
    transform-origin: bottom center;
    transform: scale(var(--scale, 1));
    will-change: transform;
  }

  /* ── Theatre ── */
  .fw-theatre {
    width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fw-theatre-rise .9s cubic-bezier(.2,.8,.3,1) both;
  }
  @keyframes fw-theatre-rise {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Cornice ── */
  .fw-cornice {
    width: 100%;
    height: 28px;
    background: linear-gradient(to bottom, var(--brown-5), var(--brown-4));
    border-top: 2px solid var(--gold);
    border-left: 2px solid var(--gold);
    border-right: 2px solid var(--gold);
    border-radius: 2px 2px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 0 10px;
    overflow: hidden;
  }
  .fw-cornice-bulb {
    flex-shrink: 0;
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--gold-light);
    box-shadow: 0 0 6px 3px rgba(255,210,50,.75), 0 0 14px 5px rgba(255,180,20,.38);
    animation: fw-bulb-flicker 2.8s ease-in-out infinite;
  }
  .fw-cornice-bulb:nth-child(even) { animation-duration: 3.4s; animation-delay: .6s; }
  .fw-cornice-bulb:nth-child(3n)   { animation-duration: 2.2s; animation-delay: 1.1s; }
  @keyframes fw-bulb-flicker {
    0%,100% { opacity: 1; }
    92%     { opacity: 1; }
    94%     { opacity: .25; }
    96%     { opacity: 1; }
    98%     { opacity: .55; }
  }

  /* ── Marquee ── */
  .fw-marquee-wrap {
    width: calc(100% - 56px);
    background: var(--brown-1);
    border: 2.5px solid var(--gold);
    border-top: none;
    padding: 18px 28px 14px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .fw-marquee-lights {
    position: absolute;
    inset: 6px;
    border: 1px dashed rgba(255,210,50,.22);
    pointer-events: none;
  }
  .fw-marquee-corner-light {
    position: absolute;
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gold-light);
    box-shadow: 0 0 5px 2px rgba(255,210,50,.8);
  }
  .fw-tl { top: 4px;    left: 4px; }
  .fw-tr { top: 4px;    right: 4px; }
  .fw-bl { bottom: 4px; left: 4px; }
  .fw-br { bottom: 4px; right: 4px; }

  .fw-theatre-title {
    font-family: 'Playfair Display', serif;
    font-size: 52px;
    font-weight: 900;
    color: var(--gold-pale);
    letter-spacing: .1em;
    text-transform: uppercase;
    text-align: center;
    line-height: 1;
    text-shadow:
      0 0 8px  rgba(255,220,80,.95),
      0 0 22px rgba(255,190,40,.75),
      0 0 44px rgba(255,160,20,.45),
      0 0 80px rgba(220,130,10,.22);
    animation: fw-title-glow 3s ease-in-out infinite;
  }
  @keyframes fw-title-glow {
    0%,100% {
      text-shadow:
        0 0 8px  rgba(255,220,80,.95),
        0 0 22px rgba(255,190,40,.75),
        0 0 44px rgba(255,160,20,.45),
        0 0 80px rgba(220,130,10,.22);
    }
    50% {
      text-shadow:
        0 0 14px rgba(255,235,110,1),
        0 0 32px rgba(255,205,65,.9),
        0 0 60px rgba(255,175,35,.6),
        0 0 100px rgba(235,145,18,.32);
    }
  }

  .fw-marquee-divider {
    width: 80%;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--gold), transparent);
  }
  .fw-marquee-subtitle {
    font-size: 13px;
    font-style: italic;
    color: var(--gold-mid);
    letter-spacing: .38em;
    text-transform: uppercase;
    text-align: center;
  }

  /* ── Facade ── */
  .fw-facade {
    width: 100%;
    background: linear-gradient(to bottom, var(--brown-1) 0%, var(--brown-1) 100%);
    border-left: 2.5px solid var(--gold);
    border-right: 2.5px solid var(--gold);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 26px 40px 0;
    gap: 22px;
    position: relative;
  }
  .fw-pilaster {
    position: absolute;
    top: 0; bottom: 0;
    width: 20px;
    background: repeating-linear-gradient(to bottom, var(--brown-2) 0px, var(--brown-4) 8px, var(--brown-2) 16px);
  }
  .fw-pilaster.fw-left  { left: 16px;  border-right: 1px solid rgba(200,145,26,.3); }
  .fw-pilaster.fw-right { right: 16px; border-left:  1px solid rgba(200,145,26,.3); }

  .fw-facade-band {
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    color: #b07c30;
    font-size: 12px;
    letter-spacing: .55em;
    text-transform: uppercase;
  }
  .fw-facade-band::before { content: ''; flex: 1; height: 1px; background: linear-gradient(to right, transparent, var(--gold-deep)); }
  .fw-facade-band::after  { content: ''; flex: 1; height: 1px; background: linear-gradient(to left,  transparent, var(--gold-deep)); }

  /* ── Lobby windows ── */
  .fw-windows-row { display: flex; gap: 18px; justify-content: center; }
  .fw-lobby-window {
    width: 68px; height: 88px;
    background: var(--brown-6);
    border: 1.5px solid #6a4818;
    border-radius: 50% 50% 0 0 / 30% 30% 0 0;
    position: relative;
    overflow: hidden;
  }
  .fw-lobby-window::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at 40% 25%, rgba(255,190,60,.1) 0%, transparent 65%);
  }
  .fw-lobby-window::after {
    content: '';
    position: absolute;
    top: 0; bottom: 0; left: 50%;
    width: 1px;
    background: rgba(180,120,20,.3);
  }
  .fw-window-cross {
    position: absolute;
    top: 45%; left: 10%; right: 10%;
    height: 1px;
    background: rgba(180,120,20,.3);
  }

  /* ── Entrance ── */
  .fw-entrance {
    display: flex;
    align-items: flex-end;
    position: relative;
    padding-top: 10px;
    cursor: pointer;
    outline: none;
  }
  .fw-entrance:focus-visible { outline: 2px dashed var(--gold); outline-offset: 6px; }

  /* Steps */
  .fw-steps {
    position: absolute;
    bottom: -24px;
    left: 50%; transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .fw-step {
    height: 10px;
    background: linear-gradient(to bottom, var(--brown-3), var(--brown-2));
    border: 1px solid rgba(200,145,26,.22);
    border-bottom: none;
  }
  .fw-step:nth-child(1) { width: 360px; }
  .fw-step:nth-child(2) { width: 320px; }
  .fw-step:nth-child(3) { width: 280px; border-bottom: 1px solid rgba(200,145,26,.22); }

  /* Door surround */
  .fw-door-surround {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  /* Arch */
  .fw-door-arch-top {
    width: 244px; height: 32px;
    background: var(--brown-1);
    border: 2px solid #a06e18;
    border-bottom: none;
    border-radius: 50% 50% 0 0 / 100% 100% 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fw-door-arch-fanlight {
    width: 120px; height: 18px;
    border: 1px solid rgba(180,130,30,.5);
    border-radius: 50%;
    background: radial-gradient(ellipse, rgba(255,190,60,.07) 0%, transparent 70%);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }
  .fw-fanlight-spoke {
    width: 1px; height: 12px;
    background: rgba(200,145,26,.5);
    transform-origin: bottom center;
  }
  .fw-spoke-0 { transform: rotate(-30deg); }
  .fw-spoke-1 { transform: rotate(-10deg); }
  .fw-spoke-2 { transform: rotate(0deg); }
  .fw-spoke-3 { transform: rotate(10deg); }
  .fw-spoke-4 { transform: rotate(30deg); }

  /* Door frame */
  .fw-door-frame {
    width: 244px;
    background: var(--brown-1);
    border: 2px solid #a06e18;
    border-top: none;
    padding: 14px 14px 0;
    display: flex;
    gap: 10px;
  }

  /* Doors */
  .fw-door {
    flex: 1;
    height: 200px;
    background: linear-gradient(165deg, var(--brown-door) 0%, var(--brown-door2) 40%, var(--brown-door) 70%, var(--brown-door2) 100%);
    border: 1.5px solid #7a5412;
    position: relative;
    transition: transform .5s cubic-bezier(.4,0,.2,1), filter .4s ease;
    transform-style: preserve-3d;
    overflow: hidden;
  }
  .fw-left-door  { transform-origin: left center; }
  .fw-right-door { transform-origin: right center; }

  .fw-door::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 1px solid rgba(160,110,20,.3);
  }
  .fw-door::after {
    content: '';
    position: absolute;
    top: 8px; bottom: 8px; left: 50%;
    width: 1px;
    background: rgba(140,90,14,.3);
  }

  .fw-door-panel {
    position: absolute;
    left: 14px; right: 14px;
    height: 80px;
    background: rgba(255,170,40,.03);
    border: 1px solid rgba(140,90,14,.22);
  }
  .fw-door-upper-panel { top: 14px; }
  .fw-door-lower-panel { bottom: 14px; }

  .fw-door-handle {
    position: absolute;
    top: 50%; transform: translateY(-50%);
    width: 7px; height: 18px;
    background: radial-gradient(circle, #e8c840 0%, #c8a020 60%, #8a6010 100%);
    border-radius: 3px;
    box-shadow: 0 0 4px rgba(255,200,50,.4);
  }
  .fw-left-door  .fw-door-handle { right: 12px; }
  .fw-right-door .fw-door-handle { left: 12px; }

  .fw-door-inner-glow {
    position: absolute; inset: 0;
    background: radial-gradient(ellipse at center, rgba(255,160,30,.0) 0%, transparent 60%);
    transition: background .4s ease;
    pointer-events: none;
  }

  /* Light leak — spans full arch+door height via door-surround */
  .fw-door-light-leak {
    position: absolute;
    top: 0; bottom: 0;
    left: 50%; transform: translateX(-50%);
    width: 0;
    background: rgba(255,140,20,0);
    transition: width .5s ease, background .5s ease, box-shadow .5s ease;
    pointer-events: none;
    z-index: 10;
  }

  /* Hover states */
  .fw-entrance:hover .fw-left-door,
  .fw-entrance:focus-visible .fw-left-door {
    transform: perspective(600px) rotateY(-28deg);
    filter: brightness(1.18);
  }
  .fw-entrance:hover .fw-right-door,
  .fw-entrance:focus-visible .fw-right-door {
    transform: perspective(600px) rotateY(28deg);
    filter: brightness(1.18);
  }
  .fw-entrance:hover .fw-door-inner-glow,
  .fw-entrance:focus-visible .fw-door-inner-glow {
    background: radial-gradient(ellipse at center, rgba(255,160,30,.2) 0%, transparent 60%);
  }
  .fw-entrance:hover .fw-door-surround .fw-door-light-leak,
  .fw-entrance:focus-visible .fw-door-surround .fw-door-light-leak {
    width: 20px;
    background: rgba(255,140,20,.55);
    box-shadow: 0 0 60px 80px rgba(255,120,15,.28);
  }

  /* Enter label */
  .fw-enter-label {
    position: absolute;
    bottom: -56px;
    left: 50%; transform: translateX(-50%);
    font-size: 12px;
    font-style: italic;
    letter-spacing: .5em;
    color: rgba(200,160,70,0);
    text-transform: uppercase;
    white-space: nowrap;
    transition: color .4s ease;
    pointer-events: none;
    user-select: none;
  }
  .fw-entrance:hover .fw-enter-label,
  .fw-entrance:focus-visible .fw-enter-label { color: rgba(200,160,70,.85); }

  /* ── Ground ── */
  .fw-ground {
    width: 100%;
    height: 28px;
    background: linear-gradient(to bottom, var(--brown-2), #100a04);
    border-top: 1.5px solid rgba(200,145,26,.28);
    border-left: 2.5px solid var(--gold);
    border-right: 2.5px solid var(--gold);
  }
  .fw-ground-strip {
    width: calc(100% + 70px);
    height: 14px;
    background: #0e0804;
    border-top: 1px solid rgba(100,65,14,.35);
  }
  .fw-sidewalk {
    width: 200%;
    height: 20px;
    background: repeating-linear-gradient(to right, #100c06 0px, #140e08 44px, #100c06 88px);
    border-top: 1px solid rgba(80,55,14,.22);
  }
`;
