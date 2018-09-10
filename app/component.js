"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.sections = [
            { name: "Bird", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Hummingbird.jpg/320px-Hummingbird.jpg" },
            { name: "Wheel", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/The_OC_Fair_ferris_wheel.jpg/320px-The_OC_Fair_ferris_wheel.jpg" },
            { name: "Horses", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/D%C3%BClmen%2C_Merfeld%2C_D%C3%BClmener_Wildpferde_in_der_Wildbahn_--_2016_--_4740.jpg/320px-D%C3%BClmen%2C_Merfeld%2C_D%C3%BClmener_Wildpferde_in_der_Wildbahn_--_2016_--_4740.jpg" },
            { name: "Lamp", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Gl%C3%BChlampe_explodiert.jpg/320px-Gl%C3%BChlampe_explodiert.jpg" }
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-body',
            template: "<container [sections]=\"sections\"></container>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=component.js.map