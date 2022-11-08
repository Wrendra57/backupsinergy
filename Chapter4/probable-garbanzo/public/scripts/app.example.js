class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");

    this.driver = document.getElementById("input_driver");
    this.tanggal = document.getElementById("input_tanggal");
    this.waktu = document.getElementById("input_waktu");
    this.penumpang = document.getElementById("input_penumpang");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
  }

  run = () => {

    console.log(Car.list)
    // Car.list.forEach((car) => {
    //   const node = document.createElement("div");
    //   node.innerHTML = car.render();
    //   this.carContainerElement.appendChild(node);
    // });
    console.log(this.driver.value);
    console.log(this.tanggal.value);
    console.log(this.waktu.value);
    console.log(this.penumpang.value);
    // console.log(this.driver.value);
    // console.log(this.tanggal.value);
    // console.log(this.waktu.value);
    // console.log(this.penumpang.value);

    typeof (this.penumpang.value)
    let driver = this.driver.value;
    if (driver == "true") {
      driver = true
    } else {
      driver = false
    }

    let waktu = (this.tanggal.value + "T" + this.waktu.value);
    let inputWaktu = Date.parse(waktu);
    console.log(inputWaktu)
    let penumpang = 0;
    if (this.penumpang.value !== "" || this.penumpang.value !== null || this.penumpang.value !== undefined) {
      penumpang = this.penumpang.value
    }
    Car.list.forEach((car) => {
      console.log(driver)
      console.log(inputWaktu)
      console.log(penumpang)
      let database_Waktu = Date.parse(car.availableAt)

      if (car.available == driver && database_Waktu >= inputWaktu && car.capacity >= penumpang) {
        this.carContainerElement.className = "row";
        const node = document.createElement("div");
        node.className = "col-xl-3 col-md-6 col-sm-12 my-3"
        node.innerHTML = car.render();
        this.carContainerElement.appendChild(node);
        // console.log(car)
      }

      // if (this.driver.value === "Pilih Tipe Driver" && this.tanggal.value === "" && this.waktu.value === "" && this.penumpang.value === "") {

      //   this.carContainerElement.className = "row";
      //   const node = document.createElement("div");
      //   node.className = "col-xl-3 col-md-6 col-sm-12 my-3"
      //   node.innerHTML = car.render();
      //   this.carContainerElement.appendChild(node);
      // } else if (car.available == driver && database_Waktu >= inputWaktu && car.capacity >= penumpang) {
      //   this.carContainerElement.className = "row";
      //   const node = document.createElement("div");
      //   node.className = "col-xl-3 col-md-6 col-sm-12 my-3"
      //   node.innerHTML = car.render();
      //   this.carContainerElement.appendChild(node);
      //   // console.log(car)
      // }
    });
  };

  async load() {
    await this.clear()
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
