import { NextResponse } from "next/server";
import axios from "axios";

const URL = "http://localhost:5137/tasks";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    const res = await axios.put(`${URL}/${id}`, body, {
      headers: { "Content-Type": "application/json" },
    });
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ error: `Server error: ${error}` });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();
    const res = await axios.patch(`${URL}/${id}`, body, {
      headers: { "Content-Type": "application/json" },
    });
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ error: `Server error: ${error}` });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const res = await axios.delete(`${URL}/${id}`);
    return NextResponse.json(res.data);
  } catch (error) {
    return NextResponse.json({ error: `Server error: ${error}` });
  }
}
