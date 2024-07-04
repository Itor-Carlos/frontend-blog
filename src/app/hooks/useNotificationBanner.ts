import { useState, useEffect, useCallback } from 'react';

export const useNotificationBanner = ({ duration = 3000 }: { duration?: number }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error'>('success');

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration]);

  const showNotification = useCallback((message: string, type: 'success' | 'error') => {
    setMessage(message);
    setType(type);
    setVisible(true);
  }, []);

  return {
    visible,
    message,
    type,
    showNotification,
  };
};

