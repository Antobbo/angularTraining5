/**
 * Created by antobbo on 09/01/2017.
 */
//this holds the interface to give the products array a better type other than any
export interface IProduct{
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}