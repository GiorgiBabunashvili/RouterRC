import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

const EditEventPage = () => {
  const data = useRouteLoaderData("event-detail");
  const event = data.event;

  return <EventForm method="patch" event={event} />;
};

export default EditEventPage;
