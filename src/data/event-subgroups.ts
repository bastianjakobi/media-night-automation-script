import { EventStatus } from "../model/event";
import { EventSubgroup } from "../model/event-subgroup";

export function getMockEventSubgroups() {
  const currentSubgroupStartTimestamp = new Date(Date.now() - 86400000).toISOString();
  const currentSubgroupEndTimestamp = new Date(Date.now() + 86400000).toISOString();

  const pastSubgroupStartTimestamp = new Date(Date.now() - 7 * 24 * 60 * 60000).toISOString();
  const pastSubgroupEndTimestamp = new Date(
    Date.now() - 7 * 24 * 60 * 60000 + 24 * 60 * 60000
  ).toISOString();

  const eventSubgroups: EventSubgroup[] = [
    {
      id: 4,
      title: "Spieltag 2",
      description: "Spieltag 2 der 2. Bundesliga",
      startDate: currentSubgroupStartTimestamp,
      endDate: currentSubgroupEndTimestamp,
      tags: ["2. Bundesliga", "Fußball", "Sport"],
      status: EventStatus.ONGOING,
      event_group: 3,
    },
    {
      id: 3,
      title: "Spieltag 1",
      description: "Spieltag 1 der 2. Bundesliga",
      startDate: pastSubgroupStartTimestamp,
      endDate: pastSubgroupEndTimestamp,
      tags: ["2. Bundesliga", "Fußball", "Sport"],
      status: EventStatus.COMPLETED,
      event_group: 3,
    },
    {
      id: 2,
      title: "Spieltag 2",
      description: "Spieltag 2 der Bundesliga",
      startDate: currentSubgroupStartTimestamp,
      endDate: currentSubgroupEndTimestamp,
      tags: ["Bundesliga", "Fußball", "Sport"],
      status: EventStatus.ONGOING,
      event_group: 8,
    },
    {
      id: 1,
      title: "Spieltag 1",
      description: "Spieltag 1 der Bundesliga",
      startDate: pastSubgroupStartTimestamp,
      endDate: pastSubgroupEndTimestamp,
      tags: ["Bundesliga", "Fußball", "Sport"],
      status: EventStatus.COMPLETED,
      event_group: 8,
    },
  ];

  return eventSubgroups;
}
