---
translation_of: sop.field.water-leak
source_version: 1
---

# Queja: Fuga de Agua

> **El agua es un síntoma, nunca la falla. Encuentra qué la puso ahí, compruébalo con una lectura y cotiza la causa — no el charco.**

El cliente ve agua en un techo o en el piso y quiere que pare. Pararla toma diez minutos. Averiguar por qué empezó es la visita, y es la diferencia entre una llamada repetida en agosto y un trabajo que aguanta.

## Cuándo aplica {#applies}

Cualquier llamada donde aparece agua en o debajo de un manejador de aire, horno, serpentín, condensador, cabeza de mini-split o línea de refrigerante. Si el agua viene de plomería y no de HVAC, detente y pásalo al lado de plomería — una línea de suministro arriba de un horno no es un diagnóstico que nos toque adivinar.

Si la queja es *hielo* y no agua, trabaja primero `sop.field.frozen-coil`. Un serpentín congelado que se descongela mientras manejas a la llamada se presenta como fuga, y es la confusión más común de esta página.

**Localiza el agua antes de diagnosticar por qué está ahí.** Goteo desde un solo punto es este documento. Agua repartida pareja sobre la *cara y las aletas* de una rejilla, o sobre el *marco y el aro del techo* alrededor, es condensación — punto de rocío, no drenaje — y eso es `sop.field.sweating-grille`. Las dos se ven idénticas en un techo y no tienen nada más en común: causa distinta, solución distinta, precio distinto. Las dos pueden ser ciertas a la vez en la misma llamada, y esa es la visita de regreso que este par de documentos existe para evitar.

## La escalera de ejecución {#execution}

Trabájalo en este orden. No brinques al paso 4 porque la trampa se vea obvia.

1. **Hazlo seguro y detén el daño.** Apaga el sistema si hay agua cerca de lo eléctrico. Aspira la charola. Protege el techo o el piso **antes** de diagnosticar — un cliente que te ve diagnosticar mientras se le empapa el tablaroca no va a escuchar una sola palabra de tus hallazgos.
2. **Establece dónde está el agua, con precisión.** Charola primaria, charola secundaria, la línea de drenaje misma, una mancha en el techo a un metro de la unidad, o la línea de refrigerante. Fotografíalo antes de tocar nada. Esa foto es la evidencia del estimado.
3. **Revisa el flotador de seguridad.** ¿Existe, está conectado, está activado? Un flotador activado que hizo su trabajo significa que el drenaje está tapado — esa es tu respuesta, no una molestia que haya que puentear. **Un flotador faltante es un hallazgo que anotas en cada una de estas llamadas.**
4. **Prueba el drenaje primario.** Vierte agua en la charola y observa cómo desaloja. Flujo lento o nulo es obstrucción. Verifica que la trampa exista, esté bien configurada y cebada — una trampa faltante o sin cebar en un manejador de presión negativa jala aire y retiene agua en la charola todo el día.
5. **Destapa y verifica.** Aspira desde la terminación, purga la línea, vuelve a verter y observa que corra limpio. **Vuelve a verificar después de destapar, o no terminaste la reparación.**
6. **Si el drenaje está limpio y el agua sigue apareciendo, no es un problema de drenaje.** Pasa a la tabla de abajo.

## La bifurcación — qué significa realmente el agua {#the-split}

| Lo que observas | Lo que suele ser |
|---|---|
| Charola llena, drenaje lento, flotador activado | Drenaje primario tapado / serpentín sucio soltando biopelícula |
| Charola seca, agua en la línea de refrigerante | Aislamiento faltante o dañado — está sudando, no fugando |
| Agua en la cara de la rejilla, las aletas o el aro del techo | Condensación — `sop.field.sweating-grille`, mide antes de aislar |
| Agua solo cuando el sistema trabaja fuerte | Trampa subdimensionada o de presión negativa, o el flujo de aire arrastra el condensado fuera del serpentín |
| Mancha en el techo lejos de la unidad | Desborde de la charola secundaria, o línea de drenaje rota dentro del techo |
| Hielo en el serpentín, agua al derretirse | `sop.field.frozen-coil` — carga o flujo de aire |
| Agua en un horno/serpentín horizontal en el ático | Charola oxidada y perforada, o la pendiente del drenaje está mal |
| Óxido y manchas, sin agua activa hoy | Crónico, de tiempo atrás. Documéntalo — cambia la conversación de reemplazo |

