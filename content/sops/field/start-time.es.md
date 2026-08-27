---
translation_of: sop.field.start-time
source_version: 1
---

# Hora de Inicio — En el Domicilio al Abrir la Ventana

> **Tu hora de inicio es cuando abre la ventana de llegada del cliente, contigo parado en su puerta — no la hora a la que sales de tu casa.**

## La versión de 60 segundos {#field-card}

1. **Camioneta cargada y con combustible la noche anterior.**
2. **Primer trabajo confirmado la noche anterior**, cuando Despacho lo envía.
3. **En marcha a las {{price:tech_shift_start}}.**
4. **En el domicilio al abrir la ventana** — a las 8 para una ventana de 8 a 10, no a las 9:55.
5. **Actualiza el estatus del trabajo en ServiceTitan conforme avanzas**: despachado → en camino → en sitio.

## Por qué al abrir la ventana y no al final {#top-of-window}

Una ventana de 8 a 10 no es permiso para llegar a las 9:59. Son dos horas de margen para el tráfico, para que el trabajo anterior se alargue y para una vuelta al proveedor — y ese margen es a favor del cliente, no nuestro.

**Tres cosas dependen de esto:**

**La garantía de llegada corre desde que abre la ventana.** {{price:arrival_guarantee}} — el reloj empieza cuando abre la ventana, no cuando tú sales (`reference.guarantees`). Cada minuto que pasas sin llegar es un minuto quemado de esa garantía.

**Llegar tarde te cuesta el día, no solo la llamada.** Llegar a las 9:50 a una ventana de 8 a 10 pone en riesgo tu segundo trabajo, y el tercero se vuelve problema de Despacho — lo que significa que al cliente de alguien más lo mueven por culpa de tu mañana.

**El cliente pidió permiso en el trabajo.** Lleva esperando desde las 8. Llegar a las 9:55 es técnicamente puntual y se siente como desprecio, y es lo más común en una reseña de dos estrellas que por lo demás elogia la reparación.

## Actualiza el estatus con honestidad {#statusing}

El tablero vale lo que valen los estatus que tiene. Despacho toma decisiones reales con tu estatus cada hora.

| Estatus | Significa |
|---|---|
| Confirmado | Viste el trabajo y vas para allá |
| En camino | Las llantas van rodando hacia *esta* dirección |
| En sitio | Estás en la propiedad |
| Trabajando | Diagnóstico o reparación en curso |
| Completado | Trabajo hecho, equipo registrado, formularios llenos — `sop.field.forms` |

Poner "en camino" mientras sigues desayunando no es un atajo, son datos falsos — Despacho agenda una llamada del mismo día contra una camioneta que no se ha movido, y el cliente al otro lado de esa decisión lo paga.

## Cuando vas a llegar tarde {#late}

Pasa. Lo que no es aceptable es el silencio.

1. **Llama a Despacho en cuanto lo sepas** — no cuando ya cerró la ventana.
2. **Da una hora estimada real**, la que de verdad crees.
3. **Despacho llama al cliente.** No hagas promesas por tu cuenta al siguiente cliente; puede que Despacho esté moviendo el trabajo completo.
4. **Un trabajo que se pasa por {{price:overrun_threshold}} es una llamada**, aunque vayas avanzando bien. El tablero tiene que reacomodarse alrededor de ti (`sop.dispatch.hours`).

## La noche anterior es parte de la hora de inicio {#night-before}

La mañana se gana la tarde anterior:

- ☐ Camioneta surtida para los tipos de trabajo de mañana
- ☐ Tanque con combustible
- ☐ Primer trabajo confirmado, dirección leída, síntoma leído
- ☐ Lo que ya sepas que te falta, avisado a Despacho **esta noche**

Descubrir a las 7:45 de la mañana que la pieza no está en la camioneta es una llegada a las 9:30.

## Relacionado

- Cómo Despacho organiza tu día alrededor de esto: `sop.dispatch.hours`
- Cerrar un trabajo correctamente: `sop.field.forms`
- El equipo antes del trabajo: `sop.field.equipment-capture`
- La garantía de llegada: `reference.guarantees`
