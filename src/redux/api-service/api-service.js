
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiService = createApi({
     reducerPath: "api",
     baseQuery: fetchBaseQuery({
      //  this is for cpanel 
        // baseUrl: "https://aqsfoundation.org/api/v1/"
      //   vercel 
        // baseUrl: "https://aqs-server.vercel.app/api/v1/"
      // localhost
        baseUrl: "http://localhost:5001/api/v1/"
     }),
     endpoints: () => ({}),
});

export default apiService