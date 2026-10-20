import { cookies } from 'next/headers'

export async function getAuthToken() {
  const cookieStore = await cookies()

  const token =
    cookieStore.get('__Secure-next-auth.session-token')?.value ||
    cookieStore.get('next-auth.session-token')?.value

  return token
}
