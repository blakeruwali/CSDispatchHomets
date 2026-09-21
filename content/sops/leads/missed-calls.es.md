---
translation_of: sop.leads.missed-calls
source_version: 1
---

# Recuperación de Llamadas Perdidas

> **Una llamada perdida no es una llamada perdida para siempre. Es un cliente potencial con un cronómetro encima — y el cronómetro ya está corriendo.**

Cada llamada entrante que no contestamos es alguien con un sistema descompuesto o con dinero para gastar que nos llamó a *nosotros primero*. Si le devolvemos la llamada dentro de cinco minutos, la mayoría todavía agenda. Si le devolvemos la llamada en una hora, la mayoría ya agendó con la siguiente compañía de la lista. La recuperación de una llamada perdida se mide en minutos, no en turnos.

## La regla {#rule}

**Toda llamada perdida recibe un intento de devolución dentro de 5 minutos de haberse notado, y ninguna llamada perdida queda sin trabajar al final del turno.**

Si el tablero está llenísimo y no puedes devolver la llamada en 5 minutos, para eso está el servicio de respaldo y el CSM disponible — una llamada perdida nunca se estaciona porque "estamos ocupados". Cuando estamos ocupados es cuando las llamadas perdidas más importan.

## En el momento en que la ves {#first-response}

Apenas aparezca una llamada perdida en el tablero, en la cola o en el registro del servicio de contestación:

1. **Devuelve la llamada primero.** Llamada telefónica, no texto. La velocidad le gana a la perfección — una devolución un poco apurada a los dos minutos le gana a una perfecta a los veinte.
2. **Si no contestan, manda texto de inmediato.** En el mismo minuto, mientras el número sigue caliente:

   > "Hola, habla [Nombre] de home+ Air & Heat — disculpe que no pudimos contestar su llamada. ¿Está buscando que le revisen un sistema hoy? Se lo puedo agendar ahora mismo."

3. **Vuelve a intentar.** Segundo intento de llamada a los 15 minutos, tercero a la 1 hora. Después de tres intentos sin contacto, regístrala y pásala al barrido de fin de día — nunca se abandona en silencio.

## La conversación de devolución {#conversation}

Empieza con la disculpa, y luego ve directo al punto — ellos ya le dijeron al teléfono lo que quieren al llamar:

> "Hola, habla [Nombre] de home+ Air & Heat — vi que no pudimos contestar su llamada hace unos minutos y lo siento mucho. ¿En qué le puedo ayudar hoy?"

De ahí es una llamada normal: captura completa (`sop.csm.intake`), aclaración de síntomas, fee de diagnóstico, y agenda (`sop.csm.booking-authority`). **No trates una devolución como de menor valor que una llamada contestada en vivo.** Un cliente que llamó a varias compañías seguidas agenda con quien lo trate como prioridad primero.

**Si el cliente dice que ya agendó con otra compañía:** sé amable, deja la puerta abierta y regístralo:

> "No hay ningún problema — me da gusto que lo estén atendiendo. Si algo cambia o alguna vez quiere una segunda opinión, aquí estamos."

Registra el resultado de cualquier forma — agendado, ya agendó en otro lado, no contestó, número equivocado. Una llamada perdida sin resultado registrado se ve exactamente igual que una llamada perdida que nadie trabajó.

## Llamadas perdidas fuera de horario {#after-hours}

Las llamadas fuera de horario van al servicio de contestación, que es la red de seguridad — pero cualquier cosa que se escape (una transferencia caída, un colgado antes de contestar, un hueco de fin de semana) sigue la misma regla al **inicio del siguiente turno**: el primer CSM que entra trabaja la lista de llamadas perdidas de la noche **antes** que cualquier otra cosa, en el orden en que entraron. Las emergencias marcadas por el servicio de contestación se llaman primero sin importar el orden.

## El barrido de fin de día {#sweep}

Antes de que el último CSM cierre sesión:

- Cada llamada perdida del día tiene un resultado registrado: agendada, cotizada, rechazada, ya agendó en otro lado, o sin contacto después de tres intentos.
- Cualquier cosa sin resolver pasa a la lista de mañana a primera hora — no "cuando alguien pueda".
- El gerente revisa el conteo de llamadas perdidas del día y la tasa de recuperación. Un conteo creciente de llamadas perdidas es un problema de personal, no de técnicos, y va a los números de la semana.

## Por qué se mide {#why}

Las llamadas perdidas son las llamadas más caras que recibimos — el mercadeo ya las pagó, el cliente ya nos eligió una vez, y la única pregunta es si contestamos. La tasa de recuperación (llamadas perdidas devueltas dentro de 5 minutos, y llamadas perdidas que terminan agendadas) va en el tablero del CSM junto a la tasa de agendamiento, porque las dos son la misma habilidad: estar ahí cuando el cliente se comunica (`sop.csm.kpis`).

## Relacionado

- Estándar de contestación en vivo: `sop.csm.greeting`
- Qué capturar cuando están en la línea: `sop.csm.intake`
- Agendar la llamada: `sop.csm.booking-authority`
- Cómo se mide la tasa de recuperación: `sop.csm.kpis`
