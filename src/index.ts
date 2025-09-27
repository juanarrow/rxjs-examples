import { 
  Observable, 
  Subject, 
  BehaviorSubject, 
  ReplaySubject,
  AsyncSubject,
  interval, 
  fromEvent, 
  of, 
  from,
  timer,
  range,
  EMPTY,
  NEVER,
  throwError,
  merge,
  concat,
  combineLatest,
  zip,
  race,
  forkJoin
} from 'rxjs';
import { 
  map, 
  mapTo,
  pluck,
  filter, 
  debounceTime, 
  distinctUntilChanged, 
  distinct,
  throttleTime,
  first,
  last,
  takeWhile,
  takeUntil,
  skipWhile,
  skipUntil,
  switchMap, 
  mergeMap, 
  concatMap, 
  take, 
  skip, 
  scan, 
  reduce,
  tap,
  catchError,
  retry,
  share,
  withLatestFrom,
  startWith,
  pairwise,
  delay,
  finalize,
  timeout,
  defaultIfEmpty,
  isEmpty,
  every,
  find,
  findIndex
} from 'rxjs/operators';

interface Example {
  id: string;
  title: string;
  description: string;
  explanation: string;
  category: string;
  code: string;
  demo: () => void;
  cleanup?: () => void;
}

class RxJSExamplesApp {
  private examples: Example[] = [];
  private currentSubscriptions: any[] = [];
  private currentCategory = '';

  constructor() {
    this.initializeExamples();
    this.setupNavigation();
    this.setupThemeToggle();
    this.initializeTheme();
    this.showCategory('basic');
  }

