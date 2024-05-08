import { NextResponse } from "next/server";
import data from './data.json';

export async function GET(req, res) {
    return NextResponse.json(data);
}