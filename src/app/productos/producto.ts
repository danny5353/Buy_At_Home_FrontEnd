export class Producto{
    filter(arg0: (vou: any) => boolean): Producto {
      throw new Error('Method not implemented.');
    }
    productId!: number;
    productName!: string;
    detail!: string;
    model!: string;
    price!: number;
    stock!: number;
    storeAvailable!: number;
    deliveryAvailable!: number;
    image!: string;
}