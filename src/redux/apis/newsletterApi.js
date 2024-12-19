import apiService from "../api-service/api-service";

export const newsletterApi = apiService.injectEndpoints({
    endpoints: (builder) => ({
        // create a new subscriber
        subscribeNewsLetter: builder.mutation({
            query: ({email}) => ({
                url: `newsletter/subscribe`,
                method: "POST",
                body: email
            }),
        }),

        // send a email to subscribers or users
        sendEmailToSubscriberOrUsers: builder.mutation({
            query: (data) => ({
                url: `newsletter/send-email`,
                method: "POST",
                body: data
            }),
        }),

       // get all subscribers
       getAllSubscribers: builder.query({
         query: () => ({
             url: `newsletter/subscribers`
         })
     }),

        // get a spacific single subscriber by id
        getSubscriberById: builder.query({
            query: (id) => ({
                url: `newsletter/${id}`
            })
        }),
  

        // get subscriber by email
        getSubscriberByEmail: builder.query({
            query: (email) => ({
                url: `newsletter/${email}`,
            })
        }),

        // delete a subscriber by id
        deletedSubscriber: builder.mutation({
            query: (id) => ({
                url: `newsletter/${id}`,
                method: "DELETE",
            })
        }),
    }),
})