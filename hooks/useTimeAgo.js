const DATE_UNITS = [
  ["day", 86400],
  ["hour", 3600],
  ["minute", 60],
  ["second", 1],
];

const getDateDiff = (timestamp) => {
  const now = Date.now();
  const elpased = (timestamp - now) / 1000;

  for (const [unit, seconds] of DATE_UNITS) {
    if (Math.abs(elpased) > seconds || unit === "second") {
      const value = Math.round(elpased / seconds);
      // `${value} ${unit}${value > 1 ? "s" : ""} ago`;
      return { value, unit };
    }
  }
};

export default function useTimeAgo(timestamp) {
  const { value, unit } = getDateDiff(timestamp);
  const rtf = new Intl.RelativeTimeFormat(navigator.language, {
    style: "short",
  });

  return rtf.format(value, unit);
}
