---
translation_of: sop.field.no-cooling
source_version: 2
---

# Queja: No Enfría

> **Divide la llamada antes de tocar un manómetro. "No enfría" son cuatro trabajos distintos, y los primeros dos minutos te dicen en cuál estás.**

## Cuándo aplica {#applies}

Cualquier llamada donde la queja sea aire caliente, sin aire, o un sistema que no mantiene la temperatura — residencial o comercial ligero, con ductos o sin ellos. Esta es la llamada de mayor volumen que recibimos entre mayo y septiembre, y también es la llamada donde más refrigerante se agrega a sistemas que nunca lo necesitaron. Todo aquí se apoya en `sop.field.diagnostics` — mide la causa, compruébala con un número, termina con un precio escrito. Este documento trata solo de *dónde empezar* y cómo no adivinar.

## Compuerta de seguridad {#safety}

Las llamadas de enfriamiento cargan menos riesgo de combustión que las de calefacción, pero no están libres de riesgo. Antes de cualquier cosa de abajo:

- **Alto voltaje presente, panel o desconectador chamuscado, derretido o con arqueo** → corta la energía en la fuente antes de tocar nada.
- **Agua estancada en la manejadora o el panel** → apaga la energía primero, diagnostica después.
- **Olor a refrigerante o silbido en el juego de líneas** → trátalo como fuga, ventila el espacio, no uses un método de detección de fuga con flama abierta cerca.

Nada de eso es común en una llamada de enfriamiento. Todo eso supera al resto de este documento cuando aparece (`sop.field.diagnostics` §safety).

## La escalera de ejecución {#execution}

**Confírmalo tú mismo antes de tocar un manómetro.** La versión del cliente y el comportamiento real del sistema son dos piezas de evidencia distintas, y discrepan más seguido de lo que esperarías.

1. **Termostato configurado por debajo de la temperatura ambiente, en COOL, ventilador en AUTO.** Dilo en voz alta con el cliente observando — no es condescendiente si lo narras como una lista de verificación.
2. **Filtro.** Sácalo. La mitad de todo lo de abajo empieza aquí.
3. **Ambos breakers y el desconectador exterior.** Interior y exterior suelen ser circuitos separados.
4. **Mira la unidad exterior y el juego de líneas** antes de abrir nada. Hielo en la línea de succión te manda directo a `sop.field.frozen-coil` — no conectes manómetros a un sistema congelado.
5. **Trabaja la bifurcación de abajo** para encontrar dónde está realmente la falla.
6. **Toma el conjunto completo de lecturas** para donde termines — salto de temperatura, superheat/subcooling, TESP, amperajes contra la placa de datos.
7. **Nombra la causa con el número que la comprueba**, y cotiza la reparación en ServiceTitan antes de irte (`sop.field.diagnostics` §prove).

## La bifurcación {#the-split}

| Lo que observas | Hacia dónde ir |
|---|---|
| Nada corre en absoluto — interior y exterior ambos muertos | `#nothing-runs` |
| El soplador interior corre, la unidad exterior no | `#outdoor-dead` |
| Ambos corren, el aire de las rejillas no está frío | `#running-not-cold` |
| Ambos corren, el aire está frío, la casa aún no baja | `#cold-but-not-keeping-up` |

### Nada corre en absoluto {#nothing-runs}

1. **Energía en el equipo.** Breakers, desconectador, el interruptor de servicio en lo alto de las escaleras del sótano que alguien apagó.
2. **Fusible quemado en la tarjeta de control.** Usualmente uno de estilo automotriz de 3A o 5A. **Un fusible de bajo voltaje quemado es un síntoma, no una reparación.** Algo hizo corto de 24V a tierra — usualmente un cable de termostato raspado o un cable rozado en el condensador. Cambiar el fusible e irte es un callback que te agendaste tú mismo.
3. **Interruptor de flotador / seguro de condensado disparado.** Extremadamente común, fácil de pasar por alto. Si la charola está llena o el drenaje está tapado, el interruptor hizo su trabajo. Despeja el drenaje, luego averigua por qué se tapó.
4. **Interruptor de interbloqueo de la puerta** en el compartimento del soplador.
5. **El termostato mismo** — baterías muertas, cable común fallado, unidad fallada.

### Interior corre, exterior no {#outdoor-dead}

Aquí es donde viven los capacitores y contactores, y donde más se adivina.

