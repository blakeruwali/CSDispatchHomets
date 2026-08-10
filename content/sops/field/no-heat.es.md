---
translation_of: sop.field.no-heat
source_version: 1
---

# Queja: No Calienta

> **Las llamadas de calefacción implican combustión. La secuencia de abajo nunca empieza por la falla — empieza por si el aparato es seguro de operar siquiera.**

Es nuestra llamada de mayor consecuencia. Una llamada de "no enfría" que sale mal cuesta un viaje de regreso; una de "no calienta" que sale mal le puede costar a una familia. Nada en este documento está por encima de `sop.field.diagnostics` §safety.

## Antes de todo {#safety-first}

1. **CO ambiental en el espacio habitado, al llegar, antes de empezar a trabajar.** Se espera 0 ppm. **35 ppm o más: aparato apagado. 70 ppm o más: todos afuera, bomberos.** La escala completa está en `reference.diagnostic-readings` §co, y no admite excepciones.
2. **Huele si hay gas.** Detección positiva → cierra en el aparato, sin fuentes de ignición, compañía de gas y luego despacho (`protocol.emergency.triage`).
3. **Revisa la ventilación** antes de revisar la falla. Conducto de humos desconectado, terminación bloqueada, derrame en la campana de tiro.
4. **Confirma la situación de la alarma de CO en la casa.** Si falta o está vencida, se dice en voz alta y se anota, en toda llamada de calefacción, sin importar a qué fuiste.

**Una casa sin calefacción en enero tiene presión por que algo funcione ya.** Esa presión es justamente por lo que las revisiones de seguridad van primero y no se negocian — el cliente no está en posición de valorar el riesgo, y no es su trabajo hacerlo.

## La división {#the-split}

| Qué observas | A dónde ir |
|---|---|
| No pasa absolutamente nada | `#nothing-runs` |
| La secuencia arranca y se detiene antes de encender | `#no-ignition` |
| Enciende y se apaga a los pocos segundos | `#flame-dropout` |
| Funciona pero la casa sigue fría | `#runs-not-warm` |
| Bomba de calor — funcionando, el aire se siente fresco | `#heat-pump` |
| Ciclos cortos por límite | `#short-cycling` |

**Observa un ciclo completo antes de concluir nada.** Pide calefacción y quédate ahí a verlo. La mayoría de los diagnósticos de calefactor se hacen viendo en qué punto falla la secuencia, no probando componentes al azar.

## No pasa absolutamente nada {#nothing-runs}

1. **Termostato** — arriba de la temperatura del cuarto, en HEAT, pilas, pantalla.
2. **Energía** — breaker, interruptor de servicio arriba de la escalera, interruptor de la puerta del soplador.
3. **Fusible de la tarjeta de control.** Misma regla que en enfriamiento: **un fusible de bajo voltaje quemado es un síntoma.** Encuentra el corto antes de cambiarlo.
4. **LED de diagnóstico de la tarjeta.** Lee el código de destellos y regístralo textual. Es la respuesta honesta más rápida de toda la página.
5. **Seguridad de condensado en un calefactor condensante de 90%+.** Una trampa de condensado tapada lo bloquea y se ve exactamente igual que un calefactor muerto.

## La secuencia arranca pero nunca enciende {#no-ignition}

Sigue la secuencia en orden y encuentra dónde se detiene.

1. **¿Arranca el inductor?** No → motor del inductor, tarjeta, o energía.
2. **¿Cierra el presostato?** No → ventilación bloqueada o desconectada, manguera de presión rota o con agua, condensado tapado en un 90%, o un inductor débil. **Nunca puentees un presostato para "probarlo" y lo dejes así.**
3. **¿Enciende el ignitor / hay chispa?** No → ignitor, tarjeta, o el circuito de rollout / límite abierto más arriba.
4. **¿Abre la válvula de gas?** Revisa si hay 24V en la válvula.
   - **Con 24V y sin gas** → la válvula, o no hay suministro de gas.
   - **Sin 24V** → tarjeta o circuito de seguridad.
5. **Suministro de gas.** Presión estática y en operación. Una presión que se cae cuando enciende el quemador es un problema de suministro, no del aparato.
6. **Presión de múltiple contra la placa de datos.** Nunca se ajusta de memoria.

**Una falla repetida de ignitor no es un problema de ignitor.** Es presión de gas, una tarjeta que lo cicla mal, un sensor de flama que provoca reencendidos, o el número de parte equivocado. Poner el tercer ignitor sin preguntar por qué no es un diagnóstico.

## Enciende y se apaga {#flame-dropout}

Clásico, y normalmente barato.

