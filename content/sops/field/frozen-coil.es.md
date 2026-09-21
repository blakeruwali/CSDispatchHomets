---
translation_of: sop.field.frozen-coil
source_version: 2
---

# Queja: Hielo en el Sistema

> **Flujo de aire primero, carga segundo, siempre en ese orden — y el hielo tiene que desaparecer antes de que cualquier lectura que tomes signifique algo.**

## Cuándo aplica {#applies}

Cualquier queja u observación de hielo en el serpentín interior, la línea de succión, o la unidad exterior — ya sea que el cliente haya llamado por hielo específicamente o lo hayas encontrado mientras trabajabas una llamada de "no enfría". Un serpentín congelado no es una falla; es el extremo visible de una, y hay solo un puñado de causas. Un sistema congelado por un filtro sucio y un sistema congelado por una fuga se ven idénticos desde la entrada de la casa, y precisamente por eso existe este documento.

## Compuerta de seguridad {#safety}

- **Un serpentín descongelándose produce mucha agua rápido.** Revisa la charola secundaria y la ruta del condensado antes de dejar el área, y protege pisos/techos terminados debajo de la unidad.
- **Nunca despiques ni raspes el hielo de un serpentín.** Las aletas y la tubería se dañan fácilmente, y un serpentín perforado convierte una llamada pequeña en un reemplazo de compresor.
- **Nunca conectes manómetros a un sistema congelado y trates la lectura como real.** Un serpentín congelado produce presión de succión artificialmente baja. Agregar refrigerante basándose en ese número sobrecarga un sistema que nunca estuvo bajo, y cuando se descongele, la presión de descarga sube y el compresor corre caliente.

## La escalera de ejecución {#execution}

1. **Apaga el compresor, deja el soplador corriendo.** Ventilador en ON en el termostato con el enfriamiento apagado es la forma más rápida y segura de descongelar.
2. **Protege la casa** — toallas, aspiradora para agua, revisa la charola secundaria.
3. **Fotografía el hielo** antes de que desaparezca. Es evidencia, explica la factura, y en veinte minutos ya no va a existir.
4. **Establece expectativas con el cliente:** una descongelación completa toma comúnmente entre 30 y 90 minutos, a veces más. Si no puedes esperarla, eso es legítimamente un trabajo de dos visitas — dilo, cotízalo con honestidad, agenda el regreso antes de irte.
5. **Mientras se descongela, trabaja las revisiones de flujo de aire de abajo.** La descongelación no es tiempo muerto.
6. **Después de la descongelación, toma el conjunto completo de lecturas** — este es el único momento en que las lecturas significan algo.
7. **Nombra la causa con el número que la comprueba**, y cotiza la reparación (`sop.field.diagnostics` §prove).

## La bifurcación {#the-split}

| Lo que observas mientras se descongela | Hacia dónde apunta usualmente |
|---|---|
| Filtro cargado, cara del serpentín sucia, o rodete del soplador cargado | `#airflow` |
| Revisiones de flujo de aire todas limpias, presión estática normal | `#other-causes` — probablemente carga o dispositivo de medición |
| Temperatura exterior por debajo de aproximadamente 60°F cuando se congeló | Correr el AC en clima frío — a menudo todo el diagnóstico |
| Termostato en muy bajo con funcionamiento continuo toda la noche | Condición de operación, no una falla |

### Flujo de aire — revísalo todo antes de tocar un manómetro {#airflow}

La gran mayoría de los serpentines congelados son por flujo de aire, y los problemas de flujo de aire son más baratos de arreglar y más fáciles de comprobar.

| Revisión | Qué buscar |
|---|---|
| **Filtro** | Cargado, colapsado, o un filtro de MERV alto en una ranura demasiado pequeña para él |
| **Cara del serpentín interior** | Capa de suciedad en el lado de entrada — quita el acceso y mira de verdad |
| **Rodete del soplador** | Aspas cargadas. Puede verse limpio desde la carcasa y estar medio lleno |
| **Presión estática externa total** | Contra la calificación de 0.5" c.a. |
| **Rejillas y retornos** | Cerrados, bloqueados por muebles, o cubiertos por una alfombra |
| **Velocidad del soplador / configuración ECM** | Especialmente si alguien más estuvo en el equipo antes que tú |
| **Restricción de ductos** | Flexible aplastado, dampers cerrados, retorno subdimensionado |

### Luego el resto {#other-causes}

- **Carga baja por una fuga.** La segunda causa más común, y la que regresa si solo agregas refrigerante.
- **Dispositivo de medición** — TXV atascado o restringido, orificio fijo bloqueado.
- **Correr el AC en clima frío.** Por debajo de aproximadamente 60°F al exterior, un sistema estándar se va a congelar sin importar su salud.
- **Soplador interior fallado**, o un soplador corriendo en la derivación equivocada.
- **Termostato en muy bajo con funcionamiento continuo**, particularmente durante la noche.

## Después de la descongelación {#after-thaw}

