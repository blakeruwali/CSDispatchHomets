---
translation_of: sop.field.noise
source_version: 1
---

# Queja: Ruido

> **Una llamada por ruido es una carrera entre la paciencia del cliente y un balero. Reproduce el sonido, nómbralo y decide una cosa primero: ¿este sistema sigue trabajando esta noche o no?**

El ruido es la única queja donde el sistema todavía funciona. Eso la convierte en la llamada más fácil de sub-diagnosticar y en la más fácil para perder credibilidad — el cliente ya sabe que algo anda mal, y si no logras reproducirlo concluye que no buscaste.

## Cuándo aplica {#applies}

Cualquier llamada agendada como un sonido: traqueteo, chillido, rechinido, golpe, zumbido, silbido, gorgoteo, o "está más ruidoso que antes". El ruido de combustión — retumbo, explosión al encender, retroceso de flama — va primero a `sop.field.no-heat`, porque eso es una secuencia de seguridad, no un diagnóstico de ruido.

## La escalera de ejecución {#execution}

1. **Haz que el cliente lo describa antes de abrir nada.** ¿Cuándo pasa — al arrancar, al parar, todo el tiempo? ¿Hace cuánto va empeorando? Pídele que lo imite. Cuesta noventa segundos y acota la lista más que cualquier herramienta.
2. **Reprodúcelo.** Cicla el sistema y quédate ahí parado. Si solo pasa a las 2 de la mañana, pídele que lo grabe con su teléfono la próxima vez y anótalo en el ticket. **Nunca diagnostiques un ruido que no has escuchado.**
3. **Ubícalo aislando.** Interior o exterior. Blower o quemador. Trabajando o desacelerando. Corta la corriente y gira la turbina con la mano. Saca el blower y haz trabajar el sistema sin él si el diseño lo permite.
4. **Clasifícalo** con la tabla de abajo.
5. **Toma la decisión de operar / no operar.** Rechinido, metal contra metal y un compresor chillando al arrancar son todos sonidos de "apágalo ya". Dilo antes de hablar de precio.
6. **Compruébalo con un número donde exista** — consumo de amperaje, presión estática, juego del balero medido con la mano, desbalance visible de la turbina. `reference.diagnostic-readings` §electrical para umbrales de consumo.

## La bifurcación {#the-split}

| Sonido | A dónde apunta | ¿Sigue trabajando? |
|---|---|---|
| **Chillido continuo** | Baleros del motor del blower, banda en unidades viejas, motor seco | Normalmente sí, a corto plazo — es una advertencia, no una falla |
| **Chillido solo al arrancar** | Banda patinando, capacitor débil, motor batallando para arrancar | Revisa capacitor de arranque y consumo antes de descartarlo |
| **Rechinido, metal contra metal** | Balero fallado, turbina pegando en la carcasa, base del motor colapsada | **No. Apágalo.** Seguir trabajando destruye la carcasa y, en un horno, convierte un problema de flujo de aire en un disparo de límite |
| **Traqueteo solo al arrancar / parar** | Panel flojo, conexión de ducto floja, turbina desbalanceada, tornillos del gabinete | Sí — pero encuéntralo. Un traqueteo que no ubicas se vuelve una visita de regreso |
| **Golpe / explosión al encender** | Ignición retardada — gas acumulándose antes de prender | **No. Esto es falla de combustión.** `sop.field.no-heat` |
| **Zumbido fuerte, sin arrancar** | Contactor vibrando, capacitor de trabajo fallado, rotor bloqueado | **No.** Consumo de amperaje de inmediato — un compresor jalando amperaje de rotor bloqueado se está destruyendo mientras lo escuchas |
| **Zumbido en la unidad exterior** | Contactor, panel flojo, transformador | Diagnostica; normalmente no es urgente |
| **Silbido (hiss)** | Fuga de refrigerante, o fuga de ducto en un tramo presurizado | Búsqueda de fuga — no lo despaches con la mano |
| **Gorgoteo / burbujeo** | Carga baja, o trampa de condensado jalando aire | Lecturas de carga, después la trampa |
| **Silbido en rejillas o filtro** | Presión estática. Retorno subdimensionado, filtro muy restrictivo, dámperes cerrados | TESP contra 0.5" c.a. |
| **Chasquido / tictac en los ductos** | Expansión térmica, normalmente inofensivo | Sí — explícalo en lugar de venderlo |

