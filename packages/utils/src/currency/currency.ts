import currency from 'currency.js'

export class Currency {
  public value: number

  constructor(value: number | string) {
    if (typeof value === 'string' && value.includes(',')) {
      this.value = Number.parseFloat(value.replace(',', '.'))
    } else {
      this.value = value as number
    }
  }

  add(value: number): Currency {
    this.value = currency(this.value).add(value).value
    return this
  }

  subtract(value: number): Currency {
    this.value = currency(this.value).subtract(value).value
    return this
  }

  multiply(value: number): Currency {
    this.value = currency(this.value).multiply(value).value
    return this
  }

  divide(value: number): Currency {
    this.value = currency(this.value).divide(value).value
    return this
  }

  distribute(value: number): Array<number> {
    const distribute = currency(this.value).distribute(value)
    return distribute.map((item) => item.value)
  }

  format(): string {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(this.value)
  }
}
