---
translation_of: sop.dispatch.daily-workflow
source_version: 2
---

# Flujo de Trabajo Durante el Día — Hora por Hora

> El tablero nunca está "listo". Se trabaja, todo el día, por una persona con nombre.

## Antes de que los técnicos se muevan — abre {{price:dispatch_hours}} {#pre-shift}

1. **Lee el registro nocturno de Posh** y confirma que cada emergencia realmente se despachó, no solo se registró — `sop.csm.coverage`.
2. **Confirma que cada técnico confirmó su primer trabajo — y la hora de inicio que se le dio.** El despacho de la noche anterior lleva la hora real ({{price:first_job_notice}}); a las 7 AM estás confirmando que el técnico lo leyó, no enviándolo. Sin confirmación a las {{price:tech_ack_deadline}} es una llamada telefónica.
3. **Revisa la geografía.** Un primer trabajo en el este de Suffolk a las 8 AM es un arreglo que haces ahora, no al mediodía.
4. **Confirma que las refacciones apartadas ya llegaron** para cualquier trabajo agendado hoy. Un trabajo de refacciones despachado sin la refacción es un horario desperdiciado y un cliente molesto.
5. **Revisa la capacidad del día contra la temporada de emergencias.** Planeamos {{price:tech_daily_capacity}}. Bajo {{price:emergency_temp_cold}} o sobre {{price:emergency_temp_hot}}, deja un horario libre. Se va a usar.

## Mañana — primeras ventanas {#morning}

- **El técnico está en el domicilio al inicio de la ventana**, {{price:first_job_start_default}} para una de 8–10. Salir a las {{price:tech_shift_start}} es el medio, no la promesa.
- **Vigila las llegadas en tiempo real.** El reloj de {{price:arrival_guarantee}} arranca al inicio de la ventana agendada; un técnico que no está en el domicilio al inicio de la ventana es una llamada al cliente **ahora**, con una hora de llegada concreta — no "ya va en camino". Regla completa: `sop.dispatch.hours`.
- **Confirma que cada técnico vea exactamente el siguiente trabajo** y nada más — `sop.dispatch.hours`.
- **Toma las solicitudes del mismo día del CSM.** Apruébalas o recházalas contra `sop.dispatch.priorities`, y responde rápido — el CSM tiene un cliente en la línea. Las ventanas extra ({{price:service_windows_overflow}}) las otorgas tú, nunca las ofrece el CSM.

## Postura de cuota de diagnóstico — el ticket debe estar correcto antes de que el técnico toque la puerta {#diagnostic-fees}

Una cuota de diagnóstico equivocada se descubre en la puerta, frente al cliente, en un formulario que dos personas están a punto de firmar. Es un error que Despacho puede prevenir la noche anterior, no uno que el técnico debe absorber en la entrada. En cada ticket despachado, confirma que la postura de cuota coincida con lo que se le dijo al cliente:

| Postura | Cuota en el ticket | Cuándo aplica |
|---|---|---|
| Residencial estándar | {{price:diagnostic_residential}} | Llamada de servicio residencial por defecto |
| Promoción / descuento | {{price:diagnostic_discounted}} | Solo cuando el CSM la cotizó al agendar — la cuota cotizada es la cuota del formulario |
| Comercial | {{price:diagnostic_commercial}} | Llamada de servicio comercial |
| Miembro activo | Sin costo | {{price:membership_diagnostic_posture}} — verifica el estatus de membresía en el domicilio, no la palabra de quien llama |
| Movido por nosotros | Sin costo | Nosotros movimos el trabajo — {{price:bump_diagnostic_credit}} |
| Fuera de horario | **Igual que estándar** | Sin recargo de emergencia ni fuera de horario, nunca — cotiza el diagnóstico estándar a cualquier hora |
| Estimado de instalación / reemplazo | Gratis | Nunca un diagnóstico en una visita de estimado |

**Si la cuota del ticket no coincide con lo que se le dijo al cliente, corrígela antes de que el técnico vaya en camino.** Un técnico que detecta la diferencia llama a Despacho antes de tocar la puerta — esa llamada solo sirve si alguien contesta y corrige el formulario.

