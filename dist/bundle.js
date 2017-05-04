/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item = (function () {
    function Item(name, effect) {
        this.name = name;
        this.effect = effect;
    }
    Item.prototype.toString = function () {
        return this.name;
    };
    return Item;
}());
exports.default = Item;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(0);
var Armor = (function (_super) {
    __extends(Armor, _super);
    function Armor(name, defense) {
        var _this = _super.call(this, name, function (target) { return target; }) || this;
        _this.name = name;
        _this.defense = defense;
        return _this;
    }
    Armor.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " (DEF +" + this.defense + ")";
    };
    return Armor;
}(Item_1.default));
exports.default = Armor;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = __webpack_require__(8);
var Bag = (function () {
    function Bag(items) {
        this.items = items;
    }
    Bag.prototype.toString = function () {
        var _this = this;
        var buffer = Object
            .keys(this.items)
            .map(function (key) { return "\n* " + _this.items[key].item.toString() + " "
            + ("x" + _this.items[key].amount); })
            .join('');
        return "Bag: " + buffer + "\n";
    };
    // actions
    Bag.prototype.add = function (item) {
        if (this.items.hasOwnProperty(item.name)) {
            this.items[item.name].amount++;
        }
        else {
            this.items[item.name] = new Stack_1.default(item, 1);
        }
        return this;
    };
    Bag.prototype.remove = function (item) {
        if (this.items.hasOwnProperty(item.name)) {
            if (this.items[item.name].amount > 1) {
                this.items[item.name].amount--;
            }
            else {
                delete this.items[item.name];
            }
        }
        return this;
    };
    return Bag;
}());
exports.default = Bag;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(0);
var Food = (function (_super) {
    __extends(Food, _super);
    function Food(name, bonus) {
        var _this = _super.call(this, name, function (target) { return _this.heal(target); }) || this;
        _this.name = name;
        _this.bonus = bonus;
        return _this;
    }
    Food.prototype.heal = function (target) {
        target.stats.health += this.bonus;
        return target;
    };
    Food.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " (HP +" + this.bonus + ")";
    };
    return Food;
}(Item_1.default));
exports.default = Food;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Person = (function () {
    function Person(name, stats, weapon, armor, bag) {
        this.name = name;
        this.stats = stats;
        this.weapon = weapon;
        this.armor = armor;
        this.bag = bag;
        this.globalAttack = stats.attack + weapon.attack;
        this.globalDefense = stats.defense + armor.defense;
        this.baseWeapon = weapon;
        this.baseArmor = armor;
    }
    Person.prototype.toString = function () {
        return this.name + ": " + this.stats.toString()
            + ("\nEquiped with a " + this.weapon.toString() + " ")
            + ("and a " + this.armor.toString() + "\n" + this.bag.toString());
    };
    // actions
    Person.prototype.hit = function (target) {
        var damage = this.globalAttack - target.globalDefense;
        if (damage > 0) {
            target.stats.health -= damage;
        }
        return target;
    };
    Person.prototype.eat = function (food) {
        this.bag.remove(food);
        food.heal(this);
        return this;
    };
    return Person;
}());
exports.default = Person;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stats = (function () {
    function Stats(attack, defense, health) {
        this.attack = attack;
        this.defense = defense;
        this.health = health;
    }
    Stats.prototype.toString = function () {
        return "ATK " + this.attack + " / DEF " + this.defense + " / HP " + this.health;
    };
    return Stats;
}());
exports.default = Stats;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = __webpack_require__(0);
var Weapon = (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, attack) {
        var _this = _super.call(this, name, function (target) { return target; }) || this;
        _this.name = name;
        _this.attack = attack;
        return _this;
    }
    Weapon.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " (ATK +" + this.attack + ")";
    };
    return Weapon;
}(Item_1.default));
exports.default = Weapon;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Person_1 = __webpack_require__(4);
var Weapon_1 = __webpack_require__(6);
var Armor_1 = __webpack_require__(1);
var Bag_1 = __webpack_require__(2);
var Food_1 = __webpack_require__(3);
var Stats_1 = __webpack_require__(5);
var itemBank = {
    // weapons
    kick: new Weapon_1.default('kick', 1),
    punch: new Weapon_1.default('punch', 1),
    // armors
    pants: new Armor_1.default('leather pants', 1),
    shirt: new Armor_1.default('sleeveless shirt', 1),
    // food
    apple: new Food_1.default('apple', 5)
};
var rhoda = new Person_1.default('Rhoda', new Stats_1.default(7, 6, 28), itemBank.kick, itemBank.pants, new Bag_1.default({}));
var lenny = new Person_1.default('Lenny', new Stats_1.default(10, 3, 33), itemBank.punch, itemBank.shirt, new Bag_1.default({}));
console.log(rhoda.toString(), lenny.toString());
console.log('Rhoda attacks Lenny!');
console.log(rhoda.hit(lenny).toString());
console.log('Rhoda picks an apple!');
console.log(rhoda.bag.add(itemBank.apple).toString());
console.log(rhoda.eat(itemBank.apple).toString());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stack = (function () {
    function Stack(item, amount) {
        this.item = item;
        this.amount = amount;
    }
    return Stack;
}());
exports.default = Stack;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map