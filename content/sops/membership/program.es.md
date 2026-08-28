---
translation_of: sop.membership.program
source_version: 2
---

# Membresía Home+

> **{{price:membership_home_plus_first_year}} el primer año. {{price:membership_home_plus_renewal}} cada año después. Dos sistemas en ambos casos. Todos — técnico, despacho, oficina — dan los mismos dos números.**

## Los dos números {#numbers}

| | |
|---|---|
| **Primer año** | {{price:membership_home_plus_first_year}} |
| **Renovación, del segundo año en adelante** | {{price:membership_home_plus_renewal}} |
| **Sistemas cubiertos** | {{price:membership_home_plus_systems}} |
| **Cada sistema adicional** | {{price:membership_home_plus_extra_system}} |
| **Mantenimiento premium (mejora, no incluido)** | {{price:membership_premium_tuneup}} |

Nunca des una cifra mensual, nunca redondees, nunca digas "como cien dólares". El precio del primer año es la razón por la que dicen que sí; el de renovación es la razón por la que no cancelan sorprendidos un año después. **Di los dos, siempre.** Un miembro que se entera de la renovación al renovar es una cancelación.

## Qué significa "dos sistemas" {#two-systems}

Una membresía cubre **{{price:membership_home_plus_systems}}** — el cliente elige cuáles. Cualquier combinación:

- un sistema de calefacción y uno de enfriamiento (lo que recomendamos), o
- dos de enfriamiento, o
- dos de calefacción.

Recomendamos la pareja calefacción-enfriamiento porque es la que se usa, pero la decisión es del cliente. **Registra en ServiceTitan cuáles dos sistemas quedan cubiertos al inscribirlo.** Una membresía sin sistemas nombrados es un pleito esperando al primer mantenimiento.

Un tercer o cuarto sistema no está cubierto por defecto y cuesta {{price:membership_home_plus_extra_system}} cada uno — ver `sop.membership.upgrades`.

## Qué recibe el miembro {#benefits}

- **{{price:membership_home_plus_tuneups}} mantenimientos regulares** — uno por sistema cubierto. Enfriamiento **antes del verano**, calefacción **antes del invierno**. Cambio de filtros, revisión del sistema, hallazgos por escrito.
- **Diagnóstico y visita: {{price:membership_diagnostic_posture}}.** Todo el año de membresía, en cada visita.
- **{{price:membership_home_plus_repair_discount}} de descuento sobre el total de la factura** en cualquier reparación o reemplazo aprobado.

Esa es la lista. No le agregues nada.

## Mantenimiento regular vs. premium {#tuneups}

La membresía incluye el mantenimiento **regular**. El **premium** es un servicio más profundo y **lo paga el cliente** — {{price:membership_premium_tuneup}} por sistema, o lo que muestre el price book ese día.

- Quiere el regular: **incluido**, sin cargo.
- Quiere el premium: **se le acredita el mantenimiento regular incluido** y paga la diferencia. Dilo así: *"Su mantenimiento incluido se aplica, usted solo cubre la mejora."*
- No miembro: precio completo, sin crédito.
- El {{price:membership_home_plus_repair_discount}} es para **reparaciones y reemplazos** aprobados; no se acumula con el crédito del mantenimiento regular en la misma visita premium.

**Ser miembro no hace gratis ni descontado el mantenimiento premium.** No lo insinúes en la puerta ni al teléfono.

## Qué **no** cubre {#not-covered}

Los mantenimientos son mantenimiento, no reparación. Si la visita descubre una pieza fallada, **la reparación se cotiza y se cobra al precio normal** — con {{price:membership_home_plus_repair_discount}} menos del total y sin cargo de diagnóstico. Nada más cambia.

Tampoco cubre:

- El **mantenimiento premium** — es una mejora, ver arriba.
- Piezas o equipos con algún descuento mayor al {{price:membership_home_plus_repair_discount}}.
- Un tercer o cuarto sistema que no se haya agregado y pagado ({{price:membership_home_plus_extra_system}} cada uno).
- Sistemas en una segunda propiedad. La membresía pertenece a la dirección de la cuenta.

**Nunca vendas la membresía como forma de evitar un recargo de emergencia o fuera de horario.** No existe tal recargo para nadie — ver `reference.guarantees`.

## El descuento, bien aplicado {#discount}

El {{price:membership_home_plus_repair_discount}} se resta del **total de la factura** de una reparación o reemplazo aprobado, y aparece como **línea visible** junto al número previo al descuento. Un "ya le hice un descuento" de palabra no es el beneficio.

El diagnóstico exonerado y el {{price:membership_home_plus_repair_discount}} aplican en la misma visita. El descuento no se aplica a un diagnóstico ya exonerado; la exoneración es el beneficio y no se acumula.


## Quién tiene que saber esto {#who}

| Rol | Qué le toca |
|---|---|
| **Técnico** | Revisa el estatus antes de tocar, aplica el beneficio en la cotización, inscribe no miembros en la factura de hoy — `sop.field.membership` |
| **CSM / oficina** | Da los dos números por teléfono, confirma el estatus al agendar, registra los sistemas cubiertos — `sop.csm.membership-status` |
| **Despacho** | Confirma la postura de cargos antes de mandar al técnico: un miembro activo es {{price:membership_diagnostic_posture}} |

Si alguno de los tres da un número distinto, el cliente escucha a una empresa que no conoce sus propios precios.

## Formas de equivocarse {#failures}

- **Dar el precio del primer año sin el de renovación.** La causa número uno de cancelación en el año dos.
- **Vender una membresía para tres sistemas.** El tercero cuesta {{price:membership_home_plus_extra_system}}. Ver `sop.membership.upgrades`.
- **Dejar los mantenimientos sin agendar.** Agenda el de temporada mientras estás con el cliente.
- **Cobrarle diagnóstico a un miembro.** Devuélvelo en el momento y avísale a Despacho.
- **Inscribir de palabra y terminar "después".** Si no está en ServiceTitan en la factura de hoy, no ocurrió.

## Relacionado

- Agregar un tercer o cuarto sistema: `sop.membership.upgrades`
- Membresía en la puerta: `sop.field.membership`
- Lenguaje de inscripción: `script.sales.membership-enroll`
