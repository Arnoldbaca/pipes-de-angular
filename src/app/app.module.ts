import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SahredModule } from './shared/shared.module';

//Configuracion del locale de la app
import localeEsMx from '@angular/common/locales/es-MX';
import localeFrCa from '@angular/common/locales/fr-CA';
import { getLocaleCurrencyName, registerLocaleData } from '@angular/common';

registerLocaleData(localeEsMx);
registerLocaleData(localeFrCa);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SahredModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-MX',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
