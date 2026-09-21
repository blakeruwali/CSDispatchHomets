---
translation_of: sop.field.safety
source_version: 1
---

# Seguridad y Autoridad para Detener el Trabajo

> **Cualquier técnico puede detener cualquier trabajo, en cualquier momento, por cualquier razón de seguridad. Nunca se te va a cuestionar por eso, y nunca se te va a pagar de menos por eso.**

Esa frase es todo el documento. Lo demás explica cómo usarla.

## La versión de 60 segundos {#field-card}

1. **Puedes detenerte.** Sin pedir permiso, sin dar explicaciones en el momento.
2. **Hazlo seguro** — corriente apagada, gas cerrado, gente afuera, lo que el peligro requiera.
3. **Dile al cliente con claridad** qué encontraste y qué sigue.
4. **Llama a Dispatch.** No después de irte — desde la propiedad.
5. **Anótalo en el trabajo** antes de arrancar la camioneta.
6. **Nunca vuelvas a encender** algo que apagaste por seguridad para llevar la fiesta en paz.

## Por qué esto va primero y no al final {#why}

Casi todos los documentos de seguridad se escriben para proteger a la empresa. Este se escribe por cómo salen mal estas llamadas en la vida real.

Un técnico encuentra algo genuinamente peligroso a las 4:40 PM de un viernes. El cliente está molesto, el tablero está lleno, el siguiente trabajo espera, y nadie quiere ser quien diga que la casa se queda sin calefacción esta noche. Entonces el equipo se vuelve a encender "nada más hasta el lunes".

Esa decisión nunca la toma una persona imprudente. La toma una persona responsable bajo presión, tratando de ayudar. **Este documento existe para quitarte esa decisión de encima.** La regla ya está tomada. Tú la ejecutas, no la decides.

## Autoridad para detener — qué significa de verdad {#stop-work}

**No necesitas aprobación para detenerte.** Ni de Dispatch, ni del gerente de servicio, ni del dueño.

- **No se te va a penalizar.** Ni en tus números, ni en tu junta uno a uno, ni en tu pago.
- **Detenerse nunca está "mal" visto en retrospectiva.** Si apagas un sistema y resulta que era seguro, eso es un buen resultado, no un error. Una regla por la que se cuestiona a la gente es una regla que nadie usa.
- **Aplica a cualquier cosa** — el equipo, el inmueble, un animal, una persona, el clima, o tu propio estado.
- **Aplica a un trabajo ya empezado**, incluido uno a la mitad y uno que ya te pagaron.

**Si alguien — un cliente, un despachador, un gerente — te presiona para continuar después de que detuviste el trabajo, eso se escala al dueño.** Incluido si la presión viene de adentro de esta empresa. Déjalo por escrito en el trabajo.

## La lista de paro {#stop-list}

Esto detiene el trabajo de inmediato. No es cuestión de criterio.

| Lo que encuentras | Qué pasa |
|---|---|
| **CO ambiental en o por encima del umbral de acción** | Equipo apagado. En el umbral de evacuación, todos afuera y bomberos — la escalera está en `reference.diagnostic-readings` §co y no tiene excepciones |
| **Olor a gas** | Sin interruptores, sin usar teléfono adentro, gente afuera, gas cerrado en el medidor si se alcanza con seguridad, llamar a la compañía — `protocol.emergency.triage` |
| **Sospecha de intercambiador de calor agrietado** | Apagar y etiquetar en rojo. Segundo par de ojos antes de condenar. **No lo vuelvas a encender para enseñárselo al cliente** (`sop.field.diagnostics` §condemn) |
| **Retroceso de gases o derrame en el tiro** | Apagar. Es un evento de CO que todavía no ocurre |
| **Cableado con arco, chamuscado o derretido** | Corta la corriente en el desconectador antes que nada — `sop.field.electrical-safety` |
| **Agua estancada en equipo eléctrico** | Corriente fuera primero, diagnóstico después |
| **Estructura que no te va a sostener** | Vigas del ático, techo blando, plataforma podrida. Ningún trabajo vale un plafón |
| **Animal agresivo que no puedes hacer que aseguren** | Retírate. Llama a Dispatch. Esta es una lesión real y común |
| **Una persona amenazante, intoxicada, o que no te deja trabajar seguro** | Sal de la propiedad primero, llama a Dispatch después |
| **Estás mermado** — enfermo, agotado, con medicamento que te afecta | Llama a Dispatch antes del siguiente trabajo, no después de un accidente |

**"Apagado" significa que se queda apagado.** Etiquetado, el cliente enterado del porqué, la razón escrita en el trabajo, y Dispatch informado para que se agende el seguimiento. No significa apagado hasta que te vas.

## EPP — lo básico {#ppe}

Va en cada camioneta y se usa sin que te lo digan:

