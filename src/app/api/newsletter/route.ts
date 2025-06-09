import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";

async function verifyRecaptcha(token: string) {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: "POST",
    }
  );

  const data = await response.json();
  return data.success && data.score >= 0.5;
}

export async function POST(request: Request) {
  try {
    const { email, token } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!token) {
      return NextResponse.json(
        { error: "reCAPTCHA token is required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token
    const isValid = await verifyRecaptcha(token);
    if (!isValid) {
      return NextResponse.json(
        { error: "reCAPTCHA verification failed" },
        { status: 400 }
      );
    }

    // Store the email in KV with a timestamp
    await kv.hset("newsletter_subscribers", {
      [email]: {
        subscribedAt: new Date().toISOString(),
      },
    });

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter" },
      { status: 500 }
    );
  }
}
