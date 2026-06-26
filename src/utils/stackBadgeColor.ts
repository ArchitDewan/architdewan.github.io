const AUTO_PALETTE = [
  'border-cyan-400/40 bg-cyan-400/10 text-cyan-200',
  'border-blue-400/40 bg-blue-400/10 text-blue-200',
  'border-amber-400/40 bg-amber-400/10 text-amber-200',
  'border-green-400/40 bg-green-400/10 text-green-200',
  'border-orange-400/40 bg-orange-400/10 text-orange-200',
  'border-sky-400/40 bg-sky-400/10 text-sky-200',
  'border-indigo-400/40 bg-indigo-400/10 text-indigo-200',
  'border-teal-400/40 bg-teal-400/10 text-teal-200',
  'border-pink-400/40 bg-pink-400/10 text-pink-200',
  'border-lime-400/40 bg-lime-400/10 text-lime-200'
] as const;

const CURATED_MATCHES: Array<[matcher: string, classes: string]> = [
  ['react', 'border-cyan-400/40 bg-cyan-400/10 text-cyan-200'],
  ['typescript', 'border-blue-400/40 bg-blue-400/10 text-blue-200'],
  ['ts', 'border-blue-400/40 bg-blue-400/10 text-blue-200'],
  ['javascript', 'border-amber-400/40 bg-amber-400/10 text-amber-200'],
  ['js', 'border-amber-400/40 bg-amber-400/10 text-amber-200'],
  ['node', 'border-green-400/40 bg-green-400/10 text-green-200'],
  ['astro', 'border-orange-400/40 bg-orange-400/10 text-orange-200'],
  ['tailwind', 'border-sky-400/40 bg-sky-400/10 text-sky-200'],
  ['postgres', 'border-indigo-400/40 bg-indigo-400/10 text-indigo-200'],
  ['sql', 'border-indigo-400/40 bg-indigo-400/10 text-indigo-200'],
  ['go', 'border-teal-400/40 bg-teal-400/10 text-teal-200']
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
