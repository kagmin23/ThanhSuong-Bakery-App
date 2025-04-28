// src/data/notifications.ts

import { Notification } from "../../types/notifications.types";

// Helper function to create valid dates reliably
const createDate = (year: number, month: number, day: number, hours: number, minutes: number): Date => {
  // Note: JavaScript months are 0-indexed (0 = January, 11 = December)
  return new Date(Date.UTC(year, month - 1, day, hours, minutes));
};

export const notifications: Notification[] = [
  {
    id: '1',
    type: 'urgent',
    message: 'Đơn hàng #12345 đang được giao đến bạn.',
    timestamp: createDate(2025, 4, 28, 9, 30), // April 28, 2025, 9:30 AM
    isRead: false
  },
  {
    id: '2',
    type: 'success',
    message: 'Đơn hàng #12340 đã được giao thành công.',
    timestamp: createDate(2025, 4, 27, 15, 45), // April 27, 2025, 3:45 PM
    isRead: true
  },
  {
    id: '3',
    type: 'info',
    message: 'Khuyến mãi đặc biệt: Giảm 20% cho tất cả các sản phẩm bánh mì.',
    timestamp: createDate(2025, 4, 26, 10, 0), // April 26, 2025, 10:00 AM
    isRead: false
  },
  {
    id: '4',
    type: 'info',
    message: 'Cập nhật ứng dụng mới đã sẵn sàng.',
    timestamp: createDate(2025, 4, 25, 8, 15), // April 25, 2025, 8:15 AM
    isRead: false
  },
  {
    id: '5',
    type: 'default',
    message: 'Chào mừng bạn đến với ứng dụng Bakery Shop!',
    timestamp: createDate(2025, 4, 24, 12, 0), // April 24, 2025, 12:00 PM
    isRead: true
  },
  {
    id: '6',
    type: 'success',
    message: 'Bạn đã nhận được 100 điểm thưởng.',
    timestamp: createDate(2025, 4, 23, 17, 30), // April 23, 2025, 5:30 PM
    isRead: false
  },
  {
    id: '7',
    type: 'urgent',
    message: 'Xác nhận đơn đặt hàng #12350 của bạn.',
    timestamp: createDate(2025, 4, 22, 14, 45), // April 22, 2025, 2:45 PM
    isRead: false
  },
  {
    id: '8',
    type: 'info',
    message: 'Sản phẩm mới: Bánh Croissant Socola đã có sẵn.',
    timestamp: createDate(2025, 4, 21, 11, 20), // April 21, 2025, 11:20 AM
    isRead: true
  },
  {
    id: '9',
    type: 'info',
    message: 'Sản phẩm mới: Bánh Croissant Socola đã có sẵn.',
    timestamp: createDate(2025, 4, 21, 11, 20), // April 21, 2025, 11:20 AM
    isRead: true
  },
  {
    id: '10',
    type: 'info',
    message: 'Sản phẩm mới: Bánh Croissant Socola đã có sẵn.',
    timestamp: createDate(2025, 4, 21, 11, 20), // April 21, 2025, 11:20 AM
    isRead: true
  },
  {
    id: '11',
    type: 'info',
    message: 'Sản phẩm mới: Bánh Croissant Socola đã có sẵn.',
    timestamp: createDate(2025, 4, 21, 11, 20), // April 21, 2025, 11:20 AM
    isRead: true
  }
];