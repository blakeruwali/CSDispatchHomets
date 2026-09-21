---
translation_of: sop.field.sweating-grille
source_version: 2
---

# Queja: Rejillas con Condensación (Sudoración de Registros)

> **Una observación no es un diagnóstico. La condensación es un problema de punto de rocío hasta que midas lo contrario — y no puedes medirlo desde el pasillo.**

## La falla que este documento existe para evitar {#why}

En un trabajo real encontramos dos defectos genuinos: falta de aislamiento en el ducto y agua en la bandeja. Reparamos los dos. Ninguno era la causa de la queja del cliente. Los dos valía la pena arreglarlos — pero se vendieron como la solución a un síntoma que nadie había medido. El cliente pagó, la rejilla siguió sudando, y la llamada de regreso volvió como una disputa de garantía.

La condensación ocurre por exactamente una razón: **una superficie está en o por debajo del punto de rocío del aire que la toca.** Todo lo demás — aislamiento, flujo de aire, carga, sobredimensionamiento, una ventana abierta — es solo un mecanismo que produce esa condición. Tu trabajo es probar cuál mecanismo, con números, antes de cotizar una sola pieza.

## Cuándo aplica {#applies}

Cualquier queja de agua goteando de un registro de suministro, humedad o manchas en el techo o la pared alrededor de una rejilla, gotas visibles en la cara de la rejilla, o manchas de moho en un difusor. También aplica cuando lo encuentras tú mismo en una llamada no relacionada — una rejilla que suda que se encuentra, es una rejilla que suda que se documenta.

## Cómo llega esta llamada al tablero {#dispatch}

Despacho es dueño de la primera mitad de este protocolo. Las mediciones de abajo no sirven si el técnico llega sin los instrumentos o con un espacio de 30 minutos.

**Palabras clave en el ticket.** Cualquiera de estas convierte una llamada genérica de "fuga de agua" o "problema de AC" en un trabajo de rejilla con condensación: *rejilla sudando, registro goteando, agua en el techo alrededor de la rejilla, rejilla mojada, gotas en la ventila, manchas de moho en el difusor, techo húmedo solo cuando corre el AC*. El CSM separa esto de una fuga de bandeja (`sop.csm.symptom-clarification`); Despacho lo detecta cuando no lo hacen.

**Despacho hace esto antes de que salga el técnico:**

1. **Etiqueta el ticket `SWEATING-GRILLE`** y pega la lista de mediciones del PASO 2 y el PASO 4 en las notas del trabajo.
2. **Confirma que el camión lleva los instrumentos** — psicrómetro o higrómetro, termómetro infrarrojo, termómetro de sonda, kit de presión estática. Sin pistola infrarroja no hay diagnóstico válido; manda otro técnico.
3. **Agéndalo como diagnóstico, no como llamada rápida.** El sistema debe correr en enfriamiento 15 minutos antes de que cualquier lectura sea válida (`sop.dispatch.job-duration`).
4. **Pide que dejen el enfriamiento encendido.** Dile al cliente en la confirmación: que corra el sistema al menos una hora antes de la llegada.
5. **Prioridad.** Servicio normal (P7) salvo que el panel de yeso esté saturado cerca de una luminaria o haya moho visible extendido — entonces es P2 del mismo día (`sop.dispatch.priorities`).
6. **Temporada.** Solo temporada de enfriamiento. Cuando entra la calefacción el síntoma desaparece y no se puede medir hasta la primavera — se agenda esta semana, no "cuando se pueda".

**Cerrar el ciclo.** Despacho no acepta el cierre sin punto de rocío, temperatura de superficie de la rejilla y delta-T en las notas (`sop.field.forms`).

## Puerta de seguridad {#safety}

- **Techo mojado = riesgo eléctrico.** Si el panel de yeso está saturado cerca de una luminaria o una luz empotrada, corta el circuito antes de sondear.
- **No alteres moho sospechoso.** Crecimiento visible más allá de manchas superficiales en la cara de la rejilla es una conversación de remediación, no una limpiada. Documenta y escala.
- **Escaleras y superficies mojadas.** Condensación en una rejilla de techo significa condensación en el piso debajo.

---

