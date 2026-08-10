---
translation_of: sop.field.frozen-coil
source_version: 1
---

# Queja: Hielo en el Sistema

> **Primero el flujo de aire. Después la carga. Siempre en ese orden — y el hielo tiene que haberse ido antes de que cualquier lectura que tomes signifique algo.**

Un serpentín congelado no es una falla. Es el extremo visible de una, y las causas son contadas. Es la llamada donde más tienta adivinar y donde más caro sale, porque un sistema congelado por un filtro sucio y uno congelado por una fuga se ven idénticos desde la entrada.

## Por qué importa el orden {#order}

Un sistema congelado te da **lecturas falsas en todos los manómetros**. La presión de succión está baja porque el serpentín está tapado de hielo, no porque falte carga. Un técnico que se conecta a un sistema congelado, ve succión baja y agrega refrigerante acaba de sobrecargar un sistema que nunca estuvo bajo — y cuando se descongela, la presión de descarga sube, el compresor trabaja caliente, y la visita de regreso es peor que la llamada original.

**No puedes diagnosticar un sistema congelado. Solo puedes diagnosticar uno descongelado.**

## Al llegar {#arrival}

1. **Apaga el compresor y deja el soplador funcionando.** Ventilador en ON en el termostato con el enfriamiento apagado es el descongelado más rápido y seguro.
2. **Protege la casa.** Un serpentín descongelándose suelta mucha agua de golpe, y una charola que iba aguantando está por dejar de aguantar. Toallas, aspiradora de líquidos, y revisa la charola secundaria antes de alejarte de ella.
3. **Fotografía el hielo** antes de que desaparezca. Es evidencia, explica la factura, y en veinte minutos ya no va a existir.
4. **Nunca piques ni raspes el hielo del serpentín.** Las aletas y la tubería se dañan con facilidad, y un serpentín perforado convierte una llamada de $200 en un compresor.
5. **Fija expectativas con el cliente:** un descongelado completo suele tomar de 30 a 90 minutos, a veces más.

**Si no puedes esperar el descongelado**, ese es un trabajo legítimo de dos visitas. Dilo con claridad, cotízalo con honestidad, y agenda el regreso antes de irte. Lo que no es aceptable es adivinar una reparación para que el trabajo cierre hoy.

## Mientras se descongela — encuentra la causa {#while-thawing}

El descongelado no es tiempo muerto. Todo lo de esta lista se puede hacer con el serpentín todavía congelado, y casi siempre una de estas cosas es la respuesta.

### Flujo de aire — revísalo todo antes de tocar un manómetro {#airflow}

La gran mayoría de los serpentines congelados son por flujo de aire, y los problemas de flujo de aire son más baratos de resolver y más fáciles de comprobar.

| Revisión | Qué buscas |
|---|---|
| **Filtro** | Saturado, colapsado, o un filtro de MERV alto en una ranura demasiado chica |
| **Cara del serpentín interior** | Capa de mugre del lado de entrada — abre el acceso y de verdad míralo |
| **Turbina del soplador** | Álabes cargados. Puede verse limpia desde la carcasa y estar media llena |
| **Presión estática externa total** | Contra 0.5" c.a. nominal |
| **Rejillas y retornos** | Cerradas, tapadas por muebles, o cubiertas por un tapete |
| **Velocidad del soplador / ajuste del ECM** | Sobre todo si alguien ya estuvo en el equipo antes que tú |
| **Restricción de ductos** | Flex aplastado, dámperes cerrados, retorno subdimensionado |

### Y después el resto {#other-causes}

- **Carga baja por una fuga.** La segunda causa más común, y la que regresa si solo agregas refrigerante.
- **Dispositivo de expansión** — TXV atorada o restringida, orificio fijo tapado.
- **Operar el aire en clima frío.** Por debajo de unos 60°F exteriores, un sistema estándar se congela sin importar qué tan sano esté. A veces es el diagnóstico completo.
- **Soplador interior fallado** o funcionando en la velocidad equivocada.
- **Termostato puesto muy bajo con operación continua**, sobre todo de noche.

## Después del descongelado {#after-thaw}

**Ahora las lecturas sí significan algo. Toma el juego completo** (`reference.diagnostic-readings`):

1. Diferencial de temperatura, objetivo 15–22°F.
2. Presión estática total contra 0.5" c.a.
3. Superheat y subcooling.
4. Amperaje de compresor y soplador.

| Qué encuentras | A qué apunta |
|---|---|
| Diferencial y estática normales, carga correcta | La restricción que ya quitaste era la causa |
| Estática alta, diferencial bajo | Flujo de aire — y el hielo va a volver si no se corrige |
| Subcooling bajo, superheat alto, flujo de aire correcto | Carga baja → **busca la fuga** |
| Superheat bajo con flujo de aire correcto | Dispositivo de expansión |

> ⚠️ **Un sistema bajo de refrigerante tiene una fuga.** El refrigerante no se consume. Agregar gas sin buscar la fuga significa que el cliente llama de nuevo en semanas, y esa segunda conversación es mucho más difícil que la primera. Busca, encuentra, cotiza. Si lo rechazan y quieren carga suficiente para aguantar una ola de calor, es una decisión legítima — registra que se ofreció, se rechazó, y que el sistema se va a volver a congelar.

## Qué le dices al cliente {#customer}

Claro y concreto, porque "se le congeló el serpentín" no explica nada:

> "El hielo era el síntoma. Lo que lo causó fue [el filtro / la turbina sucia / refrigerante bajo por una fuga]. Ya quité el hielo y [corregí X]. Si no atendemos la causa, se va a volver a congelar — así se vería eso."

Si la causa fue un filtro, **di que es un filtro y cóbralo como un filtro.** La confianza que ganas con una respuesta barata y honesta en un día caluroso vale más que el ticket que no escribiste.

## Qué se registra {#record}

- **Foto del hielo** antes de descongelar.
- **Qué estaba congelado** — serpentín interior, línea de succión, unidad exterior, o todo.
- **Estado y medida del filtro**, y la presión estática total.
- **Todas las lecturas posteriores al descongelado.** Las lecturas de manómetro previas no son válidas y no deben capturarse como si lo fueran.
- **Causa identificada**, y si se hizo búsqueda de fuga.
- **Si se requirió visita de regreso** para completar el descongelado.

## Relacionado

- El estándar detrás de todo esto: `sop.field.diagnostics`
- Dónde empieza una llamada de enfriamiento: `sop.field.no-cooling`
- Objetivos y umbrales: `reference.diagnostic-readings`
