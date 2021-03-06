# NGX-NeoCrumb

An Angular module for creating breadcrumbs based on Routes.

[Demo](https://angular-jmthr4.stackblitz.io)

[StackBlitz Example](https://stackblitz.com/edit/angular-jmthr4)

## Installation
```bash
$ npm install ngx-neocrumb
```

The only thing you need to do is import `NeoCrumbModule` in your `app / shared` module.

```javascript
import { NeoCrumbModule } from 'ngx-neocrumb';
@NgModule({
  imports: [
    NeoCrumbModule,
  ],  
})
export class AppModule {}
```

And then import one of the styles in `styles.scss`
```scss
@import "~ngx-neocrumb/lib/styles/neo-crumb-bs4.css";
```
```scss
@import "~ngx-neocrumb/lib/styles/neo-crumb-mat.css";
```
```scss
@import "~ngx-neocrumb/lib/styles/neo-crumb-min.css";
```

## Usage
Then you can use breadcrumb component in your template wherever you want it.
```javascript
@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <nc-neo-crumb [inlineBlock]="true"></nc-neo-crumb>
      <router-outlet></router-outlet>
    </div>`
})
export class AppComponent {}
```

## Configuration

Configuration of the breadcrumbs module is accessable in your route configuration.

```javascript
const routes: Route[] = {
  {
    path: '',
    component: DashboardComponent,
    data: {
      breadcrumb: {
        text: 'Dashboard',

        // Unnecessary fields: 
        iconClass: 'mdi mdi-view-dashboard',
        hide: false
      }
    }
  }
};
```
Also for changing values at runtime based on app logic, you can use NeoCrumbService to get current items and PostProcess them.
```javascript
constructor(private neoCrumbService: NeoCrumbService) {
    this.neoCrumbService.onChange.subscribe(value => {
        value.forEach(nc => {
            if (nc.text == 'Dash')
                nc.text = 'Dashboard';
        });
    });
    
    // this.neoCrumbService.postProcess([]);
}
```
