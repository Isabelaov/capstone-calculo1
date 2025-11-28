# Capstone calculo 1
# Comparador de Gravedades en Diferentes Mundos

Capstone Cálculo I 
Modelado de la caída libre y el tiro parabólico en distintos cuerpos celestes.

---

## Definición del fenómeno

Este proyecto estudia el movimiento de un cuerpo bajo la acción exclusiva de la gravedad, sin considerar la resistencia del aire. Se enfoca principalmente en la caída libre, y opcionalmente en el tiro parabólico, dos fenómenos fundamentales en la física clásica que se modelan mediante funciones y derivadas, conceptos centrales del Cálculo I.

- **Caída libre**: movimiento vertical en el que un objeto se desplaza bajo una aceleración constante igual a la gravedad local \( g \). Puede iniciarse desde el reposo (\( v_0 = 0 \)) o con una velocidad inicial vertical.
- **Tiro parabólico** (extensión opcional): movimiento en dos dimensiones que resulta de lanzar un objeto con una velocidad inicial que tiene componentes horizontal y vertical. La trayectoria es una parábola, y su análisis combina movimiento rectilíneo uniforme (horizontal) y caída libre (vertical).

La gravedad \( g \) varía según el cuerpo celeste (Tierra, Luna, Marte, etc.), lo que permite comparar cómo el mismo objeto se comporta en distintos mundos.

---

## Fórmulas y su explicación

### 1. Posición en función del tiempo  
`y(t) = h₀ + v₀·t − ½·g·t²`

- Qué representa: Altura del objeto en cualquier instante `t`.
- Origen: Solución de la ecuación diferencial `y''(t) = -g` con condiciones iniciales `y(0) = h₀` y `y'(0) = v₀`.
- Uso: Permite graficar la caída; en planetas con mayor `g`, la curva desciende más rápidamente.

### 2. Velocidad en función del tiempo  
`v(t) = v₀ − g·t`

- Qué representa: Velocidad instantánea en la dirección vertical.
- Origen: Derivada de la posición: `v(t) = dy/dt`.
- Uso: Muestra cómo la velocidad aumenta (en magnitud) con mayor rapidez en mundos con mayor gravedad.

### 3. Aceleración  
`a(t) = −g`

- Qué representa: Aceleración constante debida a la gravedad.
- Origen: Derivada de la velocidad o segunda derivada de la posición.
- Uso: Confirma que la aceleración es constante en el tiempo, pero su magnitud depende del cuerpo celeste.

### 4. Tiempo de caída (desde reposo)  
`t = √(2·h₀ / g)`

- Qué representa: Tiempo que tarda un objeto en tocar el suelo al soltarse desde una altura `h₀`.
- Origen: Solución de la ecuación `y(t) = 0` con `v₀ = 0`.
- Uso: Permite comparar duraciones: la caída es más corta en planetas con mayor `g`.

### 5. Velocidad al impactar (desde reposo)  
`v = −√(2·g·h₀)`

- Qué representa: Velocidad del objeto inmediatamente antes del impacto con el suelo.
- Origen: Evaluación de `v(t)` en el instante `t = √(2·h₀ / g)`.
- Uso: Ilustra que el impacto es más intenso en cuerpos con mayor gravedad.

### 6. (Extra) Alcance horizontal en tiro parabólico  
`R = (v₀²·sin(2θ)) / g`  (cuando `h₀ = 0`)

- Qué representa: Distancia horizontal total recorrida por el proyectil.
- Origen: Producto de la velocidad horizontal constante y el tiempo total de vuelo.
- Uso: Permite comparar distancias de lanzamiento; en la Luna, por ejemplo, se alcanzan mayores rangos.

Conexión con Cálculo I:  
Este proyecto aplica funciones, derivadas (posición → velocidad → aceleración), resolución de ecuaciones no lineales y análisis gráfico, todo en función de un parámetro físico variable: la gravedad `g`.

---

## Gravedades de los cuerpos celestes utilizados

| Cuerpo celeste | Gravedad \( g \) (m/s²) |
|----------------|--------------------------|
| Tierra         | 9.81                     |
| Luna           | 1.62                     |
| Marte          | 3.71                     |
| Júpiter        | 24.79                    |

Ejemplo: Un objeto tarda aproximadamente 3.5 segundos en caer 10 metros en la Luna, pero solo 0.9 segundos en Júpiter.

---

## Qué se compara

- Tiempo de caída desde la misma altura inicial.
- Velocidad al momento del impacto.
- Forma y pendiente de las gráficas de posición y velocidad.
- (Opcional) Alcance horizontal y altura máxima en lanzamientos oblicuos.

---

## Fundamento matemático

Este proyecto refuerza los siguientes temas de Cálculo I:
- Modelado de fenómenos físicos mediante funciones reales.
- Interpretación de la derivada como razón de cambio instantáneo.
- Análisis gráfico de funciones lineales y cuadráticas.
- Resolución de ecuaciones para determinar eventos físicos relevantes (por ejemplo, cuando `y(t) = 0`).

