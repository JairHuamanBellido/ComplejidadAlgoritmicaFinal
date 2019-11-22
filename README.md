![](https://www.laureate.net/wp-content/uploads/2019/03/10-UPC-Universidad-Peruana-de-Ciencias-Aplicadas.png)

# Trabajo Final

### Profesor
Canaval Sánchez, Luis Martín

### Alumno
Huaman Bellido, Jair Orlando




## 1. Introducción
A lo largo de los años se han planteado diversos problemas de programación que están ligados a la realidad, y así resolverlos mediante algoritmos y resolver estos problemas. Uno de estos es el empaquetamiento en 3 dimensiones el cual se aplica en diversas circunstancias. En los últimos años se ha observado un creciente interés en la automatización de almacenes, incluido el embalaje de robots totalmente automático.  Actualmente la práctica en las organizaciones deja la responsabilidad de la selección y embalaje de contenedores a la intuición del trabajador humano, esto se debe a los horarios exigentes, los trabajadores no pueden emplear mucha previsión en el proceso de empaque y son reacios a volver a empacar. Esto comúnmente resulta en contenedores de gran tamaño que generan desperdicio y altos costos de envío. Se podrían elegir mejores contenedores y planes de embalaje utilizando algoritmos automatizados, ya sea que el embalaje sea realizado por humanos o robots. Los problemas que implican la colocación de objetos dentro de un contenedor o un conjunto de contenedores generalmente se denominan problemas de corte y empaquetamiento. Por ello se plantean distintos algoritmos de corte y empaquetamiento que sirven para minimizar el espacio y costos al momento de posicionar estas estructuras en un contenedor de mayor volumen. 



## 2. Indice
3. Objetivo del estudiante
4. Estado del arte


## 3. Objetivo del estudiante

* Diseñar algoritmos eficientes para la resolución del problema planteado
* Implementar algoritmos tomando en cuenta el tiempo de ejecución de mismo
* Alcanzar los logros propuestos por ABET
* Realizar pruebas a los algoritmos propuestos, para saber cuál es el más eficiente entre ellos 
* Calcular la complejidad de los algoritmos planteados complejidad.


## 4. Estado del Arte
### 4.1 Fuerza Bruta:
Los algoritmos de Fuerza Bruta son capaces de encontrar la solución a cualquier
problema por complicado que sea. Su fundamento es muy simple, probar todas las
posibles combinaciones, recorrer todos los caminos hasta dar con la situación que
es igual que la solución
Los algoritmos de Fuerza Bruta son capaces de encontrar la solución a cualquier problema por complicado que sea. Su fundamento es muy simple, probar todas las posibles combinaciones, recorrer todos los caminos hasta dar con la situación que es igual que la solución. La búsqueda por fuerza bruta es sencilla de implementar y, siempre que exista, encuentra una solución. Sin embargo, su coste de ejecución es proporcional al número de soluciones candidatas, el cual es exponencialmente proporcional al tamaño   del   problema. Es un método utilizado también cuando es más importante una implementación sencilla que una mayor rapidez.

### 4.1.1 Características:
* Es el algoritmo más simple posible.
* Consiste en probar todas las posibles posiciones del patrón en el texto.
* Requiere espacio constante.

### 4.1.2 Lógica:
* Se sitúa el patrón en la primera posición, y se compara posición por posición hasta encontrar un fallo o llegar al final del patrón.
* Se pasa a la siguiente posición y se repite el proceso.
* El proceso finaliza al alcanzar la colococación de todos los cubos dentro del 

### 4.1.3 Ventajas y Desventajas
Esta técnica es la base de los algoritmos eficientes para resolver un tipo de problema ya que como mencionamos anteriormente este método tiene ventajas y desventajas

**Ventajas**
* Es un algoritmo simple
* Es la más simple y busca en todo el espacio de solución.
* Enumera todos los posibles candidatos para la solución.
* Encuentra una solución

**Desventajas**
* Depende de N el número de N posiciones a compararse y por ende el tiempo de ejecución 
* Requiere un determinado espacio
* Recorre todas las comparaciones de un elemento a verificarse.

## 5. Aporte
El algoritmo creado tiene una complejidad de O(2n^2), es por que ello que la importancia de hallar la complejidad es poder analizar el tiempo el cual el algoritmo tardará en ejecutarse llegando hasta su peor caso posible. Esto contribuye al rendimiento de un CPU, puesto que lo beneficia al hacer menor uso de sus recurso para encontrar la solución, asimismo la energía consumida es menor. Gracias al análisis de la complejidad el usuario podrá tomar las precauciones posibles para su computadora.

## 6. Diseño de Aplicativo para pruebas

Pseucódigo



 

    Empezar

		wContainer =  null

		hContainer <- null

		dContainer <-  null

		cubosArray [] = nul

		Proceso IngresarDatos()

			wContainer <- input
			hContainer <- input
			dContainer <- input

			Si wContainer < 1 ||  hContainer < 1 || dContainer < 1
				print "Las dimensiones tiene que ser mayor a 0"
			Si no:
				nTiposCubos <- input

				Si nTiposCubos < 1
					print "Tienes que elegir al menos un tipo de cubo"
				Si no
					nCubosTDeTipo <- input

					Si nCubosTDeTipo < 1

						print "Tienes que insertar al menos un cubo de tipo n"

					Si no
						wCube <- input
						hCube <- input
						dCube <- input

						Si wCube < 0 || hCube || dCube
							print "Los cubos deben tener dimensiones mayor a 1"
						Si no
							nuevoCubo.w <- wCube
							nuevoCubo.h <- hCube
							nuevoCubo.d <- dCube

							cubosArray.añadir(nuevoCubo)

		Funcion  OrdernarCubosPorAnchoPorProfundidad()

			cubosArray.sort()

		Funcion jumpLineZ(arrCubes, lastCubeTracked)
			found = lastCubeTracked.d / 2 + lastCubeTracked.z

			i = 0
			
			Mientras i<arrCubes.size()
				Si lastCubeTracked.z < arrCubes[i].z
					found = arrCubes[i].z + arrCubes[i].d / 2
					Terminar

			retornar found
		

		Funcion findSpaceUpLevel(arrCubes,lastCubeTracked)

			newHeight = lastCubeTracked.y + (lastCubeTracked.h  / 2)
			i = 0
			Mientras i < arrCubes.size()
				Si newHeight < arrCubes[i].y + lastCubeTracked.h / 2
					newHeight = arrCubes[i].y + arrCubes[i].h / 2  

		Funcion PosicionarCubos()
			Tracker_x = -wContainer / 2
			Tracker_z = -dContainer / 2
			Tracker_y = 0

			i = 0
			
			Mientras i < cubosArray.size()
				
				

				Si Tracker_x +  cubosArray[i].w > wContainer / 2
					Tracker_x = -wContainer / 2
					Tracker_z = jumpLineZ(cubosArray,cubosArray[i])

				Si Tracker_z >= dContainer / 2
					Tracker_y = findSpaceUpLevel(cubosArray,cubosArray[i])
					Tracker_y = Tracker_y + 0.1333
					Tracker_x = -wContainer / 2
					Tracker_z = -dContainer / 2

				cubosArray[i].setPosition(Tracker_x + cubosArray[i].w/2, Tracker_y + cubosArray[i].h / 2, Tracker_d + cubosArray[i].d / 2)

				Tracker_x = Tracker_x + cubosArray[i].w




		Funcion Algoritmo()

			OrdernarCubosPorZ()

			PosicionarCubos()
	Terminar


## 7. Validación de Resultados y Discusión

La siguiente imagen tiene como resultado de tiempo de ejecución de 0.7 ms por ordenar 18 cubos en un contenedor de 20 x 20 x 20

![Prueba 1](https://github.com/JairHuamanBellido/WV72-ComplejidadAlgoritmica/blob/master/GithubImages/Test1Algorithm.png)

La siguiente imagen tiene como resultado de tiempo de ejecucion de 1.3 ms por ordenar 78 cubos en un contenedor de 100 x 100 x 100

![Prueba 2](https://github.com/JairHuamanBellido/WV72-ComplejidadAlgoritmica/blob/master/GithubImages/Test2Algorithm.png)

## 8. Conclusiones y Trabajos Futuros

La solución propuesta beneficia al CPU por tener que consumir menos recursos para realizar el procesamiento del algoritmo ya que el gasto de energía es menor y esto contribuye a la economía de la persona y evitar sobrecargas la cual perjudica su ambiente de trabajo

## 9. Conclusiones

En síntesis, para la elaboracion del algoritmo se empleó una búsqueda de fuerza bruta ya que por cada posicionamiento de cubo se tiene que validar cual posición este disponible. En base a los resultados obtenidos durante la etapa de prueba, se recomienda usar un algoritmo mejor que fuerza bruta, ya que la desventaja de fuerza es




