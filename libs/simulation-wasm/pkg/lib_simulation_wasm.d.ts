/* tslint:disable */
/* eslint-disable */
export class Animal {
  private constructor();
  free(): void;
  x: number;
  y: number;
  rotation: number;
}
export class Food {
  private constructor();
  free(): void;
  x: number;
  y: number;
}
export class Simulation {
  free(): void;
  constructor();
  world(): World;
  step(): void;
  train(): string;
}
export class World {
  private constructor();
  free(): void;
  animals: (Animal)[];
  foods: (Food)[];
}
