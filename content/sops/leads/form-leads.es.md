---
translation_of: sop.leads.form-leads
source_version: 1
---

# Respuesta a Clientes Potenciales de Facebook y Formularios

> **Un cliente potencial de formulario es una persona parada en un cuarto lleno de contratistas. La primera voz humana real al teléfono gana el trabajo — todos los demás se quedan con el buzón de voz.**

Los formularios de Facebook, Instagram, Google y el sitio web producen lo mismo: un nombre, un número y un problema escrito con prisa. Ese cliente potencial nos llegó a nosotros y — especialmente en Meta — muchas veces también a dos o tres competidores al mismo tiempo. Los clientes de formulario no se trabajan "cuando se calme el tablero". Se trabajan en el momento en que caen, porque su valor se desgasta por minuto.

## La regla {#rule}

**Todo cliente potencial de formulario recibe un intento de llamada en vivo dentro de 5 minutos de haber llegado durante el horario laboral. Los que llegan fuera de horario se llaman al inicio del siguiente turno — antes del barrido de llamadas perdidas, en el orden en que llegaron.**

Un cliente de formulario nunca se estaciona en una cola, un buzón o una pestaña del CRM. Si no se llama, muere.

## En el momento en que llega {#first-response}

1. **Llama primero. Dentro de 5 minutos.** No texto, no correo, no respuesta en la plataforma — una llamada telefónica. La velocidad le gana a la perfección.
2. **Abre con sus propias palabras.** Los clientes de formulario dudan que un humano haya leído su formulario. Demuéstralo de inmediato:

   > "Hola [nombre], habla [Nombre] de home+ Air & Heat — acabo de recibir su solicitud sobre [el problema exacto que escribió, ej. 'el aire que dejó de enfriar arriba']. ¿Es buen momento para agendarle la visita?"

3. **Si no contestan: manda texto dentro de 2 minutos.** En el mismo minuto, mientras el número sigue caliente:

   > "Hola [nombre] — [Nombre] de home+ Air & Heat. Acabo de intentar llamarle sobre la solicitud de [tipo de trabajo]. Podemos mandar un técnico [hoy / mañana en la mañana]. Responda aquí o llame al [número] y le aseguro un horario."

4. **Si vino por Facebook/Instagram, también responde en la plataforma.** Muchos clientes de Meta viven en Messenger — encuéntralos donde enviaron la solicitud:

   > "Hola [nombre], gracias por contactar a home+ Air & Heat sobre [tipo de trabajo]. Somos licenciados y asegurados y cubrimos todo Nassau y Suffolk. Puedo mandarle un técnico [hoy / mañana en la mañana] — ¿cuál es el mejor número para confirmar un horario?"

   Mantenlo corto. Nombra el trabajo, nombra un horario real, haz una sola pregunta.

## La cadencia de intentos {#cadence}

| Intento | Momento | Canal |
|---|---|---|
| 1 | Dentro de 5 minutos | Llamada → texto si no contestan |
| 2 | 2 horas después | Llamada → texto |
| 3 | A la mañana siguiente | Llamada → texto |
| Final | 48 horas | Texto de cierre, luego marcar como inalcanzable |

Texto de cierre:

> "Hola [nombre] — última nota de home+ Air & Heat. Si todavía necesita ayuda con [tipo de trabajo], aquí estamos: [número]. ¡De lo contrario, mucha suerte!"

**Tres intentos de llamada, y se para.** Anota cada intento en el ticket para que el siguiente CSM no reinicie el conteo. Los textos cuentan contra los límites de `playbook.sms`. Darles permiso de cerrarlo ("si ya se fue con otra compañía, solo dígamelo") consigue respuestas honestas, que valen más que un cliente potencial abierto por una semana.

## La conversación, cuando contestan {#conversation}

Un cliente de formulario es una llamada normal una vez que está en la línea — captura completa (`sop.csm.intake`), aclaración de síntomas, fee de diagnóstico y agenda (`sop.csm.booking-authority`). Dos diferencias:

- **Puede que no recuerden haber enviado el formulario** — los formularios de Meta se autollenan y la gente avanza rápido. Si suenan confundidos, oriéntalos: "Usted pidió una cotización para [problema] en Facebook hace unos minutos — quise contactarlo mientras está fresco." Nunca los hagas sentir tontos; la confusión es normal, no un rechazo.
- **Cierra con horario, no con interés.** "¿Es buen momento para ponerlo en el horario?" asume la venta. "¿Todavía está buscando?" invita un no.

**Si ya agendaron con alguien más:**

> "No hay ningún problema — gracias por avisarme. Si no funciona, guarde nuestro número."

Sin discurso, sin bajar el precio, sin preguntar con quién se fueron. Regístralo como Perdido y sigue adelante.

## Atribución de fuente {#source}

Registra la fuente **con precisión y al pie de la letra** (`sop.csm.lead-source`): "Facebook", "Instagram", "formulario de Google" o "sitio web" son líneas de gasto diferentes. Los clientes de Facebook/Instagram son clientes pagados de Meta — mezclarlos con los formularios orgánicos del sitio web hace el presupuesto de mercadeo ilegible. Si la plataforma etiquetó al cliente (ej. "Formulario de Facebook — Campaña Reparación de AC"), conserva esa etiqueta en el ticket.

## Si no es un cliente potencial real {#not-a-lead}

Servicio equivocado, fuera de Nassau o Suffolk, spam obvio o duplicado — sé breve y útil (`sop.csm.service-area`), luego **márcalo como no calificado y presenta la disputa en la plataforma el mismo día.** Meta y Google acreditan clientes inválidos, pero solo dentro de una ventana corta. Una disputa presentada mañana puede ser dinero tirado.

## El barrido de fin de día {#sweep}

El mismo estándar que las llamadas perdidas (`sop.leads.missed-calls`): antes de que el último CSM cierre sesión, cada cliente de formulario del día tiene un resultado registrado — agendado, cotizado, rechazado, ya agendó en otro lado, inalcanzable después de tres intentos, o no calificado/disputado. Cualquier cosa sin resolver pasa a la lista de mañana a primera hora.

## Por qué se mide {#why}

Los clientes de formulario son oportunidades ya pagadas — el mercadeo ya los compró, y la única variable es nuestra velocidad. El tiempo de primer contacto (meta: ≤ 5 minutos) y la tasa de agendamiento de formularios van en el tablero del CSM (`sop.csm.kpis`), porque un formulario contestado en una hora normalmente lo contesta el técnico de otra compañía que ya está parado en la entrada.

## Relacionado

- Estándar de recuperación de llamadas perdidas: `sop.leads.missed-calls`
- Captura completa cuando están en la línea: `sop.csm.intake`
- Autoridad de agenda: `sop.csm.booking-authority`
- Mapeo de fuentes: `sop.csm.lead-source`
- Playbook de formularios web: `playbook.web`
- Estándar de velocidad de respuesta: `playbook.speed-to-lead`
