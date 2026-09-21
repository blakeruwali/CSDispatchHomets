---
translation_of: sop.field.forms
source_version: 3
---

# Agregar Equipos y Completar Formularios Antes de Cerrar

> **Un trabajo no está terminado cuando la reparación funciona. Está terminado cuando el equipo está registrado y los formularios están hechos.**

## Cuándo aplica {#applies}

Cada trabajo, cada tipo de trabajo, antes de presionar Completar en ServiceTitan — diagnóstico, reparación, afinación, instalación, estimado, callback, visita de garantía. No hay cierre donde los formularios y el equipo sean opcionales, y no existe un "lo agrego después" que cuente.

## La escalera de ejecución {#execution}

1. **Verifica la cuota de diagnóstico en el formulario contra lo que se cotizó al cliente** — {{price:diagnostic_residential}}, {{price:diagnostic_discounted}}, o {{price:diagnostic_commercial}}, ajustada según el estatus de membresía (`sop.field.membership`). Haz esto antes de que alguien firme algo.
2. **Confirma que el equipo esté escaneado y asociado al domicilio** para cada sistema en la dirección, no solo el que vino a atender (`sop.field.equipment-capture`).
3. **Llena el formulario del trabajo por completo** — lecturas como números, hallazgos, lo que hiciste, números de parte y estatus de garantía.
4. **Toma fotos** — antes, después, la placa de datos, y cualquier cosa que estés señalando.
5. **Quita la línea del diagnóstico si la reparación o el reemplazo se aprobó en esta visita.**
6. **Registra cada recomendación, incluidas las rechazadas**, con el precio dado y la razón que dio el cliente.
7. **Obtén la firma del cliente en el dispositivo.**
8. **Solo entonces presiona Completar.**

Dos a tres minutos, cada vez. Cada minuto de eso es más barato que la llamada telefónica en tres meses por un trabajo que nadie puede reconstruir.

## Qué dices {#verbatim}

> "Hay un diagnóstico para saber exactamente qué está mal. Si se puede reparar, cotizo la reparación, y si no, le muestro por qué y cotizo el reemplazo — de cualquier forma, si avanza hoy, el diagnóstico se quita."

> "Quiero su firma aquí solo confirmando lo que hicimos hoy y lo que encontramos — toma diez segundos."

> "Estoy anotando que va a esperar antes de reemplazar el serpentín — eso queda registrado para que quien venga después no empiece desde cero."

## Ejemplo trabajado {#example}

**Débil:** El técnico cambia un capacitor, le dice al cliente que el motor del soplador "se está cansando," el cliente dice que tal vez después, el técnico cierra el trabajo sin ninguna nota. Cuatro meses después el soplador falla en una llamada de emergencia sin enfriamiento. El nuevo técnico no tiene idea de que ya se había señalado, vuelve a diagnosticar desde cero, y el cliente dice "¿no que ya habían revisado eso?"

**Perfecto:** Misma reparación, pero el formulario registra: "Ruido de balero en el motor del soplador audible al arrancar, amperaje dentro de rango pero con tendencia alta. Se recomendó reemplazo con un estimado a {{price:estimate_install}}; cliente rechazó, citando presupuesto, quiere revisarlo en primavera." Cuatro meses después llega la misma llamada — el técnico llega con la pieza ya sospechada y el cliente dice "sí, ustedes ya me habían dicho que esto podía pasar."

| | Débil | Perfecto |
|---|---|---|
| Recomendación rechazada | No registrada | Registrada con precio y razón |
| Cuota de diagnóstico en el formulario | No verificada contra la cotización | Verificada antes de la firma |
| Siguiente visita | Empieza desde cero | Empieza desde el historial |

## Cuando algo sale mal {#failures}

- **La cuota del formulario no coincide con el ticket.** Llama a Despacho y que la corrijan antes de presentar nada. Nunca cambies la cuota cotizada por tu cuenta, en ningún sentido — si el cliente dice que le dijeron algo diferente, créele, hónralo, y anota la discrepancia para que Despacho la reconcilie.
- **El diagnóstico de una unidad no reparable se omite o se condona por tu propio criterio.** Se cobra — {{price:diagnostic_on_non_repairable}} — porque invertiste tiempo real en establecer la respuesta. El estimado de reemplazo en sí es gratis ({{price:estimate_install}}), y el diagnóstico se acredita solo si compran el reemplazo.
- **El trabajo se alarga y el formulario se queda para "terminarlo después".** No se va a terminar — la tasa de captura después del hecho es casi cero. Si de verdad no tienes tiempo, señala el hueco a Despacho antes de cerrar en vez de cerrar incompleto y en silencio.
- **Despacho marca un trabajo cerrado con formulario en blanco o equipo faltante.** Reconócelo el mismo día y completa o explica el hueco; una excepción escrita (sin acceso, placa ilegible, cliente rechazó) es aceptable, una silenciosa no.

### Reglas duras

- Nunca dejes que un cliente firme un formulario con una cuota que no has verificado contra el ticket.
- Nunca descuentes ni aumentes una cuota de diagnóstico cotizada por tu propia autoridad.
- Nunca registres equipo o hallazgos solo en notas de texto libre en vez de los campos estructurados.
- Nunca cierres un trabajo sin registrar una recomendación rechazada como recomendación rechazada.

## Calificación de QA {#qa}

| Puntaje | Estándar |
|---|---|
| 2 | Cuota verificada, equipo registrado, formulario completo con lecturas numéricas, fotos tomadas, rechazos registrados, firma obtenida |
| 1 | Formulario y firma presentes pero un elemento delgado — lecturas vagas, foto faltante, o un rechazo sin registrar |
| 0 | Formulario en blanco o faltante, equipo no registrado, o una discrepancia de cuota firmada sin corregir |

## Relacionado

- Registro de equipo completo: `sop.field.equipment-capture`
- Estar ahí a tiempo desde el principio: `sop.field.start-time`
- Qué verifica Despacho al cierre: `sop.dispatch.daily-workflow`
