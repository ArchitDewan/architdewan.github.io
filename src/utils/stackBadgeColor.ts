const AUTO_PALETTE = [
  'border-cyan-200 bg-cyan-50 text-cyan-700',
  'border-blue-200 bg-blue-50 text-blue-700',
  'border-amber-200 bg-amber-50 text-amber-700',
  'border-emerald-200 bg-emerald-50 text-emerald-700',
  'border-orange-200 bg-orange-50 text-orange-700',
  'border-sky-200 bg-sky-50 text-sky-700',
  'border-indigo-200 bg-indigo-50 text-indigo-700',
  'border-teal-200 bg-teal-50 text-teal-700',
  'border-pink-200 bg-pink-50 text-pink-700',
  'border-lime-200 bg-lime-50 text-lime-700'
] as const;

const CURATED_MATCHES: Array<[matcher: string, classes: string]> = [
  ['react', 'border-cyan-200 bg-cyan-50 text-cyan-700'],
  ['typescript', 'border-blue-200 bg-blue-50 text-blue-700'],
  ['ts', 'border-blue-200 bg-blue-50 text-blue-700'],
  ['javascript', 'border-amber-200 bg-amber-50 text-amber-700'],
  ['js', 'border-amber-200 bg-amber-50 text-amber-700'],
  ['node', 'border-emerald-200 bg-emerald-50 text-emerald-700'],
  ['astro', 'border-orange-200 bg-orange-50 text-orange-700'],
  ['tailwind', 'border-sky-200 bg-sky-50 text-sky-700'],
  ['postgres', 'border-indigo-200 bg-indigo-50 text-indigo-700'],
  ['sql', 'border-indigo-200 bg-indigo-50 text-indigo-700'],
  ['go', 'border-teal-200 bg-teal-50 text-teal-700']
];

const DEFAULT_BADGE_CLASS = 'border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]';

const hashString = (value: string) => {
  let hash = 0;
  for (const ch of value) {
    hash = (hash * 31 + ch.charCodeAt(0)) | 0;
  }
  return Math.abs(hash);
};

export const getStackBadgeClass = (stackItem: string) => {
  const normalized = stackItem.trim().toLowerCase();
  if (!normalized) return DEFAULT_BADGE_CLASS;

  for (const [matcher, classes] of CURATED_MATCHES) {
    if (matcher.length <= 2 ? normalized === matcher : normalized.includes(matcher)) {
      return classes;
    }
  }

  const idx = hashString(normalized) % AUTO_PALETTE.length;
  return AUTO_PALETTE[idx];
};
