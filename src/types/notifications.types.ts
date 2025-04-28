export type NotificationType = "urgent" | "info" | "success" | "default";

export interface Notification {
  id: string;
  type: NotificationType; // Loại thông báo để xác định kiểu hiển thị
  message: string; // Nội dung thông báo
  timestamp: Date; // Thời gian của thông báo
  isRead: boolean; // Trạng thái đã đọc hay chưa
}

// Interface cho danh sách thông báo và các hàm xử lý
export interface NotificationsProps {
  notifications: Notification[];
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  deleteNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

export interface HeaderSectionProps {
  name: string;
  avatarUrl: string;
  notifications: Notification[]; // Sử dụng interface Notification
  onNotificationPress: () => void;
  onNotificationRead: (id: string) => void;
  onMarkAllAsRead: () => void;
  showAllNotifications: boolean;
  toggleShowAllNotifications: () => void;
}
