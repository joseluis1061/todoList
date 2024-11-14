# Administrador de Tareas

## Descripción
Esta aplicación web, construida con React, permite a los usuarios crear, eliminar y marcar como completadas sus tareas. También incluye una función de búsqueda para encontrar rápidamente las tareas que necesites.Cuenta con persistencia de los datos en localStorage

## Funcionalidades:

- Crear tareas: Agrega nuevas tareas a la lista.
- Eliminar tareas: Borra tareas individuales de la lista.
- Marcar como completadas: Cambia el estado de una tarea a completada o incompleta.
- Buscar tareas: Filtra la lista de tareas según un término de búsqueda.
- Persistencia de datos: Guarda tu lista de tareas en localStorage


## Tecnologías Utilizadas:

React: 18.3.1
Node.js: 20.13.1

## Instalación
1. Clonar el repositorio:
git clone https://github.com/joseluis1061/todoList.git

2. Instalar dependencias
cd tu-proyecto
npm install

3. Iniciar el servidor de desarrollo:
npm run dev

# Carpetas Principales
- public: Contiene archivos estáticos como index.html y assets.
- src: Contiene el código fuente de la aplicación:
components:
- BtnNewTodo.jsx: Componente del botón para agregar nuevas tareas.
- Header.jsx: Componente del encabezado de la aplicación.
- NewTodo.jsx: Componente del formulario para crear nuevas tareas.
- Search.jsx: Componente del campo de búsqueda.
- Todo.jsx: Componente que representa una tarea individual.
- TodoList.jsx: Componente que muestra la lista completa de tareas.
context:
- AppContext.js: Contiene el contexto global de la aplicación para compartir datos entre componentes.
hooks:
- useInitState.js: Hook personalizado para manejar el estado inicial de la aplicación, incluyendo la lógica para agregar, eliminar y marcar tareas como completadas.
- useLocalStorage.js: Hook personalizado para guardar y cargar datos en el localStorage del navegador, garantizando la persistencia de las tareas entre sesiones.
layout:
- Layout.jsx: Componente que define la estructura general de la aplicación.
modal:
- Modal.jsx: Componente modal utilizado para mostrar mensajes o formularios.
styles:
Contiene los archivos CSS para estilizar los componentes.

## Desarrollado por:
José Luis Zúñiga