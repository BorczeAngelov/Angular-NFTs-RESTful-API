import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { DynamicApiKeyComponent } from './dynamic-api-key/dynamic-api-key.component';
import { BoredApeBoardComponent } from './bored-ape-board/bored-ape-board.component';
import { NftMediaComponent } from './nft-media/nft-media.component';
import { NftRealTimePriceComponent } from './nft-real-time-price/nft-real-time-price.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicApiKeyComponent,
    BoredApeBoardComponent,
    NftMediaComponent,
    NftRealTimePriceComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
