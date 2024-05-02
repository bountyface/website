import { IStackInfo } from '../interfaces/navigation-item.model';

export const WEB_DEV_STACK: IStackInfo[] = [
  {
    imageUrl: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
    header: 'Angular',
    text: 'In the war of the web-frameworks there is no right and wrong. I am very happy with **[Angular](https://angular.io/)**. It is like a big and stable toolbox that lets me get to productive results fairly quickly. Coming from React I really appreciate that you can rely on built-in functionality like Dependency Injection. It comes with a simple state handling without the need of an external package. In addition the straightforward folder and component structure helps me build a mental model when looking into Angular projects from other people.',
  },
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201',
    header: 'Typescript',
    text: 'Type safety, even if it is not a real one like in **[TypeScript](https://www.typescriptlang.org/)**, has a huge impact to the quality of your code. It is easier to read, to maintain and prevents you from a lot of unnecessary mistakes. Working with TypeScript for years made plain JavaScript look very dirty to me. Now I cannot go back...',
  },
  {
    imageUrl:
      'https://i0.wp.com/www.primefaces.org/wp-content/uploads/2018/05/primeng-logo.png?fit=1000%2C1000&ssl=1&w=640',
    header: 'PrimeNG',
    text: 'When creating modern Web-Apps you do not want to start from scratch every time. **[PrimeNG](https://primeng.org/)** is a component library for Angular that satisfies not only your basic needs, but the advanced ones too. It is easy to setup, has an active community and serves lots of customization options through templating.',
  },
  {
    imageUrl: 'https://nestjs.com/logo-small-gradient.76616405.svg',
    header: 'NestJS',
    text: '**[NestJS](https://nestjs.com/)** is like Angular for the backend. It has a very similar structure and also follows the approach of a toolbox. It is easy to implement REST or GraphQL endpoints plus your validation. It is a great choice if you want to stay in the node eco system.',
  },
  {
    imageUrl: 'https://mikro-orm.io/img/logo.svg',
    header: 'MikroORM',
    text: 'ORM is very useful if your logic has to work with a database (like 100% of the time). You can easily store objects in your preferred DB without converting them first or writing any SQL-Statement. **[MikroORM](https://mikro-orm.io/)** provides a lot of functionality for your basic needs while maintaining better performance than most of its competitors.',
  },
  {
    imageUrl: 'https://www.postgresql.org/media/img/about/press/elephant.png',
    header: 'PostgreSQL',
    text: '**[PostgreSQL](https://www.postgresql.org/)** is a modern, open source and efficient relational database. Enough said.',
  },
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Docker_logo.svg/120px-Docker_logo.svg.png',
    header: 'Docker',
    text: 'I have evaluated many frameworks and tools for a Microservice Architecture. **[Docker](https://www.docker.com/)** saved me from a lot of pain in that process. It allows me to setup and destroy any software/tool/framework quickly without having to care about dependencies. Containers are easy to manage through the VS-Code extension.',
  },
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/GitLab_logo_%282%29.svg/150px-GitLab_logo_%282%29.svg.png',
    header: 'GitLab',
    text: 'Using Git for version control is essential for any project. Using the right tools around Git is the key to create robust and reliable results when working in a team. The process of reviewing merge-requests has never been easier with **[GitLab](https://about.gitlab.com/)**. Also you can create pipelines to further improve your code quality. May it be automated tests, linting or code code-safety analytics with SonarLint.',
  },
  {
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png',
    header: 'VSCode',
    text: 'Hands down the best text editor for web-development is called **[Visual Studio Code](https://code.visualstudio.com/)**. Easy to use, free and very user friendly. Plus there are tons of useful and actively maintained extensions to improve your workflow.',
  },
];
