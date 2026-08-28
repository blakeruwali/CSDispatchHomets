---
translation_of: sop.dispatch.equipment
source_version: 1
---

# Captura de Equipos — Verificación de Despacho

> El técnico captura el equipo. Despacho se asegura de que realmente suceda — en cada trabajo, todos los días.

La regla de captura está en `sop.field.equipment-capture` y pertenece al técnico. Este documento es la mitad de Despacho: las verificaciones que hacen que la regla sea real y no solo una aspiración.

## Verifícalo al cierre, no la próxima semana {#close-check}

Cada trabajo que se cierra con trabajo realizado debe responder una pregunta antes de salir del tablero:

**¿Está el equipo registrado en la ubicación, con una foto legible de la placa de datos?**

- **Sí** — ciérralo.
- **No** — devuélvelo al técnico que lo cerró, **hoy**, mientras aún pueda estar cerca de la dirección o al menos recuerde el trabajo. Una devolución la próxima semana es un segundo viaje; una devolución hoy es una llamada y dos minutos en su tableta.

Esto aplica a **todo tipo de visita**, no solo reparaciones: diagnósticos, mantenimientos, estimados, instalaciones, callbacks y llamadas de garantía. Si un técnico estuvo en el sitio, el registro de equipos de la ubicación debe estar completo cuando se vaya.

## Qué significa "registrado correctamente" {#standard}

Despacho verifica la ubicación y completitud del registro, no vuelve a escribir nada:

| Verificación | Correcto | Incorrecto |
|---|---|---|
| Ubicación del registro | Equipo registrado en la **ubicación del cliente** | Enterrado en las notas del trabajo |
| Foto de la placa | Presente, llena el encuadre, legible | Falta, borrosa, ilegible |
| Modelo y serie | Ingresados (o "placa de datos ilegible" anotado) | En blanco sin explicación |
| Cobertura | Todos los sistemas de la dirección | Solo la unidad que se descompuso |

**El modelo y la serie deben salir de la foto, nunca de la memoria** — un solo carácter incorrecto es un reclamo de garantía que falla meses después. Si la placa era ilegible, las notas de condición deben decir "placa de datos ilegible" — un vacío silencioso es un defecto, un vacío explicado es un registro.

## La conversación de devolución {#send-back}

Corta, factual, sin sermón:

> "Trabajo 4821 — no hay equipos en la ubicación. Agrega el registro y las fotos de la placa y ciérralo de nuevo, o escribe la excepción en las notas."

Una excepción genuina está bien cuando está documentada: sin acceso a la unidad, el cliente rechazó el ático, sótano con llave. "El cliente se negó" es un registro. El silencio es un defecto.

## Por qué Despacho es dueño de esta verificación {#why-dispatch}

- **El despacho de mañana depende de esto.** Un modelo registrado significa que la próxima visita a esa dirección sale con la pieza correcta ya en el camión. Sin eso, estás despachando a ciegas — un segundo viaje, tiempo de manejo no pagado y un espacio que pudo haberse facturado.
- **Los reclamos de garantía viven o mueren aquí.** Una pieza falla dentro de la garantía del fabricante sin número de serie registrado, el reclamo falla y la compañía lo absorbe — y el callback regresa a tu tablero, sin pago.
- **La verificación del fee de diagnóstico va junta.** Mientras estás en el cierre, confirma que el fee de diagnóstico coincida con el resultado de la visita — acreditado en un trabajo vendido, cobrado en uno no reparable. Ver `sop.dispatch.daily-workflow`.

## El ciclo semanal {#weekly}

Un técnico que es devuelto repetidamente por equipos faltantes va a la lista del gerente de servicio para la reunión semanal uno-a-uno, junto con la tasa de callbacks — los dos están relacionados, y la conexión es el punto. El trabajo de Despacho es mostrar el patrón, no corregirlo.

## Relacionados

- La regla de captura en sí: `sop.field.equipment-capture`
- Control de calidad al cierre: `sop.field.forms`
- Dónde encaja esta verificación en el día: `sop.dispatch.daily-workflow`
