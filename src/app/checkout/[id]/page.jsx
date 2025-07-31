import CheckoutForm from '@/Components/fomrs/CheckoutForm';
import React from 'react';
export default async function CheckoutPage({params}) { 
                 const detail = await params;
 const res = await fetch (`http://localhost:3000/api/service/${detail.id}`);
 const data = await res.json()
  return (
    <div>
      <CheckoutForm></CheckoutForm>
    </div>
  );
}
