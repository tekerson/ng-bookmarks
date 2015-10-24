# Bookmarks

*Experimental*

## What does it do?

Allow the creation/editing of a collection of Bookmarks via an interface backed by a RESTful API.

## Installation

```shell
git clone https://tekerson@github.com/tekerson/ng-bookmarks.git
cd bookmarks
npm install
bower install
```

To run in development mode:
```shell
gulp serve
```

The interface talks to a basic REST API provided by `json-server`.
Install it with:
```shell
npm install -g json-server
```
and then run
```shell
json-server --port 3002 data/bookmarks.db.json
```

## Ideas

### Decoupled Angular components from Dependency Injection

In AngularJS applications, components (Directives, Services, Controllers, etc.) are often defined and registered with the injector at the same time. I believe this can negate some of the decoupling that is the goal by DI. By binding the "role" of the components (as registered with DI) with its implementation, it makes in impossible to swap the implementation without editing either the existing implementation or its consumers.

### Using `ngModelController` parsers to validate/create domain objects

The `Parser`/`Validator` chain provided by `ngModelController` can be used to parse and validate user input before being bound as the `value` of the input element. Usually this is used to perform some formatting, such as normalizing date formats or formatting phone/credit card numbers etc. But, they still usually return primitive types.
I attempted to take this idea further and return fully formed domain objects, making the form the boundary between the user and the domain. These implementations are in the directives in `app/bookmarks/form/fields`.

### Organizing Directives as Components

Other frameworks (notably `ReactJS`) combine the template (HTML) and behaviour (JavaScript) and even style (CSS) into a single "component". AngularJS usually takes a more traditional tact, separating them into different files; even if it is suggested to keep them in the same directory.
Using the ES6/ES2015 multiline string syntax, I experimented with attaching the template directly to its corresponding controller code. The `*.directive.js` files (found in the `cards-grid` and `count` components) are written this way.
