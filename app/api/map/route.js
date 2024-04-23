import { NextResponse } from "next/server";
import map from './data.json';

export async function GET(request) {
    return NextResponse.json(map);
}