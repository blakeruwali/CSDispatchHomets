---
translation_of: sop.projects.install-day
source_version: 1
---

# Día de Instalación — De la Llegada al Recorrido Final

| | |
|---|---|
| **Propósito** | La instalación se ejecuta y se documenta con el mismo estándar siempre, sin importar quién la dirija. |
| **Cuándo aplica** | Cada día de instalación, cada cuadrilla. |
| **Responsable** | El instalador líder es dueño del sitio; el Gerente de Proyecto es dueño del resultado. |

## Llegada {#arrival}

- En el domicilio al **abrir** la ventana, igual que en servicio — `sop.field.start-time`.
- El líder toca la puerta, presenta a toda la cuadrilla por nombre y confirma el alcance en voz alta con el cliente antes de sacar una sola herramienta: qué se instala, dónde, cuánto tarda y cuándo quedará el sistema apagado.
- Protección de pisos y lonas antes del primer viaje hacia adentro.
- Fotografía el espacio **antes** de empezar. Protege al cliente y nos protege a nosotros.

## Durante {#during}

- El líder es la única voz ante el cliente. Las preguntas de la cuadrilla van al líder, no al dueño de la casa.
- **Nada fuera del alcance firmado se hace gratis, y nada adicional se cobra sin una orden de cambio firmada.** ¿Encontraste un intercambiador de calor agrietado en la unidad contigua, una plataforma podrida, un desconectador fallando? Detente, fotografía, llama al Gerente de Proyecto y preséntalo como orden de cambio por escrito. Las aprobaciones verbales no existen.
- Informa al Gerente de Proyecto al mediodía sobre cualquier cosa que amenace terminar el mismo día.
- El equipo viejo se va con nosotros, salvo que el cliente haya pedido expresamente quedárselo.

## Arranque y documentación {#startup}

Antes de llamar al cliente, el líder registra en el trabajo:

| Capturado | Detalle |
|---|---|
| Equipo nuevo | Modelo y serie de cada unidad instalada — `sop.field.equipment-capture` |
| Lecturas de arranque | Temperaturas de suministro/retorno, presión estática, carga de refrigerante / subenfriamiento / sobrecalentamiento, presión de gas donde aplique, consumo de amperaje |
| Combustión | Donde aplique, resultados del análisis de combustión |
| Fotos | Instalación terminada desde tres ángulos, conexiones eléctricas, condensado, ventilación, termostato |
| Registro | Números de serie capturados para el registro de garantía — `sop.projects.closeout` |

Una instalación sin lecturas de arranque no está terminada. Es una máquina que alguien encendió.

## El recorrido final {#walkthrough}

Con el cliente, junto al equipo, antes de que nadie recoja:

1. Muéstrale el sistema nuevo y qué cambió.
2. Termostato: prográmalo, explícale las pantallas y haz que él lo haga una vez.
3. Filtro: medida, ubicación, cómo cambiarlo y con qué frecuencia.
4. Garantía: qué cubre, por cuánto tiempo, y que nosotros la registramos por él.
5. Membresía: todo cliente de instalación recibe la conversación de mantenimiento — `script.sales.membership-enroll`.
6. Menciónale la **revisión de confort** en 10–14 días, por su nombre, para que la llamada de seguimiento sea esperada.
7. Recorran el espacio juntos y confirmen que el sitio quedó limpio.

Luego el cliente firma la conformidad y se cobra el saldo final según `sop.sales.paperwork`.

## Nunca dejes a un cliente sin calefacción ni aire {#never-leave-down}

Si el trabajo no se puede terminar el mismo día, el líder no se va hasta que ocurra una de tres cosas: el sistema viejo quede funcionando, haya equipo temporal instalado, o el Gerente de Proyecto haya hablado personalmente con el cliente sobre el arreglo para esa noche.

## Relacionado

- Confirmación previa: `sop.projects.pre-install`
- Cierre del proyecto: `sop.projects.closeout`
- La visita de seguimiento: `sop.projects.comfort-check`
