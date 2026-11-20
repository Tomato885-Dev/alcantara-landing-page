# Festival Alcántara — Landing Page

Landing page de una página (one-page) para el Festival Alcántara, inspirada en el estilo de festivales como Lollapalooza y Vibra Fest: fondo oscuro, tipografía condensada, gradientes vibrantes, cartel de line-up, countdown y tramos de entradas.

## Estructura

```
index.html        → marcado de todas las secciones
css/styles.css    → estilos y diseño responsive
js/main.js        → line-up, countdown, tabs, acordeón FAQ, menú móvil
```

## Secciones

- **Hero** con countdown en vivo hacia la fecha del festival
- **Line-up** con cartel filtrable por día (tabs Viernes / Sábado / Domingo)
- **Info** (fechas, lugar, edad, cómo llegar)
- **Experiencia** (escenarios, gastronomía, VIP, arte)
- **Entradas** con tres tramos de precios
- **FAQ** en acordeón
- **Sponsors** y **footer** con redes sociales

## Cómo verlo

Abre `index.html` directamente en el navegador, o levanta un servidor local:

```bash
python3 -m http.server 8000
```

Luego entra a `http://localhost:8000`.

## Personalización

Todo el contenido son datos de ejemplo. Para adaptarlo:

- **Line-up:** edita el array `LINEUP` en `js/main.js`. Cada artista tiene `name`, `size` (`xl`, `l`, `m`, `s` según jerarquía en el cartel) y `days` (en qué días toca).
- **Fecha del countdown:** cambia la constante `TARGET` en `js/main.js`.
- **Fechas, lugar, precios, FAQ:** edita los textos directamente en `index.html`.
- **Colores:** ajusta las variables al inicio de `css/styles.css` (`--magenta`, `--purple`, `--cyan`, `--lime`).
- **Enlaces de compra y redes:** reemplaza los `href="#"` de los botones "Comprar" y de las redes sociales por las URLs reales.
