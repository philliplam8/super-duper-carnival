import { NextResponse } from "next/server";
import axios from "axios";

const URL = "http://localhost:5137/tasks";

export async function GET() {
  try {
    const res = await axios.get(URL);
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ error: `Server error: ${error}` });
  }
}

export async function POST(request: Request) {
  try {
    const task = await request.json();
    const res = await axios.post(URL, task, {
      headers: { "Content-Type": "application/json" },
    });
    return NextResponse.json(res.data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: `Server error: ${error}` });
  }
}
