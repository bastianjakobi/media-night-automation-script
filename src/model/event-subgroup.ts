import { EventStatus } from "./event";

export interface EventSubgroup {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  tags: string[];
  status: EventStatus;
  event_group: number;
}
