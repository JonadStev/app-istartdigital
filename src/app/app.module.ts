import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { GMapModule } from 'primeng/gmap';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { ToastModule } from 'primeng/toast';
import { DataViewModule } from 'primeng/dataview';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CalendarModule } from 'primeng/calendar';
import { ChartModule } from 'primeng/chart';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { RegistroComponent } from './componentes/cuentas/registro/registro.component';
import { MantenimientoComponent } from './componentes/cuentas/mantenimiento/mantenimiento.component';
import { BloqueoComponent } from './componentes/cuentas/bloqueo/bloqueo.component';
import { BloquesComponent } from './componentes/bloques/bloques.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    MenuComponent,
    UsuariosComponent,
    RegistroComponent,
    MantenimientoComponent,
    BloqueoComponent,
    BloquesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    ImageModule,
    InputTextModule,
    SidebarModule,
    CardModule,
    CarouselModule,
    GMapModule,
    TableModule,
    DropdownModule,
    GalleriaModule,
    ToastModule,
    DataViewModule,
    MessagesModule,
    MessageModule,
    CalendarModule,
    ChartModule,
    InputTextareaModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