  private initializeExamples() {
    this.examples = [
      {
        id: 'observable-basic',
        title: 'Observable Básico',
        description: 'Creación y suscripción a un Observable simple',
        explanation: `Un Observable es como un "canal de datos" que puede emitir valores a lo largo del tiempo. 

🔹 **¿Qué hace?** Creamos un Observable que emite dos valores ('Hola' y 'Mundo') y luego se completa.

🔹 **¿Cómo funciona?** 
- Usamos 'subscriber.next()' para enviar valores
- Usamos 'subscriber.complete()' para indicar que terminamos
- Nos suscribimos para recibir los valores

🔹 **¿Por qué es útil?** Los Observables nos permiten manejar datos asincrónicos de forma elegante, como eventos del usuario, respuestas de APIs, etc.`,
        category: 'basic',
        code: `const observable = new Observable(subscriber => {
  subscriber.next('Hola');
  subscriber.next('Mundo');
  subscriber.complete();
});

observable.subscribe({
  next: value => console.log(value),
  complete: () => console.log('Completado')
});`,
        demo: () => this.demoObservableBasic()
      },
      {
        id: 'subject-basic',
        title: 'Subject',
        description: 'Subject como Observable y Observer',
        explanation: `Un Subject es especial: ¡es Observable Y Observer al mismo tiempo!

🔹 **¿Qué hace?** Permite que múltiples suscriptores reciban los mismos valores al mismo tiempo.

🔹 **¿Cómo funciona?**
- Varios observadores se suscriben al mismo Subject
- Cuando emitimos un valor con 'next()', TODOS los suscriptores lo reciben
- Es como un "altavoz" que transmite a toda una audiencia

🔹 **¿Por qué es útil?** Perfecto para compartir datos entre diferentes partes de tu aplicación, como notificaciones o estados globales.`,
        category: 'basic',
        code: `const subject = new Subject();

subject.subscribe(value => console.log('Suscriptor 1:', value));
subject.subscribe(value => console.log('Suscriptor 2:', value));

subject.next('Mensaje 1');
subject.next('Mensaje 2');`,
        demo: () => this.demoSubject()
      },
      {
        id: 'interval-observable',
        title: 'Interval Observable',
        description: 'Observable que emite valores cada cierto tiempo',
        explanation: `El operador 'interval' es como un cronómetro que cuenta números automáticamente.

🔹 **¿Qué hace?** Emite números secuenciales (0, 1, 2, 3...) cada cierto tiempo.

🔹 **¿Cómo funciona?**
- 'interval(800)' emite un número cada 800 milisegundos
- 'take(5)' limita la emisión a solo 5 valores
- Los números empiezan desde 0

🔹 **¿Por qué es útil?** Ideal para crear temporizadores, animaciones, polling de APIs, o cualquier tarea que necesite repetirse periódicamente.`,
        category: 'basic',
        code: `const source = interval(800);
const subscription = source.pipe(
  take(5)
).subscribe(
  value => console.log('Valor:', value)
);`,
        demo: () => this.demoInterval()
      },
      {
        id: 'behaviorsubject-basic',
        title: 'BehaviorSubject',
        description: 'Subject que recuerda el último valor emitido',
        explanation: `BehaviorSubject es como un "buzón con memoria": siempre tiene un valor disponible para nuevos suscriptores.

🔹 **¿Qué hace?** Es un Subject que almacena el último valor emitido y lo entrega inmediatamente a nuevos suscriptores.

🔹 **¿Cómo funciona?**
- Requiere un valor inicial
- Nuevos suscriptores reciben inmediatamente el último valor
- Siempre tiene un valor "actual" disponible
- Perfecto para estados que necesitan persistir

🔹 **¿Por qué es útil?** Ideal para estados de aplicación, configuraciones, datos que los componentes necesitan inmediatamente al suscribirse.`,
        category: 'basic',
        code: `const currentUser = new BehaviorSubject('Invitado');

// Suscriptor temprano recibe el valor inicial
currentUser.subscribe(user => console.log('Sub1:', user));

currentUser.next('Ana');
currentUser.next('Luis');

// Suscriptor tardío recibe el último valor inmediatamente
currentUser.subscribe(user => console.log('Sub2:', user));`,
        demo: () => this.demoBehaviorSubject()
      },
      {
        id: 'replaysubject-basic',
        title: 'ReplaySubject',
        description: 'Subject que reproduce los últimos N valores',
        explanation: `ReplaySubject es como una "grabadora": guarda los últimos valores y los reproduce para nuevos suscriptores.

🔹 **¿Qué hace?** Almacena un número específico de valores anteriores y los entrega a nuevos suscriptores.

🔹 **¿Cómo funciona?**
- Configuras cuántos valores quieres recordar (buffer)
- Nuevos suscriptores reciben todos los valores del buffer
- Es como "ponerse al día" con lo que pasó antes
- Útil cuando necesitas historial

🔹 **¿Por qué es útil?** Perfecto para logs, historial de acciones, cuando nuevos componentes necesitan contexto de lo que pasó antes.`,
        category: 'basic',
        code: `const history = new ReplaySubject(3); // Recuerda últimos 3

history.next('Acción 1');
history.next('Acción 2');
history.next('Acción 3');
history.next('Acción 4');

// Nuevo suscriptor recibe las últimas 3 acciones
history.subscribe(action => console.log('Historial:', action));`,
        demo: () => this.demoReplaySubject()
      },
      {
        id: 'asyncsubject-basic',
        title: 'AsyncSubject',
        description: 'Subject que solo emite el último valor al completarse',
        explanation: `AsyncSubject es como "esperar al final de la película": solo te dice el resultado final cuando todo termina.

🔹 **¿Qué hace?** Solo emite el último valor cuando el Observable se completa.

🔹 **¿Cómo funciona?**
- Recibe múltiples valores pero no los emite
- Solo cuando se llama a complete(), emite el último valor
- Si no se completa, nunca emite nada
- Es como una "promesa" que se resuelve al final

🔹 **¿Por qué es útil?** Ideal para operaciones que solo importa el resultado final: cálculos complejos, procesos que deben terminar completamente.`,
        category: 'basic',
        code: `const finalResult = new AsyncSubject();

finalResult.subscribe(value => console.log('Resultado:', value));

finalResult.next('Procesando...');
finalResult.next('Casi listo...');
finalResult.next('¡Completado!');
finalResult.complete(); // Solo ahora emite '¡Completado!'`,
        demo: () => this.demoAsyncSubject()
      },
      {
        id: 'of-observable',
        title: 'Observable Of',
        description: 'Crea un Observable que emite valores específicos',
        explanation: `El operador 'of' es como una "lista de reproducción": emite los valores que le das, uno tras otro.

🔹 **¿Qué hace?** Crea un Observable que emite una secuencia específica de valores y luego se completa.

🔹 **¿Cómo funciona?**
- Le pasas los valores que quieres emitir
- Los emite sincrónicamente uno tras otro
- Se completa automáticamente después del último valor
- Es la forma más simple de crear un Observable con datos conocidos

🔹 **¿Por qué es útil?** Perfecto para testing, datos estáticos, transformar arrays en streams, crear ejemplos rápidos.`,
        category: 'basic',
        code: `const fruits = of('🍎', '🍌', '🍊', '🍇');

fruits.subscribe({
  next: fruit => console.log('Fruta:', fruit),
  complete: () => console.log('¡No más frutas!')
});`,
        demo: () => this.demoOf()
      },
      {
        id: 'from-observable',
        title: 'Observable From',
        description: 'Convierte arrays, promesas o iterables en Observables',
        explanation: `El operador 'from' es como un "convertidor universal": toma diferentes tipos de datos y los convierte en Observables.

🔹 **¿Qué hace?** Convierte arrays, promesas, iterables o cualquier "observable-like" en un Observable real.

🔹 **¿Cómo funciona?**
- Arrays: emite cada elemento por separado
- Promesas: emite el valor resuelto
- Strings: emite cada carácter
- Es muy flexible y potente

🔹 **¿Por qué es útil?** Esencial para integrar código existente con RxJS, convertir APIs que devuelven promesas, procesar arrays de forma reactiva.`,
        category: 'basic',
        code: `const numbers = from([10, 20, 30, 40]);
const promise = from(Promise.resolve('¡Éxito!'));
const text = from('HOLA');

numbers.subscribe(num => console.log('Número:', num));
promise.subscribe(result => console.log('Promesa:', result));
text.subscribe(char => console.log('Letra:', char));`,
        demo: () => this.demoFrom()
      },
      {
        id: 'range-observable',
        title: 'Observable Range',
        description: 'Genera una secuencia de números',
        explanation: `Range es como un "contador automático": genera una secuencia de números consecutivos.

🔹 **¿Qué hace?** Emite una secuencia de números enteros consecutivos.

🔹 **¿Cómo funciona?**
- Le das un número inicial y cuántos números quieres
- Genera la secuencia automáticamente
- Emite todos los números sincrónicamente
- Se completa cuando termina la secuencia

🔹 **¿Por qué es útil?** Perfecto para generar IDs, crear loops reactivos, testing con secuencias predecibles, inicializar arrays.`,
        category: 'basic',
        code: `const sequence = range(1, 5); // Del 1 al 5

sequence.subscribe({
  next: num => console.log('Número:', num),
  complete: () => console.log('Secuencia completa')
});`,
        demo: () => this.demoRange()
      },
      {
        id: 'timer-observable',
        title: 'Observable Timer',
        description: 'Emite después de un delay, opcionalmente de forma periódica',
        explanation: `Timer es como un "despertador programable": puede emitir una vez después de un tiempo, o repetirse periódicamente.

🔹 **¿Qué hace?** Emite un valor después de un delay especificado, y opcionalmente continúa emitiendo periódicamente.

🔹 **¿Cómo funciona?**
- Con un parámetro: emite una vez después del delay
- Con dos parámetros: delay inicial + intervalo de repetición
- Más flexible que interval porque puedes controlar el primer delay

🔹 **¿Por qué es útil?** Ideal para delays, timeouts, polling con delay inicial, animaciones con timing específico.`,
        category: 'basic',
        code: `// Emite una vez después de 2 segundos
const singleTimer = timer(2000);

// Emite después de 1s, luego cada 1s
const periodicTimer = timer(1000, 1000).pipe(take(3));

singleTimer.subscribe(() => console.log('¡Tiempo!'));
periodicTimer.subscribe(x => console.log('Tick:', x));`,
        demo: () => this.demoTimer()
      },
      {
        id: 'empty-never-error',
        title: 'EMPTY, NEVER y throwError',
        description: 'Observables especiales para casos específicos',
        explanation: `Estos son Observables especiales para situaciones específicas, como herramientas de utilidad.

🔹 **EMPTY**: Se completa inmediatamente sin emitir valores
- Como un "sobre vacío"
- Útil para casos donde no hay datos que procesar

🔹 **NEVER**: Nunca emite ni se completa
- Como "esperar para siempre"
- Útil para testing o placeholders

🔹 **throwError**: Emite un error inmediatamente
- Como "lanzar una excepción"
- Útil para simular errores o manejar casos de fallo

🔹 **¿Por qué son útiles?** Esenciales para testing, manejo de casos edge, control de flujo especial.`,
        category: 'basic',
        code: `import { EMPTY, NEVER, throwError } from 'rxjs';

// EMPTY: se completa inmediatamente
EMPTY.subscribe({
  next: () => console.log('Nunca se ejecuta'),
  complete: () => console.log('EMPTY completado')
});

// throwError: emite error inmediatamente
throwError('¡Algo salió mal!').subscribe({
  error: err => console.log('Error:', err)
});`,
        demo: () => this.demoSpecialObservables()
      },
      {
        id: 'map-operator',
        title: 'Operador Map',
        description: 'Transforma cada valor emitido por el Observable',
        explanation: `El operador 'map' es como una fábrica que transforma cada elemento que pasa por ella.

🔹 **¿Qué hace?** Toma cada valor del Observable y lo transforma usando una función.

🔹 **¿Cómo funciona?**
- Primer 'map': convierte 0→1, 1→2, 2→3, etc.
- Segundo 'map': duplica cada número (1→2, 2→4, 3→6, etc.)
- Cada valor pasa por ambas transformaciones en secuencia

🔹 **¿Por qué es útil?** Esencial para transformar datos: convertir respuestas de API, formatear fechas, calcular valores derivados, etc.`,
        category: 'transformation',
        code: `const source = interval(300).pipe(
  map(x => x + 1),
  take(5)
);
const doubled = source.pipe(
  map(x => x * 2)
);

doubled.subscribe(value => console.log(value));`,
        demo: () => this.demoMap()
      },
      {
        id: 'mapTo-operator',
        title: 'Operador MapTo',
        description: 'Transforma todos los valores a un valor constante',
        explanation: `MapTo es como un sello que marca todo con el mismo valor, sin importar lo que reciba.

🔹 **¿Qué hace?** Convierte TODOS los valores emitidos al mismo valor constante.

🔹 **¿Cómo funciona?**
- Recibe cualquier valor (números, strings, objetos)
- Los ignora completamente
- Siempre emite el mismo valor predefinido

🔹 **¿Por qué es útil?** Perfecto para convertir eventos a acciones (clicks → 'CLICKED'), resetear valores, o crear señales constantes.`,
        category: 'transformation',
        code: `const clicks = fromEvent(button, 'click');
const clickSignal = clicks.pipe(
  mapTo('¡Click detectado!')
);

clickSignal.subscribe(value => console.log(value));`,
        demo: () => this.demoMapTo()
      },
      {
        id: 'pluck-operator',
        title: 'Operador Pluck',
        description: 'Extrae una propiedad específica de objetos',
        explanation: `Pluck es como un extractor que saca solo la información que necesitas de objetos complejos.

🔹 **¿Qué hace?** Extrae una propiedad específica de cada objeto emitido.

🔹 **¿Cómo funciona?**
- Recibe objetos con múltiples propiedades
- Extrae solo la propiedad que especifiques
- Emite únicamente esos valores extraídos

🔹 **¿Por qué es útil?** Ideal para APIs que devuelven objetos complejos pero solo necesitas ciertos campos, como extraer nombres de usuarios, IDs, etc.`,
        category: 'transformation',
        code: `const users = of(
  { id: 1, name: 'Ana', age: 25 },
  { id: 2, name: 'Luis', age: 30 },
  { id: 3, name: 'María', age: 28 }
);

const names = users.pipe(pluck('name'));
names.subscribe(name => console.log(name));`,
        demo: () => this.demoPluck()
      },
      {
        id: 'concatMap-operator',
        title: 'Operador ConcatMap',
        description: 'Mapea a Observables internos y los concatena en orden',
        explanation: `ConcatMap es como una fila ordenada: procesa cada elemento completamente antes de pasar al siguiente.

🔹 **¿Qué hace?** Transforma cada valor en un Observable interno y los ejecuta uno tras otro, en orden.

🔹 **¿Cómo funciona?**
- Recibe un valor y crea un Observable interno
- Espera a que ese Observable se complete
- Solo entonces procesa el siguiente valor
- Mantiene el orden original

🔹 **¿Por qué es útil?** Perfecto cuando el orden importa: procesar archivos secuencialmente, operaciones que deben ser ordenadas, etc.`,
        category: 'transformation',
        code: `const numbers = from([1, 2, 3]);
const delayed = numbers.pipe(
  concatMap(x => 
    timer(1000).pipe(map(() => x * 10))
  )
);

delayed.subscribe(value => console.log(value));`,
        demo: () => this.demoConcatMap()
      },
      {
        id: 'mergeMap-operator',
        title: 'Operador MergeMap',
        description: 'Mapea a Observables internos y los ejecuta en paralelo',
        explanation: `MergeMap es como un chef con múltiples sartenes: cocina todo al mismo tiempo y sirve lo que esté listo.

🔹 **¿Qué hace?** Transforma cada valor en un Observable interno y los ejecuta todos en paralelo.

🔹 **¿Cómo funciona?**
- Cada valor crea su propio Observable interno
- Todos los Observables internos se ejecutan simultáneamente
- Los resultados se emiten tan pronto como estén listos
- El orden de salida puede diferir del orden de entrada

🔹 **¿Por qué es útil?** Ideal para operaciones paralelas: múltiples llamadas HTTP, procesamiento independiente, máximo rendimiento.`,
        category: 'transformation',
        code: `const numbers = from([1, 2, 3]);
const parallel = numbers.pipe(
  mergeMap(x => 
    timer(Math.random() * 2000).pipe(map(() => x * 10))
  )
);

parallel.subscribe(value => console.log(value));`,
        demo: () => this.demoMergeMap()
      },
      {
        id: 'filter-operator',
        title: 'Operador Filter',
        description: 'Filtra valores basado en una condición',
        explanation: `El operador 'filter' actúa como un portero que solo deja pasar ciertos valores.

🔹 **¿Qué hace?** Examina cada valor y solo deja pasar los que cumplen una condición.

🔹 **¿Cómo funciona?**
- Recibe los números: 1, 2, 3, 4, 5, 6
- La condición 'x % 2 === 0' verifica si es par
- Solo pasan: 2, 4, 6 (los números pares)

🔹 **¿Por qué es útil?** Perfecto para filtrar listas, validar datos, mostrar solo elementos relevantes, etc.`,
        category: 'filtering',
        code: `const source = from([1, 2, 3, 4, 5, 6]).pipe(
  concatMap(x => timer(400).pipe(map(() => x)))
);
const evenNumbers = source.pipe(
  filter(x => x % 2 === 0)
);

evenNumbers.subscribe(value => console.log(value));`,
        demo: () => this.demoFilter()
      },
      {
        id: 'debounce-operator',
        title: 'Operador DebounceTime',
        description: 'Retrasa la emisión hasta que pase un tiempo sin nuevos valores',
        explanation: `DebounceTime es como esperar a que alguien termine de hablar antes de responder.

🔹 **¿Qué hace?** Espera un tiempo de "silencio" antes de emitir el último valor recibido.

🔹 **¿Cómo funciona?**
- Cada vez que escribes, se reinicia el temporizador de 300ms
- Solo cuando dejas de escribir por 300ms, se emite el valor
- 'distinctUntilChanged' evita emitir el mismo valor dos veces

🔹 **¿Por qué es útil?** Esencial para búsquedas en tiempo real, validación de formularios, evitar llamadas excesivas a APIs.`,
        category: 'filtering',
        code: `const searchInput = fromEvent(input, 'input');
const debouncedSearch = searchInput.pipe(
  debounceTime(300),
  map(event => event.target.value)
);

debouncedSearch.subscribe(value => console.log(value));`,
        demo: () => this.demoDebounce()
      },
      {
        id: 'throttle-operator',
        title: 'Operador ThrottleTime',
        description: 'Limita la frecuencia de emisiones ignorando valores por un tiempo',
        explanation: `ThrottleTime es como un "control de velocidad": deja pasar el primer valor y luego ignora los siguientes por un tiempo.

🔹 **¿Qué hace?** Emite el primer valor y luego ignora todos los valores siguientes durante un período específico.

🔹 **¿Cómo funciona?**
- Recibe un valor → lo emite inmediatamente
- Inicia un período de "silencio" (throttle)
- Ignora todos los valores durante ese período
- Después del período, vuelve a estar listo para el siguiente valor

🔹 **¿Por qué es útil?** Perfecto para botones (evitar doble clic), scroll events, resize events, cualquier evento que se dispare muy frecuentemente.`,
        category: 'filtering',
        code: `const clicks = fromEvent(button, 'click');
const throttledClicks = clicks.pipe(
  throttleTime(1000) // Ignora clicks por 1 segundo después de cada click
);

throttledClicks.subscribe(() => console.log('Click válido'));`,
        demo: () => this.demoThrottle()
      },
      {
        id: 'distinct-operator',
        title: 'Operador Distinct',
        description: 'Filtra valores duplicados basado en todo el historial',
        explanation: `Distinct es como un "detector de repeticiones": recuerda TODOS los valores que ha visto y filtra duplicados.

🔹 **¿Qué hace?** Mantiene un registro de todos los valores emitidos y solo deja pasar valores únicos.

🔹 **¿Cómo funciona?**
- Mantiene una "lista negra" de valores ya vistos
- Cada nuevo valor se compara con toda la lista
- Solo pasan los valores que nunca se han visto antes
- La memoria crece con cada valor único

🔹 **¿Por qué es útil?** Ideal para listas de elementos únicos, evitar procesamiento duplicado, filtrar IDs repetidos.`,
        category: 'filtering',
        code: `const values = of(1, 2, 2, 3, 1, 4, 3, 5);
const uniqueValues = values.pipe(
  distinct()
);

uniqueValues.subscribe(value => console.log('Único:', value));
// Emite: 1, 2, 3, 4, 5`,
        demo: () => this.demoDistinct()
      },
      {
        id: 'first-last-operator',
        title: 'Operadores First y Last',
        description: 'Toma solo el primer o último valor',
        explanation: `First y Last son como "tomar la primera/última carta del mazo": se enfocan en posiciones específicas.

🔹 **First**: Toma solo el primer valor emitido y se completa
- Como "el primero en llegar gana"
- Útil cuando solo necesitas el primer resultado
- Se puede combinar con condiciones

🔹 **Last**: Espera a que el Observable se complete y emite solo el último valor
- Como "esperar al final para ver quién ganó"
- Útil para obtener el resultado final

🔹 **¿Por qué son útiles?** Perfecto para obtener el primer/último elemento de una secuencia, resultados únicos, validaciones.`,
        category: 'filtering',
        code: `const numbers = of(1, 2, 3, 4, 5);

const firstNumber = numbers.pipe(first());
const lastNumber = numbers.pipe(last());

firstNumber.subscribe(x => console.log('Primero:', x));
lastNumber.subscribe(x => console.log('Último:', x));`,
        demo: () => this.demoFirstLast()
      },
      {
        id: 'take-skip-while-operator',
        title: 'TakeWhile y SkipWhile',
        description: 'Toma o salta valores mientras se cumple una condición',
        explanation: `TakeWhile y SkipWhile son como "semáforos condicionales": controlan el flujo basado en condiciones dinámicas.

🔹 **TakeWhile**: Toma valores MIENTRAS la condición sea verdadera
- Como "sigue adelante mientras el semáforo esté verde"
- Se detiene en cuanto la condición es falsa
- No vuelve a evaluar después de detenerse

🔹 **SkipWhile**: Ignora valores MIENTRAS la condición sea verdadera
- Como "espera hasta que el semáforo cambie"
- Una vez que la condición es falsa, deja pasar todo lo demás

🔹 **¿Por qué son útiles?** Perfecto para procesar datos hasta cierto punto, filtros dinámicos, validaciones progresivas.`,
        category: 'filtering',
        code: `const numbers = of(1, 2, 3, 4, 5, 6, 7, 8);

const takeWhileSmall = numbers.pipe(
  takeWhile(x => x < 5)
);

const skipWhileSmall = numbers.pipe(
  skipWhile(x => x < 5)
);

takeWhileSmall.subscribe(x => console.log('Take:', x)); // 1,2,3,4
skipWhileSmall.subscribe(x => console.log('Skip:', x)); // 5,6,7,8`,
        demo: () => this.demoTakeSkipWhile()
      },
      {
        id: 'take-skip-until-operator',
        title: 'TakeUntil y SkipUntil',
        description: 'Controla el flujo basado en otro Observable',
        explanation: `TakeUntil y SkipUntil son como "interruptores externos": otro Observable controla cuándo actuar.

🔹 **TakeUntil**: Toma valores HASTA que otro Observable emita
- Como "sigue hasta que suene la alarma"
- Muy útil para cancelar operaciones
- El Observable "notificador" actúa como un interruptor

🔹 **SkipUntil**: Ignora valores HASTA que otro Observable emita
- Como "espera la señal de inicio"
- Una vez que el notificador emite, deja pasar todo

🔹 **¿Por qué son útiles?** Esencial para cancelaciones, timeouts, sincronización entre streams, cleanup automático.`,
        category: 'filtering',
        code: `const source = interval(500);
const stopSignal = timer(3000);
const startSignal = timer(1500);

const takeUntilStop = source.pipe(
  takeUntil(stopSignal)
);

const skipUntilStart = source.pipe(
  skipUntil(startSignal),
  take(3)
);

takeUntilStop.subscribe(x => console.log('Until stop:', x));
skipUntilStart.subscribe(x => console.log('Until start:', x));`,
        demo: () => this.demoTakeSkipUntil()
      },
      {
        id: 'merge-operator',
        title: 'Operador Merge',
        description: 'Combina múltiples Observables en uno solo',
        explanation: `Merge es como mezclar dos ríos en uno solo, manteniendo el orden temporal.

🔹 **¿Qué hace?** Combina múltiples Observables emitiendo valores tan pronto como cualquiera de ellos los produzca.

🔹 **¿Cómo funciona?**
- Stream A emite cada 1000ms: A0, A1, A2
- Stream B emite cada 1500ms: B0, B1, B2
- El resultado mezcla ambos por orden de tiempo: A0, B0, A1, A2, B1, B2

🔹 **¿Por qué es útil?** Ideal para combinar eventos de diferentes fuentes: clics, teclado, notificaciones, etc.`,
        category: 'combination',
        code: `const source1 = interval(1000).pipe(
  map(x => \`A\${x}\`), 
  take(3)
);
const source2 = interval(1500).pipe(
  map(x => \`B\${x}\`), 
  take(3)
);

const merged = merge(source1, source2);
merged.subscribe(value => console.log(value));`,
        demo: () => this.demoMerge()
      },
      {
        id: 'switchmap-operator',
        title: 'Operador SwitchMap',
        description: 'Cambia a un nuevo Observable interno cancelando el anterior',
        explanation: `SwitchMap es como cambiar de canal de TV: cancela lo anterior y se enfoca en lo nuevo.

🔹 **¿Qué hace?** Cada vez que llega un nuevo valor, cancela el Observable anterior y crea uno nuevo.

🔹 **¿Cómo funciona?**
- Cada clic inicia un contador del 0 al 4
- Si haces clic mientras cuenta, cancela el contador anterior
- Solo el último contador completará su secuencia

🔹 **¿Por qué es útil?** Perfecto para búsquedas autocomplete, cancelar peticiones HTTP anteriores, navegación dinámica.`,
        category: 'transformation',
        code: `const clicks = fromEvent(button, 'click');
const result = clicks.pipe(
  switchMap(() => interval(500).pipe(take(5)))
);

result.subscribe(value => console.log(value));`,
        demo: () => this.demoSwitchMap()
      },
      {
        id: 'combinelatest-operator',
        title: 'CombineLatest',
        description: 'Combina los últimos valores de múltiples Observables',
        explanation: `CombineLatest es como una foto grupal: espera a que todos estén listos y luego captura el momento.

🔹 **¿Qué hace?** Combina los últimos valores de cada Observable cada vez que cualquiera emite.

🔹 **¿Cómo funciona?**
- NO emite hasta que TODOS los Observables hayan emitido al menos una vez
- Después, cada nueva emisión de cualquier stream genera una combinación
- Siempre usa el valor más reciente de cada stream

🔹 **¿Por qué es útil?** Ideal para formularios reactivos, configuraciones que dependen de múltiples inputs, dashboards en tiempo real.`,
        category: 'combination',
        code: `const source1 = interval(1000).pipe(
  map(x => \`A\${x}\`), 
  take(4)
);
const source2 = interval(1500).pipe(
  map(x => \`B\${x}\`), 
  take(3)
);

const combined = combineLatest([source1, source2]);
combined.subscribe(([a, b]) => console.log([a, b]));`,
        demo: () => this.demoCombineLatest()
      },
      {
        id: 'zip-operator',
        title: 'Operador Zip',
        description: 'Combina valores por posición, como una cremallera',
        explanation: `Zip es como una "cremallera": combina valores de múltiples Observables por posición, esperando a que todos tengan un valor en esa posición.

🔹 **¿Qué hace?** Toma el primer valor de cada Observable, los combina, luego el segundo de cada uno, etc.

🔹 **¿Cómo funciona?**
- Espera a que TODOS los Observables tengan un valor en la misma posición
- Combina esos valores en un array o usando una función
- Si un Observable se completa, zip se completa (no espera más valores)
- Es sincronizado por posición, no por tiempo

🔹 **¿Por qué es útil?** Perfecto para combinar arrays paralelos, procesar datos relacionados por índice, sincronizar secuencias.`,
        category: 'combination',
        code: `const letters = of('A', 'B', 'C', 'D');
const numbers = of(1, 2, 3);
const symbols = of('!', '@', '#');

const zipped = zip(letters, numbers, symbols);
zipped.subscribe(([letter, num, symbol]) => 
  console.log(\`\${letter}\${num}\${symbol}\`)
);
// Emite: A1!, B2@, C3# (se detiene porque numbers solo tiene 3)`,
        demo: () => this.demoZip()
      },
      {
        id: 'concat-operator',
        title: 'Operador Concat',
        description: 'Concatena Observables uno después del otro',
        explanation: `Concat es como una "fila ordenada": ejecuta Observables secuencialmente, esperando a que cada uno se complete antes del siguiente.

🔹 **¿Qué hace?** Suscribe al primer Observable, espera a que se complete, luego suscribe al segundo, y así sucesivamente.

🔹 **¿Cómo funciona?**
- Mantiene el orden estricto de los Observables
- NO hay paralelismo - todo es secuencial
- Si un Observable nunca se completa, los siguientes nunca se ejecutan
- Preserva el orden temporal dentro de cada Observable

🔹 **¿Por qué es útil?** Ideal para operaciones que deben ejecutarse en orden específico, workflows secuenciales, evitar condiciones de carrera.`,
        category: 'combination',
        code: `const first = of('Primero').pipe(delay(1000));
const second = of('Segundo').pipe(delay(500));
const third = of('Tercero').pipe(delay(200));

const sequential = concat(first, second, third);
sequential.subscribe(value => console.log(value));
// Emite: "Primero" (después de 1s), "Segundo" (después de 0.5s más), "Tercero" (después de 0.2s más)`,
        demo: () => this.demoConcat()
      },
      {
        id: 'race-operator',
        title: 'Operador Race',
        description: 'El primer Observable que emite gana la carrera',
        explanation: `Race es como una "carrera": múltiples Observables compiten, y el primero que emite un valor gana y cancela a los demás.

🔹 **¿Qué hace?** Suscribe a múltiples Observables simultáneamente, pero solo el primero que emite continúa, los demás se cancelan.

🔹 **¿Cómo funciona?**
- Todos los Observables empiezan al mismo tiempo
- El primer valor emitido por cualquiera "gana"
- Los demás Observables se desuscriben automáticamente
- Solo un Observable puede "ganar" la carrera

🔹 **¿Por qué es útil?** Perfecto para timeouts, múltiples fuentes de datos (usar la más rápida), fallbacks, optimización de rendimiento.`,
        category: 'combination',
        code: `const slow = timer(3000).pipe(mapTo('Lento'));
const fast = timer(1000).pipe(mapTo('Rápido'));
const medium = timer(2000).pipe(mapTo('Medio'));

const winner = race(slow, fast, medium);
winner.subscribe(result => console.log('Ganador:', result));
// Emite: "Ganador: Rápido" (después de 1s, cancela los otros)`,
        demo: () => this.demoRace()
      },
      {
        id: 'forkjoin-operator',
        title: 'Operador ForkJoin',
        description: 'Espera a que todos se completen y combina los últimos valores',
        explanation: `ForkJoin es como "esperar a que todo el equipo termine": ejecuta múltiples Observables en paralelo y emite solo cuando TODOS se han completado.

🔹 **¿Qué hace?** Ejecuta múltiples Observables en paralelo y emite un array con el último valor de cada uno cuando todos se completan.

🔹 **¿Cómo funciona?**
- Todos los Observables se ejecutan simultáneamente
- NO emite nada hasta que TODOS se completen
- Solo emite una vez con los valores finales
- Es como Promise.all() pero para Observables

🔹 **¿Por qué es útil?** Perfecto para múltiples llamadas HTTP paralelas, esperar múltiples operaciones asíncronas, obtener resultados finales.`,
        category: 'combination',
        code: `const user = timer(1000).pipe(mapTo({name: 'Ana', id: 1}));
const posts = timer(1500).pipe(mapTo(['Post 1', 'Post 2']));
const comments = timer(800).pipe(mapTo(['Comentario 1']));

const allData = forkJoin({
  user: user,
  posts: posts,
  comments: comments
});

allData.subscribe(result => console.log('Todo listo:', result));
// Emite después de 1.5s: {user: {...}, posts: [...], comments: [...]}`,
        demo: () => this.demoForkJoin()
      },
      {
        id: 'withlatestfrom-operator',
        title: 'Operador WithLatestFrom',
        description: 'Combina con los últimos valores de otros Observables',
        explanation: `WithLatestFrom es como "tomar una foto con acompañantes": cuando el Observable principal emite, toma los últimos valores de los otros Observables.

🔹 **¿Qué hace?** Cuando el Observable fuente emite, combina ese valor con los últimos valores de otros Observables especificados.

🔹 **¿Cómo funciona?**
- Solo emite cuando el Observable PRINCIPAL emite
- Los otros Observables son "pasivos" - solo proporcionan contexto
- Usa siempre el último valor disponible de cada Observable acompañante
- Si un Observable acompañante nunca ha emitido, no se emite nada

🔹 **¿Por qué es útil?** Ideal para agregar contexto a eventos, combinar estado actual con acciones, enriquecer datos con información adicional.`,
        category: 'combination',
        code: `const clicks = fromEvent(button, 'click');
const currentUser = of('Ana').pipe(delay(500));
const currentTime = interval(1000).pipe(map(() => new Date()));

const enrichedClicks = clicks.pipe(
  withLatestFrom(currentUser, currentTime)
);

enrichedClicks.subscribe(([click, user, time]) => 
  console.log(\`\${user} hizo clic a las \${time}\`)
);`,
        demo: () => this.demoWithLatestFrom()
      },
      {
        id: 'startwith-pairwise-operator',
        title: 'StartWith y Pairwise',
        description: 'Agregar valores iniciales y comparar valores consecutivos',
        explanation: `StartWith y Pairwise son operadores que trabajan con secuencias y valores consecutivos.

🔹 **StartWith**: Agrega valores al inicio del Observable
- Como "poner una introducción"
- Los valores iniciales se emiten primero
- Útil para valores por defecto o estados iniciales

🔹 **Pairwise**: Emite el valor anterior y actual como un par
- Como "recordar el valor anterior"
- Permite comparar cambios consecutivos
- Útil para detectar diferencias o calcular deltas

🔹 **¿Por qué son útiles?** StartWith para inicialización, Pairwise para análisis de cambios, detección de tendencias, validaciones comparativas.`,
        category: 'combination',
        code: `const numbers = of(10, 20, 30, 40);

const withStart = numbers.pipe(
  startWith(0, 5)
);

const pairs = numbers.pipe(
  startWith(0),
  pairwise()
);

withStart.subscribe(x => console.log('Con start:', x));
pairs.subscribe(([prev, curr]) => console.log(\`\${prev} → \${curr}\`));`,
        demo: () => this.demoStartWithPairwise()
      },
      {
        id: 'scan-operator',
        title: 'Operador Scan',
        description: 'Acumula valores como reduce pero emite cada resultado intermedio',
        explanation: `Scan es como llevar una cuenta corriente: va sumando y te muestra el balance después de cada operación.

🔹 **¿Qué hace?** Acumula valores usando una función, pero emite cada resultado parcial (no solo el final).

🔹 **¿Cómo funciona?**
- Empieza con 0 (valor inicial)
- Recibe 1 → suma: 0+1=1 → emite 1
- Recibe 2 → suma: 1+2=3 → emite 3
- Recibe 3 → suma: 3+3=6 → emite 6, etc.

🔹 **¿Por qué es útil?** Perfecto para contadores en tiempo real, carritos de compra, estadísticas acumulativas, progress bars.`,
        category: 'utility',
        code: `const source = from([1, 2, 3, 4, 5]).pipe(
  concatMap(x => timer(500).pipe(map(() => x)))
);
const accumulated = source.pipe(
  scan((acc, value) => acc + value, 0)
);

accumulated.subscribe(value => console.log(value));`,
        demo: () => this.demoScan()
      },
      {
        id: 'tap-operator',
        title: 'Operador Tap',
        description: 'Ejecuta efectos secundarios sin modificar el stream',
        explanation: `Tap es como un "espía silencioso": observa los valores que pasan pero no los modifica ni interfiere con el flujo.

🔹 **¿Qué hace?** Permite ejecutar código (efectos secundarios) para cada valor sin alterar el Observable.

🔹 **¿Cómo funciona?**
- Recibe cada valor del stream
- Ejecuta la función que le proporciones (logging, debugging, etc.)
- Pasa el valor original sin modificaciones
- No afecta el flujo normal del Observable

🔹 **¿Por qué es útil?** Esencial para debugging, logging, analytics, efectos secundarios que no deben modificar los datos.`,
        category: 'utility',
        code: `const numbers = of(1, 2, 3, 4, 5);

const withLogging = numbers.pipe(
  tap(x => console.log('Procesando:', x)),
  map(x => x * 2),
  tap(x => console.log('Resultado:', x))
);

withLogging.subscribe(result => console.log('Final:', result));`,
        demo: () => this.demoTap()
      },
      {
        id: 'catcherror-retry-operator',
        title: 'CatchError y Retry',
        description: 'Manejo de errores y reintentos automáticos',
        explanation: `CatchError y Retry son como un "sistema de respaldo y recuperación": manejan errores elegantemente.

🔹 **CatchError**: Captura errores y permite recuperación
- Como "tener un plan B"
- Puede devolver un valor por defecto o un Observable alternativo
- Evita que el error rompa toda la cadena

🔹 **Retry**: Reintenta automáticamente cuando hay errores
- Como "intentar de nuevo"
- Configurable: número de reintentos, delays, condiciones
- Útil para operaciones que pueden fallar temporalmente

🔹 **¿Por qué son útiles?** Esenciales para aplicaciones robustas, APIs inestables, recuperación automática, UX sin interrupciones.`,
        category: 'utility',
        code: `const unstableAPI = throwError('Error de red').pipe(
  retry(3), // Reintenta 3 veces
  catchError(err => {
    console.log('Error capturado:', err);
    return of('Valor por defecto'); // Plan B
  })
);

unstableAPI.subscribe(result => console.log('Resultado:', result));`,
        demo: () => this.demoCatchErrorRetry()
      },
      {
        id: 'finalize-operator',
        title: 'Operador Finalize',
        description: 'Ejecuta código de limpieza al completarse o cancelarse',
        explanation: `Finalize es como "cerrar la puerta al salir": garantiza que cierto código se ejecute sin importar cómo termine el Observable.

🔹 **¿Qué hace?** Ejecuta una función cuando el Observable se completa, tiene error, o se desuscribe.

🔹 **¿Cómo funciona?**
- Se ejecuta SIEMPRE, sin importar cómo termine el Observable
- Útil para cleanup, cerrar conexiones, liberar recursos
- Es como el "finally" de los try-catch pero para Observables
- No modifica los valores del stream

🔹 **¿Por qué es útil?** Esencial para evitar memory leaks, cerrar conexiones, cleanup de recursos, logging de finalización.`,
        category: 'utility',
        code: `const dataStream = interval(500).pipe(
  take(3),
  finalize(() => console.log('Stream finalizado - limpieza realizada'))
);

dataStream.subscribe({
  next: x => console.log('Valor:', x),
  complete: () => console.log('Completado')
});`,
        demo: () => this.demoFinalize()
      },
      {
        id: 'timeout-operator',
        title: 'Operador Timeout',
        description: 'Establece un límite de tiempo para las emisiones',
        explanation: `Timeout es como un "cronómetro de paciencia": si el Observable no emite dentro del tiempo límite, actúa.

🔹 **¿Qué hace?** Establece un tiempo máximo de espera entre emisiones o para la primera emisión.

🔹 **¿Cómo funciona?**
- Si no hay emisión dentro del tiempo límite, emite un error
- Puede configurarse para usar un Observable alternativo en lugar de error
- Reinicia el cronómetro con cada nueva emisión
- Útil para detectar "colgadas" o respuestas lentas

🔹 **¿Por qué es útil?** Esencial para UX responsiva, detectar problemas de red, evitar esperas infinitas, timeouts de API.`,
        category: 'utility',
        code: `const slowAPI = timer(3000).pipe(mapTo('Respuesta lenta'));

const withTimeout = slowAPI.pipe(
  timeout(2000), // Máximo 2 segundos
  catchError(err => of('Timeout - usando cache'))
);

withTimeout.subscribe(result => console.log(result));`,
        demo: () => this.demoTimeout()
      },
      {
        id: 'defaultifempty-operator',
        title: 'Operador DefaultIfEmpty',
        description: 'Proporciona un valor por defecto si el Observable está vacío',
        explanation: `DefaultIfEmpty es como "tener un plan de respaldo": si el Observable se completa sin emitir nada, proporciona un valor por defecto.

🔹 **¿Qué hace?** Emite un valor especificado si el Observable se completa sin haber emitido ningún valor.

🔹 **¿Cómo funciona?**
- Si el Observable emite valores normalmente, no hace nada
- Si el Observable se completa sin emitir, emite el valor por defecto
- Solo actúa cuando hay completación sin emisiones
- No afecta Observables que sí emiten valores

🔹 **¿Por qué es útil?** Perfecto para evitar resultados vacíos, valores por defecto en búsquedas, fallbacks cuando no hay datos.`,
        category: 'utility',
        code: `const emptySearch = EMPTY;
const searchWithDefault = emptySearch.pipe(
  defaultIfEmpty('No se encontraron resultados')
);

searchWithDefault.subscribe(result => console.log(result));
// Emite: "No se encontraron resultados"`,
        demo: () => this.demoDefaultIfEmpty()
      },
      {
        id: 'validation-operators',
        title: 'Operadores de Validación (Every, Find)',
        description: 'Validar condiciones y buscar elementos específicos',
        explanation: `Every y Find son como "inspectores de calidad": validan condiciones y buscan elementos específicos en el stream.

🔹 **Every**: Verifica si TODOS los valores cumplen una condición
- Como "¿todos aprobaron el examen?"
- Emite true solo si todos los valores pasan la prueba
- Emite false tan pronto como encuentra uno que no cumple

🔹 **Find**: Busca el PRIMER valor que cumple una condición
- Como "encontrar la primera coincidencia"
- Se completa tan pronto como encuentra el elemento
- Útil para búsquedas específicas

🔹 **¿Por qué son útiles?** Esenciales para validaciones, búsquedas, control de calidad, verificaciones de datos.`,
        category: 'utility',
        code: `const numbers = of(2, 4, 6, 8, 10);

const allEven = numbers.pipe(
  every(x => x % 2 === 0)
);

const firstBig = numbers.pipe(
  find(x => x > 5)
);

allEven.subscribe(result => console.log('Todos pares:', result));
firstBig.subscribe(result => console.log('Primero > 5:', result));`,
        demo: () => this.demoValidationOperators()
      },
      {
        id: 'isempty-operator',
        title: 'Operador IsEmpty',
        description: 'Verifica si el Observable está vacío',
        explanation: `IsEmpty es como un "detector de vacío": verifica si un Observable se completa sin emitir ningún valor.

🔹 **¿Qué hace?** Emite true si el Observable se completa sin emitir valores, false si emite al menos uno.

🔹 **¿Cómo funciona?**
- Observa todo el ciclo de vida del Observable
- Si se completa sin emisiones → emite true
- Si emite al menos un valor → emite false y se completa
- Solo emite un valor booleano al final

🔹 **¿Por qué es útil?** Perfecto para validar si hay datos, verificar resultados de búsquedas, condicionales basadas en contenido.`,
        category: 'utility',
        code: `const emptyStream = EMPTY;
const nonEmptyStream = of(1, 2, 3);

const checkEmpty = emptyStream.pipe(isEmpty());
const checkNonEmpty = nonEmptyStream.pipe(isEmpty());

checkEmpty.subscribe(result => console.log('Vacío:', result)); // true
checkNonEmpty.subscribe(result => console.log('Vacío:', result)); // false`,
        demo: () => this.demoIsEmpty()
      }
    ];
  }

