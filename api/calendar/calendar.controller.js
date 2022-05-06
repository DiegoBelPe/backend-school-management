const {
  getAllEvents,
  deleteEvent,
  createEvent,
  updateEvent,
 } = require("./calendar.service");

async function handlerAllEvents(req, res) {
  const events = await getAllEvents();
  res.json(events);
}

async function handlerDeleteEvent(req, res) {
  try {
    const { id } = req.params;
    const event = await deleteEvent(id);
    if (!event) {
      res.status(404).json({ message: `Evento no encontrado con id ${id}` });
    } else {
      res.json({ message: `Evento con el id ${id} eliminado` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el evento' });
  }
}


async function handlerCreateEvent(req, res) {
  const body = req.body;
  try {
    const newEvent = await createEvent(body);
    if (!newEvent) {
      res.status(404).json({ message: 'Evento no creado' });
    } else {
      res.status(201).json({ message: 'Evento creado' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al crear el evento, se requieren todos los espacios' });
  }
}


async function handlerUpdateEvent(req, res) {
  try {
    const { id } = req.params;
    const { body } = req;
    const event = await updateEvent(id, body);
    if (!event) {
      res.status(404).json({ message: `Evento no encontrado id ${id}` });
    } else {
      res.json({ message: `Evento con el id ${id} actualizado` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el evento' });
  }
}




module.exports = {
  handlerAllEvents,
  handlerDeleteEvent,
  handlerCreateEvent,
  handlerUpdateEvent,
};
