'use client';

import { copyTextToClipboard } from './bond';

interface CopyButtonProps {
  text: string;
}

export default function CopyButton({ text }: CopyButtonProps) {
  return (
    <button
      type="button"
      onClick={(e) => copyTextToClipboard(e.currentTarget)}
    >
      {text}
    </button>
  );
}