import { cookies } from "next/headers";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { Properties } from "@/app/interfaces";

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });

  const { data } = await supabase
    .from("properties")
    .select()
    .returns<Properties>();

  return NextResponse.json({ data });
}
