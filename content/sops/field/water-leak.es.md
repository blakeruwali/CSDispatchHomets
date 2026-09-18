---
translation_of: sop.field.water-leak
source_version: 1
---

# Queja: Fuga de Agua

> **Averigua DÓNDE está el agua antes de averiguar por qué. El agua del drenaje y la condensación se ven idénticas en un techo y no tienen nada más en común — causa distinta, solución distinta, precio distinto.**

Es la llamada donde la reparación obvia es, casi siempre, la equivocada. En toda queja de agua hay algo visiblemente mal cerca — una charola húmeda, un ducto sin aislamiento, una mancha vieja — y arreglar lo que se ve no es lo mismo que arreglar lo que está mojando el techo del cliente. Una reparación dirigida a la fuente equivocada regresa, y regresa con un cliente que ya pagó.

## Tres fuentes, un charco {#three-sources}

Casi toda llamada residencial de agua es una de tres cosas. Se distinguen por **dónde está el agua realmente**, no por lo que se ve peor.

| Dónde está el agua | Qué es | A dónde vas |
|---|---|---|
| Gotea o escurre desde **un solo punto** | Drenaje de condensado, charola, o una junta con fuga | [El drenaje](#drain) |
| En la **cara y las aletas** de la rejilla | El aire de suministro está por debajo del punto de rocío del cuarto | [La cara de la rejilla](#face) |
| En el **marco, el aro del techo, o el techo alrededor** | Aire húmedo condensándose en metal frío en la bota | [La bota](#boot) |

**Dos pueden ser ciertas a la vez.** Esa es la visita de regreso que este SOP existe para evitar — ver [No te detengas en la primera](#both).

## Antes que nada — localiza el agua {#locate}

**Quita la rejilla y mira.** Treinta segundos, y decide todo lo que sigue.

1. **¿Dónde está mojado?** Cara y aletas, marco y aro del techo, o escurriendo desde un solo punto.
2. **¿Es condensación o escurrimiento?** La condensación se forma pareja sobre una superficie. El escurrimiento traza, gotea y sigue la gravedad desde un lugar.
3. **Fotografía con la rejilla quitada**, antes de tocar nada.
4. **Aprieta con la mano el aislamiento** que encuentres en la bota. Aislamiento mojado ya es un hallazgo — ver [La bota](#boot).

**No cotices nada antes de hacer esto.** Un precio dado desde la entrada en una llamada de agua es una adivinanza.

## Fuente 1 — el drenaje {#drain}

Lo más barato de revisar, así que revísalo primero.

| Revisión | Qué buscas |
|---|---|
| **Charola primaria** | Agua estancada, línea de óxido, crecimiento biológico |
| **Línea de drenaje** | Que corra libre al vaciarle agua, o que se regrese |
| **Trampa** | Seca, faltante, o con profundidad equivocada — una trampa seca deja que el aire jale el agua de regreso |
| **Interruptor de flotador** | Disparado, mojado, o puenteado por alguien antes que tú |
| **Charola secundaria** | Agua en ella significa que la primaria ya falló al menos una vez |
| **Reparaciones previas** | Una junta que alguien más cortó es una junta que puede llorar |

**Un drenaje tapado muchas veces es un síntoma, no la causa.** Un serpentín trabajando mucho más frío de lo normal condensa más fuerte y puede rebasar un drenaje que llevaba años aguantando. Si encuentras una línea tapada, sigue adelante — toma las lecturas de todos modos y averigua por qué el sistema está haciendo tanta agua.

> ⚠️ **Destapar el drenaje hace que el problema visible se detenga.** No hace que una rejilla que suda se detenga. Si el agua venía de las dos, el cliente ve un techo seco hoy y uno mojado la semana que entra.

## Fuente 2 — condensación en la cara de la rejilla {#face}

La rejilla está **dentro del flujo de aire**. La temperatura de su superficie la define el aire que le pasa por encima. Cuando esa superficie baja del punto de rocío del cuarto, se forma agua — igual que suda un vaso frío en un día caluroso.

La **humedad relativa (HR)** es cuánta humedad trae el aire, como porcentaje de lo que podría traer a esa temperatura. La HR más la temperatura del cuarto te dan el **punto de rocío** — la temperatura a la que el agua empieza a condensarse. Ese es el único umbral que importa aquí.

Una cara de rejilla mojada significa una de dos cosas, y las lecturas te dicen cuál:

- **El aire de suministro está demasiado frío** — un serpentín trabajando muy por debajo de lo normal, por poco flujo de aire o por problema de carga
- **El cuarto está demasiado húmedo** — punto de rocío alto, así que hasta el aire de suministro normal condensa

> **El aislamiento no puede arreglar una cara de rejilla mojada.** El aislamiento protege el cuerpo del ducto y la bota del aire del ambiente. No le hace nada al aire que pasa por la rejilla. Si la cara y las aletas están mojadas, forrar el ducto es trabajo dirigido al mecanismo equivocado — y el cliente paga una reparación que nunca iba a funcionar.

## Fuente 3 — condensación en la bota o el ducto {#boot}

**Marco, aro del techo o techo** mojados — no las aletas — significa que aire húmedo está llegando a metal frío fuera del flujo de aire. Esta es la que sí es de aislamiento, y también la que se instala mal.

| Revisión | Qué buscas |
|---|---|
| **¿Está mojado el aislamiento?** | Apriétalo. Mojado significa que la barrera de vapor no está haciendo su trabajo |
| **¿Están selladas las uniones?** | El aislamiento con cara de foil solo es barrera de vapor si cada unión está encintada o con mastique |
| **¿Está sellado a la bota?** | Puesto encima no es sellado. El aire húmedo se pasa de largo |
| **¿Algún hueco hasta el metal desnudo?** | Con uno basta |
| **Óxido o manchas viejas** | Te dicen cuánto tiempo lleva pasando esto |

> ⚠️ **La fibra de vidrio puesta sobre una bota fría sin una barrera de vapor continua empeora el problema, no lo arregla.** El vapor atraviesa la manta, condensa en el metal de abajo, y ahora el aislamiento saturado retiene agua contra el ducto donde nadie la ve.

## Las lecturas {#readings}

Deja el sistema enfriando **15 minutos** antes de tomar nada, y toma todo el juego en el mismo ciclo. Los umbrales están en `reference.diagnostic-readings` — abajo está dónde poner la sonda.

| Lectura | Dónde |
|---|---|
| **Temperatura del cuarto + HR** | A media habitación, a la altura del pecho, **a 6 pies o más de la rejilla.** Aguanta quieto 2–3 minutos — los sensores de HR son lentos y el primer número siempre está mal |
| **Temperatura del aire de suministro** | Dentro del flujo, en la rejilla |
| **Temperatura de superficie de la rejilla** | Pistola infrarroja, sobre el metal |
| **Temperatura del aire de retorno** | En la manejadora, por la ranura del filtro — pasando el filtro, antes del serpentín, con la punta sin tocar metal. **No en la rejilla de retorno del cuarto** |
| **Diferencial de temperatura** | Retorno menos suministro. Meta **15–22°F** |
| **Presión estática externa total** | Pleno de suministro y pleno de retorno, puntas **perpendiculares al flujo.** Suma los valores absolutos |
| **Sobrecalentamiento / subenfriamiento** | Solo después de descartar flujo de aire — ver `sop.field.frozen-coil` para entender por qué importa el orden |

**La placa de datos del equipo siempre gana.** La presión estática se referencia a 0.5" c.a. en la mayoría del equipo residencial, pero las manejadoras inverter y de mini-split ducteado muchas veces están calificadas mucho más bajo. Lee la placa, anota el valor nominal, y compara contra ese.

## Punto de rocío según temperatura del cuarto y HR {#dew-point}

| Temp. del cuarto | 50% HR | 55% | 60% | 65% | 70% |
|---|---|---|---|---|---|
| **72°F** | 52 | 55 | 57 | 60 | 62 |
| **74°F** | 54 | 57 | 59 | 62 | 64 |
| **76°F** | 56 | 59 | 61 | 63 | 65 |
| **78°F** | 58 | 60 | 63 | 65 | 67 |

Si la superficie de la rejilla marca por debajo del punto de rocío de esta tabla, la condensación queda comprobada y se acabó la discusión.

## Cómo leer el resultado {#result}

| Lo que encuentras | A qué apunta |
|---|---|
| Agua desde un punto, charola mojada, línea tapada | **Drenaje.** Destápalo — y aun así toma las lecturas |
| Punto de rocío arriba de 60°F | **La casa está demasiado húmeda.** El ducto no lo va a arreglar; busca la fuente de humedad |
| Diferencial arriba de 22°F con suministro frío | **Poco flujo de aire.** Filtro, serpentín, soplador, dampers, restricción de ducto — luego estática |
| Estática arriba de lo que dice la placa | **Restricción de ducto.** Flex colgado, tramos aplastados, retorno chico |
| Diferencial normal, retorno ya frío | **El cuarto se está enfriando de más.** Problema de control o termostato, no del serpentín |
| Diferencial y estática normales, cara todavía mojada | Revisa otra vez el punto de rocío. Si está bien, el agua no es condensación — regresa a [localiza](#locate) |
| Marco mojado, cara seca | **Bota.** Aislamiento, barrera de vapor, sellado al techo |

## No te detengas en la primera {#both}

Una queja de agua puede tener dos causas al mismo tiempo, y el drenaje siempre es la que encuentras primero porque es la que revisas primero.

**Antes de cerrar el trabajo, pregúntate: ¿lo que encontré explica lo que el cliente describió?** Un drenaje tapado no pone condensación en la cara exterior de una rejilla. Si el cliente describió que sudaba y tú encontraste una obstrucción, encontraste *un* problema, no necesariamente *el* problema.

Toma las lecturas aunque ya hayas encontrado algo. Cuestan quince minutos y son la diferencia entre una visita y cuatro.

## Qué le dices al cliente {#customer}

Nombra la fuente, no el síntoma:

> "El agua venía de [el drenaje de condensado / el aire de la rejilla que está más frío que el cuarto / el metal arriba del techo]. Lo que lo causó fue [X]. Ya [hice Y], y este es el número que nos dice que funcionó — su aire de suministro debe estar alrededor de 55°F en lugar de 48°F."

Si encontraste una causa y sospechas otra, **dilo también, antes de irte.** Un cliente al que le avisaste de entrada que puede haber un segundo problema es un cliente que te cree cuando aparece. Ese mismo cliente sin avisar es una visita de regreso.

## Qué se registra {#record}

- **Foto con la rejilla quitada**, antes de tocar nada
- **Dónde estaba el agua** — cara y aletas, marco y techo, o goteo de un solo punto
- **Temperatura del cuarto y HR, y el punto de rocío** que dan
- **Suministro, retorno, diferencial y temperatura de superficie de la rejilla**
- **Presión estática, y el valor nominal de la placa** contra el que la comparaste
- **Condición de charola, línea de drenaje, trampa e interruptor de flotador**
- **Condición del aislamiento** — mojado o seco, uniones selladas o no
- **Causa identificada**, y si se sospecha una segunda
- **Todas las lecturas que tomaste, incluidas las normales.** Las lecturas normales son las que descartan causas, y el siguiente técnico en este trabajo las necesita tanto como las anormales

## Relacionado

- El estándar detrás de todo esto: `sop.field.diagnostics`
- Umbrales y metas: `reference.diagnostic-readings`
- Por qué el flujo de aire va antes que la carga: `sop.field.frozen-coil`
- Llamadas de enfriamiento: `sop.field.no-cooling`
