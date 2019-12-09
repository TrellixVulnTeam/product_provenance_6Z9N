(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-admin-layout-admin-layout-module"],{

/***/ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js":
/*!*****************************************************!*\
  !*** ./node_modules/ngx-toastr/fesm5/ngx-toastr.js ***!
  \*****************************************************/
/*! exports provided: BasePortalHost, ComponentPortal, DefaultGlobalConfig, DefaultNoAnimationsGlobalConfig, DefaultNoComponentGlobalConfig, Overlay, OverlayContainer, OverlayRef, TOAST_CONFIG, Toast, ToastContainerDirective, ToastContainerModule, ToastInjector, ToastNoAnimation, ToastNoAnimationModule, ToastPackage, ToastRef, ToastrComponentlessModule, ToastrModule, ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasePortalHost", function() { return BasePortalHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentPortal", function() { return ComponentPortal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultGlobalConfig", function() { return DefaultGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultNoAnimationsGlobalConfig", function() { return DefaultNoAnimationsGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultNoComponentGlobalConfig", function() { return DefaultNoComponentGlobalConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return Overlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer", function() { return OverlayContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRef", function() { return OverlayRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOAST_CONFIG", function() { return TOAST_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerDirective", function() { return ToastContainerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastContainerModule", function() { return ToastContainerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastInjector", function() { return ToastInjector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoAnimation", function() { return ToastNoAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastNoAnimationModule", function() { return ToastNoAnimationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastPackage", function() { return ToastPackage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastRef", function() { return ToastRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrComponentlessModule", function() { return ToastrComponentlessModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrModule", function() { return ToastrModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var ToastContainerDirective = /** @class */ (function () {
    function ToastContainerDirective(el) {
        this.el = el;
    }
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    ToastContainerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[toastContainer]',
            exportAs: 'toastContainer',
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ToastContainerDirective);
    return ToastContainerDirective;
}());
var ToastContainerModule = /** @class */ (function () {
    function ToastContainerModule() {
    }
    ToastContainerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [ToastContainerDirective],
            exports: [ToastContainerDirective],
        })
    ], ToastContainerModule);
    return ToastContainerModule;
}());

/**
 * Everything a toast needs to launch
 */
var ToastPackage = /** @class */ (function () {
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        var _this = this;
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.toastRef.afterClosed().subscribe(function () {
            _this._onAction.complete();
            _this._onTap.complete();
        });
    }
    /** Fired on click */
    ToastPackage.prototype.triggerTap = function () {
        this._onTap.next();
        if (this.config.tapToDismiss) {
            this._onTap.complete();
        }
    };
    ToastPackage.prototype.onTap = function () {
        return this._onTap.asObservable();
    };
    /** available for use in custom toast */
    ToastPackage.prototype.triggerAction = function (action) {
        this._onAction.next(action);
    };
    ToastPackage.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());
var DefaultNoComponentGlobalConfig = {
    maxOpened: 0,
    autoDismiss: false,
    newestOnTop: true,
    preventDuplicates: false,
    countDuplicates: false,
    resetTimeoutOnDuplicate: false,
    iconClasses: {
        error: 'toast-error',
        info: 'toast-info',
        success: 'toast-success',
        warning: 'toast-warning',
    },
    // Individual
    closeButton: false,
    disableTimeOut: false,
    timeOut: 5000,
    extendedTimeOut: 1000,
    enableHtml: false,
    progressBar: false,
    toastClass: 'ngx-toastr',
    positionClass: 'toast-top-right',
    titleClass: 'toast-title',
    messageClass: 'toast-message',
    easing: 'ease-in',
    easeTime: 300,
    tapToDismiss: true,
    onActivateTick: false,
    progressAnimation: 'decreasing',
};
var TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('ToastConfig');

/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = /** @class */ (function () {
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /** Attach this portal to a host. */
    ComponentPortal.prototype.attach = function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /** Detach this portal from its host */
    ComponentPortal.prototype.detach = function () {
        var host = this._attachedHost;
        if (host) {
            this._attachedHost = undefined;
            return host.detach();
        }
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    ComponentPortal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 */
var BasePortalHost = /** @class */ (function () {
    function BasePortalHost() {
    }
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost();
        }
        this._attachedPortal = undefined;
        if (this._disposeFn) {
            this._disposeFn();
            this._disposeFn = undefined;
        }
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @param portal Portal to be attached
     */
    DomPortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(BasePortalHost));

/** Container inside which all toasts will render. */
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer(_document) {
        this._document = _document;
    }
    OverlayContainer.prototype.ngOnDestroy = function () {
        if (this._containerElement && this._containerElement.parentNode) {
            this._containerElement.parentNode.removeChild(this._containerElement);
        }
    };
    /**
     * This method returns the overlay container element. It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        var container = this._document.createElement('div');
        container.classList.add('overlay-container');
        this._document.body.appendChild(container);
        this._containerElement = container;
    };
    OverlayContainer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function OverlayContainer_Factory() { return new OverlayContainer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: OverlayContainer, providedIn: "root" });
    OverlayContainer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], OverlayContainer);
    return OverlayContainer;
}());

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = /** @class */ (function () {
    function OverlayRef(_portalHost) {
        this._portalHost = _portalHost;
    }
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        if (newestOnTop === void 0) { newestOnTop = true; }
        return this._portalHost.attach(portal, newestOnTop);
    };
    /**
     * Detaches an overlay from a portal.
     * @returns Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());

/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
var Overlay = /** @class */ (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._document = _document;
        // Namespace panes by overlay container
        this._paneElements = new Map();
    }
    /**
     * Creates an overlay.
     * @returns A reference to the created overlay.
     */
    Overlay.prototype.create = function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    Overlay.prototype.getPaneElement = function (positionClass, overlayContainer) {
        if (positionClass === void 0) { positionClass = ''; }
        if (!this._paneElements.get(overlayContainer)) {
            this._paneElements.set(overlayContainer, {});
        }
        if (!this._paneElements.get(overlayContainer)[positionClass]) {
            this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements.get(overlayContainer)[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (positionClass, overlayContainer) {
        var pane = this._document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        pane.classList.add('toast-container');
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     */
    Overlay.prototype._createOverlayRef = function (pane) {
        return new OverlayRef(this._createPortalHost(pane));
    };
    Overlay.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function Overlay_Factory() { return new Overlay(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(OverlayContainer), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])); }, token: Overlay, providedIn: "root" });
    Overlay = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [OverlayContainer,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], Object])
    ], Overlay);
    return Overlay;
}());

/**
 * Reference to a toast opened via the Toastr service.
 */
