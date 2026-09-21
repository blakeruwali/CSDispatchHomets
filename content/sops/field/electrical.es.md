---
translation_of: sop.field.electrical
source_version: 1
---

# Queja: Breaker que Bota o Ciclado Corto

> **Un breaker que bota es un componente haciendo su trabajo. La falla nunca es el breaker hasta que se ha medido todo lo que está aguas abajo de él.**

Esta es la llamada donde adivinar sale más caro y más peligroso. Un disparo por molestia y un compresor yéndose a tierra se ven idénticos desde el termostato, y solo uno de los dos se puede resetear con seguridad.

## Antes que nada {#safety-first}

1. **Nunca resetees un breaker más de una vez sin medir.** El primer reseteo es diagnóstico. Un segundo reseteo en un circuito sin probar es como empieza un incendio.
2. **Mira antes de tocar.** Marcas de quemadura, aislamiento derretido, olor a quemado, capacitor inflado, contactor picado. Cualquiera de estas y el circuito se queda apagado hasta que se repare.
3. **Verifica que el circuito esté muerto** antes de trabajar en él — mídelo, no confíes en el interruptor.
4. **Olor a quemado en el área habitada, humo o un tablero chamuscado** es una emergencia, no una llamada de servicio. `protocol.emergency.triage`, y hay que decirle al propietario que deje el circuito apagado.

## La primera bifurcación — bota o cicla {#fork}

Son dos documentos distintos de falla, agendados bajo una sola queja. Sepáralos en los primeros dos minutos.

| El cliente dice | En realidad es |
|---|---|
| "El breaker se bota seguido" | Sobrecorriente o corto — trabaja `#tripping` |
| "Se prende y se apaga cada pocos minutos" | Ciclado corto — trabaja `#short-cycling` |
| "Trabaja, se para, y regresa en diez minutos" | Protector térmico reseteando — trátalo como `#tripping`, el sospechoso es el motor |

## Breaker que bota {#tripping}

1. **Consumo de amperaje en cada línea, bajo carga, contra la placa de datos.** Ese es todo el diagnóstico. Registra RLA, FLA y lo que mediste. Consumo arriba de lo nominal es un componente fallando; consumo a rotor bloqueado es un componente fallando *ahora*.
2. **Resistencia de aislamiento a tierra (megóhmetro) en el compresor** donde tengas la herramienta. Un compresor yéndose a tierra bota al instante y repetidamente, y nunca debe resetearse una y otra vez.
3. **Capacitores — medidos, no vistos a ojo.** Un capacitor de trabajo por debajo de tolerancia sube el consumo y se lleva al motor con él. Registra µF medidos contra nominales.
4. **Contactor.** Contactos picados, soldados o vibrando causan tanto disparos como ciclado. Soldado cerrado significa que la unidad trabaja con el termostato satisfecho — revisa eso en específico.
5. **Cableado y terminales.** Zapatas flojas, decoloración por calor, conductor subdimensionado o dañado, daño de roedores en el desconectador.
6. **El breaker mismo, al final.** Un breaker débil existe, pero es el último sospechoso después de comprobar que el amperaje es normal. **Nunca subas la capacidad de un breaker para que deje de botar.** El breaker protege al conductor; cambiarlo no cambia lo que el cable puede soportar.
7. **Confirma la reparación bajo carga** — hazlo trabajar, observa el consumo y quédate un ciclo completo.

## Ciclado corto {#short-cycling}

El sistema arranca y para antes de completar un ciclo. Encuentra cuál seguridad lo está deteniendo.

| Ruta | Qué revisar |
|---|---|
| Enfriando, ciclando rápido | Carga baja, serpentín sucio, flujo de aire restringido, presostato de baja cortando |
| Enfriando, corte por alta presión | Condensador sucio, sobrecarga, motor de ventilador fallando |
| Calentando, disparo de límite | Flujo de aire — filtro, blower, estática. Ver `sop.field.no-heat` §short-cycling |
| Cualquiera, protector térmico | Motor con consumo alto, capacitor débil, baleros duros |
| Cualquiera, lado de control | Ubicación del termostato, anticipador/tasa de ciclo, cableado de bajo voltaje flojo, equipo sobredimensionado |
| Cualquiera, fusible de tarjeta quemado repetidamente | **Hay un corto. Encuéntralo — no sigas poniendo fusibles.** |

