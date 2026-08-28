---
id: sop.membership.proposal
title: Cómo Preparar una Propuesta de Membresía — Del Estudio Gratuito al Plan Firmado
department: ops
owner: owner
status: published
version: 1
last_reviewed: 2026-08-28
review_cadence_days: 90
tags: [membresia, propuesta, estudio-sitio, estimado-gratis, home-plus, business-plus, comercial, opciones, seguimiento]
related: [sop.membership.program, sop.membership.upgrades, reference.membership-plans, sop.field.membership, sop.csm.membership-status, script.sales.membership-enroll, pricing.tokens]
section: membership-program
order: 3
surfaces: [membership, field, csm, dispatch]
acknowledgement: required
---

# Cómo Preparar una Propuesta de Membresía

> **Nadie compra un plan de mantenimiento por teléfono a partir de una suposición. Visitamos la propiedad gratis, construimos {{price:membership_proposal_options}} opciones por escrito basadas en el equipo que realmente vimos, enviamos la propuesta por correo **y** por mensaje de texto dentro de {{price:membership_proposal_delivery_hours}}, y luego llamamos para explicar la opción que el cliente prefirió.**

## Los cinco pasos {#steps}

1. **Califique la propiedad** — residencial o comercial, cuántos sistemas, qué condado. Eso decide Home+ o Business+.
2. **Agende el estudio gratuito.** {{price:membership_survey_fee}}. No cotizamos un plan sin ver el equipo.
3. **Haga el estudio e inventarío del equipo** — escanee cada placa de datos, cuente sistemas o unidades de azotea, anote el acceso.
4. **Construya {{price:membership_proposal_options}} opciones** y envíelas por **correo y mensaje de texto** dentro de {{price:membership_proposal_delivery_hours}}.
5. **Llame dentro de {{price:membership_proposal_call_hours}}** de haber enviado la propuesta y explique la opción elegida.

## Paso 1 — Residencial o comercial {#qualify}

| Respuesta | Camino |
|---|---|
| Casa, condominio, ocupada por el dueño | **Home+** — Comfort o Infinite, según los sistemas cubiertos |
| Tienda, oficina, almacén, restaurante, unidades de azotea | **Business+** — Essential, Premier o Enterprise, por unidad de azotea calificada |
| Arrendador, HOA, administrador, inquilino | Confirme quién es dueño del equipo y quién paga — `sop.csm.customer-profiles` |

Business+ es para unidades de azotea comerciales ligeras en el condado de Nassau. Sistemas divididos, mini-splits, calderas y equipos mayores requieren un **alcance escrito personalizado**, nunca un plan publicado.

## Paso 2 — El estudio gratuito {#survey}

**Si el cliente no quiere pagar una cuota de diagnóstico para hablar de un plan, está bien — el estudio es gratis.** Dígalo claramente:

> "No hay ningún cargo por esto. No puedo armarle un plan honesto sin ver lo que tiene, así que vamos, inventariamos el equipo y le ponemos las opciones por escrito. Si encontramos algo dañado, se lo diré antes de tocarlo — diagnosticar una falla es una visita aparte con su propia cuota."

Dos límites firmes:

- **{{price:membership_survey_fee}} cubre solo el estudio y la propuesta escrita.**
- **No es un diagnóstico gratis.** Si el cliente quiere que encontremos una *falla*, eso es una visita de diagnóstico con la cuota estándar (`sop.csm.diagnostic-fee`).

## Paso 3 — Qué debe capturar el estudio {#capture}

Escanee las placas de datos — `sop.field.equipment-capture`.

**Residencial**
- Cada sistema de calefacción y enfriamiento: marca, modelo, serie, edad
- Qué sistemas quiere cubrir el cliente (el plan cubre {{price:membership_home_plus_systems}}; cada extra cuesta {{price:membership_home_plus_extra_system}})
- Condición y cualquier reparación esperada este año
- Tamaño y ubicación de los filtros

**Comercial**
- Etiqueta, marca, modelo, serie, zona e historial de **cada** unidad de azotea
- Conteo total de unidades — la primera va incluida, cada adicional cuesta {{price:membership_business_plus_extra_rtu}}
- Acceso al techo: quién abre, en qué horario, escalera o escotilla, si requiere escolta
- Responsabilidad de los filtros, por escrito

## Paso 4 — Siempre tres opciones {#options}

