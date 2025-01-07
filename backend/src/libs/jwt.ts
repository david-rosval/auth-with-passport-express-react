import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { SECRET_TOKEN } from '../config'

dotenv.config()

export function generateToken(payload: object): string | null {
  try {
    const token = jwt.sign(payload, SECRET_TOKEN as string, { expiresIn: '1d' })

    return token
  } catch (error) {
    console.error('Error generating token')
    return null
  }
}

export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET_TOKEN as string)
    return decoded
  } catch (error) {
    console.error('Error verifying token:', error)
    
    if (error instanceof jwt.TokenExpiredError) {
      console.error('Token has expired')
    }
    
    if (error instanceof jwt.JsonWebTokenError) {
      console.error('Token not valid')
    }

    return null
  }
}