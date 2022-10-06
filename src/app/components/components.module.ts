import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule ({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        CommonModule,
        IonicModule,RouterModule    ],
    exports: [
        HeaderComponent,
        
    ]
})

export class ComponentsModule {}