  private setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const category = target.dataset.category;
        if (category) {
          this.showCategory(category);
          this.updateActiveNav(target);
        }
      });
    });
  }

  private setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => {
        this.toggleTheme();
      });
    }
  }

  private initializeTheme() {
    // Verificar si hay una preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      this.setDarkMode(true);
    } else {
      this.setDarkMode(false);
    }
  }

  private toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    this.setDarkMode(!isDark);
  }

  private setDarkMode(isDark: boolean) {
    const html = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      
      // Actualizar icono a sol (para cambiar a modo claro)
      if (themeToggle) {
        themeToggle.innerHTML = `
          <svg class="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
          </svg>
        `;
      }
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      
      // Actualizar icono a luna (para cambiar a modo oscuro)
      if (themeToggle) {
        themeToggle.innerHTML = `
          <svg class="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
          </svg>
        `;
      }
    }
  }

  private updateActiveNav(activeItem: HTMLElement) {
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    activeItem.classList.add('active');
  }

  private showCategory(category: string) {
    this.cleanup();
    this.currentCategory = category;
    
    const container = document.getElementById('examples-container');
    if (!container) return;

    const categoryExamples = this.examples.filter(ex => ex.category === category);
    
    container.innerHTML = categoryExamples.map((example, index) => `
      <div class="example-card fade-in" style="animation-delay: ${index * 0.1}s">
        <!-- Header del ejemplo -->
        <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
          <div class="flex-1 mb-4 lg:mb-0">
            <div class="flex items-center mb-3">
              <div class="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
              <h3 class="text-2xl font-bold text-gray-900">${example.title}</h3>
            </div>
            <p class="text-gray-600 text-lg mb-4">${example.description}</p>
            
            <!-- Botón de explicación mejorado -->
            <button 
              class="explanation-button group"
              onclick="app.toggleExplanation('${example.id}')"
            >
              <svg class="w-4 h-4 mr-2 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span id="explanation-toggle-${example.id}">Ver explicación detallada</span>
            </button>
            
            <!-- Panel de explicación mejorado -->
            <div id="explanation-${example.id}" class="hidden mt-4 explanation-panel slide-up">
              <div class="flex items-start">
                <div class="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                </div>
                <div class="text-sm text-gray-700 whitespace-pre-line leading-relaxed">${example.explanation}</div>
              </div>
            </div>
          </div>
          
          <!-- Botón ejecutar mejorado -->
          <div class="flex flex-col items-end space-y-3">
            <button 
              class="control-button group flex items-center" 
              onclick="app.runExample('${example.id}')"
            >
              <svg class="w-5 h-5 mr-2 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m14 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m14 0H3"></path>
              </svg>
              Ejecutar Demo
            </button>
            <div class="status-badge info">
              <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              Interactivo
            </div>
          </div>
        </div>
        
        <!-- Contenido principal -->
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <!-- Sección de código -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-lg font-semibold text-gray-800 flex items-center">
                <svg class="w-5 h-5 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
                Código TypeScript
              </h4>
              <button class="text-xs text-gray-500 hover:text-gray-700 flex items-center" onclick="navigator.clipboard.writeText(\`${example.code.replace(/`/g, '\\`')}\`)">
                <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                </svg>
                Copiar
              </button>
            </div>
            <pre class="code-snippet custom-scrollbar">${example.code}</pre>
          </div>
          
          <!-- Sección de visualización -->
          <div class="space-y-4">
            <h4 class="text-lg font-semibold text-gray-800 flex items-center">
              <svg class="w-5 h-5 mr-2 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              Visualización en Vivo
            </h4>
            <div id="demo-${example.id}" class="stream-visualization">
              <div class="flex flex-col items-center justify-center py-8 text-gray-500">
                <div class="w-16 h-16 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center mb-4">
                  <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H5a2 2 0 00-2 2v3m14 0v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6m14 0H3"></path>
                  </svg>
                </div>
                <p class="text-center font-medium">Haz clic en "Ejecutar Demo" para ver la magia</p>
                <p class="text-sm text-gray-400 mt-1">Los valores aparecerán aquí en tiempo real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  runExample(exampleId: string) {
    const example = this.examples.find(ex => ex.id === exampleId);
    if (example) {
      this.cleanup();
      example.demo();
    }
  }

  toggleExplanation(exampleId: string) {
    const explanationDiv = document.getElementById(`explanation-${exampleId}`);
    const toggleSpan = document.getElementById(`explanation-toggle-${exampleId}`);
    
    if (explanationDiv && toggleSpan) {
      const isHidden = explanationDiv.classList.contains('hidden');
      
      if (isHidden) {
        explanationDiv.classList.remove('hidden');
        explanationDiv.classList.add('slide-up');
        toggleSpan.textContent = 'Ocultar explicación';
        
        // Scroll suave hacia la explicación
        setTimeout(() => {
          explanationDiv.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'nearest' 
          });
        }, 100);
      } else {
        explanationDiv.classList.add('hidden');
        explanationDiv.classList.remove('slide-up');
        toggleSpan.textContent = 'Ver explicación detallada';
      }
    }
  }

  private cleanup() {
    this.currentSubscriptions.forEach(sub => {
      if (sub && typeof sub.unsubscribe === 'function') {
        sub.unsubscribe();
      }
    });
    this.currentSubscriptions = [];
  }

  private updateDemo(exampleId: string, content: string) {
    const demoElement = document.getElementById(`demo-${exampleId}`);
    if (demoElement) {
      demoElement.innerHTML = content;
      demoElement.classList.add('fade-in');
      
      // Mejorar inputs si los hay
      const inputs = demoElement.querySelectorAll('input');
      inputs.forEach(input => {
        input.classList.add('modern-input');
      });
      
      // Mejorar botones si los hay
      const buttons = demoElement.querySelectorAll('button:not(.control-button)');
      buttons.forEach(button => {
        if (!button.classList.contains('control-button')) {
          button.classList.add('control-button');
        }
      });
    }
  }

  private addStreamItem(exampleId: string, value: any, isError = false) {
    const demoElement = document.getElementById(`demo-${exampleId}`);
    if (demoElement) {
      // Limpiar el contenido inicial si existe (usando un selector más específico)
      const initialContent = demoElement.querySelector('.flex.flex-col.items-center.justify-center');
      if (initialContent) {
        initialContent.remove();
      }
      
      // Si no hay un contenedor de salida, crearlo
      let outputContainer = demoElement.querySelector('.output-display');
      if (!outputContainer) {
        outputContainer = document.createElement('div');
        outputContainer.className = 'output-display';
        outputContainer.innerHTML = '<div class="font-medium text-sm text-gray-700 mb-3">Salida:</div>';
        demoElement.appendChild(outputContainer);
      }
      
      const item = document.createElement('span');
      item.className = isError ? 'stream-item bg-red-500' : 'stream-item';
      item.textContent = String(value);
      
      // Agregar efecto de entrada
      item.style.opacity = '0';
      item.style.transform = 'translateY(10px) scale(0.9)';
      
      outputContainer.appendChild(item);
      
      // Animar entrada
      requestAnimationFrame(() => {
        item.style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0) scale(1)';
      });
      
      // Auto-scroll si hay muchos elementos
      setTimeout(() => {
        if (outputContainer.children.length > 10) {
          outputContainer.scrollTop = outputContainer.scrollHeight;
        }
      }, 100);
    }
  }

  private demoObservableBasic() {
    this.updateDemo('observable-basic', '<div class="output-display">Salida: </div>');
    
    const observable = new Observable(subscriber => {
      subscriber.next('Hola');
      setTimeout(() => subscriber.next('Mundo'), 1000);
      setTimeout(() => subscriber.complete(), 2000);
    });

    const subscription = observable.subscribe({
      next: value => this.addStreamItem('observable-basic', value),
      complete: () => this.addStreamItem('observable-basic', '✓ Completado')
    });

    this.currentSubscriptions.push(subscription);
  }

  private demoSubject() {
    this.updateDemo('subject-basic', '<div class="output-display">Múltiples suscriptores: </div>');
    
    const subject = new Subject();
    
    const sub1 = subject.subscribe(value => 
      this.addStreamItem('subject-basic', `Sub1: ${value}`)
    );
    const sub2 = subject.subscribe(value => 
      this.addStreamItem('subject-basic', `Sub2: ${value}`)
    );

    setTimeout(() => subject.next('Mensaje 1'), 500);
    setTimeout(() => subject.next('Mensaje 2'), 1500);
    setTimeout(() => subject.complete(), 2500);

    this.currentSubscriptions.push(sub1, sub2);
  }

  private demoInterval() {
    this.updateDemo('interval-observable', '<div class="output-display">Contador: </div>');
    
    const source = interval(800);
    const subscription = source.pipe(take(5)).subscribe(
      value => this.addStreamItem('interval-observable', value)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoMap() {
    this.updateDemo('map-operator', '<div class="output-display">Números duplicados: </div>');
    
    const source = interval(300).pipe(
      map(x => x + 1),
      take(5)
    );
    const doubled = source.pipe(map(x => x * 2));
    
    const subscription = doubled.subscribe(value => {
      this.addStreamItem('map-operator', value);
    });

    this.currentSubscriptions.push(subscription);
  }

  private demoFilter() {
    this.updateDemo('filter-operator', '<div class="output-display">Solo números pares: </div>');
    
    const source = from([1, 2, 3, 4, 5, 6]).pipe(
      concatMap(x => timer(400).pipe(map(() => x)))
    );
    const evenNumbers = source.pipe(filter(x => x % 2 === 0));
    
    const subscription = evenNumbers.subscribe(value => {
      this.addStreamItem('filter-operator', value);
    });

    this.currentSubscriptions.push(subscription);
  }

  private demoDebounce() {
    this.updateDemo('debounce-operator', `
      <div class="mb-4">
        <input type="text" id="search-input" placeholder="Escribe aquí..." 
               class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
      </div>
      <div class="output-display">Búsqueda con debounce (300ms): </div>
    `);
    
    const searchInput = document.getElementById('search-input') as HTMLInputElement;
    if (searchInput) {
      const searchStream = fromEvent(searchInput, 'input').pipe(
        map((event: any) => event.target.value),
        debounceTime(300),
        distinctUntilChanged()
      );

      const subscription = searchStream.subscribe(value => 
        this.addStreamItem('debounce-operator', value || '(vacío)')
      );

      this.currentSubscriptions.push(subscription);
    }
  }

  private demoMerge() {
    this.updateDemo('merge-operator', '<div class="output-display">Streams combinados: </div>');
    
    const source1 = interval(1000).pipe(map(x => `A${x}`), take(3));
    const source2 = interval(1500).pipe(map(x => `B${x}`), take(3));

    const merged = merge(source1, source2);
    const subscription = merged.subscribe(value => 
      this.addStreamItem('merge-operator', value)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoSwitchMap() {
    this.updateDemo('switchmap-operator', `
      <div class="mb-4">
        <button id="switch-button" class="control-button">Hacer clic para cambiar</button>
      </div>
      <div class="output-display">Contador que se reinicia con cada clic: </div>
    `);
    
    const button = document.getElementById('switch-button');
    if (button) {
      const clicks = fromEvent(button, 'click');
      const result = clicks.pipe(
        switchMap(() => interval(500).pipe(take(5)))
      );

      const subscription = result.subscribe(value => 
        this.addStreamItem('switchmap-operator', value)
      );

      this.currentSubscriptions.push(subscription);
    }
  }

  private demoCombineLatest() {
    this.updateDemo('combinelatest-operator', '<div class="output-display">Últimos valores combinados: </div>');
    
    const source1 = interval(1000).pipe(map(x => `A${x}`), take(4));
    const source2 = interval(1500).pipe(map(x => `B${x}`), take(3));

    const combined = combineLatest([source1, source2]);
    const subscription = combined.subscribe(([a, b]) => 
      this.addStreamItem('combinelatest-operator', `[${a}, ${b}]`)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoScan() {
    this.updateDemo('scan-operator', '<div class="output-display">Suma acumulativa: </div>');
    
    const source = from([1, 2, 3, 4, 5]).pipe(
      concatMap(x => timer(500).pipe(map(() => x)))
    );
    const accumulated = source.pipe(scan((acc, value) => acc + value, 0));
    
    const subscription = accumulated.subscribe(value => {
      this.addStreamItem('scan-operator', value);
    });

    this.currentSubscriptions.push(subscription);
  }

  private demoMapTo() {
    this.updateDemo('mapTo-operator', `
      <div class="mb-4">
        <button id="mapTo-button" class="control-button">Hacer clic aquí</button>
      </div>
      <div class="output-display">Todos los clicks se convierten en: </div>
    `);
    
    const button = document.getElementById('mapTo-button');
    if (button) {
      const clicks = fromEvent(button, 'click');
      const clickSignal = clicks.pipe(mapTo('¡Click detectado!'));

      const subscription = clickSignal.subscribe(value => 
        this.addStreamItem('mapTo-operator', value)
      );

      this.currentSubscriptions.push(subscription);
    }
  }

  private demoPluck() {
    this.updateDemo('pluck-operator', '<div class="output-display">Nombres extraídos: </div>');
    
    const users = from([
      { id: 1, name: 'Ana', age: 25 },
      { id: 2, name: 'Luis', age: 30 },
      { id: 3, name: 'María', age: 28 }
    ]).pipe(
      concatMap(user => timer(800).pipe(map(() => user)))
    );

    const names = users.pipe(pluck('name'));
    
    const subscription = names.subscribe(name => 
      this.addStreamItem('pluck-operator', name)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoConcatMap() {
    this.updateDemo('concatMap-operator', '<div class="output-display">Procesamiento secuencial: </div>');
    
    const numbers = from([1, 2, 3]);
    const delayed = numbers.pipe(
      concatMap(x => 
        timer(1000).pipe(map(() => x * 10))
      )
    );

    const subscription = delayed.subscribe(value => 
      this.addStreamItem('concatMap-operator', value)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoMergeMap() {
    this.updateDemo('mergeMap-operator', '<div class="output-display">Procesamiento paralelo: </div>');
    
    const numbers = from([1, 2, 3]);
    const parallel = numbers.pipe(
      mergeMap(x => 
        timer(Math.random() * 2000).pipe(map(() => x * 10))
      )
    );

    const subscription = parallel.subscribe(value => 
      this.addStreamItem('mergeMap-operator', value)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoBehaviorSubject() {
    this.updateDemo('behaviorsubject-basic', '<div class="output-display">Comportamiento de BehaviorSubject: </div>');
    
    const currentUser = new BehaviorSubject('Invitado');

    // Primer suscriptor
    const sub1 = currentUser.subscribe(user => 
      this.addStreamItem('behaviorsubject-basic', `Sub1: ${user}`)
    );

    setTimeout(() => currentUser.next('Ana'), 1000);
    setTimeout(() => currentUser.next('Luis'), 2000);
    
    // Segundo suscriptor tardío
    setTimeout(() => {
      const sub2 = currentUser.subscribe(user => 
        this.addStreamItem('behaviorsubject-basic', `Sub2: ${user}`)
      );
      this.currentSubscriptions.push(sub2);
    }, 2500);

    this.currentSubscriptions.push(sub1);
  }

  private demoReplaySubject() {
    this.updateDemo('replaysubject-basic', '<div class="output-display">Historial de ReplaySubject: </div>');
    
    const history = new ReplaySubject(3);

    setTimeout(() => history.next('Acción 1'), 500);
    setTimeout(() => history.next('Acción 2'), 1000);
    setTimeout(() => history.next('Acción 3'), 1500);
    setTimeout(() => history.next('Acción 4'), 2000);
    
    // Suscriptor tardío que recibe las últimas 3
    setTimeout(() => {
      const subscription = history.subscribe(action => 
        this.addStreamItem('replaysubject-basic', `Historial: ${action}`)
      );
      this.currentSubscriptions.push(subscription);
    }, 2500);
  }

  private demoAsyncSubject() {
    this.updateDemo('asyncsubject-basic', '<div class="output-display">AsyncSubject esperando... </div>');
    
    const finalResult = new AsyncSubject();

    const subscription = finalResult.subscribe(value => 
      this.addStreamItem('asyncsubject-basic', `Resultado: ${value}`)
    );

    setTimeout(() => finalResult.next('Procesando...'), 500);
    setTimeout(() => finalResult.next('Casi listo...'), 1500);
    setTimeout(() => finalResult.next('¡Completado!'), 2500);
    setTimeout(() => finalResult.complete(), 3000);

    this.currentSubscriptions.push(subscription);
  }

  private demoOf() {
    this.updateDemo('of-observable', '<div class="output-display">Frutas emitidas: </div>');
    
    const fruits = of('🍎', '🍌', '🍊', '🍇');
    
    let index = 0;
    const subscription = fruits.subscribe({
      next: fruit => {
        setTimeout(() => this.addStreamItem('of-observable', fruit), index * 500);
        index++;
      },
      complete: () => {
        setTimeout(() => this.addStreamItem('of-observable', '✓ Completado'), index * 500);
      }
    });

    this.currentSubscriptions.push(subscription);
  }

  private demoFrom() {
    this.updateDemo('from-observable', '<div class="output-display">Conversiones de From: </div>');
    
    // Array
    const numbers = from([10, 20, 30]);
    let delay = 0;
    
    const sub1 = numbers.subscribe(num => {
      setTimeout(() => this.addStreamItem('from-observable', `Array: ${num}`), delay);
      delay += 500;
    });

    // Promesa
    setTimeout(() => {
      const promise = from(Promise.resolve('¡Éxito!'));
      const sub2 = promise.subscribe(result => 
        this.addStreamItem('from-observable', `Promesa: ${result}`)
      );
      this.currentSubscriptions.push(sub2);
    }, 2000);

    // String
    setTimeout(() => {
      const text = from('HOLA');
      let charDelay = 0;
      const sub3 = text.subscribe(char => {
        setTimeout(() => this.addStreamItem('from-observable', `Char: ${char}`), charDelay);
        charDelay += 300;
      });
      this.currentSubscriptions.push(sub3);
    }, 3000);

    this.currentSubscriptions.push(sub1);
  }

  private demoRange() {
    this.updateDemo('range-observable', '<div class="output-display">Secuencia generada: </div>');
    
    const sequence = range(1, 5);
    
    let index = 0;
    const subscription = sequence.subscribe({
      next: num => {
        setTimeout(() => this.addStreamItem('range-observable', num), index * 400);
        index++;
      },
      complete: () => {
        setTimeout(() => this.addStreamItem('range-observable', '✓ Completado'), index * 400);
      }
    });

    this.currentSubscriptions.push(subscription);
  }

  private demoTimer() {
    this.updateDemo('timer-observable', '<div class="output-display">Temporizadores: </div>');
    
    // Timer único
    const singleTimer = timer(2000);
    const sub1 = singleTimer.subscribe(() => 
      this.addStreamItem('timer-observable', '⏰ Timer único')
    );

    // Timer periódico
    const periodicTimer = timer(1000, 1000).pipe(take(3));
    const sub2 = periodicTimer.subscribe(x => 
      this.addStreamItem('timer-observable', `🔄 Tick: ${x}`)
    );

    this.currentSubscriptions.push(sub1, sub2);
  }

  private demoSpecialObservables() {
    this.updateDemo('empty-never-error', '<div class="output-display">Observables especiales: </div>');
    
    // EMPTY
    const sub1 = EMPTY.subscribe({
      next: () => this.addStreamItem('empty-never-error', 'EMPTY next (nunca)'),
      complete: () => this.addStreamItem('empty-never-error', '✓ EMPTY completado')
    });

    // throwError
    setTimeout(() => {
      const sub2 = throwError('¡Error simulado!').subscribe({
        next: () => this.addStreamItem('empty-never-error', 'Error next (nunca)'),
        error: err => this.addStreamItem('empty-never-error', `❌ Error: ${err}`, true)
      });
      this.currentSubscriptions.push(sub2);
    }, 1000);

    this.currentSubscriptions.push(sub1);
  }

  private demoThrottle() {
    this.updateDemo('throttle-operator', `
      <div class="mb-4">
        <button id="throttle-button" class="control-button">Haz clic rápido (throttle 1s)</button>
      </div>
      <div class="output-display">Clicks válidos (máximo 1 por segundo): </div>
    `);
    
    const button = document.getElementById('throttle-button');
    if (button) {
      const clicks = fromEvent(button, 'click');
      const throttledClicks = clicks.pipe(throttleTime(1000));

      const subscription = throttledClicks.subscribe(() => 
        this.addStreamItem('throttle-operator', `✓ Click válido (${new Date().getSeconds()}s)`)
      );

      this.currentSubscriptions.push(subscription);
    }
  }

  private demoDistinct() {
    this.updateDemo('distinct-operator', '<div class="output-display">Valores únicos: </div>');
    
    const values = from([1, 2, 2, 3, 1, 4, 3, 5, 2, 1]).pipe(
      concatMap(x => timer(600).pipe(map(() => x)))
    );
    const uniqueValues = values.pipe(distinct());
    
    const subscription = uniqueValues.subscribe(value => 
      this.addStreamItem('distinct-operator', `Único: ${value}`)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoFirstLast() {
    this.updateDemo('first-last-operator', '<div class="output-display">Primer y último valor: </div>');
    
    const numbers = from([1, 2, 3, 4, 5]).pipe(
      concatMap(x => timer(500).pipe(map(() => x)))
    );

    const firstNumber = numbers.pipe(first());
    const lastNumber = numbers.pipe(last());

    const sub1 = firstNumber.subscribe(x => 
      this.addStreamItem('first-last-operator', `🥇 Primero: ${x}`)
    );

    const sub2 = lastNumber.subscribe(x => 
      this.addStreamItem('first-last-operator', `🏁 Último: ${x}`)
    );

    this.currentSubscriptions.push(sub1, sub2);
  }

  private demoTakeSkipWhile() {
    this.updateDemo('take-skip-while-operator', '<div class="output-display">TakeWhile vs SkipWhile: </div>');
    
    const numbers = from([1, 2, 3, 4, 5, 6, 7, 8]).pipe(
      concatMap(x => timer(400).pipe(map(() => x)))
    );

    const takeWhileSmall = numbers.pipe(takeWhile(x => x < 5));
    const skipWhileSmall = numbers.pipe(skipWhile(x => x < 5));

    const sub1 = takeWhileSmall.subscribe(x => 
      this.addStreamItem('take-skip-while-operator', `📥 Take: ${x}`)
    );

    const sub2 = skipWhileSmall.subscribe(x => 
      this.addStreamItem('take-skip-while-operator', `⏭️ Skip: ${x}`)
    );

    this.currentSubscriptions.push(sub1, sub2);
  }

  private demoTakeSkipUntil() {
    this.updateDemo('take-skip-until-operator', '<div class="output-display">TakeUntil vs SkipUntil: </div>');
    
    const source = interval(500);
    const stopSignal = timer(3000);
    const startSignal = timer(1500);

    const takeUntilStop = source.pipe(takeUntil(stopSignal));
    const skipUntilStart = source.pipe(skipUntil(startSignal), take(4));

    const sub1 = takeUntilStop.subscribe(x => 
      this.addStreamItem('take-skip-until-operator', `🛑 Until stop: ${x}`)
    );

    const sub2 = skipUntilStart.subscribe(x => 
      this.addStreamItem('take-skip-until-operator', `🚀 Until start: ${x}`)
    );

    this.currentSubscriptions.push(sub1, sub2);
  }

  private demoZip() {
    this.updateDemo('zip-operator', '<div class="output-display">Valores combinados por posición: </div>');
    
    const letters = from(['A', 'B', 'C', 'D']).pipe(
      concatMap(x => timer(500).pipe(map(() => x)))
    );
    const numbers = from([1, 2, 3]).pipe(
      concatMap(x => timer(700).pipe(map(() => x)))
    );
    const symbols = from(['!', '@', '#']).pipe(
      concatMap(x => timer(300).pipe(map(() => x)))
    );

    const zipped = zip(letters, numbers, symbols);
    const subscription = zipped.subscribe(([letter, num, symbol]) => 
      this.addStreamItem('zip-operator', `${letter}${num}${symbol}`)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoConcat() {
    this.updateDemo('concat-operator', '<div class="output-display">Secuencia ordenada: </div>');
    
    const first = of('🥇 Primero').pipe(delay(1000));
    const second = of('🥈 Segundo').pipe(delay(500));
    const third = of('🥉 Tercero').pipe(delay(200));

    const sequential = concat(first, second, third);
    const subscription = sequential.subscribe(value => 
      this.addStreamItem('concat-operator', value)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoRace() {
    this.updateDemo('race-operator', '<div class="output-display">¡Carrera en progreso! </div>');
    
    const slow = timer(3000).pipe(mapTo('🐢 Lento'));
    const fast = timer(1000).pipe(mapTo('🐰 Rápido'));
    const medium = timer(2000).pipe(mapTo('🚶 Medio'));

    const winner = race(slow, fast, medium);
    const subscription = winner.subscribe(result => 
      this.addStreamItem('race-operator', `🏆 Ganador: ${result}`)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoForkJoin() {
    this.updateDemo('forkjoin-operator', '<div class="output-display">Esperando a que todos terminen... </div>');
    
    const user = timer(1000).pipe(mapTo({name: 'Ana', id: 1}));
    const posts = timer(1500).pipe(mapTo(['Post 1', 'Post 2']));
    const comments = timer(800).pipe(mapTo(['Comentario 1']));

    const allData = forkJoin({
      user: user,
      posts: posts,
      comments: comments
    });

    const subscription = allData.subscribe(result => {
      this.addStreamItem('forkjoin-operator', `👤 Usuario: ${result.user.name}`);
      this.addStreamItem('forkjoin-operator', `📝 Posts: ${result.posts.length}`);
      this.addStreamItem('forkjoin-operator', `💬 Comentarios: ${result.comments.length}`);
      this.addStreamItem('forkjoin-operator', '✅ ¡Todo completado!');
    });

    this.currentSubscriptions.push(subscription);
  }

  private demoWithLatestFrom() {
    this.updateDemo('withlatestfrom-operator', `
      <div class="mb-4">
        <button id="withlatest-button" class="control-button">Hacer clic para combinar</button>
      </div>
      <div class="output-display">Clicks enriquecidos: </div>
    `);
    
    const button = document.getElementById('withlatest-button');
    if (button) {
      const clicks = fromEvent(button, 'click');
      const currentUser = of('Ana').pipe(delay(500));
      const currentTime = interval(1000).pipe(
        map(() => new Date().toLocaleTimeString()),
        startWith('Cargando...')
      );

      const enrichedClicks = clicks.pipe(
        withLatestFrom(currentUser, currentTime)
      );

      const subscription = enrichedClicks.subscribe(([click, user, time]) => 
        this.addStreamItem('withlatestfrom-operator', `${user} hizo clic a las ${time}`)
      );

      this.currentSubscriptions.push(subscription);
    }
  }

  private demoStartWithPairwise() {
    this.updateDemo('startwith-pairwise-operator', '<div class="output-display">StartWith y Pairwise: </div>');
    
    const numbers = from([10, 20, 30, 40]).pipe(
      concatMap(x => timer(600).pipe(map(() => x)))
    );

    const withStart = numbers.pipe(startWith(0, 5));
    const pairs = numbers.pipe(
      startWith(0),
      pairwise()
    );

    const sub1 = withStart.subscribe(x => 
      this.addStreamItem('startwith-pairwise-operator', `▶️ Start: ${x}`)
    );

    const sub2 = pairs.subscribe(([prev, curr]) => 
      this.addStreamItem('startwith-pairwise-operator', `🔄 ${prev} → ${curr}`)
    );

    this.currentSubscriptions.push(sub1, sub2);
  }

  private demoTap() {
    this.updateDemo('tap-operator', '<div class="output-display">Logging con Tap: </div>');
    
    const numbers = from([1, 2, 3, 4, 5]).pipe(
      concatMap(x => timer(500).pipe(map(() => x)))
    );

    const withLogging = numbers.pipe(
      tap(x => this.addStreamItem('tap-operator', `📥 Procesando: ${x}`)),
      map(x => x * 2),
      tap(x => this.addStreamItem('tap-operator', `🔄 Resultado: ${x}`))
    );

    const subscription = withLogging.subscribe(result => 
      this.addStreamItem('tap-operator', `✅ Final: ${result}`)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoCatchErrorRetry() {
    this.updateDemo('catcherror-retry-operator', '<div class="output-display">Manejo de errores: </div>');
    
    let attempt = 0;
    const unstableAPI = new Observable(subscriber => {
      attempt++;
      this.addStreamItem('catcherror-retry-operator', `🔄 Intento ${attempt}`);
      
      setTimeout(() => {
        if (attempt < 3) {
          subscriber.error('Error de red');
        } else {
          subscriber.next('¡Éxito!');
          subscriber.complete();
        }
      }, 800);
    });

    const withRetry = unstableAPI.pipe(
      retry(2),
      catchError(err => {
        this.addStreamItem('catcherror-retry-operator', `❌ Error: ${err}`, true);
        return of('🔄 Valor por defecto');
      })
    );

    const subscription = withRetry.subscribe(result => 
      this.addStreamItem('catcherror-retry-operator', `✅ Resultado: ${result}`)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoFinalize() {
    this.updateDemo('finalize-operator', '<div class="output-display">Stream con cleanup: </div>');
    
    const dataStream = interval(600).pipe(
      take(3),
      tap(x => this.addStreamItem('finalize-operator', `📊 Dato: ${x}`)),
      finalize(() => this.addStreamItem('finalize-operator', '🧹 Limpieza realizada'))
    );

    const subscription = dataStream.subscribe({
      next: x => this.addStreamItem('finalize-operator', `✅ Procesado: ${x}`),
      complete: () => this.addStreamItem('finalize-operator', '🏁 Completado')
    });

    this.currentSubscriptions.push(subscription);
  }

  private demoTimeout() {
    this.updateDemo('timeout-operator', '<div class="output-display">Timeout en acción: </div>');
    
    const slowAPI = timer(3000).pipe(mapTo('🐌 Respuesta lenta'));

    const withTimeout = slowAPI.pipe(
      tap(() => this.addStreamItem('timeout-operator', '⏳ Esperando respuesta...')),
      timeout(2000),
      catchError(err => {
        this.addStreamItem('timeout-operator', '⏰ Timeout detectado', true);
        return of('💾 Usando cache');
      })
    );

    const subscription = withTimeout.subscribe(result => 
      this.addStreamItem('timeout-operator', `✅ ${result}`)
    );

    this.currentSubscriptions.push(subscription);
  }

  private demoDefaultIfEmpty() {
    this.updateDemo('defaultifempty-operator', '<div class="output-display">Valores por defecto: </div>');
    
    // Observable vacío
    const emptySearch = EMPTY.pipe(
      defaultIfEmpty('📭 No se encontraron resultados')
    );

    // Observable con datos
    const nonEmptySearch = of('📄 Resultado encontrado').pipe(
      delay(1000),
      defaultIfEmpty('Este no se usará')
    );

    const sub1 = emptySearch.subscribe(result => 
      this.addStreamItem('defaultifempty-operator', `Vacío: ${result}`)
    );

    const sub2 = nonEmptySearch.subscribe(result => 
      this.addStreamItem('defaultifempty-operator', `Con datos: ${result}`)
    );

    this.currentSubscriptions.push(sub1, sub2);
  }

  private demoValidationOperators() {
    this.updateDemo('validation-operators', '<div class="output-display">Validaciones y búsquedas: </div>');
    
    const numbers = from([2, 4, 6, 8, 10]).pipe(
      concatMap(x => timer(400).pipe(map(() => x)))
    );

    const allEven = numbers.pipe(every(x => x % 2 === 0));
    const firstBig = numbers.pipe(find(x => x > 5));

    const sub1 = allEven.subscribe(result => 
      this.addStreamItem('validation-operators', `🔍 Todos pares: ${result}`)
    );

    const sub2 = firstBig.subscribe(result => 
      this.addStreamItem('validation-operators', `🎯 Primero > 5: ${result}`)
    );

    // También probamos con números mixtos
    setTimeout(() => {
      const mixedNumbers = from([1, 3, 5, 7]).pipe(every(x => x % 2 === 0));
      const sub3 = mixedNumbers.subscribe(result => 
        this.addStreamItem('validation-operators', `🔍 Mixtos todos pares: ${result}`)
      );
      this.currentSubscriptions.push(sub3);
    }, 2500);

    this.currentSubscriptions.push(sub1, sub2);
  }

  private demoIsEmpty() {
    this.updateDemo('isempty-operator', '<div class="output-display">Verificando si están vacíos: </div>');
    
    const emptyStream = EMPTY.pipe(isEmpty());
    const nonEmptyStream = of(1, 2, 3).pipe(
      delay(1000),
      isEmpty()
    );

    const sub1 = emptyStream.subscribe(result => 
      this.addStreamItem('isempty-operator', `📭 Stream vacío: ${result}`)
    );

    const sub2 = nonEmptyStream.subscribe(result => 
      this.addStreamItem('isempty-operator', `📦 Stream con datos: ${result}`)
    );

    this.currentSubscriptions.push(sub1, sub2);
  }
}

declare global {
  interface Window {
    app: RxJSExamplesApp;
  }
}

const app = new RxJSExamplesApp();
window.app = app;
