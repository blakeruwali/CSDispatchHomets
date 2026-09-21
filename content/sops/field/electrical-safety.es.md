---
translation_of: sop.field.electrical-safety
source_version: 1
---

# Seguridad Eléctrica — Trabajar sin Corriente, y las Veces que No Se Puede

> **Trabájalo sin corriente. Comprueba que está muerto con un multímetro que acabas de comprobar que sirve. Cada vez, incluida la vez en que estás seguro.**

El HVAC residencial maneja 240 voltios con corriente suficiente para matar, en sótanos y áticos donde muchas veces estás aterrizado, sudando y solo. Los hábitos de abajo no son para la falla dramática y rara. Son para el martes cualquiera en que nada parece estar mal.

## La versión de 60 segundos {#field-card}

1. **Corta la corriente en el desconectador**, no nada más en el termostato.
2. **Ponle candado, etiqueta, o tenlo a la vista.**
3. **Vivo–muerto–vivo**: comprueba tu multímetro en una fuente conocida, mide el circuito, vuelve a comprobar el multímetro.
4. **Descarga los capacitores** antes de que tus manos se acerquen.
5. **Una mano cuando se pueda**, y nunca una mano sobre metal aterrizado.
6. **Si tienes que trabajar con corriente, sabes exactamente por qué** — ver `#live`.

## Comprueba que está muerto {#prove-dead}

**Un interruptor en posición OFF es una afirmación, no una prueba.** Los desconectadores fallan, el cableado de alguien más no es lo que dice la etiqueta, y un circuito "muerto" puede estar alimentado desde una segunda fuente.

La secuencia es **vivo–muerto–vivo**:

1. **Vivo:** mide tu multímetro en un circuito que sabes que está energizado. Eso comprueba el multímetro, las puntas y la pila.
2. **Muerto:** mide el circuito donde vas a trabajar. Cada línea, y cada línea a tierra — no solo entre ellas.
3. **Vivo:** vuelve a medir la fuente conocida. Si el multímetro se murió entre el paso 1 y el 2, acabas de comprobar que está muerto un circuito que no lo está.

**Un detector de no contacto es para un primer vistazo, nunca para comprobar que está muerto.** Reporta voltaje inducido y no reporta nada cuando su pila está baja — y falla en silencio, que es el peor modo de falla que puede tener una herramienta de seguridad.

## Bloqueo y control del desconectador {#lockout}

Quien lo apagó es quien lo vuelve a encender.

- **Ponle candado o etiqueta al desconectador** donde el herraje lo permita. Los desconectadores exteriores que aceptan candado llevan candado.
- **Donde no se puede poner candado** — un pull-out en el condensador, un breaker en un tablero al fondo del pasillo — **el pull-out se queda en tu bolsa** o el desconectador se queda a tu vista.
- **Dile al cliente, en voz alta**, cuál breaker está apagado y que se queda apagado hasta que tú digas. Un propietario servicial restableciendo la corriente mientras estás en el ático es un hecho real, no una hipótesis.
- **Antes de reenergizar**: manos libres, tapas puestas, nadie en contacto con el equipo. Di "voy a dar corriente" lo bastante fuerte para que se escuche.

## Capacitores {#capacitors}

**Un capacitor de trabajo o de arranque retiene carga después de quitar la corriente, incluido uno que ya falló.**

- **Descarga cada capacitor antes de que esté cerca de tus manos**, con una resistencia del rango adecuado — no con un desarmador entre las terminales. Ponerlo en corto daña las terminales, suelda la punta y avienta chispas dentro de un gabinete sobre el que quizá estás recargado.
- **Verifica cero volts con el multímetro** después de descargar. No supongas nada por la chispa ni por su ausencia.
- **Un capacitor inflado o con fuga se maneja como riesgo químico además de eléctrico** — guantes, protección ocular, y se va en una bolsa, no en la basura del cliente.

## Arco eléctrico y el tablero {#arc-flash}

La energía disponible en un tablero residencial alcanza para causar quemaduras graves.

