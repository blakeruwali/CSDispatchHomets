---
translation_of: sop.field.membership
source_version: 2
---

# Membresía en la Puerta — Verifícala Antes de Tocar

> **Cada visita empieza con una verificación de membresía antes de tocar la puerta, y la visita misma se ve diferente según la respuesta.**

## Cuándo aplica {#applies}

Cada visita residencial y comercial, antes de bajar del camión. Aplica si el trabajo es un diagnóstico, una reparación, una afinación, o un estimado — el estatus de membresía cambia la postura de la cuota, el descuento, y lo que se ofrece, en cada uno de esos tipos de trabajo.

## La escalera de ejecución {#execution}

1. **Abre el trabajo en ServiceTitan antes de tocar.** El estatus de membresía vive en el registro del cliente — diez segundos.
2. **Si está activa, di el estatus en voz alta en la puerta y agradece.** No esperes hasta la factura para reconocerlo.
3. **Si está vencida, ofrece la reinstalación a la tarifa actual antes de presentar cualquier precio de reparación** — el orden importa, cambia toda la conversación.
4. **Si no es miembro, no digas nada de eso todavía.** Diagnostica primero, gánate la conversación con la prueba del problema.
5. **Aplica cada beneficio como una línea visible en el estimado** — diagnóstico condonado, descuento en reparación — nunca como un ajuste solo verbal.
6. **Para una reparación de no-miembro, presenta dos números**: el precio de hoy, y el precio de miembro más el plan, usando `script.sales.membership-enroll`.
7. **Para comercial, cuenta las unidades de azotea y fotografía las placas antes de cotizar nada** — Business+ cobra por unidad.
8. **Si se inscriben, pon eso en ServiceTitan en la factura de hoy y agenda la primera visita incluida antes de salir del domicilio.** Una inscripción verbal que no está en el sistema no ocurrió.

## Qué dices {#verbatim}

A un miembro activo, en la puerta:

> "Veo que está en Home+ — gracias por eso, es por lo que no hay cargo por mi visita de hoy."

A un miembro vencido, antes de presentar un precio de reparación:

> "Parece que su membresía venció — podemos reactivarla a la misma tarifa antes de que cotice esto, y va a cambiar el número que está por ver."

A un no-miembro después de diagnosticar:

> "Esto cuesta hoy como reparación única, y esto cuesta como miembro — el plan se paga solo con este trabajo."

## Ejemplo trabajado {#example}

**Débil:** El técnico no verifica el estatus, le cotiza a un miembro el precio completo de no-miembro en la mesa, y luego tiene que "retractarse" cuando el cliente menciona su plan. El cliente ahora asume que todos los precios aquí son negociables.

**Perfecto:** El técnico verifica el registro en el camión, abre con "veo que está en Home+, gracias," diagnostica el problema, y presenta la reparación con el descuento del 10% de Comfort ya aplicado como línea junto al número sin descuento. El cliente ve exactamente cuánto ahorró con el plan y agenda su afinación de temporada sin usar antes de que el técnico se vaya.

| | Débil | Perfecto |
|---|---|---|
| Estatus verificado | No verificado | Verificado antes de tocar |
| Visibilidad del descuento | Corrección verbal tras la queja | Línea en el estimado |
| Afinación incluida | Nunca mencionada | Agendada en el momento |
| Confianza en los precios | Dañada | Reforzada |

## Cuando algo sale mal {#failures}

- **El estatus en ServiceTitan se ve ambiguo o incorrecto.** Llama a la oficina. No apliques un descuento por corazonada ni lo niegues por corazonada tampoco — una mala suposición en cualquier dirección cuesta confianza o cuesta dinero.
- **Terminas una reparación grande de no-miembro y olvidas ofrecer la membresía.** Ese fue el mejor momento del año para inscribirlo; no va a estar ni remotamente tan motivado en frío en una llamada de mantenimiento. Construye la presentación de dos números en cada estimado de no-miembro para que nunca dependa de acordarte.
- **Un inquilino, no el propietario, está en la puerta.** Confirma el perfil del cliente antes de ofrecer nada — un inquilino no puede inscribir un sistema que no le pertenece (`sop.csm.customer-profiles`).
- **El sitio comercial resulta ser una flota o cuenta multi-ubicación.** No cotices un nivel. Captura la lista de sitios y las placas y entrégalas al Gerente de Operaciones para una propuesta Enterprise.

### Reglas duras

- Nunca le cotices a un miembro el precio completo y "te retractes" después.
- Nunca vendas la membresía como forma de evitar un recargo fuera de horario o de emergencia — no existe tal recargo (`reference.guarantees`).
- Nunca apiles un descuento de membresía sobre un diagnóstico ya condonado.
- Nunca dejes una inscripción solo verbal — si no está en la factura de hoy en ServiceTitan, el cliente no está cubierto.

## Calificación de QA {#qa}

| Puntaje | Estándar |
|---|---|
| 2 | Estatus verificado antes de tocar, reconocido o aprovechado correctamente, descuento mostrado como línea, inscripción (si la hay) registrada en la misma visita |
| 1 | Estatus verificado pero aplicado tarde o solo verbalmente, o una reparación de no-miembro cerrada sin la presentación de dos números |
| 0 | Estatus no verificado, un beneficio mal aplicado o mal negado, o una inscripción prometida nunca registrada en ServiceTitan |

## Relacionado

- Beneficios y precios del plan: `reference.membership-plans`
- Lenguaje de inscripción en la puerta: `script.sales.membership-enroll`
- Verificación de estatus del lado de oficina: `sop.csm.membership-status`
- Probar la causa antes de cotizar: `sop.field.diagnostics`
