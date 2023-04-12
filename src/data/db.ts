type RentalType = {
  startDate: Date;
  endDate: Date;
  model: Car;
  cpf: string;
};

type Car = {
  model: string;
  value: number;
};

// values in calculated per hour
export const carsModels = [
  {
    model: "Volkswagen Golf GTI",
    value: 1000,
  },
  {
    model: "Ferrari 488 GTB",
    value: 5000,
  },
  {
    model: "Lamborghini Aventador",
    value: 10000,
  },
  {
    model: "Porsche 911 Turbo",
    value: 15000,
  },
  {
    model: "Gol Quadrado",
    value: 20000,
  },
];

export const rentalList: RentalType[] = [];
