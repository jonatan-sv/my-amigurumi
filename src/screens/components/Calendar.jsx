import { useState } from "react";

const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#d6b4ff",
  height: "400px",
  width: "90%",
  maxWidth: "700px",
  borderRadius: "15px",
  padding: "10px",
  boxShadow: "4px 4px 0 var(--dark-purple)",
};

export default function Calendar() {
  const [calendarLink, setCalendarLink] = useState(
    "https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=America%2FFortaleza&showPrint=0&showCalendars=0&title=Agenda%20de%20Eventos&src=ZWNiYTE5OTFlODVmZjE2MWNiNTRjZjVkYmRlYzQyM2YwNTM1NzkxYmUwNWNkNTM2ODljZGFkMTQ2YzNiYmVmNEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23b39ddb"
  );
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          name="link"
          id="link"
          value={calendarLink}
          onChange={(e) => setCalendarLink(e.value)}
        />
        <div style={container}>
          <iframe
            src={calendarLink}
            width="100%"
            height="100%"
            style={{
              border: "none",
              borderRadius: "10px",
            }}
          ></iframe>
        </div>
      </div>
    </>
  );
}
