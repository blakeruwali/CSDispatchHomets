---
translation_of: sop.dispatch.daily-workflow
source_version: 3
---

# Flujo de Trabajo Durante el Día — Hora por Hora

> **El tablero nunca está "listo". Se trabaja, todo el día, por una persona con nombre, desde antes de que salga el primer camión hasta después de que se cierra el último trabajo.**

## Cuándo aplica {#applies}

Todos los días que Despacho opera, desde la revisión del tablero antes del turno hasta el cierre de fin de día. Es la columna de la que dependen los demás SOP de despacho — llamadas prioritarias (`sop.dispatch.priorities`), decisiones de duración y sobretiempo (`sop.dispatch.job-duration`), y la ventana de cobertura misma (`sop.dispatch.hours`) — todo ocurre en un punto específico de la forma hora por hora que sigue.

## La escalera de ejecución {#execution}

**Antes del turno, antes de que abra {{price:dispatch_hours}}**

1. Lee el registro nocturno de Posh y confirma que cada emergencia realmente se despachó, no solo se registró (`sop.csm.coverage`).
2. Confirma que cada técnico confirmó su primer trabajo y su hora de inicio — la hora real salió la noche anterior ({{price:first_job_notice}}); a las 7 AM estás confirmando que la leyeron. Sin confirmación para las {{price:tech_ack_deadline}} es una llamada telefónica.
3. Revisa la geografía con sentido común — un primer trabajo en el este de Suffolk a las 8 AM es un arreglo que haces ahora, no al mediodía.
4. Confirma que las refacciones apartadas ya llegaron para cualquier trabajo agendado hoy. Un trabajo de refacciones despachado sin la refacción es un horario desperdiciado y un cliente molesto.
5. Revisa la capacidad del día contra la temporada de emergencias — planeamos {{price:tech_daily_capacity}}; bajo {{price:emergency_temp_cold}} o sobre {{price:emergency_temp_hot}}, deja un horario libre. Se va a usar.
6. Verifica la postura de la cuota de diagnóstico en cada ticket despachado antes de que el técnico salga en camino (ver la tabla abajo) — ese desajuste le pertenece a Despacho, no al técnico parado en la puerta.

**Mañana — primeras ventanas**

7. El técnico está en el domicilio al inicio de la ventana — {{price:first_job_start_default}} para una de 8–10. Salir a las {{price:tech_shift_start}} es el medio, no la promesa.
8. Vigila las llegadas en tiempo real. El reloj de {{price:arrival_guarantee}} arranca al inicio de la ventana agendada; un técnico que no está en el domicilio para entonces es una llamada al cliente **ahora**, con una hora de llegada concreta — regla completa en `sop.dispatch.hours`.
9. Confirma que cada técnico vea exactamente el siguiente trabajo y nada más.
10. Toma las solicitudes del mismo día del CSM — apruébalas o recházalas contra `sop.dispatch.priorities`, y responde rápido; el CSM tiene un cliente en la línea. Las ventanas extra ({{price:service_windows_overflow}}) las otorgas tú, nunca las ofrece el CSM.

**Mediodía — la re-planificación**

11. Re-pronostica cada trabajo restante contra horas reales de término, no las agendadas.
12. Identifica las ventanas en riesgo — los trabajos de la tarde que no se cumplirán si nada cambia.
13. Llama a esos clientes antes de que abra su ventana, siempre, con una hora concreta.
14. Elige un resultado por trabajo en riesgo de la tabla de decisión en `sop.dispatch.job-duration` — mantenerlo, subcontratar, dividirlo, reagendar o escalar.
15. Mueve primero la capa flexible — afinaciones y mantenimiento, nunca callbacks ni miembros en apuros.
16. Revisa {{price:same_day_cutoff}} — después de esa hora, las reservas del mismo día son decisión exclusiva de Despacho.

**Tarde — cerrando el ciclo**

17. Persigue los trabajos abiertos — {{price:job_check_in}} sin actualización es una llamada de seguimiento, no una espera.
18. Una instalación de emergencia que llega tarde toma el horario; el trabajo desplazado se subcontrata o se reagenda a una ventana concreta, nunca se abandona (`sop.dispatch.priorities`).
19. Controla la calidad de cada cierre — equipo registrado, formularios completos, fotos presentes (`sop.field.forms`). Un cierre incompleto se devuelve al técnico hoy mismo.
20. Rutea el trabajo vendido el mismo día — los estimados aprobados van al coordinador de instalación, los rechazados van a la lista de seguimiento, nunca a ningún lado.
21. Los trabajos en espera de refacción reciben una fecha, no un estatus.

**Fin del día**

22. Ejecuta la lista de cierre en `sop.dispatch.hours` — cada trabajo cerrado o explicado, guardia confirmada, apartados suaves anotados para Posh.
23. Confirma cero trabajos pausados en el tablero — cualquiera que se encuentre pausado se cierra y se re-despacha hoy mismo, no se carga al siguiente turno (`sop.dispatch.no-pause`).
24. El primer trabajo de mañana va al técnico antes de las {{price:board_lock}} con su hora real de inicio.