- **Nunca trabajes dentro de un tablero energizado para hacer una reparación.** Medir en un tablero es una medición, no una reparación.
- **Párate a un lado de la puerta del tablero al abrirla**, no de frente.
- **Una mano adentro, la otra sin contacto** — no en la bolsa por apariencia, sino realmente sin cerrar un circuito a través de tu pecho.
- **Herramienta aislada, manos secas, pisada seca.** Si el piso está mojado, primero se atiende el piso.
- **Un tablero con olor a quemado, chamuscado, o calor que se siente a través de la tapa no es nuestro.** Corriente fuera, cliente informado, electricista con licencia. Dilo claro: trabajamos el equipo, no la acometida.

## Cuando de verdad tienes que trabajar con corriente {#live}

Algunas mediciones solo existen bajo carga — amperaje en un compresor, voltaje en el contactor mientras jala, microfaradios bajo condiciones de operación. `sop.field.electrical` está construido sobre esas lecturas.

**Eso es medir con corriente, y es la única razón para estar con corriente.** La línea es simple:

| Con corriente es | Con corriente no es |
|---|---|
| Tomar una lectura que no existe con la corriente apagada | Cambiar una pieza porque el desconectador queda incómodo |
| Poner la pinza amperimétrica alrededor de un conductor | Soltar un cable de una terminal para "ahorrarse un viaje escalera abajo" |
| Ver al contactor jalar | Cualquier cosa donde las dos manos están dentro del gabinete |

Al medir con corriente:

- **Configura el multímetro antes de abrir nada** — función correcta, rango correcto, puntas bien puestas.
- **Planea la ruta de las puntas primero.** Dónde va cada mano, dónde está tu cuerpo, qué vas a tocar si te resbalas.
- **Nada más dentro del gabinete.** Ni una mano deteniendo un panel, ni una herramienta apoyada en el contactor.
- **Nunca solo en un lugar mojado.** Agua estancada y trabajo con corriente no van juntos de ninguna forma — eso está en la lista de paro de `sop.field.safety`.

## Cuando sale mal {#failures}

**Sientes un toque o una descarga, por pequeña que sea.** Detente. Corta la corriente. Dile a Dispatch — esto es un incidente reportable aunque te sientas bien. Un toque pequeño significa que la ruta existe, y la próxima vez las condiciones pueden ser peores.

**El desconectador no existe, está pintado encima, o está mal conectado.** No improvises alrededor. Corta el breaker, comprueba que está muerto, y escribe el defecto en el trabajo — es un hallazgo que el cliente necesita y un estimado que deberíamos estar haciendo.

**Encuentras el trabajo inseguro de alguien más** — breakers doblados, una seguridad puenteada, una unión sin caja, cableado de aluminio en la unidad. Documenta, fotografía, dile al cliente, y no lo extiendas. Nuestra reparación no adopta su defecto.

**Estás en la escalera y necesitas cortar la corriente.** Baja primero. Siempre. Las dos manos van en la escalera cuando te mueves — `sop.field.access-safety`.

### Reglas duras

- Nunca trabajes sin corriente sin comprobarlo, con el multímetro verificado antes y después.
- Nunca confíes en un detector de no contacto para comprobar que está muerto.
- Nunca pongas en corto un capacitor con un desarmador.
- Nunca hagas una reparación dentro de un tablero energizado.
- Nunca dejes un desconectador donde alguien más pueda restablecerlo sin que tú sepas.
- Nunca trabajes con corriente en agua estancada o sobre piso mojado.
- Nunca ocultes una descarga, por menor que sea.

## Calificación de QA {#qa}

| Puntaje | Estándar |
|---|---|
| 2 | Circuito comprobado muerto con la secuencia vivo–muerto–vivo, desconectador bajo control, capacitores descargados y verificados, trabajo con corriente limitado a mediciones, hallazgos documentados |
| 1 | Trabajó con seguridad pero el desconectador quedó sin control, o notó un defecto y no lo anotó |
| 0 | Trabajó con corriente por comodidad, comprobó "muerto" solo con detector de no contacto, puso un capacitor en corto, o no reportó una descarga |

## Relacionado

- Autoridad para detener y la lista de paro: `sop.field.safety`
- La queja eléctrica en sí: `sop.field.electrical`
- Valores eléctricos esperados: `reference.diagnostic-readings` §electrical
- Escaleras y accesos: `sop.field.access-safety`
