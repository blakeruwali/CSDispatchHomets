---
translation_of: sop.field.diagnostics
source_version: 2
---

# Diagnóstico — Comprobar la Causa Antes de Cotizar

> **Una pieza no está diagnosticada hasta que la mediste fallando. Todo diagnóstico termina con una causa identificada, las lecturas que la comprueban, y un precio por escrito — siempre, en cada llamada.**

## La versión de 90 segundos {#field-card}

1. **Pregúntale al cliente, y luego verifícalo tú mismo.** Nunca diagnostiques con la descripción de otro.
2. **Primero la seguridad.** Gas, CO, agua, cableado quemado — detente, asegura, escala. Nada de lo que sigue importa más que esto.
3. **Registra el equipo** antes de tocar una herramienta (`sop.field.equipment-capture`).
4. **Abre el formulario de inspección por puntos** de ese sistema y trabaja cada punto — no solo el que sospechas (`#which-form`).
5. **Identifica la causa y compruébala con un número.** "El capacitor mide 21.4 µF, nominal 45 — falló."
6. **Pregúntate por qué falló.** La pieza es el síntoma; algo la mató.
7. **Escribe el precio en ServiceTitan.** Siempre, incluso cuando la respuesta sea "no se encontró falla".
8. **Después de la reparación, vuelve a tomar las lecturas** y regístralas.

**Realistamente 25–45 minutos en una llamada sencilla.** Ese es el costo real, y este documento no va a fingir lo contrario.

## Qué significa "diagnosticado" aquí {#definition}

Este es todo el documento en un párrafo, así que léelo dos veces.

**Un diagnóstico es una causa que mediste, no una pieza que sospechas.** "Capacitor malo" no es un diagnóstico. "El capacitor de marcha mide 21.4 µF contra 45 µF nominales, el compresor consume amperaje de rotor bloqueado al intentar arrancar" sí es un diagnóstico. La diferencia no es papeleo. El primero es una corazonada que resulta acertada la mayoría de las veces; el segundo es la razón por la que podemos cobrar por conocimiento, respaldar la reparación, y ganar la discusión cuando un cliente o un fabricante nos cuestione seis meses después.

Tres cosas tienen que ser ciertas antes de que cotices:

1. **Mediste la falla.** Un número, tomado por ti, en esta visita.
2. **Sabes por qué falló.** No siempre con certeza total — pero buscaste, y lo que encontraste o descartaste quedó escrito.
3. **La lectura está en ServiceTitan**, no solo en tu cabeza ni en un papel suelto.

Si falta cualquiera de las tres, no diagnosticaste nada. Fuiste de compras.

## Qué ganas tú con esto {#for-you}

**Es lo que más te mantiene fuera de viajes de regreso no pagados.** Casi toda visita de regreso tiene la misma raíz: se cambió una pieza, no se cambió lo que la mató, y eso mató también a la nueva. Volviste gratis. Un contactor cambiado sin revisar por qué se pegó es un trabajo que vas a hacer dos veces.

**Es lo que hace que una cuenta grande se sostenga.** Un cliente aprueba una reparación de $1,400 cuando el técnico le muestra una lectura y le explica qué significa. Discute una de $260 cuando el técnico solo dice que la pieza está mala. La medición no es burocracia — es la herramienta de venta.

**Te protege cuando algo sale mal.** Si un compresor falla un mes después y tu expediente muestra subenfriamiento correcto, amperaje correcto y una lectura limpia de flujo de aire cuando te fuiste, eso es un sistema que falló. Sin esos datos, es un técnico que pasó algo por alto. El mismo trabajo, dos conversaciones completamente distintas.

**Evita que te cuestionen.** Las lecturas son el argumento. Nadie en la oficina está en posición de contradecir un número que tomaste junto a la unidad.

## La secuencia {#sequence}

Desviarse está bien cuando el trabajo lo pide. Saltarse pasos no — y si te saltas uno, la nota dice cuál y por qué.

### 1. Habla con el cliente antes de tocar nada {#customer}

El CSM capturó un síntoma al agendar (`sop.csm.symptom-clarification`). Confírmalo en persona y consigue las tres cosas que el teléfono nunca captura:

- **¿Cuándo empezó, y qué cambió por esas fechas?** Tormenta, corte de luz, termostato nuevo, alguien que lo "arregló".
- **¿Es constante o intermitente?** Lo intermitente cambia todo el enfoque — ver más abajo.
- **¿Alguien más le ha trabajado?** Incluido el propio dueño. Es la pregunta más productiva de la lista y la que más se omite.