## Qué dices {#verbatim}

A un técnico a las 6:55 AM que no ha confirmado su primer trabajo:

> "Solo confirmando que viste el tablero — eres las 8 AM en Levittown, en movimiento a las 7:30."

Al CSM que pide un espacio extra el mismo día a las 3:15 PM:

> "Puedo hacer un 6–8 si el técnico está libre para entonces — déjame revisar su tarde y te llamo en diez minutos, todavía no lo prometas."

A un técnico a media tarde, cerrando el ciclo de un trabajo silencioso:

> "Llevas 90 minutos en ese trabajo sin actualización — dame un estatus, aunque sea 'casi terminando'."

Al despachador entrante en el cambio de turno:

> "El tablero está limpio, un apartado suave en Wantagh para mañana, Rivera está de guardia esta noche, y la caldera de Baldwin todavía necesita su cita de continuación agendada antes de que termine el día."

## Ejemplo trabajado — un día completo en el tablero {#example}

| Hora | Qué hace Despacho |
|---|---|
| 6:45 AM | Registro de Posh revisado, emergencia nocturna confirmada como despachada |
| 6:55 AM | Confirmación del técnico verificada para el trabajo de las 8 AM en Levittown; postura de cuota del ticket verificada contra lo que cotizó el CSM |
| 8:00 AM | Llegada registrada; reloj de garantía activo |
| 9:40 AM | El CSM llama con una solicitud P7 del mismo día — rechazada para el espacio de 12–2, se ofrece mañana ya que la tarde está apretada |
| 11:15 AM | Re-planificación de mediodía: el trabajo de 12–2 está en riesgo porque el de 10–12 se alargó; se llama al cliente con una llegada a la 1:30 antes de que abra la ventana |
| 2:20 PM | Llamada de instalación de emergencia — reemplazo aprobado, sin enfriamiento, 95°F afuera; la afinación de 2–4 se mueve a jueves, diagnóstico condonado, registrado en ambos tickets |
| 4:45 PM | Seguimiento del trabajo de instalación de emergencia — todavía en el domicilio, estatus "compresor instalado, terminando eléctrico" |
| 5:50 PM | Lista de cierre ejecutada: cada trabajo cerrado o explicado, guardia confirmada para esta noche, primer trabajo de mañana despachado con la hora real de inicio |

Nada en esta lista es excepcional — es la forma ordinaria de un día con un camión y cuatro ventanas que siguen moviéndose bajo condiciones reales.

## Cuando algo sale mal {#failures}

**Un técnico se vuelve inlocalizable a media tarde.** Escala al gerente de despacho de inmediato una vez pasado {{price:tech_unreachable_window}} — seguridad primero, agenda segundo; no sigas llamando al cliente con conjeturas mientras el técnico está desaparecido.

**Dos clientes están en riesgo en la misma ventana de 30 minutos y solo se puede hacer una llamada.** Llama a los dos — una llamada apresurada de 90 segundos vence a un no-show silencioso siempre; si de verdad no hay tiempo, llama primero a la ventana que abre más pronto, ya que falla primero.

**Un trabajo se cierra con equipo faltante o formularios incompletos.** Devuélvelo al técnico que lo cerró, el mismo día. No lo dejes esperar hasta la mañana siguiente — el cliente y la factura lo necesitan ahora mismo.

**El tablero muestra un trabajo pausado.** Convíértelo el mismo día: cierra lo que se hizo, agenda la continuación, despáchala como cualquier otra cita (`sop.dispatch.no-pause`). Nunca sobrevive como "pausado".

### Reglas duras

- Nunca dejes el tablero sin atender durante {{price:dispatch_hours}}.
- Nunca prometas un espacio del mismo día que el técnico no tiene realmente disponible.
- Nunca dejes que un trabajo pausado sobreviva al siguiente turno.
- Nunca entregues el tablero sin decir en voz alta quién es el siguiente despachador.

## Calificación de QA {#qa}

| Puntaje | Estándar |
|---|---|
| **2** | Revisiones previas al turno completas, cada ventana en riesgo llamada con anticipación, cada cierre con control de calidad, cero trabajos pausados, mañana despachado antes de {{price:board_lock}} |
| **1** | Un paso omitido pero detectado y corregido el mismo día sin dejar a ningún cliente sin informar |
| **0** | Una ventana perdida sin llamada, un trabajo pausado dejado durante la noche, o el tablero de mañana no despachado a tiempo |

## Relacionados

- Horas y reglas de hora de inicio: `sop.dispatch.hours`
- Qué se mueve primero: `sop.dispatch.priorities`
- Clases de duración, sobretiempos y trabajos movidos: `sop.dispatch.job-duration`
- Por qué nunca pausamos un trabajo: `sop.dispatch.no-pause`
- El estándar de cierre del técnico: `sop.field.forms`
