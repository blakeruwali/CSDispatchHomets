---
translation_of: sop.field.no-cooling
source_version: 1
---

# Queja: No Enfría

> **Divide la llamada antes de tocar un manómetro. "No enfría" son cuatro trabajos distintos, y los primeros dos minutos te dicen en cuál estás.**

Es la llamada de mayor volumen que recibimos entre mayo y septiembre. También es en la que más refrigerante se le agrega a sistemas que nunca lo necesitaron.

Todo esto va por debajo de `sop.field.diagnostics` — mide la causa, compruébala con un número, termina con un precio por escrito. Este documento solo trata de *por dónde empezar*.

## La división {#the-split}

Antes que nada, contesta esto. Divide todo el trabajo.

| Qué observas | A dónde ir |
|---|---|
| No funciona nada — interior y exterior muertos | `#nothing-runs` |
| El soplador interior funciona, la unidad exterior no | `#outdoor-dead` |
| Ambos funcionan, el aire de las rejillas no sale frío | `#running-not-cold` |
| Ambos funcionan, el aire sale frío, la casa no baja | `#cold-but-not-keeping-up` |

**Confírmalo tú mismo.** La versión del cliente y el comportamiento del sistema son dos evidencias distintas, y no coinciden más seguido de lo que uno esperaría.

## Antes de la división — treinta segundos que ahorran una hora {#first-checks}

1. **Termostato por debajo de la temperatura del cuarto, en COOL, ventilador en AUTO.** Dilo en voz alta con el cliente viendo. No es condescendiente si lo narras como una lista de verificación.
2. **Filtro.** Sácalo. La mitad de todo lo que sigue empieza aquí.
3. **Ambos breakers y el desconectador exterior.** Interior y exterior suelen ser circuitos separados.
4. **Mira la unidad exterior y la línea de refrigerante** antes de abrir nada. Hielo en la línea de succión te manda directo a `sop.field.frozen-coil`.

## No funciona nada {#nothing-runs}

Sin soplador, sin condensador, sin display del termostato o con la pantalla en blanco.

1. **Energía en el equipo.** Breakers, desconectador, interruptor de servicio — ese apagador arriba de la escalera del sótano que alguien movió.
2. **Fusible quemado en la tarjeta de control.** Normalmente uno de 3A o 5A tipo automotriz. **Un fusible de bajo voltaje quemado es un síntoma, no una reparación.** Algo puso los 24V a tierra — casi siempre un cable de termostato rozado o un cable desgastado en el condensador. Cambiar el fusible e irte es una visita de regreso que tú mismo agendaste.
3. **Interruptor de flotador / seguridad de condensado activado.** Muy común y fácil de pasar por alto. Si la charola está llena o el drenaje tapado, el interruptor hizo su trabajo. Destapa el drenaje, y luego averigua por qué se tapó.
4. **Interruptor de puerta** del compartimento del soplador.
5. **El termostato mismo** — pilas muertas, común desconectado, unidad fallada.

**Error que hay que evitar:** cambiar una tarjeta de control porque el fusible está quemado. Primero encuentra el corto.

## El interior funciona, el exterior no {#outdoor-dead}

Aquí viven los capacitores y contactores, y aquí es donde más se adivina.

1. **¿Hay 24V en la bobina del contactor?**
   - **Sin 24V** → la señal no está llegando al condensador. Termostato, tarjeta de control, cableado de bajo voltaje, o un presostato de alta/baja o flotador abierto más arriba. Trabaja hacia atrás desde el contactor hasta la tarjeta.
   - **Con 24V, el contactor no cierra** → bobina del contactor fallada.
   - **Con 24V, el contactor cerrado, nada funciona** → pasa al 2.
2. **¿Hay alto voltaje en el lado de carga del contactor?** Si sí y nada gira, estás en el capacitor, los motores o el compresor.
3. **Mide el capacitor.** Nominal y medido, ambos registrados. PASS dentro del 6%, ATTENTION 6–10% bajo, FAIL más del 10% (`reference.diagnostic-readings`).
4. **¿El ventilador del condensador gira libre con la mano?** Un balero trabado se lleva capacitores. También un motor que consume por encima del FLA.
5. **Compresor:** amperaje contra el RLA, y revisa si está aterrizado, abierto o con rotor bloqueado.

**Después pregunta qué lo mató.** Un capacitor fallado con un condensador sucio y presión de alta por las nubes no se murió de viejo. Cambiarlo sin limpiar el serpentín es una visita de regreso en tres semanas (`sop.field.diagnostics` §root-cause).

