import { NextResponse } from 'next/server';

export function logClick(eventName: string, page: string, label?: string) {
  return { eventName, page, label };
}
