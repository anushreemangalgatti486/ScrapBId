import React, { useState, useEffect } from 'react'
import {
  FileText,
  Zap,
  Users,
  Truck,
  IndianRupee,
  Eye,
  FileCheck,
  Gavel,
  CheckCircle2,
  Recycle,
  ArrowDown,
  ArrowUp,
  Activity
} from 'lucide-react'
import './HowItWorks.css'

const SELLER_STEPS = [
  {
    step: '01',
    title: 'List Scrap',
    desc: 'Add material details & photos',
    icon: <FileText size={22} />,
    stage: 1
  },
  {
    step: '02',
    title: 'Listing Goes Live',
    desc: 'Visible to verified buyers',
    icon: <Zap size={22} />,
    stage: 1
  },
  {
    step: '03',
    title: 'Receive Bids',
    desc: 'Compare competitive bids',
    icon: <Users size={22} />,
    stage: 3
  },
  {
    step: '04',
    title: 'Pickup & Weigh',
    desc: 'Buyer picks up & material is weighed',
    icon: <Truck size={22} />,
    stage: 4
  },
  {
    step: '05',
    title: 'Payment Received',
    desc: 'Get paid securely',
    icon: <IndianRupee size={22} />,
    stage: 5
  }
]

const BUYER_STEPS = [
  {
    step: '01',
    title: 'Browse Scrap',
    desc: 'Explore live listings',
    icon: <Eye size={22} />,
    stage: 2
  },
  {
    step: '02',
    title: 'View Details',
    desc: 'Check photos, quantity & details',
    icon: <FileCheck size={22} />,
    stage: 2
  },
  {
    step: '03',
    title: 'Place Bid',
    desc: 'Bid your best price',
    icon: <Gavel size={22} />,
    stage: 3
  },
  {
    step: '04',
    title: 'Get Selected',
    desc: 'Win the selected listing',
    icon: <CheckCircle2 size={22} />,
    stage: 4
  },
  {
    step: '05',
    title: 'Pickup & Payment',
    desc: 'Complete pickup & payment',
    icon: <Truck size={22} />,
    stage: 5
  }
]

const STAGES = [
  {
    id: 1,
    stageNum: '01',
    badge: 'STAGE 1 • LISTING',
    title: 'List & Publish',
    story: 'Sellers list scrap specs, weight & photos — verified listing goes live instantly.',
    sellerActiveCount: 2,
    buyerActiveCount: 0,
    hubActive: false
  },
  {
    id: 2,
    stageNum: '02',
    badge: 'STAGE 2 • DISCOVERY',
    title: 'Marketplace Broadcast',
    story: 'Listing flows into ScrapBid Marketplace — verified buyers discover material & inspect grade.',
    sellerActiveCount: 2,
    buyerActiveCount: 2,
    hubActive: true
  },
  {
    id: 3,
    stageNum: '03',
    badge: 'STAGE 3 • LIVE BIDDING',
    title: 'Competitive Live Bids',
    story: 'Buyers place competitive bids live on the marketplace — sellers receive offers in real time.',
    sellerActiveCount: 3,
    buyerActiveCount: 3,
    hubActive: true
  },
  {
    id: 4,
    stageNum: '04',
    badge: 'STAGE 4 • SELECTION',
    title: 'Highest Bid Wins',
    story: 'Auction finalizes and winning buyer is selected — digital agreement & pickup schedule coordinated.',
    sellerActiveCount: 4,
    buyerActiveCount: 4,
    hubActive: true
  },
  {
    id: 5,
    stageNum: '05',
    badge: 'STAGE 5 • SETTLEMENT',
    title: 'Weighment & Payout',
    story: 'Material weighed at pickup, weighment confirmed on-site, and payout is released instantly.',
    sellerActiveCount: 5,
    buyerActiveCount: 5,
    hubActive: true
  }
]

