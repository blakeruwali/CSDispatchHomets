---
translation_of: sop.insurance.claims
source_version: 1
---

# Seguros y garantías del hogar — cómo se maneja la visita

> **Nosotros diagnosticamos, cotizamos y documentamos. La aseguradora decide. Nunca somos la aseguradora del cliente y nunca esperamos a un reclamo para cobrar un trabajo ya realizado.**

Un cliente con reclamo es un cliente normal con un paso extra: alguien más tiene que aprobar el dinero. Eso cambia el papeleo. No cambia el diagnóstico, el precio ni la tarifa.

## Qué cubre esto {#scope}

Cualquier trabajo donde el cliente dice:

- "Quiero usar el seguro de mi casa."
- "Esto lo debería cubrir mi garantía del hogar" (AHS, Choice, First American, Cinch).
- "Mi ajustador necesita un estimado."
- "¿Puede escribirlo para que el seguro lo pague?"

**Un ejemplo real.** Kate Kim, viernes por la mañana. Diagnóstico en un mini-split LG. Hallazgo: se requiere mantenimiento y hay que reemplazar la **tarjeta de control interior**. La clienta decidió reclamar con su seguro en lugar de pagar de su bolsillo. Cobramos el diagnóstico, escribimos un estimado detallado y gratuito por la tarjeta más el mantenimiento, y lo enviamos el mismo día.

## La regla de la tarifa — dígala antes de salir de la casa {#fee}

| Situación | Diagnóstico |
|---|---|
| Reparación aprobada **y realizada en la misma visita** | **Se acredita completo** — se descuenta de la factura |
| El cliente espera a la aseguradora y firma después; volvemos otro día | **Se cobra y se queda cobrado.** No se acredita en el regreso |
| Tenemos que volver **por culpa nuestra** — pieza equivocada, pieza no estaba en el camión, se acabó el día, error de programación | **Se acredita.** El viaje de regreso es costo nuestro |
| Unidad no reparable y el cliente compra el reemplazo con nosotros | Se acredita al reemplazo |
| Reclamo negado y el cliente se retira | Se cobra. El diagnóstico ya se hizo |

**Textual, en la mesa del cliente:**

> "El diagnóstico de {{price:diagnostic_residential}} se acredita si hacemos la reparación hoy. Si prefiere esperar a su seguro, no hay ningún problema — pero el diagnóstico queda en la factura de hoy, porque esa visita ya ocurrió. Cuando el reclamo sea aprobado, programamos la reparación al mismo precio que ve aquí."

**Nunca diga** "después lo vemos", "vamos a ver qué podemos hacer" ni "arreglamos la tarifa cuando salga el reclamo".

Solo un **gerente** puede exonerar la tarifa fuera de la tabla de arriba — igual que en `sop.csm.diagnostic-fee`.

## En sitio {#on-site}

1. **Diagnostique como siempre.** Un reclamo no acorta el diagnóstico; lo alarga, porque el estimado tiene que resistir la lectura de un ajustador.
2. **Escanee la placa de datos.** Marca, modelo, serie y el componente fallado. `sop.field.equipment-capture` aplica sin excepción: un estimado sin número de serie se rechaza.
3. **Fotografíe la falla.** La pieza dañada, la placa, la ubicación y cualquier causa visible (sobretensión, agua, corrosión, roedores). Las fotos van en ServiceTitan.
4. **Escriba la causa en palabras claras** en las notas: qué falló, por qué falló y si es reparable.
5. **Cotice al precio normal.** Sin precio "de seguro", sin inflar.
6. **Cobre el diagnóstico antes de irse**, según la tabla.

## Expectativas del cliente {#expectation}

Diga las cuatro en voz alta:

- **"Nosotros no presentamos el reclamo por usted."**
- **"No facturamos directo a su seguro."** El cliente nos paga y la aseguradora le reembolsa. (Las garantías del hogar que autorizan una orden por adelantado son la excepción — vea `sop.insurance.invoicing`.)
- **"La cobertura es entre usted y su aseguradora."** Nunca prediga si algo será cubierto.
- **"El estimado es gratis. Lo que pagó hoy es el diagnóstico."**

## Entregar el estimado {#estimate}

- El estimado escrito es **{{price:insurance_estimate_fee}}**.
- Sale **{{price:insurance_estimate_delivery}}** — por correo **y** por texto.
- Detallado: equipo/pieza, mano de obra, mantenimiento, impuesto — en líneas separadas. Los ajustadores rechazan las sumas globales.
- Con membrete, número de licencia, dirección del servicio, fecha del servicio y nombre del técnico.
- Copie al ajustador solo si el cliente lo pide y da la dirección por escrito.

## Seguimiento {#followup}

| Día | Acción |
|---|---|
| Día 3 | Llamada: "¿Ya le respondió el ajustador?" Registre la respuesta |
| Día 7 | Llamada + texto. Ofrezca responder preguntas del ajustador |
| Día 14 | Última llamada. Aprobado → se agenda. Negado → presente la reparación por sus propios méritos y ofrezca financiamiento |

Después del día 14 el cliente pasa a nurture, igual que un estimado sin cerrar — `sop.leads.estimate-cancellation-rescue`.

## Cuando el reclamo se aprueba {#approved}

- Agende la reparación como **cita nueva**, nunca como trabajo reanudado. No se pausa el trabajo original — `sop.dispatch.no-pause`.
- Reconfirme el precio. Si el costo de la pieza cambió, avísele por escrito antes de la visita.
- El diagnóstico de la primera visita **sigue cobrado**, salvo que esa visita haya vendido el trabajo.
- Cierre el trabajo el mismo día con la factura que el cliente necesita para su reembolso.

## Lo que nunca hacemos {#never}

- Nunca inflar un estimado para cubrir el deducible. Eso es fraude.
- Nunca escribir dos estimados con dos precios para el mismo alcance.
- Nunca cambiar la fecha de una factura.
- Nunca describir desgaste normal como daño por tormenta o sobretensión.
- Nunca dejar que el cliente nos diga cuál fue la causa. Los hallazgos son del técnico.

Cualquier petición de este tipo se escala al **dueño** el mismo día. `{{price:insurance_claim_authority}}` para todo lo que reescriba una factura.
