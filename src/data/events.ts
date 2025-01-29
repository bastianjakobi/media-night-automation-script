import { Event, EventStatus, EventType } from "../model/event";

export function getMockEvents() {
  const currentStartTimestamp = new Date().toISOString();
  const currentEndTimestamp = new Date(Date.now() + 90 * 60000).toISOString();

  const pastStartTimestamp = new Date(Date.now() - 7 * 24 * 60 * 60000).toISOString();
  const pastEndTimestamp = new Date(Date.now() - 7 * 24 * 60 * 60000 + 90 * 60000).toISOString();

  const futureStartTimestamp = new Date(Date.now() + 7 * 24 * 60 * 60000).toISOString();
  const futureEndTimestamp = new Date(Date.now() + 7 * 24 * 60 * 60000 + 90 * 60000).toISOString();

  const events: Event[] = [
    {
      id: 1,
      title: "VfB Stuttgart vs SC Freiburg",
      description: "Bundesliga Spiel zwischen VfB Stuttgart und SC Freiburg",
      startDate: currentStartTimestamp,
      endDate: currentEndTimestamp,
      tags: ["Bundesliga", "Fußball", "Sport"],
      type: EventType.SPORT,
      status: EventStatus.ONGOING,
      event_group: 8,
      event_subgroup: 2,
      data_provider: 1,
    },
    {
      id: 2,
      title: "FC Bayern München vs VfB Stuttgart",
      description: "Bundesliga Spiel zwischen FC Bayern München und VfB Stuttgart",
      startDate: futureStartTimestamp,
      endDate: futureEndTimestamp,
      tags: ["Bundesliga", "Fußball", "Sport"],
      type: EventType.SPORT,
      status: EventStatus.SCHEDULED,
      event_group: 8,
      event_subgroup: 2,
      data_provider: 1,
    },
    {
      id: 3,
      title: "Borussia Mönchengladbach vs VfL Wolfsburg",
      description: "Bundesliga Spiel zwischen Borussia Mönchengladbach und VfL Wolfsburg",
      startDate: pastStartTimestamp,
      endDate: pastEndTimestamp,
      tags: ["Bundesliga", "Fußball", "Sport"],
      type: EventType.SPORT,
      status: EventStatus.COMPLETED,
      event_group: 8,
      event_subgroup: 1,
      data_provider: 1,
    },
    {
      id: 4,
      title: "Eintracht Frankfurt vs VfB Stuttgart",
      description: "Bundesliga Spiel zwischen Eintracht Frankfurt und VfB Stuttgart",
      startDate: pastStartTimestamp,
      endDate: pastEndTimestamp,
      tags: ["Bundesliga", "Fußball", "Sport"],
      type: EventType.SPORT,
      status: EventStatus.COMPLETED,
      event_group: 8,
      event_subgroup: 2,
      data_provider: 1,
    },
    {
      id: 5,
      title: "1. FC Magdeburg vs SV Darmstadt 98",
      description: "2. Liga Spiel zwischen 1. FC Magdeburg und SV Darmstadt 98",
      startDate: pastStartTimestamp,
      endDate: pastEndTimestamp,
      tags: ["2. Liga", "Fußball", "Sport"],
      type: EventType.SPORT,
      status: EventStatus.COMPLETED,
      event_group: 3,
      event_subgroup: 3,
      data_provider: 1,
    },
    {
      id: 6,
      title: "SV Darmstadt 98 vs Fortuna Düsseldorf",
      description: "2. Liga Spiel zwischen SV Darmstadt 98 und Fortuna Düsseldorf",
      startDate: pastEndTimestamp,
      endDate: pastEndTimestamp,
      tags: ["2. Liga", "Fußball", "Sport"],
      type: EventType.SPORT,
      status: EventStatus.COMPLETED,
      event_group: 3,
      event_subgroup: 4,
      data_provider: 1,
    },
  ];

  return events;
}
