class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));

  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card ">
      <div id="frame-image">
        <img src="${this.image.slice(8)}" class="card-img-top img-fluid" alt="${this.manufacture}" style=" height: 160px; object-fit: cover;">
      </div>
      <div class="card-body bg-transparent " style="height:300px">
        <h5 class="card-title">${this.manufacture} ${this.model}</h5>
        <h4 class="card-text">Rp ${this.rentPerDay} / hari </h4>
        <p class="card-text">${this.description}</p>
        <ul>
            <li>${this.capacity} orang</li>
            <li>${this.transmission}</li>
            <li> Tahun ${this.year} </li>
        </ul>
      </div>
      <div class="card-footer text-center bg-transparent ">
        <button class="btn btn-success btn-block pilih_mobil" type="button" >Pilih Mobil</button>
      </div>
    </div>
  `;
  }
}