export default function HowItWorks({ className = '' }) {
  // Automatic step state: cycles 1 -> 2 -> 3 -> 4 -> 5 continuously without any user interaction
  const [currentStage, setCurrentStage] = useState(1)
  const [stageProgress, setStageProgress] = useState(0)

  // Continuous automatic execution loop (no cursor or user interaction required)
  useEffect(() => {
    // Brisk, energetic pacing (~1.6s per stage for snappy automatic flow)
    const STAGE_DURATION_MS = 1600
    const TICK_INTERVAL_MS = 25
    let elapsed = 0

    const timer = setInterval(() => {
      elapsed += TICK_INTERVAL_MS
      const pct = Math.min((elapsed / STAGE_DURATION_MS) * 100, 100)
      setStageProgress(pct)

      if (elapsed >= STAGE_DURATION_MS) {
        elapsed = 0
        setStageProgress(0)
        setCurrentStage(prev => (prev >= 5 ? 1 : prev + 1))
      }
    }, TICK_INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

  const stageConfig = STAGES.find(s => s.id === currentStage) || STAGES[0]

  // Calculate horizontal wire fill percentages for both tracks
  const sellerWirePct =
    stageConfig.sellerActiveCount > 1
      ? ((stageConfig.sellerActiveCount - 1) / 4) * 100
      : 0
  const buyerWirePct =
    stageConfig.buyerActiveCount > 1
      ? ((stageConfig.buyerActiveCount - 1) / 4) * 100
      : 0

  return (
    <section className={`hiw-section ${className}`}>
      <div className="hiw-bg-grid" aria-hidden="true" />

      {/* Header */}
      <div className="hiw-header-wrap scroll-reveal">
        <div className="hiw-pill-tag">
          <span className="hiw-pill-line" />
          <span>HOW SCRAPBID WORKS</span>
          <span className="hiw-pill-line" />
        </div>
        <h2 className="hiw-main-heading">
          End-to-End Scrap Trading in 5 Automated Steps
        </h2>
        <p className="hiw-desc-text">
          Watch how a transaction moves seamlessly from initial listing to verified weighment and instant payout.
        </p>
      </div>

      {/* ─── AUTOMATIC WORKFLOW RIBBON (Always Auto-Playing, No Cursor Required) ─── */}
      <div className="hiw-auto-ribbon scroll-reveal">
        <div className="hiw-live-badge">
          <span className="hiw-live-ping" />
          <span className="hiw-live-text">AUTOMATIC LIVE FLOW</span>
        </div>

        <div className="hiw-ribbon-steps">
          {STAGES.map(s => {
            const isCurrent = currentStage === s.id
            const isPast = currentStage > s.id
            return (
              <div
                key={s.id}
                className={`hiw-ribbon-item ${isCurrent ? 'item-active' : ''} ${isPast ? 'item-done' : ''}`}
              >
                <div className="ribbon-head">
                  <span className="ribbon-badge-num">{s.stageNum}</span>
                  <span className="ribbon-badge-title">{s.title}</span>
                </div>
                <div className="ribbon-track">
                  <div
                    className="ribbon-track-fill"
                    style={{
                      width: isPast ? '100%' : isCurrent ? `${stageProgress}%` : '0%'
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ─── DYNAMIC STORY EXPLAINER BANNER ─── */}
      <div className="hiw-story-banner scroll-reveal">
        <div className="hiw-story-badge">
          <Activity size={14} className="hiw-pulse-icon" />
          <span>{stageConfig.badge}</span>
        </div>
        <p className="hiw-story-content">{stageConfig.story}</p>
      </div>

      {/* ─── DUAL-TRACK PIPELINE VIEWPORT ─── */}
      <div className="hiw-pipeline-viewport">
        <div className="hiw-pipeline-canvas">

          {/* ────────────────── TOP TRACK: SCRAP SELLER ────────────────── */}
          <div className="hiw-track-row">
            {/* Left Anchor */}
            <div className={`hiw-role-anchor role-seller-anchor ${currentStage <= 2 || currentStage >= 3 ? 'anchor-active' : ''}`}>
              <div className="role-anchor-icon">
                <Users size={18} />
              </div>
              <h4 className="role-anchor-title">SCRAP SELLER</h4>
              <p className="role-anchor-sub">List. Get Bids. Get Paid.</p>
              <div className="role-anchor-badge seller-badge">Seller Track</div>
            </div>

            {/* Steps Sequence */}
            <div className="hiw-steps-sequence">
              {/* Base horizontal wire & continuous animated progress fill */}
              <div className="hiw-horizontal-wire">
                <div
                  className="hiw-wire-fill fill-seller"
                  style={{ width: `${sellerWirePct}%` }}
                />
                {sellerWirePct > 0 && (
                  <div
                    className="hiw-wire-particle particle-seller"
                    style={{ left: `${sellerWirePct}%` }}
                  />
                )}
              </div>

              {SELLER_STEPS.map((stepItem, index) => {
                const stepNum = index + 1
                const isActive = stepNum <= stageConfig.sellerActiveCount
                const isJustActivated = stepNum === stageConfig.sellerActiveCount

                return (
                  <div
                    key={index}
                    className={`hiw-step-unit ${isActive ? 'active' : ''} ${isJustActivated ? 'current-active' : ''}`}
                  >
                    <div className="hiw-num-pill pill-seller">
                      {stepItem.step}
                      {isJustActivated && <span className="pill-pulse-ring" />}
                    </div>
                    <div className="hiw-card-box card-seller">
                      <div className="hiw-icon-carrier">
                        {stepItem.icon}
                      </div>
                      <h5 className="hiw-card-headline">{stepItem.title}</h5>
                      <p className="hiw-card-paragraph">{stepItem.desc}</p>
                      {isActive && (
                        <div className="hiw-card-status-dot dot-seller" />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ────────────────── CENTER MARKETPLACE HUB ────────────────── */}
          <div className={`hiw-center-hub-zone ${stageConfig.hubActive ? 'hub-active' : ''}`}>
            {/* Vertical Flow Conduits */}
            <div className="hiw-vertical-wire-top">
              <span className={`conduit-stream stream-down ${currentStage >= 2 ? 'stream-active' : ''}`} />
            </div>
            <div className="hiw-vertical-wire-bottom">
              <span className={`conduit-stream stream-up ${currentStage >= 3 ? 'stream-active' : ''}`} />
            </div>

            {/* Orbiting Radar Ring */}
            <div className="hiw-orbit-ring">
              <div className="hiw-orbit-dot" />
            </div>

            {/* Float pill above (Seller flow) */}
            <div className={`hiw-hub-float-pill pill-above ${currentStage >= 2 ? 'glow-pill' : ''}`}>
              <ArrowDown size={12} className="float-pill-arrow" />
              <span>Scrap Listed by Sellers</span>
            </div>

            {/* 3D Hub Centerpiece */}
            <div
              className={`hiw-3d-hub-badge ${stageConfig.hubActive ? 'puck-active' : ''}`}
              title="ScrapBid Live Bidding Hub"
            >
              <div className="hub-title-row">
                <span>SCRAP</span>
                <Recycle size={18} className="hub-logo-recycle" />
                <span>BID</span>
              </div>
              <span className="hub-subtitle-label">MARKETPLACE</span>
              {stageConfig.hubActive && (
                <span className="hub-live-indicator">● LIVE HUB</span>
              )}
            </div>

            {/* Float pill below (Buyer flow) */}
            <div className={`hiw-hub-float-pill pill-below ${currentStage >= 3 ? 'glow-pill' : ''}`}>
              <ArrowUp size={12} className="float-pill-arrow" />
              <span>Bids Placed by Verified Buyers</span>
            </div>
          </div>

          {/* ────────────────── BOTTOM TRACK: SCRAP BUYER ────────────────── */}
          <div className="hiw-track-row">
            {/* Left Anchor */}
            <div className={`hiw-role-anchor role-buyer-anchor ${currentStage >= 2 ? 'anchor-active' : ''}`}>
              <div className="role-anchor-icon">
                <Truck size={18} />
              </div>
              <h4 className="role-anchor-title">SCRAP BUYER</h4>
              <p className="role-anchor-sub">Browse. Bid. Buy with Confidence.</p>
              <div className="role-anchor-badge buyer-badge">Buyer Track</div>
            </div>

            {/* Steps Sequence */}
            <div className="hiw-steps-sequence">
              {/* Base horizontal wire & continuous animated progress fill */}
              <div className="hiw-horizontal-wire">
                <div
                  className="hiw-wire-fill fill-buyer"
                  style={{ width: `${buyerWirePct}%` }}
                />
                {buyerWirePct > 0 && (
                  <div
                    className="hiw-wire-particle particle-buyer"
                    style={{ left: `${buyerWirePct}%` }}
                  />
                )}
              </div>

              {BUYER_STEPS.map((stepItem, index) => {
                const stepNum = index + 1
                const isActive = stepNum <= stageConfig.buyerActiveCount
                const isJustActivated = stepNum === stageConfig.buyerActiveCount

                return (
                  <div
                    key={index}
                    className={`hiw-step-unit ${isActive ? 'active' : ''} ${isJustActivated ? 'current-active' : ''}`}
                  >
                    <div className="hiw-num-pill pill-buyer">
                      {stepItem.step}
                      {isJustActivated && <span className="pill-pulse-ring" />}
                    </div>
                    <div className="hiw-card-box card-buyer">
                      <div className="hiw-icon-carrier">
                        {stepItem.icon}
                      </div>
                      <h5 className="hiw-card-headline">{stepItem.title}</h5>
                      <p className="hiw-card-paragraph">{stepItem.desc}</p>
                      {isActive && (
                        <div className="hiw-card-status-dot dot-buyer" />
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>

      {/* Footer Tagline */}
      <div className="hiw-footer-tagline scroll-reveal">
        CONNECTING SCRAP SELLERS &amp; BUYERS FOR A CLEANER TOMORROW
      </div>
    </section>
  )
}