## Qué dices {#verbatim}

Reproducir el sonido frente al cliente son los noventa segundos de mayor valor de la visita:

> "Acompáñeme aquí un segundo — quiero que escuche lo que yo escucho cuando arranca. Ese es el sonido, ¿verdad? Bien. Ese es el balero del blower, y así lo sé: con la corriente apagada, esta turbina debería girar libre y en silencio. ¿Siente ese rechinido? Eso es metal montado sobre metal."

Cuando tiene que salir de operación esta noche:

> "Tengo que ser directo con usted: este no lo quiero trabajando. Ese rechinido es el balero del motor fallando, y cada hora que trabaja va mordiendo la carcasa de atrás — lo que convierte una reparación de motor en una de motor y carcasa. Prefiero apagarlo esta noche y darle las opciones ahora."

Cuando el sonido es inofensivo:

> "Buenas noticias — ese tictac es el metal expandiéndose conforme el ducto se calienta. No es una falla y no hay nada que reparar. Si alguna vez se convierte en un golpe o en un raspado, márqueme, porque esos son sonidos completamente distintos."

Decirle a un cliente que no tiene nada, con claridad y seguridad, gana más confianza que una venta pequeña.

## Cuando sale mal {#failures}

**No logras reproducirlo.** Es el resultado más común y no es un fracaso — es un resultado. Documenta con precisión qué probaste, pídele al cliente que lo grabe y ofrece regresar. No reemplaces una pieza por un sonido que nunca escuchaste.

**El cliente lo quiere trabajando de todos modos después de que lo condenas.** Di la consecuencia una vez, con claridad, deja el rechazo por escrito en el trabajo, y no vuelvas a arrancar un blower rechinando ni un horno con ignición explosiva para llevar la fiesta en paz. Esa decisión no es del cliente para anularla — mismo principio que `sop.field.diagnostics` §condemn.

**Resulta que el traqueteo era un panel flojo.** Apriétalo, y aun así completa el diagnóstico correctamente. Una reparación de diez segundos no te exime de lecturas, captura de equipo ni documentación.

**El ruido es la segunda queja del ticket.** Trabaja las dos. Un ruido notado junto con enfriamiento débil normalmente es una sola falla, no dos.

### Reglas duras

- Nunca diagnostiques un ruido que no has escuchado.
- Nunca vuelvas a arrancar un motor rechinando ni un horno con ignición retardada.
- Nunca cotices una pieza solo por un sonido — consigue una lectura o una causa visible.
- Nunca factures "no se encontró problema" sin documentar qué probaste.

## Qué se registra {#record}

- El sonido, en las palabras del cliente y en las tuyas.
- Cuándo ocurre: al arrancar / al parar / continuo / intermitente.
- Si lo reprodujiste. Si no, dilo explícitamente.
- Consumo de amperaje del motor sospechoso, y FLA nominal.
- Presión estática externa total si el sonido tiene que ver con flujo de aire.
- Decisión de operar / no operar y la razón.
- Cualquier recomendación rechazada.

## Calificación de QA {#qa}

| Puntaje | Cómo se ve |
|---|---|
| **2** | Sonido reproducido y demostrado al cliente, causa comprobada con una lectura o defecto visible, decisión de operar / no operar dicha con claridad, todo documentado. |
| **1** | Causa identificada pero no demostrada, o sin lectura de respaldo registrada. |
| **0** | Pieza cotizada o reemplazada por un sonido nunca escuchado, o una unidad insegura dejada trabajando. |

## Relacionado

- El estándar detrás de todo esto: `sop.field.diagnostics`
- Ruido de combustión: `sop.field.no-heat`
- Consumo de amperaje y umbrales eléctricos: `sop.field.electrical`, `reference.diagnostic-readings`