Cada propuesta muestra **{{price:membership_proposal_options}} opciones** lado a lado, la más económica a la izquierda. Una opción es un precio; tres opciones son una decisión.

**Residencial (Home+)**

| | Buena | Mejor | La Mejor |
|---|---|---|---|
| Plan | Comfort, {{price:membership_home_plus_systems}} | Comfort + sistemas adicionales a {{price:membership_home_plus_extra_system}} c/u | Home+ Infinite |
| Precio | {{price:membership_home_plus_first_year}} primer año, {{price:membership_home_plus_renewal}} después | Precio Comfort más cada sistema extra | {{price:membership_infinite_price}} |
| Descuento | {{price:membership_home_plus_repair_discount}} | {{price:membership_home_plus_repair_discount}} | {{price:membership_infinite_discount}} + crédito de {{price:membership_infinite_credit}} |
| Diagnóstico | {{price:membership_diagnostic_posture}} | {{price:membership_diagnostic_posture}} | Gratis siempre |

Recomiende Infinite **solo** cuando el estudio encontró una reparación grande o un reemplazo probable este año.

**Comercial (Business+)**

| | Buena | Mejor | La Mejor |
|---|---|---|---|
| Plan | Essential | Premier | Enterprise |
| Precio | {{price:membership_business_plus_essential_initial}} primer año, {{price:membership_business_plus_essential_renewal}} renovación | {{price:membership_business_plus_premier_initial}} primer año, {{price:membership_business_plus_premier_renewal}} renovación | {{price:membership_business_plus_enterprise}} |
| Visitas | {{price:membership_business_plus_essential_visits}} por año | {{price:membership_business_plus_premier_visits}} asignaciones | Según la propuesta |
| Descuento | {{price:membership_business_plus_essential_discount}} | {{price:membership_business_plus_premier_discount}} | Según la propuesta |
| Unidades extra | {{price:membership_business_plus_extra_rtu}} c/u | {{price:membership_business_plus_extra_rtu}} c/u | Inventariadas en el alcance |

Toda propuesta comercial indica la **lista de equipos, las visitas por unidad, las exclusiones y el precio de renovación**.

## Paso 5 — Envíela, luego llame {#deliver}

Dentro de **{{price:membership_proposal_delivery_hours}}** del estudio, envíe la misma propuesta **dos veces**:

- **Correo electrónico** — la propuesta completa con las {{price:membership_proposal_options}} opciones.
- **Mensaje de texto** — corto, con el enlace:

> "Hola {nombre}, le habla {técnico} de Home+ Air & Heat. Gracias por el recorrido de hoy — le envié por correo {{price:membership_proposal_options}} opciones de plan para su {equipo}. Aquí está el enlace: {url}. Lo llamo en un rato para explicárselas."

Luego **llame dentro de {{price:membership_proposal_call_hours}}**. La llamada no es "¿lo recibió?" — es la presentación:

1. Confirme lo que encontramos en sitio.
2. Repase las tres opciones y deténgase en la que prefirió.
3. Diga el precio del primer año **y** el de renovación en voz alta. Siempre los dos.
4. Pida la inscripción: *"¿Le doy de alta hoy en el plan {plan}?"*
5. Inscríbalo en ServiceTitan de inmediato y **agende la primera visita antes de colgar.**

## Si no contestan {#followup}

Dé seguimiento en **{{price:membership_proposal_followup_days}}**, alternando llamada y texto. Después del tercer intento, pase al cliente a seguimiento de temporada (`sop.csm.seasonal-outreach`). No siga marcando y no descuente el plan para cerrarlo.

## Errores comunes {#failures}

- **Cotizar un plan sin estudio.**
- **Dejar que el estudio gratuito se convierta en un diagnóstico gratuito.**
- **Enviar una sola opción.**
- **Enviar solo correo.** Los textos sí se leen. Envíe ambos.
- **Enviar y esperar.** La venta ocurre en la llamada.
- **Cotizar un plan Business+ publicado para equipo que no es de azotea.**
- **Omitir el precio de renovación.**
- **Inscribir verbalmente.** Si no está en ServiceTitan hoy, no pasó.

## Relacionado

- Precios y beneficios: `reference.membership-plans`
- Qué cuesta y qué cubre Home+: `sop.membership.program`
- Agregar sistemas: `sop.membership.upgrades`
- Membresía en la puerta: `sop.field.membership`
