import React from 'react';
import shieldAsset from '../assets/shield.svg';
import gridAsset from '../assets/grid.svg';
import listAsset from '../assets/list.svg';
import bellAsset from '../assets/bell.svg';
import plusAsset from '../assets/plus.svg';
import xMarkAsset from '../assets/x-mark.svg';
import chevronDownAsset from '../assets/chevron-down.svg';
import spinnerAsset from '../assets/spinner.svg';
import flagAsset from '../assets/flag.svg';
import exclamationAsset from '../assets/exclamation.svg';

interface IconProps {
  className?: string;
  alt?: string;
}

// ── Standardized Structural Dimension Mapping ──
export const ShieldIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', alt = 'Shield' }) => (
  <img src={shieldAsset} className={`inline-block select-none ${className}`} alt={alt} />
);

export const GridIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', alt = 'Grid' }) => (
  <img src={gridAsset} className={`inline-block select-none ${className}`} alt={alt} />
);

export const ListIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', alt = 'List' }) => (
  <img src={listAsset} className={`inline-block select-none ${className}`} alt={alt} />
);

export const BellIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', alt = 'Notification' }) => (
  <img src={bellAsset} className={`inline-block select-none ${className}`} alt={alt} />
);

export const PlusIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', alt = 'Add' }) => (
  <img src={plusAsset} className={`inline-block select-none ${className}`} alt={alt} />
);

export const XMarkIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', alt = 'Close' }) => (
  <img src={xMarkAsset} className={`inline-block select-none ${className}`} alt={alt} />
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = 'w-2.5 h-2.5', alt = 'Dropdown' }) => (
  <img src={chevronDownAsset} className={`inline-block select-none ${className}`} alt={alt} />
);

export const SpinnerIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', alt = 'Loading' }) => (
  <img src={spinnerAsset} className={`inline-block animate-spin select-none ${className}`} alt={alt} />
);

export const FlagIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', alt = 'Flag' }) => (
  <img src={flagAsset} className={`inline-block select-none ${className}`} alt={alt} />
);

export const ExclamationIcon: React.FC<IconProps> = ({ className = 'w-3.5 h-3.5', alt = 'Alert' }) => (
  <img src={exclamationAsset} className={`inline-block select-none ${className}`} alt={alt} />
);