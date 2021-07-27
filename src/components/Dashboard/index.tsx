import React from "react";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

interface IRatesData {
  rates: IRateObject[];
}
interface IRateObject {
  currency: string;
  rate: string;
  __typename: string;
}

export default function Dashboard() {
  //const { loading, error, data } = useQuery<IRatesData>(EXCHANGE_RATES);
return(<div>
  Dashboard
</div>)
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error :(</p>;

  // return (
  //   <div>
  //     {data ? (
  //       data.rates.map((rateObject: IRateObject) => {
  //         console.log(rateObject);
  //         return (
  //           <div key={rateObject.currency}>
  //             <p>
  //               {rateObject.currency}: {rateObject.rate}
  //             </p>
  //           </div>
  //         );
  //       })
  //     ) : (
  //       <div></div>
  //     )}
  //   </div>
  // );
}

  
