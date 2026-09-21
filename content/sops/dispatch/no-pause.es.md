---
translation_of: sop.dispatch.no-pause
source_version: 1
---

# Nunca Pausar un Trabajo — Re-Despachar en su Lugar

> Un trabajo pausado es ingreso invisible. Un trabajo re-despachado es una cita agendada. Nunca pausamos.

ServiceTitan tiene un botón de pausa. **Nosotros no lo usamos.** Un trabajo pausado desaparece del tablero, del horario y de cada reporte — es trabajo que vendimos y nunca terminamos, sentado en una cola que nadie trabaja. Todo trabajo sin terminar se **cierra y se re-despacha como una cita nueva** en su lugar.

## La regla {#rule}

**Los técnicos nunca pausan un trabajo. Despacho nunca acepta un trabajo pausado.** Sea cual sea la razón por la que el trabajo no se terminó hoy, el manejo es el mismo:

1. **Cierra el trabajo de hoy** con todo lo que realmente se hizo — equipo escaneado, fotos, formularios, la factura correcta de la visita de hoy.
2. **Agenda la siguiente cita en el mismo trabajo, el mismo día** — la oficina o el técnico la agregan antes de que alguien lo deje, con una ventana concreta que el cliente aceptó.
3. **Despacha la cita nueva como cualquier otro trabajo** en su día.

El cliente escucha un plan continuo ("regresamos el martes de 10–12 a terminar"). El tablero ve dos trabajos limpios. Nada queda flotando.

## Escenario 1 — El trabajo se queda sin día {#multi-day}

La instalación de las 10–11 en casa de Blake no se terminó al final del día. El técnico **no** la pausa.

- Cierra la visita de hoy con el trabajo completado hasta ahora documentado.
- Agrega la cita de continuación **antes de salir del domicilio** — el cliente acepta la ventana en el momento.
- Despacho la re-despacha mañana como un trabajo nuevo, con el historial adjunto.

## Escenario 2 — Esperando el estimado de la oficina {#estimate-delay}

La oficina no puede enviarle el estimado al técnico mientras está en el domicilio. El técnico **no** pausa el trabajo para esperar.

- El técnico le dice al cliente: **"La oficina se comunicará con usted con su estimado."**
- El técnico cierra el trabajo — su labor en el domicilio terminó.
- La entrega del estimado se convierte en tarea de la oficina, rastreada, con fecha de seguimiento — nunca un trabajo pausado que la retiene.

## Escenario 3 — No se pudo dar el estimado en el domicilio {#estimate-revisit}

El técnico fue pero el estimado no se pudo producir — el equipo de estimados no estaba disponible, la casa necesita un escaneo completo, cualquiera que sea la razón.

- Cierra la visita de hoy.
- **La oficina o el técnico agregan una cita nueva para otro día** — confirmada con el cliente y el equipo de ventas — para regresar, escanear la casa y presentar el estimado.
- Esa visita de regreso se despacha como cualquier otro trabajo.

## Por qué la pausa está prohibida {#why}

| Lo que hace un trabajo pausado | Lo que hace re-despachar |
|---|---|
| Desaparece del tablero y del horario | Permanece visible como cita agendada |
| Mata el ingreso — trabajo vendido nunca completado | Protege el ingreso con un regreso con fecha |
| Rompe la planeación de capacidad — el tablero de mañana queda mal | Mantiene las reservas y la capacidad correctas |
| Sin dueño, sin seguimiento, sin fecha límite | Una ventana concreta que el cliente escuchó |
| El cliente recibe silencio | El cliente recibe un plan |

## Nunca cerrar con números incorrectos {#wrong-numbers}

La falla opuesta está igual de prohibida: **no cierres un trabajo con números incorrectos para quitártelo de encima.** Si el total del estimado está mal, el monto de la factura está mal, o cualquier cifra del trabajo no coincide con la realidad — **alto, corrígelo primero.**

- El técnico llama a Despacho antes de cerrar.
- Despacho corrige el estimado/factura o lo escala a quien corresponda.
- Solo entonces se cierra el trabajo.

Un trabajo cerrado con números incorrectos corrompe la factura, el reporte de ingresos y la confianza del cliente — los tres a la vez. Un número incorrecto es un problema de corregir-ya, nunca de cerrar-de-todos-modos.

## La revisión diaria de Despacho {#daily-check}

- **Cero trabajos pausados en el tablero, siempre.** Cualquier trabajo encontrado en pausa se convierte el mismo día: cierra lo hecho, agenda la continuación, despáchalo.
- **Todo trabajo de varios días tiene su siguiente cita agendada antes del fin del día** — no "les llamamos".
- **Los números de cada trabajo cerrado se verifican** al cierre, junto con la revisión de captura de equipo en `sop.dispatch.equipment`.

## Relacionados

- La verificación de cierre con la que va: `sop.dispatch.equipment`
- Dónde queda esta revisión en el día: `sop.dispatch.daily-workflow`
- Clases de duración y sobretiempos: `sop.dispatch.job-duration`
- El estándar de cierre del técnico: `sop.field.forms`
