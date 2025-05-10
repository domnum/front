export type NotificationField = { field: string; errors: string[] };
export type NotificationKeyMessage = { key: string; message: string };

export function mapNotificationsToMessage(notifications: any[]): string {
  if (!notifications || !Array.isArray(notifications)) return '';
  if (notifications.length > 0 && notifications[0].errors) {
    // Formato: [{ field, errors }]
    return notifications
      .map((n: NotificationField) => `${n.field}: ${n.errors.join(', ')}`)
      .join('\n');
  } else if (notifications.length > 0 && notifications[0].message) {
    // Formato: [{ key, message }]
    return notifications
      .map((n: NotificationKeyMessage) => n.message)
      .join('\n');
  }
  return '';
}
