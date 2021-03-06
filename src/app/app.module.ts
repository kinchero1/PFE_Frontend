import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { UserAccountComponent } from './components/user-account/user-account.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { ManageAccountsComponent } from './components/manage-accounts/manage-accounts.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component'

import { EventemitterService } from './services/eventemitter.service';
import { RoleSettingsComponent } from './components/role-settings/role-settings.component';
import { ProfileCreationStepsComponent } from './components/profile-creation-steps/profile-creation-steps.component';
import { ProfileBasicInfoComponent } from './components/profile-basic-info/profile-basic-info.component';
import { ProfileCreationWizardComponent } from './components/profile-creation-wizard/profile-creation-wizard.component';
import { ProfileProfInfoComponent } from './components/profile-prof-info/profile-prof-info.component';
import { SelectComponent } from './components/select/select.component';
import { ProfileAssociatedAccountsComponent } from './components/profile-associated-accounts/profile-associated-accounts.component';
import { ProfileFinishedComponent } from './components/profile-finished/profile-finished.component';
import { AuthService } from './services/auth.service';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { ManageSubCatComponent } from './components/manage-sub-cat/manage-sub-cat.component';
import { WizardStepsComponent } from './components/services/wizard-steps/wizard-steps.component';
import { StepsPageComponent } from './components/services/steps-page/steps-page.component';
import { BasicInfoPageComponent } from './components/services/basic-info-page/basic-info-page.component';
import { PlansInfoPageComponent } from './components/services/plans-info-page/plans-info-page.component';
import { MediaInfoPageComponent } from './components/services/media-info-page/media-info-page.component';
import { FinishPageComponent } from './components/services/finish-page/finish-page.component';
import { ServicePageComponent } from './components/services/service-page/service-page.component';
import { MyServicesComponent } from './components/services/my-services/my-services.component';
import { EditServiceComponent } from './components/services/edit-service/edit-service.component';
import { MapComponent } from './components/map/map.component';
import { MarkerComponent } from './components/marker/marker.component';
import { SearchPageComponent } from './components/services/search-page/search-page.component';
import { ServicesMapComponent } from './components/services/services-map/services-map.component';
import { ManageIrlCatComponent } from './components/manage-irl-cat/manage-irl-cat.component';
import { CreateOrderComponent } from './components/order/create-order/create-order.component';
import { MyOrdersComponent } from './components/order/my-orders/my-orders.component';
import { OrdersPageComponent } from './components/order/orders-page/orders-page.component';
import { SubmittedOffersComponent } from './components/order/submitted-offers/submitted-offers.component';
import { CreateEntrepriseComponent } from './components/entreprise/create-entreprise/create-entreprise.component';
import { EntreprisePageComponent } from './components/entreprise/entreprise-page/entreprise-page.component';
import { MyEntreprisesComponent } from './components/entreprise/my-entreprises/my-entreprises.component';
import { ViewParticipantsComponent } from './components/entreprise/view-participants/view-participants.component';
import { EntreprisesComponent } from './components/entreprise/entreprises/entreprises.component';
import { ChatPageComponent } from './components/chat/chat-page/chat-page.component';
import { ChatSupportComponent } from './components/chat/chat-support/chat-support.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { PaymentPageComponent } from './components/payment/payment-page/payment-page.component';
import { PaymentHistoriqueComponent } from './components/payment/payment-historique/payment-historique.component';
import { AdminPaymentListComponent } from './components/payment/admin-payment-list/admin-payment-list.component';
import { CheckoutPageComponent } from './components/payment/checkout-page/checkout-page.component';
import { NgxEmojiPickerModule } from 'ngx-emoji-picker';
import { ShareModule } from 'ngx-sharebuttons';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ManageProfilesComponent } from './components/manage-profiles/manage-profiles.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    UserAccountComponent,
    AdminPanelComponent,
    AdminSidebarComponent,
    ManageAccountsComponent,
    AlertComponent,
    RoleSettingsComponent,
    ProfileCreationStepsComponent,
    ProfileBasicInfoComponent,
    ProfileCreationWizardComponent,
    ProfileProfInfoComponent,
    SelectComponent,
    ProfileAssociatedAccountsComponent,
    ProfileFinishedComponent,
    ProfileComponent,
    EditProfileComponent,
    ManageCategoriesComponent,
    ManageSubCatComponent,
    WizardStepsComponent,
    StepsPageComponent,
    BasicInfoPageComponent,
    PlansInfoPageComponent,
    MediaInfoPageComponent,
    FinishPageComponent,
    ServicePageComponent,
    MyServicesComponent,
    EditServiceComponent,
    MapComponent,
    MarkerComponent,
    SearchPageComponent,
    ServicesMapComponent,
    ManageIrlCatComponent,
    CreateOrderComponent,
    MyOrdersComponent,
    OrdersPageComponent,
    SubmittedOffersComponent,
    CreateEntrepriseComponent,
    EntreprisePageComponent,
    MyEntreprisesComponent,
    ViewParticipantsComponent,
    EntreprisesComponent,
    ChatPageComponent,
    ChatSupportComponent,
    StatisticsComponent,
    PaymentPageComponent,
    PaymentHistoriqueComponent,
    AdminPaymentListComponent,
    CheckoutPageComponent,
    ManageProfilesComponent,





  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ShareIconsModule,
   ShareButtonsModule,
    NgxEmojiPickerModule.forRoot()

  ],
  providers: [FormBuilder, EventemitterService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
