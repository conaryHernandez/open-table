'use client';

import { useFormStatus } from 'react-dom';

export default function MealsForm() {
  const { pending } = useFormStatus();

  return (
    <button type='submit' disabled={pending}>
      {pending ? 'Sharing Meal...' : 'Share Meal'}
    </button>
  );
}
