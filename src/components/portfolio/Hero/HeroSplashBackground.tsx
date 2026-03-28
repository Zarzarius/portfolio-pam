"use client";

import bind from "classnames/bind";

import SplashCursor from "./SplashCursor";

import styles from "./Hero.module.css";

const cx = bind.bind(styles);

export function HeroSplashBackground() {
  return (
    <div className={cx("splashBg")} aria-hidden>
      <SplashCursor
        SIM_RESOLUTION={128}
        DYE_RESOLUTION={1440}
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING={false}
      />
    </div>
  );
}
