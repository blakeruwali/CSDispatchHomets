---
translation_of: sop.field.equipment-capture
source_version: 4
---

# Registro de Equipos en ServiceTitan — Antes de Cualquier Trabajo

> **Cada equipo del domicilio va a ServiceTitan, con una placa de datos escaneada y fotografiada, antes de que toques una herramienta.**

## Cuándo aplica {#applies}

Cada visita, cada tipo de trabajo, sin excepciones: diagnóstico, reparación, afinación, instalación, estimado, callback, visita de garantía. Aplica a la unidad para la que te despacharon **y** a cualquier otro equipo en el domicilio — el segundo calefactor que nadie mencionó, el calentador de agua en el rincón, cada RTU en un techo comercial. El trabajo es *el equipo de este domicilio*, no *el equipo que se descompuso*.

No deja de aplicar solo porque la placa es físicamente inalcanzable sin un acceso inseguro, y aun en ese caso sigue aplicando la regla de abajo en `#unreadable` — no te saltas el registro, documentas por qué está incompleto.

## La escalera de ejecución {#execution}

1. **Antes de abrir un panel o tomar una herramienta, encuentra cada unidad en el domicilio** — la que te enviaron a atender y cualquier otra en la propiedad que caliente, enfríe, caliente agua o filtre aire.
2. **Escanea la placa de datos** en tu tableta. ServiceTitan lee el modelo y el número de serie directo de la placa — sin escribir, sin errores de transcripción.
3. **Fotografía la placa de datos**, llenando el encuadre, enfocada, incluso después de un escaneo exitoso. La foto es el respaldo si el escaneo lee mal un carácter meses después.
4. **Fotografía la unidad completa** donde está instalada, mostrando su condición y su entorno.
5. **Crea o actualiza el registro de equipo en el domicilio del cliente** — tipo, fabricante, modelo, número de serie, combustible/energía, capacidad, tipo de refrigerante, fecha de fabricación, ubicación, medida del filtro, notas de condición.
6. **Repite para cada unidad adicional** en el domicilio antes de empezar a diagnosticar o reparar nada.
7. **Solo entonces empieza a trabajar.**
8. **Al cierre, confirma que cada unidad que tocaste o encontraste tenga un registro asociado al domicilio** — no enterrado en notas del trabajo (`sop.field.forms`).

Calcula 60–90 segundos por unidad. Si de verdad vas apurado, las tres cosas no negociables son **el escaneo de la placa, el modelo y el número de serie** — todo lo demás se puede completar después desde el escaneo y la foto. Nada se puede completar después de una placa que nunca escaneaste.

## Qué dices {#verbatim}

> "Solo estoy registrando su equipo — modelo y número de serie en el sistema para tener cubierta su garantía."

> "Aquí en realidad tiene dos sistemas — quiero dejar los dos en el registro, no solo el que reportó."

> "Esta placa está bastante gastada — déjeme sacar lo que se pueda y anotar el resto para que nadie adivine después."

## Ejemplo trabajado {#example}

**Débil:** Despachan al técnico por un condensador muerto, arregla el capacitor, cierra el trabajo. Sin registro de equipo. Tres meses después el compresor falla bajo garantía del fabricante. No hay número de serie registrado, el reclamo se rechaza, y el callback llega sin pago a quien lo tome.

**Perfecto:** El técnico llega, antes de tocar el condensador, escanea su placa, la fotografía, y nota que el calefactor en el mismo clóset nunca se registró tampoco. Lo escanea y lo fotografía también. Ambos registros quedan en el domicilio: fabricante, modelo, número de serie, tipo de refrigerante, medida del filtro. Se cambia el capacitor. Tres meses después el compresor falla — el número de serie está registrado, el reclamo se aprueba, y el callback sí paga.

| | Débil | Perfecto |
|---|---|---|
| Unidades registradas | 1 de 2 | 2 de 2 |
| Origen de modelo/serie | Memoria / omitido | Escaneo + foto |
| Reclamo de garantía después | Falla, callback sin pago | Aprobado, callback pagado |
| Siguiente despacho | Empieza desde cero | Llega con la pieza correcta |

## Cuando algo sale mal {#failures}

- **La placa está ilegible o no está.** Escanea de todos modos — una placa parcial a menudo aún revela el fabricante. Fotografía lo que quede. Escribe "placa de datos ilegible" en las notas de condición. Busca una etiqueta secundaria: dentro de la puerta del soplador, en el gabinete, en el desconectador, o una calcomanía de un instalador anterior. Nunca adivines un número de serie — un número adivinado es peor que uno en blanco porque la siguiente persona va a confiar en él.
- **Se niega o se bloquea el acceso a una unidad.** Anótalo claramente — "cliente negó acceso al ático", "sótano cerrado con llave" — y registra todo lo demás. Un hueco explicado es un registro; un hueco silencioso es un defecto.
- **Lo registraste en notas del trabajo en vez del domicilio.** Eso no está registrado. Las notas no se asocian al domicilio, no impulsan el mantenimiento, y no aparecen cuando el CSM agenda la siguiente llamada. Muévelo al registro de equipo antes de cerrar.
- **Despacho marca un trabajo cerrado sin equipo asociado.** Reconoce la marca el mismo día y completa o explica el hueco. Esto se revisa junto con tu tasa de callback — las dos cosas están relacionadas.

### Reglas duras

- Nunca inventes ni estimes un número de modelo o de serie.
- Nunca omitas el segundo sistema porque solo te despacharon por uno.
- Nunca dejes los datos de equipo solo en notas del trabajo.
- Nunca cierres un trabajo con un registro de equipo faltante sin explicar.

## Calificación de QA {#qa}

| Puntaje | Estándar |
|---|---|
| 2 | Cada unidad del domicilio escaneada, fotografiada y registrada en el domicilio con modelo/serie exactos; huecos explicados si los hay |
| 1 | Unidad principal registrada correctamente pero se pasó por alto una segunda unidad en el domicilio, o campos menores incompletos |
| 0 | Sin registro de equipo, un número de serie/modelo adivinado, o registro anotado solo en notas del trabajo |

## Relacionado

- Cerrar el trabajo y los formularios: `sop.field.forms`
- Períodos y cobertura de garantía: `reference.guarantees`
- Callbacks sin cargo: `sop.csm.warranty-callback`
- Lo que el CSM capturó al agendar: `sop.csm.system-type`
- Sistema de registro: `sop.csm.tools`
