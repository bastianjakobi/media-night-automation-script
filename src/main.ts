import { cleanUpAndSetupData, endHalfTime, scoreGoal, startHalfTime } from "./lib/supabase";
import "./style.css";

const video = document.getElementById("video") as HTMLVideoElement;
const timestamps = [
  {
    id: 1,
    time: 0,
    action: () => cleanUpAndSetupData(),
  },
  {
    id: 2,
    time: 74,
    action: () => scoreGoal(1, 1, 1.0),
  },
  {
    id: 3,
    time: 100,
    action: () => scoreGoal(1, 1, 2.0),
  },
  {
    id: 4,
    time: 127,
    action: () => startHalfTime(1),
  },
  {
    id: 5,
    time: 155,
    action: () => endHalfTime(1),
  },
  {
    id: 6,
    time: 213,
    action: () => scoreGoal(1, 1, 3.0),
  },
  {
    id: 7,
    time: 232,
    action: () => scoreGoal(1, 18, 1.0),
  },
  {
    id: 8,
    time: 274,
    action: () => scoreGoal(1, 18, 2.0),
  },
];
let lastExecutedActionID: number | null = null;

video?.addEventListener("timeupdate", function () {
  const currentTime = Math.floor(this.currentTime);
  timestamps.forEach((timestamp) => {
    if (currentTime === timestamp.time && lastExecutedActionID !== timestamp.id) {
      lastExecutedActionID = timestamp.id;
      timestamp.action();
    }
  });
});