var ToastRef = /** @class */ (function () {
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Count of duplicates of this toast */
        this.duplicatesCount = 0;
        /** Subject for notifying the user that the toast has finished closing. */
        this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** triggered when toast is activated */
        this._activate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** notifies the toast that it should close before the timeout */
        this._manualClose = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** notifies the toast that it should reset the timeouts */
        this._resetTimeout = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** notifies the toast that it should count a duplicate toast */
        this._countDuplicate = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ToastRef.prototype.manualClose = function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    ToastRef.prototype.manualClosed = function () {
        return this._manualClose.asObservable();
    };
    ToastRef.prototype.timeoutReset = function () {
        return this._resetTimeout.asObservable();
    };
    ToastRef.prototype.countDuplicate = function () {
        return this._countDuplicate.asObservable();
    };
    /**
     * Close the toast.
     */
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._manualClose.next();
        this._afterClosed.complete();
        this._manualClose.complete();
        this._activate.complete();
        this._resetTimeout.complete();
        this._countDuplicate.complete();
    };
    /** Gets an observable that is notified when the toast is finished closing. */
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    ToastRef.prototype.isInactive = function () {
        return this._activate.isStopped;
    };
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    /** Gets an observable that is notified when the toast has started opening. */
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    /** Reset the toast timouts and count duplicates */
    ToastRef.prototype.onDuplicate = function (resetTimeout, countDuplicate) {
        if (resetTimeout) {
            this._resetTimeout.next();
        }
        if (countDuplicate) {
            this._countDuplicate.next(++this.duplicatesCount);
        }
    };
    return ToastRef;
}());
/** Custom injector type specifically for instantiating components with a toast. */
var ToastInjector = /** @class */ (function () {
    function ToastInjector(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    ToastInjector.prototype.get = function (token, notFoundValue, flags) {
        if (token === ToastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue, flags);
    };
    return ToastInjector;
}());

var ToastrService = /** @class */ (function () {
    function ToastrService(token, overlay, _injector, sanitizer, ngZone) {
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.ngZone = ngZone;
        this.currentlyActive = 0;
        this.toasts = [];
        this.index = 0;
        this.toastrConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, token.default, token.config);
        if (token.config.iconClasses) {
            this.toastrConfig.iconClasses = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, token.default.iconClasses, token.config.iconClasses);
        }
    }
    /** show toast */
    ToastrService.prototype.show = function (message, title, override, type) {
        if (override === void 0) { override = {}; }
        if (type === void 0) { type = ''; }
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show successful toast */
    ToastrService.prototype.success = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.success || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show error toast */
    ToastrService.prototype.error = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.error || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show info toast */
    ToastrService.prototype.info = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.info || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /** show warning toast */
    ToastrService.prototype.warning = function (message, title, override) {
        if (override === void 0) { override = {}; }
        var type = this.toastrConfig.iconClasses.warning || '';
        return this._preBuildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * Remove all or a single toast by id
     */
    ToastrService.prototype.clear = function (toastId) {
        var e_1, _a;
        try {
            // Call every toastRef manualClose function
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.toasts), _c = _b.next(); !_c.done; _c = _b.next()) {
                var toast = _c.value;
                if (toastId !== undefined) {
                    if (toast.toastId === toastId) {
                        toast.toastRef.manualClose();
                        return;
                    }
                }
                else {
                    toast.toastRef.manualClose();
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Remove and destroy a single toast by id
     */
    ToastrService.prototype.remove = function (toastId) {
        var found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastrConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive < this.toastrConfig.maxOpened &&
            this.toasts[this.currentlyActive]) {
            var p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Determines if toast message is already shown
     */
    ToastrService.prototype.findDuplicate = function (message, resetOnDuplicate, countDuplicates) {
        for (var i = 0; i < this.toasts.length; i++) {
            var toast = this.toasts[i];
            if (toast.message === message) {
                toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
                return toast;
            }
        }
        return null;
    };
    /** create a clone of global config and apply individual settings */
    ToastrService.prototype.applyConfig = function (override) {
        if (override === void 0) { override = {}; }
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.toastrConfig, override);
    };
    /**
     * Find toast object by id
     */
    ToastrService.prototype._findToast = function (toastId) {
        for (var i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    /**
     * Determines the need to run inside angular's zone then builds the toast
     */
    ToastrService.prototype._preBuildNotification = function (toastType, message, title, config) {
        var _this = this;
        if (config.onActivateTick) {
            return this.ngZone.run(function () {
                return _this._buildNotification(toastType, message, title, config);
            });
        }
        return this._buildNotification(toastType, message, title, config);
    };
    /**
     * Creates and attaches toast data to component
     * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
     */
    ToastrService.prototype._buildNotification = function (toastType, message, title, config) {
        var _this = this;
        if (!config.toastComponent) {
            throw new Error('toastComponent required');
        }
        // max opened and auto dismiss = true
        var duplicate = this.findDuplicate(message, this.toastrConfig.resetTimeoutOnDuplicate, this.toastrConfig.countDuplicates);
        if (message && this.toastrConfig.preventDuplicates && duplicate !== null) {
            return duplicate;
        }
        this.previousToastMessage = message;
        var keepInactive = false;
        if (this.toastrConfig.maxOpened &&
            this.currentlyActive >= this.toastrConfig.maxOpened) {
            keepInactive = true;
            if (this.toastrConfig.autoDismiss) {
                this.clear(this.toasts[0].toastId);
            }
        }
        var overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        var sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, message);
        }
        var toastRef = new ToastRef(overlayRef);
        var toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        var toastInjector = new ToastInjector(toastPackage, this._injector);
        var component = new ComponentPortal(config.toastComponent, toastInjector);
        var portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
        toastRef.componentInstance = portal._component;
        var ins = {
            toastId: this.index,
            message: message || '',
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterClosed(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
            portal: portal
        };
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    ToastrService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function ToastrService_Factory() { return new ToastrService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(TOAST_CONFIG), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(Overlay), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"])); }, token: ToastrService, providedIn: "root" });
    ToastrService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(TOAST_CONFIG)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, Overlay,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], ToastrService);
    return ToastrService;
}());

var Toast = /** @class */ (function () {
    function Toast(toastrService, toastPackage, ngZone) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.ngZone = ngZone;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = {
            value: 'inactive',
            params: {
                easeTime: this.toastPackage.config.easeTime,
                easing: 'ease-in'
            }
        };
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this.duplicatesCount = count;
        });
    }
    Object.defineProperty(Toast.prototype, "displayStyle", {
        /** hides component when waiting to be displayed */
        get: function () {
            if (this.state.value === 'inactive') {
                return 'none';
            }
            return 'inherit';
        },
        enumerable: true,
        configurable: true
    });
    Toast.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    Toast.prototype.activateToast = function () {
        var _this = this;
        this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state, { value: 'active' });
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.outsideTimeout(function () { return _this.remove(); }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.outsideInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
    };
    /**
     * updates progress bar width
     */
    Toast.prototype.updateProgress = function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    Toast.prototype.resetTimeout = function () {
        var _this = this;
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state, { value: 'active' });
        this.outsideTimeout(function () { return _this.remove(); }, this.originalTimeout);
        this.options.timeOut = this.originalTimeout;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    Toast.prototype.remove = function () {
        var _this = this;
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state, { value: 'removed' });
        this.outsideTimeout(function () { return _this.toastrService.remove(_this.toastPackage.toastId); }, +this.toastPackage.config.easeTime);
    };
    Toast.prototype.tapToast = function () {
        if (this.state.value === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    Toast.prototype.stickAround = function () {
        if (this.state.value === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    Toast.prototype.delayedHideToast = function () {
        var _this = this;
        if (this.options.disableTimeOut ||
            this.options.extendedTimeOut === 0 ||
            this.state.value === 'removed') {
            return;
        }
        this.outsideTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.outsideInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    Toast.prototype.outsideTimeout = function (func, timeout) {
        var _this = this;
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () {
                return (_this.timeout = setTimeout(function () { return _this.runInsideAngular(func); }, timeout));
            });
        }
        else {
            this.timeout = setTimeout(function () { return func(); }, timeout);
        }
    };
    Toast.prototype.outsideInterval = function (func, timeout) {
        var _this = this;
        if (this.ngZone) {
            this.ngZone.runOutsideAngular(function () {
                return (_this.intervalId = setInterval(function () { return _this.runInsideAngular(func); }, timeout));
            });
        }
        else {
            this.intervalId = setInterval(function () { return func(); }, timeout);
        }
    };
    Toast.prototype.runInsideAngular = function (func) {
        if (this.ngZone) {
            this.ngZone.run(function () { return func(); });
        }
        else {
            func();
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Toast.prototype, "toastClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@flyInOut'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], Toast.prototype, "state", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], Toast.prototype, "displayStyle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], Toast.prototype, "tapToast", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], Toast.prototype, "stickAround", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], Toast.prototype, "delayedHideToast", null);
    Toast = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[toast-component]',
            template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alertdialog\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{ easeTime }}ms {{ easing }}')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('{{ easeTime }}ms {{ easing }}'))
                ])
            ],
            preserveWhitespaces: false
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ToastrService,
            ToastPackage,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], Toast);
    return Toast;
}());

var DefaultGlobalConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DefaultNoComponentGlobalConfig, { toastComponent: Toast });
var ToastrModule = /** @class */ (function () {
    function ToastrModule() {
    }
    ToastrModule_1 = ToastrModule;
    ToastrModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastrModule_1,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultGlobalConfig,
                        config: config,
                    },
                },
            ],
        };
    };
    var ToastrModule_1;
    ToastrModule = ToastrModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            declarations: [Toast],
            exports: [Toast],
            entryComponents: [Toast],
        })
    ], ToastrModule);
    return ToastrModule;
}());
var ToastrComponentlessModule = /** @class */ (function () {
    function ToastrComponentlessModule() {
    }
    ToastrComponentlessModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastrModule,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultNoComponentGlobalConfig,
                        config: config,
                    },
                },
            ],
        };
    };
    ToastrComponentlessModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
        })
    ], ToastrComponentlessModule);
    return ToastrComponentlessModule;
}());

var ToastNoAnimation = /** @class */ (function () {
    function ToastNoAnimation(toastrService, toastPackage, appRef) {
        var _this = this;
        this.toastrService = toastrService;
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /** width of progress bar */
        this.width = -1;
        /** a combination of toast type and options.toastClass */
        this.toastClasses = '';
        /** controls animation */
        this.state = 'inactive';
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.originalTimeout = toastPackage.config.timeOut;
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
        this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(function () {
            _this.resetTimeout();
        });
        this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(function (count) {
            _this.duplicatesCount = count;
        });
    }
    Object.defineProperty(ToastNoAnimation.prototype, "displayStyle", {
        /** hides component when waiting to be displayed */
        get: function () {
            if (this.state === 'inactive') {
                return 'none';
            }
            return 'inherit';
        },
        enumerable: true,
        configurable: true
    });
    ToastNoAnimation.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub3.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     */
    ToastNoAnimation.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        if (!this.options.disableTimeOut && this.options.timeOut) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     */
    ToastNoAnimation.prototype.updateProgress = function () {
        if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
            return;
        }
        var now = new Date().getTime();
        var remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.options.progressAnimation === 'increasing') {
            this.width = 100 - this.width;
        }
        if (this.width <= 0) {
            this.width = 0;
        }
        if (this.width >= 100) {
            this.width = 100;
        }
    };
    ToastNoAnimation.prototype.resetTimeout = function () {
        var _this = this;
        clearTimeout(this.timeout);
        clearInterval(this.intervalId);
        this.state = 'active';
        this.options.timeOut = this.originalTimeout;
        this.timeout = setTimeout(function () { return _this.remove(); }, this.originalTimeout);
        this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     */
    ToastNoAnimation.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () {
            return _this.toastrService.remove(_this.toastPackage.toastId);
        });
    };
    ToastNoAnimation.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    ToastNoAnimation.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    ToastNoAnimation.prototype.delayedHideToast = function () {
        var _this = this;
        if (this.options.disableTimeOut ||
            this.options.extendedTimeOut === 0 ||
            this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
        this.width = -1;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ToastNoAnimation.prototype, "toastClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('style.display'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ToastNoAnimation.prototype, "displayStyle", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], ToastNoAnimation.prototype, "tapToast", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], ToastNoAnimation.prototype, "stickAround", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], ToastNoAnimation.prototype, "delayedHideToast", null);
    ToastNoAnimation = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: '[toast-component]',
            template: "\n  <button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n  <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n    {{ title }} <ng-container *ngIf=\"duplicatesCount\">[{{ duplicatesCount + 1 }}]</ng-container>\n  </div>\n  <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [innerHTML]=\"message\">\n  </div>\n  <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n    [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n    {{ message }}\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>\n  "
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ToastrService,
            ToastPackage,
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]])
    ], ToastNoAnimation);
    return ToastNoAnimation;
}());
var DefaultNoAnimationsGlobalConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DefaultNoComponentGlobalConfig, { toastComponent: ToastNoAnimation });
var ToastNoAnimationModule = /** @class */ (function () {
    function ToastNoAnimationModule() {
    }
    ToastNoAnimationModule_1 = ToastNoAnimationModule;
    ToastNoAnimationModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: ToastNoAnimationModule_1,
            providers: [
                {
                    provide: TOAST_CONFIG,
                    useValue: {
                        default: DefaultNoAnimationsGlobalConfig,
                        config: config,
                    },
                },
            ],
        };
    };
    var ToastNoAnimationModule_1;
    ToastNoAnimationModule = ToastNoAnimationModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
            declarations: [ToastNoAnimation],
            exports: [ToastNoAnimation],
            entryComponents: [ToastNoAnimation],
        })
    ], ToastNoAnimationModule);
    return ToastNoAnimationModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ngx-toastr.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/batch-history/batch-history.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/batch-history/batch-history.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\" content\">\r\n\r\n    <div class=\" row\">\r\n        <div class=\" col-md-12\">\r\n          <div class=\" card\">\r\n            <div class=\" card-header\">\r\n              <h4 class=\" card-title\">Batch History </h4>\r\n            </div>\r\n            <div class=\" card-body\">\r\n              <!-- <div class=\" table-responsive\"></div> -->\r\n                <table class=\" table tablesorter\" id=\"\">\r\n                    \r\n                        <thead>\r\n                          <tr>\r\n                            <!-- <th class=\"text-center\">#ID</th> -->\r\n                            <th>Product Name</th>\r\n                            <th>Product Desc</th>\r\n                            <th>Product Type</th>\r\n                            <th>Package Type</th>\r\n                            <th>Net Weight (kgs)</th>\r\n                            <th>Product Price</th>\r\n                            <th>Taxed amount</th>\r\n                            \r\n                           \r\n                            <th class=\"text-right\">History</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr>\r\n                            <!-- <td class=\"text-center\">1</td> -->\r\n                            <td>OMO</td>\r\n                            <td>Powdered Detergent</td>\r\n                            <td>Convenience</td>\r\n                            <td>Poly Bag</td>\r\n                            <td>0.5</td>\r\n                            <td>500</td>\r\n                            <td>80</td>\r\n                           \r\n                            \r\n                            <td class=\"td-actions text-right\">\r\n                               \r\n                                    <!-- <button\r\n                                      rel=\"tooltip\"\r\n                                      class=\" btn btn-primary btn-round\"\r\n                                      (click)=\"showNotification('bottom', 'right')\">\r\n                                      Generate Batch Codes\r\n                                    </button> -->\r\n                                  \r\n                             \r\n                                <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open History</button>\r\n                              \r\n                            </td>\r\n                          </tr>\r\n\r\n\r\n                          <tr>\r\n                              <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n                                                      \r\n<!-- <div class=\"container\"> -->\r\n \r\n  <!-- Trigger the modal with a button -->\r\n  <!-- <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button> -->\r\n\r\n  <!-- Modal -->\r\n  <!-- <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\r\n    <div class=\"modal-dialog\"> -->\r\n    \r\n      <!-- Modal content-->\r\n      <!-- <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Modal Header</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Some text in the modal.</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n  \r\n</div> -->\r\n                          </tr>\r\n                          \r\n                          \r\n                        </tbody>\r\n                      </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n  </div>\r\n\r\n \r\n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/create-product/create-product.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/create-product/create-product.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\" content\">\r\n  \r\n\r\n    <div class=\" row\">\r\n        <!------------------------------------------------------------------------------------------------>\r\n        <!------------------------------------------------------------------------------------------------>\r\n        <div class=\" card\">\r\n          <div class=\" card-header\"><h5 class=\" title\">Create Product </h5></div>\r\n          <div class=\" card-body\">\r\n            <form>\r\n              <!------------------------------------------------------------------------------------------------>\r\n              <div class=\" row\">\r\n                  <div class=\" col-md-12\">\r\n                    <div class=\" form-group\">\r\n                      <label> Product Name </label>\r\n                      <input\r\n                        class=\" form-control\"\r\n                        placeholder=\"Product Name\"\r\n                        type=\"text\"\r\n                        value=\"\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\" row\">\r\n                    <div class=\" col-md-8\">\r\n                      <div class=\" form-group\">\r\n                        <label> Product Description </label>\r\n                        <textarea\r\n                          class=\" form-control\"\r\n                          cols=\"80\"\r\n                          placeholder=\"Here can be your description\"\r\n                          rows=\"4\"\r\n                          value=\"\">\r\n                          \r\n                        </textarea                >\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n             \r\n              <!-- <div class=\" row\">\r\n                  <div class=\" col-md-4 pr-md-1\">\r\n                    <div class=\" form-group\">\r\n                      <label> Product Type </label>\r\n                      <input\r\n                        class=\" form-control\"\r\n                        placeholder=\"Product Type\"\r\n                        type=\"text\"\r\n                        value=\"\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\" col-md-4 px-md-1\">\r\n                    <div class=\" form-group\">\r\n                      <label> Net Weight </label>\r\n                      <input\r\n                        class=\" form-control\"\r\n                        placeholder=\"Net Weight\"\r\n                        type=\"number\"\r\n                        value=\"\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\" col-md-4 pl-md-1\">\r\n                    <div class=\" form-group\">\r\n                      <label> Package Type</label>\r\n                      <input\r\n                        class=\" form-control\"\r\n                        placeholder=\"\"\r\n                        type=\"text\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n  \r\n            <div class=\" row\">\r\n              <div class=\" col-md-6 pr-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Product Price</label>\r\n                  <input\r\n                    class=\" form-control\"\r\n                    placeholder=\"press enter after input\"\r\n                    type=\"number\"\r\n                    value=\"\"\r\n                    name=\"productPrice\"\r\n                    onsearch=\"calculatetax()\"\r\n                  />\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\" col-md-6 pl-md-1\">\r\n                <div class=\" form-group\">\r\n                  <label> Taxed amount</label>\r\n                  <input\r\n                    class=\" form-control\"\r\n                    placeholder=\"\"\r\n                    type=\"number\"\r\n                    name=\"tax\"\r\n                    disabled/>\r\n                </div>\r\n              </div>\r\n              <script>\r\n                  function calculatetax() {\r\n                      var productPrice = document.getElementById('productPrice').value;\r\n                      \r\n                      var taxes = (0.16 * productPrice) * (quantity) ;\r\n                      var totalTax = document.getElementById('tax');\r\n                      totalTax.value = taxes;\r\n                  }\r\n              </script>\r\n  \r\n              \r\n            </div> -->\r\n  \r\n            <button type=\"button\" rel=\"tooltip\" class=\"btn btn-primary\">\r\n              <i class=\"material-icons\">CREATE</i>\r\n            </button>\r\n    \r\n        </form>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  \r\n  \r\n  <!----------------------------------------------------------------------------------------------------------------------------------------->\r\n  <!----------------------------------------------------------------------------------------------------------------------------------------->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-12\">\n      <div class=\" card card-chart\">\n        <div class=\" card-header\">\n          <div class=\" row\">\n            <div class=\" col-sm-6 text-left\">\n              \n              <h1 class=\" card-title\">Welcome to </h1>\n              <h1 class=\" card-title\">NUMBER SERIES </h1>\n            <!-- </br> <h1>Number Series</h1> -->\n            </div>\n            \n            </div>\n          </div>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" chart-area\"><canvas id=\"chartBig1\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/icons/icons.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/icons/icons.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\" content\">\n\n    <div class=\" row\">\n        <div class=\" col-md-12\">\n          <div class=\" card\">\n            <div class=\" card-header\">\n              <h4 class=\" card-title\">Batch History </h4>\n            </div>\n            <div class=\" card-body\">\n              <!-- <div class=\" table-responsive\"></div> -->\n                <table class=\" table tablesorter\" id=\"\">\n                    \n                        <thead>\n                          <tr>\n                            <!-- <th class=\"text-center\">#ID</th> -->\n                            <th>Product Name</th>\n                            <th>Product Desc</th>\n                            <th>Product Type</th>\n                            <th>Package Type</th>\n                            <th>Net Weight (kgs)</th>\n                            <th>Product Price</th>\n                            <th>Taxed amount</th>\n                            \n                           \n                            <th class=\"text-right\">History</th>\n                          </tr>\n                        </thead>\n                        <tbody>\n                          <tr>\n                            <!-- <td class=\"text-center\">1</td> -->\n                            <td>OMO</td>\n                            <td>Powdered Detergent</td>\n                            <td>Convenience</td>\n                            <td>Poly Bag</td>\n                            <td>0.5</td>\n                            <td>500</td>\n                            <td>80</td>\n                           \n                            \n                            <td class=\"td-actions text-right\">\n                               \n                                    <!-- <button\n                                      rel=\"tooltip\"\n                                      class=\" btn btn-primary btn-round\"\n                                      (click)=\"showNotification('bottom', 'right')\">\n                                      Generate Batch Codes\n                                    </button> -->\n                                  \n                             \n                                <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open History</button>\n                              \n                            </td>\n                          </tr>\n\n\n                          <tr>\n                              <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\n                                                      \n<!-- <div class=\"container\"> -->\n \n  <!-- Trigger the modal with a button -->\n  <!-- <button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button> -->\n\n  <!-- Modal -->\n  <!-- <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\"> -->\n    \n      <!-- Modal content-->\n      <!-- <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          <h4 class=\"modal-title\">Modal Header</h4>\n        </div>\n        <div class=\"modal-body\">\n          <p>Some text in the modal.</p>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n  \n</div> -->\n                          </tr>\n                          \n                          \n                        </tbody>\n                      </table>\n              </div>\n            </div>\n          </div>\n        </div>\n  </div>\n\n \n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/map/map.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/map/map.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-md-12\">\n      <div class=\" card card-plain\">\n        <div class=\" card-header\">Google Maps</div>\n        <div class=\" card-body\"><div class=\" map\" id=\"map\"></div></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/notifications/notifications.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/notifications/notifications.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-md-6\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Notifications Style</h4>\n        </div>\n        <div class=\" card-body\">\n          <ngb-alert [type]=\"'info'\" [dismissible]=\"false\">\n            <span> This is a plain notification </span>\n          </ngb-alert>\n          <ngb-alert [type]=\"'info'\" *ngIf=\"!staticAlertClosed\" [dismissible]=\"false\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"staticAlertClosed = true\">\n              <i class=\"tim-icons icon-simple-remove\"></i>\n            </button>\n            <span> This is a notification with close button. </span>\n          </ngb-alert>\n          <ngb-alert\n            class=\" alert-with-icon\"\n            data-notify=\"container\"\n            [type]=\"'info'\"*ngIf=\"!staticAlertClosed1\" [dismissible]=\"false\">\n              <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"staticAlertClosed1 = true\">\n                <i class=\"tim-icons icon-simple-remove\"></i>\n              </button>\n            <span class=\" tim-icons icon-bell-55\" data-notify=\"icon\">\n            </span>\n            <span data-notify=\"message\">\n              This is a notification with close button and icon.\n            </span>\n          </ngb-alert>\n          <ngb-alert\n            class=\" alert-with-icon\"\n            data-notify=\"container\"\n            [type]=\"'info'\"\n            *ngIf=\"!staticAlertClosed2\" [dismissible]=\"false\">\n              <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"staticAlertClosed2 = true\">\n                <i class=\"tim-icons icon-simple-remove\"></i>\n              </button>\n            <span class=\" tim-icons icon-bell-55\" data-notify=\"icon\">\n            </span>\n            <span data-notify=\"message\">\n              This is a notification with close button and icon and have\n              many lines. You can see that the icon and the close button\n              are always vertically aligned. This is a beautiful\n              notification. So you don't have to worry about the style.\n            </span>\n          </ngb-alert>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-md-6\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Notification states</h4>\n        </div>\n        <div class=\" card-body\">\n          <ngb-alert [type]=\"'primary'\" *ngIf=\"!staticAlertClosed3\" [dismissible]=\"false\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"staticAlertClosed3 = true\">\n              <i class=\"tim-icons icon-simple-remove\"></i>\n            </button>\n            <span>\n              <b> Primary - </b> This is a regular notification made\n              with \".alert-primary\"\n            </span>\n          </ngb-alert>\n          <ngb-alert [type]=\"'info'\" *ngIf=\"!staticAlertClosed4\" [dismissible]=\"false\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"staticAlertClosed4 = true\">\n              <i class=\"tim-icons icon-simple-remove\"></i>\n            </button>\n            <span>\n              <b> Info - </b> This is a regular notification made with\n              \".alert-info\"\n            </span>\n          </ngb-alert>\n          <ngb-alert [type]=\"'success'\" *ngIf=\"!staticAlertClosed5\" [dismissible]=\"false\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"staticAlertClosed5 = true\">\n              <i class=\"tim-icons icon-simple-remove\"></i>\n            </button>\n            <span>\n              <b> Success - </b> This is a regular notification made\n              with \".alert-success\"\n            </span>\n          </ngb-alert>\n          <ngb-alert [type]=\"'warning'\" *ngIf=\"!staticAlertClosed6\" [dismissible]=\"false\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"staticAlertClosed6 = true\">\n              <i class=\"tim-icons icon-simple-remove\"></i>\n            </button>\n            <span>\n              <b> Warning - </b> This is a regular notification made\n              with \".alert-warning\"\n            </span>\n          </ngb-alert>\n          <ngb-alert [type]=\"'danger'\" *ngIf=\"!staticAlertClosed7\" [dismissible]=\"false\">\n            <button type=\"button\" aria-hidden=\"true\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\" (click)=\"staticAlertClosed7 = true\">\n              <i class=\"tim-icons icon-simple-remove\"></i>\n            </button>\n            <span>\n              <b> Danger - </b> This is a regular notification made with\n              \".alert-danger\"\n            </span>\n          </ngb-alert>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-md-12\">\n      <div class=\" card\">\n        <div class=\" card-body\">\n          <div class=\" places-buttons\">\n            <div class=\" row\">\n              <div class=\" col-md-6 ml-auto mr-auto text-center\">\n                <h4 class=\" card-title\">Notifications Places</h4>\n                <p class=\" category\">Click to view notifications</p>\n              </div>\n            </div>\n            <div class=\" row\">\n              <div class=\" col-lg-8 ml-auto mr-auto\">\n                <div class=\" row\">\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('top', 'left')\"\n                    >\n                      Top Left\n                    </button>\n                  </div>\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('top', 'center')\"\n                    >\n                      Top Center\n                    </button>\n                  </div>\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('top', 'right')\"\n                    >\n                      Top Right\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\" row\">\n              <div class=\" col-lg-8 ml-auto mr-auto\">\n                <div class=\" row\">\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('bottom', 'left')\"\n                    >\n                      Bottom Left\n                    </button>\n                  </div>\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"\n                        showNotification('bottom', 'center')\n                      \"\n                    >\n                      Bottom Center\n                    </button>\n                  </div>\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('bottom', 'right')\"\n                    >\n                      Bottom Right\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tables/tables.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tables/tables.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-md-12\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Products</h4>\n        </div>\n        <div class=\" card-body\">\n          <!-- <div class=\" table-responsive\"></div> -->\n            <table class=\" table tablesorter\" id=\"\">\n              <thead class=\" text-primary\">\n                <tr>\n                  <th>Product Name</th>\n                  <th>Product Description</th>\n                  <th>Generate Batch Codes</th>\n                  \n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                    <td>OMO</td>\n                    <td>Powdered Detergent</td>\n                  <td>\n                      <div class=\" col-md-4\">\n                          <button\n                            class=\" btn btn-primary btn-round\"\n                            (click)=\"showNotification('bottom', 'right')\">\n                            Generate\n                          </button>\n                        </div>\n                       \n                </td>\n                 \n                </tr>\n                <tr>\n                  <td>{{productName}}</td>\n                  <td>{{productDescription}}</td>\n                  <td>\n                      <div class=\" col-md-4\">\n                          <!-- <button\n                            class=\" btn btn-primary btn-round\"\n                            (click)=\"showNotification('bottom', 'right')\">\n                            Generate\n                          </button> -->\n                        </div>\n                  </td>\n                  \n                </tr>\n               \n                \n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\" row\">\n        <div class=\" card\">\n          <div class=\" card-header\"><h5 class=\" title\">Create Product batch codes</h5></div>\n          <div class=\" card-body\">\n            <form>\n            \n              <div class=\" row\">\n                <div class=\" col-md-6 pr-md-1\">\n                  <div class=\" form-group\">\n                    <label> Quantity </label>\n                    <input\n                      class=\" form-control\"\n                      placeholder=\"package quantity\"\n                      type=\"number\"\n                      value=\"\"\n                    />\n                  </div>\n                </div>\n                \n                <div class=\" col-md-6 pl-md-1\">\n                  <div class=\" form-group\">\n                    <label> Date of Manufacture</label>\n                    <input\n                      class=\" form-control\"\n                      placeholder=\"\"\n                      type=\"datetime-local\"\n                    />\n                  </div>\n                </div>\n              </div>\n              \n            </form>\n          </div>\n          <div class=\" card-footer\">\n            <button class=\" btn btn-fill btn-round\" type=\"submit\">Generate</button>\n          </div>\n        </div>\n    \n         <div class=\"terminal\" >\n           <br>\n           \n            <pre >983249809985923</pre>\n            \n        </div>\n    \n      </div>\n    \n\n  </div>\n\n \n    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/typography/typography.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/typography/typography.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-md-12\">\n      <div class=\" card\">\n        <div class=\" card-header mb-5\">\n          <h5 class=\" card-category\">Black Table Heading</h5>\n          <h3 class=\" card-title\">Created using Poppins Font Family</h3>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" typography-line\">\n            <h1><span> Header 1 </span> The Life of Black Dashboard</h1>\n          </div>\n          <div class=\" typography-line\">\n            <h2><span> Header 2 </span> The Life of Black Dashboard</h2>\n          </div>\n          <div class=\" typography-line\">\n            <h3><span> Header 3 </span> The Life of Black Dashboard</h3>\n          </div>\n          <div class=\" typography-line\">\n            <h4><span> Header 4 </span> The Life of Black Dashboard</h4>\n          </div>\n          <div class=\" typography-line\">\n            <h5><span> Header 5 </span> The Life of Black Dashboard</h5>\n          </div>\n          <div class=\" typography-line\">\n            <h6><span> Header 6 </span> The Life of Black Dashboard</h6>\n          </div>\n          <div class=\" typography-line\">\n            <p>\n              <span> Paragraph </span> I will be the leader of a company that\n              ends up being worth billions of dollars, because I got the\n              answers. I understand culture. I am the nucleus. I think thatâs a\n              responsibility that I have, to push possibilities, to show people,\n              this is the level that things could be at.\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Quote </span>\n            <blockquote>\n              <p class=\" blockquote blockquote-danger\">\n                \"I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers. I understand\n                culture. I am the nucleus. I think that's a responsibility that\n                I have, to push possibilities, to show people, this is the level\n                that things could be at.\" <br />\n\n                <br />\n\n                <small> - Noaa </small>\n              </p>\n            </blockquote>\n          </div>\n          <div class=\" typography-line\">\n            <span> Muted Text </span>\n            <p class=\" text-muted\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Primary Text </span>\n            <p class=\" text-primary\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Info Text </span>\n            <p class=\" text-info\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Success Text </span>\n            <p class=\" text-success\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Warning Text </span>\n            <p class=\" text-warning\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Danger Text </span>\n            <p class=\" text-danger\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <h2>\n              <span> Small Tag </span> Header with small subtitle <br />\n\n              <small> Use \"small\" tag for the headers </small>\n            </h2>\n          </div>\n          <div class=\" typography-line\">\n            <span> Lists </span>\n            <div class=\" row\">\n              <div class=\" col-md-3\">\n                <h5>Unordered List</h5>\n                <ul>\n                  <li>List Item</li>\n                  <li>List Item</li>\n                  <li class=\" list-unstyled\">\n                    <ul>\n                      <li>List Item</li>\n                      <li>List Item</li>\n                      <li>List Item</li>\n                    </ul>\n                  </li>\n                  <li>List Item</li>\n                </ul>\n              </div>\n              <div class=\" col-md-3\">\n                <h5>Ordered List</h5>\n                <ol>\n                  <li>List Item</li>\n                  <li>List Item</li>\n                  <li>List item</li>\n                  <li>List Item</li>\n                </ol>\n              </div>\n              <div class=\" col-md-3\">\n                <h5>Unstyled List</h5>\n                <ul class=\" list-unstyled\">\n                  <li>List Item</li>\n                  <li>List Item</li>\n                  <li>List item</li>\n                  <li>List Item</li>\n                </ul>\n              </div>\n              <div class=\" col-md-3\">\n                <h5>Inline List</h5>\n                <ul class=\" list-inline\">\n                  <li class=\" list-inline-item\">List1</li>\n                  <li class=\" list-inline-item\">List2</li>\n                  <li class=\" list-inline-item\">List3</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\" typography-line\">\n            <span> Code </span>\n            <p>\n              This is <code> .css-class-as-code </code> , an example of an\n              inline code element. Wrap inline code within a\n              <code> <code>...</code> </code> tag.\n            </p>\n            <pre>\n1. #This is an example of preformatted text.<br>\n\n2. #Here is another line of code\n</pre>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/user/user.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \n<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-md-8\">\n      <div class=\" card\">\n        <div class=\" card-header\"><h5 class=\" title\">Edit Profile</h5></div>\n        <div class=\" card-body\">\n          <form>\n            <div class=\" row\">\n              <div class=\" col-md-5 pr-md-1\">\n                <div class=\" form-group\">\n                  <label> Company (disabled) </label>\n                  <input\n                    class=\" form-control\"\n                    disabled=\"\"\n                    placeholder=\"Company\"\n                    type=\"text\"\n                    value=\"Creative Code Inc.\"\n                  />\n                </div>\n              </div>\n              <div class=\" col-md-3 px-md-1\">\n                <div class=\" form-group\">\n                  <label> Username </label>\n                  <input\n                    class=\" form-control\"\n                    placeholder=\"Username\"\n                    type=\"text\"\n                    value=\"michael23\"\n                  />\n                </div>\n              </div>\n              <div class=\" col-md-4 pl-md-1\">\n                <div class=\" form-group\">\n                  <label for=\"exampleInputEmail1\"> Email address </label>\n                  <input\n                    class=\" form-control\"\n                    placeholder=\"mike@email.com\"\n                    type=\"email\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\" row\">\n              <div class=\" col-md-6 pr-md-1\">\n                <div class=\" form-group\">\n                  <label> First Name </label>\n                  <input\n                    class=\" form-control\"\n                    placeholder=\"Company\"\n                    type=\"text\"\n                    value=\"Mike\"\n                  />\n                </div>\n              </div>\n              <div class=\" col-md-6 pl-md-1\">\n                <div class=\" form-group\">\n                  <label> Last Name </label>\n                  <input\n                    class=\" form-control\"\n                    placeholder=\"Last Name\"\n                    type=\"text\"\n                    value=\"Andrew\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\" row\">\n              <div class=\" col-md-12\">\n                <div class=\" form-group\">\n                  <label> Address </label>\n                  <input\n                    class=\" form-control\"\n                    placeholder=\"Home Address\"\n                    type=\"text\"\n                    value=\"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\" row\">\n              <div class=\" col-md-4 pr-md-1\">\n                <div class=\" form-group\">\n                  <label> City </label>\n                  <input\n                    class=\" form-control\"\n                    placeholder=\"City\"\n                    type=\"text\"\n                    value=\"Mike\"\n                  />\n                </div>\n              </div>\n              <div class=\" col-md-4 px-md-1\">\n                <div class=\" form-group\">\n                  <label> Country </label>\n                  <input\n                    class=\" form-control\"\n                    placeholder=\"Country\"\n                    type=\"text\"\n                    value=\"Andrew\"\n                  />\n                </div>\n              </div>\n              <div class=\" col-md-4 pl-md-1\">\n                <div class=\" form-group\">\n                  <label> Postal Code </label>\n                  <input\n                    class=\" form-control\"\n                    placeholder=\"ZIP Code\"\n                    type=\"number\"\n                  />\n                </div>\n              </div>\n            </div>\n            <div class=\" row\">\n              <div class=\" col-md-8\">\n                <div class=\" form-group\">\n                  <label> About Me </label>\n                  <textarea\n                    class=\" form-control\"\n                    cols=\"80\"\n                    placeholder=\"Here can be your description\"\n                    rows=\"4\"\n                    value=\"Mike\"\n                  >\nLamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\n</textarea\n                  >\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n        <div class=\" card-footer\">\n          <button class=\" btn btn-fill btn-danger\" type=\"submit\">Save</button>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-md-4\">\n      <div class=\" card card-user\">\n        <div class=\" card-body\">\n          <p class=\" card-text\"></p>\n          <div class=\" author\">\n            <div class=\" block block-one\"></div>\n            <div class=\" block block-two\"></div>\n            <div class=\" block block-three\"></div>\n            <div class=\" block block-four\"></div>\n            <a href=\"javascript:void(0)\">\n              <img alt=\"...\" class=\" avatar\" src=\"assets/img/emilyz.jpg\" />\n\n              <h5 class=\" title\">Mike Andrew</h5>\n            </a>\n            <p class=\" description\">Ceo/Co-Founder</p>\n          </div>\n          <div class=\" card-description\">\n            Do not be scared of the truth because we need to restart the human\n            foundation in truth And I love you like Kanye loves Kanye I love\n            Rick Owens’ bed design but the back is...\n          </div>\n        </div>\n        <div class=\" card-footer\">\n          <div class=\" button-container\">\n            <button\n              class=\" btn btn-icon btn-round btn-facebook\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\" fab fa-facebook\"> </i>\n            </button>\n            <button\n              class=\" btn btn-icon btn-round btn-twitter\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\" fab fa-twitter\"> </i>\n            </button>\n            <button\n              class=\" btn btn-icon btn-round btn-google\"\n              href=\"javascript:void(0)\"\n            >\n              <i class=\" fab fa-google-plus\"> </i>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<!----------------------------------------------------------------------------------------------------------------------------------------->\n<!----------------------------------------------------------------------------------------------------------------------------------------->\n\n\n<div class=\" content\">\n  \n\n  <div class=\" row\">\n      <!------------------------------------------------------------------------------------------------>\n      <!------------------------------------------------------------------------------------------------>\n      <div class=\" card\">\n        <div class=\" card-header\"><h5 class=\" title\">Create Product </h5></div>\n        <div class=\" card-body\">\n          <form>\n            <!------------------------------------------------------------------------------------------------>\n            <div class=\" row\">\n                <div class=\" col-md-12\">\n                  <div class=\" form-group\">\n                    <label> Product Name </label>\n                    <input\n                      class=\" form-control\"\n                      placeholder=\"Product Name\"\n                      type=\"text\"\n                      value=\"\"\n                    />\n                  </div>\n                </div>\n              </div>\n              <div class=\" row\">\n                  <div class=\" col-md-8\">\n                    <div class=\" form-group\">\n                      <label> Product Description </label>\n                      <textarea\n                        class=\" form-control\"\n                        cols=\"80\"\n                        placeholder=\"Here can be your description\"\n                        rows=\"4\"\n                        value=\"\">\n                        \n                      </textarea                >\n                    </div>\n                  </div>\n                </div>\n           \n            <div class=\" row\">\n                <div class=\" col-md-4 pr-md-1\">\n                  <div class=\" form-group\">\n                    <label> Product Type </label>\n                    <input\n                      class=\" form-control\"\n                      placeholder=\"Product Type\"\n                      type=\"text\"\n                      value=\"\"\n                    />\n                  </div>\n                </div>\n                <div class=\" col-md-4 px-md-1\">\n                  <div class=\" form-group\">\n                    <label> Net Weight </label>\n                    <input\n                      class=\" form-control\"\n                      placeholder=\"Net Weight\"\n                      type=\"number\"\n                      value=\"\"\n                    />\n                  </div>\n                </div>\n                <div class=\" col-md-4 pl-md-1\">\n                  <div class=\" form-group\">\n                    <label> Package Type</label>\n                    <input\n                      class=\" form-control\"\n                      placeholder=\"\"\n                      type=\"text\"\n                    />\n                  </div>\n                </div>\n              </div>\n\n          <div class=\" row\">\n            <div class=\" col-md-6 pr-md-1\">\n              <div class=\" form-group\">\n                <label> Product Price</label>\n                <input\n                  class=\" form-control\"\n                  placeholder=\"press enter after input\"\n                  type=\"number\"\n                  value=\"\"\n                  name=\"productPrice\"\n                  onsearch=\"calculatetax()\"\n                />\n              </div>\n            </div>\n            \n            <div class=\" col-md-6 pl-md-1\">\n              <div class=\" form-group\">\n                <label> Taxed amount</label>\n                <input\n                  class=\" form-control\"\n                  placeholder=\"\"\n                  type=\"number\"\n                  name=\"tax\"\n                  disabled/>\n              </div>\n            </div>\n            <script>\n                function calculatetax() {\n                    var productPrice = document.getElementById('productPrice').value;\n                    \n                    var taxes = (0.16 * productPrice) * (quantity) ;\n                    var totalTax = document.getElementById('tax');\n                    totalTax.value = taxes;\n                }\n            </script>\n\n            \n          </div>\n\n          <button type=\"button\" rel=\"tooltip\" class=\"btn btn-primary\">\n            <i class=\"material-icons\">CREATE</i>\n          </button>\n  \n      </form>\n      </div>\n    </div>\n</div>\n\n\n<!----------------------------------------------------------------------------------------------------------------------------------------->\n<!----------------------------------------------------------------------------------------------------------------------------------------->"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.module.ts ***!
  \*************************************************************/
