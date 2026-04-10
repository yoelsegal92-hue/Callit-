import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function NewPrediction() {
  const { userId } = await auth()
  if (!userId) redirect('/')

  return (
    <main style={{ background: '#0e0e0e', minHeight: '100vh', color: '#f0ece4', fontFamily: 'sans-serif', padding: '2rem 4rem' }}>
      <a href="/dashboard" style={{ color: '#7a7570', textDecoration: 'none', fontSize: '0.9rem' }}>← Back</a>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '2rem 0 0.5rem' }}>New prediction</h2>
      <p style={{ color: '#7a7570', marginBottom: '3rem' }}>Write it. Seal it. Prove it.</p>
      <form action="/api/predictions" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '600px' }}>
        <textarea name="content" placeholder="What do you predict will happen?" required style={{ background: '#1e1e1e', border: '1px solid #333', color: '#f0ece4', padding: '1rem', fontSize: '1rem', borderRadius: '2px', minHeight: '150px', resize: 'vertical' }} />
        <input name="reveal_date" type="date" required style={{ background: '#1e1e1e', border: '1px solid #333', color: '#f0ece4', padding: '1rem', fontSize: '1rem', borderRadius: '2px' }} />
        <input name="contacts" type="text" placeholder="Email addresses (comma separated)" style={{ background: '#1e1e1e', border: '1px solid #333', color: '#f0ece4', padding: '1rem', fontSize: '1rem', borderRadius: '2px' }} />
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <input name="is_public" type="checkbox" id="public" />
          <label htmlFor="public" style={{ color: '#7a7570' }}>Make this prediction public</label>
        </div>
        <button type="submit" style={{ background: '#c8441a', color: 'white', border: 'none', padding: '1rem', fontSize: '1rem', borderRadius: '2px', cursor: 'pointer' }}>Seal prediction →</button>
      </form>
    </main>
  )
}
