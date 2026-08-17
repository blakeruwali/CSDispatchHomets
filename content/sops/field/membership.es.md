---
translation_of: sop.field.membership
source_version: 1
---

# Membresía en la Puerta

> **Cada visita empieza con una revisión de membresía. El cliente escucha su estatus en voz alta, el beneficio aparece en la factura como una línea, y un no miembro se queda con dos números enfrente.**

## La versión de 90 segundos {#field-card}

1. **Abre el trabajo en ServiceTitan antes de tocar la puerta.** El estatus de membresía está en el registro del cliente. Diez segundos.
2. **Di el estatus en voz alta en la puerta.** "Veo que tiene Home+ — gracias." O, si no es miembro, nada todavía; esa conversación se gana con el diagnóstico.
3. **Aplica el beneficio en la cotización, no en la plática.** Diagnóstico exonerado y descuento de reparación como líneas visibles.
4. **¿Vencida?** Ofrece la reactivación a la misma tarifa *antes* de presentar el precio, nunca después.
5. **¿No es miembro?** Presenta la reparación con dos números — el precio de hoy, y el precio de miembro más el plan. `script.sales.membership-enroll`.
6. **¿Comercial?** Business+ se cotiza por unidad de azotea. Confirma la placa y el acceso, cuenta las unidades, y señala el nivel correcto.
7. **Si dicen que sí, inscríbelo en ServiceTitan en la factura de hoy** y agenda la primera visita incluida antes de salir de la entrada.

## Por qué esto termina en tus manos {#why}

La oficina revisa el estatus al agendar, pero la oficina no es quien tiene la cotización en la mano. Para cuando estás en la mesa de la cocina, el cliente ya olvidó lo que le dijeron por teléfono, y todo beneficio que no ve aplicado es un beneficio que no cree tener.

Dos fallas nos cuestan dinero de verdad, y las dos ocurren en campo:

- **Cotizarle precio completo a un miembro y luego echarse para atrás.** Ahora el cliente sabe que el precio era negociable. Todo lo que sigue es una negociación.
- **Terminar una reparación de $900 para un no miembro sin mostrarle el precio de miembro.** Ese era el mejor momento del año para inscribirlo, y se fue. En una visita de mantenimiento en abril no va a estar igual de motivado.

## Tres estatus, tres comportamientos {#states}

| Estatus | Qué haces |
|---|---|
| **Activo** | Menciónalo en la puerta y agradécelo. Diagnóstico {{price:membership_diagnostic_posture}}. Descuento de reparación aplicado como línea. Agenda el mantenimiento incluido antes de irte si no lo han usado. |
| **Vencido** | Ofrece la reactivación a la misma tarifa — {{price:membership_home_plus_monthly}} residencial — **antes** de presentar el precio de la reparación. Cambia toda la conversación del precio. |
| **No miembro** | Flujo estándar. Diagnostica, comprueba la causa, y luego presenta los dos números. Inscríbelo en la factura de hoy. |

No adivines. Si ServiceTitan es ambiguo o el registro se ve mal, llama a la oficina — no apliques un descuento por corazonada, y tampoco se lo niegues.

## Qué significa "servicio a la medida" en la práctica {#tailored}

Palomear una casilla no es el punto. La visita de un miembro debe verse distinta a la de un no miembro:

- **El descuento es una línea en la cotización.** {{price:membership_home_plus_repair_discount}} mostrado en la cotización, con el número previo al descuento junto a él. Si no pueden ver lo que el plan les ahorró hoy, no les ahorró nada que vayan a recordar en la renovación.
- **El mantenimiento incluido se agenda mientras estás ahí parado.** {{price:membership_home_plus_tuneups}} al año. Un mantenimiento sin usar es una cancelación esperando a ocurrir.
- **El registro del equipo se actualiza.** Los miembros tienen un historial con nosotros; ese historial es lo que hace rápida la siguiente visita — `sop.field.equipment-capture`.
- **Los miembros comerciales llevan registro por escrito.** Premier exige un registro escrito de equipos y asignación de visitas. Captura la placa de cada unidad cubierta, no solo la que te mandaron a ver.

## Comercial: primero cuenta las unidades {#commercial}

Business+ es **por unidad de azotea cubierta**. Antes de cotizar nada:

1. Recorre la azotea y cuenta las RTU cubiertas.
2. Fotografía cada placa.
3. Confirma el acceso al sitio — quién nos abre, y en qué horario.

Después señala el nivel: una unidad, dos visitas al año → Essential. Una unidad que requiere servicio más frecuente, o dos unidades → Premier. Una flotilla, varias ubicaciones, o cualquier cosa fuera de los planes publicados → **no lo cotices.** Levanta la lista de sitios y entrégasela al Gerente de Operaciones para una propuesta Enterprise.

Detalle completo de planes, precios y reglas: `reference.membership-plans`.

## Formas de equivocarse {#failures}

- **"La oficina debió haberlo detectado."** Puede que sí. El cliente igual necesita escucharlo de ti, y la factura igual necesita la línea.
- **Aplicar un beneficio que no existe.** No hay recargo de emergencia ni por fuera de horario para nadie — nunca vendas la membresía como la forma de esquivar uno. Ver `reference.guarantees`.
- **Inscribir de palabra y terminar la inscripción "después".** Si no está en ServiceTitan en la factura de hoy, no ocurrió, al cliente no se le va a cobrar, y el primero en enterarse será el cliente cuando le nieguen un beneficio.
- **Ofrecerle el plan a un inquilino.** No son dueños del sistema. Confirma el perfil primero — `sop.csm.customer-profiles`.
- **Descontar un diagnóstico que ya estaba exonerado.** La exoneración es el beneficio; no se acumula.

## Relacionado

- Beneficios y precios de los planes: `reference.membership-plans`
- Lenguaje de inscripción en la puerta: `script.sales.membership-enroll`
- Revisión de estatus del lado de la oficina: `sop.csm.membership-status`
- Comprobar la causa antes de cotizar: `sop.field.diagnostics`
