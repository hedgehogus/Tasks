## Question: Could you explain services in Angular?
Answer: Singleton objects in Angular that get instantiated only once during the lifetime of an application are called services. An Angular service contains **methods that maintain the data throughout the life of an application**.

The primary intent of an Angular service is to organize as well as share business logic, models, or data and functions with various components of an Angular application.

The functions offered by an Angular service can be invoked from any Angular component, such as a controller or directive.

## Question: Discuss the advantages and disadvantages of using Angular?
Answer: Following are the various advantages of using Angular:

- Ability to add a custom directive
- Exceptional community support
- Facilitates client and server communication
- Features strong features, such as Animation and Event Handlers
- Follows the **MVC pattern architecture**
- Offers support for static template and Angular template
- Support for **two-way data-binding**
- Supports **dependency injection**, RESTful services, and validations

Disadvantages of using Angular are enumerated as follows:

- Complex SPAs(single-page app) can be inconvenient and laggy to use due to their size
- Dynamic applications do not always perform well
- Learning Angular requires a decent effort and time

## Question: What is string interpolation in Angular?
Answer: Also referred to as moustache syntax - special type of syntax that makes use of template expressions in order to display the component data. These template expressions are enclosed within **double curly braces** i.e. {{ }}.

## Question: Can you explain the concept of scope hierarchy in Angular?
Answer: Angular organizes the $scope objects into a hierarchy that is typically used by views. This is known as the scope hierarchy in Angular. It has a root scope that can further contain one or several scopes called child scopes.

In a scope hierarchy, each view has its own $scope. Hence, the variables set by a view’s view controller will remain hidden to other view controllers. 

## Question: How to generate a class in Angular 7 using CLI?
ng generate class Dummy [options]

## Question: Please explain the difference between Angular and AngularJS?
- Dependency Injection (DI)
- Architecture 
- **Expression Syntax** - In AngularJS, a specific ng directive is required for the image or property and an event. Angular, on the other hand, use () and [] for blinding an event and accomplishing property binding, respectively
- Recommended Language 
- Routing syntax

## Question: Explain the difference between an Annotation and a Decorator in Angular?
Answer: In Angular, annotations are used for creating an annotation array. They are only metadata set of the class using the Reflect Metadata library.

**Decorators in Angular are design patterns used for separating decoration or modification of some class without changing the original source code.**

## Question: What are directives in Angular?
They allow an Angular developer to write new, application-specific HTML syntax. In actual, directives are functions that are executed by the Angular compiler when the same finds them in the DOM. Directives are of three types:

- Attribute Directives
- Component Directives
- Structural Directives

## Question: What are the building blocks of Angular?
1. **Components** – A component controls one or more views. Every Angular application has at least one component, known as the root component. A component contains application logic defined inside a class.
2. **Data Binding** – The mechanism by which parts of a template coordinates with parts of a component is known as data binding.
3. **Dependency Injection (DI)** – Angular makes use of DI to provide required dependencies to new components. Typically, dependencies required by a component are services. A component’s constructor parameters tell Angular about the services that a component requires.
4. **Directives** - Directives are responsible for instructing Angular about how to transform the DOM when rendering a template.
5. **Modules** - module is an organized block of code with a specific set of capabilities.
6. **Routing** – An Angular router is responsible for interpreting a browser URL as an instruction to navigate to a client-generated view. 
7. **Services** – A very broad category, a service can be anything ranging from a value and function to a feature that is required by an Angular app. Technically, a **service is a class with a well-defined purpose.**
8. **Template** – Each component’s view is associated with its companion template. A template in Angular is a form of HTML tags that lets Angular know that how it is meant to render the component.

## Question: What is AOT (Ahead-Of-Time) Compilation?
Answer: Each Angular app gets compiled internally. The Angular compiler takes in the JS code, compiles it and then produces some JS code. This happens only once per occasion per user. It is known as AOT (Ahead-Of-Time) compilation.

## Question: What is Data Binding? How many ways it can be done?
It happens between the template (HTML) and component (TypeScript).
1. Event Binding – Enables the application to respond to user input in the target environment
2. Property Binding – Enables interpolation of values computed from application data into the HTML
3. Two-way Binding – Changes made in the application state gets automatically reflected in the view and vice-versa. The ngModel directive is used for achieving this type of data binding.

## Question: Can you draw a comparison between the service() and the factory() functions?
the factory() function works in pretty much the same way as the service() function does, the former is more flexible and powerful. In actual, the factory() function are design patterns that help in creating objects.

## Question: Please explain the digest cycle in Angular? (change detection)
Answer: The process of monitoring the watchlist in order to track changes in the value of the watch variable is termed the digest cycle in Angular. The previous and present versions of the scope model values are compared in each digest cycle.

Although the digest cycle process gets triggered implicitly, it is possible to start it manually by using the **$apply()** function.

## Question: What is ViewEncapsulation and how many ways are there do to do it in Angular?
- Emulated – Styles used in other HTML spread to the component
- Native – Styles used in other HTML doesn’t spread to the component
- None – Styles defined in a component are visible to all components of the application

## lifecycle hooks
- nhOnInit
- ngOnDestroy
- ngOnChanges
- ngDoCheck
- ngAfterContentInit (only for components)
- ngAfterContentChecked (only for components)
- ngAfterViewInit (only for components)
- ngAfterViewChecked (only for components)
