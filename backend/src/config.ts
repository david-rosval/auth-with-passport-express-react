import dotenv from 'dotenv'

dotenv.config()

export const {
  DATABASE_URL,
  SECRET_TOKEN,
} = process.env