**Lo que Despacho debe esperar al cierre:** el diagnóstico se acredita por completo en el momento en que el cliente aprueba la reparación **o** el reemplazo en esa visita — {{price:diagnostic_credit_on_sale}}. Un equipo que no es reparable sí se cobra — {{price:diagnostic_on_non_repairable}} — con la cuota acreditada si compran el reemplazo. Si un trabajo vendido se cierra con el diagnóstico todavía en la factura, se devuelve, el mismo día.

## Mediodía — la re-planificación {#midday}

Esta es la hora en que el día se salva o se pierde.

1. **Re-pronostica cada trabajo restante** contra horas reales de término, no las agendadas.
2. **Identifica las ventanas en riesgo** — los trabajos de la tarde que no se cumplirán si nada cambia.
3. **Llama a esos clientes antes de que abra su ventana.** Siempre, con una hora concreta. Una cita movida de la que llamamos es un no-evento; una ventana perdida sin llamada es una reseña negativa.
4. **Elige un resultado por trabajo en riesgo** — mantenerlo más tarde hoy, subcontratar, diagnosticar hoy y reparar después, o reagendar a una ventana concreta con {{price:bump_diagnostic_credit}}. La tabla de decisión es `sop.dispatch.job-duration`.
5. **Mueve primero la capa flexible** — afinaciones y mantenimiento, nunca callbacks ni miembros en apuros.
6. **Revisa {{price:same_day_cutoff}}.** Después de esa hora, las reservas del mismo día son decisión exclusiva de Despacho.

## Tarde — cerrando el ciclo {#afternoon}

- **Persigue los trabajos abiertos.** {{price:job_check_in}} sin actualización es una llamada de seguimiento, no una espera.
- **Una instalación de emergencia que llega tarde toma el horario.** Un reemplazo aprobado sin calefacción o sin enfriamiento supera a una llamada de servicio estándar — subcontrata el trabajo desplazado, o reagéndalo a una ventana concreta mañana en una llamada en vivo. Orden y escalación: `sop.dispatch.priorities`.
- **Controla la calidad de cada cierre.** Equipo registrado en el domicilio, formularios completos, fotos presentes — `sop.field.forms`. Un trabajo cerrado incompleto se devuelve al técnico que lo cerró, hoy, no la próxima semana.
- **Rutea el trabajo vendido el mismo día.** Los estimados aprobados van al coordinador de instalación; los rechazados van a la lista de seguimiento, nunca a ningún lado.
- **Los trabajos en espera de refacción reciben una fecha**, no un estatus. "Esperando la refacción" no es un plan que el cliente pueda escuchar.

## Fin del día {#end-of-day}

Ejecuta la lista de cierre en `sop.dispatch.hours` — cada trabajo cerrado o explicado, guardia confirmada, apartados suaves anotados para Posh.

**Y el que siempre se omite:** el primer trabajo de mañana va al técnico antes de las {{price:board_lock}} **con su hora real de inicio**. Si mañana abre a las 9 en vez de las 8, di 9. Un técnico adivinando la hora de inicio es una ventana de 8 AM perdida antes de que el día empiece.

## Los disparadores de escalación {#escalation}

No te quedes con estos. Elévalos al gerente de despacho de inmediato:

| Disparador | Por qué |
|---|---|
| Una emergencia sin técnico disponible | Necesita horas extra o decisión de guardia, ahora |
| Un segundo cambio para el mismo cliente | A punto de volverse una queja |
| Un callback que no se puede cubrir hoy | La falla más costosa que tenemos |
| Un técnico inlocalizable por {{price:tech_unreachable_window}} | Seguridad primero, agenda segundo |
| Sobretiempos repetidos en un tipo de trabajo | Problema de precios o capacitación, no de despacho |

## Qué significa "trabajado todo el día" {#discipline}

Un despachador con nombre es dueño del tablero en cada momento, y un relevo entre despachadores se habla, no se asume. Si el tablero es trabajo de todos durante una tarde ocupada, es de nadie, y los trabajos que se caen son siempre los silenciosos — el de espera de refacción, la afinación movida a "te llamamos", el estimado que nunca llegó al coordinador.

## Relacionados

- Horas y reglas de hora de inicio: `sop.dispatch.hours`
- Qué se mueve primero: `sop.dispatch.priorities`
- Clases de duración, sobretiempos y trabajos movidos: `sop.dispatch.job-duration`
- El estándar de cierre del técnico: `sop.field.forms`