### 2. Filtro de seguridad {#safety}

Antes del diagnóstico, antes del registro del equipo, antes de todo: si encuentras cualquiera de estas cosas, **detente, asegúralo, y escala.**

| Qué encuentras | Qué haces |
|---|---|
| Olor a gas / detección positiva de fuga | Cierra el gas en el aparato. Saca a la gente si es fuerte. Se llama a la compañía de gas, luego a despacho. No generes ninguna fuente de ignición, y eso incluye los apagadores de luz. |
| CO detectado en el espacio habitado | Apaga el aparato. Ventila. Los ocupantes afuera. Bomberos ante cualquier lectura más que mínima. |
| Sospecha de intercambiador de calor agrietado | **Apágalo y etiquétalo en rojo. No lo vuelvas a encender para "mostrárselo" al cliente.** Se requiere una segunda opinión antes de condenarlo — ver abajo. |
| Cableado quemado, derretido o haciendo arco | Corta la energía en el desconectador antes que nada. |
| Agua estancada junto a equipo eléctrico | Primero corta la energía, después diagnostica. |
| Retroceso de gases / derrame en el conducto de humos | Apágalo. Esto es un evento de CO esperando a ocurrir. |

**Cada uno de estos se escribe en el trabajo y se le dice al cliente con palabras claras antes de que te vayas.** Un riesgo que encontraste y mencionaste de pasada es un riesgo que nadie puede comprobar que encontraste.

Nada en este documento — ni el tiempo que toma, ni la conversación del costo, ni un cliente que tiene prisa — está por encima de esta tabla.

### 3. Verifica la queja tú mismo {#verify}

Haz funcionar el sistema y observa la falla con tus propios ojos e instrumentos. Si el cliente dice que no enfría, ponle un termómetro. Si dice que hace ruido, escucha el ruido.

**Si no la puedes reproducir, dilo y ve a `#no-fault` más abajo.** No "repares" una queja que nunca presenciaste. Así es como se cambia un capacitor que servía y la falla intermitente real regresa la próxima semana con tu nombre en la última factura.

### 4. Registra el equipo {#equipment}

Cada unidad del domicilio, placa fotografiada, antes de empezar a trabajar. Ese procedimiento es su propio documento y no es opcional: `sop.field.equipment-capture`.

El diagnóstico lo necesita de todos modos. El modelo y el número de serie son la forma de saber la elevación de temperatura de diseño, el método correcto de carga de refrigerante, el amperaje nominal contra el que estás midiendo, y si la pieza sigue en garantía del fabricante — lo cual cambia el precio que estás a punto de cotizar.

### 5. Trabaja cada punto del formulario {#readings}

No solo el punto que cubre la pieza que ya sospechas.

**El formulario de inspección por puntos de ServiceTitan es el registro del diagnóstico.** No es papeleo que corre en paralelo al diagnóstico — trabajarlo *es* el diagnóstico, y se imprime como el reporte del cliente. Qué formulario va con qué sistema está en `#which-form`; los valores detrás de las calificaciones están en `reference.diagnostic-readings`.

Califica cada punto, incluidos los que salen **PASS**. Un punto aprobado es evidencia — es cómo descartas una causa, y es lo que comprueba, después, que el resto del sistema estaba sano cuando te fuiste.

**Donde un punto tiene calificación y número, llena los dos.** La calificación es lo que lee el cliente. El número es lo que un supervisor, un fabricante o el siguiente técnico puede verificar de verdad, y es la diferencia entre un reporte y un recibo.

**"No se pudo probar" es una respuesta legítima.** Un sistema que no arranca no se puede medir, y decirlo no te cuesta nada. Calificar un punto como PASS porque no lo pudiste probar es lo único aquí que es genuinamente deshonesto — pone tu firma detrás de una prueba que no hiciste.

Este es el paso que la gente recorta cuando va tarde, y es el paso que se paga solo. El punto que te saltaste es el que explicaba la falla.

### Qué formulario {#which-form}

Un formulario por sistema, según lo que tengas enfrente:

| Sistema | Formulario |
|---|---|
| Aire acondicionado con ductos | **18-Point Ducted Air Conditioner Inspection** |
| Bomba de calor con ductos | **22-Point Ducted Heat Pump Inspection** |
| Mini split sin ductos | **18-Point Ductless Mini Split Inspection** |
| Calefactor de gas o diésel | **Complete Furnace Inspection** |
| Caldera | **Complete Boiler Inspection** |
| Ductos, como motivo de la visita | **18-Point Ductwork Evaluation** |
| Calidad del aire, como motivo de la visita | **18-Point Indoor Air Quality Assessment** |

