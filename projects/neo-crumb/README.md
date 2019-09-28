# NGX-NeoCrumb

An Angular module for creating breadcrumbs based on Routes.

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

And then import one of the styles in `styles.css`
```javascript
@import "~ngx-neocrumb/lib/styles/neo-crumb-bs4.css";
```
```javascript
@import "~ngx-neocrumb/lib/styles/neo-crumb-mat.css";
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
    component: HomeComponent,
    data: {
      breadcrumb: 'Home'
    }
  }
};
```
Also for changing values at runtime based on app logic, you can use NeoCrumbService to get current items and PostProcess them.
```javascript
constructor(private neoCrumbService: NeoCrumbService) {
    this.neoCrumbService.change$.subscribe(value => {
        value.map(nc => nc.breadcrumb += ' test');
        this.neoCrumbService.postProcess(value);
    })
}
```
