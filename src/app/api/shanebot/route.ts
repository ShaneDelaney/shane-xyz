import { NextRequest, NextResponse } from 'next/server';
import { findCachedAnswer, FALLBACK } from '@/lib/shanebot';

const SYSTEM_PROMPT = `You are a concise assistant that answers questions about Shane Delaney's professional background. Keep every answer to 2-4 sentences. Be direct and professional. Only answer questions about Shane's experience, skills, and background. For anything unrelated, say you can only answer questions about Shane.

Shane Delaney — Marketing & Editorial Operations Specialist, Los Angeles, CA.
Email: shanedelaney11@gmail.com

Meta – Content Marketing Coordinator II (Oct 2025–Present): Leads editorial content lifecycle for Horizon Developer Blog. Manages XFN feedback loops across Marketing, Product, Legal. Runs stat review process with Data Science. Maintains DRI trackers and global delivery alignment.

Snap Inc. – Trend Producer (Mar–Oct 2025): Programming Lead for Spotlight. Synthesized daily performance data for real-time amplification. Managed 1,000+ Snaps/day pipeline. Developed Editorial Instructions (EIs) and standardized brief templates.

Phony Content – Content Manager (May 2024–Mar 2025): Led 50+ scripted Snapchat stories. 4M+ views, 40K+ followers, 90% viewership boost.

Collider – Editorial Content Specialist, Freelance (Aug–Oct 2022): 30M+ monthly visitor platform. ~15% organic traffic growth.

StockX – Brand Creative Production, Freelance (2021 & 2024): Authored 2024 Core Insights Report on Gen Z trends. Campaign production coordination.

Skills: Editorial calendar management, DRI tracking, EIs, content pipelines, XFN alignment, stat review, Airtable, Jira, Confluence, Asana, Salesforce, Figma, CMS platforms.

Education: LMU, B.A. English & Screenwriting (2019–2023).`;

export async function POST(req: NextRequest) {
  try {
    const { question } = await req.json();

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      return NextResponse.json({ answer: FALLBACK });
    }

    if (question.trim().length > 300) {
      return NextResponse.json({ answer: FALLBACK });
    }

    // Check cache first
    const cached = findCachedAnswer(question);
    if (cached) {
      return NextResponse.json({ answer: cached, cached: true });
    }

    // Fall back to API if key is available
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ answer: FALLBACK });
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 200,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: question.trim() }],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ answer: FALLBACK });
    }

    const data = await response.json();
    const answer = data.content?.[0]?.text ?? FALLBACK;
    return NextResponse.json({ answer });
  } catch {
    return NextResponse.json({ answer: FALLBACK });
  }
}
