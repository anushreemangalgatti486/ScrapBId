import React from 'react'
import {
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  FileText,
  BarChart3,
  Globe,
  User,
  Shield,
  Check,
  Download
} from 'lucide-react'
import './BuiltForTrust.css'

export default function BuiltForTrust() {
  return (
    <section className="bft-section section-pad">
      <div className="container">
        {/* Header with pill badge, title and subtitle */}
        <div className="bft-header scroll-reveal">
          <div className="bft-badge">
            <ShieldCheck size={16} className="bft-badge-icon" />
            <span>BUILT FOR TRUST</span>
          </div>
          <h2 className="bft-title">We Handle Verification, Payments &amp; Paperwork</h2>
          <p className="bft-subtitle">So both buyers and sellers can focus entirely on the deal.</p>
        </div>

        {/* 3x2 Grid */}
        <div className="bft-grid">
          {/* ────────────────── CARD 1: Real-Time Bidding ────────────────── */}
          <div className="bft-card scroll-reveal" style={{ animationDelay: '0.05s' }}>
            <div className="bft-visual visual-bidding">
              <div className="bft-live-indicator">
                <span className="bft-live-dot" />
                <span>LIVE</span>
              </div>

              {/* Glowing animated wave graph */}
              <div className="bidding-chart-container">
                <svg className="bidding-wave-svg" viewBox="0 0 340 110" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="bftWaveGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                    </linearGradient>
                    <filter id="bftGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#10b981" floodOpacity="0.5" />
                    </filter>
                  </defs>

                  {/* Secondary subtle wave */}
                  <path
                    d="M 0,72 C 35,88 65,30 110,65 C 160,100 195,35 240,55 C 285,75 315,30 340,42"
                    fill="none"
                    stroke="rgba(16, 185, 129, 0.22)"
                    strokeWidth="2"
                  />

                  {/* Shaded area */}
                  <path
                    d="M 0,65 C 40,82 75,25 125,58 C 175,92 205,18 250,38 C 295,58 320,15 340,28 L 340,110 L 0,110 Z"
                    fill="url(#bftWaveGrad)"
                  />

                  {/* Main glowing wave */}
                  <path
                    d="M 0,65 C 40,82 75,25 125,58 C 175,92 205,18 250,38 C 295,58 320,15 340,28"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    filter="url(#bftGlow)"
                  />

                  {/* Glowing peak dot */}
                  <circle cx="250" cy="38" r="4.5" fill="#10b981" />
                  <circle cx="250" cy="38" r="8" fill="none" stroke="#10b981" strokeWidth="1.5" className="bft-pulse-ring" />
                </svg>
              </div>

              {/* Floating Bidding Badges */}
              <div className="bft-chip chip-bid-1">
                <span className="bft-chip-sub">Live bidding</span>
                <div className="bft-chip-val-row">
                  <span className="bft-chip-price">₹48,500</span>
                  <span className="bft-chip-tag live-tag">LIVE</span>
                  <span className="bft-chip-pct">+3%</span>
                </div>
              </div>

              <div className="bft-chip chip-bid-2">
                <span className="bft-chip-sub">Active bids</span>
                <span className="bft-chip-price">₹48,500</span>
              </div>

              <div className="bft-chip chip-bid-3">
                <span className="bft-chip-sub">Live bidding</span>
                <div className="bft-chip-val-row">
                  <span className="bft-chip-price">₹46,500</span>
                  <span className="bft-chip-pct">+3%</span>
                </div>
              </div>
            </div>

            <div className="bft-content">
              <div className="bft-icon-box">
                <TrendingUp size={20} />
              </div>
              <h3 className="bft-card-title">Real-Time Bidding</h3>
              <p className="bft-card-desc">
                Transparent, live bids so the true market price surfaces every day — not last week's rate card.
              </p>
            </div>
          </div>

          {/* ────────────────── CARD 2: Secure Payments ────────────────── */}
          <div className="bft-card scroll-reveal" style={{ animationDelay: '0.1s' }}>
            <div className="bft-visual visual-payments">
              <div className="payments-layout">
                {/* Flow Diagram */}
                <div className="escrow-flow-block">
                  <div className="escrow-track">
                    <div className="escrow-entity">
                      <div className="escrow-avatar-ring">
                        <User size={15} />
                      </div>
                      <span className="escrow-name">Buyer</span>
                    </div>

                    <div className="escrow-connector">
                      <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                        <path d="M0 6H18M18 6L13 1M18 6L13 11" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="escrow-shield-badge">
                      <div className="escrow-shield-icon">
                        <ShieldCheck size={18} />
                      </div>
                      <span className="escrow-shield-text">Secure Shield Lock</span>
                    </div>

                    <div className="escrow-connector">
                      <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
                        <path d="M0 6H18M18 6L13 1M18 6L13 11" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="escrow-entity">
                      <div className="escrow-avatar-ring">
                        <User size={15} />
                      </div>
                      <span className="escrow-name">Seller</span>
                    </div>
                  </div>

                  {/* Status Indicator */}
                  <div className="escrow-status-pill">
                    <div className="status-bars">
                      <span /><span /><span /><span />
                    </div>
                    <span className="status-label">FUNDED &amp; SECURED</span>
                    <div className="status-bars">
                      <span /><span /><span /><span />
                    </div>
                  </div>
                </div>

                {/* 3D Metallic Vault Box */}
                <div className="vault-showcase">
                  <div className="vault-cube">
                    <div className="vault-face">
                      <div className="vault-rivet v-tl" />
                      <div className="vault-rivet v-tr" />
                      <div className="vault-rivet v-bl" />
                      <div className="vault-rivet v-br" />
                      <div className="vault-dial">
                        <div className="vault-dial-ring" />
                        <div className="vault-shield-emblem">
                          <Shield size={16} />
                        </div>
                      </div>
                      <div className="vault-latch" />
                    </div>
                  </div>
                  <div className="vault-drop-shadow" />
                </div>
              </div>
            </div>

            <div className="bft-content">
              <div className="bft-icon-box">
                <ShieldCheck size={20} />
              </div>
              <h3 className="bft-card-title">Secure Payments</h3>
              <p className="bft-card-desc">
                Money is held safely and released only when both sides confirm pickup and weighment.
              </p>
            </div>
          </div>

          {/* ────────────────── CARD 3: Verified Businesses ────────────────── */}
          <div className="bft-card scroll-reveal" style={{ animationDelay: '0.15s' }}>
            <div className="bft-visual visual-kyc">
              <div className="kyc-stage">
                {/* ID Badge Card */}
                <div className="kyc-card">
                  <div className="kyc-photo-box">
                    <div className="kyc-avatar">
                      <User size={28} />
                    </div>
                  </div>
                  <div className="kyc-data-lines">
                    <div className="kyc-line line-main" />
                    <div className="kyc-line line-secondary" />
                    <div className="kyc-line line-tert" />
                    <div className="kyc-signature">
                      <svg width="68" height="16" viewBox="0 0 68 16" fill="none">
                        <path d="M2 12C9 6 15 14 22 9C29 4 34 13 42 7C49 2 54 12 66 6" stroke="#64748b" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Green curved flow arrow */}
                <div className="kyc-flow-arrow">
                  <svg width="40" height="36" viewBox="0 0 40 36" fill="none">
                    <path d="M6 4 Q 6 28 28 28" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    <path d="M23 23 L29 28 L23 33" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>

                {/* Floating "Business KYC Approved" Ribbon */}
                <div className="kyc-approved-pill">
                  <span>Business KYC Approved</span>
                  <div className="kyc-badge-seal">
                    <Check size={16} strokeWidth={3} />
                  </div>
                </div>

                {/* Mini Verified Document Chip */}
                <div className="kyc-cert-chip">
                  <FileText size={18} className="kyc-cert-icon" />
                  <span className="kyc-cert-check">
                    <Check size={9} strokeWidth={3} />
                  </span>
                </div>
              </div>
            </div>

            <div className="bft-content">
              <div className="bft-icon-box">
                <CheckCircle2 size={20} />
              </div>
              <h3 className="bft-card-title">Verified Businesses</h3>
              <p className="bft-card-desc">
                KYC and business document checks for every seller and buyer before they go live on the platform.
              </p>
            </div>
          </div>

          {/* ────────────────── CARD 4: Digital Invoicing ────────────────── */}
          <div className="bft-card scroll-reveal" style={{ animationDelay: '0.2s' }}>
            <div className="bft-visual visual-invoicing">
              <div className="invoice-scene">
                {/* Angled Invoice Paper */}
                <div className="invoice-sheet">
                  <div className="inv-top">
                    <span className="inv-title">Invoice</span>
                    <span className="inv-dot-status" />
                  </div>
                  <div className="inv-rows">
                    <div className="inv-row r1" />
                    <div className="inv-row r2" />
                    <div className="inv-row r3" />
                  </div>
                  <div className="inv-summary-bar">
                    <div className="inv-sum-line" />
                    <div className="inv-sum-box" />
                  </div>
                </div>

                {/* 3D Physical Rubber Stamp pressing down */}
                <div className="stamp-assembly">
                  <div className="stamp-knob" />
                  <div className="stamp-neck" />
                  <div className="stamp-plate" />
                  <div className="stamp-shadow" />
                </div>

                {/* Official Verified Ink Stamp Impression */}
                <div className="stamp-mark">
                  <div className="stamp-mark-outer">
                    <div className="stamp-mark-inner">
                      <span>VERIFIED</span>
                    </div>
                  </div>
                </div>

                {/* Download Document Pill */}
                <div className="inv-download-badge">
                  <Download size={14} className="inv-download-icon" />
                  <span className="inv-download-text">Generated Document</span>
                </div>

                {/* Mini auxiliary pills below */}
                <div className="inv-meta-pill p1" />
                <div className="inv-meta-pill p2" />
              </div>
            </div>

            <div className="bft-content">
              <div className="bft-icon-box">
                <FileText size={20} />
              </div>
              <h3 className="bft-card-title">Digital Invoicing</h3>
              <p className="bft-card-desc">
                Auto-generated invoices and complete transaction records accessible anytime.
              </p>
            </div>
          </div>

          {/* ────────────────── CARD 5: Analytics & Reports ────────────────── */}
          <div className="bft-card scroll-reveal" style={{ animationDelay: '0.25s' }}>
            <div className="bft-visual visual-analytics">
              {/* Dark Glassmorphism Dashboard Card */}
              <div className="mini-dash-window">
                <div className="mini-dash-header">
                  <div className="dash-controls">
                    <span className="dash-dot d-red" />
                    <span className="dash-dot d-yellow" />
                    <span className="dash-dot d-green" />
                  </div>
                  <span className="dash-title">Dashboard</span>
                  <div className="dash-status-dot" />
                </div>

                <div className="mini-dash-content">
                  {/* Left Column: Bar Charts & Donut */}
                  <div className="dash-col-left">
                    <div className="dash-bars-grid">
                      <div className="bar-track"><div className="bar-val b1" style={{ height: '42%' }} /></div>
                      <div className="bar-track"><div className="bar-val b2" style={{ height: '68%' }} /></div>
                      <div className="bar-track"><div className="bar-val b3" style={{ height: '94%' }} /></div>
                      <div className="bar-track"><div className="bar-val b4" style={{ height: '52%' }} /></div>
                      <div className="bar-track"><div className="bar-val b5 highlight" style={{ height: '100%' }} /></div>
                      <div className="bar-track"><div className="bar-val b6" style={{ height: '78%' }} /></div>
                    </div>
                    <div className="dash-donut-row">
                      <div className="dash-donut-chart">
                        <svg width="26" height="26" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="4" />
                          <circle
                            cx="18" cy="18" r="14"
                            fill="none"
                            stroke="#10b981"
                            strokeWidth="4"
                            strokeDasharray="72 100"
                            strokeDashoffset="25"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="dash-donut-label">90.28</span>
                    </div>
                  </div>

                  {/* Right Column: Floating Wave & Activity */}
                  <div className="dash-col-right">
                    <div className="dash-mini-card">
                      <svg viewBox="0 0 100 42" className="dash-area-chart">
                        <defs>
                          <linearGradient id="dashAreaGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.45" />
                            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,32 Q25,12 50,24 T82,8 T100,18 L100,42 L0,42 Z" fill="url(#dashAreaGrad)" />
                        <path d="M0,32 Q25,12 50,24 T82,8 T100,18" fill="none" stroke="#06b6d4" strokeWidth="2.2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="dash-activity-strip">
                      <div className="dash-act-row">
                        <span className="act-bullet green" />
                        <span className="act-line" />
                      </div>
                      <div className="dash-act-row">
                        <span className="act-bullet cyan" />
                        <span className="act-line short" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bft-content">
              <div className="bft-icon-box">
                <BarChart3 size={20} />
              </div>
              <h3 className="bft-card-title">Analytics &amp; Reports</h3>
              <p className="bft-card-desc">
                Track your trading activity, revenue, and material demand with detailed dashboards.
              </p>
            </div>
          </div>

          {/* ────────────────── CARD 6: Pan-India Network ────────────────── */}
          <div className="bft-card scroll-reveal" style={{ animationDelay: '0.3s' }}>
            <div className="bft-visual visual-network">
              <div className="india-network-stage">
                {/* Concentric Radar Rings emanating from Central India */}
                <div className="radar-emitter">
                  <div className="radar-ring r-one" />
                  <div className="radar-ring r-two" />
                  <div className="radar-ring r-three" />
                  <div className="radar-pulse-center" />
                </div>

                {/* Stylized geometric India map silhouette + mesh */}
                <svg className="india-mesh-svg" viewBox="0 0 210 230" fill="none">
                  {/* Subtle map outline */}
                  <path
                    d="M 95,12 L 118,25 L 132,32 L 140,50 L 126,62 L 136,75 L 158,82 L 182,88 L 198,96 L 180,110 L 158,110 L 138,118 L 146,136 L 148,156 L 134,180 L 116,206 L 100,222 L 94,214 L 80,192 L 70,168 L 62,148 L 44,136 L 26,126 L 20,110 L 34,96 L 46,90 L 58,94 L 74,78 L 80,56 L 76,40 L 86,22 Z"
                    className="india-contour"
                  />

                  {/* Connected Mesh Lines */}
                  <line x1="88" y1="52" x2="62" y2="102" className="india-link" />
                  <line x1="88" y1="52" x2="142" y2="114" className="india-link" />
                  <line x1="62" y1="102" x2="72" y2="146" className="india-link" />
                  <line x1="72" y1="146" x2="102" y2="182" className="india-link" />
                  <line x1="102" y1="182" x2="126" y2="174" className="india-link" />
                  <line x1="126" y1="174" x2="142" y2="114" className="india-link" />
                  <line x1="72" y1="146" x2="126" y2="174" className="india-link" />
                  <line x1="62" y1="102" x2="108" y2="134" className="india-link" />
                  <line x1="108" y1="134" x2="102" y2="182" className="india-link" />
                  <line x1="108" y1="134" x2="142" y2="114" className="india-link" />

                  {/* Network Nodes */}
                  <circle cx="88" cy="52" r="4" className="india-node hub" />
                  <circle cx="52" cy="96" r="3.5" className="india-node" />
                  <circle cx="62" cy="136" r="4" className="india-node hub" />
                  <circle cx="98" cy="178" r="4" className="india-node hub" />
                  <circle cx="120" cy="186" r="3.5" className="india-node" />
                  <circle cx="146" cy="114" r="4" className="india-node" />
                  <circle cx="106" cy="138" r="3.5" className="india-node center-hub" />
                </svg>

                {/* Floating telemetry pills */}
                <div className="network-pill network-trend-pill">
                  <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                    <path d="M1 9L8 6L16 8L31 2" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="network-pill network-dots-pill">
                  <span className="net-dot g" />
                  <span className="net-dot b" />
                  <span className="net-dot a" />
                </div>
              </div>
            </div>

            <div className="bft-content">
              <div className="bft-icon-box">
                <Globe size={20} />
              </div>
              <h3 className="bft-card-title">Pan-India Network</h3>
              <p className="bft-card-desc">
                Buyers and sellers across all major industrial states — growing every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
