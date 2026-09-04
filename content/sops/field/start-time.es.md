---
translation_of: sop.field.start-time
source_version: 2
---

# Hora de Inicio — En el Domicilio al Inicio de la Ventana

> **Tu hora de inicio es el inicio de la ventana de llegada del cliente, parado en su puerta — no la hora en que sales de la casa.**

## Cuándo aplica {#applies}

Cada trabajo, cada día, cada ventana — 8–10, 10–12, 12–2, 2–4. Aplica más en el primer trabajo del día, porque esa llegada determina si el resto del tablero se sostiene, pero aplica igual a tu segunda, tercera y cuarta parada.

## La escalera de ejecución {#execution}

1. **La noche anterior:** camión cargado y con gasolina, primer trabajo confirmado cuando Despacho lo envía, cualquier cosa faltante señalada a Despacho esa noche, no a las 7:45 AM.
2. **En movimiento a las {{price:tech_shift_start}}.**
3. **Actualiza el estatus del trabajo en ServiceTitan según va ocurriendo realmente** — confirmado, en camino, en el domicilio — en tiempo real, no en lote después.
4. **En el domicilio al inicio de la ventana.** Una ventana de 8–10 significa 8, no 9:55.
5. **Si sabes que vas a perder el inicio de la ventana, llama a Despacho en el momento en que lo sepas** — no cuando la ventana esté cerrando.
6. **Si un trabajo se está alargando, avísalo cuando pases {{price:overrun_threshold}} sobre el estimado**, incluso si el progreso es bueno, para que Despacho pueda mover el resto del tablero alrededor de ti.

## Qué dices {#verbatim}

Si llegas temprano o exactamente a tiempo:

> "Justo a tiempo — sé que ha estado esperando desde que abrió la ventana."

Si vas a llegar tarde y Despacho ya llamó al cliente:

> "Disculpe la espera — quiero darle un número real, no otro 'ya voy en camino'. Estaré ahí a las [hora específica]."

Nunca le digas a un cliente:

> "Había mucho tráfico" como toda la explicación, sin una hora nueva y específica junto con eso.

## Ejemplo trabajado {#example}

**Débil:** Ventana de 8–10. El técnico sale del taller a las 8:15 porque el camión no se cargó la noche anterior, se topa con tráfico, llega a las 9:58. Técnicamente dentro de la ventana, pero el cliente ha estado esperando desde las 8, perdió parte de su mañana, y deja una reseña de dos estrellas que elogia la reparación pero señala "llegó hasta el último minuto, sin avisar."

**Perfecto:** Camión cargado y con gasolina la noche anterior, primer trabajo confirmado, técnico en movimiento a las {{price:tech_shift_start}}, en el domicilio a las 7:58 para la ventana de 8–10. El reloj de la garantía de llegada nunca se acerca a agotarse, y el día del cliente se libera dos horas antes de lo que habría sido.

| | Débil | Perfecto |
|---|---|---|
| Preparación | Camión cargado la mañana del trabajo | Cargado y con gasolina la noche anterior |
| Llegada | 9:58 para una ventana de 8–10 | 7:58 para una ventana de 8–10 |
| Día del cliente | Dos horas perdidas esperando | Liberado de inmediato |
| Exposición de la garantía | Casi agotada | Intacta |

## Cuando algo sale mal {#failures}

- **Te das cuenta a medio camino de que vas a llegar tarde.** Llama a Despacho de inmediato con un ETA real — el que de verdad crees, no una suposición optimista. No llames tú al cliente con una promesa; Despacho puede necesitar mover el trabajo por completo.
- **Un trabajo anterior se alarga y amenaza la siguiente ventana.** Avísalo al pasar {{price:overrun_threshold}} sobre el estimado, incluso si vas avanzando bien. El silencio es la falla, no el sobretiempo en sí.
- **Descubres en la puerta del cliente que al camión le falta una pieza.** Eso se debió detectar la noche anterior durante la carga del camión. Señálalo a Despacho ahora en vez de empezar un trabajo que no puedes terminar.
- **Estás inlocalizable por {{price:tech_unreachable_window}}.** Esto escala automáticamente al gerente de despacho — no dejes que tu teléfono se apague a media ruta.

### Reglas duras

- Nunca marques "en camino" en ServiceTitan antes de haber salido realmente hacia esa dirección.
- Nunca improvises una nueva hora de llegada directamente al cliente — esa es decisión y comunicación de Despacho.
- Nunca dejes que un trabajo pase su estimado sin notificar a Despacho, sin importar cuánta confianza tengas.
- Nunca trates "técnicamente dentro de la ventana" como lo mismo que "al inicio de la ventana."

## Calificación de QA {#qa}

| Puntaje | Estándar |
|---|---|
| 2 | En el domicilio al inicio o antes de cada ventana del día; estatus actualizados en tiempo real; cualquier retraso avisado proactivamente con un ETA real |
| 1 | En el domicilio dentro de la ventana pero lo bastante tarde para notarse, o una actualización de estatus retrasada sin impacto al cliente |
| 0 | Llegada al final de la ventana sin aviso previo, o un estatus falsificado ("en camino" sin estar en movimiento) |

## Relacionado

- Cómo Despacho organiza tu día alrededor de esto: `sop.dispatch.hours`
- Cerrar un trabajo correctamente: `sop.field.forms`
- Equipo antes del trabajo: `sop.field.equipment-capture`
- La garantía de llegada en sí: `reference.guarantees`
