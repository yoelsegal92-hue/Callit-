import { auth } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import crypto from 'crypto'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const data = await req.formData()
  const content = data.get('content') as string
  const reveal_date = data.get('reveal_date') as string
  const contacts = data.get('contacts') as string
  const is_public = data.get('is_public') === 'on'
  const hash = crypto.createHash('sha256').update(content + userId + reveal_date).digest('hex')
  const { error } = await supabase.from('predictions').insert({ user_id: userId, content, reveal_date, contacts: contacts ? contacts.split(',').map(e => e.trim()) : [], is_public, hash })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  if (contacts) {
    for (const email of contacts.split(',').map(e => e.trim()).filter(Boolean)) {
      await resend.emails.send({ from: 'onboarding@resend.dev', to: email, subject: 'Someone has a prediction for you', html: '<p>A prediction has been sealed. Check Callit on ' + reveal_date + '</p>' })
    }
  }
  return NextResponse.redirect(new URL('/dashboard', req.url))
}
