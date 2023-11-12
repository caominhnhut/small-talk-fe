import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AuthPanelComponent } from './common/auth-panel/auth-panel.component';
import { MessageComponent } from './chat/message/message.component';
import { ContactComponent } from './chat/contact/contact.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    AuthPanelComponent,
    MessageComponent,
    ContactComponent,
    ChatBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