/*! exports provided: AdminLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutModule", function() { return AdminLayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-layout.routing */ "./src/app/layouts/admin-layout/admin-layout.routing.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/icons/icons.component */ "./src/app/pages/icons/icons.component.ts");
/* harmony import */ var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/map/map.component */ "./src/app/pages/map/map.component.ts");
/* harmony import */ var _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pages/notifications/notifications.component */ "./src/app/pages/notifications/notifications.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pages/tables/tables.component */ "./src/app/pages/tables/tables.component.ts");
/* harmony import */ var _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pages/typography/typography.component */ "./src/app/pages/typography/typography.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pages/create-product/create-product.component */ "./src/app/pages/create-product/create-product.component.ts");
/* harmony import */ var _pages_batch_history_batch_history_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../pages/batch-history/batch-history.component */ "./src/app/pages/batch-history/batch-history.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");














// import { RtlComponent } from "../../pages/rtl/rtl.component";
// import { LandingComponent } from '../../pages/landing/landing.component';




var AdminLayoutModule = /** @class */ (function () {
    function AdminLayoutModule() {
    }
    AdminLayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_admin_layout_routing__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            ],
            declarations: [
                // LandingComponent,
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _pages_user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_12__["TablesComponent"],
                _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_8__["IconsComponent"],
                _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_13__["TypographyComponent"],
                _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_10__["NotificationsComponent"],
                _pages_map_map_component__WEBPACK_IMPORTED_MODULE_9__["MapComponent"],
                _pages_products_products_component__WEBPACK_IMPORTED_MODULE_14__["ProductsComponent"],
                _pages_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_15__["CreateProductComponent"],
                _pages_batch_history_batch_history_component__WEBPACK_IMPORTED_MODULE_16__["BatchHistoryComponent"]
                // RtlComponent
            ]
        })
    ], AdminLayoutModule);
    return AdminLayoutModule;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.routing.ts ***!
  \**************************************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/icons/icons.component */ "./src/app/pages/icons/icons.component.ts");