## PASO 1 — Confirma que la queja es condensación {#step-1}

El agua en un registro tiene tres fuentes posibles, y se manejan con tres documentos diferentes. Resuelve esto primero.

| Lo que ves | Fuente probable | A dónde va |
|---|---|---|
| Gotas/película en la **cara y el marco de la rejilla**, peor en ciclos largos, se seca con el sistema apagado | Condensación | Este documento |
| Agua **corriendo desde dentro del ducto**, manchando la bota, peor después de que corre el serpentín | Bandeja de drenaje / desbordamiento del serpentín | `sop.field.water-leak` |
| Agua presente con el sistema **apagado por horas**, o sin relación con el tiempo de operación | Envolvente del edificio / plomería / techo | No es HVAC — documenta y asesora |

Toca la rejilla. Fría y mojada es condensación. Mojada y a temperatura ambiente no lo es.

## PASO 2 — Mide el aire interior {#step-2}

**Toma estas lecturas antes de tocar nada.** Si el sistema ha estado apagado, corre enfriamiento 15 minutos primero y toma todas las lecturas dentro del mismo ciclo.

- Temperatura de bulbo seco interior: ______ °F
- Humedad relativa interior: ______ %
- **Punto de rocío calculado: ______ °F**
- Bulbo seco / HR exterior: ______ °F / ______ %

Usa la tabla del PASO 3 para convertir. **Un punto de rocío arriba de 60 °F es el número clave** — a ese nivel casi cualquier superficie acondicionada va a sudar y el aislamiento del ducto no te va a salvar.

## PASO 3 — Referencia de punto de rocío {#step-3}

Punto de rocío interior (°F) según bulbo seco y humedad relativa.

| Temp. del cuarto | 45% HR | 50% HR | 55% HR | 60% HR | 65% HR |
|---|---|---|---|---|---|
| **72 °F** | 49 | 52 | 55 | 57 | 59 |
| **74 °F** | 51 | 54 | 57 | 59 | 62 |
| **76 °F** | 54 | 56 | 59 | 61 | 63 |
| **78 °F** | 56 | 58 | 60 | 63 | 65 |

Compárala con la temperatura de superficie de la rejilla del PASO 4. **Si la superficie de la rejilla ≤ punto de rocío, va a sudar — eso es física, no un defecto.** La pregunta entonces es *por qué el aire está tan húmedo* o *por qué esa rejilla está tan fría*.

## PASO 4 — Temperaturas {#step-4}

Corre enfriamiento 15 minutos primero. Todas las lecturas en el mismo ciclo.

**Aire de retorno — en el manejador de aire, no en el cuarto:**

1. Saca el filtro de su ranura
2. Sondea por la ranura, la punta en la corriente de aire, después del filtro, antes del serpentín
3. Mantén la punta lejos del metal
4. Espera 30–60 segundos

- Retorno: ______ °F   Suministro: ______ °F   **Delta-T: ______ °F**
- **Superficie de la rejilla (IR): ______ °F**
- Punto de rocío del espacio (del PASO 3): ______ °F
- Diferencia = superficie de rejilla − punto de rocío: ______ °F

**Delta-T de 16–22 °F es normal.** Arriba de 22 °F apunta a flujo de aire bajo — el aire pasa demasiado tiempo en el serpentín, sale demasiado frío, y enfría la rejilla por debajo del punto de rocío. Abajo de 16 °F con sudoración apunta a un problema de carga de humedad, no de superficie fría.

## PASO 5 — Presión estática y flujo de aire {#step-5}

Solo si el delta-T está alto, o el cliente reporta flujo débil en ese registro.

- Presión estática externa total: ______ in. w.c. (meta ≤ 0.5 salvo especificación distinta)
- Condición / restricción del filtro: ______
- Compuertas, registros cerrados, flex aplastado, velocidad del soplador: ______

El flujo de aire bajo es la causa *mecánica* más común de una rejilla fría. Corrige el flujo de aire antes de corregir cualquier otra cosa.

## PASO 6 — La envolvente alrededor de la rejilla {#step-6}

Ahora, y solo ahora, revisa la construcción.

