import { sendEmail } from "@/lib/email";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const name = data["name"];
  const email = data["email"];
  const request = data["request"];

  sendEmail(
    "alejajestemmondry@gmail.com",
    "[Holosomatic Bodywork] New request",
    `From: ${name}<br/>Email: ${email}<br/><br/>=== Request ===<br/>${request}`,
  );
  return NextResponse.json({ message: "ok" });
}