1. **¿Hay 24V en la bobina del contactor?**
   - **No** → la señal no está llegando al condensador. Termostato, tarjeta de control, cableado de bajo voltaje, o un interruptor de alta/baja presión o de flotador disparado río arriba. Trabaja hacia atrás desde el contactor hasta la tarjeta.
   - **Sí, el contactor no se cierra** → bobina del contactor fallada.
   - **Sí, el contactor se cierra, nada corre** → siguiente paso.
2. **¿Hay alto voltaje en el lado de carga del contactor?** Si sí y nada gira, estás en el capacitor, los motores, o el compresor.
3. **Mide el capacitor.** Calificado vs. medido, ambos registrados. PASS dentro del 6%, ATENCIÓN 6–10% bajo, FALLA más allá del 10% (`reference.diagnostic-readings`).
4. **¿El ventilador del condensador gira libremente a mano?** Un balero de ventilador agarrotado se lleva capacitores. También lo hace un motor de ventilador consumiendo más de su FLA.
5. **Amperaje del compresor contra RLA**, y revisa si está en corto, abierto, o con rotor bloqueado.

**Luego pregunta qué lo mató.** Un capacitor fallado junto a un serpentín de condensador mugroso y 105°F de presión de descarga no murió de viejo. Cámbialo sin limpiar el serpentín y estás de vuelta en tres semanas (`sop.field.diagnostics` §root-cause).

### Ambos corren, el aire no está frío {#running-not-cold}

**Toma primero el salto de temperatura — retorno menos suministro, meta 15–22°F.** Ese único número divide el resto del trabajo.

**Revisa el flujo de aire antes que la carga. Siempre, en ese orden.**

1. Filtro, serpentín interior, rodete del soplador. Un rodete cargado se ve limpio a simple vista — revisa las aspas, no la carcasa.
2. Presión estática externa total contra la calificación de 0.5" c.a. Por encima de eso, ninguna cantidad de refrigerante arregla un problema de ductos.
3. Derivación de velocidad del soplador / programación ECM, especialmente si alguien más estuvo ahí antes que tú.
4. Luego manómetros: superheat 8–12°F en orificio fijo, subcooling 8–12°F en TXV.

| Lo que dicen los manómetros | Qué usualmente significa |
|---|---|
| Succión baja, superheat alto, subcooling bajo | Baja de carga — **encuentra la fuga** |
| Succión baja, superheat bajo | Restricción de flujo de aire, o dispositivo de medición sobrealimentando |
| Succión alta, superheat bajo | Sobrecarga, o un TXV atascado abierto |
| Descarga alta, subcooling alto | Sobrecarga, condensador sucio, o no condensables |
| Descarga alta, subcooling normal | Flujo de aire del condensador — serpentín, ventilador, o recirculación |

Si el salto es normal pero la casa sigue sin enfriar, el equipo está haciendo su trabajo — ve a `#cold-but-not-keeping-up`.

### Aire frío, la casa no da abasto {#cold-but-not-keeping-up}

Nada está roto. Algo está subdimensionado, con fugas, o sobrecargado — esto es una conversación, no una pieza.

- **Fugas de ductos y aislamiento**, particularmente en tramos de ático. Un sistema típico pierde 20–30% de su aire antes de llegar a un cuarto.
- **Flujo de aire cuarto por cuarto.** Cuartos sin ruta de retorno se presurizan y dejan de mover aire cuando se cierra la puerta.
- **Tiempo de funcionamiento.** Un sistema corriendo continuamente en la tarde más calurosa del año y manteniéndose dentro de unos pocos grados se está comportando normalmente.
- **Cambios de carga.** Sótano terminado, ampliación nueva, ventanales orientados al oeste, un ático que perdió su aislamiento.
- **Dimensionamiento.** Solo vale la pena plantearlo con números reales de respaldo.

## Diagnósticos erróneos comunes {#misdiagnoses}

| Se parece a | Es en realidad | Se detecta por |
|---|---|---|
| "Tarjeta mala" | Fusible de bajo voltaje quemado por un cable raspado | Rastrea el corto antes de cambiar nada |
| "Bajo de gas" | Serpentín congelado dando lecturas falsas de succión baja | Nunca conectar manómetros a un sistema con hielo visible — descongelar primero (`sop.field.frozen-coil`) |
| "Compresor muerto" | Capacitor de marcha fallado impidiendo el arranque | Mide el capacitor antes de condenar el compresor |
| "Sistema subdimensionado" | Fugas de ductos o un retorno cerrado/bloqueado | Revisión de flujo de aire cuarto por cuarto antes de cualquier conversación de dimensionamiento |
| "Necesita recarga" | Serpentín de condensador sucio elevando la presión de descarga | Condición del serpentín y presión de descarga antes de agregar refrigerante |