- ¿Aislamiento del ducto presente e intacto en la bota? ______
- ¿Bota sellada a la abertura del techo/pared, o hay aire húmedo del ático lavando su parte trasera? ______
- Material de la rejilla — metal desnudo en un espacio húmedo es el peor caso ______
- ¿Espacio no acondicionado arriba/detrás (ático, sótano, garaje)? ______

**Una bota sin aislamiento en una casa seca no suda.** Los defectos de aislamiento importan solo cuando el punto de rocío ya está alto. Repórtalos por lo que son: un defecto que contribuye, no la causa.

---

## Decidiendo la causa {#decision}

| Hallazgo | Causa | Lo que cotizas |
|---|---|---|
| Punto de rocío > 60 °F, delta-T normal, todas las rejillas afectadas | **Carga de humedad interior** | Deshumidificación, conversación de tiempo de operación/sobredimensionamiento, fuentes de infiltración (ventanas abiertas, extractores, sótano) |
| Delta-T > 22 °F, estática alta, una o pocas rejillas | **Flujo de aire bajo** | Corrección de flujo de aire — filtro, restricción de ducto, velocidad del soplador, compuertas cerradas |
| Punto de rocío normal, superficie de la rejilla muy por debajo, aislado a una bota en espacio no acondicionado | **Bota sin aislar / sin sellar** | Aislar y sellar la bota |
| Ciclos cortos, el espacio nunca se seca, equipo sobredimensionado | **Sobredimensionamiento / poco tiempo de operación** | Etapas, perfil del soplador, o conversación de reemplazo — con los números |
| Todo en rango, condensación solo en días extremos | **Límite ambiental** | Explícalo honestamente; ofrece deshumidificación como opción, no como reparación |

## Reglas firmes {#rules}

- **Nunca cotices una reparación por sudoración sin punto de rocío, temperatura de superficie de la rejilla y delta-T registrados.** Tres números. Sin excepciones.
- **Nunca vendas aislamiento de ducto como "la solución" a la condensación** a menos que los números muestren que la bota es la excepción y el punto de rocío del espacio está en rango. Véndelo como reparación de un defecto, declarado como tal.
- **Nunca repares un defecto no relacionado y dejes al cliente creer que la queja está resuelta.** Si arreglas el drenaje y la rejilla va a seguir sudando, dilo en sitio y escríbelo en la factura.
- **Nunca cierres el trabajo en temporada de enfriamiento sin decirle al cliente la trampa estacional** (abajo).
- Fotografía cada lectura y la condición de la rejilla, y adjúntalas al trabajo en ServiceTitan según `sop.field.forms`.

## La trampa de la temporada de enfriamiento {#seasonal}

Prende la calefacción y el síntoma desaparece. No está arreglado — es octubre. Un cliente al que le dijeron "ya quedó" en otoño llama de regreso en mayo, molesto, y el argumento es nuestro porque dejamos que lo creyera.

Di esto antes de irte:

> "Esto es un tema de humedad y temperatura, así que se calla en cuanto deja de enfriar. Si no corregimos la causa, lo va a ver otra vez la primera semana húmeda de la primavera. Prefiero que lo escuche de mí ahora y no que lo descubra entonces."

## Lo que va en la factura {#documentation}

Registra, en las notas del trabajo:

1. Todas las lecturas de los PASOS 2–4, con el punto de rocío calculado
2. La causa identificada de la tabla de decisión
3. Cada defecto encontrado, **marcado como causa o contribuyente**
4. Si se espera que la queja vuelva a ocurrir, y bajo qué condiciones
5. Fotos: condición de la rejilla, lectura IR, pantallas de manómetros/medidores

## Calificación de calidad {#qa}

| Puntaje | Estándar |
|---|---|
| **0** | Cotizó o realizó trabajo sin registrar punto de rocío, temperatura de rejilla o delta-T. Vendió la reparación de un defecto como la causa. |
| **1** | Lecturas tomadas pero incompletas, o causa identificada sin la conversación estacional y sin declaración escrita. |
| **2** | Lecturas completas de los PASOS 2–6 registradas, causa identificada con la tabla de decisión, defectos contribuyentes declarados por separado de la causa, trampa estacional explicada en sitio, fotos y notas en ServiceTitan. |
