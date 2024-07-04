import styled from "styled-components";

export const BannerNotificationContainer = styled.div`
    .notification-banner {
        position: fixed;
        top: 16px;
        right: 16px;
        width: 300px;
        padding: 16px;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
  }
  
  .notification-banner.visible {
    opacity: 1;
  }
  
  .notification-banner.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  .notification-banner.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
  
`