import { format, formatDistanceToNow } from "date-fns";

export function fDateN(date: string) {
  return format(new Date(date), "yyyy-MM-dd");
}

export function fDate(date: string) {
  return format(new Date(date), "dd MMMM yyyy");
}

export function fDateTime(date: string) {
  return format(new Date(date), "dd MMM yyyy HH:mm");
}

export function fDateTimeSuffix(date: string) {
  return format(new Date(date), "dd/MM/yyyy p");
}

export function fToNow(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}

export function fYMDate(date: string) {
  return format(new Date(date), "yyyy-MM-dd");
}
