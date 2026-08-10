---
translation_of: reference.diagnostic-readings
source_version: 2
---

# Valores de Diagnóstico — Los Números Detrás de los Formularios

> **Cada valor de esta página está tomado de los propios formularios de inspección por puntos de ServiceTitan.** Este documento no inventa un segundo estándar — reúne el que ya está incorporado en los formularios, para que un técnico vea el panorama completo en una sola página y un supervisor pueda revisarlo sin abrir diez formularios.
>
> **La placa de datos del equipo siempre manda.** Donde la placa y esta página no coincidan, sigue la placa y anota cuál usaste.

## Cómo califican los formularios {#grading}

Cada punto de cada inspección termina en uno de cuatro estados, y la redacción es la misma en todos:

| Estado | Qué significa | Qué se le dice al cliente |
|---|---|---|
| **PASS** (aprobado) | Probado dentro de la especificación del fabricante | No se necesita nada |
| **ATTENTION** (atención) | Funciona hoy, pero está desgastado o fuera de especificación | Conviene preverlo |
| **FAIL** (falla) | No está funcionando correctamente | Se recomienda reparación |
| **UNABLE TO TEST** (no se pudo probar) | El sistema no arrancaba, o no hubo acceso | Se dice claramente — nunca se deja en blanco |

**"No se pudo probar" es una respuesta legítima y no es una falla tuya.** Un sistema muerto no se puede medir. Lo que no es aceptable es calificar un punto como PASS porque no pudiste probarlo.

## Eléctrico {#electrical}

| Medición | PASS | ATTENTION | FAIL |
|---|---|---|---|
| **Capacitor de marcha** | Dentro del **6%** del valor nominal | **6–10% por debajo** del nominal — debilitándose | **Más del 10% por debajo** del nominal |
| **Calibración del termostato** | Dentro de **2°F** | Desviado 2°F o más | — |
| Contactor | Contactos limpios, cierra correctamente | Picaduras | Quemado, pegado, requiere reemplazo |
| Compresor | Consumo dentro del RLA | — | Aterrizado, devanado abierto, o rotor bloqueado |
| Protección contra sobretensiones | Instalada | Sin instalar, sistema desprotegido | — |

**Registra la capacitancia nominal y la medida como dos números separados.** El reporte del cliente los imprime lado a lado — 45 nominal, 28.4 medido — y esa comparación hace más trabajo que cualquier frase que pudieras escribir.

## Desempeño en enfriamiento {#cooling}

| Medición | Objetivo | Notas |
|---|---|---|
| **Diferencial de temperatura en el serpentín** | **15–22°F** (retorno menos suministro) | Por debajo del rango significa que el sistema no está retirando el calor que debería. Escribe N/A si no arrancaba. |
| **Sobrecalentamiento (superheat)** | **8–12°F** en sistema de **orificio fijo** | |
| **Subenfriamiento (subcooling)** | **8–12°F** en sistema con **TXV** | |
| Tipo de refrigerante | De la placa | **El R-22 tiene su propia conversación** — ver abajo. |

**R-22.** Ya no se fabrica en Estados Unidos. Sigue siendo legal darle servicio, pero el suministro proviene únicamente de existencias recuperadas y recicladas, lo que encarece significativamente cualquier reparación futura de fuga. Eso vale la pena decirlo **antes** de que el cliente se comprometa con una reparación mayor en un sistema R-22, no después — y el formulario de AC tiene un campo para registrar que lo hiciste.

## Flujo de aire y ductos {#airflow}

| Medición | Referencia | Notas |
|---|---|---|
| **Presión estática externa total** | Nominal de **0.5" c.a.** en la mayoría de equipos residenciales | La mayoría de las casas mide bastante por encima. Es el número más útil para explicar por qué un sistema del tamaño correcto sigue sin calentar o enfriar de forma pareja. |
| Fuga en ductos | Un sistema residencial típico pierde **20–30%** del aire que transporta | Registra CFM25 si se hizo prueba con duct blaster; si no, es una evaluación visual y el formulario lo indica. |
| Ducto en espacio no acondicionado | — | El aire del ático llega a ~55°C en agosto. El aislamiento frena la pérdida; el sellado detiene la fuga. Aquí ambos importan más que en un sótano. |

## Calefacción — calefactor y caldera {#heating}

| Medición | Referencia | Notas |
|---|---|---|
| **Elevación de temperatura** | **Dentro del rango de la placa** — normalmente una banda de 30–40°F | Por encima del rango significa que no pasa suficiente aire por el intercambiador de calor. |
| **CO en el conducto de humos, libre de aire** | **Aceptable por debajo de 100 ppm** | **Por encima de 400 ppm libre de aire: FALLA.** |
| Hollín en el intercambiador de calor | — | Aproximadamente **2–4% de pérdida de eficiencia por cada 1/32"** de acumulación. El hollín es combustible comprado y no usado. |
| Múltiple / boquilla | Según la placa | Nunca se ajusta de memoria. |

## Monóxido de carbono — ambiental {#co}

Medido **en el espacio habitado y alrededor del aparato, no en el conducto de humos**, con los aparatos de extracción funcionando.

| Lectura | Calificación | Acción |
|---|---|---|
| **0 ppm** | PASS | — |
| **Menos de 10 ppm** | PASS | — |
| **10–35 ppm** | ATTENTION | Se investiga la fuente y se ventila el espacio |
| **35 ppm o más** | FAIL | **Se apaga el aparato** |
| **70 ppm o más** | FAIL | **Se evacúa el espacio y se notifica a los bomberos** |

Esta escala no es una sugerencia y no es cuestión de criterio. Es la misma en el formulario de calefactor, el de caldera y el de calidad de aire, y es la única tabla de este documento que no admite excepciones.

## Calidad del aire interior {#iaq}

| Medición | PASS | ATTENTION | FAIL |
|---|---|---|---|
| **Humedad relativa** | **30–50%** | Menos de 30% (seco); 50–60% (elevada) | Más de 60% — favorece moho y ácaros; menos de 20% — muy seco |
| **CO₂** | Menos de **800 ppm** | 800–1200 ppm — ventilación marginal | Más de 1200 ppm — ventilación insuficiente |
| **MERV del filtro** | **MERV 11+** con superficie adecuada | MERV 8–10 (protege el equipo, limitado para las personas); MERV 6 o menos; o un filtro de MERV alto en una ranura demasiado pequeña | — |

El aire exterior ronda los **420 ppm** de CO₂, y ese es el número que le da sentido a la lectura interior para el cliente.

## Qué significa "registrado" {#recorded}

Los formularios tienen una lista desplegable calificada y un campo numérico para la mayoría de los puntos. **Se llenan los dos.** La calificación es lo que lee el cliente; el número es lo que un supervisor, un fabricante o el siguiente técnico puede verificar de verdad.

- **No** "revisé la carga, se ve bien" → `Superheat 11°F, sistema TXV, 82°F exterior.`
- **No** "el flujo de aire está bien" → `Presión estática total 0.82" c.a. contra 0.5" nominal.`
- **No** "el capacitor está bien" → `Nominal 45 MFD, medido 44.1 MFD — PASS, dentro del 6%.`

Un número que anotaste es un número que puedes defender un año después. "Bien" no le sirve de nada a la siguiente persona, incluido tu yo del futuro.

## Relacionado

- El procedimiento al que sirven estos números: `sop.field.diagnostics`
- Cómo obtener los datos de la placa: `sop.field.equipment-capture`
- Períodos de garantía que estas lecturas protegen: `reference.guarantees`
