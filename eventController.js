import events from "../data/events.json" assert { type: "json" };

export const getEvents = (req, res) => {
  res.json({
    success: true,
    data: events
  });
};
