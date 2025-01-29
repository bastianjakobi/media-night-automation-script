/* 
@Serializable
data class Event(
    val id: Int,
    val created_at: Instant,
    val title: String,
    val description: String?,
    val startDate: String,
    val endDate: String,
    val tags: List<String>?,
    val type: String,
    val status: String,
    val event_group: Int?,
    val event_subgroup: Int?,
    val data_provider: Int?
)
 */

export enum EventType {
  SPORT = "SPORT",
  NEWS = "NEWS",
}

export enum EventStatus {
  SCHEDULED = "SCHEDULED",
  ONGOING = "ONGOING",
  PAUSED = "PAUSED",
  COMPLETED = "COMPLETED",
  POSTPONED = "POSTPONED",
  CANCELLED = "CANCELLED",
}

export interface Event {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  tags: string[];
  type: EventType;
  status: EventStatus;
  event_group: number;
  event_subgroup: number;
  data_provider: number;
}
