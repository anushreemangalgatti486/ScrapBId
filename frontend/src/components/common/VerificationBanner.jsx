import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldAlert, ArrowRight } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

/**
 * Prompts unverified buyers/sellers inside the dashboard to complete KYC
 * without blocking dashboard navigation after login.
 */
export default function VerificationBanner({ actionText = 'trading' }) {
  const { user } = useAuth()

  if (!user || user.role === 'admin' || user.verificationStatus === 'approved') {
    return null
  }

  const isRejected = user.verificationStatus === 'rejected'

  return (
    <div
      className="card"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '14px 20px',
        marginBottom: 20,
        background: isRejected ? '#FEF2F2' : '#FFFBEB',
        border: `1px solid ${isRejected ? '#FECACA' : '#FDE68A'}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: isRejected ? '#991B1B' : '#92400E', fontSize: '0.9rem' }}>
        <ShieldAlert size={18} style={{ flexShrink: 0 }} />
        <span>
          <strong>{isRejected ? 'Verification Rejected:' : 'Business Verification Required:'}</strong>{' '}
          {isRejected && user.rejectionReason
            ? `${user.rejectionReason} — Please resubmit your documents.`
            : `Complete your business KYC before ${actionText}.`}
        </span>
      </div>
      <Link to="/auth/verify" className="btn btn-primary btn-sm">
        Verify Business <ArrowRight size={14} />
      </Link>
    </div>
  )
}