Toma el conjunto completo (`reference.diagnostic-readings`): salto de temperatura (meta 15–22°F), TESP contra 0.5" c.a., superheat y subcooling, amperajes de compresor y soplador.

| Lo que encuentras | Hacia dónde apunta |
|---|---|
| Salto y estática normales, carga correcta | La restricción que ya despejaste era la causa |
| Estática alta, salto bajo | Flujo de aire — y el hielo regresa si no se arregla |
| Subcooling bajo, superheat alto, flujo de aire correcto | Baja de carga → **buscar la fuga** |
| Superheat bajo con flujo de aire correcto | Dispositivo de medición |

## Diagnósticos erróneos comunes {#misdiagnoses}

| Se parece a | Es en realidad | Se detecta por |
|---|---|---|
| "Bajo de refrigerante" | Restricción de flujo de aire en un sistema con carga completa | Revisiones de flujo de aire hechas antes de conectar manómetros |
| "Necesita recarga, se agregó gas ahí mismo" | Serpentín congelado dando una lectura falsa de succión baja | Nunca conectar manómetros a un sistema con hielo todavía encima |
| "TXV malo" | Simple carga de filtro/soplador | Revisión completa de flujo de aire antes de tocar el dispositivo de medición |
| "Fue algo pasajero, corrió bien después" | Operación en clima frío enmascarando un problema de flujo de aire subyacente | Pregunta la temperatura exterior al momento de la falla y revisa el flujo de aire de todos modos |

## Qué dices {#verbatim}

> "El hielo fue el síntoma, no el problema. Lo que lo causó fue [el filtro / un rodete de soplador sucio / refrigerante bajo por una fuga]. Necesito dejarlo descongelar por completo antes de poder medir algo con precisión — eso normalmente toma de treinta a noventa minutos."

> "No puedo probar un sistema congelado honestamente. Cualquier lectura que tomara ahora mismo estaría equivocada y podría llevarme a agregar refrigerante que su sistema no necesita."

> "Si no atendemos la causa, se va a volver a congelar. Así se ve eso, y esta es la diferencia entre el arreglo barato y el que en realidad se sostiene."

Si la causa fue un filtro, dilo con claridad y cotízalo como un filtro — una respuesta barata y honesta en un día caluroso vale más que el ticket que no escribiste.

## Cuando algo sale mal {#failures}

**Conectas los manómetros antes de que termine la descongelación y las lecturas se ven "bajas".** Detente. No agregues refrigerante. Espera una descongelación completa y revisa de nuevo. Si ya se agregó refrigerante durante una descongelación parcial, dilo en las notas y revisa el subcooling de nuevo una vez completamente descongelado — puede que necesites recuperar el exceso.

**El cliente quiere que despiques el hielo para acelerar las cosas.** Niégate. Explica el riesgo de daño al serpentín en términos claros y ofrece el cronograma de descongelación con solo ventilador, o reagenda la visita de regreso.

**Las revisiones de flujo de aire salen limpias y aun así encuentras hielo formándose de nuevo durante la visita.** Pasa a carga y dispositivo de medición — no sigas revisando el flujo de aire que ya descartaste.

**El cliente rechaza la búsqueda de fuga y quiere una carga para pasar una ola de calor.** Es una decisión legítima de su parte. Registra que se ofreció, se rechazó, y que el sistema se va a volver a congelar.

### Reglas duras

- Nunca raspes ni despiques hielo de un serpentín.
- Nunca registres ni actúes sobre una lectura de manómetro tomada mientras el hielo sigue presente.
- Nunca agregues refrigerante sin una búsqueda de fuga, o sin documentar que se ofreció y se rechazó.
- Nunca cierres el ticket sin identificar una causa de flujo de aire versus una causa de carga — "se descongeló y corrió bien" no es un diagnóstico.

## Qué se registra {#record}

- **Foto del hielo** antes de descongelar.
- **Qué estaba congelado** — serpentín interior, línea de succión, unidad exterior, o todo.
- **Condición y medida del filtro**, y TESP.
- **Todas las lecturas posteriores a la descongelación.** Las lecturas de manómetro previas a la descongelación no son válidas y no deben registrarse como si lo fueran.
- **Causa identificada**, y si se realizó una búsqueda de fuga.
- **Si se necesitó una visita de regreso** para una descongelación completa.

## Calificación de QA {#qa}

| Puntaje | Lo que muestra el expediente |
|---|---|
| **2** | Hielo fotografiado, descongelación completa antes de tomar cualquier lectura, causa identificada con números posteriores a la descongelación, búsqueda de fuga realizada o rechazada y documentada |
| **1** | Resultado correcto, pero se registraron lecturas previas a la descongelación como si fueran válidas, o el razonamiento de la visita de regreso no está escrito |
| **0** | Refrigerante agregado o una pieza condenada con base en una lectura tomada mientras el serpentín seguía congelado |

## Relacionado

- El estándar detrás de todo esto: `sop.field.diagnostics`
- Dónde empieza una llamada de enfriamiento: `sop.field.no-cooling`
- Metas y umbrales: `reference.diagnostic-readings`
