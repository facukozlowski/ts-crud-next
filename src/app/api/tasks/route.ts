import { NextResponse } from "next/server"
import { prisma } from "@/libs/prisma"

export const GET = async () => {
    const tasks = await prisma.task.findMany()
    return NextResponse.json(tasks)
}

export const POST = async(request: Request) => {
    const data = await request.json()
    const newTask = await prisma.task.create({data})
    return NextResponse.json(newTask)
}