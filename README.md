# Proyecto de integración

## React

### Hello World

```
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

### JSX

```
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);
```

Los elementos de react son **inmutables**, cuando se crea un elemento no se puede actualizar.
La única manera de actualizar la UI es creando un nuevo elemento y pasandolo por el método render.

Una ventaja es que React sólo actualiza las partes del DOM que son necesarias.

### Las propiedades son sólo de lectura

### All React components must act like pure functions with respect to their props.

Para actualizar la UI creamos un estado interno del componente, cada vez que ese estado se actualice se llamará al método render y se retornará un nuevo elemento con las propiedades actualizadas.

Dentro de un smart component se crea el state, es un objeto que mantendrá el estado del componente.
Para actualizar las propiedades del mismo se utiliza el método this.setState({value: newValue})

### Functional and Class components

Es un componente valido por que retorna un elemento de React.

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Smart and Dumb Componentes

Qué hace => Smart Component (Componente Inteligente)
Cómo se ve => Dumb Component (Componente Tonto)

Presentacional (Dumb)

- Puede contener smart components u otros componentes de UI
- Permiten compocisión con { props.children }
- No dependen del resto de la aplicación
- No especifica cómo los datos son cargados o como mutan
- Recibe datos y callbacks sólo como propiedades
- No tiene su propio estado
- Están escritos como componentes funcionales.

Container (Smart)

- Concentrado en el funcionamiento de la aplicación
- Contienen componentes de UI u otros componentes
- No deberían estilos
- Proveen de datos a componentes de UI u otros componentes
- Proveen de callbacks a la UI
- Normalmente tienen estado
- Llaman a acciones

### Live cicle

Ciclo de vida de un componente

Montado

1.  Constructor (El componente no se ve)

- Podemos iniciar el estado
- Enlazar (bind) de eventos
- Primer metodo que se llama al instanciar el componente

2.  componentWillMount (Aún no se ve)

- Método llamado inmediatamente antes de que el componente se vaya a montar
- Puedes hacer un setState
- No hagas llamados a un API o suscripción a eventos

3.  render

- Contiene todos los eventos a renderizar ( estructura del componente )
- Contiene JSX en el return
- Puedes calcular propiedades nCompleto = primerNombre + segundoNombre

4.  componentDidMount

- Método llamado luego de montarse el componente (el componente ya está en pantalla)
- Solo se lanza una vez
- Enlazar (bind) de otros datos
- Es el primer método que se llama al instanciar un componente

Actualización

5.  componentWillReceiveProps

- Método llamado al recibir nuevas propiedades
- Sirve para actualizar el estado con base a las nuevas propiedades

6.  shouldComponentUpdate

- {/_ Las propiedades que tenia son iguales que las que tengo ? Si, entonces no necesito renderizar nuevamente mi elemento. _/}
- Método que condiciona si el componente se debe volver a renderizar
- Utilizado para optimizar el rendimiento

7.  componentWillUpdate

- Método llamado antes de re-renderizar un componente
- Utilizado para optimizar el rendimiento

8.  render

- re-render

9.  componentDidUpdate

- Método llamado luego del re-render

Desmontado

10. componentWillUnmount

- Método llamado antes de que el componente sea retirado de la aplicación.

Manejo de errores

11. componentDidCatch

- Si ocurre un error al renderizar el componente este método es invocado
- El manejo de errores solo ocurre en componentes hijos

### Handling Event

```
  handleClick = () => {
    coonsole.log('click')
  }

  render () {
    return (
        <button onClick={this.handleClick}> Click me<button>
    )
```

- Conditional Rendering
- List and key
- Form
  Controlled component
- Composición de componentes