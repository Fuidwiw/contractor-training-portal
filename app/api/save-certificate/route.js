import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

function sanitizeFileName(value) {
  return value
    .replace(/[^a-zA-Z0-9\s.-]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function POST(request) {
  try {
    const body = await request.json();

    const name = body.name?.trim();
    const email = body.email?.trim();
    const signature = body.signature?.trim();
    const completedDate = body.completedDate?.trim();

    if (!name || !email || !signature || !completedDate) {
      return NextResponse.json(
        { success: false, message: "Missing certificate information." },
        { status: 400 }
      );
    }

    const safeName = sanitizeFileName(name);
    const safeDate = sanitizeFileName(completedDate.replaceAll("/", "-"));

    const certificateDirectory =
      process.env.CERTIFICATE_SAVE_PATH || "/mnt/nas/Driver-Certificates";

    await fs.mkdir(certificateDirectory, { recursive: true });

    const fileName = `${safeName} - ${safeDate}.txt`;
    const filePath = path.join(certificateDirectory, fileName);

    const certificateText = `
Ozark Roadside Contractor Training Certificate

Contractor Name:
${name}

Contractor Email:
${email}

Completion Date:
${completedDate}

Digital Signature:
${signature}

Training Completed:
Ozark Roadside Contractor Training Program

Included Training:
- Lockout procedures
- Tire change procedures
- Fuel delivery procedures
- Jump start procedures
- Customer communication standards
- Claims prevention training

Certification Statement:
By typing their name as a digital signature, the contractor certifies that they personally completed this training, understand Ozark Roadside procedures, and agree to follow all documentation and claims prevention requirements.

Authorized Representative:
Ozark Roadside Training Portal

Automatically issued upon successful quiz completion.
`.trim();

    await fs.writeFile(filePath, certificateText, "utf8");

    return NextResponse.json({
      success: true,
      fileName,
      filePath,
    });
  } catch (error) {
    console.error("Certificate save error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Certificate could not be saved.",
      },
      { status: 500 }
    );
  }
}