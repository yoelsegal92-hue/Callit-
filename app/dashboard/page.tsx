import { UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

export default async function Dashboard() {
  const user = await currentUser()
  return (
    <main style={{ background: '#0e0e0e', minHeight: '100vh', color: '#f0ece4', fontFamily: 'sans-serif', padding: '2rem 4rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '1.8rem', fontWeight: 900 }}>Callit</h1>
        <UserButton />
      </div>
      <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>Hey, {user?.firstName || 'there'} 👋</h2>
      <p style={{ color: '#7a7570', marginBottom: '3rem' }}>Your predictions, on the record.</p>
      <button style={{ background: '#c8441a', color: 'white', border: 'none', padding: '1rem 2rem', fontSize: '1rem', borderRadius: '2px', cursor: 'pointer' }}>+ New prediction</button>
    </main>
  )
}
