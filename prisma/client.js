import { PrismaClient } from "@prisma/client";


const client = globalThis.prisma || new PrismaClient()
if(process.env.NODE_END !== "production") globalThis.prisma = client


export default client