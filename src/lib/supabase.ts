import { mockEventParticipants } from "../data/event-participants";
import { mockEventStatusChanges } from "../data/event-status-changes";
import { getMockEventSubgroups } from "../data/event-subgroups";
import { getMockEvents } from "../data/events";
import { mockScores } from "../data/scores";
import { EventStatus } from "../model/event";
import { EventStatusChange } from "../model/event-status-change";
import { supabase } from "./supabase-client";

async function insertMockEvents() {
  const mockEvents = getMockEvents();
  let { data, error } = await supabase.from("event").insert(mockEvents).select();
  if (error) {
    throw new Error("Error inserting mock events" + error.message);
  }
  return data;
}

async function insertMockEventSubGroups() {
  const mockEventSubGroups = getMockEventSubgroups();
  let { data, error } = await supabase.from("event_subgroup").insert(mockEventSubGroups).select();
  if (error) {
    throw new Error("Error inserting mock event subgroups" + error.message);
  }
  return data;
}

async function insertMockEventParticipants() {
  let { data, error } = await supabase
    .from("event_participant")
    .insert(mockEventParticipants)
    .select();
  if (error) {
    throw new Error("Error inserting mock event participants" + error.message);
  }
  return data;
}

async function insertMockScores() {
  let { data, error } = await supabase.from("score").insert(mockScores).select();
  if (error) {
    throw new Error("Error inserting mock scores" + error.message);
  }
  return data;
}

async function insertMockEventStatusChanges() {
  let { data, error } = await supabase
    .from("event_status_change")
    .insert(mockEventStatusChanges)
    .select();
  if (error) {
    throw new Error("Error inserting mock event status changes" + error.message);
  }
  return data;
}

async function cleanupEvents() {
  let { data, error } = await supabase.from("event").delete().neq("id", 0);
  if (error) {
    throw new Error("Error cleaning up events" + error.message);
  }
  return data;
}

async function cleanupScores() {
  let { data, error } = await supabase.from("score").delete().neq("id", 0);
  if (error) {
    throw new Error("Error cleaning up scores" + error.message);
  }
  return data;
}

async function cleanupEventParticipants() {
  let { data, error } = await supabase.from("event_participant").delete().neq("id", 0);
  if (error) {
    throw new Error("Error cleaning up event participants" + error.message);
  }
  return data;
}

async function cleanUpEventStatusChanges() {
  let { data, error } = await supabase.from("event_status_change").delete().neq("id", 0);
  if (error) {
    throw new Error("Error cleaning up event status changes" + error.message);
  }
  return data;
}

async function cleanupEventSubGroups() {
  let { data, error } = await supabase.from("event_subgroup").delete().neq("id", 0);
  if (error) {
    throw new Error("Error cleaning up event subgroups" + error.message);
  }
  return data;
}

export async function cleanUpAndSetupData() {
  try {
    await cleanupScores();
    await cleanupEventParticipants();
    await cleanUpEventStatusChanges();
    await cleanupEvents();
    await cleanupEventSubGroups();

    await insertMockEventSubGroups();
    await insertMockEvents();
    await insertMockEventParticipants();
    await insertMockScores();
    await insertMockEventStatusChanges();
    console.log("Data cleaned up and set up");
  } catch (error) {
    console.error("Error cleaning up and setting up data", error);
  }
}

export async function scoreGoal(eventID: number, participantID: number, score: number) {
  let { data, error } = await supabase
    .from("score")
    .insert([{ event: eventID, participant: participantID, score }])
    .select();
  if (error) {
    throw new Error("Error scoring goal" + error.message);
  }
  return data;
}

export async function startHalfTime(eventID: number) {
  const eventStatusChange: EventStatusChange = {
    event: eventID,
    previousStatus: EventStatus.ONGOING,
    newStatus: EventStatus.PAUSED,
  };
  let { data, error } = await supabase
    .from("event_status_change")
    .insert([eventStatusChange])
    .select();
  if (error) {
    throw new Error("Error starting half time" + error.message);
  }
  return data;
}

export async function endHalfTime(eventID: number) {
  const eventStatusChange: EventStatusChange = {
    event: eventID,
    previousStatus: EventStatus.PAUSED,
    newStatus: EventStatus.ONGOING,
  };
  let { data, error } = await supabase
    .from("event_status_change")
    .insert([eventStatusChange])
    .select();
  if (error) {
    throw new Error("Error ending half time" + error.message);
  }
  return data;
}
