import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'

dotenv.config() // Load the environment variables

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()
  console.log('Successfully connected to the database')
  // You can add a simple query here if you want to test further
  // For example: const users = await prisma.user.findMany()
  // console.log(users)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())

// Run this command: npx ts-node ./src/testDbConnection.ts