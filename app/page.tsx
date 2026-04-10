import { SignInButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <main style={{ background: '#0e0e0e', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#f0ece4', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '5rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Callit</h1>
      <p style={{ fontSize: '1.2rem', color: '#7a7570', marginBottom: '3rem' }}>You called it. Prove it.</p>
      <SignInButton mode="modal" />
    </main>
  )
}
