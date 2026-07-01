export type CountdownValue = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
};

export function getCountdown(targetIso: string, now = new Date()): CountdownValue {
  const target = new Date(targetIso).getTime();
  const diff = Math.max(0, target - now.getTime());

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1_000);

  return { days, hours, minutes, seconds, isPast: target <= now.getTime() };
}

export function padTime(value: number) {
  return value.toString().padStart(2, "0");
}
