/* global React */
/* eslint-disable no-unused-vars */
// Atomic primitives shared across all sections of the marketer portfolio.
// Loaded via <script type="text/babel" src="components.jsx"> in index.html.

const { useState, useEffect, useRef } = React;

// =====================================================================
// ICONS — tiny inline SVGs (Lucide-derived, 1.75 stroke, currentColor)
// =====================================================================
const Icon = ({ name, size = 16, strokeWidth = 1.75, style }) => {
  const paths = {
    'arrow-up-right': <path d="M7 17 17 7M9 7h8v8" />,
    'arrow-up':       <path d="M12 19V5M5 12l7-7 7 7" />,
    'arrow-left':     <path d="M15 6l-6 6 6 6" />,
    'arrow-right':    <path d="M9 6l6 6-6 6" />,
    'menu':           <path d="M3 6h18M3 12h18M3 18h18" />,
    'x':              <path d="M18 6L6 18M6 6l12 12" />,
    'download':       <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />,
    'quote':          <path d="M3 21c3 0 6-2 6-8V5H3v8h3c0 3-1 5-3 5zm12 0c3 0 6-2 6-8V5h-6v8h3c0 3-1 5-3 5z" strokeLinejoin="round" />,
    'facebook':       <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />,
    'linkedin':       <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>,
    'instagram':      <><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" strokeLinejoin="round" /></>,
    'twitter':        <path d="M4 4l7.5 10L4.5 20H7l6-6 4.5 6H21l-7.7-10.4L20 4h-2.5l-5.4 5.5L8 4z" strokeLinejoin="round" fill="currentColor" stroke="none" />,
    'mail':           <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 7 9-7" /></>,
    'calendar':       <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 11h18" /></>,
  };
  return (
    <svg
      width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={strokeWidth}
      strokeLinecap="round" strokeLinejoin="round" style={style}
    >{paths[name]}</svg>
  );
};

// =====================================================================
// BUTTONS
// =====================================================================
const Button = ({ variant = 'primary', size = 'md', icon, children, as = 'button', ...rest }) => {
  const Tag = as;
  const classes = `btn btn--${variant}${size !== 'md' ? ' btn--' + size : ''}`;
  return (
    <Tag className={classes} {...rest}>
      {children}
      {icon && <Icon name={icon} size={size === 'sm' ? 14 : 16} />}
    </Tag>
  );
};

// Pill button: text + circular icon end-cap.
const PillButton = ({ variant = 'dark', children, icon = 'arrow-up-right', as = 'a', href = '#', ...rest }) => {
  const Tag = as;
  const cls = variant === 'dark' ? 'btn btn--pill' : 'btn btn--pill-ghost';
  return (
    <Tag className={cls} href={Tag === 'a' ? href : undefined} {...rest}>
      {children}
      <span className="btn__icon"><Icon name={icon} size={14} /></span>
    </Tag>
  );
};

// Bare icon circle (e.g. carousel arrows, back-to-top).
const IconCircle = ({ icon, variant = 'cream', size = 36, ...rest }) => {
  const style = { width: size, height: size };
  const cls = variant === 'cream' ? 'icon-circle icon-circle--cream' : 'icon-circle icon-circle--dark';
  return <button className={cls} style={style} {...rest}><Icon name={icon} size={size * 0.4} /></button>;
};

// =====================================================================
// SECTION OPENER
// =====================================================================
const Eyebrow = ({ children, dark = false }) => (
  <div className="eyebrow" style={{ color: dark ? 'var(--cream-60)' : 'var(--muted)', marginBottom: 24 }}>{children}</div>
);

const SectionHeading = ({ children, size = 'lg', as: As = 'h2', style }) => {
  const cls = size === 'xl' ? 'h-display' : size === 'lg' ? 'h-section' : 'h-sub';
  return <As className={cls} style={style}>{children}</As>;
};

// =====================================================================
// CARD
// =====================================================================
const Card = ({ children, dark = false, compact = false, style, ...rest }) => {
  const cls = `card${dark ? ' card--dark' : ''}${compact ? ' card--compact' : ''}`;
  return <div className={cls} style={style} {...rest}>{children}</div>;
};

// Export to window so other JSX files can use them.
Object.assign(window, { Icon, Button, PillButton, IconCircle, Eyebrow, SectionHeading, Card });