**Dos sistemas en el domicilio significa dos formularios**, igual que significa dos registros de equipo. El formulario del calefactor no cubre el condensador.

> ⚠️ **Los formularios "Full System Evaluation" están retirados.** Tres de ellos — bomba de calor, ductos y calidad de aire — duplicaban las inspecciones numeradas de arriba. Si todavía ves uno en ServiceTitan, es que aún no se ha eliminado: **usa el formulario numerado y avísale al Gerente de Servicio que el viejo sigue apareciendo.**

### 6. Identifica la causa y compruébala con un número {#prove}

Escríbelo con esta forma:

> **Causa:** Falló el capacitor de marcha. **Comprobación:** Midió 21.4 µF contra 45 µF nominales (−52%). El compresor intentó arrancar, consumió LRA, y cortó por protección térmica interna.

No con esta forma:

> Capacitor malo.

Las dos piezas que más se cambian en este oficio son capacitores y contactores, y son las dos que más se cambian sin medir, porque son baratas y casi siempre son la respuesta. **"Casi siempre" no es un diagnóstico.** Mídelas de todos modos — toma cuarenta segundos y es la diferencia entre un hallazgo profesional y una corazonada afortunada.

**Nunca condenes una pieza que no probaste.** Si no la puedes probar en sitio con lo que traes, dilo en la nota y explica de qué lo estás deduciendo.

### 7. Pregunta qué la mató {#root-cause}

La pieza que falló suele ser el síntoma de algo más arriba. No tienes que resolverlo con certeza cada vez, pero sí tienes que buscar — y anotar qué encontraste o qué descartaste.

| Pieza que falló | Qué revisar antes de darlo por terminado |
|---|---|
| Capacitor de marcha | Amperaje del compresor, estado del ventilador del condensador, presión de alta, condiciones ambientales, voltaje en la unidad |
| Contactor (pegado o picado) | Caída de voltaje, falla en el control de bajo voltaje, ciclado corto, dimensionamiento correcto |
| Compresor | Carga, flujo de aire, dispositivo de expansión, limpieza de ambos serpentines, alimentación eléctrica, estado del aceite |
| Motor del soplador | Presión estática, estado del filtro, suciedad en la turbina, restricción de ductos |
| Ignitor (falla repetida) | Presión de gas, sensor de flama, ciclado de la tarjeta de control, número de parte correcto |
| Evaporador congelado | Primero flujo de aire, después carga, y siempre en ese orden |
| Drenajes tapados repetidamente | Pendiente, diseño de la trampa, estado de la charola, calidad de aire |

**"Cambié la pieza, no revisé por qué" es la causa más común de una visita de regreso**, y esa visita sale de un espacio pagado que pudiste haber facturado. Esto no es la oficina pidiendo trabajo extra — es el paso que evita que hagas este trabajo dos veces.

### 8. Termina con un precio por escrito {#price}

El cliente pagó **{{price:diagnostic_residential}}** residencial o **{{price:diagnostic_commercial}}** comercial exactamente por esto: que un técnico salga, diagnostique el problema, y entregue un precio de reparación por escrito (`sop.csm.diagnostic-fee`). Esa es la promesa que hizo el CSM por teléfono.

**Así que todo diagnóstico termina con un precio en ServiceTitan.** Sin excepciones:

- **Una reparación que podemos hacer** → cotizada, presentada, aprobada o rechazada, registrada en cualquier caso.
- **Un sistema que conviene reemplazar en lugar de reparar** → la reparación se cotiza igual, para que el cliente vea la comparación que en realidad se le está pidiendo hacer. Luego la conversación de reemplazo.
- **Una pieza que hay que pedir** → cotizada, con la visita de regreso agendada antes de que te vayas.
- **No se encontró falla** → aun así hay un resultado por escrito y un registro. Ver abajo.
- **El cliente rechaza todo** → el precio se queda en el trabajo. Es el punto de partida del siguiente técnico y de la siguiente conversación.

Un diagnóstico que termina con un "van a ser como seiscientos" de palabra no entregó lo que se vendió. La tarifa compró un precio por escrito.

El formulario cierra esto por ti, y todos estos campos son obligatorios:

