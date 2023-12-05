import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

interface Params{
    params: {id: string}
}

export const GET = async (request: Request, {params}: Params) => {
    const task = await prisma.task.findFirst({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(task)
}

export const PUT = async (request: Request, {params}: Params) => {
    const data = await request.json()
    const updateTask = await prisma.task.update({
        where: {
            id: Number(params.id)
        },
        data:data
    })
    return NextResponse.json(updateTask)
}

export const DELETE = async (request: Request, {params}: Params) => {
    const deleteTask = await prisma.task.delete({
        where: {
            id: Number(params.id)
        }
    })
    return NextResponse.json(deleteTask)
}