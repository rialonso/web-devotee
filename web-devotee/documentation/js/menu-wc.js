'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">web-devotee documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-5f96759e1e83db1ad98ce98320a58716bc9a4e7c296c916f7fa7d8ac7b79a89a4f7aa1d1383973e6dc894f85c40a4db11da837efcf63bba84fab349866c5fbb9"' : 'data-target="#xs-components-links-module-AppModule-5f96759e1e83db1ad98ce98320a58716bc9a4e7c296c916f7fa7d8ac7b79a89a4f7aa1d1383973e6dc894f85c40a4db11da837efcf63bba84fab349866c5fbb9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-5f96759e1e83db1ad98ce98320a58716bc9a4e7c296c916f7fa7d8ac7b79a89a4f7aa1d1383973e6dc894f85c40a4db11da837efcf63bba84fab349866c5fbb9"' :
                                            'id="xs-components-links-module-AppModule-5f96759e1e83db1ad98ce98320a58716bc9a4e7c296c916f7fa7d8ac7b79a89a4f7aa1d1383973e6dc894f85c40a4db11da837efcf63bba84fab349866c5fbb9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ChatModule.html" data-type="entity-link" >ChatModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ChatModule-56ea1819f1e9a026a06b02d4b4151672dd1bcc2b1390b23def5a5088c409f0bd5a6c1c8d73cbf624a40a722e908aa4886cb052206d2febdb4e364691a6df1d72"' : 'data-target="#xs-components-links-module-ChatModule-56ea1819f1e9a026a06b02d4b4151672dd1bcc2b1390b23def5a5088c409f0bd5a6c1c8d73cbf624a40a722e908aa4886cb052206d2febdb4e364691a6df1d72"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ChatModule-56ea1819f1e9a026a06b02d4b4151672dd1bcc2b1390b23def5a5088c409f0bd5a6c1c8d73cbf624a40a722e908aa4886cb052206d2febdb4e364691a6df1d72"' :
                                            'id="xs-components-links-module-ChatModule-56ea1819f1e9a026a06b02d4b4151672dd1bcc2b1390b23def5a5088c409f0bd5a6c1c8d73cbf624a40a722e908aa4886cb052206d2febdb4e364691a6df1d72"' }>
                                            <li class="link">
                                                <a href="components/ChatComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ChatRoutingModule.html" data-type="entity-link" >ChatRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ContinueRegisterModule.html" data-type="entity-link" >ContinueRegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ContinueRegisterModule-64aec673b27c9b46a4725bd3c18c050401920f0e0b616214484d1d658fe78b13330d8deae44cd0157d790c61bd3ea7f940b491e420300f7f15a8552df74b8ca9"' : 'data-target="#xs-components-links-module-ContinueRegisterModule-64aec673b27c9b46a4725bd3c18c050401920f0e0b616214484d1d658fe78b13330d8deae44cd0157d790c61bd3ea7f940b491e420300f7f15a8552df74b8ca9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ContinueRegisterModule-64aec673b27c9b46a4725bd3c18c050401920f0e0b616214484d1d658fe78b13330d8deae44cd0157d790c61bd3ea7f940b491e420300f7f15a8552df74b8ca9"' :
                                            'id="xs-components-links-module-ContinueRegisterModule-64aec673b27c9b46a4725bd3c18c050401920f0e0b616214484d1d658fe78b13330d8deae44cd0157d790c61bd3ea7f940b491e420300f7f15a8552df74b8ca9"' }>
                                            <li class="link">
                                                <a href="components/ChangeUserTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangeUserTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContinueRegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContinueRegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterDataComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterDataComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ContinueRegisterRoutingModule.html" data-type="entity-link" >ContinueRegisterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DialogsModule.html" data-type="entity-link" >DialogsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DialogsModule-90cddb37ecfe96963fe824a24d03d07276842561e9f660ef2cfffceb8d43f41e1dab7b662a3f01ed71392f2a8c6732f09cdb4e357f1b5adc834e32325d9fb8dd"' : 'data-target="#xs-components-links-module-DialogsModule-90cddb37ecfe96963fe824a24d03d07276842561e9f660ef2cfffceb8d43f41e1dab7b662a3f01ed71392f2a8c6732f09cdb4e357f1b5adc834e32325d9fb8dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DialogsModule-90cddb37ecfe96963fe824a24d03d07276842561e9f660ef2cfffceb8d43f41e1dab7b662a3f01ed71392f2a8c6732f09cdb4e357f1b5adc834e32325d9fb8dd"' :
                                            'id="xs-components-links-module-DialogsModule-90cddb37ecfe96963fe824a24d03d07276842561e9f660ef2cfffceb8d43f41e1dab7b662a3f01ed71392f2a8c6732f09cdb4e357f1b5adc834e32325d9fb8dd"' }>
                                            <li class="link">
                                                <a href="components/ActivateLocationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ActivateLocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChangePasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DevoteePlusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DevoteePlusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditAboutMeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditAboutMeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditProfilePicturesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditProfilePicturesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginQrCodeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginQrCodeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrivacyPolicyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrivacyPolicyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UseOfTermsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UseOfTermsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EticalRulesModule.html" data-type="entity-link" >EticalRulesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EticalRulesModule-3b738ddf74c289c2493e7b7659f39818e472523d3eceea80101cd855ce92e0220236b61eee6f1bfe61fd847f37fe5f6ee3fa1e693ba80effc3428805326aeed6"' : 'data-target="#xs-components-links-module-EticalRulesModule-3b738ddf74c289c2493e7b7659f39818e472523d3eceea80101cd855ce92e0220236b61eee6f1bfe61fd847f37fe5f6ee3fa1e693ba80effc3428805326aeed6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EticalRulesModule-3b738ddf74c289c2493e7b7659f39818e472523d3eceea80101cd855ce92e0220236b61eee6f1bfe61fd847f37fe5f6ee3fa1e693ba80effc3428805326aeed6"' :
                                            'id="xs-components-links-module-EticalRulesModule-3b738ddf74c289c2493e7b7659f39818e472523d3eceea80101cd855ce92e0220236b61eee6f1bfe61fd847f37fe5f6ee3fa1e693ba80effc3428805326aeed6"' }>
                                            <li class="link">
                                                <a href="components/EticalRulesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EticalRulesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilterPreferencesModule.html" data-type="entity-link" >FilterPreferencesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FilterPreferencesModule-d0ed80f1791fd66fe8404f38aaf1412b11a9c03730c039823aedafd6a99ef70f8894787ec9588ab15ac9eb6ed08a1ec1f241c62670cffb564deec61f89c59510"' : 'data-target="#xs-components-links-module-FilterPreferencesModule-d0ed80f1791fd66fe8404f38aaf1412b11a9c03730c039823aedafd6a99ef70f8894787ec9588ab15ac9eb6ed08a1ec1f241c62670cffb564deec61f89c59510"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FilterPreferencesModule-d0ed80f1791fd66fe8404f38aaf1412b11a9c03730c039823aedafd6a99ef70f8894787ec9588ab15ac9eb6ed08a1ec1f241c62670cffb564deec61f89c59510"' :
                                            'id="xs-components-links-module-FilterPreferencesModule-d0ed80f1791fd66fe8404f38aaf1412b11a9c03730c039823aedafd6a99ef70f8894787ec9588ab15ac9eb6ed08a1ec1f241c62670cffb564deec61f89c59510"' }>
                                            <li class="link">
                                                <a href="components/FilterPreferencesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPreferencesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilterPreferencesRoutingModule.html" data-type="entity-link" >FilterPreferencesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/IconModule.html" data-type="entity-link" >IconModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/InitialPageModule.html" data-type="entity-link" >InitialPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-InitialPageModule-726a6a7df5f5707be7cf669759b3d1191387a7b51a2c3f182e8d6325b16bcde22eb0bcf038bdf10bf1e7bacbed69f21d9489e8eecce0ee8120e67c9900ec7103"' : 'data-target="#xs-components-links-module-InitialPageModule-726a6a7df5f5707be7cf669759b3d1191387a7b51a2c3f182e8d6325b16bcde22eb0bcf038bdf10bf1e7bacbed69f21d9489e8eecce0ee8120e67c9900ec7103"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-InitialPageModule-726a6a7df5f5707be7cf669759b3d1191387a7b51a2c3f182e8d6325b16bcde22eb0bcf038bdf10bf1e7bacbed69f21d9489e8eecce0ee8120e67c9900ec7103"' :
                                            'id="xs-components-links-module-InitialPageModule-726a6a7df5f5707be7cf669759b3d1191387a7b51a2c3f182e8d6325b16bcde22eb0bcf038bdf10bf1e7bacbed69f21d9489e8eecce0ee8120e67c9900ec7103"' }>
                                            <li class="link">
                                                <a href="components/InitialPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >InitialPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/InitialPageRoutingModule.html" data-type="entity-link" >InitialPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LandingPageModule.html" data-type="entity-link" >LandingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LandingPageModule-662f2dcc3fb7cefbc3da20c5a2e6c7e714bda9c85fa1470c6b8aa30e8c70a27d4e8b179f04e35a610fb0459013a8d55aacce4c66d6e2003993b2887c62563510"' : 'data-target="#xs-components-links-module-LandingPageModule-662f2dcc3fb7cefbc3da20c5a2e6c7e714bda9c85fa1470c6b8aa30e8c70a27d4e8b179f04e35a610fb0459013a8d55aacce4c66d6e2003993b2887c62563510"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LandingPageModule-662f2dcc3fb7cefbc3da20c5a2e6c7e714bda9c85fa1470c6b8aa30e8c70a27d4e8b179f04e35a610fb0459013a8d55aacce4c66d6e2003993b2887c62563510"' :
                                            'id="xs-components-links-module-LandingPageModule-662f2dcc3fb7cefbc3da20c5a2e6c7e714bda9c85fa1470c6b8aa30e8c70a27d4e8b179f04e35a610fb0459013a8d55aacce4c66d6e2003993b2887c62563510"' }>
                                            <li class="link">
                                                <a href="components/LandingPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LandingPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LikedMeModule.html" data-type="entity-link" >LikedMeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LikedMeModule-ebb0a300d4d0ab78a9bf7cf806fe4709ea81370150a8966a7405514d7c453a04cdc808087f46c01525e562627f5f83ffa77159b12395ace6e12ed469f1b4d555"' : 'data-target="#xs-components-links-module-LikedMeModule-ebb0a300d4d0ab78a9bf7cf806fe4709ea81370150a8966a7405514d7c453a04cdc808087f46c01525e562627f5f83ffa77159b12395ace6e12ed469f1b4d555"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LikedMeModule-ebb0a300d4d0ab78a9bf7cf806fe4709ea81370150a8966a7405514d7c453a04cdc808087f46c01525e562627f5f83ffa77159b12395ace6e12ed469f1b4d555"' :
                                            'id="xs-components-links-module-LikedMeModule-ebb0a300d4d0ab78a9bf7cf806fe4709ea81370150a8966a7405514d7c453a04cdc808087f46c01525e562627f5f83ffa77159b12395ace6e12ed469f1b4d555"' }>
                                            <li class="link">
                                                <a href="components/LikedMeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LikedMeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggedModule.html" data-type="entity-link" >LoggedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoggedModule-544cfeda49cb12423d031df5679f1c03904480a450c8b5f4d93813eda81ed9db974c2724155245b27daf57456d8e291c7f6aa58ee2817c1f26a72d2aeb7e2eef"' : 'data-target="#xs-components-links-module-LoggedModule-544cfeda49cb12423d031df5679f1c03904480a450c8b5f4d93813eda81ed9db974c2724155245b27daf57456d8e291c7f6aa58ee2817c1f26a72d2aeb7e2eef"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoggedModule-544cfeda49cb12423d031df5679f1c03904480a450c8b5f4d93813eda81ed9db974c2724155245b27daf57456d8e291c7f6aa58ee2817c1f26a72d2aeb7e2eef"' :
                                            'id="xs-components-links-module-LoggedModule-544cfeda49cb12423d031df5679f1c03904480a450c8b5f4d93813eda81ed9db974c2724155245b27daf57456d8e291c7f6aa58ee2817c1f26a72d2aeb7e2eef"' }>
                                            <li class="link">
                                                <a href="components/LoggedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggedComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggedRoutingModule.html" data-type="entity-link" >LoggedRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link" >RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterModule-3ca458cb7c7c9671150d38f207da3efd7a4ef199d354c2bdf7034cb43e2ec68e0900ff71bc7909ea7b0a061a6d1192c965c94f1a802600f1dc7c8d579c355760"' : 'data-target="#xs-components-links-module-RegisterModule-3ca458cb7c7c9671150d38f207da3efd7a4ef199d354c2bdf7034cb43e2ec68e0900ff71bc7909ea7b0a061a6d1192c965c94f1a802600f1dc7c8d579c355760"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterModule-3ca458cb7c7c9671150d38f207da3efd7a4ef199d354c2bdf7034cb43e2ec68e0900ff71bc7909ea7b0a061a6d1192c965c94f1a802600f1dc7c8d579c355760"' :
                                            'id="xs-components-links-module-RegisterModule-3ca458cb7c7c9671150d38f207da3efd7a4ef199d354c2bdf7034cb43e2ec68e0900ff71bc7909ea7b0a061a6d1192c965c94f1a802600f1dc7c8d579c355760"' }>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterRoutingModule.html" data-type="entity-link" >RegisterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RememberPasswordModule.html" data-type="entity-link" >RememberPasswordModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RememberPasswordModule-d21747c34f969a2f862c7c70ad8e93705057974de5b70c506648ae4c271b753b6cbf8c8a08611df488bc6e9eb231a049eab74d5fdaa99a88a0e3b2210b0d7984"' : 'data-target="#xs-components-links-module-RememberPasswordModule-d21747c34f969a2f862c7c70ad8e93705057974de5b70c506648ae4c271b753b6cbf8c8a08611df488bc6e9eb231a049eab74d5fdaa99a88a0e3b2210b0d7984"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RememberPasswordModule-d21747c34f969a2f862c7c70ad8e93705057974de5b70c506648ae4c271b753b6cbf8c8a08611df488bc6e9eb231a049eab74d5fdaa99a88a0e3b2210b0d7984"' :
                                            'id="xs-components-links-module-RememberPasswordModule-d21747c34f969a2f862c7c70ad8e93705057974de5b70c506648ae4c271b753b6cbf8c8a08611df488bc6e9eb231a049eab74d5fdaa99a88a0e3b2210b0d7984"' }>
                                            <li class="link">
                                                <a href="components/RememberPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RememberPasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RememberPasswordRoutingModule.html" data-type="entity-link" >RememberPasswordRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-b01d3240b03d313a40bb20b4b3105baff16af914ee5be5eded88000d8c3c4cf7f7076f3e3d35eec7e99f9c8406316ea97b62bad7ed893b74702750ec82e3ee1a"' : 'data-target="#xs-components-links-module-SharedModule-b01d3240b03d313a40bb20b4b3105baff16af914ee5be5eded88000d8c3c4cf7f7076f3e3d35eec7e99f9c8406316ea97b62bad7ed893b74702750ec82e3ee1a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-b01d3240b03d313a40bb20b4b3105baff16af914ee5be5eded88000d8c3c4cf7f7076f3e3d35eec7e99f9c8406316ea97b62bad7ed893b74702750ec82e3ee1a"' :
                                            'id="xs-components-links-module-SharedModule-b01d3240b03d313a40bb20b4b3105baff16af914ee5be5eded88000d8c3c4cf7f7076f3e3d35eec7e99f9c8406316ea97b62bad7ed893b74702750ec82e3ee1a"' }>
                                            <li class="link">
                                                <a href="components/AdsCardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdsCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardImgTitleTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardImgTitleTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ChatMessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatMessagesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderCardsInitialPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderCardsInitialPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderLoggedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderLoggedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultipleSelectCidsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultipleSelectCidsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultipleSelectDrugsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultipleSelectDrugsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultipleSelectHospitalsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultipleSelectHospitalsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultipleSelectMedicalProceduresComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultipleSelectMedicalProceduresComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PrincipalLoadingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrincipalLoadingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignInModule.html" data-type="entity-link" >SignInModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SignInModule-191abf986e48092e0dbc996e60f09f50fcced4e28a5e98c4835572c4818e764804419d727975127bb738b13ce74b79fb9e324b99fdb3ddc94e75717d4b746a1f"' : 'data-target="#xs-components-links-module-SignInModule-191abf986e48092e0dbc996e60f09f50fcced4e28a5e98c4835572c4818e764804419d727975127bb738b13ce74b79fb9e324b99fdb3ddc94e75717d4b746a1f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SignInModule-191abf986e48092e0dbc996e60f09f50fcced4e28a5e98c4835572c4818e764804419d727975127bb738b13ce74b79fb9e324b99fdb3ddc94e75717d4b746a1f"' :
                                            'id="xs-components-links-module-SignInModule-191abf986e48092e0dbc996e60f09f50fcced4e28a5e98c4835572c4818e764804419d727975127bb738b13ce74b79fb9e324b99fdb3ddc94e75717d4b746a1f"' }>
                                            <li class="link">
                                                <a href="components/SignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SignInComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SignInRoutingModule.html" data-type="entity-link" >SignInRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserConfigurationsModule.html" data-type="entity-link" >UserConfigurationsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserConfigurationsModule-6efe0be13e50d0cf2f1437078a84da28fe58edfc2fcfa92b9a00b0ece7443d373c7c4fcb3e032d204795801a0bc61d2e23960c5102a9d17a3d384cee57b5b562"' : 'data-target="#xs-components-links-module-UserConfigurationsModule-6efe0be13e50d0cf2f1437078a84da28fe58edfc2fcfa92b9a00b0ece7443d373c7c4fcb3e032d204795801a0bc61d2e23960c5102a9d17a3d384cee57b5b562"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserConfigurationsModule-6efe0be13e50d0cf2f1437078a84da28fe58edfc2fcfa92b9a00b0ece7443d373c7c4fcb3e032d204795801a0bc61d2e23960c5102a9d17a3d384cee57b5b562"' :
                                            'id="xs-components-links-module-UserConfigurationsModule-6efe0be13e50d0cf2f1437078a84da28fe58edfc2fcfa92b9a00b0ece7443d373c7c4fcb3e032d204795801a0bc61d2e23960c5102a9d17a3d384cee57b5b562"' }>
                                            <li class="link">
                                                <a href="components/UserConfigurationsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserConfigurationsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserConfigurationsRoutingModule.html" data-type="entity-link" >UserConfigurationsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserMatchsModule.html" data-type="entity-link" >UserMatchsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserMatchsModule-1bf2ac1b6f6bba68c1d763573801f852879c8cef59655804b55a44ad9ebe66a7d084934cc08d55333aa10df38082f6647c3f9ab896173b41aa1fd18bea4e2a6d"' : 'data-target="#xs-components-links-module-UserMatchsModule-1bf2ac1b6f6bba68c1d763573801f852879c8cef59655804b55a44ad9ebe66a7d084934cc08d55333aa10df38082f6647c3f9ab896173b41aa1fd18bea4e2a6d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserMatchsModule-1bf2ac1b6f6bba68c1d763573801f852879c8cef59655804b55a44ad9ebe66a7d084934cc08d55333aa10df38082f6647c3f9ab896173b41aa1fd18bea4e2a6d"' :
                                            'id="xs-components-links-module-UserMatchsModule-1bf2ac1b6f6bba68c1d763573801f852879c8cef59655804b55a44ad9ebe66a7d084934cc08d55333aa10df38082f6647c3f9ab896173b41aa1fd18bea4e2a6d"' }>
                                            <li class="link">
                                                <a href="components/UserMatchsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserMatchsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AddAllDataUser.html" data-type="entity-link" >AddAllDataUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddControlApp.html" data-type="entity-link" >AddControlApp</a>
                            </li>
                            <li class="link">
                                <a href="classes/AddDataRegister.html" data-type="entity-link" >AddDataRegister</a>
                            </li>
                            <li class="link">
                                <a href="classes/ChangePasswordSerializer.html" data-type="entity-link" >ChangePasswordSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomAction.html" data-type="entity-link" >CustomAction</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenerateHashQrcodeSerializer.html" data-type="entity-link" >GenerateHashQrcodeSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAddressLatLongSerializer.html" data-type="entity-link" >GetAddressLatLongSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetChatServiceSerializer.html" data-type="entity-link" >GetChatServiceSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetCidsSerializer.html" data-type="entity-link" >GetCidsSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetHosptalsSerializer.html" data-type="entity-link" >GetHosptalsSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetMatchesSerializer.html" data-type="entity-link" >GetMatchesSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetMedicalProceduresSerializer.html" data-type="entity-link" >GetMedicalProceduresSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetMedicinesSerializer.html" data-type="entity-link" >GetMedicinesSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetSugestionSerializer.html" data-type="entity-link" >GetSugestionSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/IData.html" data-type="entity-link" >IData</a>
                            </li>
                            <li class="link">
                                <a href="classes/ILastedMessage.html" data-type="entity-link" >ILastedMessage</a>
                            </li>
                            <li class="link">
                                <a href="classes/IncrementCountShowAds.html" data-type="entity-link" >IncrementCountShowAds</a>
                            </li>
                            <li class="link">
                                <a href="classes/ISignInGoogle.html" data-type="entity-link" >ISignInGoogle</a>
                            </li>
                            <li class="link">
                                <a href="classes/ITargetUser.html" data-type="entity-link" >ITargetUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/IUserDataMatches.html" data-type="entity-link" >IUserDataMatches</a>
                            </li>
                            <li class="link">
                                <a href="classes/LikeDislikeSerializer.html" data-type="entity-link" >LikeDislikeSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/LikedMeSerializer.html" data-type="entity-link" >LikedMeSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListCardsAddData.html" data-type="entity-link" >ListCardsAddData</a>
                            </li>
                            <li class="link">
                                <a href="classes/ListCardsSerializer.html" data-type="entity-link" >ListCardsSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginGoogleSerializer.html" data-type="entity-link" >LoginGoogleSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/MHeaderCardsInitialPage.html" data-type="entity-link" >MHeaderCardsInitialPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/MLocation.html" data-type="entity-link" >MLocation</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelCardImgTitleText.html" data-type="entity-link" >ModelCardImgTitleText</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelChangePassword.html" data-type="entity-link" >ModelChangePassword</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelErrors.html" data-type="entity-link" >ModelErrors</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModelLikeDislikeRequest.html" data-type="entity-link" >ModelLikeDislikeRequest</a>
                            </li>
                            <li class="link">
                                <a href="classes/PlacesAutoCompleteSerializer.html" data-type="entity-link" >PlacesAutoCompleteSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProfilePicturesSerializer.html" data-type="entity-link" >ProfilePicturesSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ReadHashQrcodeSerializer.html" data-type="entity-link" >ReadHashQrcodeSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserSerializer.html" data-type="entity-link" >RegisterUserSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserSerializer-1.html" data-type="entity-link" >RegisterUserSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResetCountShowAds.html" data-type="entity-link" >ResetCountShowAds</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resource.html" data-type="entity-link" >Resource</a>
                            </li>
                            <li class="link">
                                <a href="classes/RootObject.html" data-type="entity-link" >RootObject</a>
                            </li>
                            <li class="link">
                                <a href="classes/SendMessageSerializer.html" data-type="entity-link" >SendMessageSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignInSerializer.html" data-type="entity-link" >SignInSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/TermsOfUseSerializer.html" data-type="entity-link" >TermsOfUseSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/TermsOfUseSerializer-1.html" data-type="entity-link" >TermsOfUseSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateDataSerializer.html" data-type="entity-link" >UpdateDataSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePictureByOrderSerializer.html" data-type="entity-link" >UpdatePictureByOrderSerializer</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileSerializer.html" data-type="entity-link" >UserProfileSerializer</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CalculateHoursAgoService.html" data-type="entity-link" >CalculateHoursAgoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChangeMaskService.html" data-type="entity-link" >ChangeMaskService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChangePasswordService.html" data-type="entity-link" >ChangePasswordService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ChatConnectorService.html" data-type="entity-link" >ChatConnectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DialogsService.html" data-type="entity-link" >DialogsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GenerateHashQrcodeService.html" data-type="entity-link" >GenerateHashQrcodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetAddressLatLongService.html" data-type="entity-link" >GetAddressLatLongService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetChatService.html" data-type="entity-link" >GetChatService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetCidsService.html" data-type="entity-link" >GetCidsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetHosptalsService.html" data-type="entity-link" >GetHosptalsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetMatchesService.html" data-type="entity-link" >GetMatchesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetMedicalProceduresService.html" data-type="entity-link" >GetMedicalProceduresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetMedicinesService.html" data-type="entity-link" >GetMedicinesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetSelectsSpecialPersonService.html" data-type="entity-link" >GetSelectsSpecialPersonService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GetSugestionMatchsService.html" data-type="entity-link" >GetSugestionMatchsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link" >HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LikeDislikeService.html" data-type="entity-link" >LikeDislikeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LikedMeService.html" data-type="entity-link" >LikedMeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ListCardsService.html" data-type="entity-link" >ListCardsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocationService.html" data-type="entity-link" >LocationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginGoogleService.html" data-type="entity-link" >LoginGoogleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginQrcodeConnectorService.html" data-type="entity-link" >LoginQrcodeConnectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MatchesConnectorService.html" data-type="entity-link" >MatchesConnectorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlacesAutoCompleteService.html" data-type="entity-link" >PlacesAutoCompleteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrivacyPolicyServiceEn.html" data-type="entity-link" >PrivacyPolicyServiceEn</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrivacyPolicyServicePt.html" data-type="entity-link" >PrivacyPolicyServicePt</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProfilePicturesService.html" data-type="entity-link" >ProfilePicturesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PusherAuthService.html" data-type="entity-link" >PusherAuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReadHashQrcodeService.html" data-type="entity-link" >ReadHashQrcodeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RegisterService.html" data-type="entity-link" >RegisterService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RouteService.html" data-type="entity-link" >RouteService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SendMessageService.html" data-type="entity-link" >SendMessageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignInService.html" data-type="entity-link" >SignInService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SnackBarService.html" data-type="entity-link" >SnackBarService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StateManagementFuncService.html" data-type="entity-link" >StateManagementFuncService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TermsOfUseServiceEn.html" data-type="entity-link" >TermsOfUseServiceEn</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TermsOfUseServicePt.html" data-type="entity-link" >TermsOfUseServicePt</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformAgeService.html" data-type="entity-link" >TransformAgeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TranslateService.html" data-type="entity-link" >TranslateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdateDataService.html" data-type="entity-link" >UpdateDataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UpdatePictureByOrderService.html" data-type="entity-link" >UpdatePictureByOrderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserProfileService.html" data-type="entity-link" >UserProfileService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VerifyEmailService.html" data-type="entity-link" >VerifyEmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VerifyStageRegisterDataService.html" data-type="entity-link" >VerifyStageRegisterDataService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuardService.html" data-type="entity-link" >AuthGuardService</a>
                            </li>
                            <li class="link">
                                <a href="guards/LoggedService.html" data-type="entity-link" >LoggedService</a>
                            </li>
                            <li class="link">
                                <a href="guards/UserRegistredCorrectService.html" data-type="entity-link" >UserRegistredCorrectService</a>
                            </li>
                            <li class="link">
                                <a href="guards/WhoAreYouRegistredCorrectService.html" data-type="entity-link" >WhoAreYouRegistredCorrectService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AddressComponent.html" data-type="entity-link" >AddressComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Bounds.html" data-type="entity-link" >Bounds</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Datum.html" data-type="entity-link" >Datum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Datum-1.html" data-type="entity-link" >Datum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Datum-2.html" data-type="entity-link" >Datum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Datum-3.html" data-type="entity-link" >Datum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/defaultDataAnyway.html" data-type="entity-link" >defaultDataAnyway</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Geometry.html" data-type="entity-link" >Geometry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppState.html" data-type="entity-link" >IAppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IData.html" data-type="entity-link" >IData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IData-1.html" data-type="entity-link" >IData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataQrcode.html" data-type="entity-link" >IDataQrcode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IHeaderCardsInitialPage.html" data-type="entity-link" >IHeaderCardsInitialPage</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModelCardImgTitleText.html" data-type="entity-link" >IModelCardImgTitleText</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRootObject.html" data-type="entity-link" >IRootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRootObject-1.html" data-type="entity-link" >IRootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRootObject-2.html" data-type="entity-link" >IRootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRootObject-3.html" data-type="entity-link" >IRootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRootObject-4.html" data-type="entity-link" >IRootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRootObject-5.html" data-type="entity-link" >IRootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRootObject-6.html" data-type="entity-link" >IRootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRootObjetct.html" data-type="entity-link" >IRootObjetct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRootObjetct-1.html" data-type="entity-link" >IRootObjetct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Link.html" data-type="entity-link" >Link</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Link-1.html" data-type="entity-link" >Link</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Link-2.html" data-type="entity-link" >Link</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Link-3.html" data-type="entity-link" >Link</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Location.html" data-type="entity-link" >Location</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MainTextMatchedSubstring.html" data-type="entity-link" >MainTextMatchedSubstring</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MatchedSubstring.html" data-type="entity-link" >MatchedSubstring</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Northeast.html" data-type="entity-link" >Northeast</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Northeast2.html" data-type="entity-link" >Northeast2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlusCode.html" data-type="entity-link" >PlusCode</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlusCode2.html" data-type="entity-link" >PlusCode2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Prediction.html" data-type="entity-link" >Prediction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfilePicture.html" data-type="entity-link" >ProfilePicture</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProfilePicture-1.html" data-type="entity-link" >ProfilePicture</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseErrors.html" data-type="entity-link" >ResponseErrors</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Result.html" data-type="entity-link" >Result</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RootObject.html" data-type="entity-link" >RootObject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SecondaryTextMatchedSubstring.html" data-type="entity-link" >SecondaryTextMatchedSubstring</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Serializer.html" data-type="entity-link" >Serializer</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Southwest.html" data-type="entity-link" >Southwest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Southwest2.html" data-type="entity-link" >Southwest2</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StructuredFormatting.html" data-type="entity-link" >StructuredFormatting</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Target.html" data-type="entity-link" >Target</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Term.html" data-type="entity-link" >Term</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/textHeader.html" data-type="entity-link" >textHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/titleHeader.html" data-type="entity-link" >titleHeader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Viewport.html" data-type="entity-link" >Viewport</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});