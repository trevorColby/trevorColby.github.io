"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SectionComponent = /** @class */ (function () {
    function SectionComponent(element) {
        this.element = element;
        this.sectionPosition = new core_1.EventEmitter();
    }
    SectionComponent.prototype.ngOnInit = function () {
        this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
    };
    SectionComponent.prototype.onResize = function (event) {
        this.sectionPosition.emit({ name: this.content.name, position: this.element.nativeElement.offsetTop });
    };
    __decorate([
        core_1.Output()
    ], SectionComponent.prototype, "sectionPosition", void 0);
    __decorate([
        core_1.Input()
    ], SectionComponent.prototype, "content", void 0);
    __decorate([
        core_1.HostListener('window:resize', ['$event'])
    ], SectionComponent.prototype, "onResize", null);
    SectionComponent = __decorate([
        core_1.Component({
            selector: 'section',
            templateUrl: 'section/section.component.html',
            styleUrls: ['section/section.component.css']
        })
    ], SectionComponent);
    return SectionComponent;
}());
exports.SectionComponent = SectionComponent;
//# sourceMappingURL=component.js.map