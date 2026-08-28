---
translation_of: sop.membership.upgrades
source_version: 1
---

# Agregar Sistemas y Mejorar la Membresía

> **Una membresía cubre {{price:membership_home_plus_systems}}. El sistema tres cuesta {{price:membership_home_plus_extra_system}}, el cuatro otro {{price:membership_home_plus_extra_system}}, y ninguno recibe mantenimiento hasta que esté en la cuenta.**

## Cuándo aparece esto {#when}

Tres momentos, los tres en campo o al teléfono:

1. **Al inscribir** — la casa tiene más de dos sistemas. Cuéntalos antes de escribir la membresía.
2. **En un mantenimiento** — el técnico encuentra un sistema que nadie mencionó, o el cliente pregunta por qué no se lo atienden.
3. **En la renovación** — agregaron un mini-split, terminaron un sótano, o cambiaron un sistema por dos.

## La regla {#rule}

- Una membresía = **{{price:membership_home_plus_systems}}**, cualquier combinación de calefacción y enfriamiento.
- Cada sistema adicional = **{{price:membership_home_plus_extra_system}}**, agregado a la membresía.
- El cargo por sistema adicional aplica **el primer año y en cada renovación**. No es un cargo único.
- Cada sistema agregado trae su propio mantenimiento, su diagnóstico exonerado y el mismo {{price:membership_home_plus_repair_discount}} en trabajo aprobado.

Así, una casa con cuatro sistemas paga {{price:membership_home_plus_first_year}} más dos × {{price:membership_home_plus_extra_system}} el primer año, y {{price:membership_home_plus_renewal}} más dos × {{price:membership_home_plus_extra_system}} en la renovación. Haz esa cuenta **en voz alta, frente al cliente**, y escribe el total en la factura.

## Cuenta los sistemas antes de vender {#count}

Nunca inscribas por descripción. Recorre:

1. Cuenta las unidades **interiores** — calderas, manejadoras, boilers, cabezales mini-split agrupados por su unidad exterior.
2. Cuenta las **exteriores** — condensadores, bombas de calor.
3. Una bomba de calor que enfría y calienta es **un sistema**, no dos.
4. Escanea o fotografía cada placa, cubierta o no — `sop.field.equipment-capture`.
5. Repite la cuenta: *"Entonces quedan cubiertos la caldera y el aire de arriba, y la unidad del sótano sería el tercer sistema, {{price:membership_home_plus_extra_system}}."*

## Qué decir {#script}

**Al inscribir, tres sistemas:**

> "La membresía cubre dos sistemas por {{price:membership_home_plus_first_year}} el primer año — normalmente la caldera y el aire. Usted tiene una tercera unidad abajo. Esa se agrega por {{price:membership_home_plus_extra_system}}, y también recibe su mantenimiento y las visitas sin cargo. ¿Se las pongo las tres?"

**En un mantenimiento, sistema no cubierto:**

> "Vi que la unidad del ático no está en su membresía, así que hoy no puedo darle servicio. Puedo agregarla por {{price:membership_home_plus_extra_system}} y atenderla en esta misma visita; si no, queda fuera del plan."

**En la renovación, cambiaron los sistemas:**

> "Su renovación es {{price:membership_home_plus_renewal}} por los dos sistemas. Agregó el mini-split en primavera — incluirlo lo deja en [total]. ¿Lo agrego?"

**Si lo rechazan:** está bien. Anótalo en ServiceTitan como *rechazado*, no des servicio a ese sistema y no exoneres su diagnóstico. Vuelve a ofrecerlo en la renovación.

## Qué tiene que quedar en ServiceTitan {#servicetitan}

Nada se agrega de palabra. Antes de irte o colgar:

- El sistema adicional está en el registro de la membresía, con su equipo y el escaneo de la placa.
- El cargo de {{price:membership_home_plus_extra_system}} está en la factura de hoy.
- El mantenimiento extra está agendado, o el cliente sabe cuándo será.
- El monto de renovación está actualizado.

Si no queda registrado, el técnico de la próxima temporada se negará a atender un sistema que el cliente cree haber pagado.

## Bajas y equipos reemplazados {#downgrades}

- **Un sistema se retira o se reemplaza uno por uno:** la cuenta no cambia. Actualiza el equipo, no el precio.
- **Dos sistemas reemplazados por uno:** quita el cargo adicional en la *siguiente renovación*, no a mitad del término. No hay reembolsos a mitad de término una vez usado su mantenimiento.
- **El cliente quiere quitar un sistema para ahorrar:** ofrécelo, anótalo, y sé claro — ese sistema pierde su mantenimiento, su diagnóstico exonerado y su {{price:membership_home_plus_repair_discount}}.

## Formas de equivocarse {#failures}

- **Atender un sistema no cubierto "de favor."** Le enseña al cliente que el cargo es opcional.
- **Tratar el {{price:membership_home_plus_extra_system}} como cargo de primer año.** Se repite en la renovación. Dilo al vender.
- **Dar un total de memoria.** Hazlo en papel frente al cliente.
- **Agregar el sistema sin el registro de equipo.** Queda sin historial, sin garantía y sin mantenimiento agendado.

## Relacionado

- Costo y cobertura del plan: `sop.membership.program`
- Membresía en la puerta: `sop.field.membership`
- Escaneo de equipos: `sop.field.equipment-capture`