/* harmony import */ var _pages_map_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/map/map.component */ "./src/app/pages/map/map.component.ts");
/* harmony import */ var _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/notifications/notifications.component */ "./src/app/pages/notifications/notifications.component.ts");
/* harmony import */ var _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/user/user.component */ "./src/app/pages/user/user.component.ts");
/* harmony import */ var _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/tables/tables.component */ "./src/app/pages/tables/tables.component.ts");
/* harmony import */ var _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/typography/typography.component */ "./src/app/pages/typography/typography.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/products/products.component */ "./src/app/pages/products/products.component.ts");
/* harmony import */ var _pages_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/create-product/create-product.component */ "./src/app/pages/create-product/create-product.component.ts");
/* harmony import */ var _pages_batch_history_batch_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/batch-history/batch-history.component */ "./src/app/pages/batch-history/batch-history.component.ts");










// import { RtlComponent } from "../../pages/rtl/rtl.component";
var AdminLayoutRoutes = [
    { path: "dashboard", component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
    { path: "icons", component: _pages_icons_icons_component__WEBPACK_IMPORTED_MODULE_1__["IconsComponent"] },
    { path: "maps", component: _pages_map_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"] },
    { path: "notifications", component: _pages_notifications_notifications_component__WEBPACK_IMPORTED_MODULE_3__["NotificationsComponent"] },
    { path: "user", component: _pages_user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"] },
    { path: "tables", component: _pages_tables_tables_component__WEBPACK_IMPORTED_MODULE_5__["TablesComponent"] },
    { path: "typography", component: _pages_typography_typography_component__WEBPACK_IMPORTED_MODULE_6__["TypographyComponent"] },
    { path: "products", component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"] },
    { path: "create-product", component: _pages_create_product_create_product_component__WEBPACK_IMPORTED_MODULE_8__["CreateProductComponent"] },
    { path: "batch-history", component: _pages_batch_history_batch_history_component__WEBPACK_IMPORTED_MODULE_9__["BatchHistoryComponent"] }
    // { path: "rtl", component: RtlComponent }
];


/***/ }),

/***/ "./src/app/pages/batch-history/batch-history.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/batch-history/batch-history.component.ts ***!
  \****************************************************************/
/*! exports provided: BatchHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchHistoryComponent", function() { return BatchHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BatchHistoryComponent = /** @class */ (function () {
    function BatchHistoryComponent() {
    }
    BatchHistoryComponent.prototype.ngOnInit = function () {
    };
    BatchHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-batch-history',
            template: __webpack_require__(/*! raw-loader!./batch-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/batch-history/batch-history.component.html")
            // styleUrls: ['./batch-history.component.scss']
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BatchHistoryComponent);
    return BatchHistoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/create-product/create-product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/create-product/create-product.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProductComponent", function() { return CreateProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateProductComponent = /** @class */ (function () {
    function CreateProductComponent() {
    }
    CreateProductComponent.prototype.ngOnInit = function () {
    };
    CreateProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-product',
            template: __webpack_require__(/*! raw-loader!./create-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/create-product/create-product.component.html")
            // styleUrls: ['./create-product.component.scss']
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateProductComponent);
    return CreateProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.clicked = true;
        this.clicked1 = false;
        this.clicked2 = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var gradientChartOptionsConfigurationWithTooltipBlue = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#2380f7"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#2380f7"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipPurple = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(225,78,202,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipRed = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(233,32,16,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9a9a9a"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipOrange = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 50,
                            suggestedMax: 110,
                            padding: 20,
                            fontColor: "#ff8a76"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(220,53,69,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#ff8a76"
                        }
                    }]
            }
        };
        var gradientChartOptionsConfigurationWithTooltipGreen = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.0)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 50,
                            suggestedMax: 125,
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }],
                xAxes: [{
                        barPercentage: 1.6,
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(0,242,195,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }]
            }
        };
        var gradientBarChartConfiguration = {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
            },
            responsive: true,
            scales: {
                yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            suggestedMin: 60,
                            suggestedMax: 120,
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }],
                xAxes: [{
                        gridLines: {
                            drawBorder: false,
                            color: 'rgba(29,140,248,0.1)',
                            zeroLineColor: "transparent",
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "#9e9e9e"
                        }
                    }]
            }
        };
        this.canvas = document.getElementById("chartLineRed");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
        gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
        var data = {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            datasets: [{
                    label: "Data",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#ec250d',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#ec250d',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#ec250d',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [80, 100, 70, 80, 120, 80],
                }]
        };
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.ctx, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipRed
        });
        this.canvas = document.getElementById("chartLineGreen");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
        gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); //green colors
        gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); //green colors
        var data = {
            labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
            datasets: [{
                    label: "My First dataset",
                    fill: true,
                    backgroundColor: gradientStroke,
                    borderColor: '#00d6b4',
                    borderWidth: 2,
                    borderDash: [],
                    borderDashOffset: 0.0,
                    pointBackgroundColor: '#00d6b4',
                    pointBorderColor: 'rgba(255,255,255,0)',
                    pointHoverBackgroundColor: '#00d6b4',
                    pointBorderWidth: 20,
                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 15,
                    pointRadius: 4,
                    data: [90, 27, 60, 12, 80],
                }]
        };
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.ctx, {
            type: 'line',
            data: data,
            options: gradientChartOptionsConfigurationWithTooltipGreen
        });
        var chart_labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        this.datasets = [
            [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
            [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
            [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
        ];
        this.data = this.datasets[0];
        this.canvas = document.getElementById("chartBig1");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
        gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); //red colors
        var config = {
            type: 'line',
            data: {
                labels: chart_labels,
                datasets: [{
                        label: "My First dataset",
                        fill: true,
                        backgroundColor: gradientStroke,
                        borderColor: '#ec250d',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: '#ec250d',
                        pointBorderColor: 'rgba(255,255,255,0)',
                        pointHoverBackgroundColor: '#ec250d',
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: this.data,
                    }]
            },
            options: gradientChartOptionsConfigurationWithTooltipRed
        };
        this.myChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.ctx, config);
        this.canvas = document.getElementById("CountryChart");
        this.ctx = this.canvas.getContext("2d");
        var gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
        gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
        gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); //blue colors
        var myChart = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.ctx, {
            type: 'bar',
            responsive: true,
            legend: {
                display: false
            },
            data: {
                labels: ['USA', 'GER', 'AUS', 'UK', 'RO', 'BR'],
                datasets: [{
                        label: "Countries",
                        fill: true,
                        backgroundColor: gradientStroke,
                        hoverBackgroundColor: gradientStroke,
                        borderColor: '#1f8ef1',
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        data: [53, 20, 10, 80, 100, 45],
                    }]
            },
            options: gradientBarChartConfiguration
        });
    };
    DashboardComponent.prototype.updateOptions = function () {
        this.myChartData.data.datasets[0].data = this.data;
        this.myChartData.update();
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/dashboard/dashboard.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/icons/icons.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/icons/icons.component.ts ***!
  \************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () { };
    IconsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-icons",
            template: __webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/icons/icons.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/pages/map/map.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/map/map.component.ts ***!
  \********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#1d2c4d"
                        }]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#8ec3b9"
                        }]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#1a3646"
                        }]
                },
                {
                    "featureType": "administrative.country",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#4b6878"
                        }]
                },
                {
                    "featureType": "administrative.land_parcel",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#64779e"
                        }]
                },
                {
                    "featureType": "administrative.province",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#4b6878"
                        }]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#334e87"
                        }]
                },
                {
                    "featureType": "landscape.natural",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#023e58"
                        }]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#283d6a"
                        }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#6f9ba5"
                        }]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#1d2c4d"
                        }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#023e58"
                        }]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#3C7680"
                        }]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#304a7d"
                        }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#98a5be"
                        }]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#1d2c4d"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#2c6675"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#9d2a80"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#9d2a80"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#b0d5ce"
                        }]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#023e58"
                        }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#98a5be"
                        }]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#1d2c4d"
                        }]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#283d6a"
                        }]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#3a4762"
                        }]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                            "color": "#0e1626"
                        }]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#4e6d70"
                        }]
                }
            ]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-map",
            template: __webpack_require__(/*! raw-loader!./map.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/map/map.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/pages/notifications/notifications.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/notifications/notifications.component.ts ***!
  \****************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(toastr) {
        this.toastr = toastr;
        this.staticAlertClosed = false;
        this.staticAlertClosed1 = false;
        this.staticAlertClosed2 = false;
        this.staticAlertClosed3 = false;
        this.staticAlertClosed4 = false;
        this.staticAlertClosed5 = false;
        this.staticAlertClosed6 = false;
        this.staticAlertClosed7 = false;
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var color = Math.floor((Math.random() * 5) + 1);
        switch (color) {
            case 1:
                this.toastr.info('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 2:
                this.toastr.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 3:
                this.toastr.warning('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-warning alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 4:
                this.toastr.error('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: "alert alert-danger alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            case 5:
                this.toastr.show('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Welcome to <b>Black Dashboard Angular</b> - a beautiful freebie for every web developer.', '', {
                    disableTimeOut: true,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-primary alert-with-icon",
                    positionClass: 'toast-' + from + '-' + align
                });
                break;
            default:
                break;
        }
    };
    NotificationsComponent.prototype.ngOnInit = function () { };
    NotificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notifications",
            template: __webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/notifications/notifications.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/tables/tables.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tables/tables.component.ts ***!
  \**************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
    }
    TablesComponent.prototype.ngOnInit = function () { };
    TablesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-tables",
            template: __webpack_require__(/*! raw-loader!./tables.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tables/tables.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/pages/typography/typography.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/typography/typography.component.ts ***!
  \**********************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-typography",
            template: __webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/typography/typography.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/pages/user/user.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-user",
            template: __webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/user/user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-admin-layout-admin-layout-module.js.map