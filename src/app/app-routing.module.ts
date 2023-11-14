import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ChatComponent } from './chat/chat/chat.component';
import { AdminComponent } from './admin/admin/admin.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './auth/change-password/change-password.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatBoxComponent } from './chat/chat-box/chat-box.component';
import { AuthPanelComponent } from './common/auth-panel/auth-panel.component';
import { MessageComponent } from './chat/message/message.component';
import { ContactComponent } from './chat/contact/contact.component';

const routes: Routes = [
    {path: "auth/login", component: LoginComponent},
    {path: "auth/register", component: RegisterComponent},
    {path: "auth/forgot-password", component: ForgotPasswordComponent},
    {path: "auth/change-password", component: ChangePasswordComponent},
    {
        path: "chat",
        component: ChatComponent,
        children: [
            { path: "contact/:id", component: ChatBoxComponent}
        ]
    },
    {path: "admin", component: AdminComponent},
    {path: "**", component: PageNotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ChatComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent,
    PageNotFoundComponent,
    AuthPanelComponent,
    MessageComponent,
    ContactComponent,
    ChatBoxComponent
]