1. **Microamperaje del sensor de flama.** Por debajo del mínimo del fabricante (a menudo ~1 µA; sano típico 1.5–5 µA) → limpia o reemplaza. Registra la lectura antes y después de limpiar — ese par de números es toda la comprobación.
2. **Tierra.** Una mala tierra del quemador causa exactamente esto y se pasa por alto constantemente.
3. **Calidad de la flama.** Flama que se levanta, se mueve o está amarilla es un problema de combustión, no de detección.
4. **Interruptor de rollout activado** → **detente.** Rollout significa que la flama salió por donde no debía. Intercambiador bloqueado, chimenea bloqueada, o intercambiador agrietado. No lo reinicies y te vayas.

## Funciona pero la casa sigue fría {#runs-not-warm}

1. **Elevación de temperatura contra la placa**, normalmente una ventana de 30–40°F.
   - **Por encima** → falta aire. Filtro, turbina, presión estática, velocidad del soplador.
   - **Por debajo** → demasiado aire, carga subdimensionada, o subquemado.
2. **Presión estática externa total** contra 0.5" c.a.
3. **Pérdidas en ductos**, especialmente tramos de ático y sótano.
4. **¿Realmente está funcionando, o haciendo ciclos cortos?** Ver abajo.

## Ciclos cortos por límite {#short-cycling}

Un calefactor que activa el límite alto te está diciendo que no puede deshacerse del calor que produce. **El límite está haciendo su trabajo — nunca lo puentees.**

- Flujo de aire: filtro, serpentín, turbina, rejillas cerradas, retorno subdimensionado.
- Velocidad de soplador demasiado baja para la potencia de quemado.
- Sobrequemado — presión de múltiple por encima de placa.
- Un límite realmente fallado, que es lo *último* que hay que sospechar, no lo primero.

## Bomba de calor, funcionando pero con aire fresco {#heat-pump}

El aire de suministro de una bomba de calor es más frío que el de un calefactor por diseño — alrededor de 90–100°F se siente tibio para una mano acostumbrada al gas. La mitad de estas llamadas son una explicación en lugar de una reparación, y esa explicación vale la pena darla bien.

Revisa en este orden:

1. **¿Realmente está en calefacción?** Válvula reversible energizada, configuración correcta del termostato.
2. **Deshielo.** Que inicie y termine correctamente. Un serpentín exterior lleno de hielo que nunca se limpia es una falla de deshielo.
3. **Calefacción auxiliar / de emergencia** — etapas, bloqueo, y si las resistencias realmente están energizando.
4. **Válvula reversible con fuga interna.** Se ve exactamente igual que carga baja en los manómetros. Compara temperaturas de línea.
5. **Carga y flujo de aire**, igual que en enfriamiento (`sop.field.no-cooling`).

**Auxiliar funcionando a 45°F exteriores es un problema de control**, y también es un recibo por el que el cliente va a llamar. Dilo antes de que lo vean.

## Antes de dejar un aparato de combustión {#leaving}

En cada llamada de no calienta, siempre:

- **Análisis de combustión donde haya analizador** — CO de chimenea libre de aire por debajo de 100 ppm aceptable, por encima de 400 ppm es FALLA y el aparato se apaga.
- **CO ambiental revisado de nuevo** con todo funcionando.
- **Ciclo completo observado** de principio a fin, después de la reparación.
- **Ventilación verificada íntegra.**
- **Cada hallazgo de seguridad escrito en el trabajo y dicho al cliente con palabras claras** — incluidos los que decidieron no atender.

> ⚠️ **Sospecha de intercambiador de calor agrietado: apagar, etiquetar en rojo, segunda opinión antes de condenarlo, y no volverlo a encender para mantener la casa caliente esa noche.** Esa última parte es la que se intenta negociar, y no te corresponde a ti negociarla (`sop.field.diagnostics` §condemn).

## Qué se registra {#record}

- El **código de destellos de la tarjeta**, textual.
- **En qué punto de la secuencia falló.**
- **CO ambiental al llegar y al irte.** Los dos, siempre, aunque sean 0 ppm.
- **Microamperaje del sensor de flama antes y después** si lo limpiaste.
- **Elevación de temperatura, presión de múltiple, presión de suministro de gas, presión estática total.**
- **Estado de la ventilación** y cualquier hallazgo de seguridad, incluidos los rechazados.

## Relacionado

- El estándar detrás de todo esto: `sop.field.diagnostics`
- Escala de CO y umbrales de combustión: `reference.diagnostic-readings`
- Emergencias de gas y CO: `protocol.emergency.triage`
- Fallas del lado de enfriamiento en una bomba de calor: `sop.field.no-cooling`
