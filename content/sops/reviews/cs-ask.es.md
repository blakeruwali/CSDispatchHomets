---
id: sop.reviews.cs-ask
title: El Pedido de Reseña del Equipo de Servicio
department: reviews
owner: cs-manager
status: published
version: 1
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [reseñas, csm, teléfono, seguimiento, google]
related: [sop.reviews.program, sop.reviews.field-ask, script.csm.review-request, sop.csm.post-service-followup, sop.csm.confirmation-cadence]
section: review-program
order: 3
surfaces: [reviews]
translation_of: sop.reviews.cs-ask
source_version: 1
---

# El Pedido de Reseña del Equipo de Servicio

El técnico es dueño del momento en el sitio. El equipo de servicio es dueño de todo lo que ese momento dejó pasar — el cliente al que el técnico no pudo pedirle, el cliente que dijo "después", y el cliente cuyo entusiasmo apareció por teléfono en lugar de en la entrada.

## Cuándo pide el equipo de servicio {#when}

Un CSM pide una reseña cuando:

- El trabajo cerró **sin pedido del técnico** — el técnico lo marcó, el cliente tenía prisa, o simplemente no se dio el momento en el sitio.
- La **llamada de seguimiento** revela un cliente contento — `sop.csm.post-service-followup` termina en el pedido de reseña siempre que la satisfacción se exprese claramente.
- El cliente **elogia por su cuenta en cualquier llamada** — agendamiento, cambio de cita, garantía, lo que sea. "Su técnico fue maravilloso" es un pedido de reseña esperando respuesta.

El pedido en sí, palabra por palabra, es `script.csm.review-request` — envía el enlace mientras el cliente aún está en la línea.

## Un pedido por cliente {#one-ask}

Antes de pedir, verifica si la solicitud automática ya salió — la mayoría se envía automáticamente dos días después del servicio para encuestas con puntaje de {{price:review_survey_gate}} o más (`sop.csm.confirmation-cadence`).

- Automatización ya enviada + el cliente la ignoró → **no hay pedido manual.** Dos solicitudes para un mismo trabajo se ven desesperadas.
- Automatización enviada + el cliente la menciona con gusto por teléfono → ayúdalo a hacerlo ahí mismo: "El enlace en ese texto es la forma más rápida — toma unos 30 segundos."
- La automatización nunca salió (puntaje bajo, encuesta faltante) → el pedido manual es la única oportunidad. Tómala si está contento; omítela por completo si no lo está.

## Nunca pidas a un cliente insatisfecho {#never}

Obvio, y aun así ocurre cuando se trabaja una lista de llamadas. Si la llamada de seguimiento revela un problema, el pedido de reseña queda fuera de esa llamada — punto. Resuelve el problema, regístralo, y deja que la solución gane la reseña otro día.

## Por qué importa este lado {#why}

El lado técnico del programa tiene un solo punto de falla: una tarde ocupada, una despedida incómoda, y el pedido nunca ocurrió. El equipo de servicio es la red debajo de eso — por eso las solicitudes de reseña son parte del trabajo de este equipo, no un favor. Las buenas reseñas traen las próximas llamadas; el equipo de servicio habla con ellos primero.

## Relacionados

- El programa y las metas: `sop.reviews.program`
- El pedido del técnico en el sitio: `sop.reviews.field-ask`
- El guion palabra por palabra: `script.csm.review-request`
- La llamada de seguimiento en la que se apoya: `sop.csm.post-service-followup`