- **Protección ocular** — siempre que trabajes por encima de tu cabeza, cortando, taladrando, soldando o con corriente. Soldar y cortar llevan el tono correcto, no lentes de seguridad transparentes.
- **Guantes según la tarea.** Resistentes al corte para lámina, aislantes para eléctrico, y nada suelto cerca de un blower girando.
- **Botas** — firmes, cerradas, con agarre. Ojo con la interacción con las cubrezapatos en `sop.field.arrival` §shoe-covers: las cubiertas salen por pisada firme en escaleras y pisos mojados, y esa excepción existe justo por esto.
- **Protección auditiva** cerca de un blower trabajando en un cuarto de máquinas cerrado.
- **Respirador o N95** para aislamiento de ático, polvo pesado, crecimiento biológico en charola o ducto.
- **Lámpara de casco**, para que no traigas una linterna en una mano que necesitas.

**Ropa suelta, cordones colgando, anillos, relojes y cadenas se quitan antes de trabajar cerca de algo que gire o lleve corriente.**

## Trabajar solo {#alone}

Casi siempre estás solo en una llamada residencial, en el sótano o el ático de alguien, y ese es el verdadero perfil de riesgo de este oficio.

- **Reporta el estado del trabajo con honestidad en ServiceTitan** — en sitio, en proceso. Ese registro es cómo alguien sabe dónde estás.
- **Sin actualización en un trabajo abierto por {{price:job_check_in}} y Dispatch te marca.** Eso no es vigilancia, es el único mecanismo que nota que te pasó algo.
- **Ilocalizable por {{price:tech_unreachable_window}} escala al gerente de Dispatch** (`sop.dispatch.hours`). No dejes que tu teléfono se apague a media chamba.
- **Avísale a alguien antes de meterte a un ático, un crawlspace o subirte a un techo** — el cliente cuenta. `sop.field.access-safety`.

## Cuando el cliente se resiste {#pushback}

Se va a resistir, y rara vez es por hostilidad. Es una persona a la que le están diciendo que se queda sin calefacción en enero.

> "Lo entiendo perfectamente, y no lo voy a dejar sin un plan. Pero no puedo volver a encender esto — está produciendo monóxido de carbono, y eso no es algo que yo pueda avalar. Esto es lo que sí puedo hacer ahora mismo."

Y luego haz algo de verdad: calefacción portátil si tenemos, un espacio prioritario agendado antes de irte, una llamada a Dispatch por las opciones, la garantía del fabricante revisada. **Un paro sin siguiente paso se siente como abandono. Un paro con un plan es un servicio.**

Lo que nunca haces:

- Volver a encenderlo "nada más por hoy".
- Dejarle la decisión al cliente. Esta no es suya para anularla, y decirlo con amabilidad es parte del trabajo.
- Suavizar el hallazgo para que la plática sea más fácil. Escribe lo que encontraste, con las palabras que usarías si te lo leyeran de vuelta en un año.

## Accidentes y casi-accidentes {#incidents}

**Cualquier cosa que lastimó a alguien, pudo haber lastimado a alguien, o dañó propiedad se reporta desde la propiedad, antes de irte.**

| Qué pasó | Qué haces |
|---|---|
| **Lesión, de cualquier gravedad** | Atención primero. Luego llama a Dispatch — incluso por una cortada que crees que no es nada |
| **Daño a la propiedad** | Dile al cliente de inmediato, fotografía, llama a Dispatch antes de irte (`sop.field.arrival` §failures) |
| **Casi-accidente** | Repórtalo. El casi-accidente es la lección gratis; la próxima puede que no lo sea |
| **Condición insegura que tú no causaste** | Documéntala, dile al cliente, anótala en el trabajo |

**Aquí nunca se ha sancionado a nadie por reportar un accidente.** Se sanciona por ocultarlo, porque un accidente oculto es el que se repite y el que una aseguradora rechaza.

### Reglas duras

- Nunca vuelvas a encender un sistema que apagaste por seguridad.
- Nunca trabajes con corriente cuando se puede trabajar sin ella — `sop.field.electrical-safety`.
- Nunca puentees un interruptor de seguridad, un flotador, un presostato o un límite para mantener una unidad trabajando.
- Nunca entres a un espacio del que no puedas salir.
- Nunca dejes una fuga de gas o un evento de CO sin involucrar a la compañía de gas o a los bomberos.
- Nunca dejes que la presión del horario — tuya, de Dispatch o del cliente — decida una cuestión de seguridad.

## Calificación de QA {#qa}

| Puntaje | Estándar |
|---|---|
| 2 | Peligros identificados y atendidos sin que se lo pidan, cliente informado con claridad y con un siguiente paso, Dispatch llamado desde la propiedad, todo documentado en el trabajo |
| 1 | Peligro manejado correctamente pero documentado tarde o a medias, o el cliente se quedó sin siguiente paso |
| 0 | Un sistema de la lista de paro dejado trabajando, un dispositivo de seguridad puenteado, o un accidente no reportado |

## Relacionado

- Práctica de trabajo eléctrico: `sop.field.electrical-safety`
- Escaleras, áticos, crawlspaces y techos: `sop.field.access-safety`
- Umbrales de CO y la escalera de evacuación: `reference.diagnostic-readings`
- Fugas de gas y emergencias de CO: `protocol.emergency.triage`
- Seguridad de combustión en una llamada de calefacción: `sop.field.no-heat`
- Condenar equipo: `sop.field.diagnostics`
- Por qué se firma este documento: `governance.acknowledgement`
