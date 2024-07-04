import React from 'react';
import { BannerNotificationContainer } from './styles';

interface NotificationBannerProps {
  message: string;
  type: 'success' | 'error';
  visible: boolean;
}

export const NotificationBanner =({ message, type, visible }: NotificationBannerProps) => {
  return (
    <BannerNotificationContainer>
        <div className={`notification-banner ${type} ${visible ? 'visible' : ''}`}>
            {message}
        </div>
    </BannerNotificationContainer>
  );
};
