---
translation_of: sop.field.forms
source_version: 1
---

# Registrar el Equipo y Llenar los Formularios Antes de Cerrar

> **Un trabajo no está terminado cuando la reparación funciona. Está terminado cuando el equipo está registrado y los formularios están llenos.**

## La versión de 60 segundos {#field-card}

Antes de presionar Completado:

1. **Equipo registrado en el domicilio** — cada sistema, con foto de la placa de datos (`sop.field.equipment-capture`).
2. **Formulario del trabajo lleno** — lecturas, hallazgos, lo que hiciste.
3. **Fotos** — antes, después, y cualquier cosa que estés señalando.
4. **Firma del cliente** capturada en el dispositivo.
5. **Recomendaciones registradas**, incluidas las que rechazaron.

**Dos o tres minutos.** Cada uno de ellos sale más barato que la llamada que recibes tres meses después sobre un trabajo que nadie puede reconstruir.

## El equipo va en el domicilio, no en las notas {#equipment}

Este es el error que más cuesta. Las notas son invisibles en la siguiente visita — no se asocian al domicilio, no impulsan el mantenimiento, y no aparecen cuando el CSM agenda la siguiente llamada.

**Cada sistema de la dirección lleva su registro**, no solo el que se descompuso: calefactor *y* condensador, la segunda zona que nadie mencionó, calentador de agua, cabezales mini-split *y* la unidad exterior, cada RTU en una azotea comercial. El estándar completo campo por campo: `sop.field.equipment-capture`.

## El formulario es el diagnóstico, por escrito {#forms}

Cuál formulario depende del tipo de trabajo, y Despacho lo adjunta al despacharlo. Si un trabajo llega sin el formulario correcto, eso es una llamada a Despacho — no una razón para saltárselo.

| Tipo de trabajo | El formulario debe contener |
|---|---|
| Diagnóstico | Síntoma como se encontró, lecturas tomadas, causa raíz, opciones presentadas |
| Reparación | Pieza reemplazada, lecturas antes y después, estado de garantía de la pieza |
| Mantenimiento | Lista completa, todas las lecturas, medida y estado del filtro |
| Instalación | Lecturas de puesta en marcha, lista de arranque, registro de garantía enviado |
| Visita de regreso | Qué hizo la visita anterior, qué estaba mal en realidad, por qué se repitió |

**Las lecturas son números, no adjetivos.** "La carga se veía bien" no es una lectura. Subcooling y superheat, presión estática, diferencial de temperatura, amperaje, números de combustión — lo que pida el formulario, con el valor. Dentro de seis meses el número es evidencia y el adjetivo no es nada.

## Fotos {#photos}

- **Antes** — lo que encontraste, en su lugar.
- **Después** — cómo lo dejaste.
- **La placa de datos** — de cada unidad.
- **Cualquier cosa que estés señalando** — óxido, quemaduras, una charola rota, una instalación insegura que hizo alguien más.

La foto de un problema preexistente termina la discusión cuando un cliente dice que no estaba así antes de que llegaras. Te protege a ti al menos tanto como a la empresa.

## Registra lo que rechazaron {#declined}

La recomendación a la que el cliente dijo que no es la línea más valiosa del expediente. Es la llamada de seguimiento, la siguiente cotización, y la razón por la que el CSM no suena sorprendido cuando ese mismo sistema falle en noviembre.

Escribe **qué recomendaste, el precio que diste, y su motivo para rechazarlo.** "Cliente rechazó" a secas no le dice nada a la siguiente persona.

## Por qué existe el filtro al cerrar {#enforcement}

- **Despacho revisa la calidad de cada cierre.** Trabajo realizado sin equipo registrado, o con un formulario en blanco, se le regresa al técnico que lo cerró — el mismo día (`sop.dispatch.daily-workflow`).
- **Se revisa en el uno a uno semanal**, junto a la tasa de visitas de regreso. Las dos cosas están relacionadas y esa conexión es el punto.
- **Una excepción legítima está bien cuando queda escrita.** Sin acceso, el cliente no dejó subir al ático, placa ilegible — dilo. Un hueco explicado es un registro. Un hueco silencioso es un defecto.
- **Esta página se firma** (`governance.acknowledgement`).

## Relacionado

- El registro de equipos completo: `sop.field.equipment-capture`
- Estar ahí a tiempo, para empezar: `sop.field.start-time`
- Qué revisa Despacho al cerrar: `sop.dispatch.daily-workflow`