**Mide antes de concluir.** Las lecturas de flujo de aire y carga van en una llamada de fuga siempre que el serpentín esté involucrado: presión estática externa total, diferencial de temperatura y sobrecalentamiento/subenfriamiento según `reference.diagnostic-readings`. Un serpentín que se congela y descongela parece problema de plomería y es problema de refrigerante o de flujo de aire.

## Qué dices {#verbatim}

Cuando encuentres la causa, di causa primero, reparación después, precio al final:

> "Esto es lo que encontré. Su línea de drenaje estaba tapada, y eso regresó el agua a la charola hasta que el interruptor de seguridad apagó el sistema — ese interruptor es lo que evitó que esto llegara a su techo. Ya destapé la línea y la probé. La razón por la que se tapó es que el serpentín de arriba está sucio, así que esto va a regresar la próxima temporada si no atendemos eso también."

Cuando no hay flotador de seguridad:

> "Algo que quiero que sepa: este drenaje no tiene interruptor de seguridad. Si se vuelve a tapar mientras usted está en el trabajo, no hay nada que apague el sistema — el agua se va al techo. Es una pieza pequeña, y preferiría que usted la tuviera."

Cuando la charola del ático está oxidada y perforada:

> "La charola debajo de esta unidad se oxidó y se perforó, así que ya no está conteniendo el agua. Le enseño la foto. Le puedo dar las opciones hoy mismo — no quiero parchar algo que va a estar otra vez sobre su recámara en un mes."

## Cuando sale mal {#failures}

**El drenaje queda limpio y el cliente dice "¿entonces ya quedó?" con el serpentín hecho un asco.** No le des la razón. Destapar la línea sin nombrar la causa es como esta misma llamada se agenda otra vez en seis semanas con un cliente más molesto. Di la causa en voz alta y ponla en la factura, aunque rechacen la limpieza del serpentín.

**El flotador está activado y el sistema no arranca en julio.** La tentación es puentearlo para "dejarlos con aire esta noche". **Nunca puentees un flotador de seguridad.** Ese es el interruptor funcionando. Puentearlo nos convierte a nosotros en la causa del daño al techo.

**No encuentras agua activa.** No inventes una causa. Documenta las manchas, toma lecturas, anota las condiciones que lo reproducirían y dile al cliente con claridad qué encontraste y qué no. Un honesto "no pude reproducirlo, esto es lo que revisé y esto es lo que hay que vigilar" es una visita defendible. Una reparación adivinada no lo es.

**Resulta que el agua es de plomería.** Detente, dilo y haz que se agende el oficio correcto. No hagas una reparación parcial de plomería en un ticket de HVAC.

### Reglas duras

- Nunca puentees ni quites un flotador de seguridad.
- Nunca dejes un drenaje sin verificar después de destaparlo — vierte y observa.
- Nunca cierres una llamada de fuga sin registrar si existe flotador de seguridad.
- Nunca reemplaces una charola oxidada sin fotografiar la original.
- Nunca cotices el charco. Cotiza la causa.

## Qué se registra {#record}

- Foto del agua, antes de tocarla, y foto después de la reparación.
- Flotador: presente / ausente / activado / puenteado-al-llegar.
- Drenaje primario: flujo antes, flujo después.
- Trampa: presente, cebada, bien configurada — sí o no.
- Condición del serpentín y presión estática.
- Sobrecalentamiento / subenfriamiento y diferencial de temperatura si el serpentín estuvo involucrado.
- Cada recomendación rechazada, dicha al alcance del cliente y anotada en el trabajo.

Placa de datos del equipo capturada según `sop.field.equipment-capture` — en este tipo de llamada tampoco hay excepciones.

## Calificación de QA {#qa}

| Puntaje | Cómo se ve |
|---|---|
| **2** | Causa identificada y comprobada con una lectura o foto. Drenaje verificado después de destapar. Estado del flotador registrado. El cliente escuchó la causa en palabras claras. |
| **1** | Se detuvo el agua y se destapó el drenaje, pero no se nombró ni se documentó la causa de fondo. |
| **0** | Flotador puenteado, drenaje sin volver a verificar, sin fotos, o la factura describe el charco en lugar de la falla. |

## Relacionado

- El estándar detrás de todo esto: `sop.field.diagnostics`
- Hielo primero, agua después: `sop.field.frozen-coil`
- Condensación en lugar de drenaje: `sop.field.sweating-grille`
- Umbrales y lecturas esperadas: `reference.diagnostic-readings`