## Qué dices {#verbatim}

> "Estoy tomando algunas mediciones para poder decirle exactamente qué está mal en lugar de adivinar — tomará unos minutos."

> "Su sistema está bajo de refrigerante, y el refrigerante no se consume — eso significa que hay una fuga en algún lado. Quiero encontrarla en vez de solo rellenar, porque un relleno sin encontrar la fuga significa que vamos a tener esta misma conversación de nuevo en unas semanas."

> "El capacitor marca veintiún microfaradios contra una calificación de cuarenta y cinco — por eso la unidad exterior no arranca. También quiero revisar el serpentín y el ventilador mientras estoy ahí, porque algo suele hacer que un capacitor falle antes de tiempo."

> "El equipo está funcionando correctamente. Lo que le está costando trabajo es el ducto / el retorno / la cantidad de vidrio de ese lado de la casa — así se ve realmente arreglar eso."

## Cuando algo sale mal {#failures}

**Agregas refrigerante y el sistema en realidad estaba congelado, no bajo.** Detente. Recupera lo que agregaste si quedó sobrecargado como resultado, descongela el sistema apropiadamente, y vuelve a correr los manómetros en un sistema ya descongelado antes de tocar la carga de nuevo. Dile al cliente qué pasó y por qué.

**Cambias un capacitor y el sistema vuelve a fallar en la semana.** Te saltaste el paso de "qué lo mató." Regresa al ventilador del condensador, la presión de descarga, y la limpieza del serpentín — uno de ellos es la causa real, y el callback no se paga hasta que lo encuentres.

**El cliente insiste en que "solo le falta gas" y quiere que te saltes la búsqueda de fuga.** Explica el número detrás de la recomendación, cotiza la búsqueda de fuga, y si aun así rechaza, anota que se ofreció un relleno y se rechazó sin búsqueda de fuga, y que el sistema se va a quedar bajo de nuevo.

**No puedes reproducir la queja al llegar.** Toma el conjunto completo de lecturas de todos modos, documenta una línea base saludable, y sigue `sop.field.diagnostics` §no-fault. No cambies una pieza solo para cerrar el ticket.

### Reglas duras

- Nunca conectes manómetros a un sistema con hielo visible en el serpentín o el juego de líneas.
- Nunca agregues refrigerante sin una búsqueda de fuga, o sin anotar que se ofreció y se rechazó.
- Nunca condenes un compresor sin antes medir el capacitor y revisar si hay amperaje de rotor bloqueado.
- Nunca vendas un sistema más grande para arreglar un problema de ductos.

## Qué se registra {#record}

Más allá de los puntos estándar del formulario (`sop.field.diagnostics` §servicetitan):

- La **bifurcación en la que terminaste**, en una línea — "interior corriendo, exterior muerto, sin 24V en el contactor."
- **Salto de temperatura, superheat, subcooling, TESP** — incluidos los que salieron normales.
- **Si se realizó una búsqueda de fuga**, qué método, y qué se encontró. Si un sistema se cargó sin encontrar una fuga, ese hecho queda anotado.
- **Lecturas antes y después** donde se hizo una reparación.

## Calificación de QA {#qa}

| Puntaje | Lo que muestra el expediente |
|---|---|
| **2** | Bifurcación identificada correctamente, conjunto completo de lecturas registrado, causa vinculada a un número, búsqueda de fuga realizada o explícitamente rechazada y anotada, precio en ServiceTitan |
| **1** | Reparación correcta hecha, pero falta una lectura, o la decisión de búsqueda de fuga no está documentada |
| **0** | Refrigerante agregado sin búsqueda de fuga anotada, una pieza condenada sin medición, o un sistema congelado con manómetros conectados sin descongelar primero |

## Relacionado

- El estándar detrás de todo esto: `sop.field.diagnostics`
- Umbrales y rangos meta: `reference.diagnostic-readings`
- Hielo en cualquier parte del sistema: `sop.field.frozen-coil`
- Datos de placa primero: `sop.field.equipment-capture`
