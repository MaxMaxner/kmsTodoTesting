import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { ListComponent } from './list/list.component'
import { AddTodoComponent } from './add-todo/add-todo.component'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { KategorieComponent } from './kategorie/kategorie.component'
import { SearchbarComponent } from './searchbar/searchbar.component'

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        AddTodoComponent,
        KategorieComponent,
        SearchbarComponent,
    ],
    imports: [BrowserModule, FormsModule, NgbModule, HttpClientModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
