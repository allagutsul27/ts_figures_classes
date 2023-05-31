type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);

    if (longestSide >= this.b + this.c || longestSide >= this.a + this.c
      || longestSide >= this.a + this.b) {
      throw new Error('Enter a valid value');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Enter a valid value');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(s * (s - this.a) * (s - this.b)
      * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Enter a valid radius value');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Enter a valid value');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const figureArea = (figure.getArea() * 100) / 100;

  return `A ${figure.color} ${figure.shape} - ${figureArea}`;
}
