import { NextResponse } from 'next/server';
import { recordAnalyticsEvent } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const { eventType, page, metadata } = payload;

    if (!eventType || !page) {
      return NextResponse.json({ error: 'eventType and page are required.' }, { status: 400 });
    }

    recordAnalyticsEvent({
      eventType,
      page,
      metadata: metadata || {}
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Unable to record analytics event.' }, { status: 500 });
  }
}