**El equipo sobredimensionado cicla corto por diseño y no se puede reparar para que se porte bien.** Si ese es el hallazgo, dilo, documéntalo y deja que la conversación de reemplazo sea honesta en lugar de una serie de piezas.

## Qué dices {#verbatim}

Explicar un disparo en lenguaje claro es lo que evita que el cliente lo resetee después de que te vas:

> "Ese breaker no está descompuesto — está haciendo exactamente para lo que está hecho. Su compresor está jalando [X] amperes y está diseñado para [Y], así que el breaker lo apaga antes de que pueda sobrecalentar el cable. Si seguimos reseteándolo, estamos anulando lo único que protege la casa."

Cuando el compresor está a tierra:

> "Revisé el aislamiento del compresor a tierra y falló — por eso bota en cuanto arranca. Este no se puede resetear con seguridad, así que voy a dejar ese breaker apagado y hoy mismo le muestro las opciones de reemplazo."

Cuando el cliente pide un breaker más grande:

> "Entiendo por qué parece la solución, y en esa le tengo que decir que no. El breaker corresponde al cable que está en sus paredes. Un breaker más grande solo deja que el cable se caliente más antes de que algo apague — no arregla el consumo, quita la protección."

## Cuando sale mal {#failures}

**No bota mientras estás ahí.** Los disparos intermitentes son reales. Mide bajo la peor condición que puedas crear — tiempo largo de operación, ambiente caliente, segunda etapa — y registra el consumo que viste. Si el consumo está limpio y el disparo no se reproduce, documéntalo, deja al cliente con qué vigilar, y no reemplaces un compresor por un relato.

**El cliente lleva semanas reseteándolo.** Pregunta siempre. Ese historial te dice que la falla va progresando, y cambia la urgencia de la conversación.

**Encuentras un capacitor fuera de tolerancia y ahí te detienes.** Cámbialo y vuelve a medir el consumo. Un capacitor débil muchas veces es síntoma de un motor jalando alto, no la causa. Si el consumo sigue alto, el capacitor no era el diagnóstico.

**Alguien ya subió la capacidad del breaker.** Ese es un hallazgo que reportas, por escrito, y no se vuelve a instalar así.

### Reglas duras

- Nunca resetees un breaker dos veces sin medir.
- Nunca subas la capacidad de un breaker ni de un fusible.
- Nunca puentees un interruptor de seguridad o un presostato para mantener una unidad trabajando.
- Nunca pongas un segundo fusible de tarjeta sin encontrar el corto.
- Nunca dejes energizado un compresor aterrizado.

## Qué se registra {#record}

- Consumo de amperaje por línea, medido, junto al valor de la placa.
- µF medidos del capacitor vs. nominales.
- Condición del contactor.
- Resultado de aislamiento a tierra si se probó.
- Si el disparo se reprodujo en sitio.
- Cuánto tiempo lleva el cliente reseteándolo.
- Tamaño del breaker y calibre del conductor, si se inspeccionó el tablero.
- Decisión de operar / no operar y su razón.

## Calificación de QA {#qa}

| Puntaje | Cómo se ve |
|---|---|
| **2** | Consumo registrado contra la placa, causa comprobada, seguridad explicada al cliente, unidad dejada en estado seguro, todo documentado. |
| **1** | Componente reemplazado y síntoma resuelto, pero sin consumo medido registrado antes o después. |
| **0** | Breaker reseteado repetidamente sin medir, breaker o fusible aumentado, seguridad puenteada, o compresor aterrizado dejado con corriente. |

## Relacionado

- El estándar detrás de todo esto: `sop.field.diagnostics`
- Valores eléctricos esperados: `reference.diagnostic-readings` §electrical
- Ciclado corto del lado de enfriamiento: `sop.field.no-cooling`
- Ruidos de motor que anteceden a un disparo: `sop.field.noise`
