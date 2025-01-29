import { EventStatus } from "../model/event";
import { EventStatusChange } from "../model/event-status-change";

export const mockEventStatusChanges: EventStatusChange[] = [
  {
    event: 1,
    previousStatus: EventStatus.SCHEDULED,
    newStatus: EventStatus.ONGOING,
  },
  {
    event: 2,
    newStatus: EventStatus.SCHEDULED,
  },
  {
    event: 3,
    previousStatus: EventStatus.ONGOING,
    newStatus: EventStatus.COMPLETED,
  },
  {
    event: 4,
    previousStatus: EventStatus.ONGOING,
    newStatus: EventStatus.COMPLETED,
  },
  {
    event: 5,
    previousStatus: EventStatus.ONGOING,
    newStatus: EventStatus.COMPLETED,
  },
  {
    event: 6,
    previousStatus: EventStatus.ONGOING,
    newStatus: EventStatus.COMPLETED,
  },
];