- **Resultado general** — aprobado / detalles menores / se recomiendan reparaciones / se requieren reparaciones / inseguro, sistema apagado
- **Urgencia** — sin acción / monitorear / dentro de 30 días / prioritario / emergencia
- **Resumen del técnico para el cliente** — en lenguaje claro, y **se imprime en su reporte**. Escríbelo para la persona, no para la oficina.
- **Opciones de reparación presentadas hoy**, y **¿Se requiere visita de regreso?** con lo que va a cubrir

**El diagnóstico se acredita a la reparación si la aprueban hoy, y no es reembolsable una vez que la visita ocurrió** (`reference.guarantees`). Las dos mitades de eso te toca decirlas con claridad y sin disculparte — hiciste el trabajo.

## Cuando no puedes reproducir la falla {#no-fault}

Las fallas intermitentes son reales y no son un fracaso personal. Lo que no es aceptable es inventar una reparación para evitar una conversación incómoda.

1. **Toma el juego completo de lecturas de todos modos.** Una línea base sana vale de verdad — es contra lo que compara la siguiente visita.
2. **Revisa los sospechosos habituales de fallas intermitentes:** conexiones flojas o corroídas, capacitor al límite, contactor débil, presión estática en el límite, bajo voltaje en la unidad, una tarjeta de control con marcas de estrés térmico.
3. **Dile la verdad al cliente**, con estas palabras o parecidas:

> "No logré que fallara mientras estuve aquí, y no le voy a vender una pieza por una corazonada. Esto es lo que medí, esto es lo que está al límite, y esto es lo que me gustaría que anotara si vuelve a pasar — la hora del día, en cuánto estaba el termostato, y si estaba funcionando antes de detenerse."

4. **Escribe la línea base en el trabajo**, para que el siguiente técnico empiece con datos en lugar de desde cero.
5. **El diagnóstico se cobra igual.** Se prestó el servicio. Dedicaste el tiempo, tomaste las lecturas, y los dejaste con una línea base sana documentada y un plan. Dilo con la espalda derecha.

Un "no se encontró falla" repetido en la misma dirección es una conversación con el supervisor, no una tercera corazonada.

## Condenar un componente mayor {#condemn}

Compresor, intercambiador de calor, serpentín, sección de caldera, tanque. Aquí hay dinero y seguridad de por medio, y son las decisiones sobre las que un cliente es más propenso a buscar una segunda opinión.

**Antes de condenar uno:**

1. **Lecturas que lo sustenten específicamente**, no solo síntomas compatibles.
2. **Fotografía la evidencia** — la lectura, la grieta, la quemadura, la prueba fallida.
3. **Consigue una segunda opinión.** Llama al Gerente de Servicio desde la entrada y repásale los números antes de decírselo al cliente.
4. **Revisa el estado de garantía del fabricante** con el número de serie que registraste. Condenar un compresor que sigue cubierto, y no decirlo, es el tipo de error que un cliente nunca perdona.

La llamada de segunda opinión no es una duda sobre tu capacidad. Es práctica estándar en las tres o cuatro decisiones al año que valen más dinero y cargan más riesgo, y pone un segundo nombre en una decisión que lo merece.

> ⚠️ **Los intercambiadores de calor agrietados son el punto más delicado.** Condena con evidencia que puedas mostrar — visual, con cámara, o una prueba de combustión documentada — nunca por sospecha sola. Una vez condenado, la unidad se queda apagada y etiquetada en rojo. Volver a encender un intercambiador con sospecha de grieta para que el cliente no pase frío no es un favor que estés autorizado a hacer.

## Verifica la reparación antes de irte {#verify-repair}

El diagnóstico no termina cuando la pieza está puesta. **Vuelve a tomar el juego de lecturas y registra los números de después junto a los de antes.**

- Comprueba que la reparación funcionó, ese día, por escrito.
- Detecta la segunda falla — la que estaba escondida detrás de la primera — mientras todavía estás ahí y todavía te están pagando.
- Es la respuesta más sólida posible ante una disputa de garantía más adelante.

Un trabajo con lecturas de antes y después es un trabajo que nadie discute.

## Qué va en ServiceTitan {#servicetitan}

En el trabajo, no en tu cabeza, no en un mensaje a despacho. Si no está en ServiceTitan, no ocurrió (`sop.csm.tools`).

