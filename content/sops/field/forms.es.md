---
translation_of: sop.field.forms
source_version: 2
---

# Registrar el Equipo y Llenar los Formularios Antes de Cerrar

> **Un trabajo no está terminado cuando la reparación funciona. Está terminado cuando el equipo está registrado y los formularios están llenos.**

## La versión de 60 segundos {#field-card}

Antes de presionar Completado:

1. **Verifica que la cuota de diagnóstico en el formulario sea la que se le cotizó al cliente** — {{price:diagnostic_residential}}, {{price:diagnostic_discounted}} o {{price:diagnostic_commercial}}.
2. **Equipo registrado en el domicilio** — cada sistema, con foto de la placa de datos (`sop.field.equipment-capture`).
3. **Formulario del trabajo lleno** — lecturas, hallazgos, lo que hiciste.
4. **Fotos** — antes, después, y cualquier cosa que estés señalando.
5. **Si compraron la reparación o el reemplazo, la cuota de diagnóstico se quita de la factura.**
6. **Firma del cliente** capturada en el dispositivo.
7. **Recomendaciones registradas**, incluidas las que rechazaron.

**Dos o tres minutos.** Cada uno de ellos sale más barato que la llamada que recibes tres meses después sobre un trabajo que nadie puede reconstruir.

## La cuota de diagnóstico correcta, antes de que alguien firme {#fee-accuracy}

> **La cuota en el formulario debe ser la que se le dijo al cliente por teléfono. Verifícala antes de tocar la puerta, no después de que firmen.**

La cuota no siempre es el mismo número:

| Situación | Cuota en el formulario |
|---|---|
| Llamada de reparación residencial estándar | {{price:diagnostic_residential}} |
| Llamada con promoción / descuento cotizado por el CSM | {{price:diagnostic_discounted}} |
| Comercial | {{price:diagnostic_commercial}} |
| Miembro activo | {{price:membership_diagnostic_posture}} — confirma el estatus primero (`sop.field.membership`) |
| Nosotros movimos a este cliente de un día anterior | Sin costo — {{price:bump_diagnostic_credit}} |

**Dónde verificarlo:** el campo de postura de cuota en el ticket, capturado por el CSM al agendar (`sop.csm.ticket-standards`). Léelo en la camioneta antes de bajarte.

**Si la cuota del formulario no coincide con el ticket, llama a Despacho y corrígela antes de presentar cualquier cosa.** Un formulario firmado con el número equivocado es la peor versión de este problema — el cliente firmó un precio y ve otro, y una buena visita se vuelve una disputa de facturación que perdemos. Nadie firma un formulario que no revisaste.

**Nunca cambies tú la cuota cotizada.** Ni la descuentas ni la subes. Si el cliente dice que le dijeron otro número, créele, respeta el número que le dijeron y anótalo — Despacho o el CSM arreglan el registro.

## El equipo va en el domicilio, no en las notas {#equipment}

Este es el error que más cuesta. Las notas son invisibles en la siguiente visita — no se asocian al domicilio, no impulsan el mantenimiento, y no aparecen cuando el CSM agenda la siguiente llamada.

**Cada sistema de la dirección lleva su registro**, no solo el que se descompuso: calefactor *y* condensador, la segunda zona que nadie mencionó, calentador de agua, cabezales mini-split *y* la unidad exterior, cada RTU en una azotea comercial. El estándar completo campo por campo: `sop.field.equipment-capture`.

**Cada tipo de trabajo, sin excepción** — diagnóstico, mantenimiento, reparación, estimado, instalación, visita de regreso, garantía. No hay visita donde registrar el equipo sea opcional. El mantenimiento de hoy es la reclamación de garantía, el recordatorio anual y la cotización de reemplazo del año que viene, y las tres fallan si el modelo y el número de serie no están en el sistema.

## Cuándo se acredita el diagnóstico {#credit}

Le decimos a cada cliente: **si aprueba el trabajo hoy, el diagnóstico se le quita.** Esa promesa solo se cumple si tú lo quitas de la factura.

- Reparación aprobada en esta visita → quita la línea del diagnóstico antes de que el cliente firme.
- Reemplazo aprobado en esta visita → igual, el diagnóstico se acredita al reemplazo.
- El cliente rechaza todo → el diagnóstico se cobra completo, como se cotizó.

El crédito ocurre en la factura, en la puerta, no "en la próxima". Un cliente al que le cobramos una cuota que dijimos que quitaríamos va a llamar, y va a tener razón.

## Sistemas viejos y el hallazgo de "no reparable" {#non-repairable}

Los equipos de quince o veinte años con frecuencia no vale la pena repararlos, y a veces no se pueden reparar. Eso **no** hace que la visita sea gratis.

1. **Diagnostícalo bien de todos modos.** Lecturas, hallazgos y la razón por la que no es reparable, en el formulario. "Está viejo" no es un diagnóstico.
2. **El diagnóstico se cobra** — {{price:diagnostic_on_non_repairable}}. Invertiste de 45 a 60 minutos en llegar a la respuesta, y la respuesta es lo que el cliente pagó.
3. **El estimado de reemplazo es gratis** ({{price:estimate_install}}) y se presenta en la misma visita — bueno / mejor / el mejor (`sop.sales.good-better-best`).
4. **Si aprueban el reemplazo, el diagnóstico se acredita** — la misma promesa que en cualquier reparación.
5. **Fotografía la evidencia**: la placa de datos con la antigüedad, el componente fallado, el óxido o el intercambiador de calor agrietado. Eso es lo que hace creíble la conversación de reemplazo.

Dilo claro en la puerta, antes de empezar:

> "Hay una cuota de diagnóstico para saber exactamente qué está fallando. Si tiene reparación, le doy el precio; si no la tiene, le muestro por qué y le doy el precio del reemplazo — de cualquier forma, si avanza hoy, la cuota de diagnóstico se le quita."

Esa frase es la que evita la llamada de "me cobraron nada más por decirme que ya no sirve".


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
