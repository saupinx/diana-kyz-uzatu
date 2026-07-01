"use client";

import { useRef, useState } from "react";

type MusicButtonProps = {
  src: string;
  label: string;
  unavailableLabel: string;
};

const MUSIC_START_TIME = 147; // 2 минуты 27 секунд

export function MusicButton({ src, label, unavailableLabel }: MusicButtonProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isUnavailable, setIsUnavailable] = useState(false);

  async function toggleMusic() {
    const audio = audioRef.current;

    if (!audio || isUnavailable) {
      return;
    }

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        return;
      }

      if (!hasStartedRef.current || audio.currentTime < MUSIC_START_TIME) {
        audio.currentTime = MUSIC_START_TIME;
        hasStartedRef.current = true;
      }

      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
      setIsUnavailable(true);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        loop
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsUnavailable(true)}
      />

      <button
        type="button"
        onClick={toggleMusic}
        disabled={isUnavailable}
        className={`music-button ${isPlaying ? "music-button-playing" : ""} grid h-12 w-12 place-items-center rounded-full bg-black text-white disabled:cursor-not-allowed disabled:bg-neutral-400`}
        aria-label={isUnavailable ? unavailableLabel : label || "Музыка"}
        title={isUnavailable ? unavailableLabel : label || "Музыка"}
      >
        <span className="text-sm font-semibold" aria-hidden="true">
          {isPlaying ? "II" : "PLAY"}
        </span>
      </button>

      {label ? (
        <span className="text-xs uppercase tracking-[0.28em] text-neutral-600">
          {isUnavailable ? unavailableLabel : label}
        </span>
      ) : null}
    </div>
  );
}