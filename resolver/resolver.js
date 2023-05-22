

const resolvers = {
     Query: {
          users: async (_, __, { connection }) => {
               const query = `SELECT DISTINCT travelbooking_api.users.first_name, travelbooking_api.users.last_name, travelbooking_api.users.dob, travelbooking_api.booking_info.representative_email  
               FROM travelbooking_api.booking_info 
               INNER JOIN travelbooking_api.users 
               ON travelbooking_api.booking_info.representative_email = travelbooking_api.users.representative_email 
               WHERE travelbooking_api.booking_info.representative_email = 'tsizip@gmail.com';`;
               const [rows] = await connection.query(query);
               return rows;
               // console.log(rows)
          },
     },
     Mutation: {
          getUser: async (_, { representativeEmail }, { connection }) => {
               const query = `SELECT DISTINCT travelbooking_api.users.first_name, travelbooking_api.users.last_name, travelbooking_api.users.dob, travelbooking_api.booking_info.representative_email, travelbooking_api.users.user_type, travelbooking_api.users.dob, travelbooking_api.users.nationaly, travelbooking_api.users.user_name  
               FROM travelbooking_api.booking_info 
               INNER JOIN travelbooking_api.users 
               ON travelbooking_api.booking_info.representative_email = travelbooking_api.users.representative_email 
               WHERE travelbooking_api.booking_info.representative_email = '${representativeEmail}';`;
               const [rows] = await connection.query(query);
               return rows;
               // console.log(rows)
          },
          deleteUserById: async (_, { id }, { connection }) => {
               const query1 = await `SELECT travelbooking_api.booking_info.representative_email FROM travelbooking_api.booking_info where id='${id}';`;
               const [rows] = await connection.query(query1);
               // console.log(rows[0].representative_email)
               const query2 = await `delete from travelbooking_api.users where representative_email='${rows[0].representative_email}';`
               await connection.query(query2)

               const query3 = await `delete from travelbooking_api.booking_info where id='${id}';`
               await connection.query(query3)

               return true
               // return rows;
          },
          insertUserTable: async (_, { representative_email, user_type, user_name, first_name, last_name, dob, nationaly }, { connection }) => {
               const query1 = await `insert into travelbooking_api.users (representative_email, user_type, user_name, first_name, last_name, dob, nationaly) values (
                    "${representative_email}",
                    "${user_type}",
                    "${user_name}",
                    "${first_name}",
                    "${last_name}",
                    "${dob}",
                    "${nationaly}"
               );`;
               const [rows] = await connection.query(query1);
               // console.log(rows[0].representative_email)


               if (rows) {
                    console.log(true)
               }
               // return rows;
          },
          insertBookingInfoTable: async (_, { id, representative_name, representative_phone, representative_email, passenger_count, booking_date, seat_class, update_at, booking_status }, { connection }) => {
               const query1 = await `insert into travelbooking_api.booking_info (id, representative_name, representative_phone, representative_email, passenger_count, booking_date, seat_class, update_at, booking_status) values (
                    "${id}",
                    "${representative_name}",
                    "${representative_phone}",
                    "${representative_email}",
                    "${passenger_count}",
                    "${booking_date}",
                    "${seat_class}",
                    "${update_at}",
                    "${booking_status}"
               );`;
               const [rows] = await connection.query(query1);
               // console.log(rows[0].representative_email)


               if (rows) {
                    console.log(true)
               }
               // return rows;
          },

          insertBookingTransactionTable: async (_, { id, cashier_name, discount_code, discount_reason, total_price, create_at, update_at },{ connection }) => {
               const query1 = await `insert into travelbooking_api.booking_transaction (id, cashier_name, discount_code, discount_reason, total_price, create_at, update_at) values (
                    "${id}",
                    "${cashier_name}",
                    "${discount_code}",
                    "${discount_reason}",
                    "${total_price}",
                    "${create_at}",
                    "${update_at}"
               );`;
               const [rows] = await connection.query(query1);
               // console.log(rows[0].representative_email)


               if (rows) {
                    console.log(true)
               }
               // return rows;
          },

          insertPaymentMethodsTable: async (_, { id, status_payment },{ connection }) => {
               const query1 = await `insert into travelbooking_api.payment_methods (id, status_payment) values (
                    "${id}",
                    "${status_payment}"
               );`;
               const [rows] = await connection.query(query1);
               // console.log(rows[0].representative_email)
               if (rows) {
                    console.log(true)
               }
               // return rows;
          },
          insertApiKeysTable:async (_, { id, payment_name, create_at, update_at },{ connection }) => {
               const query1 = await `insert into travelbooking_api.api_key (id, payment_name, create_at, update_at) values (
                    "${id}",
                    "${payment_name}",
                    "${create_at}",
                    "${update_at}"
               );`;
               const [rows] = await connection.query(query1);
               // console.log(rows[0].representative_email)
               if (rows) {
                    console.log(true)
               }
               // return rows;
          },

          flightsTable:async (_, {id, fligth_type, depature_airport, arrival_airport, depature_time, arrival_time, create_at, update_at, flight_status}, {connection}) => {
               const query1 = await `insert into travelbooking_api.flights (id, fligth_type, depature_airport, arrival_airport, depature_time, arrival_time, create_at, update_at, flight_status) values (
                    "${id}",
                    "${fligth_type}",
                    "${depature_airport}",
                    "${arrival_airport}",
                    "${depature_time}",
                    "${arrival_time}",
                    "${create_at}",
                    "${update_at}",
                    "${flight_status}"
               );`;
               const [rows] = await connection.query(query1);
               // console.log(rows[0].representative_email)
               if (rows) {
                    console.log(true)
                    return true
               } else {
                    console.log(false)
                    return false
               }
               // return rows;
          },

     }
     // Mutation: {
     //      createUser: async (_, { id, namee }, { connection }) => {
     //           // console.log('dât', name, email)
     //           const query = `INSERT INTO graphQL (id, namee) VALUES (?,?)`;
     //           // await connection.query(query,[id, namee]);
     //           const [result] = await connection.query(query, [id, namee]);
     //           // console.log(result)
     //           const insertedUserId = result.insertId;


     //           // Truy vấn dữ liệu người dùng mới đã được tạo
     //           const selectQuery = 'select * from travelbooking_api.graphQL where id= ?';
     //           const [userRows] = await connection.query(selectQuery, [id]);

     //           return userRows[0];
     //      },
     // },\

};
module.exports = resolvers