> ⚠️ **Un kit de arranque duro no es un diagnóstico.** Es una reparación legítima ante un hallazgo específico, y una forma de esconderte a ti mismo un compresor moribundo en todos los demás casos. Si instalas uno, la nota dice qué lectura lo justificó.

## Ambos funcionan, el aire no sale frío {#running-not-cold}

El sistema lo está intentando. Algo le impide mover el calor.

**Toma primero el diferencial de temperatura — retorno menos suministro, objetivo 15–22°F.** Ese solo número divide el resto del trabajo.

### El diferencial es bajo o nulo {#split-low}

**Revisa el flujo de aire antes que la carga. Siempre, y en ese orden.**

1. **Filtro, serpentín interior, turbina del soplador.** Una turbina sucia se ve limpia de reojo — revisa los álabes, no la carcasa.
2. **Presión estática externa total** contra 0.5" c.a. nominal. Por encima significa un problema de ductos que ninguna cantidad de refrigerante va a resolver.
3. **Velocidad del soplador / programación del ECM**, sobre todo si alguien ya estuvo ahí antes que tú.
4. **Y hasta entonces, los manómetros.** Superheat 8–12°F en orificio fijo, subcooling 8–12°F en TXV.

| Qué dicen los manómetros | Qué suele significar |
|---|---|
| Succión baja, superheat alto, subcooling bajo | Carga baja — **así que busca la fuga** |
| Succión baja, superheat bajo | Restricción de aire, o dispositivo de expansión sobrealimentando |
| Succión alta, superheat bajo | Sobrecarga, o TXV atorada abierta |
| Alta presión de descarga, subcooling alto | Sobrecarga, condensador sucio, o incondensables |
| Alta descarga, subcooling normal | Flujo de aire del condensador — serpentín, ventilador o recirculación |

> ⚠️ **El refrigerante no se consume.** Si un sistema está bajo, tuvo una fuga, y va a volver a fugar. "Le eché un poco" sin buscar la fuga es una reparación con visita de regreso incluida, y es la forma más rápida de perder la confianza de un cliente cuando vuelve a llamar el mes siguiente. Busca, encuentra, cotiza la reparación. Si el cliente la rechaza y quiere carga para aguantar el fin de semana, es su decisión — anota que se ofreció y se rechazó.

### El diferencial es normal pero la casa no enfría {#split-normal}

El equipo está haciendo su trabajo. Ve a `#cold-but-not-keeping-up`.

## Aire frío, la casa no aguanta {#cold-but-not-keeping-up}

Nada está descompuesto. Algo está subdimensionado, fugando o sobrecargado — y esto es una conversación, no una pieza.

- **Fugas y aislamiento de ductos**, sobre todo tramos en el ático. Un sistema típico pierde 20–30% de su aire antes de llegar a un cuarto.
- **Flujo de aire cuarto por cuarto.** Los cuartos sin retorno se presurizan y dejan de mover aire cuando se cierra la puerta.
- **Tiempo de operación.** Un sistema que trabaja continuo la tarde más caliente del año y se mantiene a unos grados está funcionando normal.
- **Cambios de carga.** Sótano terminado, ampliación nueva, ventanales al poniente, un ático que perdió su aislamiento.
- **Dimensionamiento.** Solo vale la pena mencionarlo con números reales detrás.

**No vendas un sistema más grande para resolver un problema de ductos.** Un sistema sobredimensionado hace ciclos cortos, deshumidifica mal, y produce un cliente menos cómodo después de gastar más dinero. Si el hallazgo son los ductos, la `18-Point Ductwork Evaluation` es el siguiente paso correcto y el honesto.

## Qué se registra {#record}

Además de los puntos estándar del formulario (`sop.field.diagnostics` §servicetitan):

- **En qué división caíste**, en una línea — "interior funcionando, exterior muerto, sin 24V en el contactor."
- **Diferencial de temperatura, superheat, subcooling, presión estática total** — incluidos los que salieron normales.
- **Si se hizo búsqueda de fuga**, con qué método, y qué se encontró. Si se cargó un sistema sin encontrar la fuga, eso queda por escrito.
- **Lecturas de antes y después** donde se hizo reparación.

## Relacionado

- El estándar detrás de todo esto: `sop.field.diagnostics`
- Umbrales y rangos objetivo: `reference.diagnostic-readings`
- Hielo en cualquier parte del sistema: `sop.field.frozen-coil`
- Datos de placa primero: `sop.field.equipment-capture`
