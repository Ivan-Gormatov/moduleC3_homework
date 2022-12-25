class ElectricalDevice {
    constructor (name, brand, power){
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.isPlugged = false;
    ElectricalDevice.allPower=0; // Мощность включенных приборов
}

// метод, который определяет прибор как включенный в розетку
plugIn() {
    console.log(this.name + " is plugged!");
    // считаем потребляеммую мощность всеми приборами
    ElectricalDevice.allPower=this.isPlugged ? ElectricalDevice.allPower : ElectricalDevice.allPower+this.power;
    this.isPlugged = true;
    console.log("Total connected power " + ElectricalDevice.allPower + " Wt")
  }

// метод, который определяет прибор как выключеный из розетки
unplug() {
    console.log(this.name + " is unplugged!");
    ElectricalDevice.allPower=this.isPlugged ? ElectricalDevice.allPower - this.power : ElectricalDevice.allPower;
    this.isPlugged = false;
    console.log("Total connected power " + ElectricalDevice.allPower + " Wt")
  }
}
// Прибор 1
class Puncher extends ElectricalDevice{ 
    constructor (name, brand, power, drillDiameter ) {
    super(name, brand, power);
    this.drillDiameter = drillDiameter;
    this.isPlugged = false;
  }
}

// Прибор 2
class Lamp extends ElectricalDevice {
    constructor (name, brand, power, bulbType) {
    super(name, brand, power);
    this.bulbType = bulbType;
    this.isPlugged = false;
  }
}


// экземпляры перфораторы
const bigPuncher = new Puncher("Large puncher", "Good Morning", 2000, 32);
const smallPuncher = new Puncher("Small puncher", "Friendly Neighborhood", 1000, 16);


// экземпляры лампы
const tableLamp = new Lamp("Table lamp1", "Xiaomi", 10, "LED");

// отключить лампу из розетки
tableLamp.unplug();

// включить лампу в розетку
tableLamp.plugIn();

// отключить малый перфоратор из розетки
smallPuncher.unplug();

// включить большой перфоратор в розетку
bigPuncher.plugIn();

// включить малый перфоратор в розетку
smallPuncher.plugIn();

// отключить большой перфоратор из розетки
bigPuncher.unplug();

// отключить малый перфоратор из розетки
smallPuncher.unplug();

// результат
console.log(bigPuncher);
console.log(smallPuncher);
console.log(tableLamp)

