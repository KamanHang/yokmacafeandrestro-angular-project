export interface OrderItem {
    order_items_id: number;
    order_id: number;
    table_name: string;
    payment_method: string | null;
    created_at: string; // or Date if you plan to convert it to a Date object
    product_id: number;
    product_name: string;
    price: number;
    quantity: number;
    total: number;
  }