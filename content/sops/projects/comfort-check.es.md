---
translation_of: sop.projects.comfort-check
source_version: 1
---

# La Revisión de Confort

| | |
|---|---|
| **Propósito** | De diez a catorce días después de la instalación regresamos, verificamos que el sistema esté funcionando y le damos al cliente un espacio para decir cualquier cosa que se haya estado guardando. |
| **Cuándo aplica** | Cada instalación, sin excepción. No es opcional y no es una llamada telefónica. |
| **Responsable** | El Gerente de Proyecto la agenda; un técnico o el instalador líder la realiza. |

## Por qué regresamos {#why}

Un sistema que da lecturas perfectas el día de la instalación puede estar mal dos semanas después — un ducto que silba de noche, un cuarto que nunca llega a temperatura, un drenaje que gotea. Normalmente el cliente no va a llamar por eso. Simplemente se lo va a contar a un vecino. La revisión de confort es como una molestia pequeña se convierte en un detalle corregido y en una reseña de cinco estrellas, en lugar de una disputa de garantía en la segunda temporada.

## Agendada antes de irnos {#booked-early}

La revisión de confort se agenda en el cierre y se le menciona al cliente por su nombre durante el recorrido final de la instalación. Entra al tablero como una cita real, con ventana real, sin costo.

## En la visita {#the-visit}

1. **Pregunta primero, mide después**: "¿Cómo ha estado funcionando? ¿Algo que haya notado — ruido, un cuarto que no queda bien, lo que sea?" Luego quédate callado y déjalo contestar.
2. **Verifica el desempeño**: temperaturas de suministro/retorno, presión estática, carga, consumo de amperaje, combustión donde aplique. Compara contra las lecturas de arranque del día de la instalación — una desviación es un hallazgo.
3. **Revisa la instalación física**: condensado y drenaje, vibración y ruido, sellado y aislamiento, programación del termostato, filtro bien asentado y limpio.
4. **Cuarto por cuarto**: recorre con el cliente los cuartos que mencionó.
5. **Reconfirma lo básico**: medida e intervalo del filtro, ajustes del termostato, términos de la garantía.
6. **Mantenimiento**: si todavía no es miembro, este es el momento natural — `script.sales.membership-enroll`. Si ya lo es, confirma que el primer mantenimiento esté en el calendario.

## Hallazgos {#findings}

Todo lo que se encuentre es responsabilidad nuestra. Corrígelo en el momento cuando se pueda; cuando requiera partes o cuadrilla, agéndalo antes de irte y trátalo como visita de garantía con prioridad — no como un trabajo nuevo en la fila. Nunca dejes un hallazgo descrito solo de palabra; escríbelo en el trabajo con fotos.

## Entonces, y solo entonces, pide la reseña {#review}

Una revisión de confort que termina limpia es el mejor momento que vamos a tener para pedirla. Usa `script.csm.review-request`. Si el cliente está menos que contento, no la pedimos — eso es seguimiento del Gerente de Proyecto, el mismo día.

## Documentado {#documentation}

Las lecturas de la revisión de confort, las fotos, los hallazgos, las correcciones y las palabras propias del cliente van en el trabajo. Ese registro cierra el proyecto — `sop.projects.lifecycle`.

## Relacionado

- Día de instalación y lecturas de arranque: `sop.projects.install-day`
- Cierre: `sop.projects.closeout`
- Guion de reseña: `script.csm.review-request`
