import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es"; // Cargar el idioma español para moment

moment.locale("es"); // Configura moment para que use español
const localizer = momentLocalizer(moment);

const Calendario = () => {
  const [events, setEvents] = useState([]);

  // Función que determina si un día es fin de semana (sábado o domingo)
  const isWeekend = (date) => {
    const day = moment(date).day(); // 0 = Domingo, 6 = Sábado
    return day === 0 || day === 6;
  };

  // Función que ajusta las propiedades del día (deshabilitar clics en fines de semana)
  const dayPropGetter = (date) => {
    if (isWeekend(date)) {
      return {
        className: "rbc-off-day", // Agrega la clase rbc-off-day para fines de semana
        style: {
          backgroundColor: "#f0f0f0", // Color gris para fines de semana
          pointerEvents: "none", // Deshabilita el click
        },
      };
    }
    return {};
  };
  // Función que maneja la selección de slots
  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('Ingrese el título del turno:');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div style={{ height: "80vh" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot} // Permite seleccionar un espacio para crear eventos
        dayPropGetter={dayPropGetter} // Personalización de días no hábiles
        messages={{
          today: "Hoy",
          previous: "Anterior",
          next: "Siguiente",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          noEventsInRange: "No hay eventos en este rango",
        }}
        popup
        tooltipAccessor={(event) =>
          `${event.title}${event.description ? `: ${event.description}` : ""}`
        }
        min={new Date(1970, 1, 1, 8, 0, 0)} // Inicio del día a las 8 AM
        max={new Date(1970, 1, 1, 13, 0, 0)} // Fin del día a la 1 PM
        // views={["week", "day"]} // Solo permitir las vistas de semana y día
        step={30} // Intervalo de 30 minutos
        
      />
    </div>
  );
};

export default Calendario;
