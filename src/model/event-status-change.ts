import { EventStatus } from "./event";

export interface EventStatusChange {
  previousStatus?: EventStatus;
  newStatus: EventStatus;
  event: number;
}
