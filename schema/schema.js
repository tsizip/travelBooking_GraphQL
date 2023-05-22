const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    first_name: String
    last_name: String
    dob:String
    representative_email:String
    user_type:String
    nationaly:String
    user_name: String
  }

  type BookingInfo {
    id:String
    representative_name:String
    representative_phone:String
    representative_email:String
    passenger_count:String
    booking_date:String
    seat_class:String
    update_at:String
    booking_status:String
  }

  type BookingTransaction {
    id:String
    cashier_name:String
    discount_code:String
    discount_reason:String
    total_price:String
    create_at:String
    update_at:String
  }

  type PaymentMethods {
    id:String
    status_payment:String
  }
  
  type ApiKey {
    id:String
    payment_name:String
    create_at:String
    update_at:String
  }

  type Flights {
    id:String
    fligth_type:String
    depature_airport:String
    arrival_airport:String
    depature_time:String
    arrival_time:String
    create_at:String
    update_at:String
    flight_status:String
  }

  type Query {
    users: [User]
  }


  

  type Mutation {
    getUser(representativeEmail:String!): [User]

    deleteUserById(id:String!):Boolean

    insertUserTable(representative_email:String!, user_type:String!, user_name:String!, first_name:String!, last_name:String!, dob:String!, nationaly:String!): Boolean

    insertBookingInfoTable(id:String!, representative_name:String!, representative_phone:String!, representative_email:String!, passenger_count:String!, booking_date:String!, seat_class:String!, update_at:String!, booking_status:String!):Boolean

    insertBookingTransactionTable(id:String!, cashier_name:String!, discount_code:String!, discount_reason:String!, total_price:String!, create_at:String!, update_at:String!):Boolean

    insertPaymentMethodsTable(id:String!, status_payment:String!):Boolean

    insertApiKeysTable(id:String!, payment_name:String!, create_at:String!, update_at:String!):Boolean

    flightsTable(id:String!, fligth_type:String!, depature_airport:String!, arrival_airport:String!, depature_time:String!, arrival_time:String!, create_at:String!, update_at:String!, flight_status:String!):Boolean

  }
 
  
`;

module.exports = typeDefs

