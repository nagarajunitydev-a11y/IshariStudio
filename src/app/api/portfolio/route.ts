import { NextResponse } from "next/server";
import { getAllPortfolioItems } from "@/lib/portfolio";

export async function GET() {
  const items = getAllPortfolioItems();
  return NextResponse.json(items);
}