| Campo | Qué va ahí |
|---|---|
| Queja (palabras del cliente) | Lo que te dijo, textual |
| Síntoma verificado | Lo que realmente observaste |
| Lecturas | El juego completo de ese tipo de sistema, valores de antes |
| Causa | Una frase, con el número que la comprueba |
| Factores contribuyentes | Qué la mató, o qué descartaste |
| Hallazgos de seguridad | Todos, siempre, incluso si los rechazaron |
| Recomendación | Lo que les dijiste, en el orden en que se los dijiste |
| Precio presentado | El precio por escrito, se haya aprobado o no |
| Resultado | Aprobado / rechazado / piezas pedidas / no se encontró falla |
| Lecturas posteriores | Valores después de la reparación donde se hizo trabajo |
| Fotos | Placa de datos, la falla, y la evidencia de cualquier cosa condenada |

## "Pero—" {#objections}

**"El cliente no quiere pagarme por estar ahí parado tomando lecturas."**
No está pagando por lecturas, está pagando por una respuesta, y las lecturas son cómo se llega a ella. Nárralo y se lee como minucioso: *"Estoy tomando unas mediciones para poder decirle exactamente qué falló en lugar de adivinar."* Nadie ha objetado nunca esa frase.

**"Llevo veinte años haciendo esto, sé qué es por el ruido."**
Probablemente tengas razón. Toma la lectura de todos modos — son cuarenta segundos y convierte tu criterio en algo que sobrevive a que lo cuestione un cliente, un fabricante o un ajustador de garantía que no estaba en el cuarto. La experiencia te dice dónde buscar. El número es lo que te queda.

**"Obviamente es el capacitor."**
Entonces es una medición de cuarenta segundos y tenías razón. Y si no lo era, acabas de evitar cambiar una pieza buena y dejar la falla real en el sistema — con tu nombre en la factura.

**"No tengo tiempo para todo esto en un día lleno."**
Entonces la nota dice a qué no llegaste y por qué. Un hueco explicado es un registro; un hueco silencioso es un defecto. Y sé honesto con la aritmética: los veinte minutos que te ahorras hoy son una visita de regreso de dos horas sin pago dentro de tres semanas, y le cae al que esté libre — muchas veces a ti.

**"La oficina nada más quiere datos."**
Algo de eso, sí. Pero no la visita de regreso que no tuviste que manejar, ni la reparación de $1,400 que se aprobó porque mostraste un número, ni la disputa de garantía que se acabó en cuanto salieron tus lecturas. Esas son tuyas.

## Cuando falta {#enforcement}

Para que esta no sea una regla que solo vive en papel:

- **Un trabajo cerrado con una reparación y sin lecturas que la respalden se regresa** al técnico que lo cerró, igual que con el registro de equipos.
- **Se revisa en el uno a uno semanal junto con tu tasa de visitas de regreso.** La conexión entre las dos cosas es el punto central de este documento, y si los números muestran que en tu caso no se sostiene, llévalo a la junta — es un argumento justo si lo haces con evidencia.
- **Una excepción legítima está bien cuando queda escrita.** Sin acceso, el cliente no lo permitió, inseguro para operar, falla del manómetro. Dilo en las notas.
- **Este documento se firma.** Hay un bloque de confirmación al final de esta página (`governance.acknowledgement`).

## Dos firmas, y la diferencia entre ellas {#signatures}

El formulario termina con las dos. No son lo mismo y nunca deben presentarse como si lo fueran.

**Tu firma es obligatoria**, y dice: *"Realicé y documenté los 18 puntos de inspección registrados arriba."* Eso es una declaración sobre tu propio trabajo. No la firmes por puntos que calificaste sin probar.

**La del cliente es opcional**, y dice: *"Recibí y revisé este reporte de diagnóstico por escrito con el técnico. Firmar solo confirma la recepción — no autoriza ninguna reparación."*

Ofrécela, explícala exactamente en esos términos, y acepta un no por respuesta. Un cliente que se niega a firmar de todos modos recibió el reporte, y el registro muestra que se negó. **A nadie se le presiona nunca por una firma en la puerta** — el valor de una confirmación es que se dio libremente, y una firma obtenida a presión vale menos que ninguna.

## Relacionado

- Antes de todo esto: `sop.field.equipment-capture`
- Las lecturas en sí: `reference.diagnostic-readings`
- Lo que se le prometió al cliente por teléfono: `sop.csm.diagnostic-fee`
- Lo que el CSM ya capturó: `sop.csm.symptom-clarification`
- Ventanas de garantía: `reference.guarantees`
- Visitas de regreso sin cargo: `sop.csm.warranty-callback`
